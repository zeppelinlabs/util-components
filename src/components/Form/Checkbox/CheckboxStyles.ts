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
    gap: ${UiTokens.spacing.size8};
    flex-flow: ${({ customStyles, }) => (customStyles?.contentPosition
        ? customStyles?.contentPosition
        : "row"
    )};
    width: fit-content;
    align-items: center;
`

const Check = styled.span<Props>`
    position: relative;
    cursor: pointer;
    border: ${UiTokens.borderWidth.size1} solid ${thp.primary.level200._};
    border-radius: ${UiTokens.borderRadius.size4};
    background: ${thp.base.level0._};
    transition: ease 0.2s;
    width: ${({ customStyles, }) => getCheckboxSize(customStyles?.size || CheckboxSize.Base)}px;
    height: ${({ customStyles, }) => getCheckboxSize(customStyles?.size || CheckboxSize.Base)}px;

    &:hover {
        //hover styles
    }
`

const Input = styled.input<Props>`
    position: absolute;
    opacity: 0;

    &:focus + ${Check} {
        box-shadow: 0 0 0 4px ${thp.primary.level200._};
    }

    &:checked + ${Check}  {
        background: ${({ customStyles, }) => (customStyles?.checkBoxColor
        ? customStyles?.checkBoxColor
        : thp.primary.level500._)};

        border-color: ${({ customStyles, }) => (customStyles?.checkBoxColor
        ? customStyles?.checkBoxColor
        : thp.primary.level500._)};;
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
    width: 70%;
    margin: 0 auto;

   svg{
       width: 100%;
       height: 100%;
   }
`

const ChildrenWrapper = styled.div<Props>`
    font-size: 1.6rem;
    ${({ customStyles, }) => (customStyles?.textColor && css`
        color: ${customStyles?.textColor};
    `)};
    ${({ customStyles, }) => (customStyles?.textAlign && css`
        text-align: ${customStyles?.textAlign};
    `)};
    ${({ customStyles, }) => (customStyles?.textWeight && css`
        font-weight: ${FontsTokens.weights.Primary[customStyles.textWeight]};
    `)};
`

const Container = styled.div`
    display: grid;
    gap: ${UiTokens.spacing.size8};
`

export const CheckboxStyled = {
    Wrapper,
    Input,
    Check,
    Tick,
    ChildrenWrapper,
    Container,
}
