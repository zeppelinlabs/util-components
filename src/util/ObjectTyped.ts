

type Entries<O> = (({
    [k in keyof O]: [k, O[k]]
})[keyof O])[]



export const ObjectTyped = {
    keys: <O extends Record<string, never>>(o: O) => Object.keys(o) as (keyof O)[],
    entries: <O extends Record<string, unknown>>(o: O) => Object.entries(o) as Entries<O>,
}

