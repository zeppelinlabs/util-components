import styled, { css } from "styled-components"
import { thp } from "../../../styles/themeHelpers"
import { getFontWeight } from "../../../styles/typographicHelper"
import { CustomRadioButtonStyles } from "./RadioButton"

type Props = {
    customStyles?: CustomRadioButtonStyles,
}

const Container = styled.label`
    display: flex;
    gap: 8px;
    flex-flow: row;
    align-items: center;
    color: ${thp.neutral(c => c.level50)};
    position:relative;
    line-height: 1.3;
`

const Radio = styled.span`
    cursor: pointer;
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
    min-width: 12px;
    max-width: 12px;
    min-height: 12px;
    max-height: 12px;
    border-radius: 12px;
    border-width: 1px;
    border-style: solid;
    border-color: ${thp.neutral(c => c.level50)};
    background-color: ${thp.common(c => c.white)};
    transition: ease-in-out 0.2s;
    align-items: center;
    justify-content: center;
    &:after{
        content: "";
        width: 6px;
        height: 6px;
        border-radius: 6px;
        background: ${thp.common(c => c.white)};
    }

    &:hover {
        //hover styles
    }
`

const Input = styled.input`
    position:absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    opacity: 0;

    &:checked + ${Radio} {
        background-color: ${thp.primary(c => c.level50)};
        border-color: ${thp.primary(c => c.level50)};
        &:hover{
            //hover styles when checked
        }
    }

    &:focus + ${Radio} {
       box-shadow: 0 0 0 4px ${thp.system(c => c.focus)};
    }

    &:disabled + ${Radio} {
        opacity:.5;
        cursor: not-allowed;
    }

`

const ChildrenContainer = styled.div<Props>`
    ${p => (p.customStyles?.textColor && css`
        color: ${p.customStyles?.textColor};
    `)};
    ${p => (p.customStyles?.textWeight
        && getFontWeight(p.customStyles?.textWeight)
    )};
`

export const RadioButtonStyled = {
    Input,
    Radio,
    Container,
    ChildrenContainer,
}