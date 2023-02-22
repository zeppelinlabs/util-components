import { ObjectTyped } from "../../src/util/ObjectTyped"
import Global from "../../figmaTokens/global.json"

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
				const formatKey = `shadow${k.split(" ").join().toLocaleLowerCase()}`
				const formatShadow = v.value.map((s) => {
					const getShadowType = s.type === "innerShadow" ? "inner " : ""
					return `${getShadowType}${s.x}px ${s.y}px ${s.blur}px ${s.spread}px ${s.color}`
				}).toString()
				return [formatKey, formatShadow,] as const
			})
	)
}

export const uiToken = {
	borderRadius: processGlobalTokens({ tokens: Global.BorderRadius, formatValueInPx: true, }),
	borderWidth: processGlobalTokens({ tokens: Global.BorderWidth, formatValueInPx: true, }),
	spacing: processGlobalTokens({ tokens: Global.Spacing }),
	shadows: processShadowTokens(Global.Shadow),
	innerShadows: processShadowTokens(Global.InnerShadow),
}