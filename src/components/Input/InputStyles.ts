import styled, { css } from "styled-components"
import { colors, device } from "../../util/theme"
import { IconPosition } from "../CommonTypes"

type InputProps = {
    type: "text" | "number" | "email" | "tel" | "password",
    position?: IconPosition,
    errorMessage?: boolean,
    leadingLabelWidth?: number,
}

const InputContainer = styled.div`
  position: relative;
  width: max-content;
  width: 100%;
`

export const InputGeneralStyles = css<InputProps>`
    background: ${colors.common.white};
    border: 1px solid ${colors.common.black};
    box-sizing: border-box;
    padding: 8px 12px;
    color: ${props => props.errorMessage ? colors.system.critical : colors.common.black};
    font-size: 16px;
    width: auto;

    ${props => props.errorMessage && css`
        border-color:${colors.system.critical};
    `}

    @media ${device.desktop} {
        font-size: 14px;
    }

    &:focus {
        //focus styles
    }

    &:hover {
        //hover styles
    }

    &:disabled {
        //disabled styles
    }

    ::placeholder {
        color: ${colors.common.gray};
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
    `}
    ${props => props.leadingLabelWidth && css`
        /* Leading label width + input padding left */
        padding-left:${`${props.leadingLabelWidth + 12}px`};
    `}
    ${props => props.position === IconPosition.right && css`
        padding-right:32px;
    `}        
`

type IconContainerProps = {
    position: IconPosition,
}
const IconContainer = styled.div<IconContainerProps>`
    position: absolute;
    top:0;
    bottom: 0;
    width: 12px;
    height: 12px;
    pointer-events: none;
    display: flex;
    place-items: center;
    ${props => props.position === IconPosition.left && css`
        top:11px;
        left:8px;
    `};
     ${props => props.position === IconPosition.right && css`
        top:11px;
        right:8px;
    `};
`

const LeadingLabel = styled.span<{ errorMessage?: boolean, }>`
font-family:inherit;
    font-size: 16px;
    position: absolute;
    top: 9px;
    left: 8px;
    color: ${props => props.errorMessage ? colors.system.critical : colors.common.black};

    @media ${device.desktop} {
        font-size: 14px;
    }
`

const ErrorWrapper = styled.div`
    display: flex;
    padding-top: 4px;
    width: 100%;
    word-break: break-word;
    color:${colors.system.critical};
    align-items: center;
`

const ErrorText = styled.span`
    color:${colors.system.critical};
    font-size: 14px;
    line-height: 16px;
    padding-left: 4px;

    @media ${device.desktop} {
        font-size: 12px;
    }
`


export const InputStyled = {
    InputContainer,
    Input,
    IconContainer,
    LeadingLabel,
    ErrorText,
    ErrorWrapper,
}