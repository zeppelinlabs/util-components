
import React from "react"
import { RadioButtonStyled } from "./RadioButtonStyles"
import { TextWeight } from "../../../styles/typographicHelper"

export type SelectOption<K> = {
    key: K,
    value: string,
    children: React.ReactNode,
} & RadioButtonOption

export type ValidKey = string | boolean | number | null

export type CustomRadioButtonStyles = {
    textWeight?: TextWeight,
    textColor?: string,
}

export type AccessibilityRadioButton = {
    tabIndex?: number,
    autoFocus?: boolean,
}

type RadioButtonOption = {
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

type RadioButtonProps<K extends ValidKey, T extends SelectOption<K>> = {
    name: string,
    selectedValue: string,
    options: T[],
    onChange?: (value: string) => void,
    errorMessage?: string | null,
}

const keySerializator = (() => {
    const emptyValue = ""
    return {
        serialize: (k: ValidKey) =>
            (k === emptyValue
                ? emptyValue
                : JSON.stringify(k)),
        deserialize: <R extends ValidKey>(s: string) =>
            (s === emptyValue
                ? emptyValue
                : JSON.parse(s) as R),
    }
})()

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

const RadioButton = React.forwardRef(<K extends ValidKey, T extends SelectOption<K>>(
    props: RadioButtonProps<K, T>,
    ref: React.ForwardedRef<HTMLInputElement>
) => {
    const handleOnChange = (value: string) => {
        props.onChange && props.onChange(value)
    }
    return (
        <>
            {props.options.map((propsChild: SelectOption<K>) => {
                const key = keySerializator.serialize(propsChild.key)

                return <InputRadio
                    key={key}
                    selectedValue={props.selectedValue}
                    onChange={handleOnChange}
                    ref={ref}
                    name={props.name}
                    accessibility={propsChild.accessibility}
                    customStyles={propsChild.customStyles}
                    disabled={propsChild.disabled}
                    value={propsChild.value}
                    onClick={propsChild.onClick}
                >
                    {propsChild.children}
                </InputRadio>
            })}
            {props.errorMessage && <RadioButtonStyled.ErrorMessageContainer>
                {props.errorMessage}
            </RadioButtonStyled.ErrorMessageContainer>}
        </>
    )
})

RadioButton.displayName = "RadioButton"

export default RadioButton
