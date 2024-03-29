import React from "react"
import { LabelStyled } from "./LabelStyles"
import { ReactComponent as InfoIcon } from "../../../assets/icons/info.svg"
import { TextAlignKeys, TextWeightKeys, ThemeBaseColorKeys } from "../../../styles/themeHelpers"

export type CustomLabelStyles = {
    textColor?: ThemeBaseColorKeys,
    textWeight?: TextWeightKeys,
    textAlign?: TextAlignKeys,
}

export enum LabelVariant {
    Required = "required",
    Optional = "optional",
    Info = "info",
}

export type LabelProps = {
    text?: string,
    children?: React.ReactNode,
    labelVariant?: LabelVariant,
    disabled?: boolean,
    accessibility?: {
        htmlFor?: string,
    },
    customStyles?: CustomLabelStyles,
}

const Label = React.forwardRef((
    props: LabelProps,
    ref: React.ForwardedRef<HTMLLabelElement>,
) => {

    const getLabelVariant = {
        [LabelVariant.Info]: (<LabelStyled.ContentInfoIcon>
            <InfoIcon />
        </LabelStyled.ContentInfoIcon>),
        [LabelVariant.Required]: (<LabelStyled.Required>*</LabelStyled.Required>),
        [LabelVariant.Optional]: (<LabelStyled.Tag>Opcional</LabelStyled.Tag>),
    }

    return (
        <LabelStyled.Label
            ref={ref}
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
                    {props.labelVariant && getLabelVariant[props.labelVariant]}
                </LabelStyled.LabelText>
            }
            <LabelStyled.Content>
                {props.children && props.children}
            </LabelStyled.Content>
        </LabelStyled.Label>
    )
})

Label.displayName = "Label"

export default Label