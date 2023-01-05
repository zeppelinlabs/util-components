import { ObjectTyped } from "../../src/util/ObjectTyped"
import Fonts from "../../figmaTokens/Typography.json"
import { FigmaTokenType } from "./tokenTypes"

const getFontFamilies = () => {
	const fontForVariantEntries = ObjectTyped.entries(Fonts).map(([kVariant, vVariant]) => {
		const fonts = [...new Set(
			ObjectTyped.entries(vVariant)
				.flatMap(([kSize, vSize]) => {
					return ObjectTyped.entries(vSize).map(([kWeight, vWeight]) => {
						if (vWeight.type !== FigmaTokenType.Typographic) {
							console.error("Invalid token type", `${vVariant}, ${vSize}, ${vWeight},`)
							throw new Error("Invalid token type")
						}
						return vWeight.value.fontFamily
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

type WeightOptions = {
	[K in string]: string
}

const transformWeight = (weight: string) => {
	const options: WeightOptions = {
		"thin": "100",
		"extralight": "200",
		"light": "300",
		"regular": "400",
		"medium": "500",
		"semibold": "600",
		"bold": "700",
		"black": "800",
	}
	if (!options[weight]) {
		console.error("Font token weight not found", `Key:${weight}`)
		throw new Error("Invalid token font weight")
	}
	return options[weight]
}

const getWeights = () => {

	const fontForVariantEntries = ObjectTyped.entries(Fonts).map(([kVariant, vVariant]) => {
		const fontWeights = [...new Set(
			ObjectTyped.entries(vVariant)
				.flatMap(([kSize, vSize]) => {
					return ObjectTyped.entries(vSize).map(([kWeight, vWeight]) => {
						return vWeight.value.fontWeight
					})
				})
		)
			.values()]

		const fontWeightsEntries = fontWeights.map(fw => {
			const key = fw.toLowerCase().split(" ").join("")
			const value = transformWeight(key)

			return [key, value,] as const
		})
		return [kVariant, Object.fromEntries(fontWeightsEntries)] as const
	})

	return Object.fromEntries(fontForVariantEntries)
}

const convertPxToRem = (value: string) => {
	if (parseInt(value) > 0) {
		const formatValue = (parseInt(value) / 10).toFixed(1)
		return `${formatValue}rem`
	} else {
		return "0"
	}
}

const getSize = () => {

	const fontForVariantEntries = ObjectTyped.entries(Fonts).map(([kVariant, vVariant]) => {
		const sizes =
			ObjectTyped.entries(vVariant)
				.flatMap(([kSize, vSize]) => {
					return ObjectTyped.entries(vSize).map(([kWeight, vWeight]) => {
						const value = {
							lineHeight: convertPxToRem(vWeight.value.lineHeight),
							fontSize: convertPxToRem(vWeight.value.fontSize),
							letterSpacing: convertPxToRem(vWeight.value.letterSpacing),
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

export const fontToken = {
	fontFamilies: getFontFamilies(),
	weights: getWeights(),
	sizes: getSize(),
}