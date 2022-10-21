import styled, { css } from "styled-components"
import { colors, device } from "../../../globalStyles/theme"

type PropsStyled = {
    disabled?: boolean,
    inline?: boolean,
}

const Label = styled.label<PropsStyled>`
    display: ${props => (props.inline ? "flex" : "block")};
    align-items: ${props => (props.inline && "center")};
    color: ${props => (props.disabled ? colors.common.gray : colors.common.black)};
    font-size: 1.6rem;
    position: relative;

    ${props => props.inline && css`
        width: max-content;
    `}

    @media ${device.desktop}{
        font-size: 1.4rem;
  }
`

const LabelText = styled.span<PropsStyled>`
    color: ${props => (props.disabled ? colors.common.gray : colors.common.black)};
`

const Required = styled.span`
    margin-left: 8px;
    color: ${colors.system.critical};
`

export const LabelStyled = {
    Label,
    Required,
    LabelText,
}