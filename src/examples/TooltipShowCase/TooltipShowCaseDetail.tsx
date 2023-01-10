/* eslint-disable max-lines-per-function */
import React from "react"
import Tooltip, { TooltipAlign, TooltipPosition, TooltipSize, TooltipVariant }
    from "../../components/Tooltip/Tooltip"
import { ReactComponent as InfoIcon } from "../../assets/info.svg"
import DetailComponentPage
    from "../_Layout/DetailComponentPage/DetailComponentPage"
import { TextStyled } from "../../styles/typographic"

const TooltipShowCaseDetail = () => {
    return <DetailComponentPage>
        <div>
            <Tooltip tooltipContent="Content of tooltip">
                <TextStyled.BodyBase>
                    Tooltip example
                </TextStyled.BodyBase>
            </Tooltip>
        </div>
        <div>
            <Tooltip
                tooltipContent="Content of tooltip with small size"
                customStyles={{ size: TooltipSize.Small, }}>
                <TextStyled.BodyBase>
                    Tooltip size
                </TextStyled.BodyBase>
            </Tooltip>
        </div>
        <div>
            <Tooltip
                tooltipContent="Content of tooltip"
                customStyles={{ align: TooltipAlign.Left, }}>
                <TextStyled.BodyBase>
                    Tooltip example align to left
                </TextStyled.BodyBase>
            </Tooltip>
        </div>
        <div>
            <TextStyled.BodyBase style={{
                "display": "flex",
                "gap": "10px",
                "alignItems": "center",
            }}>
                Tooltip example align to right in icon
                <Tooltip
                    tooltipContent="Content of tooltip"
                    customStyles={{
                        align: TooltipAlign.Right,
                        tooltipVariant: TooltipVariant.Secondary,
                    }}>
                    <InfoIcon />
                </Tooltip>
            </TextStyled.BodyBase>
        </div>
        <div>
            <Tooltip
                tooltipContent="Content of tooltip"
                customStyles={{ position: TooltipPosition.Right, }}>
                <TextStyled.BodyBase>
                    Tooltip example position to right
                </TextStyled.BodyBase>
            </Tooltip>
        </div>
        <div>
            <Tooltip
                tooltipContent="Content of tooltip"
                customStyles={{ position: TooltipPosition.Left, }}>
                <TextStyled.BodyBase>
                    Tooltip example position to left
                </TextStyled.BodyBase>
            </Tooltip>
        </div>
        <div>
            <Tooltip
                tooltipContent="Content of tooltip"
                customStyles={{ position: TooltipPosition.Bottom, }}>
                <TextStyled.BodyBase>
                    Tooltip example position to bottom
                </TextStyled.BodyBase>
            </Tooltip>
        </div>
    </DetailComponentPage>
}

export default TooltipShowCaseDetail