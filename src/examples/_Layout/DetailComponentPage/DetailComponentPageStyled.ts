import styled from "styled-components"
import { FontsTokens } from "../../../styles/designTokens/fontsTokens"
import { UiTokens } from "../../../styles/designTokens/uiTokens"
import { GlobalStyledHelper } from "../../../styles/globalStyledHelper"
import { device } from "../../../styles/mediaQueries"
import { thp } from "../../../styles/themeHelpers"


const Wrapper = styled.section`
	${GlobalStyledHelper._Layout}
	display: block;
	@media ${device.desktop} {
		display: flex;
	}
`

const Row = styled.article`
	${GlobalStyledHelper._Row}
	display: grid;
	grid-template-columns: repeat(16,1fr);
	min-height: calc(100vh - 100px - 93px);
	height: auto;
`

const WrapperContent = styled.main`
	display: flex;
	flex-flow: column;
	gap: ${UiTokens.spacing.size60};
	padding: 32px 0;
	@media ${device.desktopM} {
		grid-column: 4/17;
	}
	@media ${device.desktop} {
		align-items: flex-start;
		grid-column: 5/17;
		gap: ${UiTokens.spacing.size80};
		padding: 70px 0;
	}
	hr{
		width: 100%;
	}
`

const WrapperTitle = styled.article`
	display: grid;
	width: 100%;
	gap: ${UiTokens.spacing.size16};
`

const WrapperSubTitle = styled.article`
	display: flex;
	width: 100%;
	gap: ${UiTokens.spacing.size16};
	flex-direction: column;
`

const StageComponents = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	justify-content: center;
	border-radius: ${UiTokens.borderRadius.size8};
	border: 1px solid ${thp.base.level100._};
	padding: ${UiTokens.spacing.size48};
	gap: ${UiTokens.spacing.size48};
	width: 100%;
	background-color: #FAFAFA;
	margin-top: ${UiTokens.spacing.size20};
	@media ${device.tablet} {
		flex-direction: unset;
	}
	@media ${device.desktop} {
		gap: ${UiTokens.spacing.size60};
		padding: ${UiTokens.spacing.size60};
	}
`

const ContainComponentAndText = styled.div`
	display: grid;
	gap: ${UiTokens.spacing.size20};
	place-items: center;
	align-items: end;
	flex-grow: 1;
`

const ContainComponent = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`

const ContainerForInputs = styled.div`
	min-width: 250px;
	width: 100%;
`
const WrapperCode = styled.article<{ changeWhiteSpace?: boolean, }>`
	${FontsTokens.sizes.Primary.sm}
	position: relative;
	> pre{
		border-radius: ${UiTokens.borderRadius.size16} !important;
		padding: ${UiTokens.spacing.size24} !important;
		> code {
			white-space: ${({ changeWhiteSpace, }) => (changeWhiteSpace
		? "pre-wrap"
		: "pre")
	} !important;}
	}
`

const ContainerCopyButton = styled.div`
	position: absolute;
	top: 25px;
	right: 15px;
`

const ContainerInLine = styled.article`
	display: flex;
	justify-content: space-between;
	gap: 16px;
`

export const DetailComponentPageStyled = {
	Wrapper,
	Row,
	WrapperContent,
	WrapperTitle,
	WrapperSubTitle,
	StageComponents,
	ContainComponentAndText,
	ContainerForInputs,
	ContainComponent,
	WrapperCode,
	ContainerCopyButton,
	ContainerInLine,
}