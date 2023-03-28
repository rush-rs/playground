use std::collections::BTreeMap;

use crate::{print_diagnostics, run::RunResult, theme};
use lirstings::{
    cache::DummyCache,
    language_provider::{
        anyhow::{anyhow, Result},
        Language, LanguageProvider,
    },
    log::DummyLogger,
    renderer::HtmlRenderer,
    theme::Theme,
    HighlightConfig, Mode,
};
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
    CTranspiler,
}

impl From<String> for Backend {
    fn from(value: String) -> Self {
        match value.as_str() {
            "vmInterpreter" => Self::VmInterpreter,
            "vmCompiler" => Self::VmCompiler,
            "wasm" => Self::Wasm,
            "riscv" => Self::Riscv,
            "x64" => Self::X64,
            "transpiler" => Self::CTranspiler,
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
        Backend::VmCompiler => highlight(
            rush_interpreter_vm::compile(program).to_string(),
            "s".to_string(),
        ),
        Backend::Wasm => {
            let res = std::panic::catch_unwind(|| {
                let binary = rush_compiler_wasm::Compiler::new().compile(program);
                wasmprinter::print_bytes(binary).expect("Wasm is alwasy valid")
            });

            match res {
                Ok(output) => output
                    .replace('&', "&amp;")
                    .replace('<', "&lt;")
                    .replace('>', "&gt;")
                    .replace(' ', "&nbsp;<wbr>")
                    .replace('\n', "<br>")
                    .replace('\t', "&nbsp;&nbsp;&nbsp;&nbsp;<wbr>"),
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
        Backend::Riscv => highlight(
            rush_compiler_risc_v::Compiler::new()
                .compile(program, &CommentConfig::Emit { line_width: 19 }),
            "s".to_string(),
        ),
        Backend::X64 => highlight(
            rush_compiler_x86_64::Compiler::new().compile(program),
            "s".to_string(),
        ),
        Backend::CTranspiler => highlight(
            rush_transpiler_c::Transpiler::new(true)
                .transpile(program)
                .to_string(),
            "c".to_string(),
        ),
    };

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

fn highlight(code: String, file_extension: String) -> String {
    lirstings::highlight::<HtmlRenderer, DummyCache, _, _, _>(
        code,
        HighlightConfig {
            mode: Mode::TreeSitter {
                raw: false,
                raw_queries: false,
                ranges: vec![],
                label: None,
                file_extension,
            },
            theme: Theme {
                highlights: theme::theme(),
                ansi_colors: vec![],
                comment_map: BTreeMap::new(),
            },
            fancyvrb_args: "",
            logger: &mut DummyLogger,
            provider: StaticLangProvider,
            additional_hash_value: (),
        },
    )
    .unwrap()
}

struct StaticLangProvider;
impl LanguageProvider for StaticLangProvider {
    fn provide(self, file_extension: &str) -> Result<Language> {
        match file_extension {
            "s" | "asm" => Ok(Language {
                inner: tree_sitter_asm::language(),
                highlights_query: tree_sitter_asm::HIGHLIGHTS_QUERY.to_owned(),
                injection_query: String::new(),
                locals_query: String::new(),
            }),
            "c" => Ok(Language {
                inner: tree_sitter_c::language(),
                highlights_query: include_str!("../highlights.scm").to_owned(),
                injection_query: String::new(),
                locals_query: String::new(),
            }),
            ext => Err(anyhow!("unsupported file extension '{ext}'")),
        }
    }
}
