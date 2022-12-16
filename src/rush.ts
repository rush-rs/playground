import init, { analyze, run } from '../rush-backend/pkg/rush_backend'

///// LINTING /////

export interface Diagnostic {
    level: 'hint' | 'info' | 'warning' | 'error'
    error: 'none' | 'syntax' | 'type' | 'semantic' | 'reference'
    message: string
    span: Span
}

export interface Span {
    start: Location
    end: Location
}

export interface Location {
    line: number
    column: number
    charIdx: number
}

///// EXECUTION /////

export interface RunResult {
    // the exit-code of the program
    code: number
    // whether the VM has crashed during program execution
    runtimeError: RuntimError
    // specifies the runtime of the VM
    elapsed: string
}

export interface RuntimError {
    kind: 'stackOverflow' | 'arithmetic'
    message: string
}

export class Backend {
    constructor() {
        init()
    }

    lint(code: string): Diagnostic[] {
        let raw_res = analyze(code)
        return JSON.parse(raw_res)
    }

    run(code: string): RunResult {
        let raw_res = run(code)
        return JSON.parse(raw_res)
    }
}
