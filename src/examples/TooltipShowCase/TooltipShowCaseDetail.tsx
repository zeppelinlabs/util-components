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
            <TextStyled.BodyBase>
                <Tooltip tooltipContent="Content of tooltip">
                    Tooltip example
                </Tooltip>
            </TextStyled.BodyBase>
        </div>
        <div>
            <TextStyled.BodyBase>
                <Tooltip
                    tooltipContent="Content of tooltip with small size"
                    customStyles={{ size: TooltipSize.Small, }}>
                    Tooltip size
                </Tooltip>
            </TextStyled.BodyBase>
        </div>
        <div>
            <TextStyled.BodyBase>
                <Tooltip
                    tooltipContent="Content of tooltip"
                    customStyles={{ align: TooltipAlign.Left, }}>
                    Tooltip example align to left
                </Tooltip>
            </TextStyled.BodyBase>
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
            <TextStyled.BodyBase>
                <Tooltip
                    tooltipContent="Content of tooltip"
                    customStyles={{ position: TooltipPosition.Right, }}>
                    Tooltip example position to right
                </Tooltip>
            </TextStyled.BodyBase>
        </div>
        <div>
            <TextStyled.BodyBase>
                <Tooltip
                    tooltipContent="Content of tooltip"
                    customStyles={{
                        position: TooltipPosition.Left,
                        tooltipVariant: TooltipVariant.Secondary,
                    }}>
                    Tooltip example position to left
                </Tooltip>
            </TextStyled.BodyBase>
        </div>
        <div>
            <TextStyled.BodyBase>
                <Tooltip
                    tooltipContent="Content of tooltip"
                    customStyles={{ position: TooltipPosition.Bottom, }}>
                    Tooltip example position to bottom
                </Tooltip>
            </TextStyled.BodyBase>
        </div>
    </DetailComponentPage>
}

export default TooltipShowCaseDetail