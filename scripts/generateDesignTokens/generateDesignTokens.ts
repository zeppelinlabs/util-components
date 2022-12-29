import * as fs from "fs"
import * as path from "path"
import { fontToken } from "./fontTokensHelper"
import { defaultThemeTokens } from "./themeTokensHelper"
import { uiToken } from "./uiTokensHelper"

const generateTSFileExportConst = (
    options: {
        exportName: string,
        objectToTransform: any,
    }
) => {
    const objectJson = JSON.stringify(options.objectToTransform, null, 4)
    return `/* eslint-disable max-len */
/* Don't edit the content of this file.
Don't commit this file.
This file was created automatically. */
export const ${options.exportName} = ${objectJson} as const`
}

const baseTokenDir = path.resolve("src", "styles", "designTokens")
const createFile = (config: {
    fileName: string,
    fileContent: any,
}) => {
    return fs.writeFileSync(
        path.resolve(baseTokenDir, `${config.fileName}.ts`),
        generateTSFileExportConst({
            exportName: config.fileName[0].toUpperCase() + config.fileName.slice(1),
            objectToTransform: config.fileContent,
        })
    )
}

fs.mkdirSync(baseTokenDir, { recursive: true })
createFile({ fileName: "defaultThemeTokens", fileContent: defaultThemeTokens, })
createFile({ fileName: "uiTokens", fileContent: uiToken, })
createFile({ fileName: "fontsTokens", fileContent: fontToken, })