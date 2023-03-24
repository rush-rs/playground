import init, { compile, run } from '../rush-backend/pkg/rush_backend'

main()

async function main() {
    await init()
    postMessage(['ready'])
    onmessage = function(event) {
        if (event.data[0] === 'run') {
            let res = run(event.data[1], event.data[2])
            postMessage(['finished', res])
        } else if (event.data[0] === 'compile') {
            let res = compile(event.data[1], event.data[2])
            postMessage(['finished', res])
        }
    }
}
