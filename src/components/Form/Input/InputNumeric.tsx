/* eslint-disable max-lines-per-function */
import React, { useRef, useEffect, useState } from "react"
import { renderErrorMessage, } from "../FormCommon"
import { InputStyled } from "./InputStyles"
import { InputCommonProps } from "./InputCommon"

export type Props = InputCommonProps<number | null> & {
    leadingLabel?: string,
    min?: number,
    max?: number,
    step?: number,
    onKeyDown?: (key: string) => void,
}


const InputNumeric = React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLInputElement>) => {
    const leadingLabelRef = useRef<HTMLSpanElement>(null)
    const [leadingLabelWidth, setLeadingLabelWidth,] = useState<number | undefined>(undefined)
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const v = e.target.value
        props.onChange && props.onChange(v ? Number(v) : null)
    }

    const handleOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        const v = e.target.value
        props.onFocus && props.onFocus(v ? Number(v) : null)
    }

    const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        props.onKeyDown && props.onKeyDown(e.key)
    }

    useEffect(() => {
        if (leadingLabelRef.current) {
            setLeadingLabelWidth(leadingLabelRef.current.clientWidth)
        }
    }, [leadingLabelRef, props.leadingLabel,])

    const renderInput = () => {
        return (
            <>
                <InputStyled.Input
                    type="number"
                    value={props.value || props.value === 0 ? props.value : ""}
                    errorMessage={!!props.errorMessage}
                    placeholder={props.placeholder}
                    position={props.icon?.position}
                    min={props.min}
                    max={props.max}
                    step={props.step}
                    disabled={props.disabled}
                    ref={ref}
                    onChange={handleOnChange}
                    onBlur={props.onBlur}
                    onFocus={handleOnFocus}
                    onKeyDown={handleOnKeyDown}
                    {...(props.leadingLabel && { leadingLabelWidth: leadingLabelWidth, })}
                />
                {props.errorMessage
                    && renderErrorMessage(props.errorMessage)}
            </>
        )
    }

    const renderLeadingLabel = () => {
        return (
            <InputStyled.LeadingLabel ref={leadingLabelRef}
                errorMessage={!!props.errorMessage}>
                {props.leadingLabel}
            </InputStyled.LeadingLabel>
        )
    }

    return (
        <InputStyled.InputContainer>
            {renderInput()}
            {props.icon && props.icon.position
                && <InputStyled.IconContainer position={props.icon.position}>
                    <props.icon.SVGComponent />
                </InputStyled.IconContainer>
            }
            {props.leadingLabel && renderLeadingLabel()}
        </InputStyled.InputContainer>
    )
})

InputNumeric.displayName = "InputNumeric"

export default InputNumeric
