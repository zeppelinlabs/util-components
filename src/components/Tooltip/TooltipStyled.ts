import styled, { css, } from "styled-components"
import { FontsTokens } from "../../styles/designTokens/fontsTokens"
import { UiTokens } from "../../styles/designTokens/uiTokens"
import { thp } from "../../styles/themeHelpers"
import {
    CustomTooltipStyles, TooltipSize, TooltipVariant, TooltipAlign,
} from "./Tooltip"
import { getTooltipPosition, getTooltipAlign } from "./TooltipStyledHelper"

type Props = {
    customStyles?: CustomTooltipStyles,
}


const getTooltipVariant = (variant: TooltipVariant) => {
    const TooltipByCase = {
        [TooltipVariant.Primary]: ({
            backgroundColor: thp.base.level1000._,
            borderColor: thp.base.level1000._,
            textColor: thp.base.level0._,
        }),
        [TooltipVariant.Secondary]: ({
            backgroundColor: thp.base.level100._,
            borderColor: thp.base.level100._,
            textColor: thp.base.level1000._,
        }),
    }
    return css`
        background-color: ${TooltipByCase[variant].backgroundColor};
        border-color: ${TooltipByCase[variant].borderColor};
        color: ${TooltipByCase[variant].textColor};
        &:after{
            border-color: ${TooltipByCase[variant].backgroundColor};
        }
        &:before{
            border-color: ${TooltipByCase[variant].borderColor};
        }
    `
}

const Tooltip = styled.span<Props>`
    display: flex;
    opacity: 0;
    scale: .9;
    visibility:hidden;
    position: absolute;
	border-style: solid;
	border-width: ${UiTokens.borderWidth.size1};
	border-radius: ${UiTokens.borderRadius.size8};
	align-items: center;
	justify-content: center;
	padding: 8px 16px 4px;
    width: ${({ customStyles, }) => (customStyles?.size
        ? customStyles?.size
        : TooltipSize.MaxContent
    )};
    font-size: 1.4rem;
    line-height: 1.2;
    transition: scale 0.3s ease-in-out, opacity 0.3s ease-in, visibility 0.5s ease-in;
    box-shadow: 0px 6px 24px rgba(28, 40, 53, 0.1);
    ${({ customStyles, }) => (customStyles?.textWeight
        && FontsTokens.weights.Primary[customStyles.textWeight]
    )};
    ${({ customStyles, }) => (getTooltipVariant(customStyles?.tooltipVariant
        || TooltipVariant.Primary))};
    ${({ customStyles, }) => {
        if (customStyles?.position) {
            return getTooltipPosition(customStyles?.position)
        } else if (customStyles?.align) {
            return getTooltipAlign(customStyles?.align)
        } else {
            return getTooltipAlign(TooltipAlign.Center)
        }
    }}

    &:after,
    &:before{
        content: "";
        border-style: solid;
        transition: all 0.5s ease-in-out;
        position: absolute;
    }
`

const Wrapper = styled.span<Props>`
	cursor: pointer;
	position: relative;
	&:hover{
		${Tooltip}{
			opacity: 1;
            scale: 1;
            visibility: visible;
		};
	}
`

const Content = styled.span<Props>`
    text-align: ${({ customStyles, }) => (customStyles?.textAlign
        ? customStyles?.textAlign
        : "center"
    )};
`

export const TooltipStyled = {
    Tooltip,
    Content,
    Wrapper,
}