import * as fs from "fs"
import * as path from "path"
import { ObjectTyped } from "../src/util/ObjectTyped"
import Color from "../figmaTokens/Color.json"
import Global from "../figmaTokens/global.json"
import Fonts from "../figmaTokens/Typography.json"

const getFontFamilies = () => {

    const fontForVariantEntries = ObjectTyped.entries(Fonts).map(([kVariant, vVariant]) => {
        const fonts = [...new Set(
            ObjectTyped.entries(vVariant)
                .flatMap(([kSize, vSize]) => {
                    return ObjectTyped.entries(vSize).map(([kWeight, vWeight]) => {
                        // todo assert type
                        return vWeight.value.fontFamily
                        // return s.add(vWeight.value.font÷Family)
                    })
                })
        )
            .values()]
        if (fonts.length !== 1) {
            throw new Error("Invalid number of fonts for variant")
        }
        return [kVariant, fonts[0]]
    })

    return Object.fromEntries(fontForVariantEntries)
}

const getWeights = () => {

    const fontForVariantEntries = ObjectTyped.entries(Fonts).map(([kVariant, vVariant]) => {
        const fontWeights = [...new Set(
            ObjectTyped.entries(vVariant)
                .flatMap(([kSize, vSize]) => {
                    return ObjectTyped.entries(vSize).map(([kWeight, vWeight]) => {
                        // todo assert type
                        return vWeight.value.fontWeight
                    })
                })
        )
            .values()]
        const fontWeightsEntries = fontWeights.map(fw => {
            return [fw.toLowerCase().split(" ").join(), fw,] as const
        })
        return [kVariant, Object.fromEntries(fontWeightsEntries)] as const
    })

    return Object.fromEntries(fontForVariantEntries)
}



const getSize = () => {

    const fontForVariantEntries = ObjectTyped.entries(Fonts).map(([kVariant, vVariant]) => {
        const sizes =
            ObjectTyped.entries(vVariant)
                .flatMap(([kSize, vSize]) => {
                    return ObjectTyped.entries(vSize).map(([kWeight, vWeight]) => {
                        // todo assert type
                        const value = {
                            lineHeight: vWeight.value.lineHeight,
                            fontSize: vWeight.value.fontSize,
                            letterSpacing: vWeight.value.letterSpacing,
                            paragraphSpacing: vWeight.value.paragraphSpacing,
                        }
                        return [
                            kSize,
                            value,
                        ] as const
                    })
                })

        return [kVariant, Object.fromEntries(sizes)] as const
    })

    return Object.fromEntries(fontForVariantEntries)
}



enum FigmaTokenType {
    color = "color"
}

type ColorPallet = {
    [k in `Level${number}`]: {
        value: string,
        type: string,
    }
}
type GlobalToken = {
    [k in string]: {
        value: string,
        type: string,
    }
}
type ShadowToken = {
    [k in string]: {
        value: {
            x: string,
            y: string,
            blur: string,
            spread: string,
            color: string,
            type: string,
        }[],
        type: string,
    }
}

const processColorPallet = (colorPallet: ColorPallet) => {
    return Object.fromEntries(
        ObjectTyped.entries(colorPallet)
            .map(([k, v,]) => {
                if (v.type !== FigmaTokenType.color) {
                    console.error("Invalid token type", k, v)
                    throw new Error("Invalid token type")
                }
                return [k.toLocaleLowerCase(), v.value,] as const
            })
    )
}

const processGlobalTokens = (config: {
    tokens: GlobalToken,
    prefix?: string,
    formatValueInPx?: boolean,
}) => {
    return Object.fromEntries(
        ObjectTyped.entries(config.tokens)
            .map(([k, v,]) => {
                const formatValue = () => {
                    if (k === "Total") {
                        return `${v.value}%`
                    } else if (config.formatValueInPx) {
                        return `${v.value}px`
                    } else {
                        return v.value
                    }
                }
                const getPrefix = config.prefix ? config.prefix.toLocaleLowerCase() : "size"
                const formatKey = k[0].toUpperCase() + k.slice(1)
                const key = `${getPrefix}${formatKey}`
                return [key, formatValue(),] as const
            })
    )
}

const processShadowTokens = (globalToken: ShadowToken) => {
    return Object.fromEntries(
        ObjectTyped.entries(globalToken)
            .map(([k, v,]) => {
                const formatShadow = v.value.map((s) => {
                    const getShadowType = s.type === "innerShadow" ? "inner " : ""
                    return `${getShadowType}${s.x}px ${s.y}px ${s.blur}px ${s.spread}px ${s.color}`
                })
                return [`shadow${k.toLocaleLowerCase()}`, formatShadow.toString(),] as const
            })
    )
}


const defaultThemeTokens = {
    primary: processColorPallet(Color.Primary),
    secondary: processColorPallet(Color.Secondary),
    base: processColorPallet(Color.Base),
    system: {
        error: processColorPallet(Color.Error),
        success: processColorPallet(Color.Success),
        warning: processColorPallet(Color.Warning),
    },
}

const uiToken = {
    borderRadius: processGlobalTokens({ tokens: Global.BorderRadius, formatValueInPx: true, }),
    borderWidth: processGlobalTokens({ tokens: Global.BorderWidth, formatValueInPx: true, }),
    spacing: processGlobalTokens({ tokens: Global.Spacing }),
    shadows: processShadowTokens(Global.Shadow),
    innerShadows: processShadowTokens(Global.InnerShadow),
}

const fontToken = {
    fontFamilies: getFontFamilies(),
    weights: getWeights(),
    sizes: getSize(),
}

const generateTSFileExportConst = (
    options: {
        exportName: string,
        objectToTransform: any,
    }
) => {
    const objectJson = JSON.stringify(options.objectToTransform, null, 4)
    return ` /* eslint-disable max-len */
    export const ${options.exportName} = ${objectJson} as const`
}

const baseTokenDir = path.resolve("src", "styles", "designTokens")

fs.mkdirSync(baseTokenDir, { recursive: true })
fs.writeFileSync(
    path.resolve(baseTokenDir, "defaultThemeTokens.ts"),
    generateTSFileExportConst({
        exportName: "DefaultThemeTokens",
        objectToTransform: defaultThemeTokens,
    })
)
fs.writeFileSync(
    path.resolve(baseTokenDir, "uiTokens.ts"),
    generateTSFileExportConst({
        exportName: "UiTokens",
        objectToTransform: uiToken,
    })
)
fs.writeFileSync(
    path.resolve(baseTokenDir, "fontsTokens.ts"),
    generateTSFileExportConst({
        exportName: "FontsTokens",
        objectToTransform: fontToken,
    })
)