import { css } from "styled-components"
import { device } from "./mediaQueries"

const _Layout = css`
	display: flex;
	flex-flow: column;
	padding-left: 30px;
	padding-right: 30px;
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
	max-width: 1500px;

	@media ${device.desktopM} {
		max-width: 1750px;
	}
`

export const GlobalStyledHelper = {
	_Layout,
	_Row,
}