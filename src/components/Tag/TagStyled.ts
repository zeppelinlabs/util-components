import styled, { css } from "styled-components"
import { FontsTokens } from "../../styles/designTokens/fontsTokens"
import { UiTokens } from "../../styles/designTokens/uiTokens"
import { thp, } from "../../styles/themeHelpers"
import { CustomStyles, TagIconPosition, TagSize, } from "./Tag"
import { getTagSize, getTagVariant } from "./TagStyledHelper"

type TagProps = {
	customStyles?: CustomStyles,
	IconPosition?: TagIconPosition,
	isDisabled?: boolean,
}

const Container = styled.span<TagProps>`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	border-radius: ${UiTokens.borderRadius.size76};
	border-style: solid;
	width: max-content;
	cursor: ${({ customStyles, }) => (customStyles?.isCursorPointer ? "pointer" : "default")};

	${({ customStyles, }) => ((
		getTagVariant({
			variant: customStyles?.variant,
			customVariant: {
				borderColor: customStyles?.borderColor,
				backgroundColor: customStyles?.backgroundColor,
				textColor: customStyles?.textColor,
			},
		}
		))
	)}

	${({ customStyles, }) => (getTagSize(customStyles?.size
		? customStyles.size
		: TagSize.Base
	)).tagCss}

	${({ customStyles, }) => (customStyles?.textWeight
		&& FontsTokens.weights.Primary[customStyles.textWeight]
	)};
	${({ IconPosition, }) => (IconPosition && css`
		flex-flow: ${IconPosition};
	`)};
	${({ isDisabled, }) => (isDisabled && css`
		cursor: not-allowed;
		opacity: 0.5;
	`)}

	&:focus {
		box-shadow: 0 0 0 4px ${thp.system.success.level500._};
	}
	img{
		width:100%;
		max-width:100%;
	}
`

const CrossIconContainer = styled.span<{
	size?: TagSize,
	isDisabled?: boolean,
}>`
	display: flex;
	align-items: center;
	justify-content: center;
	object-fit: contain;
	object-position:center ;
	cursor: ${({ isDisabled, }) => (isDisabled ? "not-allowed" : "pointer")};
	${({ size, }) => (getTagSize(size ? size : TagSize.Small)).closeIconSize};
`

const CustomIconContainer = styled.span<{ size?: TagSize, }>`
	display: flex;
	align-items: center;
	justify-content: center;
	object-fit: contain;
	object-position:center ;
	${({ size, }) => (getTagSize(size ? size : TagSize.Small)).iconSize}
`

export const TagStyled = {
	Container,
	CustomIconContainer,
	CrossIconContainer,
}