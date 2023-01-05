import { NavLink } from "react-router-dom"
import styled from "styled-components"
import { FontsTokens } from "../../../styles/designTokens/fontsTokens"
import { GlobalStyledHelper } from "../../../styles/globalStyledHelper"
import { device } from "../../../styles/mediaQueries"
import { thp } from "../../../styles/themeHelpers"


const Wrapper = styled.section`
	${GlobalStyledHelper._Layout}
`

const Row = styled.article`
	${GlobalStyledHelper._Row}
	display: grid;
	grid-template-columns: repeat(16,1fr);
	min-height: calc(100vh - 100px - 93px);
	height: auto;
`

const ContainerNavigation = styled.article`
	background-color: ${thp.base.level1000._};
	grid-column: span 3;
	position: relative;
	padding: 70px 0;
	&:before{
		content: "";
		position: absolute;
		top: 0;
		right: 0;
		width: 25vw;
		height: 100%;
		background-color: ${thp.base.level1000._};
	}
	@media ${device.desktopM} {
		grid-column: span 2;
	}
`

const Navigation = styled.nav`
	position: sticky;
	display: grid;
	gap: 16px;
	top: 130px;
`

const Link = styled(NavLink)`
	text-decoration: none;
	color: ${thp.base.level500._};
	font-size: 1.6rem;
	font-weight: ${FontsTokens.weights.Primary.regular};
	transition: all .3s ease-out;

	&.active{
		color: ${thp.base.level0._};
		font-weight: ${FontsTokens.weights.Primary.semibold};
	}
	&:hover{
		color: ${thp.base.level0._};
	}
`

const WrapperContent = styled.main`
	grid-column: 5/17;
	display: flex;
	flex-flow: column;
	gap: 40px;
	padding: 70px 0;
	align-items: flex-start;
	@media ${device.desktopM} {
		grid-column: 4/17;
	}
`


export const DetailComponentPageStyled = {
	Wrapper,
	Row,
	ContainerNavigation,
	WrapperContent,
	Link,
	Navigation,
}