/* eslint-disable max-lines-per-function */
import React from "react"
import Tooltip, { TooltipAlign, TooltipPosition, TooltipSize, TooltipVariant }
    from "../../components/Tooltip/Tooltip"
import { ReactComponent as InfoIcon } from "../../assets/info.svg"
import LayoutDescriptionComponent
    from "../Layout/LayoutDescriptionComponent/LayoutDescriptionComponent"

const TooltipShowCaseDetail = () => {
    return <LayoutDescriptionComponent>
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
                customStyles={{ align: TooltipAlign.Left, }}>
                Tooltip example align to left
            </Tooltip>
        </div>
        <div>
            {"Tooltip example align to right in icon "}
            <Tooltip
                tooltipContent="Content of tooltip"
                customStyles={{
                    align: TooltipAlign.Right,
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
    </LayoutDescriptionComponent>
}

export default TooltipShowCaseDetail