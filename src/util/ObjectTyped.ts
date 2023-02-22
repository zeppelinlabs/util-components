

type Entries<O> = (({
    [k in keyof O]: [k, O[k]]
})[keyof O])[]



export const ObjectTyped = {
    keys: <O>(o: O) => Object.keys(o) as (keyof O)[],
    entries: <O>(o: O) => Object.entries(o) as Entries<O>,
}
