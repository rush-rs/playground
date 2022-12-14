<script lang="ts">
    import IconButton from '@smui/icon-button'
    import { onMount } from 'svelte'

    import Editor from './Editor.svelte'
    import type { RunResult } from './rush'
    import RushWorker from './rush.worker?worker'

    let code = ''

    let running = false
    let runRes: RunResult = undefined

    let rushWorker: Worker | null = null

    function run() {
        running = true
        rushWorker = makeWorker(code)
    }

    function cancel() {
        running = false
        rushWorker?.terminate()
    }

    function makeWorker(code: string): Worker {
        let worker = new RushWorker()

        worker.onmessage = function (event: { data: any[] }) {
            if (event.data[0] === 'ready') worker.postMessage(['run', code])
            if (event.data[0] === 'finished') {
                running = false
                worker.terminate()
                runRes = JSON.parse(event.data[1])
            }
        }
        return worker
    }

    let resizer: HTMLDivElement | null = null

    onMount(() => {
        code = "fn main() {\n\
    // Write your rush code here\n\
    let a = 'a';\n\
    exit(0)\n\
}"

        // the current position of mouse
        let x = 0
        let y = 0

        // width of left side
        let leftWidth = 0

        const leftSide: Element = resizer.previousElementSibling
        const rightSide: HTMLElement = resizer.nextElementSibling

        // handle the mousedown event
        // that's triggered when user drags the resizer
        const mouseDownHandler = function (e: any) {
            // Get the current mouse position
            x = e.clientX
            y = e.clientY
            leftWidth = leftSide.getBoundingClientRect().width

            // Attach the listeners to `document`
            document.addEventListener('mousemove', mouseMoveHandler)
            document.addEventListener('mouseup', mouseUpHandler)
        }
        const mouseMoveHandler = function (e) {
            // How far the mouse has been moved
            const dx = e.clientX - x
            const dy = e.clientY - y

            const newLeftWidth =
                ((leftWidth + dx) * 100) / resizer.parentNode.getBoundingClientRect().width
            leftSide.style.width = `${newLeftWidth}%`

            leftSide.style.userSelect = 'none'
            leftSide.style.pointerEvents = 'none'

            rightSide.style.userSelect = 'none'
            rightSide.style.pointerEvents = 'none'
        }

        const mouseUpHandler = function () {
            leftSide.style.removeProperty('user-select')
            leftSide.style.removeProperty('pointer-events')

            rightSide.style.removeProperty('user-select')
            rightSide.style.removeProperty('pointer-events')

            // Remove the handlers of `mousemove` and `mouseup`
            document.removeEventListener('mousemove', mouseMoveHandler)
            document.removeEventListener('mouseup', mouseUpHandler)
        }

        resizer.addEventListener('mousedown', mouseDownHandler)
    })
</script>

<main>
    <div class="main">
        <div class="main__editor">
            <Editor bind:code />
        </div>
        <div class="main__resizer" bind:this={resizer} />
        <div class="main__output">
            <div class="main__output__nav">
                <IconButton class="material-icons" on:click={run} disabled={running}
                    >play_arrow</IconButton
                >
                <IconButton class="material-icons" on:click={cancel} disabled={!running}
                    >cancel</IconButton
                >
            </div>
            <div class="main__output__terminal">
                {#if running}
                    VM is running...
                {:else if runRes}
                    {#if runRes.runtimeError}
                        VM crashed:
                        <br />
                        {runRes.runtimeError.kind}: {runRes.runtimeError.message}
                    {:else if runRes.code !== null}
                        Program stopped with code {runRes.code}
                    {:else}
                        Compilation failed
                    {/if}
                {:else}
                    Press the play button in order to start program execution
                {/if}
            </div>
        </div>
    </div>
</main>

<style lang="scss">
    :global(body) {
        width: 100%;
        height: 100%;
        margin: 0;
    }

    .main {
        display: flex;
        height: 100vh;
        width: 100%;

        &__editor {
            width: calc(75% - 10px);
        }

        &__resizer {
            width: 4px;
            cursor: e-resize;
        }

        &__output {
            flex: 1 1 0%;
            background-color: #222225;

            &__nav {
                background-color: #323237;
                height: 4rem;
                display: flex;
                align-items: center;
                padding: 0 1rem;
                gap: 1rem;
            }

            &__terminal {
                font-family: 'Jetbrains Mono', monospace;
                padding: 1rem 1.6rem;
            }
        }
    }
</style>
