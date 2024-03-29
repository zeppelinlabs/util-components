
import React from "react"
import { TextSizeKeys, TextWeightKeys, ThemeBaseColorKeys } from "../../../styles/themeHelpers"
import { renderErrorMessage } from "../FormCommon/FormCommon"
import { RadioButtonStyled } from "./RadioButtonStyles"

export enum ContentRadioPosition {
    Left = "row-reverse",
}

export type CustomRadioButtonStyles = {
    textWeight?: TextWeightKeys,
    textColor?: ThemeBaseColorKeys,
    textSize?: TextSizeKeys,
    size?: RadioButtonSize,
    contentPosition?: ContentRadioPosition,
    radioVariant?: RadioButtonVariant,
}

export type AccessibilityRadioButton = {
    tabIndex?: number,
    autoFocus?: boolean,
}

export enum RadioButtonSize {
    Small = "small",
    Base = "base",
    Large = "large",
}

export enum RadioButtonVariant {
    Primary = "PRIMARY",
    Showcase = "SHOWCASE",
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
        <RadioButtonStyled.Container customStyles={props.customStyles}>
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
                customStyles={props.customStyles}
            />

            <RadioButtonStyled.Radio customStyles={props.customStyles} onClick={props.onClick} />

            <RadioButtonStyled.ChildrenContainer
                customStyles={props.customStyles}>
                {props.children}
            </RadioButtonStyled.ChildrenContainer>
        </RadioButtonStyled.Container>
    )
})
InputRadio_.displayName = "InputRadio"

export const InputRadio = InputRadio_ as <K extends ValidKey>(props: InputRadioProps<K>
    & React.RefAttributes<HTMLInputElement>) => JSX.Element

export type RadioOption<K extends ValidKey> = {
    key: K,
    children: React.ReactNode,
    customStyles?: CustomRadioButtonStyles,
    accessibility?: AccessibilityRadioButton,
    onClick?: (e: React.MouseEvent<HTMLSpanElement>) => void,
    disabled?: boolean,
}

export type RadioButtonProps<K extends ValidKey, T extends RadioOption<K>> = {
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
            // eslint-disable-next-line no-console
            console.error("Option not found", value, [e, selected,])
            throw new Error("Option not found")
        }
    }

    return (
        <RadioButtonStyled.Wrapper>
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
            {props.errorMessage
                && renderErrorMessage(props.errorMessage)
            }
        </RadioButtonStyled.Wrapper>
    )
})

RadioButtonGroup_.displayName = "RadioButtonGroup"

const RadioButtonGroup = RadioButtonGroup_ as <
    K extends ValidKey,
    T extends RadioOption<K>>(props: RadioButtonProps<K, T>
        & React.RefAttributes<HTMLInputElement>) => JSX.Element


export default RadioButtonGroup
