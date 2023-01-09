import React from "react"
import Tooltip, { TooltipAlign, TooltipVariant } from "../../components/Tooltip/Tooltip"

const TooltipShowCaseDetailListItem = () => {
    return <div style={{ marginTop: "50px", }}>
        <Tooltip
            tooltipContent="Tooltip"
            customStyles={{
                align: TooltipAlign.Right,
                tooltipVariant: TooltipVariant.Secondary,
                showAlways: true,
            }}
        >
        </Tooltip>
    </div>
}

export default TooltipShowCaseDetailListItem