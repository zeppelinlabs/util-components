
import React from "react"
import { TextWeightKeys, ThemeBaseColorKeys } from "../../../styles/themeHelpers"
import { RadioButtonStyled } from "./RadioButtonStyles"

export type CustomRadioButtonStyles = {
    textWeight?: TextWeightKeys,
    textColor?: ThemeBaseColorKeys,
}
export type AccessibilityRadioButton = {
    tabIndex?: number,
    autoFocus?: boolean,
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

export type ValidKey = string | boolean | number | null

type InputRadioProps<K extends ValidKey> = {
    children?: React.ReactNode,
    name: string,
    selectedValue?: K,
    value: K,
    disabled?: boolean,
    onChange?: (value: K) => void,
    onClick?: (e: React.MouseEvent<HTMLSpanElement>) => void,
    customStyles?: CustomRadioButtonStyles,
    accessibility?: AccessibilityRadioButton,
}

const InputRadio_ = React.forwardRef(<K extends ValidKey>(
    props: InputRadioProps<K>,
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
                value={keySerializator.serialize(props.value)}
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
InputRadio_.displayName = "InputRadio"

const InputRadio = InputRadio_ as <K extends ValidKey>(props: InputRadioProps<K>
    & React.RefAttributes<HTMLInputElement>) => JSX.Element

export type RadioOption<K extends ValidKey> = {
    key: K,
    children: React.ReactNode,
    customStyles?: CustomRadioButtonStyles,
    accessibility?: AccessibilityRadioButton,
    onClick?: (e: React.MouseEvent<HTMLSpanElement>) => void,
    disabled?: boolean,
}

type RadioButtonProps<K extends ValidKey, T extends RadioOption<K>> = {
    name: string,
    selectedValue?: K,
    options: T[],
    onChange?: (value: K) => void,
    errorMessage?: string | null,
    disabledAll?: boolean,
}


const RadioButtonGroup_ = React.forwardRef(<K extends ValidKey, T extends RadioOption<K>>(
    props: RadioButtonProps<K, T>,
    ref: React.ForwardedRef<HTMLInputElement>
) => {

    const handleOnChange = (e: K) => {
        const selected = e
        const value = props.options.find(o => o.key === selected)

        if (value) {
            props.onChange && props.onChange(value.key)
        } else {
            console.error("Option not found", value, [e, selected,])
            throw new Error("Option not found")
        }
    }

    return (
        <>
            {props.options.map((propsChild: RadioOption<K>) => {
                const key = keySerializator.serialize(propsChild.key)

                return <InputRadio
                    ref={ref}
                    key={key}
                    name={props.name}
                    value={propsChild.key}
                    selectedValue={props.selectedValue}
                    disabled={props.disabledAll
                        ? props.disabledAll
                        : propsChild.disabled
                    }
                    accessibility={propsChild.accessibility}
                    customStyles={propsChild.customStyles}
                    onChange={handleOnChange}
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

RadioButtonGroup_.displayName = "RadioButtonGroup"

const RadioButtonGroup = RadioButtonGroup_ as <
    K extends ValidKey,
    T extends RadioOption<K>>(props: RadioButtonProps<K, T>
        & React.RefAttributes<HTMLInputElement>) => JSX.Element


export default RadioButtonGroup
