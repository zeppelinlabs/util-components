/* eslint-disable max-lines-per-function */
import React, { useEffect, useRef, useState } from "react"
import { IconPosition } from "../../CommonTypes"
import { renderErrorMessage, } from "../FormCommon"
import { InputCommonProps } from "./InputCommon"
import { InputStyled } from "./InputStyles"

export type Props = InputCommonProps<string> & {
    leadingLabel?: string,
}


const Input = React.forwardRef(( props: Props, ref: React.ForwardedRef<HTMLInputElement> ) => {
    const leadingLabelRef = useRef<HTMLSpanElement>(null)
    const [leadingLabelWidth, setLeadingLabelWidth,] = useState<number | undefined>(undefined)

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange && props.onChange(e.target.value)
    }

    const handleOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        props.onFocus && props.onFocus(e.target.value)
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
                    type={props.type}
                    value={props.value || ""}
                    errorMessage={!!props.errorMessage}
                    placeholder={props.placeholder}
                    position={props.icon?.position}
                    disabled={props.disabled}
                    ref={ref}
                    onChange={handleOnChange}
                    onBlur={props.onBlur}
                    onFocus={handleOnFocus}
                    {...(props.leadingLabel && { leadingLabelWidth: leadingLabelWidth, })}
                />
                {props.icon && props.icon.position === IconPosition.right
                    && <InputStyled.IconContainer position={props.icon.position}>
                        {props.icon.SVGComponent}
                    </InputStyled.IconContainer>}
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

Input.displayName = "Input"

export default Input
