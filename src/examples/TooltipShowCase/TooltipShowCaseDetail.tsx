/* eslint-disable max-lines-per-function */
import React from "react"
import Tooltip, { TooltipPosition, TooltipSize, TooltipVariant }
    from "../../components/Tooltip/Tooltip"
import LayoutExamples from "../../styles/Layout/LayoutExamples/LayoutExamples"
import { ReactComponent as InfoIcon } from "../../assets/info.svg"

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
                customStyles={{ size: TooltipSize.Small, }}>
                Tooltip size
            </Tooltip>
        </div>
        <div>
            <Tooltip
                tooltipContent="Content of tooltip"
                customStyles={{ position: TooltipPosition.TopLeft,}}>
                Tooltip example position top align left
            </Tooltip>
        </div>
        <div>
            {"Tooltip example position top align right in icon "}
            <Tooltip
                tooltipContent="Content of tooltip"
                customStyles={{
                    position: TooltipPosition.TopRight,
                    tooltipVariant: TooltipVariant.Secondary,
                }}>
                <InfoIcon />
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
                customStyles={{ position: TooltipPosition.Bottom, }}>
                Tooltip example position to bottom
            </Tooltip>
        </div>
    </LayoutExamples>
}

export default TooltipShowCaseDetail