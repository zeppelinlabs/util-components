import { DefaultTheme, ThemeProps } from "styled-components"
import { getProxy, } from "./ThemeProxy"
import { FontsTokens } from "./designTokens/fontsTokens"
import { UiTokens } from "./designTokens/uiTokens"

export type ThemeKeys = keyof DefaultTheme["palette"]
type ThemeSystemKeys = keyof DefaultTheme["palette"]["system"]
export type ThemeBaseColorKeys = keyof DefaultTheme["palette"]["base"]
export type TextWeightKeys = keyof (typeof FontsTokens)["weights"]["Primary"]
export type TextSecondaryWeightKeys = keyof (typeof FontsTokens)["weights"]["Secondary"]
export type TextSizeKeys = keyof (typeof FontsTokens)["sizes"]["Primary"]

export type ThemeSpacing = keyof (typeof UiTokens)["spacing"]

export type AlertLevel = Extract<ThemeSystemKeys, "error" | "success" | "warning">
export type TextAlignKeys = "left" | "center" | "right"

export const {
    palette: thp,
} = getProxy((props: ThemeProps<DefaultTheme>) => props, "theme")