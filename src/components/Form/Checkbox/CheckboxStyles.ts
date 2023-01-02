import styled, { css } from "styled-components"
import { FontsTokens } from "../../../styles/designTokens/fontsTokens"
import { UiTokens } from "../../../styles/designTokens/uiTokens"
import { thp } from "../../../styles/themeHelpers"
import { CheckboxSize, CustomCheckboxStyles } from "./Checkbox"

type Props = {
    customStyles?: CustomCheckboxStyles,
}

const getCheckboxSize = (size: CheckboxSize) => {
    const Checkbox = {
        [CheckboxSize.Small]: 16,
        [CheckboxSize.Base]: 20,
        [CheckboxSize.Large]: 24,
    }
    return Checkbox[size]
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

const Check = styled.span<Props>`
    position: relative;
    cursor: pointer;
    border: ${UiTokens.borderWidth.size1} solid ${thp.primary.level200._};
    border-radius: ${UiTokens.borderRadius.size4};
    margin-right: 8px;
    background: ${thp.base.level0._};
    transition: ease 0.2s;
    width: ${p => getCheckboxSize(p.customStyles?.size || CheckboxSize.Base)}px;
    height: ${p => getCheckboxSize(p.customStyles?.size || CheckboxSize.Base)}px;

    &:hover {
        //hover styles
    }
`

const Input = styled.input.attrs({ type: "checkbox", }) <Props>`
    position: absolute;
    opacity: 0;

    &:focus + ${Check} {
        box-shadow: 0 0 0 ${UiTokens.borderWidth.size3} ${thp.primary.level200._};
    }

    &:checked + ${Check}  {
        background: ${p => (p.customStyles?.checkBoxColor
        ? p.customStyles?.checkBoxColor
        : thp.primary.level500._)};
        border: none;
    }

    &:disabled + ${Check}, &:disabled:checked + ${Check} {
        background: ${thp.base.level100._};
        border: ${UiTokens.borderWidth.size1} solid ${thp.base.level200._};
        cursor:not-allowed
    }
`

const Tick = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
    height: 100%;
    width: 50%;
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
