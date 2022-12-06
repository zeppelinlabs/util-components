import { ObjectTyped } from "../src/util/ObjectTyped"
import Color from "../tokens/Color.json"
import * as fs from "fs"
import * as path from "path"



enum FigmaTokenType {
    color = "color"
}

type ColorPallet = {
    [k in `Level${number}`]: {
        value: string,
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





const theme = {
    primary: processColorPallet(Color.Primary),
    secondary: processColorPallet(Color.Secondary),
    neutral: processColorPallet(Color.Neutral),
    system: {
        error: processColorPallet(Color.Error),
        success: processColorPallet(Color.Success),
        warning: processColorPallet(Color.Warning),
    },
}

const generateTSFileExportConst = (exportName: string, objectJson: string) => {
    return `/* eslint-disable indent,comma-dangle */
export const ${exportName} = ${objectJson} as const
`
}

const baseTokenDir = path.resolve("src", "styles", "tokens")

fs.mkdirSync(baseTokenDir)

fs.writeFileSync(
    path.resolve(baseTokenDir, "colorTokens.ts"),
    generateTSFileExportConst("ColorTokens",
        JSON.stringify(theme, null, 2)
    )
)