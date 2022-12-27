import { DefaultTheme } from "styled-components"
import { DefaultThemeTokens } from "./designTokens/defaultThemeTokens"
import { FontsTokens } from "./designTokens/fontsTokens"
import { UiTokens } from "./designTokens/uiTokens"

export const defaultTheme: DefaultTheme = {
    palette: DefaultThemeTokens,
    fonts: FontsTokens,
    ui: UiTokens,
}