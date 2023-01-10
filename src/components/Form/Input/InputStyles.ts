import styled, { css } from "styled-components"
import { FontsTokens } from "../../../styles/designTokens/fontsTokens"
import { UiTokens } from "../../../styles/designTokens/uiTokens"
import { thp } from "../../../styles/themeHelpers"
import { IconPosition } from "../../CommonTypes"
import { CustomInputStyles, InputSize } from "./InputCommon"

type InputProps = {
    type: "text" | "number" | "email" | "tel" | "password",
    position?: IconPosition,
    errorMessage?: boolean,
    leadingLabelWidth?: number,
    customStyles?: CustomInputStyles,
    autoHeight?: boolean,
    isLoading?: boolean,
}

const getInputSize = (size: InputSize) => {
    const Input = {
        [InputSize.Small]: 36,
        [InputSize.Medium]: 40,
        [InputSize.Large]: 46,
        [InputSize.Xlarge]: 48,
    }
    return Input[size]
}

const getInputTextAreaSize = (size: InputSize) => {
    const InputTextArea = {
        [InputSize.Small]: 72,
        [InputSize.Medium]: 80,
        [InputSize.Large]: 92,
        [InputSize.Xlarge]: 96,
    }
    return InputTextArea[size]
}

const InputContainer = styled.div`
  position: relative;
  width: 100%;
  display:flex;
  flex-direction:column;
`

export const InputGeneralStyles = css<InputProps>`
    background: ${thp.base.level0._};
    border: ${UiTokens.borderWidth.size1} solid ${thp.base.level200._};
    border-radius: ${UiTokens.borderRadius.size8};
    box-sizing: border-box;
    padding: 8px 16px;
    color: ${thp.base.level1000._};
    font-size: ${FontsTokens.sizes.Primary.sm.fontSize};
    width: auto;
    height: ${p => getInputSize(p.customStyles?.size || InputSize.Medium)}px;

    ${props => props.errorMessage && css`
        border-color:${thp.system.error.level200._};
    `}

    &:focus {
        box-shadow: 0 0 0 4px ${thp.primary.level200._};
    }

    &:focus-visible {
        outline: none;
    }

    &:hover {
        //hover styles
    }

    &:disabled {
        background-color: ${thp.base.level100._};
        border-color: ${thp.base.level200._};
        cursor:not-allowed
    }

    ::placeholder {
        color: ${thp.base.level300._};
    }

    /* Opcional: Eliminar estilos de input number*/
    &[type=number]::-webkit-outer-spin-button,
    &[type=number]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        appearance: none;
        margin: 0;
    }
    &[type=number] {
        -moz-appearance: textfield;
    }
`


const Input = styled.input <InputProps>`
    ${InputGeneralStyles};
    ${props => props.position === IconPosition.left && css`
        padding-left:32px;
    `};
    ${props => props.leadingLabelWidth && css`
        /* Leading label width + input padding left */
        padding-left:${`${props.leadingLabelWidth + 12}px`};
    `};
    ${props => props.position === IconPosition.right && css`
        padding-right:32px;
    `};
    ${props => props.customStyles?.textColor && css`
        color: ${props.customStyles?.textColor};
    `};
    ${props => props.customStyles?.textAlign && css`
        text-align: ${props.customStyles?.textAlign};
    `};
    ${props => props.customStyles?.textWeight && css`
        font-weight: ${props.customStyles?.textWeight};
    `};
    ${props => (props.isLoading && css`
        visibility: hidden;
    `)};
`

const LeadingLabel = styled.span<{ errorMessage?: boolean, }>`
    font-family:inherit;
    font-size: ${FontsTokens.sizes.Primary.sm.fontSize};
    font-weight: ${FontsTokens.weights.Primary.bold};
    position: absolute;
    top: 30%;
    left: 16px;
    color: ${({ errorMessage, }) => (errorMessage
        ? thp.system.error.level500._
        : thp.base.level300._)};
`

const InputAction = styled.button`
    width: 14px;
    height: 14px;
    outline:none;
    cursor: pointer;
    background: none;
    border:none;
    position: absolute;
    top:10px;
    right:12px;
    z-index:1;

    &:disabled {
        opacity: 0.5;
        cursor:not-allowed;
    };
`

const InputTextArea = styled.textarea<InputProps>`
    ${InputGeneralStyles};
    max-width: 100%;
    resize: ${({ customStyles, }) => (customStyles?.isResizable ? "auto" : "none")};
    width: auto;
    line-height: ${FontsTokens.sizes.Primary.sm.lineHeight};
    min-height: ${p => getInputTextAreaSize(p.customStyles?.size || InputSize.Medium)}px;

    ${props => props.autoHeight && css`
        overflow: hidden;
    `}
`

type CharacterCountProps = {
    reachesTheLimit: boolean,
}

const CharacterCount = styled.span<CharacterCountProps>`
    font-size: ${FontsTokens.sizes.Primary.xs.fontSize};
    font-weight: ${FontsTokens.weights.Primary.light};
    line-height: ${FontsTokens.sizes.Primary.xs.lineHeight};
    color: ${({ reachesTheLimit, }) => (reachesTheLimit
        ? thp.system.error.level500._
        : thp.base.level1000._)};
    margin:4px 0px;
    text-align: right;
    max-height: 14px;
`

const SpinnerContainer = styled.span`
    max-width: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

export const InputStyled = {
    InputContainer,
    Input,
    LeadingLabel,
    InputAction,
    CharacterCount,
    InputTextArea,
    SpinnerContainer,
}