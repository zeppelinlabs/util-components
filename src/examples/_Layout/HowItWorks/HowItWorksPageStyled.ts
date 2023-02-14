import { device } from "./../../../styles/mediaQueries"
import styled, { css } from "styled-components"
import { UiTokens } from "../../../styles/designTokens/uiTokens"
import { GlobalStyledHelper } from "../../../styles/globalStyledHelper"
import { ThemeSpacing, thp } from "../../../styles/themeHelpers"
import { zIndex } from "../../../styles/zIndexHelper"
import { FontsTokens } from "../../../styles/designTokens/fontsTokens"
import { NavLink } from "react-router-dom"

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
    ${Row}{
        position:relative;
        z-index: ${zIndex.layer1};
    }
`

const ContainerComponent = styled.article`
    border-top: ${UiTokens.borderWidth.size1} solid ${thp.base.level100._};
    border-right: ${UiTokens.borderWidth.size1} solid ${thp.base.level100._};
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
        gap: ${UiTokens.spacing.size40};
        padding: 0;
    }
`

const ComponentsGrid = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
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
        grid-template-columns: repeat(4,1fr);
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

const WrapperContent = styled.section<{
    centerContent?: boolean,
    gap?: ThemeSpacing,
    withoutTopPadding?: boolean,
}>`
    display: grid;
    padding: ${UiTokens.spacing.size52} 0;
    ${({ withoutTopPadding, }) => (withoutTopPadding && css`
        padding-top: 0;
    `)}
    ${({ centerContent, }) => (centerContent && css`
        place-items: center;
    `)}
    gap: ${UiTokens.spacing.size40};
    @media ${device.desktop} {
        padding: ${UiTokens.spacing.size96} 0;
        gap: ${({ gap, }) => (
        gap
            ? UiTokens.spacing[gap]
            : UiTokens.spacing.size20
    )};
        ${({ withoutTopPadding, }) => (withoutTopPadding && css`
            padding-top: 0;
        `)}
    }
`

const AlignContentCenter = styled.article`
    gap: ${UiTokens.spacing.size20};
    display: flex;
    justify-content: center;
    width: 100%;
`

const WarningMessage = styled.div`
    display: grid;
    grid-template-columns: 14px 1fr;
    justify-content: center;
    align-items: center;
    width: fit-content;
    padding: 8px 12px;
    gap: ${UiTokens.spacing.size12};
    background: ${thp.base.level800._};
    border-radius: 8px;
    svg {
        path{
			fill: ${thp.system.error.level500._};;
		}
    }
`

const TabListItem = styled.li``

const TabItem = styled(NavLink)`
    ${FontsTokens.sizes.Primary.xl};
    display: grid;
    place-items: center;
    text-decoration: none;
    font-weight: ${FontsTokens.weights.Primary.light};
    color: ${thp.base.level0._};
	position: relative;
    padding: ${UiTokens.spacing.size12};
	transition: all .3s ease-out;
	&:before{
		content: "";
		width: 100%;
		height: 8px;
		position: absolute;
		left: 50%;
		top: calc(100% + 8px);
		background-color: transparent;
		translate: -50% 0;
		transition: all .3s ease-out;
	}
	&:hover{
		&:before{
			background-color: ${thp.base.level0._};
		}
	}
	&.active{
        font-weight: ${FontsTokens.weights.Primary.semibold};
        color: ${thp.base.level0._};
		&:before{
			background-color: ${thp.base.level0._};
		}
	}
    @media ${device.desktop} {
        ${FontsTokens.sizes.Primary["3xl"]}
    }
`

const WrapperTabs = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${UiTokens.spacing.size12};
    margin-bottom: ${UiTokens.spacing.size12};
`

const WrapperTitle = styled.div`
    display: flex;
    flex-direction: column;
`

const Callout = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${UiTokens.spacing.size20};
    padding: ${UiTokens.spacing.size16};
    background: ${thp.base.level100._};   
    @media ${device.desktop} {
        flex-direction: row;
        align-items: center;
    }
`

const HowItWorksTitle = styled.h3`
    ${FontsTokens.sizes.Primary["3xl"]};
    font-weight: ${FontsTokens.weights.Primary.semibold};
`

const WrapperFigmaImgage = styled.div<{ maxWidth: string, }>`
    max-width: ${({ maxWidth, }) => maxWidth};
    margin: 0 auto;
    @media ${device.desktop} {
        max-width: 100%;
    }
`

const GridContent = styled.div<{ gap?: ThemeSpacing, firstColumnWidth?: string, }>`
    display: grid;
    gap: ${({ gap, }) => (
        gap
            ? UiTokens.spacing[gap]
            : UiTokens.spacing.size20
    )};
    @media ${device.desktop} {
        align-items: center;
        grid-template-columns: ${({ firstColumnWidth, }) => (
        firstColumnWidth
            ? `${firstColumnWidth} 1fr`
            : "1fr 1fr"
    )};;
    }
`

const GroupElements = styled.div<{ gap?: ThemeSpacing, }>`
    display: flex;
    flex-direction: column;
    gap: ${({ gap, }) => (
        gap
            ? UiTokens.spacing[gap]
            : UiTokens.spacing.size20
    )};
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    @media ${device.desktop} {
        justify-content: start;
        width: 100%;
    }
`

const Link = styled.a`
	text-decoration: none;
    color: #237BFF;
`

const HowItWorksStyled = {
    Layout,
    Row,
    Grid,
    ComponentsGrid,
    AnswerColumn,
    WrapperContent,
    AlignContentCenter,
    ContainerComponent,
    WarningMessage,
    TabItem,
    TabListItem,
    WrapperTabs,
    WrapperTitle,
    Callout,
    HowItWorksTitle,
    WrapperFigmaImgage,
    GridContent,
    GroupElements,
    ButtonContainer,
    Link,
}

export default HowItWorksStyled