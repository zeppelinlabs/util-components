/* eslint-disable @typescript-eslint/no-non-null-assertion */
import styled, { css } from "styled-components"
import { FontsTokens } from "./designTokens/fontsTokens"
import {
	TextAlignKeys,
	TextWeightKeys,
	ThemeBaseColorKeys,
	thp,
} from "./themeHelpers"

type CommonProps = {
	textAlign?: TextAlignKeys,
	textWeight?: TextWeightKeys,
	textColor?: ThemeBaseColorKeys,
	isCursorPointer?: boolean,
	hasDotEnd?: boolean,
}

const TextStyleBase = () => css<CommonProps>`
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

const Heading7xl = styled.h1<CommonProps>`
	${TextStyleBase}
	${FontsTokens.sizes.Primary["7xl"]};
`
const Heading6xl = styled.h2<CommonProps>`
	${TextStyleBase}
	${FontsTokens.sizes.Primary["6xl"]};
`

const Heading5xl = styled.h2<CommonProps>`
	${TextStyleBase}
	${FontsTokens.sizes.Primary["5xl"]};
`

const Heading3xl = styled.h3<CommonProps>`
	${TextStyleBase}
	${FontsTokens.sizes.Primary["3xl"]};
`

const Heading2xl = styled.h4<CommonProps>`
	${TextStyleBase}
	${FontsTokens.sizes.Primary["2xl"]};
`

const HeadingXl = styled.h4<CommonProps>`
	${TextStyleBase}
	${FontsTokens.sizes.Primary.xl};
`

const BodyBase = styled.p<CommonProps>`
	${TextStyleBase}
	${FontsTokens.sizes.Primary.base};
`

export const TextStyled = {
	Weight,
	Heading7xl,
	Heading6xl,
	Heading5xl,
	Heading3xl,
	Heading2xl,
	HeadingXl,
	BodyBase,
}