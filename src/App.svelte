<script lang="ts">
    import { onMount } from 'svelte'
    import IconButton from '@smui/icon-button'

    import Editor from './Editor.svelte'
    import { Backend, type RunResult } from './rush'
    let code = ''
    $: console.log(code)

    let running = false
    let runRes: RunResult = undefined
    let rush: Backend = new Backend()

    function run() {
        running = true
        runRes = rush.run(code)
        running = false
    }

    function cancel() {
        running = false
    }
</script>

<main>
    <div class="main">
        <div class="main__editor">
            <Editor bind:code />
        </div>
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
            width: 75%;
        }

        &__output {
            width: 25%;
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
