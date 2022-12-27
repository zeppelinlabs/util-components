import { DefaultTheme, ThemeProps } from "styled-components"
import { getProxy, } from "./ThemeProxy"

export type ThemeKeys = keyof DefaultTheme["palette"]
type ThemeSystemKeys = keyof DefaultTheme["palette"]["system"]
export type ThemeBaseColorKeys = keyof DefaultTheme["palette"]["base"]
export type TextWeightKeys = keyof DefaultTheme["fonts"]["weights"]["Primary"]
export type TextSecondaryWeightKeys = keyof DefaultTheme["fonts"]["weights"]["Secondary"]


export type AlertLevel = Extract<ThemeSystemKeys, "error" | "success" | "warning">
export type TextAlignKeys = "left" | "center" | "right"




export const {
    fonts: fth,
    palette: pth,
    ui: uith,
} = getProxy((props: ThemeProps<DefaultTheme>) => props, "theme")