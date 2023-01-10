import styled, { css } from "styled-components"
import { UiTokens } from "../../styles/designTokens/uiTokens"
import { thp } from "../../styles/themeHelpers"
import {
	ButtonIconPosition, ButtonSize, ButtonVariant, CustomButtonStyles
} from "./Button"

type Props = {
	buttonSize: ButtonSize,
	buttonPosition?: ButtonIconPosition,
	isLoading?: boolean,
	disabled?: boolean,
	customStyles?: CustomButtonStyles,
	isOnlyIcon: boolean,
}

const getButtonVariant = (variant: ButtonVariant) => {
	const ButtonByCase = {
		[ButtonVariant.Primary]: (PrimaryButton),
		[ButtonVariant.Secondary]: (SecondaryButton),
	}
	return ButtonByCase[variant]
}

const getButtonSize = (variant: ButtonSize) => {
	const ButtonByCase = {
		[ButtonSize.Base]: ({
			fontSize: "1.6rem",
			iconWidth: "20px",
		}),
		[ButtonSize.Small]: ({
			fontSize: "1.2rem",
			iconWidth: "16px",
		}),
		[ButtonSize.Large]: ({
			fontSize: "1.8rem",
			iconWidth: "20px",
		}),
		[ButtonSize.XLarge]: ({
			fontSize: "2rem",
			iconWidth: "24px",
		}),
	}
	return ButtonByCase[variant]
}

const SpinnerContainer = styled.span`
	max-width: 20px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`

const PrimaryButton = () => css<Props>`
	background: ${thp.primary.level500._};
	color: ${thp.base.level0._};

	&:not(:disabled) {
		&:hover{
			background: ${thp.primary.level800._};
		}
		&:active{
			background: ${thp.primary.level100._};
		}
	}
	&:focus{
		box-shadow: 0 0 0 3px ${thp.primary.level200._};
	}
	&:disabled{
		background-color: ${thp.primary.level50._};
		color: ${thp.primary.level300._};
	}
	${SpinnerContainer}{
		color: ${thp.base.level1000._};
	}
`
const SecondaryButton = () => css<Props>`
	background: ${thp.primary.level900._};
	color: ${thp.base.level1000._};
	border: ${UiTokens.borderWidth.size1} solid ${thp.base.level400._};

	&:not(:disabled) {
		&:hover{
			box-shadow: 0 0 0 1px ${thp.primary.level400._};
		}
	}
	&:focus{
		box-shadow: 0 0 0 2px ${thp.primary.level400._};
	}
	&:disabled{
		color: ${thp.primary.level200._};
		border: 1px solid ${thp.primary.level200._};
	}
	${SpinnerContainer}{
		color: ${thp.base.level1000._};
	}
`

const Button = styled.button<Props>`
	display: flex;
	justify-content: center;
	align-items: center;
	min-width:  30px;
	min-height: 30px;
	border:none;
	cursor: pointer;
	font-size: ${({ buttonSize, }) => (getButtonSize(buttonSize).fontSize)};
	transition: all .3s ease-out;
	gap: ${UiTokens.spacing.size8};
	position: relative;
	outline: none;

	padding:${({ isOnlyIcon, }) => (isOnlyIcon ? "8px" : "8px 16px")};
	width: ${({ customStyles, }) => (customStyles?.isFullWidth ? "100%" : "fit-content")};
	flex-direction: ${({ buttonPosition, }) => (buttonPosition ? buttonPosition : "row")};
	border-radius: ${UiTokens.borderRadius.size76};
	${({ customStyles, }) => (getButtonVariant(customStyles?.buttonVariant
	|| ButtonVariant.Primary))}
	img,
	svg{
		width: 100%;
		height: 100%;
		object-fit: contain;
		path{
			fill: currentColor;
		}
	}
	&:disabled {
		cursor:not-allowed;
	}
	${({ isLoading, }) => (isLoading && css`
		color: transparent !important;
	`)};
	${({ isOnlyIcon, }) => (isOnlyIcon && css`
		aspect-ratio: 1/1;
		`)};
`

const IconContainer = styled.span<{ buttonSize: ButtonSize, }>`
	display: flex;
	align-items: center;
	justify-content: center;
	min-width: ${({ buttonSize, }) => (getButtonSize(buttonSize).iconWidth)};
	max-width:${({ buttonSize, }) => (getButtonSize(buttonSize).iconWidth)};
	height:${({ buttonSize, }) => (getButtonSize(buttonSize).iconWidth)};
	object-fit: contain;
	object-position: center;
`

export const ButtonStyled = {
	Button,
	IconContainer,
	SpinnerContainer,
}
