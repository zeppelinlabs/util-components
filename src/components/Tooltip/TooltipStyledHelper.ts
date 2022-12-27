/* eslint-disable max-lines-per-function */
import { css } from "styled-components"
import { TooltipPosition } from "./Tooltip"

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
        [TooltipPosition.Top]: ({
            container: css`
                bottom: calc(100% + 10px);
                left: 50%;
                translate:-50% 0;
            `,
            pseudoElement: css`
                border-width:9px 11px 0 11px;
                top: 100%;
                margin-top: 0px;
                border-left-color: transparent;
                border-right-color: transparent;
            `,
            arrowBorder: css`
                margin-top: -1px;
            `,
        }),
        [TooltipPosition.TopRight]: ({
            container: css`
                bottom: calc(100% + 10px);
                left: 0;
            `,
            pseudoElement: css`
                border-width:9px 11px 0 11px;
                top: 100%;
                margin-top: 0px;
                border-left-color: transparent;
                border-right-color: transparent;
                left: 3px;
            `,
            arrowBorder: css`
                margin-top: -1px;
            `,
        }),
        [TooltipPosition.TopLeft]: ({
            container: css`
                bottom: calc(100% + 10px);
                right: 0;
            `,
            pseudoElement: css`
                border-width:9px 11px 0 11px;
                top: 100%;
                margin-top: 0px;
                border-left-color: transparent;
                border-right-color: transparent;
                right: 3px;
            `,
            arrowBorder: css`
                margin-top: -1px;
            `,
        }),
        [TooltipPosition.BottomRight]: ({
            container: css`
                top: calc(100% + 10px);
                left: 0;
            `,
            pseudoElement: css`
                border-width:0 11px 9px 11px;
                bottom: 100%;
                margin-bottom: 0px;
                border-left-color: transparent;
                border-right-color: transparent;
                left: 3px;
            `,
            arrowBorder: css`
                margin-bottom: -1px;
            `,
        }),
        [TooltipPosition.BottomLeft]: ({
            container: css`
                top: calc(100% + 10px);
                right: 0;
            `,
            pseudoElement: css`
                border-width:0 11px 9px 11px;
                bottom: 100%;
                margin-bottom: 0px;
                border-left-color: transparent;
                border-right-color: transparent;
                right: 3px;
            `,
            arrowBorder: css`
                margin-bottom: -1px;
            `,
        }),
        [TooltipPosition.LeftBottom]: ({
            container: css`
                right: calc(100% + 10px);
                top: 0;
            `,
            pseudoElement: css`
                border-width:9px 0 9px 7px;
                top: 3px;
                left:100%;
                margin-left: 0px;
                border-bottom-color: transparent;
                border-top-color: transparent;
            `,
            arrowBorder: css`
                margin-left: -1px;
            `,
        }),
        [TooltipPosition.LeftTop]: ({
            container: css`
                right: calc(100% + 10px);
                bottom: 0;
            `,
            pseudoElement: css`
                border-width:9px 0 9px 7px;
                bottom: 3px;
                left:100%;
                margin-left: 0px;
                border-bottom-color: transparent;
                border-top-color: transparent;
            `,
            arrowBorder: css`
                margin-left: -1px;
            `,
        }),
        [TooltipPosition.RightBottom]: ({
            container: css`
                left: calc(100% + 10px);
                top: 0;
            `,
            pseudoElement: css`
                border-width:9px 7px 9px 0;
                top: 3px;
                right:100%;
                margin-right: 0px;
                border-bottom-color: transparent;
                border-top-color: transparent;
            `,
            arrowBorder: css`
                margin-right: -1px;
            `,
        }),
        [TooltipPosition.RightTop]: ({
            container: css`
                left: calc(100% + 10px);
                bottom: 0;
            `,
            pseudoElement: css`
                border-width:9px 7px 9px 0;
                bottom: 3px;
                right:100%;
                margin-right: 0px;
                border-bottom-color: transparent;
                border-top-color: transparent;
            `,
            arrowBorder: css`
                margin-right: -1px;
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