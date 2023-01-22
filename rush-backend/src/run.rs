use rush_interpreter_vm::{RuntimeError, RuntimeErrorKind};
use serde::Serialize;

#[derive(Serialize)]
#[serde(rename_all = "camelCase")]
pub struct RunResult {
     pub code: Option<i64>,
     pub runtime_error: Option<WasmRuntimeError>,
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
