import styled, { css } from "styled-components"
import { UiTokens } from "../../../styles/designTokens/uiTokens"
import { GlobalStyledHelper } from "../../../styles/globalStyledHelper"
import { thp } from "../../../styles/themeHelpers"
import MainBannerLeft from "../../../assets/examples/hero-home-left.png"
import MainBannerRight from "../../../assets/examples/hero-home-right.png"
import { device } from "../../../styles/mediaQueries"
import { zIndex } from "../../../styles/zIndexHelper"

const Row = styled.section`
	${GlobalStyledHelper._Row};
`

const Layout = styled.section<{
	isDarkMode?: boolean,
	isMainBanner?: boolean,
}>`
	${GlobalStyledHelper._Layout};
	${({ isDarkMode, }) => (isDarkMode && css`
		background-color: ${thp.base.level1000._};
		color: ${thp.base.level0._};
	`)}
	${({ isMainBanner, }) => (isMainBanner && css`
	position: relative;
	&::after,
	&::before{
			content: "";
			width: calc(50vw - 240px);
			position: absolute;
			height: 100%;
			top: 0;
			background-repeat: no-repeat;
			background-size: auto 100%;
		}
		&::before{
			left: 0;
			background-image: url(${MainBannerLeft});
			background-position: right center;
		}
		&::after{
			right: 0;
			background-image: url(${MainBannerRight});
			background-position: left center;
		}
	`)}
	${Row}{
		position:relative;
		z-index: ${zIndex.layer1};
	}
	@media ${device.desktopXL} {
		&::before{
			background-position: left center;
		}
		&::after{
			background-position: right center;
		}
	}
`



const HeroContainer = styled.article<{ isBigTitle?: boolean, }>`
	text-align: center;
	max-width: ${({ isBigTitle, }) => (isBigTitle ? " 820px" : "630px")};
`

const ContainerComponent = styled.article`
	border-top: ${UiTokens.borderWidth.size1} solid ${thp.base.level100._};
	border-right: ${UiTokens.borderWidth.size1} solid ${thp.base.level100._};
	grid-column: span 2;
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 150px;
	padding: 0 ${UiTokens.spacing.size40};
`

const Grid = styled.section`
	display: grid;
	gap: ${UiTokens.spacing.size48};
	${ContainerComponent}{
		&:nth-child(4n){
			border-right: none;
		}
		&:nth-child(1),
		&:nth-child(2),
		&:nth-child(3),
		&:nth-child(4){
			border-top: none;
		}
	}
	@media ${device.desktop} {
		grid-template-columns: repeat(8,1fr);
		gap: ${UiTokens.spacing.size20};
	}
`

const ComponentsGrid = styled.section`
	display: grid;
	grid-template-columns: repeat(4,1fr);
	${ContainerComponent} {
		&:nth-child(2n) {
			border-right: none;
		}
		&:nth-child(1),
		&:nth-child(2) {
			border-top: none;
		}
	}
	@media ${device.desktop} {
		grid-template-columns: repeat(8,1fr);
		${ContainerComponent} {
			&:nth-child(2n) {
				border-right: ${UiTokens.borderWidth.size1} solid ${thp.base.level100._};
			}
			&:nth-child(4n) {
				border-right: none;
			}
			&:nth-child(1),
			&:nth-child(2),
			&:nth-child(3),
			&:nth-child(4) {
				border-top: none;
			}
	}
	}
`

const AnswerColumn = styled.article`
	display: flex;
	flex-flow: column;
	gap: ${UiTokens.spacing.size12};
	grid-column: span 2;
`

const WrapperContent = styled.section<{ centerContent?: boolean, }>`
	display: grid;
	padding: ${UiTokens.spacing.size52} 0;
	gap: ${UiTokens.spacing.size80};
	${({ centerContent, }) => (centerContent && css`
		place-items: center;
	`)}
	@media ${device.desktop} {
		padding: ${UiTokens.spacing.size96} 0;
	}
`

const AlignContentCenter = styled.article`
	gap: ${UiTokens.spacing.size20};
	display: flex;
	justify-content: center;
	width: 100%;
`


export const HomePageStyled = {
	Layout,
	Row,
	Grid,
	ComponentsGrid,
	AnswerColumn,
	WrapperContent,
	AlignContentCenter,
	ContainerComponent,
	HeroContainer,
}