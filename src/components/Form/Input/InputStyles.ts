import styled, { css } from "styled-components"
import { device } from "../../../styles/mediaQueries"
import { thp } from "../../../styles/themeHelpers"
import { IconPosition } from "../../CommonTypes"
import { CustomInputStyles } from "./InputCommon"

type InputProps = {
    type: "text" | "number" | "email" | "tel" | "password",
    position?: IconPosition,
    errorMessage?: boolean,
    leadingLabelWidth?: number,
    customStyles?: CustomInputStyles,
    autoHeight?: boolean,
    loading?: boolean,
}


const InputContainer = styled.div`
  position: relative;
  width: fit-content;
  display:flex;
  flex-direction:column;
`

export const InputGeneralStyles = css<InputProps>`
    background: ${thp.base(c => c.level0)};
    border: 1px solid ${thp.base(c => c.level1000)};
    box-sizing: border-box;
    padding: 8px 12px;
    color: ${props => (props.errorMessage
        ? thp.system(c => c.warning.level500)
        : thp.base(c => c.level1000))};
    font-size: 1.6rem;
    width: auto;

    ${props => props.errorMessage && css`
        border-color:${thp.system(c => c.warning.level500)};
    `}

    @media ${device.desktop} {
        font-size: 1.4rem;
    }

    &:focus {
        box-shadow: 0 0 0 4px ${thp.system(c => c.success.level500)};
    }

    &:hover {
        //hover styles
    }

    &:disabled {
        opacity:.5;
        cursor:not-allowed
    }

    ::placeholder {
        color: ${thp.base(c => c.level500)};
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
    ${props => (props.loading && css`
        visibility: hidden;
    `)};
`

type IconContainerProps = {
    position: IconPosition,
}
const IconContainer = styled.div<IconContainerProps>`
    position: absolute;
    top:0;
    bottom: 0;
    width: 12px;
    /* height: 12px; */
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
    font-size: 1.6rem;
    position: absolute;
    top: 9px;
    left: 8px;
    color: ${props => (props.errorMessage
        ? thp.system(c => c.error.level500)
        : thp.base(c => c.level1000))};
    @media ${device.desktop} {
        font-size: 1.4rem;
    };
`

const ErrorWrapper = styled.div`
    display: flex;
    padding-top: 4px;
    width: 100%;
    word-break: break-word;
    color:${thp.system(c => c.error.level500)};
    align-items: center;
`

const ErrorText = styled.span`
    color:${thp.system(c => c.error.level500)};
    font-size: 1.4rem;
    line-height: 1.6rem;

    @media ${device.desktop} {
        font-size: 1.2rem;
    };
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
    resize: ${p => (p.customStyles?.isResizable ? "auto" : "none")};
    width: auto;
    line-height: 1.5;
    min-height: 50px;

    ${props => props.autoHeight && css`
        overflow: hidden;
    `}
`

type CharacterCountProps = {
    reachesTheLimit: boolean,
}

const CharacterCount = styled.span<CharacterCountProps>`
    font-size:1.2rem;
    line-height: 1.4rem;
    color: ${props => (props.reachesTheLimit
        ? thp.system(c => c.error.level500)
        : thp.base(c => c.level1000))};
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
    IconContainer,
    LeadingLabel,
    ErrorText,
    ErrorWrapper,
    InputAction,
    CharacterCount,
    InputTextArea,
    SpinnerContainer,
}