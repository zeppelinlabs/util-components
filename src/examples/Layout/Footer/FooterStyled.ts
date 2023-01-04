import styled from "styled-components"
import { UiTokens } from "../../../styles/designTokens/uiTokens"
import { GlobalStyledHelper } from "../../../styles/globalStyledHelper"
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
	grid-template-columns: 160px 1fr;
	align-items: center;
	gap: ${UiTokens.spacing.size16};
`
const ContainerFooterNav = styled.article`
	gap: ${UiTokens.spacing.size52};
	display: flex;
	justify-content: flex-end;
`

const Link = styled.a`
	font-size: 1.6rem;
	color: ${thp.base.level200._};
	text-decoration: none;
	transition: all .3s ease-out;
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