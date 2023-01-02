import { css } from "styled-components"
import { thp } from "../../styles/themeHelpers"
import { TagSize, TagVariant } from "./Tag"

export const getTagSize = (size: TagSize) => {
	const sizeByCase = {
		[TagSize.Base]: ({
			fontSize: "1.6rem",
			padding: "5px 12px",
			gap: "8px",
			borderWidth: "1px",
			iconSize: "17px",
			closeIconSize: "8px",
		}),
		[TagSize.Small]: ({
			fontSize: "1.2rem",
			padding: "7px 12px",
			gap: "8px",
			borderWidth: "1px",
			iconSize: "13px",
			closeIconSize: "7px",
		}),
		[TagSize.Large]: ({
			fontSize: "2rem",
			padding: "10px 12px",
			gap: "8px",
			borderWidth: "1px",
			iconSize: "16px",
			closeIconSize: "10px",
		}),
	}
	return {
		tagCss: css`
			padding: ${sizeByCase[size].padding};
			font-size: ${sizeByCase[size].fontSize};
			gap:${sizeByCase[size].gap};
			border-width: ${sizeByCase[size].borderWidth};
		`,
		iconSize: css`
			max-width: ${sizeByCase[size].iconSize};
			min-width: ${sizeByCase[size].iconSize};
			height: ${sizeByCase[size].iconSize};
		`,
		closeIconSize: css`
			max-width: ${sizeByCase[size].closeIconSize};
			min-width: ${sizeByCase[size].closeIconSize};
			height: ${sizeByCase[size].closeIconSize};
		`,
	}
}

export const getTagVariant = (config: {
	variant?: TagVariant,
	customVariant?: {
		borderColor?: string,
		backgroundColor?: string,
		textColor?: string,
	},
}) => {

	const getCustomVariant = {
		backgroundColor: config.customVariant?.backgroundColor,
		textColor: config.customVariant?.textColor,
		borderColor: config.customVariant?.borderColor
			? config.customVariant.borderColor
			: "inherit",
	}

	const getVariantByCase = {
		[TagVariant.Primary]: ({
			backgroundColor: thp.base.level0._,
			textColor: thp.base.level1000._,
			borderColor: thp.base.level100._,
		}),
		[TagVariant.Secondary]: ({
			backgroundColor: thp.base.level1000._,
			textColor: thp.base.level0._,
			borderColor: thp.base.level1000._,
		}),
	}

	if (config.customVariant?.backgroundColor
		&& config.customVariant.textColor
	) {
		return css`
			background-color: ${getCustomVariant.backgroundColor};
			color: ${getCustomVariant.textColor};
			border-color: ${getCustomVariant.borderColor || "inherit"};
		`
	}

	return css`
			background-color: ${getVariantByCase[config.variant
			|| TagVariant.Primary].backgroundColor};
			color: ${getVariantByCase[config.variant || TagVariant.Primary].textColor};
			border-color: ${getVariantByCase[config.variant || TagVariant.Primary].borderColor};
		`
}