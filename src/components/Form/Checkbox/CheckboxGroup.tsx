import React from "react"
import { toDictionary } from "../../../util/toDictionary"
import Checkbox, { CustomCheckboxStyles } from "./Checkbox"
import { HTMLSetCustomValidityElement, useSetCustomValidity }
    from "../../../hooks/useSetCustomValidity"
import { renderErrorMessage } from "../FormCommon/FormCommon"
import { CheckboxStyled } from "./CheckboxStyles"

export type CheckboxGroupOption<K> = {
    key: K,
    children: React.ReactNode,
    accessibility?: {
        tabIndex?: number,
        autoFocus?: boolean,
    },
    customStyles?: CustomCheckboxStyles,
    disabled?: boolean,
}

type ValidKey = string | number

export type Props<K extends ValidKey, T extends CheckboxGroupOption<K>> = {
    options: T[],
    keyValue: K[],
    errorMessage?: string,
    onChange?: (value: T[]) => void,
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
                // eslint-disable-next-line no-console
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
        <CheckboxStyled.Container>
            {props.options.map((option, i) => {
                return <Checkbox
                    ref={i === 0 ? firstCheck : undefined}
                    key={option.key}
                    value={hasKey(props.keyValue, option.key)}
                    disabled={option.disabled}
                    onChange={handleOnChange(option)}
                    customStyles={option.customStyles}
                    accessibility={option.accessibility}
                >
                    {option.children}
                </Checkbox>
            })}
            {props.errorMessage
                && renderErrorMessage(props.errorMessage)
            }
        </CheckboxStyled.Container>
    )
}) as <K extends ValidKey,
    T extends CheckboxGroupOption<K>>(props: Props<K, T>
        & React.RefAttributes<HTMLInputElement>) => JSX.Element

export default CheckboxGroup
