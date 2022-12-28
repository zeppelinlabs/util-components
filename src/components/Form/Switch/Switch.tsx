import React from "react"
import { TextAlignKeys, TextWeightKeys } from "../../../styles/themeHelpers"
import { SwitchStyled } from "./SwitchStyles"

export enum ContentSwitchPosition {
    Top = "column-reverse",
    Bottom = "column",
    Left = "row-reverse",
}
export enum ContentSwitchAlign {
    Start = "flex-start",
    End = "flex-end",
}

export type CustomSwitchStyles = {
    textColor?: string,
    textAlign?: TextAlignKeys,
    textWeight?: TextWeightKeys,
    contentPosition?: ContentSwitchPosition,
    contentAlign?: ContentSwitchAlign,
}

type Props = {
    value: boolean,
    disabled?: boolean,
    onChange?: (value: boolean) => void,
    onClick?: (e: React.MouseEvent<HTMLSpanElement>) => void,
    customStyles?: CustomSwitchStyles,
    accessibility?: {
        tabIndex?: number,
        autoFocus?: boolean,
    },
    children?: React.ReactNode,
}

const Switch = React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLInputElement>) => {

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange && props.onChange(e.target.checked)
    }

    return (
        <SwitchStyled.Wrapper customStyles={props.customStyles}>
            <SwitchStyled.Input
                type="checkbox"
                ref={ref}
                checked={props.value}
                disabled={props.disabled}
                tabIndex={props.accessibility?.tabIndex}
                autoFocus={props.accessibility?.autoFocus}
                onChange={handleOnChange}
                customStyles={props.customStyles}
            />
            <SwitchStyled.Slider
                onClick={props.onClick}
            />
            {props.children
                && <SwitchStyled.ChildrenWrapper customStyles={props.customStyles}>
                    {props.children}
                </SwitchStyled.ChildrenWrapper>
            }
        </SwitchStyled.Wrapper>
    )
})

Switch.displayName = "Switch"

export default Switch
