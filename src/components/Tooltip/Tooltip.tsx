import React from "react"
import { TooltipStyled } from "./TooltipStyled"

export enum TooltipAlign {
	Center = "center",
    Left = "left",
	Right = "right",
}
export enum TooltipPosition {
    Right = "right",
    Left = "left",
    Bottom = "bottom",
}
export enum TooltipTextAlign {
    Center = "center",
    Right = "right",
}
export enum TooltipTextWeight {
    Light = "100",
    Bold = "800",
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
    textAlign?: TooltipTextAlign,
    textWeight?: TooltipTextWeight,
    position?: TooltipPosition,
    align?: TooltipAlign,
    size?: TooltipSize,
}

export type TooltipProps = {
    children: React.ReactNode,
    tooltipContent: React.ReactNode,
    customStyles?: CustomTooltipStyles,
}

const Tooltip = (props: TooltipProps) => {
    return (
        <TooltipStyled.Wrapper customStyles={props.customStyles}>

            {props.children}
            <TooltipStyled.Tooltip customStyles={props.customStyles}>
                <TooltipStyled.Content customStyles={props.customStyles}>
                    {props.tooltipContent}
                </TooltipStyled.Content>
            </TooltipStyled.Tooltip>

        </TooltipStyled.Wrapper>
    )
}

export default Tooltip
