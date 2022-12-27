import React, { useRef, useState } from "react"
import { TextAlign, TextWeight } from "../../styles/typographicHelper"
import { alignmentTooltip, positionTooltip, TooltipPositionData } from "./TooltipHelper"
import { TooltipStyled } from "./TooltipStyled"

export enum TooltipPosition {
    Right = "right",
    Left = "left",
    Bottom = "bottom",
    Top = "top",
    TopRight = "top-right",
    TopLeft = "top-left",
    BottomRight = "bottom-right",
    BottomLeft = "bottom-left",
    LeftTop = "left-top",
    LeftBottom = "left-bottom",
    RightTop = "right-top",
    RightBottom = "right-bottom",
}
export enum TooltipSize {
    Small = "190px",
    Medium = "250px",
    Large = "350px",
    MaxContent = "max-content",
}
export enum TooltipVariant {
    Primary = "primary",
    Secondary = "secondary",
}

export type CustomTooltipStyles = {
    tooltipVariant?: TooltipVariant,
    textAlign?: TextAlign,
    textWeight?: TextWeight,
    position?: TooltipPosition,
    size?: TooltipSize,
}

export type TooltipProps = {
    children: React.ReactNode,
    tooltipContent: React.ReactNode,
    customStyles?: CustomTooltipStyles,
}

const Tooltip = (props: TooltipProps) => {
    const [customStyles, setCustomStyles,] = useState(props.customStyles)

    const element = useRef<HTMLSpanElement>(null)

    const onMouseOver = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        const tooltip = element.current as HTMLElement
        const tooltipPosition = e.currentTarget.getBoundingClientRect()
        const windowWidth = window.innerWidth
        const windowHeight = window.innerHeight

        const tooltipPositionData: TooltipPositionData = {
            width: tooltip.offsetWidth,
            height: tooltip.offsetHeight,
            positionTop: tooltipPosition.top,
            positionBottom: windowHeight - tooltipPosition.top,
            positionLeft: tooltipPosition.left,
            positionRight: windowWidth - tooltipPosition.left,
        }

        const currentPosition = props.customStyles?.position || TooltipPosition.Top

        const newTooltipPosition = positionTooltip(currentPosition, tooltipPositionData)

        const tooltipPositionedAndAligned
            = alignmentTooltip(newTooltipPosition, tooltipPositionData)

        setCustomStyles({ ...customStyles, position: tooltipPositionedAndAligned, })
    }

    return (
        <TooltipStyled.Wrapper onMouseOver={onMouseOver} customStyles={customStyles}>
            {props.children}
            <TooltipStyled.Tooltip ref={element}
                customStyles={customStyles}
            >
                <TooltipStyled.Content customStyles={customStyles}>
                    {props.tooltipContent}
                </TooltipStyled.Content>
            </TooltipStyled.Tooltip>
        </TooltipStyled.Wrapper >
    )
}

export default Tooltip