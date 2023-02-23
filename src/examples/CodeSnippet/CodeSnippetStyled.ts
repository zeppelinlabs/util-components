import styled from "styled-components"
import { FontsTokens } from "../../styles/designTokens/fontsTokens"
import { UiTokens } from "../../styles/designTokens/uiTokens"
import { device } from "../../styles/mediaQueries"
import { CustomCodeSnippetStyles } from "./CodeSnippet"

const WrapperCode = styled.article<{ customStyles?: CustomCodeSnippetStyles, }>`
	${FontsTokens.sizes.Primary.sm}
	position: relative;
	width: ${({ customStyles, }) => (customStyles?.mobileDecreaseWidth
		? "calc(100vw - 48px)"
		: "100%")};
	> pre{
		border-radius: ${UiTokens.borderRadius.size16} !important;
		padding: ${UiTokens.spacing.size24} !important;
		> code {
			white-space: ${({ customStyles, }) => (customStyles?.changeWhiteSpace
		? "pre-wrap"
		: "pre")
	} !important;}}

	@media ${device.desktop} {
		width: 100%;
	}
`

const ContainerCopyButton = styled.div`
	position: absolute;
	top: 25px;
	right: 15px;
`


const CodeSnippetStyles = {
	WrapperCode,
	ContainerCopyButton,
}

export default CodeSnippetStyles