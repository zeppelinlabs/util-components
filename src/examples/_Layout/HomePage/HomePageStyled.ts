import styled, { css } from "styled-components"
import { UiTokens } from "../../../styles/designTokens/uiTokens"
import { GlobalStyledHelper } from "../../../styles/globalStyledHelper"
import { thp } from "../../../styles/themeHelpers"

const Layout = styled.section<{ isDarkMode?: boolean, }>`
	${GlobalStyledHelper._Layout};
	${({ isDarkMode, }) => (isDarkMode && css`
		background-color: ${thp.base.level1000._};
		color: ${thp.base.level0._};
	`)}
`

const Row = styled.section`
	${GlobalStyledHelper._Row};
`

const HeroContainer = styled.article`
	text-align: center;
	max-width: 660px;
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

const Grid = styled.section<{ withoutGap?: boolean, }>`
	display: grid;
	grid-template-columns: repeat(8,1fr);
	gap: ${({ withoutGap, }) => (withoutGap ? "0px" : UiTokens.spacing.size20)};
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
`

const AnswerColumn = styled.article`
	display: flex;
	flex-flow: column;
	gap: ${UiTokens.spacing.size12};
	grid-column: span 2;
`

const WrapperContent = styled.section<{ centerContent?: boolean, }>`
	display: grid;
	gap: ${UiTokens.spacing.size96};
	padding: ${UiTokens.spacing.size128} 0;
	${({ centerContent, }) => (centerContent && css`
		justify-content: center;
	`)}
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
	AnswerColumn,
	WrapperContent,
	AlignContentCenter,
	ContainerComponent,
	HeroContainer,
}