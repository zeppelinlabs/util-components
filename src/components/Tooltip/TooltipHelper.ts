/* eslint-disable max-statements */
/* eslint-disable max-lines-per-function */
/* eslint-disable complexity */
import { TooltipPosition } from "./Tooltip"

export type TooltipPositionData = {
    positionTop: number,
    positionBottom: number,
    positionLeft: number,
    positionRight: number,
    height: number,
    width: number,
}

export const positionTooltip = (tooltipPosition: TooltipPosition, tooltip: TooltipPositionData) => {
    switch (tooltipPosition) {
    case TooltipPosition.Top:
        return tooltip.positionTop < tooltip.height ? TooltipPosition.Bottom : tooltipPosition
    case TooltipPosition.Bottom:
        return tooltip.positionBottom < tooltip.height ? TooltipPosition.Top : tooltipPosition
    case TooltipPosition.Left:
        return tooltip.positionLeft < tooltip.width ? TooltipPosition.Right : tooltipPosition
    case TooltipPosition.Right:
        return tooltip.positionRight < tooltip.width ? TooltipPosition.Left : tooltipPosition
    case TooltipPosition.TopRight:
        return tooltip.positionTop < tooltip.height ? TooltipPosition.BottomRight : tooltipPosition
    case TooltipPosition.TopLeft:
        return tooltip.positionTop < tooltip.height ? TooltipPosition.BottomLeft : tooltipPosition
    case TooltipPosition.BottomRight:
        return tooltip.positionBottom < tooltip.height ? TooltipPosition.TopRight : tooltipPosition
    case TooltipPosition.BottomLeft:
        return tooltip.positionBottom < tooltip.height ? TooltipPosition.TopLeft : tooltipPosition
    case TooltipPosition.LeftTop:
        return tooltip.positionLeft < tooltip.width ? TooltipPosition.RightTop : tooltipPosition
    case TooltipPosition.LeftBottom:
        return tooltip.positionLeft < tooltip.width ? TooltipPosition.RightBottom : tooltipPosition
    case TooltipPosition.RightTop:
        return tooltip.positionRight < tooltip.width ? TooltipPosition.LeftTop : tooltipPosition
    case TooltipPosition.RightBottom:
        return tooltip.positionRight < tooltip.width ? TooltipPosition.LeftBottom : tooltipPosition
    default:
        throw new Error("Tooltip position not found")
    }
}

export const alignmentTooltip = (
    tooltipPosition: TooltipPosition,
    tooltip: TooltipPositionData
) => {
    switch (tooltipPosition) {
    case TooltipPosition.Top: {
        if (tooltip.positionLeft < tooltip.width / 2) { return TooltipPosition.TopRight }
        if (tooltip.positionRight < tooltip.width / 2) { return TooltipPosition.TopLeft }
        return tooltipPosition
    }
    case TooltipPosition.Bottom: {
        if (tooltip.positionLeft < tooltip.width / 2) { return TooltipPosition.BottomRight }
        if (tooltip.positionRight < tooltip.width / 2) { return TooltipPosition.BottomLeft }
        return tooltipPosition
    }
    case TooltipPosition.Left: {
        if (tooltip.positionTop < tooltip.height / 2) { return TooltipPosition.LeftBottom }
        if (tooltip.positionBottom < tooltip.height / 2) { return TooltipPosition.LeftTop }
        return tooltipPosition
    }
    case TooltipPosition.Right: {
        if (tooltip.positionTop < tooltip.height / 2) { return TooltipPosition.RightBottom }
        if (tooltip.positionBottom < tooltip.height / 2) { return TooltipPosition.RightTop }
        return tooltipPosition
    }
    case TooltipPosition.TopRight: {
        if (tooltip.positionTop < tooltip.height / 2) { return TooltipPosition.BottomRight }
        if (tooltip.positionRight < tooltip.width / 2) { return TooltipPosition.TopLeft }
        return tooltipPosition
    }
    case TooltipPosition.TopLeft: {
        if (tooltip.positionTop < tooltip.height / 2) { return TooltipPosition.BottomLeft }
        if (tooltip.positionLeft < tooltip.width / 2) { return TooltipPosition.TopRight }
        return tooltipPosition
    }
    case TooltipPosition.BottomRight: {
        if (tooltip.positionBottom < tooltip.height / 2) { return TooltipPosition.TopRight }
        if (tooltip.positionRight < tooltip.width / 2) { return TooltipPosition.BottomLeft }
        return tooltipPosition
    }
    case TooltipPosition.BottomLeft: {
        if (tooltip.positionBottom < tooltip.height / 2) { return TooltipPosition.TopLeft }
        if (tooltip.positionLeft < tooltip.width / 2) { return TooltipPosition.BottomRight }
        return tooltipPosition
    }
    case TooltipPosition.LeftTop: {
        if (tooltip.positionTop < tooltip.height / 2) { return TooltipPosition.LeftBottom }
        if (tooltip.positionLeft < tooltip.width / 2) { return TooltipPosition.RightTop }
        return tooltipPosition
    }
    case TooltipPosition.LeftBottom: {
        if (tooltip.positionBottom < tooltip.height / 2) { return TooltipPosition.LeftTop }
        if (tooltip.positionLeft < tooltip.width / 2) { return TooltipPosition.RightBottom }
        return tooltipPosition
    }
    case TooltipPosition.RightTop: {
        if (tooltip.positionTop < tooltip.height / 2) { return TooltipPosition.RightBottom }
        if (tooltip.positionRight < tooltip.width / 2) { return TooltipPosition.LeftTop }
        return tooltipPosition
    }
    case TooltipPosition.RightBottom: {
        if (tooltip.positionBottom < tooltip.height / 2) { return TooltipPosition.RightTop }
        if (tooltip.positionRight < tooltip.width / 2) { return TooltipPosition.LeftBottom }
        return tooltipPosition
    }
    default:
        throw new Error("Tooltip position not found")
    }
}


