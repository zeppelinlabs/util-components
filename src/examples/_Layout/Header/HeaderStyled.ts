import styled, { css } from "styled-components"
import { NavLink } from "react-router-dom"
import { UiTokens } from "../../../styles/designTokens/uiTokens"
import { GlobalStyledHelper } from "../../../styles/globalStyledHelper"
import { thp } from "../../../styles/themeHelpers"
import { zIndex } from "../../../styles/zIndexHelper"
import { device } from "../../../styles/mediaQueries"
import { FontsTokens } from "../../../styles/designTokens/fontsTokens"

export const headerMobileHeight = "80px"

const Wrapper = styled.header`
	${GlobalStyledHelper._Layout}
	height: ${headerMobileHeight};
	justify-content: center;
	position: sticky;
	top: 0;
	left: 0;
	background-color: ${thp.base.level0._};
	border-bottom: 1px solid ${thp.base.level100._};
	z-index: ${zIndex.layer3};
	@media ${device.desktop} {
		height: 100px;
	}
`

const Row = styled.section`
	${GlobalStyledHelper._Row}
	display: grid;
	grid-template-columns: 220px 20px;
	align-items: center;
	justify-content: space-between;
	@media ${device.desktop} {
		gap: ${UiTokens.spacing.size16};
		grid-template-columns: 260px 1fr 310px;
		justify-content: center;
	}
`

const Nav = styled.nav`
	display: none;
	@media ${device.desktop} {
		display: flex;
		justify-content: center;
	}
`

const NavList = styled.ul`
	display: none;
	justify-content: center;
	gap: ${UiTokens.spacing.size40};
	@media ${device.desktop} {
		display: flex;
	}
`

const NavListItem = styled.li``

const BaseLink = css`
	text-decoration: none;
	font-size: ${FontsTokens.sizes.Primary.base};
	color: ${thp.base.level1000._};
	position: relative;
	transition: all .3s ease-out;
	&:before{
		content: "";
		width: 5px;
		height:5px;
		position: absolute;
		left: 50%;
		top: calc(100% + 8px);
		background-color: transparent;
		border-radius: 10px;
		translate: -50% 0;
		transition: all .3s ease-out;
	}
	&:hover{
		&:before{
			background-color: #EC3615;
		}
	}
	&.active{
		&:before{
			background-color: #EC3615;
		}
	}
`

const NavListLink = styled(NavLink)`
	${BaseLink}
`

const NavListAnchor = styled.a`
	${BaseLink}
`

const ContainerSearchBar = styled.article`
	justify-content: end;
	display: none;
	@media ${device.desktop} {
		display: grid;
		gap: ${UiTokens.spacing.size16};
		grid-template-columns: 1fr 40px 40px;
	}
`

const SearchContainer = styled.article`
	display: flex;
	position: relative;
	margin: 16px 16px 0 16px;
	z-index: ${zIndex.layer2};
	@media ${device.desktop} {
		margin: 0;
	}
`

const SearchOption = styled.div`
	display: grid;
	grid-template-columns: 20px 1fr 16px;
	padding: 20px;
	gap: 20px;
	color: ${thp.base.level400._};
	border-bottom: 1px solid ${thp.base.level100._};
	cursor: pointer;
	font-size: 1.4rem;
	transition: all .3s ease-out;
	align-items: center;
	text-transform: capitalize;
	&:hover{
		background-color: ${thp.base.level100._};
	}
`

const SearchListOptions = styled.div`
	display: grid;
	position: absolute;
	top: calc(100% + ${UiTokens.spacing.size8});
	left: 0;
	width: 100%;
	height: auto;
	background-color: ${thp.base.level0._};
	border-radius: ${UiTokens.borderRadius.size8};
	box-shadow: ${UiTokens.shadows.shadow8};
	overflow: hidden;
`

const SearchResultNotFound = styled.div`
	display: grid;
	padding: 20px;
	color: ${thp.system.error.level500._};
	font-size: 1.2rem;
`

const ButtonMenu = styled.button<{ isOpen: boolean, }>`
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	height: 100%;
	border: 0;
	background: transparent;
	gap: ${UiTokens.spacing.size4};
	${(p) => p.isOpen && css`
		${ButtonLine}:nth-child(1){
			transform: rotate(45deg);
		}
		${ButtonLine}:nth-child(2){
			opacity: 0;
		}
		${ButtonLine}:nth-child(3){
			transform: rotate(-45deg);
		}
	`}
	@media ${device.desktop} {
		display: none;
	}
`

const ButtonLine = styled.span`
	background: ${thp.base.level1000._};
	height: 2px;
	width: 100%;
	border-radius: 5px;
	transition: all .5s ease-out;
	transform-origin: 1.5px;
`

const ArrowContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 16px;
	height: 16px;
`

export const HeaderStyled = {
	Wrapper,
	Row,
	Nav,
	NavList,
	NavListItem,
	NavListLink,
	NavListAnchor,
	ContainerSearchBar,
	SearchContainer,
	SearchListOptions,
	SearchOption,
	SearchResultNotFound,
	ButtonMenu,
	ButtonLine,
	ArrowContainer,
}