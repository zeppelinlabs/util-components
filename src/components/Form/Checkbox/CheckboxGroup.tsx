import React from "react"
import { toDictionary } from "../../../util/toDictionary"
import Checkbox, { CustomCheckboxStyles } from "./Checkbox"
import { HTMLSetCustomValidityElement, useSetCustomValidity }
    from "../../../hooks/SetCustomValidity"
import { renderErrorMessage } from "../FormCommon"

export type CheckboxGroupOption<K> = {
    key: K,
    children: React.ReactNode,
    accessibility?: {
        tabIndex?: number,
        autoFocus?: boolean,
    },
}

type ValidKey = string | number

export type Props<K extends ValidKey, T extends CheckboxGroupOption<K>> = {
    options: T[],
    keyValue: K[],
    disabled?: boolean,
    errorMessage?: string,
    onChange?: (value: T[]) => void,
    customStyles?: CustomCheckboxStyles,
}

const hasKey = <K,>(options: K[], key: K) => {
    return options.includes(key)
}

// eslint-disable-next-line react/display-name
const CheckboxGroup = React.forwardRef(<K extends ValidKey,
    T extends CheckboxGroupOption<K>>
    (props: Props<K, T>, ref: React.ForwardedRef<HTMLSetCustomValidityElement>) => {

    const firstCheck = useSetCustomValidity<HTMLInputElement>(ref)

    const handleOnChange = (option: T) => (checked: boolean) => {
        if (props.onChange) {
            const optionsByKey = toDictionary(props.options, o => o.key)
            const hasKeyBeforeChange = hasKey(props.keyValue, option.key)

            if (props.keyValue.some(k => !optionsByKey[k])) {
                console.warn("keyValue not in options", props)
            }

            if (checked && !hasKeyBeforeChange) {
                props.onChange([...props.keyValue.map(k => optionsByKey[k]), option,])
            } else if (!checked) {
                props.onChange(props.keyValue
                    .filter(k => k !== option.key)
                    .map(k => optionsByKey[k]))
            }
        }
    }

    return (
        <>
            {props.options.map((option, i) => {
                return <Checkbox
                    ref={i === 0 ? firstCheck : undefined}
                    key={option.key}
                    value={hasKey(props.keyValue, option.key)}
                    disabled={props.disabled}
                    onChange={handleOnChange(option)}
                    customStyles={props.customStyles}
                    accessibility={option.accessibility}
                >
                    {option.children}
                </Checkbox>
            })}
            {props.errorMessage
                && renderErrorMessage(props.errorMessage)
            }
        </>
    )
}) as <K extends ValidKey,
        T extends CheckboxGroupOption<K>>(props: Props<K, T>
            & React.RefAttributes<HTMLInputElement>) => JSX.Element

export default CheckboxGroup
