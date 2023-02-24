import styled, { css } from "styled-components"
import { CustomSwitchStyles, SwitchSize, SwitchVariant } from "./Switch"
import { thp } from "../../../styles/themeHelpers"
import { FontsTokens } from "../../../styles/designTokens/fontsTokens"
import { UiTokens } from "../../../styles/designTokens/uiTokens"

type Props = {
    customStyles?: CustomSwitchStyles,
}

const getSwitchSize = (size: SwitchSize) => {
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

const getSwitchVariant = (variant: SwitchVariant) => {
    const SwitchByCase = {
        [SwitchVariant.Primary]: (PrimarySwitch),
        [SwitchVariant.Showcase]: (ShowcaseSwitch),
    }
    return SwitchByCase[variant]
}

const PrimarySwitch = () => css<Props>`
    &:not(:checked) + ${Slider} {
        background-color:  ${thp.primary.level800._};
    }

    &:checked + ${Slider} {
        background-color: ${thp.primary.level500._};
        &:before {
            left: calc(100% - 4px);
            transform: translateX(-100%);
        };
    };

    &:focus + ${Slider} {
        box-shadow: 0 0 0 4px ${thp.primary.level100._};
    };
`

const ShowcaseSwitch = () => css<Props>`
    &:not(:checked) + ${Slider} {
        background-color:  ${thp.secundary.level1000._};
    }
    
    &:checked + ${Slider} {
        background-color: ${thp.system.success.level500._};
        &:before {
            left: calc(100% - 4px);
            transform: translateX(-100%);
        };
    };

    &:focus + ${Slider} {
        box-shadow: 0 0 0 4px ${thp.secundary.level100._};
    };
`

const Wrapper = styled.label<Props>`
    display: flex;
    gap: ${UiTokens.spacing.size8};
    flex-flow: ${({ customStyles, }) => (customStyles?.contentPosition
        ? customStyles?.contentPosition
        : "row"
    )};
    align-items: ${({ customStyles, }) => (customStyles?.contentAlign
        ? customStyles?.contentAlign
        : "center"
    )};
    width: fit-content;
`

const Slider = styled.span<Props>`
    display: flex;
    cursor: pointer;
    width: 100%;
    height: 100%;
    max-height: ${p => getSwitchSize(p.customStyles?.size || SwitchSize.Base).height}px;
    min-height: ${p => getSwitchSize(p.customStyles?.size || SwitchSize.Base).height}px;
    max-width: ${p => getSwitchSize(p.customStyles?.size || SwitchSize.Base).width}px;
    min-width: ${p => getSwitchSize(p.customStyles?.size || SwitchSize.Base).width}px;
    border-radius: ${UiTokens.borderRadius.size60};
    position: relative;
    transition: ease 0.3s;

    &:before{
        content: "";
        position:absolute;
        bottom: 4px;
        left: 4px;
        width: ${p => getSwitchSize(p.customStyles?.size || SwitchSize.Base).elipse}px;
        height: ${p => getSwitchSize(p.customStyles?.size || SwitchSize.Base).elipse}px;
        border-radius: ${UiTokens.borderRadius.sizeTotal};
        transition: ease 0.2s;
        background: ${thp.base.level0._};
        box-shadow: ${UiTokens.shadows.shadow6};
    };
`

const Input = styled.input<Props>`
    position: absolute;
    opacity: 0;

    ${({ customStyles, }) => (getSwitchVariant(customStyles?.switchVariant
    || SwitchVariant.Primary))}
    
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
    ${({ customStyles, }) => (customStyles?.textSize
        ? FontsTokens.sizes.Primary[customStyles.textSize]
        : FontsTokens.sizes.Primary.base
    )};
    ${({ customStyles, }) => (customStyles?.textColor && css`
        color: ${customStyles?.textColor};
    `)};
    ${({ customStyles, }) => (customStyles?.textAlign && css`
        text-align: ${customStyles?.textAlign};
    `)};
    ${({ customStyles, }) => (customStyles?.textWeight
        && FontsTokens.weights.Primary[customStyles.textWeight]
    )};
`

export const SwitchStyled = {
    Wrapper,
    Input,
    Slider,
    ChildrenWrapper,
}