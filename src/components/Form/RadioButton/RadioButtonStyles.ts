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
        [RadioButtonSize.Small]: {
            size: 16,
            padding: 2,
        },
        [RadioButtonSize.Base]: {
            size: 20,
            padding: 3,
        },
        [RadioButtonSize.Large]: {
            size: 24,
            padding: 4,
        },
    }
    return Radio[size]
}

const Wrapper = styled.span`
    display: grid;
    gap: ${UiTokens.spacing.size8};
`

const Container = styled.label<Props>`
    display: flex;
    gap: ${UiTokens.spacing.size8};
    flex-flow: ${({ customStyles, }) => (customStyles?.contentPosition
        ? customStyles?.contentPosition
        : "row"
    )};
    align-items: center;
    color: ${thp.base.level500._};
    position:relative;
    line-height: 1;
`

const Radio = styled.span<Props>`
    cursor: pointer;
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
    min-width: ${({ customStyles, }) => (
        getRadioSize(customStyles?.size || RadioButtonSize.Base).size
    )}px;
    max-width: ${({ customStyles, }) => (
        getRadioSize(customStyles?.size || RadioButtonSize.Base).size
    )}px;
    min-height: ${({ customStyles, }) => (
        getRadioSize(customStyles?.size || RadioButtonSize.Base).size
    )}px;
    max-height: ${({ customStyles, }) => (
        getRadioSize(customStyles?.size || RadioButtonSize.Base).size
    )}px;
    border-radius: ${UiTokens.borderRadius.sizeTotal};
    border-width: ${UiTokens.borderWidth.size2};
    border-style: solid;
    border-color: ${thp.base.level200._};
    background-color: ${thp.base.level0._};
    transition: ease-in-out 0.2s;
    align-items: center;
    justify-content: center;
    padding: ${({ customStyles, }) => (
        getRadioSize(customStyles?.size || RadioButtonSize.Base).padding
    )}px;
    &:after{
        content: "";
        width: 100%;
        height: 100%;
        aspect-ratio: 1/1;
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
    ${({ customStyles, }) => (customStyles?.textSize
        ? FontsTokens.sizes.Primary[customStyles.textSize]
        : FontsTokens.sizes.Primary.base
    )};
    ${({ customStyles, }) => (customStyles?.textColor && css`
        color: ${thp.base[customStyles.textColor]._};
    `)};
    ${({ customStyles, }) => (customStyles?.textWeight
        && FontsTokens.weights.Primary[customStyles.textWeight]
    )};
`

export const RadioButtonStyled = {
    Wrapper,
    Input,
    Radio,
    Container,
    ChildrenContainer,
}