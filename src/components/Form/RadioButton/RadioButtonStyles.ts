import styled, { css } from "styled-components"
import { thp, uihp } from "../../../styles/themeHelpers"
import { CustomRadioButtonStyles } from "./RadioButton"

type Props = {
    customStyles?: CustomRadioButtonStyles,
}

const Container = styled.label`
    display: flex;
    gap: 8px;
    flex-flow: row;
    align-items: center;
    color: ${thp.base(c => c.level500)};
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
    border-color: ${thp.base(c => c.level500)};
    background-color: ${thp.base(c => c.level0)};
    transition: ease-in-out 0.2s;
    align-items: center;
    justify-content: center;
    &:after{
        content: "";
        width: 4px;
        height: 4px;
        border-radius: 6px;
        background: ${thp.base(c => c.level0)};
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
        background-color: ${thp.primary(c => c.level500)};
        border-color: ${thp.primary(c => c.level500)};
        &:hover{
            //hover styles when checked
        }
    }

    &:focus + ${Radio} {
       box-shadow: 0 0 0 4px ${thp.system(c => c.success.level500)};
    }

    &:disabled + ${Radio} {
        opacity:.5;
        cursor: not-allowed;
    }

`

const ChildrenContainer = styled.div<Props>`
    ${p => (p.customStyles?.textColor && css`
        color: ${thp.base(w => w[p.customStyles!.textColor!])};
    `)};
    ${p => (p.customStyles?.textWeight
        && uihp.FontWeight(w => w.Primary[p.customStyles!.textWeight!])
    )};
`

const ErrorMessageContainer = styled.span`
    color:${thp.system(c => c.warning)};
    font-size: 1.4rem;
    font-weight: bold;
`

export const RadioButtonStyled = {
    Input,
    Radio,
    Container,
    ChildrenContainer,
    ErrorMessageContainer,
}