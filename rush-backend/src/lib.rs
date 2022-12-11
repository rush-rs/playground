mod lint;
mod run;
use lint::WasmDiagnostic;
use run::{RunResult, WasmRuntimeError};
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn analyze(code: &str) -> String {
    let diagnostics = match rush_analyzer::analyze(code, "playground") {
        Ok((_, diagnostics)) => diagnostics,
        Err(diagnostics) => diagnostics,
    };

    let new_diagnostics = diagnostics
        .into_iter()
        .map(WasmDiagnostic::from)
        .collect::<Vec<WasmDiagnostic>>();

    serde_json::to_string(&new_diagnostics).expect("can always serialize diagnostics")
}

#[wasm_bindgen]
pub fn run(code: &str) -> String {
    let (program, _) = match rush_analyzer::analyze(code, "playground") {
        Ok(res) => res,
        Err(_) => {
            let res = RunResult {
                code: None,
                runtime_error: None,
            };

            return serde_json::to_string(&res).expect("can always serialize this struct");
        }
    };

    let res = match rush_interpreter_vm::run(program) {
        Ok(code) => RunResult {
            code: Some(code),
            runtime_error: None,
        },
        Err(err) => RunResult {
            code: None,
            runtime_error: Some(WasmRuntimeError::from(err)),
        },
    };

    serde_json::to_string(&res).expect("can always serialize this struct")
}
