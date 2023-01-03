import styled, { css } from "styled-components"
import { FontsTokens } from "../../../styles/designTokens/fontsTokens"
import { UiTokens } from "../../../styles/designTokens/uiTokens"
import { thp } from "../../../styles/themeHelpers"
import { CustomRadioButtonStyles, RadioButtonSize } from "./RadioButton"

type Props = {
    customStyles?: CustomRadioButtonStyles,
}

const getRadioSize = (size: RadioButtonSize) => {
    const Radio = {
        [RadioButtonSize.Small]: 16,
        [RadioButtonSize.Base]: 20,
        [RadioButtonSize.Large]: 24,
    }
    return Radio[size]
}

const Container = styled.label`
    display: flex;
    gap: ${UiTokens.spacing.size8};
    flex-flow: row;
    align-items: center;
    color: ${thp.base.level500._};
    position:relative;
    line-height: 1.3;
`

const Radio = styled.span<Props>`
    cursor: pointer;
    display: flex;
    position: relative;
    width: ${p => getRadioSize(p.customStyles?.size || RadioButtonSize.Base)}px;
    height: ${p => getRadioSize(p.customStyles?.size || RadioButtonSize.Base)}px;
    border-radius: ${UiTokens.borderRadius.sizeTotal};
    border-width: ${UiTokens.borderWidth.size2};
    border-style: solid;
    border-color: ${thp.base.level200._};
    background-color: ${thp.base.level0._};
    transition: ease-in-out 0.2s;
    align-items: center;
    justify-content: center;
    &:after{
        content: "";
        width: 50%;
        height: 50%;
        border-radius: ${UiTokens.borderRadius.sizeTotal};
        background: ${thp.base.level0._};
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
        background-color: ${thp.primary.level500._};
        border-color: ${thp.primary.level500._};
        &:hover{
            //hover styles when checked
        }
    }

    &:focus + ${Radio} {
       box-shadow: 0 0 0 4px ${thp.primary.level200._};
    }

    &:disabled + ${Radio} {
        background-color: ${thp.base.level100._};
        border-color: ${thp.base.level200._};
        :after{
            background-color: ${thp.base.level100._};
        }
        cursor: not-allowed;
    }

`

const ChildrenContainer = styled.div<Props>`
    ${p => (p.customStyles?.textColor && css`
        color: ${thp.base[p.customStyles.textColor]._};
    `)};
    ${p => (p.customStyles?.textWeight
        && FontsTokens.weights.Primary[p.customStyles.textWeight]
    )};
`

export const RadioButtonStyled = {
    Input,
    Radio,
    Container,
    ChildrenContainer,
}