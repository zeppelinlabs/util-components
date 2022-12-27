import { DefaultTheme, DefaultUi, DefaultFonts, ThemeProps } from "styled-components"
import { defaultTheme } from "./defaultTheme"
import { UiTokens } from "./designTokens/uiTokens"
import { FontsTokens } from "./designTokens/fontsTokens"

export type ThemeKeys = keyof DefaultTheme["palette"]
type ThemeSystemKeys = keyof DefaultTheme["palette"]["system"]
export type ThemeBaseColorKeys = keyof DefaultTheme["palette"]["base"]
export type TextWeightKeys = keyof DefaultFonts["FontWeight"]["Primary"]
export type TextSecondaryWeightKeys = keyof DefaultFonts["FontWeight"]["Secondary"]

type ThemeHelper<k extends ThemeKeys> = <T>(f: (params: DefaultTheme["palette"][k]) => T) => T
type ThemeHelpers = {
    [K in ThemeKeys]: ThemeHelper<K>;
}
export const thp: ThemeHelpers = Object.keys(defaultTheme.palette).reduce((acc, k) => {
    const Ktyped = k as ThemeKeys
    return {
        ...acc,
        [k]: <T>(f: (palette: DefaultTheme["palette"][typeof Ktyped]) => T) =>
            (props: ThemeProps<DefaultTheme>) => f(props.theme.palette[Ktyped]),
    }
}, {} as ThemeHelpers)

export type AlertLevel = Extract<ThemeSystemKeys, "error" | "success" | "warning">
export type TextAlignKeys = "left" | "center" | "right"

type UiKeys = keyof DefaultUi
type FontKeys = keyof DefaultFonts
type SubUiKeys = keyof DefaultUi[UiKeys]
type SubFontKeys = keyof DefaultFonts[FontKeys]
type UiHelper<k extends UiKeys> = <T>(f: (params: DefaultUi[k]) => T) => T
type FontHelper<k extends FontKeys> = <T>(f: (params: DefaultFonts[k]) => T) => T

type UiHelpers = {
    [K in UiKeys]: UiHelper<K>;
}
type FontHelpers = {
    [K in FontKeys]: FontHelper<K>;
}

export const uihp: UiHelpers & FontHelpers = Object.keys({ UiTokens, FontsTokens, })
    .reduce((acc, k) => {
        const UiKtyped = k as UiKeys & FontKeys
        const UiUtyped = k as SubUiKeys & SubFontKeys
        return {
            ...acc,
            [k]: <T>(f: (palette:
                DefaultUi[typeof UiKtyped] | DefaultFonts[typeof UiUtyped]
            ) => T) => (
                object: DefaultUi | DefaultFonts
            ) => f(
                object[UiKtyped][UiUtyped]
            ),
        }
    }, {} as UiHelpers & FontHelpers)