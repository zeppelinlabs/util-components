
import React from "react"
import { RadioButtonStyled } from "./RadioButtonStyles"
import { TextWeight } from "../../../styles/typographicHelper"

export type CustomRadioButtonStyles = {
    textWeight?: TextWeight,
    textColor?: string,
}

type Props = {
    children?: React.ReactNode,
    value: string,
    selectedValue?: string,
    disabled?: boolean,
    onChange?: (value: string) => void,
    onClick?: (e: React.MouseEvent<HTMLSpanElement>) => void,
    customStyles?: CustomRadioButtonStyles,
    accessibility?: {
        tabIndex: number,
        autoFocus:boolean,
    },
}


const RadioButton = React.forwardRef((
    props: Props,
    ref: React.ForwardedRef<HTMLInputElement>
) => {
    const handleOnChange = () => {
        props.onChange && props.onChange(props.value)
    }

    return (
        <RadioButtonStyled.Container>
            <RadioButtonStyled.Input
                ref={ref}
                type="radio"
                checked={props.value === props.selectedValue}
                disabled={props.disabled}
                onChange={handleOnChange}
            />

            <RadioButtonStyled.Radio onClick={props.onClick} />

            <RadioButtonStyled.ChildrenContainer
                customStyles={props.customStyles}>
                {props.children}
            </RadioButtonStyled.ChildrenContainer>
        </RadioButtonStyled.Container>
    )
})

RadioButton.displayName = "RadioButton"

export default RadioButton
