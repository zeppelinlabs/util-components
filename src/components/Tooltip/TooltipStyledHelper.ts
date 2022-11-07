/* eslint-disable max-lines-per-function */
import { css } from "styled-components"
import { TooltipAlign, TooltipPosition } from "./Tooltip"

export const getTooltipAlign = (align: TooltipAlign) => {
    const alignByCase = {
        [TooltipAlign.Left]: ({
            container: css`
                left: calc(50% - 30px);
            `,
            pseudoElement: css`
                left:18px;
            `,
        }),
        [TooltipAlign.Right]: ({
            container: css`
                right: calc(50% - 30px);
            `,
            pseudoElement: css`
                right:18px;
            `,
        }),
        [TooltipAlign.Center]: ({
            container: css`
                left: 50%;
                translate:-50% 0;
            `,
            pseudoElement: css`
                left: 50%;
                translate:-50% 0;
            `,
        }),
    }
    return css`
        bottom: calc(100% + 12px);
        ${alignByCase[align].container}
        &:after, &:before{
            margin-top: 0px;
            border-left-color: transparent;
            border-right-color: transparent;
            border-bottom-color: transparent;
            border-width:9px 11px 0 11px;
            top: 100%;
            ${alignByCase[align].pseudoElement}
        }
        &:after{
            margin-top: -1px;
        }
    `
}

export const getTooltipPosition = (position: TooltipPosition) => {
    const positionByCase = {
        [TooltipPosition.Left]: ({
            container: css`
                right: calc(100% + 10px);
                top: 50%;
					 translate:0 -50%;
            `,
            pseudoElement: css`
                border-width:9px 0 9px 7px;
                top: 50%;
					 translate:0 -50%;
                left:100%;
                margin-left: 0px;
                border-bottom-color: transparent;
                border-top-color: transparent;
            `,
            arrowBorder: css`
                margin-left: -1px;
            `,
        }),
        [TooltipPosition.Right]: ({
            container: css`
                left: calc(100% + 10px);
                top: 50%;
                translate:0 -50%;
            `,
            pseudoElement: css`
                border-width:9px 7px 9px 0;
                top: 50%;
					 translate:0 -50%;
                right:100%;
                margin-right: 0px;
                border-bottom-color: transparent;
                border-top-color: transparent;
            `,
            arrowBorder: css`
                margin-right: -1px;
            `,
        }),
        [TooltipPosition.Bottom]: ({
            container: css`
                top: calc(100% + 10px);
                left: 50%;
                translate:-50% 0;
            `,
            pseudoElement: css`
                border-width:0 11px 9px 11px;
                bottom: 100%;
                margin-bottom: 0px;
                border-left-color: transparent;
                border-right-color: transparent;
            `,
            arrowBorder: css`
                margin-bottom: -1px;
            `,
        }),
    }
    return css`
        ${positionByCase[position].container}
        &:after, &:before{
            ${positionByCase[position].pseudoElement}
        }
        &:after{
            ${positionByCase[position].arrowBorder}
        }
    `
}