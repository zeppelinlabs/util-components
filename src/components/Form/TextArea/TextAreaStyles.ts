import styled, { css } from "styled-components"
import { colors, device } from "../../../globalStyles/theme"

type PropsStyled = {
    errorMessage?: string | null,
    autoHeight?: boolean,
}

const TextAreaContainer = styled.div`
    position: relative;
    display:flex;
    flex-direction:column;
`

const TextArea = styled.textarea<PropsStyled>`
    background: ${colors.common.white};
    border: 1px solid ${colors.common.black};
    border-color: ${props => (props.errorMessage && colors.system.critical)};
    box-sizing: border-box;
    padding: 8px 12px;
    color: ${props => (props.errorMessage
        ? colors.system.critical : colors.common.black)};
    font-size: 1.6rem;
    max-width: 100%;
    resize: none;
    width: auto;
    line-height: 1.5;
    min-height: 50px;

    @media ${device.desktop} {
        width: auto;
        font-size: 1.4rem;
    }
    ${props => props.autoHeight && css`
        overflow: hidden;
    `}

    &:focus {
        //focus styles
    }

    &:hover {
        //hover styles
    }

    &:disabled {
        //disabled styles
        cursor: not-allowed;
        opacity: 0.5;
    }

    ::placeholder {
        color: ${colors.common.gray};
    }


`

type CharacterCountProps = {
    reachesTheLimit: boolean,
}

const CharacterCount = styled.span<CharacterCountProps>`
    font-size:1.2rem;
    line-height: 1.4rem;
    color: ${props => (props.reachesTheLimit
        ? colors.system.critical
        : colors.common.black)};
    margin:4px 0px;
    text-align: right;
    max-height: 14px;
`

export const TextAreaStyled = {
    TextArea,
    CharacterCount,
    TextAreaContainer,
}