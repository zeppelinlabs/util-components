import { NavLink } from "react-router-dom"
import styled, { css } from "styled-components"
import { FontsTokens } from "../../../styles/designTokens/fontsTokens"
import { UiTokens } from "../../../styles/designTokens/uiTokens"
import { device } from "../../../styles/mediaQueries"
import { thp } from "../../../styles/themeHelpers"
import { zIndex } from "../../../styles/zIndexHelper"

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
	gap: 24px;
	top: 130px;
	@media ${device.desktop} {
		gap: 16px;
	}
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

const OverlayMenu = styled.div<{ isOpen: boolean, }>`
	position: fixed;
	padding: 124px 16px;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: ${thp.base.level1000._};
	z-index: ${zIndex.layer2};
	transition: all .3s ease-out;
	opacity: 0;
	visibility: hidden;
	overflow-y: auto;
	${({ isOpen, }) => isOpen && css`
		opacity: 1;
		visibility: visible;
	`}
`

const WrapperArrow = styled.div`
	width: 16px;
	height: 16px;
	display: flex;
	justify-content: center;
	align-items: center;
    padding: 2px;
`

const NavLinkAnchor = styled.a`
	text-decoration: none;
	color: ${thp.base.level0._};
	font-size: 1.6rem;
	font-weight: ${FontsTokens.weights.Primary.semibold};
`

const AccordionLabel = styled.label<{ isOpen: boolean, }>`
	color: ${thp.base.level0._};
	font-size: 1.6rem;
	font-weight: ${FontsTokens.weights.Primary.semibold};
	display: grid;
	align-items: center;
	grid-template-columns: auto 1fr;
	column-gap: ${UiTokens.spacing.size12};
	cursor: pointer;
	${({ isOpen, }) => isOpen && css`
		row-gap: ${UiTokens.spacing.size24};
	`}
`

const AccordionContent = styled.div<{ isOpen: boolean, }>`
	overflow: hidden;
	max-height: 0;
	transition: max-height .1s;
	${({ isOpen, }) => isOpen && css`
		max-height: 800px;
		transition: max-height .3s;
	`}
`

export const SidebarStyled = {
	ContainerNavigation,
	Link,
	Navigation,
	OverlayMenu,
	WrapperArrow,
	NavLinkAnchor,
	AccordionLabel,
	AccordionContent,
}