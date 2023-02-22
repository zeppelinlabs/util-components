import { ThemeProps, DefaultTheme } from "styled-components"

const getFunctionKey = "_" as const
type GetFunctionKey = typeof getFunctionKey
export const pathSymbol = Symbol("GetPath")

type FloatingThemeLeaf<T> =
    {
        [k in GetFunctionKey]: (props: ThemeProps<DefaultTheme>) => T;
    }
    & {
        [k in typeof pathSymbol]: () => string;
    }

type FloatingTheme<T> = {
    [k in keyof T]: T[k] extends object ? FloatingTheme<T[k]> : FloatingThemeLeaf<T[k]>
} & FloatingThemeLeaf<T>

const proxyMaker = <T, K extends (keyof T)>(
    prev: FloatingTheme<T>, segment: K
) => {
    const fullPath = `${prev[pathSymbol]}.${segment as string}`
    const ret: FloatingTheme<T[K]> = new Proxy<FloatingTheme<T[K]>>({
        prev,
        segment,
        fullPath,
    } as never, {
        get: (_, attr,) => {
            if (attr === pathSymbol) {
                return fullPath
            } else if (attr === getFunctionKey) {
                return (props: ThemeProps<DefaultTheme>) => {

                    const v = prev[getFunctionKey](props)
                    return v[segment]
                }
            } else {
                const k = attr as keyof T[K]
                return proxyMaker(ret, k)
            }
        },
    })
    return ret
}

export const getProxy = <T, K extends keyof T>(f: (props: T) => T, k: K) => {
    return proxyMaker({
        [getFunctionKey]: f,
        [pathSymbol]: "",

    } as never as FloatingTheme<T>, k)
}