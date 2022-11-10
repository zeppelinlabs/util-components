
import React from "react"
import { RadioButtonStyled } from "./RadioButtonStyles"
import { TextWeight } from "../../../styles/typographicHelper"

export type CustomRadioButtonStyles = {
    textWeight?: TextWeight,
    textColor?: string,
}

export type AccessibilityRadioButton = {
    tabIndex?: number,
    autoFocus?: boolean,
}

type RadioButtonOption = {
    value: string,
    children: React.ReactNode,
    customStyles?: CustomRadioButtonStyles,
    accessibility?: AccessibilityRadioButton,
    onClick?: (e: React.MouseEvent<HTMLSpanElement>) => void,
    disabled?: boolean,
}

type InputRadioProps = {
    selectedValue?: string,
    name: string,
    disabled?: boolean,
    children?: React.ReactNode,
    value: string,
    onChange?: (value: string) => void,
    onClick?: (e: React.MouseEvent<HTMLSpanElement>) => void,
    customStyles?: CustomRadioButtonStyles,
    accessibility?: AccessibilityRadioButton,
}

type RadioButtonProps = {
    name: string,
    selectedValue: string,
    options: RadioButtonOption[],
    onChange?: (value: string) => void,
    errorMessage?: string | null,
}


const InputRadio = React.forwardRef((
    props: InputRadioProps,
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
                value={props.value}
                name={props.name}
                checked={props.value === props.selectedValue}
                disabled={props.disabled}
                onChange={handleOnChange}
                tabIndex={props.accessibility?.tabIndex}
                autoFocus={props.accessibility?.autoFocus}
            />

            <RadioButtonStyled.Radio onClick={props.onClick} />

            <RadioButtonStyled.ChildrenContainer
                customStyles={props.customStyles}>
                {props.children}
            </RadioButtonStyled.ChildrenContainer>
        </RadioButtonStyled.Container>
    )
})

InputRadio.displayName = "InputRadio"

const RadioButton = React.forwardRef((
    props: RadioButtonProps,
    ref: React.ForwardedRef<HTMLInputElement>
) => {
    const handleOnChange = (value: string) => {
        props.onChange && props.onChange(value)
    }
    return (
        <>
            {props.options.map((propsChild: RadioButtonOption) => {
                return <InputRadio
                    key={propsChild.value}
                    selectedValue={props.selectedValue}
                    onChange={handleOnChange}
                    ref={ref}
                    name={props.name}
                    {...propsChild}
                />
            })}
            {props.errorMessage && <RadioButtonStyled.ErrorMessageContainer>
                {props.errorMessage}
            </RadioButtonStyled.ErrorMessageContainer>}
        </>
    )
})

RadioButton.displayName = "RadioButton"

export default RadioButton
