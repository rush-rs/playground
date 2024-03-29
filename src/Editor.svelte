<script lang="ts">
    import { basicSetup, EditorView } from 'codemirror'
    import { EditorState } from '@codemirror/state'
    import { indentWithTab } from '@codemirror/commands'
    import { keymap } from '@codemirror/view'
    import { linter, lintGutter, type Diagnostic } from '@codemirror/lint'
    import { rush } from 'codemirror-lang-rush'
    import { createEventDispatcher, onMount } from 'svelte'
    import { oneDark } from './oneDark'
    import { Backend } from './rush'

    export let code = ''
    $: setCode(code)

    /// Is called when the code is changed from the outside.
    /// Performs the required transaction in codemirror in order to update the contents of the editor.
    function setCode(cd: string) {
        if (editor === undefined || editor.state.doc.toString() === cd) return
        editor.dispatch(
            editor.state.update({
                changes: { from: 0, to: editor.state.doc.length, insert: cd },
            }),
        )
    }

    let editor: EditorView
    let editorDiv: HTMLDivElement = undefined
    const dispatch = createEventDispatcher()
    let timer: NodeJS.Timeout
    let rushBackend: Backend = undefined

    const RushLinter = linter(async () => {
        let diagnostics: Diagnostic[] = []

        let rushDiagnostics = rushBackend.lint(code)

        for (let d of rushDiagnostics) {
            diagnostics.push(
                Object.create({
                    from: d.span.start.charIdx,
                    to: d.span.end.charIdx,
                    severity: d.level,
                    source: 'rush analyzer',
                    message: d.message,
                }),
            )
        }

        return diagnostics
    })

    onMount(() => {
        rushBackend = new Backend()

        let state = EditorState.create({
            extensions: [
                basicSetup,
                keymap.of([indentWithTab]),
                rush(),
                RushLinter,
                lintGutter(),
                oneDark,

                // Emit the `update` event 500 ms after the last keystroke
                EditorView.updateListener.of(v => {
                    if (v.docChanged) {
                        if (timer) clearTimeout(timer)
                        timer = setTimeout(() => {
                            dispatch('update', code)
                        }, 500)
                    }
                }),
                // Update the component code on every change
                EditorView.updateListener.of(v => {
                    if (v.docChanged) {
                        code = editor.state.doc.toString()
                    }
                }),
            ],
        })

        editor = new EditorView({
            state,
            parent: editorDiv,
        })
    })
</script>

<div class="editor" bind:this={editorDiv} />

<style lang="scss">
    .editor {
        height: 100%;
    }

    :global(.cm-lint-marker-info) {
        content: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path fill="gray" d="M22.2 34.4h3.95V22H22.2ZM24 19.15q1 0 1.675-.65t.675-1.65q0-1.1-.675-1.75Q25 14.45 24 14.45q-1.05 0-1.7.65-.65.65-.65 1.7 0 1.05.675 1.7.675.65 1.675.65ZM24 45q-4.35 0-8.175-1.65Q12 41.7 9.15 38.85 6.3 36 4.65 32.2 3 28.4 3 24q0-4.4 1.65-8.225Q6.3 11.95 9.15 9.1 12 6.25 15.8 4.6q3.8-1.65 8.2-1.65 4.4 0 8.225 1.65Q36.05 6.25 38.9 9.1q2.85 2.85 4.5 6.675Q45.05 19.6 45.05 24q0 4.4-1.65 8.2-1.65 3.8-4.5 6.65-2.85 2.85-6.675 4.5Q28.4 45 24 45Z"/></svg>') !important;
    }
    :global(.cm-lint-marker-warning) {
        content: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path fill="rgb(255, 238, 88)" d="M1.25 42.4 24 3.05 46.8 42.4Zm22.95-6.5q.65 0 1.15-.5.5-.5.5-1.15 0-.65-.5-1.125t-1.15-.475q-.65 0-1.15.5-.5.5-.5 1.15 0 .65.5 1.125t1.15.475Zm-1.4-5.3h2.85V19.85H22.8Z"/></svg>') !important;
    }
    :global(.cm-lint-marker-error) {
        content: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path fill="rgb(207, 102, 121)" d="M24 35.1q1.2 0 1.95-.7t.75-1.9q0-1.25-.725-2.025Q25.25 29.7 24 29.7q-1.2 0-1.95.775T21.3 32.5q0 1.2.725 1.9t1.975.7Zm-2.1-8.7h4.55V13H21.9ZM24 45q-4.35 0-8.175-1.65Q12 41.7 9.15 38.85 6.3 36 4.65 32.2 3 28.4 3 24q0-4.4 1.65-8.225Q6.3 11.95 9.15 9.1 12 6.25 15.8 4.6q3.8-1.65 8.2-1.65 4.4 0 8.225 1.65Q36.05 6.25 38.9 9.1q2.85 2.85 4.5 6.675Q45.05 19.6 45.05 24q0 4.4-1.65 8.2-1.65 3.8-4.5 6.65-2.85 2.85-6.675 4.5Q28.4 45 24 45Z"/></svg>') !important;
    }
</style>
