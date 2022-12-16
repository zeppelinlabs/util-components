import styled, { css,} from "styled-components"
import { thp } from "../../styles/themeHelpers"
import { getFontWeight } from "../../styles/typographicHelper"
import {
    CustomTooltipStyles, TooltipSize, TooltipVariant,TooltipAlign,
} from "./Tooltip"
import { getTooltipPosition, getTooltipAlign } from "./TooltipStyledHelper"

type Props = {
	customStyles?: CustomTooltipStyles,
}


const getTooltipVariant = (variant: TooltipVariant) => {
    const TooltipByCase = {
        [TooltipVariant.Primary]: ({
            backgroundColor: thp.base(c => c.level50),
            borderColor: thp.base(c => c.level900),
            textColor: thp.base(c => c.level900),
        }),
        [TooltipVariant.Secondary]: ({
            backgroundColor: thp.base(c => c.level200),
            borderColor: thp.base(c => c.level900),
            textColor: thp.base(c => c.level50),
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
	border-width: 1px;
	border-radius: 8px;
	align-items: center;
	justify-content: center;
	padding: 12px 16px 10px;
    width: ${p => (p.customStyles?.size
        ? p.customStyles?.size
        : TooltipSize.MaxContent
    )};
    font-size: 1.4rem;
    line-height: 1.2;
    transition: scale 0.3s ease-in-out, opacity 0.3s ease-in, visibility 0.5s ease-in;
    box-shadow: 0px 6px 24px rgba(28, 40, 53, 0.1);
    ${p => (p.customStyles?.textWeight && getFontWeight(p.customStyles?.textWeight))};
    ${p => (getTooltipVariant(p.customStyles?.tooltipVariant || TooltipVariant.Primary))};
    ${p => {
        if (p.customStyles?.position) {
            return getTooltipPosition(p.customStyles?.position)
        } else if (p.customStyles?.align) {
            return getTooltipAlign(p.customStyles?.align)
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
    text-align: ${p => (p.customStyles?.textAlign
        ? p.customStyles?.textAlign
        : "center"
    )};
`

export const TooltipStyled = {
    Tooltip,
    Content,
    Wrapper,
}