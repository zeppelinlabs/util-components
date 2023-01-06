import styled, { css } from "styled-components"
import { CustomSwitchStyles, SwitchSize } from "./Switch"
import { thp } from "../../../styles/themeHelpers"
import { FontsTokens } from "../../../styles/designTokens/fontsTokens"
import { UiTokens } from "../../../styles/designTokens/uiTokens"

type Props = {
    customStyles?: CustomSwitchStyles,
}

const getCheckboxSize = (size: SwitchSize) => {
    const Switch = {
        [SwitchSize.Small]: {
            width: 48,
            height: 24,
            elipse: 16,
        },
        [SwitchSize.Base]: {
            width: 56,
            height: 28,
            elipse: 20,
        },
        [SwitchSize.Large]: {
            width: 64,
            height: 32,
            elipse: 24,
        },
    }
    return Switch[size]
}

const Wrapper = styled.label<Props>`
    display: flex;
    gap: ${UiTokens.spacing.size8};
    flex-flow: ${p => (p.customStyles?.contentPosition
        ? p.customStyles?.contentPosition
        : "row"
    )};
    align-items: ${p => (p.customStyles?.contentAlign
        ? p.customStyles?.contentAlign
        : "center"
    )};
    width: fit-content;
`

const Slider = styled.span<Props>`
    display: flex;
    cursor: pointer;
    width: 100%;
    height: 100%;
    max-height: ${p => getCheckboxSize(p.customStyles?.size || SwitchSize.Base).height}px;
    min-height: ${p => getCheckboxSize(p.customStyles?.size || SwitchSize.Base).height}px;
    max-width: ${p => getCheckboxSize(p.customStyles?.size || SwitchSize.Base).width}px;
    min-width: ${p => getCheckboxSize(p.customStyles?.size || SwitchSize.Base).width}px;
    border-radius: ${UiTokens.borderRadius.size60};
    position: relative;
    transition: ease 0.3s;
    background-color:  ${thp.primary.level700._};

    &:before{
        content: "";
        position:absolute;
        bottom: 4px;
        left: 4px;
        width: ${p => getCheckboxSize(p.customStyles?.size || SwitchSize.Base).elipse}px;
        height: ${p => getCheckboxSize(p.customStyles?.size || SwitchSize.Base).elipse}px;
        border-radius: ${UiTokens.borderRadius.sizeTotal};
        transition: ease 0.2s;
        background: ${thp.base.level0._};
    };
`

const Input = styled.input<Props>`
    position: absolute;
    opacity: 0;

    &:checked + ${Slider} {
        background-color: ${thp.system.success.level500._};
        &:before {
            left: calc(100% - 4px);
            transform: translateX(-100%);
        };
    };

    &:focus + ${Slider} {
        box-shadow: 0 0 0 4px ${thp.primary.level200._};
    };

    &:hover + ${Slider} {
        //hover styles
    };

    &:disabled + ${Slider} {
        background-color: ${thp.base.level500._};
        cursor:not-allowed;
        &:before {
            background-color: ${thp.base.level100._};
        };
    };
    
    &:disabled:checked + ${Slider} {
        background-color: ${thp.base.level300._};
        cursor:not-allowed;
        &:before {
            background-color: ${thp.base.level100._};
        };
    }
`

const ChildrenWrapper = styled.div<Props>`
    ${p => (p.customStyles?.textColor && css`
        color: ${p.customStyles?.textColor};
    `)};
    ${p => (p.customStyles?.textAlign && css`
        text-align: ${p.customStyles?.textAlign};
    `)};
    ${p => (p.customStyles?.textWeight
        && FontsTokens.weights.Primary[p.customStyles.textWeight]
    )};
`

export const SwitchStyled = {
    Wrapper,
    Input,
    Slider,
    ChildrenWrapper,
}