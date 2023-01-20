/* eslint-disable max-lines-per-function */
import React from "react"
import { InputStyled } from "./InputStyles"
import { useState } from "react"
import { ReactComponent as HideIcon } from "../../../assets/icons/not_preview.svg"
import { ReactComponent as ShowIcon } from "../../../assets/icons/preview.svg"
import { renderErrorMessage } from "../FormCommon/FormCommon"
import { InputCommonProps } from "./InputCommon"
import Spinner, { SpinnerSize } from "../../Spinner/Spinner"

const InputPassword = React.forwardRef((
    props: InputCommonProps<string>,
    ref: React.ForwardedRef<HTMLInputElement>
) => {
    const [showPassword, setShowPassword,] = useState(true)

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange && props.onChange(e.target.value)
    }

    const handleOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        props.onFocus && props.onFocus(e.target.value)
    }

    const handleToggleShowPassword = () => {
        setShowPassword(prev => !prev)
    }

    const renderIconAction = () => {
        return (
            <InputStyled.ActionButton
                type="button"
                onClick={handleToggleShowPassword}
            >
                {showPassword ? <ShowIcon /> : <HideIcon />}
            </InputStyled.ActionButton>
        )
    }

    return (
        <InputStyled.InputContainer>
            <InputStyled.Input
                type={showPassword ? "password" : "text"}
                value={props.value || ""}
                errorMessage={!!props.errorMessage}
                placeholder={props.placeholder}
                disabled={props.disabled}
                ref={ref}
                onChange={handleOnChange}
                onBlur={props.onBlur}
                onFocus={handleOnFocus}
                autoFocus={props.accessibility?.autoFocus}
                tabIndex={props.accessibility?.tabIndex}
                customStyles={props.customStyles}
                isLoading={props.isLoading}
            />
            {renderIconAction()}
            {props.errorMessage
                && renderErrorMessage(props.errorMessage)}
            {props.isLoading
                && <InputStyled.SpinnerContainer>
                    <Spinner size={SpinnerSize.small} />
                </InputStyled.SpinnerContainer>
            }
        </InputStyled.InputContainer>
    )
})

InputPassword.displayName = "InputPassword"

export default InputPassword
