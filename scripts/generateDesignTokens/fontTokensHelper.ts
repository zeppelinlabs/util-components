import { ObjectTyped } from "../../src/util/ObjectTyped"
import Fonts from "../../figmaTokens/Typography.json"

const getFontFamilies = () => {
	const fontForVariantEntries = ObjectTyped.entries(Fonts).map(([kVariant, vVariant]) => {
		const fonts = [...new Set(
			ObjectTyped.entries(vVariant)
				.flatMap(([kSize, vSize]) => {
					return ObjectTyped.entries(vSize).map(([kWeight, vWeight]) => {
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
			return [fw.toLowerCase().split(" ").join(), fw,] as const
		})
		return [kVariant, Object.fromEntries(fontWeightsEntries)] as const
	})

	return Object.fromEntries(fontForVariantEntries)
}

const convertPxToRem = (value: string) => {
	if (parseInt(value) > 0) {
		const formatValue = (parseInt(value) / 10).toFixed(1)
		return `${formatValue}rem`
	}else{
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
							paragraphSpacing: convertPxToRem(vWeight.value.paragraphSpacing),
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