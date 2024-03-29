import React from "react"
import {
    connectField, overrideIfNotUndefined, TokenProp,
    useField, useSyncErrorsWithBrowser
} from "immer-form"
import Switch from "./Switch/Switch"
import TextArea from "./Input/InputTextArea"
import Input from "./Input/Input"
import InputNumeric from "./Input/InputNumeric"
import InputPassword from "./Input/InputPassword"
import Checkbox from "./Checkbox/Checkbox"
import CheckboxGroup, {
    CheckboxGroupOption, Props as CheckboxGroupProps
} from "./Checkbox/CheckboxGroup"
import { KeysWithValue } from "immer-form/Internal/PrivateUtilTypes"
import Select, { SelectOption, Props as SelectProps } from "./Select/Select"
import RadioButton, { RadioButtonProps, RadioOption } from "./RadioButton/RadioButton"

export const InputField = connectField(Input)
export const InputNumericField = connectField(InputNumeric)
export const InputPasswordField = connectField(InputPassword)
export const TextAreaField = connectField(TextArea)
export const SwitchField = connectField(Switch)
export const CheckboxField = connectField(Checkbox)

//CUSTOM CONNECTORS
type CheckboxGroupConnectProps<
    V extends string | number,
    SO extends CheckboxGroupOption<V>,
    F,
    K,
> =
    Omit<CheckboxGroupProps<V, SO>, "keyValue" | "onChange" | "onBlur">
    & {
        token: TokenProp<F>,
        attr: K,
    }

export const CheckboxGroupStringField
    = <
        V extends string | number,
        SO extends CheckboxGroupOption<V>,
        F,
        K extends KeysWithValue<F, V[]>
    >(
        props: CheckboxGroupConnectProps<V, SO, F, K>
    ) => {

        const {
            value,
            onChange,
            onBlur,
            errorsToShow,
            loading,
            subToken,
        } = useField(props)

        const ref = useSyncErrorsWithBrowser({ token: subToken, })


        return <CheckboxGroup
            {...props as any}
            // disabled={overrideIfNotUndefined(
            //     (props as any as CheckboxGroupProps<never, never>).disabled,
            //     loading
            // )}
            errorMessage={overrideIfNotUndefined(
                (props as any as CheckboxGroupProps<never, never>).errorMessage,
                errorsToShow.messages
            )}
            token={undefined}
            attr={undefined}
            keyValue={value}
            onChange={e => onChange(e.map(o => o.key) as unknown as F[K])}
            onBlur={onBlur}
            ref={ref}
        />
    }



type SelectConnectProps<
    V extends string | boolean | number | null,
    SO extends SelectOption<V>,
    F,
    K
> =
    Omit<SelectProps<V, SO>, "keyValue" | "onChange" | "onBlur">
    & {
        token: TokenProp<F>,
        attr: K,
    }




export const SelectStringField
    = <
        V extends string | boolean | number | null,
        SO extends SelectOption<V>,
        F,
        K extends KeysWithValue<F, V>
    >(
        props: SelectConnectProps<V, SO, F, K>
    ) => {

        const {
            value,
            onChange,
            onBlur,
            errorsToShow,
            loading,
            subToken,
        } = useField(props)

        const ref = useSyncErrorsWithBrowser({ token: subToken, })

        return <Select
            {...props as any}
            disabled={overrideIfNotUndefined(
                (props as any as SelectProps<never, never>).disabled,
                loading
            )}
            errorMessage={overrideIfNotUndefined(
                (props as any as SelectProps<never, never>).errorMessage,
                errorsToShow.messages
            )}
            token={undefined}
            attr={undefined}
            keyValue={value}
            onChange={e => onChange(e as unknown as F[K])}
            onBlur={onBlur}
            ref={ref}
        />
    }

type RaddioButtonConnectProps<
    V extends string | boolean | number | null,
    SO extends RadioOption<V>,
    F,
    K
> =
    Omit<RadioButtonProps<V, SO>, "keyValue" | "onChange" | "onBlur">
    & {
        token: TokenProp<F>,
        attr: K,
    }

export const RadioButtonStringField
    = <
        V extends string | boolean | number | null,
        SO extends RadioOption<V>,
        F,
        K extends KeysWithValue<F, V>
    >(
        props: RaddioButtonConnectProps<V, SO, F, K>
    ) => {

        const {
            value,
            onChange,
            onBlur,
            errorsToShow,
            loading,
            subToken,
        } = useField(props)

        const ref = useSyncErrorsWithBrowser({ token: subToken, })

        return <RadioButton
            {...props as any}
            disabled={overrideIfNotUndefined(
                (props as any as SelectProps<never, never>).disabled,
                loading
            )}
            errorMessage={overrideIfNotUndefined(
                (props as any as SelectProps<never, never>).errorMessage,
                errorsToShow.messages
            )}
            token={undefined}
            attr={undefined}
            selectedValue={value}
            onChange={e => onChange(e as unknown as F[K])}
            onBlur={onBlur}
            ref={ref}
        />
    }
