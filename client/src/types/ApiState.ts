interface Init {
    status: 'init'
}

interface Loading {
    status: 'loading'
}

interface Loaded<T> {
    status: 'loaded'
    payload: {
        data: T
    }
}

interface EndData {
    status: 'endData'
}

interface Error {
    status: 'error'
    error: Error
}

export type ApiState<T> = Init | Loading | Loaded<T> | EndData | Error
