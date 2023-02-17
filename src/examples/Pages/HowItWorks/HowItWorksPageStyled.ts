import { device } from "../../../styles/mediaQueries"
import styled, { css } from "styled-components"
import { UiTokens } from "../../../styles/designTokens/uiTokens"
import { GlobalStyledHelper } from "../../../styles/globalStyledHelper"
import { thp } from "../../../styles/themeHelpers"
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

const GridFigmaDescription = styled.section`
    display: grid;
    gap: ${UiTokens.spacing.size44} ${UiTokens.spacing.size28};
    align-items: center;
    grid-template-columns: 1fr;
    justify-items: center;
    >img {
        max-width: 360px;
    }
    @media ${device.desktop} {
        grid-template-columns: 360px 1fr;
        justify-items: inherit;
    }
`

const GridColumnExpanded = styled.article`
    @media ${device.desktop} {
        grid-column: span 2;
    }
`

const GridFigmaGetFile = styled.article`
    display: grid;
    gap: ${UiTokens.spacing.size16};
    justify-items: center;
    margin-bottom: 92px;
    @media ${device.desktop} {
        justify-items: inherit;
        margin-bottom: inherit;
    }
`

const WrapperContent = styled.section`
    display: grid;
    padding: ${UiTokens.spacing.size52} 0;
    gap: ${UiTokens.spacing.size28};
    @media ${device.desktop} {
        padding: ${UiTokens.spacing.size80} 0;
    }
`

const Callout = styled.section`
    display: grid;
    gap: ${UiTokens.spacing.size20};
    padding: ${UiTokens.spacing.size16};
    background: ${thp.base.level100._};   
    @media ${device.desktop} {
        grid-template-columns: 1fr 1fr;
        align-items: center;
        >img {
            height: 100%;
            background-color: ${thp.base.level1000._};
        }
    }
`

const CalloutDescription = styled.article<{ hasVerticalPadding?: boolean, }>`
    display: flex;
    flex-direction: column;
    gap: ${UiTokens.spacing.size16};
    ${({ hasVerticalPadding, }) => (hasVerticalPadding && css`
        padding: 20px 0;
    `)}
`

const HowToUseTokensSection = styled.section`
    display: grid;
`

const GridSteps = styled.section`
    display: grid;
    gap: ${UiTokens.spacing.size44};
    align-items: center;
    margin-top: 32px;
    @media ${device.desktop} {
        grid-template-columns: 300px 1fr 1fr;
    }
`

const HowToUseLibrariesSection = styled.section`
    display: grid;
    gap: ${UiTokens.spacing.size20};
    margin-top: 32px;
    margin-bottom: 20px;
    @media ${device.desktop} {
        margin-top: 96px;
    }
`

const HowToUseLibrariesSectionSteps = styled.section`
    display: grid;
    gap: ${UiTokens.spacing.size40} ${UiTokens.spacing.size80};
    @media ${device.desktop} {
        grid-template-columns: 1fr 1fr;
    }
`

const HowToUseLibrariesSectionStepsColumns = styled.article`
    display: flex;
    flex-direction: column;
    gap: ${UiTokens.spacing.size48}
`

const Link = styled.a<{ isDarkMode?: boolean, }>`
	text-decoration: none;
    color: #237BFF;
    ${({ isDarkMode, }) => (isDarkMode && css`
        color: ${thp.base.level0._};
        text-decoration: underline;
    `)}
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

const AnswerColumn = styled.article`
    display: flex;
    flex-flow: column;
    gap: ${UiTokens.spacing.size12};
    grid-column: span 2;
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

const ListItem = styled.li``

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

const ReasonsForUsingArticle = styled.article`
    display: flex;
    flex-direction: column;
    margin-bottom: 12px;
    @media ${device.desktop} {
        margin-bottom: 68px;
    }
`

const ThatsAllArticle = styled.article`
    display: flex;
    flex-direction: column;
    @media ${device.desktop} {
        gap: ${UiTokens.spacing.size8};
    }
`

const HowItWorksTitle = styled.h3`
    ${FontsTokens.sizes.Primary["3xl"]};
    font-weight: ${FontsTokens.weights.Primary.semibold};
`

const TextArticle = styled.article`
    display: flex;
    flex-direction: column;
    gap: ${UiTokens.spacing.size16};
`

const List = styled.ol<{ isNumericList?: boolean, hasGap?: boolean, }>`
    list-style: initial;
    padding-left: 12px;
    ${({ isNumericList, }) => (isNumericList && css`
        list-style: decimal;
    `)}
    ${({ hasGap, }) => (hasGap && css`
        display: flex;
        flex-direction: column;
        gap: inherit;
    `)}
`

const GetComponentSteps = styled.section`
    display: flex;
    flex-direction: column;
    gap: ${UiTokens.spacing.size20};
`

const DevInformationSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: ${UiTokens.spacing.size40};
`

const Section = styled.section`
    display: flex;
    flex-direction: column;
    gap: ${UiTokens.spacing.size16};
`

const WrapperText = styled.section`
    display: flex;
    flex-direction: column;
`

const FigmaTokensFirstSteps = styled.section`
    display: flex;
    flex-direction: column;
    gap: ${UiTokens.spacing.size128};
`

const FigmaInstructions = styled.section`
    display: flex;
    flex-direction: column;
    gap: ${UiTokens.spacing.size32};
`

const GridFigmaInstructionsSteps = styled.section`
    display: grid;
    gap: ${UiTokens.spacing.size16};
    grid-template-columns: 1fr;
    align-items: center;
    padding: 0 16px;
    justify-items: center;
    >img {
        max-width: 500px;
    }
    @media ${device.desktop} {
        padding: 0 ${UiTokens.spacing.size128};
        grid-template-columns: 500px 1fr;
        gap: ${UiTokens.spacing.size44};
    }
`

const HowItWorksStyled = {
    Layout,
    Row,
    GridFigmaDescription,
    GridFigmaGetFile,
    CalloutDescription,
    Callout,
    HowToUseTokensSection,
    GridSteps,
    GridColumnExpanded,
    HowToUseLibrariesSection,
    HowToUseLibrariesSectionSteps,
    HowToUseLibrariesSectionStepsColumns,
    Grid,
    Link,
    AnswerColumn,
    WrapperContent,
    WarningMessage,
    TabItem,
    List,
    ListItem,
    WrapperTabs,
    HowItWorksTitle,
    ReasonsForUsingArticle,
    ThatsAllArticle,
    TextArticle,
    GetComponentSteps,
    DevInformationSection,
    Section,
    WrapperText,
    FigmaTokensFirstSteps,
    FigmaInstructions,
    GridFigmaInstructionsSteps,
}

export default HowItWorksStyled