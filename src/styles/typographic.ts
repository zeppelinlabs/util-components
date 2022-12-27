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
}

const TextStyleBase = () => css<CommonProps>`
	${p => (p.textAlign && css`
		text-align: ${p.textAlign};
	`)};
	${p => (p.textWeight && css`
		font-weight: ${FontsTokens.weights.Primary[p.textWeight]};
	`)};
	${p => (p.textColor && css`
		color: ${thp.base[p.textColor]._};
	`)};
	${p => (p.isCursorPointer && css`
		cursor: pointer;
	`)};
`

const Heading24 = styled.h2`
	${TextStyleBase}
	font-size: 2.4rem;
`
const Body18 = styled.p`
	${TextStyleBase}
	font-size: 1.8rem;
`

export const TextStyled = {
	Heading24,
	Body18,
}