/* eslint-disable @typescript-eslint/no-non-null-assertion */
import styled, { css } from "styled-components"
import { FontsTokens } from "./designTokens/fontsTokens"
import { device } from "./mediaQueries"
import {
	TextAlignKeys,
	TextWeightKeys,
	ThemeBaseColorKeys,
	thp,
} from "./themeHelpers"

export type TextStyleCommonProps = {
	textAlign?: TextAlignKeys,
	textWeight?: TextWeightKeys,
	textColor?: ThemeBaseColorKeys,
	isCursorPointer?: boolean,
	hasDotEnd?: boolean,
}

export const TextStyleBase = () => css<TextStyleCommonProps>`
	font-weight: ${({ textWeight, }) => (
		textWeight
			? FontsTokens.weights.Primary[textWeight]
			: FontsTokens.weights.Primary.regular
	)};
	${({ textAlign, }) => (textAlign && css`
		text-align: ${textAlign};
	`)};
	${({ textColor, }) => (textColor && css`
		color: ${thp.base[textColor]._};
	`)};
	${({ isCursorPointer, }) => (isCursorPointer && css`
		cursor: pointer;
	`)};
	${({ hasDotEnd, }) => (hasDotEnd && css`
		&:after{
			content:"";
			display:inline-block;
			width:8px;
			height:8px;
			border-radius:8px;
			background-color: #EC3615;
			margin-left:8px;
		}
	`)}
`

const Weight = styled.strong<{ textWeight: TextWeightKeys, }>`
	font-weight: ${({ textWeight, }) => (FontsTokens.weights.Primary[textWeight])};
`

const Heading7xl = styled.h1<TextStyleCommonProps>`
	${TextStyleBase}
	${FontsTokens.sizes.Primary["7xl"]};
`
const Heading6xl = styled.h2<TextStyleCommonProps>`
	${TextStyleBase}
	${FontsTokens.sizes.Primary["6xl"]};
`

const Heading5xl = styled.h2<TextStyleCommonProps>`
	${TextStyleBase}
	${FontsTokens.sizes.Primary["2xl"]};
	@media ${device.desktop} {
		${FontsTokens.sizes.Primary["5xl"]};
	}
`

const Heading4xl = styled.h3<TextStyleCommonProps>`
	${TextStyleBase}
	${FontsTokens.sizes.Primary["4xl"]};
`

const Heading3xl = styled.h3<TextStyleCommonProps>`
	${TextStyleBase}
	${FontsTokens.sizes.Primary.xl}
	@media ${device.desktop} {
		${FontsTokens.sizes.Primary["3xl"]};
	}
`

const Heading2xl = styled.h4<TextStyleCommonProps>`
	${TextStyleBase}
	${FontsTokens.sizes.Primary.base}
	@media ${device.desktop} {
		${FontsTokens.sizes.Primary["2xl"]};
	}
`

const HeadingXl = styled.h4<TextStyleCommonProps>`
	${TextStyleBase}
	${FontsTokens.sizes.Primary.lg}
	@media ${device.desktop} {
		${FontsTokens.sizes.Primary.xl};
	}
`

const BodyLg = styled.p<TextStyleCommonProps>`
	${TextStyleBase}
	${FontsTokens.sizes.Primary.base}
	@media ${device.desktop} {
		${FontsTokens.sizes.Primary.lg};
	}
`

const BodyXl = styled.p<TextStyleCommonProps>`
	${TextStyleBase}
	${FontsTokens.sizes.Primary.xl};
`

const BodyBase = styled.p<TextStyleCommonProps>`
	${TextStyleBase}
	${FontsTokens.sizes.Primary.sm};
	@media ${device.desktop} {
		${FontsTokens.sizes.Primary.base};
	}
`

const BodySm = styled.p<TextStyleCommonProps>`
	${TextStyleBase}
	${FontsTokens.sizes.Primary.sm};
`

export const TextStyled = {
	Weight,
	Heading7xl,
	Heading6xl,
	Heading5xl,
	Heading4xl,
	Heading3xl,
	Heading2xl,
	HeadingXl,
	BodyLg,
	BodyXl,
	BodySm,
	BodyBase,
}