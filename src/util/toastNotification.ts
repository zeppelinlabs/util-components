import React from "react"
import { toast } from "react-toastify"
import { DefaultThemeTokens } from "../styles/designTokens/defaultThemeTokens"
import { FontsTokens } from "../styles/designTokens/fontsTokens"
import { UiTokens } from "../styles/designTokens/uiTokens"

export const toastNotification = (message: string) => toast(message, {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
    progressStyle: {
        background: DefaultThemeTokens.base.level0,
    },
    style: {
        fontFamily: FontsTokens.fontFamilies.Primary,
        fontWeight: FontsTokens.weights.Primary.regular,
        fontSize: FontsTokens.sizes.Primary.sm.fontSize,
        color: DefaultThemeTokens.base.level1000,
        borderRadius: UiTokens.borderRadius.size8,
    },
})