import styled, { css } from "styled-components"
import { NavLink } from "react-router-dom"
import { UiTokens } from "../../../styles/designTokens/uiTokens"
import { GlobalStyledHelper } from "../../../styles/globalStyledHelper"
import { thp } from "../../../styles/themeHelpers"
import { zIndex } from "../../../styles/zIndexHelper"

const Wrapper = styled.header`
	${GlobalStyledHelper._Layout}
	min-height: 100px;
	justify-content: center;
	position: sticky;
	top: 0;
	left: 0;
	background-color: ${thp.base.level0._};
	border-bottom: 1px solid ${thp.base.level100._};
	z-index: ${zIndex.layer3};
`

const Row = styled.section`
	${GlobalStyledHelper._Row}
	display: grid;
	grid-template-columns: 260px 1fr 260px;
	align-items: center;
	gap: ${UiTokens.spacing.size16};
`

const Nav = styled.nav``

const NavList = styled.ul`
	display:flex;
	justify-content: center;
	gap: ${UiTokens.spacing.size40};
`

const NavListItem = styled.li``

const BaseLink = css`
	text-decoration: none;
	font-size: 1.6rem;
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
	display: grid;
	grid-template-columns: 1fr 36px;
	gap: ${UiTokens.spacing.size20};
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
}