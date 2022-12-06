/* eslint-disable max-lines-per-function */
import React from "react"
import { SelectStyled } from "./SelectStyles"
import Label, { LabelProps } from "../Label/Label"
import { renderErrorMessage } from "../FormCommon"
import { ReactComponent as ArrowDown } from "../../../assets/pointer_down.svg"
import Spinner, { SpinnerSize } from "../../Spinner/Spinner"

type ValidKey = string | boolean | number | null

export type SelectOption<K> = {
    key: K,
    text: string,
}


export type Props<K extends ValidKey, T extends SelectOption<K>> = {
    selectedValue?: K,
    options: T[],
    label?: LabelProps,
    placeholder?: string,
    disabled?: boolean,
    loading?: boolean,
    errorMessage?: string | null,
    accessibility?: {
        tabIndex?: number,
        autoFocus:boolean,
    },
    icon?: React.FunctionComponent,
    onChange?: (value: K) => void,
    onClick?: () => void,
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

const Select_ = React.forwardRef(<K extends ValidKey, T extends SelectOption<K>>(
    props: Props<K, T>,
    ref: React.ForwardedRef<HTMLSelectElement>
) => {

    const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selected = keySerializator.deserialize(e.target.value)
        const value = props.options.find(o => o.key === selected)

        if (value) {
            props.onChange && props.onChange(value.key)
        } else {
            console.error("Option not found", value, e.target.value, selected)
            throw new Error("Option not found")
        }
    }

    return (
        <Label {...props.label}>
            <SelectStyled.Wrapper
                disabled={props.disabled}
                errorMessage={props.errorMessage}
            >

                {props.icon
                    && <SelectStyled.WrapperIcon>
                        <props.icon />
                    </SelectStyled.WrapperIcon>
                }

                <SelectStyled.WrapperArrow>
                    {props.loading
                        ? <Spinner size={SpinnerSize.small} />
                        : <ArrowDown />
                    }
                </SelectStyled.WrapperArrow>

                <SelectStyled.Select
                    withIcon={!!props.icon}
                    name="test1"
                    ref={ref}
                    value={props.selectedValue
                        && keySerializator.serialize(props.selectedValue)
                    }
                    onChange={handleOnChange}
                    onClick={props.onClick}
                    disabled={props.disabled || props.loading}
                    errorMessage={props.errorMessage}
                >
                    {props.placeholder
                        && <SelectStyled.Placeholder value={""}>
                            {props.placeholder}
                        </SelectStyled.Placeholder >
                    }
                    {props.options.map((opt) => {
                        const key = keySerializator.serialize(opt.key)
                        return (
                            <option key={key}
                                value={key}>
                                {opt.text}
                            </option>
                        )
                    })}
                </SelectStyled.Select>
            </SelectStyled.Wrapper>
            {
                props.errorMessage
                && renderErrorMessage(props.errorMessage)
            }
        </Label>
    )
})

Select_.displayName = "Select"

const Select = Select_ as<
    K extends ValidKey,
    T extends SelectOption<K>>(props: Props<K, T>
    & React.RefAttributes<HTMLSelectElement>) => JSX.Element

export default Select