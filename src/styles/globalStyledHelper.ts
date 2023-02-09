import { css } from "styled-components"
import { device } from "./mediaQueries"

const _Layout = css`
	display: flex;
	flex-flow: column;
	padding-left: 16px;
	padding-right: 16px;
	width: 100%;
	height: auto;
	align-items: center;

	@media ${device.desktop} {
		padding-left: 40px;
		padding-right: 40px;
    }
`
const _Row = css`
	width: 100%;
	max-width: 100%;
	max-width: 1350px;
`

export const GlobalStyledHelper = {
	_Layout,
	_Row,
}