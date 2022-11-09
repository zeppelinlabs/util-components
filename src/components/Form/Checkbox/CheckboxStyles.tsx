import styled, { css } from "styled-components"
import { thp } from "../../../styles/themeHelpers"
import { CustomCheckboxStyles } from "./Checkbox"

type Props = {
    customStyles?: CustomCheckboxStyles,
}

const Wrapper = styled.label<Props>`
    display: flex;
    gap: 10px;
    flex-flow: ${p => (p.customStyles?.contentPosition
        ? p.customStyles?.contentPosition
        : "row"
    )};
    width: fit-content;
`

const Check = styled.span`
    position: relative;
    cursor: pointer;
    width: 16px;
    height: 16px;
    border: none;
    border: 1px solid ${thp.neutral(c => c.level50)};
    margin-right: 8px;
    background: ${thp.common(c => c.white)};
    transition: ease 0.2s;

    &:hover {
        //hover styles
    }
`

const Input = styled.input.attrs({ type: "checkbox", }) <Props>`
    position: absolute;
    height: 1px;
    width: 1px;
    overflow: hidden;
    white-space: nowrap;
    border: 0;
    clip: rect(0 0 0 0);
    clippath: inset(50%);
    margin: -1px;
    padding: 0;
    
    &:focus + ${Check} {
        box-shadow: 0 0 0 4px ${thp.system(c => c.focus)};
    }

    &:checked + ${Check}  {
        background: ${p => (p.customStyles?.checkBoxColor
        ? p.customStyles?.checkBoxColor
        : thp.primary(c => c.level50))};
        border: 1px solid ${thp.common(c => c.black)};
    }

    &:disabled + ${Check}, &:disabled:checked + ${Check} {
        opacity:.5;
        cursor:not-allowed
    }
`

const Tick = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
    height: 100%;
    width:8px;
    margin: 0 auto;

   svg{
       width: 100%;
       height: 100%;
   }
`

const ChildrenWrapper = styled.div<Props>`
    ${p => (p.customStyles?.textColor && css`
        color: ${p.customStyles?.textColor}
    `)};
    ${p => (p.customStyles?.textAlign && css`
        text-align: ${p.customStyles?.textAlign}
    `)};
    ${p => (p.customStyles?.textWeight && css`
        font-weight: ${p.customStyles?.textWeight}
    `)};
`

export const CheckboxStyled = {
    Wrapper,
    Input,
    Check,
    Tick,
    ChildrenWrapper,
}
