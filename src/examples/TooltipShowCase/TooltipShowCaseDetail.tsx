import React from "react"
import Tooltip, { TooltipAlign, TooltipPosition, TooltipSize, TooltipVariant }
    from "../../components/Tooltip/Tooltip"
import LayoutExamples from "../../styles/Layout/LayoutExamples/LayoutExamples"

const TooltipShowCaseDetail = () => {
    return <LayoutExamples>
        <div>
            <Tooltip tooltipContent="Content of tooltip">
                Tooltip example
            </Tooltip>
        </div>
        <div>
            <Tooltip
                tooltipContent="Content of tooltip with small size"
                customStyles={{ align: TooltipAlign.Left, size:TooltipSize.Small, }}>
                Tooltip example align to left
            </Tooltip>
        </div>
        <div>
            <Tooltip
                tooltipContent="Content of tooltip"
                customStyles={{
                    align: TooltipAlign.Right,
                    tooltipVariant: TooltipVariant.Secondary,
                }}>
                Tooltip example align to right
            </Tooltip>
        </div>
        <div>
            <Tooltip
                tooltipContent="Content of tooltip"
                customStyles={{ position: TooltipPosition.Right, }}>
                Tooltip example position to right
            </Tooltip>
        </div>
        <div>
            <Tooltip
                tooltipContent="Content of tooltip"
                customStyles={{ position: TooltipPosition.Left, }}>
                Tooltip example position to left
            </Tooltip>
        </div>
        <div>
            <Tooltip
                tooltipContent="Content of tooltip"
                customStyles={{ position: TooltipPosition.Bottom, }}>
                Tooltip example position to bottom
            </Tooltip>
        </div>
    </LayoutExamples>
}

export default TooltipShowCaseDetail