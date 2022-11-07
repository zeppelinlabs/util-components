import styled, { css } from "styled-components"
import { CustomLabelStyles } from "./Label"
import { thp } from "../../../styles/themeHelpers"
import { getFontWeight } from "../../../styles/typographicHelper"

type PropsStyled = {
    customStyles?: CustomLabelStyles,
    disabled?: boolean,
}

const Label = styled.label<PropsStyled>`
    display: flex;
    flex-flow: column;
    gap: 6px;
    width: 100%;
    font-size: 1.6rem;
    color: ${props => (props.disabled
        ? thp.neutral(c => c.level50)
        : thp.common(c => c.black))};
    ${p => (p.disabled && css`
        cursor: not-allowed;
        > *{
            cursor: not-allowed;
        }
    `)}
`

const LabelText = styled.span<PropsStyled>`
    display: flex;
    width: 100%;
    align-items: center;
    font-size: 1.6rem;
    gap: 8px;
    text-align: ${p => (p.customStyles?.textAlign
        ? p.customStyles.textAlign
        : "left"
    )};
    ${p => (p.customStyles?.textWeight
        && getFontWeight(p.customStyles?.textWeight)
    )}
    ${p => (!p.disabled && p.customStyles?.textColor && css`
        color:${p.customStyles.textColor};
    `)};
`

const Required = styled.span`
    color: ${thp.system(c => c.critical)};
`

const Content = styled.span`
`

export const LabelStyled = {
    Label,
    Required,
    LabelText,
    Content,
}