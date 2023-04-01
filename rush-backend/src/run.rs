use std::{
    error::Error,
    fmt::{self, Display, Formatter},
};

use crate::print_diagnostics;
use rush_analyzer::Diagnostic;
use rush_interpreter_vm::{RuntimeError, RuntimeErrorKind};
use serde::Serialize;
use wasm_bindgen::prelude::*;
use wasmer::{imports, Function, Instance, InstantiationError, Module, Store};

#[derive(Serialize)]
pub enum Backend {
    Vm,
    Tree,
    Wasm,
}

impl From<String> for Backend {
    fn from(value: String) -> Self {
        match value.as_str() {
            "vmInterpreter" => Self::Vm,
            "tree" => Self::Tree,
            "wasmRun" => Self::Wasm,
            other => panic!("Cannot convert invalid string `{}` to backend", other),
        }
    }
}

#[derive(Serialize)]
#[serde(rename_all = "camelCase")]
pub struct RunResult {
    pub code: Option<i64>,
    pub runtime_error: Option<WasmRuntimeError>,
    pub diagnostics: Option<String>,
}

impl RunResult {
    pub fn new_ok(code: i64, diagnostics: &[Diagnostic]) -> Self {
        Self {
            code: Some(code),
            runtime_error: None,
            diagnostics: Some(print_diagnostics(diagnostics)),
        }
    }

    pub fn new_error(message: String, diagnostics: &[Diagnostic]) -> Self {
        Self {
            code: None,
            runtime_error: Some(WasmRuntimeError {
                kind: WasmRuntimeErrorKind::Unknown,
                message,
            }),
            diagnostics: Some(print_diagnostics(diagnostics)),
        }
    }
}

#[derive(Serialize)]
pub struct WasmRuntimeError {
    pub kind: WasmRuntimeErrorKind,
    pub message: String,
}

impl From<RuntimeError> for WasmRuntimeError {
    fn from(src: RuntimeError) -> Self {
        Self {
            kind: WasmRuntimeErrorKind::from(src.kind),
            message: src.msg,
        }
    }
}

#[derive(Serialize)]
#[serde(rename_all = "camelCase")]
pub enum WasmRuntimeErrorKind {
    StackOverflow,
    Arithmetic,
    OutOfMem,
    Unknown,
}

impl From<RuntimeErrorKind> for WasmRuntimeErrorKind {
    fn from(src: RuntimeErrorKind) -> Self {
        match src {
            RuntimeErrorKind::StackOverflow => Self::StackOverflow,
            RuntimeErrorKind::Arithmetic => Self::Arithmetic,
            RuntimeErrorKind::OutOfMem => Self::OutOfMem,
        }
    }
}

#[wasm_bindgen]
pub fn run(code: &str, backend: String) -> String {
    console_error_panic_hook::set_once();

    let (program, diagnostics) = match rush_analyzer::analyze(code, "playground") {
        Ok(res) => res,
        Err(errs) => {
            let res = RunResult {
                code: None,
                runtime_error: None,
                diagnostics: Some(print_diagnostics(&errs)),
            };

            return serde_json::to_string(&res).expect("can always serialize this struct");
        }
    };

    let res = match backend.into() {
        Backend::Tree => match rush_interpreter_tree::Interpreter::new().run(program) {
            Ok(code) => RunResult::new_ok(code, &diagnostics),
            Err(err) => RunResult::new_error(err.into_owned(), &diagnostics),
        },
        Backend::Vm => match rush_interpreter_vm::run::<1024>(program) {
            Ok(code) => RunResult::new_ok(code, &diagnostics),
            Err(err) => RunResult {
                code: None,
                runtime_error: Some(WasmRuntimeError::from(err)),
                diagnostics: Some(print_diagnostics(&diagnostics)),
            },
        },
        Backend::Wasm => match rush_compiler_wasm::Compiler::new().compile(program) {
            Ok(binary) => match run_wasm(&binary) {
                Ok(code) => RunResult::new_ok(code as i64, &diagnostics),
                Err(err) => RunResult::new_error(err, &diagnostics),
            },
            Err(err) => RunResult::new_error(err, &diagnostics),
        },
    };

    serde_json::to_string(&res).expect("can always serialize this struct")
}

#[derive(Debug, Clone, Copy)]
struct ExitCode(i32);

impl Display for ExitCode {
    fn fmt(&self, f: &mut Formatter<'_>) -> fmt::Result {
        write!(f, "{}", self.0)
    }
}

impl Error for ExitCode {}

fn run_wasm(bytes: &[u8]) -> Result<i32, String> {
    let mut store = Store::default();
    let module = Module::new(&store, bytes).map_err(|_| "module compilation failed")?;
    let import_object = imports! {
        "wasi_snapshot_preview1" => {
            "proc_exit" => Function::new_typed(&mut store, wasm_exit)
        }
    };
    match Instance::new(&mut store, &module, &import_object) {
        Ok(_instance) => Ok(0),
        Err(InstantiationError::Start(runtime_err)) => match runtime_err.downcast::<ExitCode>() {
            Ok(code) => Ok(code.0),
            // the public API does not provide access to the underlying JsValue, so we extract the
            // relevant part of the message from the debug representation provided by `.message()`.
            Err(runtime_err) => Err(runtime_err
                .message()
                .split("RuntimeError:")
                .nth(1)
                .unwrap_or("unknown error")
                .trim()
                .to_owned()),
        },
        Err(err) => Err(format!("module instantiation failed: {err}")),
    }
}

fn wasm_exit(code: i32) -> Result<(), ExitCode> {
    Err(ExitCode(code))
}
