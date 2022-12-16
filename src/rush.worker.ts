import init, { run } from '../rush-backend/pkg/rush_backend'

main()

async function main() {
    await init()
    postMessage(['ready'])
    onmessage = function(event) {
        if (event.data[0] === 'run') {
            let res = run(event.data[1])
            postMessage(['finished', res])
        }
    }
}
