
import React from "react"
import { CheckboxStyled } from "./CheckboxStyles"
import { ReactComponent as TickIcon } from "../../../assets/tick.svg"
import { TextAlign, TextWeight } from "../../../styles/typographicHelper"

export enum ContentCheckboxPosition {
    Left = "row-reverse",
}

export type CustomCheckboxStyles = {
    checkBoxColor?: string,
    textColor?: string,
    textAlign?: TextAlign,
    textWeight?: TextWeight,
    contentPosition?: ContentCheckboxPosition,
}

export type Props = {
    children?: React.ReactNode,
    value: boolean,
    disabled?: boolean,
    onChange?: (value: boolean) => void,
    onBlur?: () => void,
    customStyles?: CustomCheckboxStyles,
    accessibility?: {
        tabIndex?: number,
        autoFocus?: boolean,
    },
}


const Checkbox = React.forwardRef((
    props: Props,
    ref: React.ForwardedRef<HTMLInputElement>
) => {
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange && props.onChange(e.target.checked)
    }

    return (
        <CheckboxStyled.Wrapper customStyles={props.customStyles}>
            <CheckboxStyled.Input
                type="checkbox"
                checked={props.value}
                disabled={props.disabled}
                ref={ref}
                onChange={handleOnChange}
                onBlur={props.onBlur}
                customStyles={props.customStyles}
                tabIndex={props.accessibility?.tabIndex}
                autoFocus={props.accessibility?.autoFocus}
            />
            <CheckboxStyled.Check>
                {props.value && (
                    <CheckboxStyled.Tick>
                        <TickIcon />
                    </CheckboxStyled.Tick>
                )}
            </CheckboxStyled.Check>
            {props.children && <CheckboxStyled.ChildrenWrapper>
                {props.children}
            </CheckboxStyled.ChildrenWrapper>}
        </CheckboxStyled.Wrapper>
    )
})

Checkbox.displayName = "Checkbox"

export default Checkbox
