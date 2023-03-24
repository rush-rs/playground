use crate::{print_diagnostics, run::RunResult};
use rush_compiler_risc_v::CommentConfig;
use serde::Serialize;
use wasm_bindgen::prelude::*;

#[derive(Serialize)]
#[serde(rename_all = "camelCase")]
pub struct CompileRes {
    pub failure: bool,
    pub diagnostics: Option<String>,
    pub output: Option<String>,
    pub error: Option<String>,
}

#[derive(Serialize)]
pub enum Backend {
    VmInterpreter,
    VmCompiler,
    Wasm,
    Riscv,
    X64,
}

impl From<String> for Backend {
    fn from(value: String) -> Self {
        match value.as_str() {
            "vmInterpreter" => Self::VmInterpreter,
            "vmCompiler" => Self::VmCompiler,
            "wasm" => Self::Wasm,
            "riscv" => Self::Riscv,
            "x64" => Self::X64,
            other => panic!("Cannot convert invalid string `{}` to backend", other),
        }
    }
}

#[wasm_bindgen]
pub fn compile(code: &str, backend: String) -> String {
    console_error_panic_hook::set_once();

    let (program, diagnostics) = match rush_analyzer::analyze(code, "playground") {
        Ok(res) => res,
        Err(errs) => {
            let res = RunResult {
                code: None,
                runtime_error: None,
                diagnostics: Some(crate::print_diagnostics(&errs)),
            };

            return serde_json::to_string(&res).expect("can always serialize this struct");
        }
    };

    let output = match backend.into() {
        Backend::VmInterpreter => panic!("Cannot compile using the VM interpreter"),
        Backend::VmCompiler => rush_interpreter_vm::compile(program).to_string(),
        Backend::Wasm => {
            let res = std::panic::catch_unwind(|| {
                let binary = rush_compiler_wasm::Compiler::new().compile(program);
                wasmprinter::print_bytes(binary).expect("Wasm is alwasy valid")
            });

            match res {
                Ok(output) => output,
                Err(_) => {
                    return serde_json::to_string(&CompileRes {
                        failure: true,
                        diagnostics: None,
                        output: None,
                        error: Some(
                            "Compilation of pointers is not supported for WASM".to_string(),
                        ),
                    })
                    .expect("can always serialize this struct")
                }
            }
        }
        Backend::Riscv => rush_compiler_risc_v::Compiler::new()
            .compile(program, &CommentConfig::Emit { line_width: 19 }),
        Backend::X64 => rush_compiler_x86_64::Compiler::new().compile(program),
    }
    .replace(' ', "&nbsp;")
    .replace('\n', "<br>");

    serde_json::to_string(&CompileRes {
        failure: false,
        diagnostics: if diagnostics.is_empty() {
            None
        } else {
            Some(print_diagnostics(&diagnostics))
        },
        output: Some(output),
        error: None,
    })
    .expect("can always serialize this struct")
}
