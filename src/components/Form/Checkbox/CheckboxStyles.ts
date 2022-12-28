import styled, { css } from "styled-components"
import { FontsTokens } from "../../../styles/designTokens/fontsTokens"
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
    border: 1px solid ${thp.base.level500._};
    margin-right: 8px;
    background: ${thp.base.level0._};
    transition: ease 0.2s;

    &:hover {
        //hover styles
    }
`

const Input = styled.input.attrs({ type: "checkbox", }) <Props>`
    position: absolute;
    opacity: 0;
    width: 16px;
    height: 16px;

    &:focus + ${Check} {
        box-shadow: 0 0 0 4px ${thp.system.success.level500._};
    }

    &:checked + ${Check}  {
        background: ${p => (p.customStyles?.checkBoxColor
        ? p.customStyles?.checkBoxColor
        : thp.primary.level500._)};
        border: 1px solid ${thp.base.level1000._};
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
        font-weight: ${FontsTokens.weights.Primary[p.customStyles.textWeight]}
    `)};
`

export const CheckboxStyled = {
    Wrapper,
    Input,
    Check,
    Tick,
    ChildrenWrapper,
}
