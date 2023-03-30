<script lang="ts">
    import IconButton from '@smui/icon-button'
    import Button, { Label } from '@smui/button'
    import Dialog, { Title, Content, Actions } from '@smui/dialog'
    import Select, { Option } from '@smui/select'
    import { onMount } from 'svelte'

    import Editor from './Editor.svelte'
    import type { CompileResult, RunResult } from './rush'
    import RushWorker from './rush.worker?worker'

    import welcomeRush from './scripts/welcome.rush?raw'
    import fibRush from './scripts/fib.rush?raw'
    import powRush from './scripts/pow.rush?raw'
    import approxPiRush from './scripts/approx_pi.rush?raw'
    import approxERush from './scripts/approx_e.rush?raw'
    import approxApery from './scripts/approx_apery.rush?raw'

    const templates = {
        Welcome: [welcomeRush, 'Welcome'],
        Fibonacci: [fibRush, 'Fibonacci'],
        Pow: [powRush, 'Calculate Powers'],
        ApproxPi: [approxPiRush, 'Approximate Pi'],
        ApproxE: [approxERush, 'Approximate E'],
        ApproxApery: [approxApery, 'Approximate Apéry'],
    }

    const backends = {
        vmInterpreter: 'VM interpreter',
        tree: 'tree interpreter',
        vmCompiler: 'VM compiler',
        wasmText: 'Wasm text',
        wasmBinary: 'Wasm binary',
        riscv: 'RISC-V',
        x64: 'x86_64',
        transpiler: 'C transpiler',
    }

    let currentBackend = Object.keys(backends)[0]

    let compileRes: CompileResult = undefined

    let code = ''
    $: if (loadedInitially) saveCode(code)

    let loadedInitially = false
    let loadedScript = ''
    let currentScript = Object.keys(templates)[0][0]

    let running = false
    let runRes: RunResult = undefined

    let rushWorker: Worker | null = null
    let resizer: HTMLDivElement | null = null

    let helpOpen = false

    function run() {
        running = true
        rushWorker = makeWorker(
            code,
            currentBackend,
            !['vmInterpreter', 'tree'].includes(currentBackend),
        )
    }

    function update() {
        running = true
        if (!loadedInitially) return
        running = false
        if (!['vmInterpreter', 'tree'].includes(currentBackend)) run()
    }

    function cancel() {
        running = false
        rushWorker?.terminate()
        runRes = undefined
    }

    function makeWorker(code: string, backend: string, compile: boolean): Worker {
        let worker = new RushWorker()

        worker.onmessage = function (event: { data: any[] }) {
            if (event.data[0] === 'ready') {
                if (compile) worker.postMessage(['compile', code, backend])
                else worker.postMessage(['run', code, backend])
            }
            if (event.data[0] === 'finished') {
                running = false
                worker.terminate()
                if (compile) {
                    runRes = undefined
                    compileRes = JSON.parse(event.data[1])
                } else {
                    compileRes = undefined
                    runRes = JSON.parse(event.data[1])
                }
            }
        }

        return worker
    }

    function saveCode(code: string) {
        window.localStorage.setItem('rush-playground-code', code)
    }

    function saveBackend(backend: string) {
        window.localStorage.setItem('rush-playground-backend', backend)
    }

    function saveScript(script: string) {
        window.localStorage.setItem('rush-playground-script', script)
    }

    async function loadFromStorage(): Promise<string> {
        loadedScript = currentScript

        let storageScript = window.localStorage.getItem('rush-playground-script')
        if (storageScript === null) {
            saveScript(currentScript)
        } else {
            loadedScript = storageScript
            currentScript = storageScript
        }

        let storageBackend = window.localStorage.getItem('rush-playground-backend')
        if (storageBackend === null) {
            saveBackend(currentBackend)
        } else {
            currentBackend = storageBackend
        }

        let loaded_code = window.localStorage.getItem('rush-playground-code')
        if (loaded_code === null) {
            code = templates[currentScript][0]
            saveCode(code)
            return code
        } else {
            return loaded_code
        }
    }

    function loadTemplate() {
        code = templates[currentScript][0]
        if (loadedScript !== currentScript) {
            saveScript(currentScript)
            loadedScript = currentScript
        }
    }

    onMount(async () => {
        code = await loadFromStorage()
        loadedInitially = true

        // the current position of mouse
        let mouseX = 0

        // width of editor
        let leftWidth = 0

        const editorDiv: HTMLElement = resizer.previousElementSibling as HTMLElement
        const outputDiv: HTMLElement = resizer.nextElementSibling as HTMLElement

        // Keybindings:
        // CTRL + S => force save the current code
        // F8 => run current code
        // F9 => cancel code execution
        document.addEventListener('keydown', (e: KeyboardEvent) => {
            if (e.ctrlKey && e.key === 's') {
                e.preventDefault()
                saveCode(code)
            } else if (e.key === 'F8' && !running) {
                run()
            } else if (e.key === 'F9' && running) {
                cancel()
            } else if (e.key === 'F10') {
                e.preventDefault()
                if (!running) {
                    loadTemplate()
                }
            }
        })

        // handle the mousedown event
        // that's triggered when user drags the resizer
        const mouseDownHandler = function (e: MouseEvent) {
            // Get the current mouse position
            mouseX = e.clientX
            leftWidth = editorDiv.getBoundingClientRect().width

            // Attach the listeners to `document`
            document.addEventListener('mousemove', mouseMoveHandler)
            document.addEventListener('mouseup', mouseUpHandler)
        }

        const mouseMoveHandler = function (e: MouseEvent) {
            // How far the mouse has been moved
            const dx = e.clientX - mouseX

            const newLeftWidth =
                ((leftWidth + dx) * 100) /
                (resizer.parentNode as HTMLElement).getBoundingClientRect().width
            editorDiv.style.width = `${newLeftWidth}%`

            editorDiv.style.userSelect = 'none'
            editorDiv.style.pointerEvents = 'none'

            outputDiv.style.userSelect = 'none'
            outputDiv.style.pointerEvents = 'none'
        }

        const mouseUpHandler = function () {
            editorDiv.style.removeProperty('user-select')
            editorDiv.style.removeProperty('pointer-events')

            outputDiv.style.removeProperty('user-select')
            outputDiv.style.removeProperty('pointer-events')

            // remove the handlers of `mousemove` and `mouseup`
            document.removeEventListener('mousemove', mouseMoveHandler)
            document.removeEventListener('mouseup', mouseUpHandler)
        }

        resizer.addEventListener('mousedown', mouseDownHandler)
    })
</script>

<main>
    <Dialog bind:open={helpOpen} aria-labelledby="help-title" aria-describedby="help-content">
        <Title id="help-title">Using The Playground</Title>
        <Content id="help-content">
            <p>
                The <a
                    class="highlight"
                    href="https://github.com/rush-rs/rush-playground"
                    target="_blank"
                    rel="noreferrer">rush playground</a
                >
                allows everyone to use the
                <a class="highlight" href="https://rush-lang.de" target="_blank" rel="noreferrer"
                    >rush</a
                > programming language without the need for an installation.
            </p>

            <p>
                All changes made to the current script are saved locally. Therefore, you can reload
                the page without hesitation. If you do want to erase your current changes, use the <code
                    class="highlight">load</code
                > button in the top right corner.
            </p>

            <p>
                This button can also be used to switch to other code templates. For this, the
                desired template is to be selected using the drop down menu at the top. After the
                selection has been made, the <code class="highlight">load</code> button is to be pressed.
            </p>

            <p>
                To run the current code using a rush interpreter, use the <i
                    class="material-icons icon">play_arrow</i
                >
                button in the top right corder. If the script does not stop when expected, it can be
                terminated using the
                <i class="material-icons icon">cancel</i> button.
            </p>

            <p>
                There are multiple backends for rush. While the first two backends can execute rush
                code, the remaining backends can only compile rush. If a compiler backend is used,
                the output of the current script can be seen on the right.
            </p>

            <h4>Keybindings</h4>
            <ul>
                <li>
                    <code class="highlight">CTRL + S</code>: force save the current code
                </li>
                <li>
                    <code class="highlight">F8</code>: run / compile the current code
                </li>
                <li>
                    <code class="highlight">F9</code>: terminate current interpreter
                </li>
            </ul>
        </Content>
        <Actions>
            <Button on:click={() => (helpOpen = false)}>
                <Label>Close</Label>
            </Button>
        </Actions>
    </Dialog>

    <div class="main">
        <div class="main__editor">
            <Editor bind:code on:update={update} />
        </div>
        <div class="main__resizer" bind:this={resizer} />
        <div class="main__output">
            <div class="main__output__nav">
                <div class="main__output__nav__top">
                    <Select bind:value={currentScript} label="Select Template">
                        {#each Object.keys(templates) as template}
                            <Option value={template}>{templates[template][1]}</Option>
                        {/each}
                    </Select>
                    <Button
                        variant="raised"
                        on:click={loadTemplate}
                        disabled={(currentScript === loadedScript || running) &&
                            templates[currentScript][0] === code}><Label>Load</Label></Button
                    >
                    <IconButton
                        size="button"
                        class="material-icons"
                        on:click={() => (helpOpen = true)}>help</IconButton
                    >
                </div>
                <div class="main__output__nav__bottom">
                    <Select
                        on:SMUISelect:change={() => {
                            update()
                            saveBackend(currentBackend)
                        }}
                        bind:value={currentBackend}
                        label="Select Backend"
                    >
                        {#each Object.keys(backends) as backend}
                            <Option value={backend}>{backends[backend]}</Option>
                        {/each}
                    </Select>
                    {#if ['vmInterpreter', 'tree'].includes(currentBackend)}
                        <IconButton class="material-icons" on:click={run} disabled={running}
                            >play_arrow</IconButton
                        >
                        <IconButton class="material-icons" on:click={cancel} disabled={!running}
                            >cancel</IconButton
                        >
                    {/if}
                </div>
            </div>
            <div class="main__output__terminal">
                {#if running}
                    Backend is running...
                {:else if runRes}
                    {#if runRes.runtimeError}
                        Interpreter crashed:
                        <br />
                        {runRes.runtimeError.kind}: {runRes.runtimeError.message}
                    {:else if runRes.code !== null}
                        {#if runRes.diagnostics !== ''}
                            {@html runRes.diagnostics}
                            <br />
                            <br />
                        {/if}

                        Program stopped with code {runRes.code}
                    {:else}
                        Compilation failed:
                        <br />
                        {@html runRes.diagnostics}
                    {/if}
                {:else if compileRes}
                    {#if compileRes.diagnostics}
                        {@html compileRes.diagnostics}
                        <br />
                        <br />
                        <br />
                    {/if}
                    {#if compileRes.error}
                        Compilation failed:
                        <br />
                        {@html compileRes.error}
                        <br />
                    {:else if compileRes.output !== undefined}
                        {@html compileRes.output}
                    {/if}
                {:else}
                    Press the play button in order to start program execution
                {/if}
            </div>
        </div>
    </div>
</main>

<style lang="scss">
    @use 'mixins' as *;

    :global(body) {
        width: 100%;
        height: 100%;
        margin: 0;
        overflow: hidden;
    }

    .highlight {
        color: var(--clr-primary);
    }

    .icon {
        font-size: 1.2rem;
        color: var(--clr-primary);
        vertical-align: middle;
    }

    h4 {
        margin: 1rem 0;
    }

    ul {
        margin: 0;
        padding: 0 2rem;
    }

    .main {
        display: flex;
        height: 100vh;
        width: 100%;

        @include mobile {
            flex-direction: column;
        }

        &__editor {
            width: calc(75% - 10px);

            @include mobile {
                height: 75%;
                width: 100%;
            }
        }

        &__resizer {
            width: 4px;
            cursor: e-resize;

            @include mobile {
                display: none;
            }
        }

        &__output {
            @include widescreen {
                width: 27vw;
            }

            flex: 1 0 0%;
            background-color: #222225;
            display: flex;
            flex-direction: column;

            @include mobile {
                height: 25%;
            }

            &__nav {
                background-color: #323237;
                padding: 0.5rem 1rem;
                display: flex;
                flex-direction: column;
                gap: 1rem;
                height: 8rem;

                &__top,
                &__bottom {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }
            }

            &__terminal {
                font-family: 'Jetbrains Mono NL', monospace;
                padding: 1rem 1.6rem;
                overflow: auto;
            }
        }
    }
</style>
