import styled from "styled-components"
import { UiTokens } from "../../../styles/designTokens/uiTokens"
import { GlobalStyledHelper } from "../../../styles/globalStyledHelper"
import { device } from "../../../styles/mediaQueries"
import { thp } from "../../../styles/themeHelpers"

const Wrapper = styled.footer`
	${GlobalStyledHelper._Layout}
	justify-content: center;
	background-color: ${thp.base.level1000._};
	padding-top: 20px;
	padding-bottom: 20px;
`

const Row = styled.section`
	${GlobalStyledHelper._Row}
	display: grid;
	grid-template-columns: 1fr;
	@media ${device.desktop} {
		grid-template-columns: 160px 1fr;
		gap: ${UiTokens.spacing.size16};
	}
`
const ContainerFooterNav = styled.article`
	display: grid;
	gap: ${UiTokens.spacing.size16};
	grid-template-rows: repeat(5, 1fr);
	align-items: center;
	justify-content: center;
	margin-top: ${UiTokens.spacing.size24};
	@media ${device.desktop} {
		gap: ${UiTokens.spacing.size52};
		justify-content: flex-end;
		display: flex;
		margin: 0;
	}
`

const Link = styled.a`
	font-size: 1.6rem;
	color: ${thp.base.level200._};
	text-decoration: none;
	transition: all .3s ease-out;
	text-align: center;
	&:hover{
		color: ${thp.base.level0._};
	}
`

export const FooterStyled = {
	Wrapper,
	Row,
	Link,
	ContainerFooterNav,
}