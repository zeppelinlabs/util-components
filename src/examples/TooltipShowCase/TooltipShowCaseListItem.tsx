import React from "react"
import Tooltip from "../../components/Tooltip/Tooltip"
import { TextStyled } from "../../styles/typographic"

const TooltipShowCaseDetailListItem = () => {
    return <div>
        <Tooltip tooltipContent="Content of tooltip">
            <TextStyled.BodyBase>
                Hover here for reveal tooltip
            </TextStyled.BodyBase>
        </Tooltip>
    </div>
}

export default TooltipShowCaseDetailListItem