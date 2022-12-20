import { ObjectTyped } from "../../src/util/ObjectTyped"
import Color from "../../figmaTokens/Color.json"

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

export const defaultThemeTokens = {
	primary: processColorPallet(Color.Primary),
	secondary: processColorPallet(Color.Secondary),
	base: processColorPallet(Color.Base),
	system: {
		error: processColorPallet(Color.Error),
		success: processColorPallet(Color.Success),
		warning: processColorPallet(Color.Warning),
	},
}