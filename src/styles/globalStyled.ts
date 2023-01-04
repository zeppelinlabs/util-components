import { createGlobalStyle, css } from "styled-components"
import { FontsTokens } from "./designTokens/fontsTokens"
import { thp } from "./themeHelpers"

export const GlobalStyled = createGlobalStyle<{ debug?: boolean, }>`
	*,
	*::after,
	*::before{
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		-webkit-tap-highlight-color: transparent;
		${p => p.debug && css`
			outline: 1px solid gray;
		`}
		/* Variant DEBUG
			background-color: rgba(0,0,0,.3);
		*/
	}
	html {
		box-sizing: border-box;
		-webkit-text-size-adjust: 100%;
		font-size: 62.5%;
		min-height:100%;
		scroll-behavior: smooth;
		position:relative;
	}
	html:focus-within {
		scroll-behavior: smooth;
	}
	body {
		text-rendering: optimizeSpeed;
		font-family: ${FontsTokens.fontFamilies.Primary};
		font-weight:${FontsTokens.weights.Primary.regular};
		line-height: 1;
		min-height:100%;
		position:relative;
		scroll-behavior: smooth;
		overflow-x: hidden !important;
		background-color: ${thp.base.level0._};
		color: ${thp.base.level1000._};
	}
`