use crate::print_diagnostics;
use rush_interpreter_vm::{RuntimeError, RuntimeErrorKind};
use serde::Serialize;
use wasm_bindgen::prelude::*;

#[derive(Serialize)]
pub enum Backend {
    Vm,
    Tree,
}

impl From<String> for Backend {
    fn from(value: String) -> Self {
        match value.as_str() {
            "vmInterpreter" => Self::Vm,
            "tree" => Self::Tree,
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
            Ok(code) => RunResult {
                code: Some(code),
                runtime_error: None,
                diagnostics: Some(print_diagnostics(&diagnostics)),
            },
            Err(err) => RunResult {
                code: None,
                runtime_error: Some(WasmRuntimeError {
                    kind: WasmRuntimeErrorKind::Unknown,
                    message: err.to_string(),
                }),
                diagnostics: Some(print_diagnostics(&diagnostics)),
            },
        },
        Backend::Vm => match rush_interpreter_vm::run::<1024>(program) {
            Ok(code) => RunResult {
                code: Some(code),
                runtime_error: None,
                diagnostics: Some(print_diagnostics(&diagnostics)),
            },
            Err(err) => RunResult {
                code: None,
                runtime_error: Some(WasmRuntimeError::from(err)),
                diagnostics: Some(print_diagnostics(&diagnostics)),
            },
        },
    };

    serde_json::to_string(&res).expect("can always serialize this struct")
}
