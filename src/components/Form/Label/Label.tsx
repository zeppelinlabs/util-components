import React from "react"
import { TextAlign, TextWeight } from "../../../styles/typographicHelper"
import { LabelStyled } from "./LabelStyles"

export type CustomLabelStyles = {
    textColor?: string,
    textWeight?: TextWeight,
    textAlign?: TextAlign,
}

export type Props = {
    text?: string,
    children?: React.ReactNode,
    required?: boolean,
    disabled?: boolean,
    accessibility?: {
        htmlFor?: string,
    },
    customStyles?: CustomLabelStyles,
}

const Label = (props: Props) => {
    return (
        <LabelStyled.Label
            htmlFor={props.accessibility?.htmlFor}
            disabled={props.disabled}
            customStyles={props.customStyles}
        >
            {props.text
                && <LabelStyled.LabelText
                    disabled={props.disabled}
                    customStyles={props.customStyles}
                >
                    {props.text}
                    {props.required && <LabelStyled.Required>*</LabelStyled.Required>}
                </LabelStyled.LabelText>
            }
            <LabelStyled.Content>
                {props.children && props.children}
            </LabelStyled.Content>
        </LabelStyled.Label>
    )
}
export default Label