/* eslint-disable max-lines-per-function */
import React, { useEffect } from "react"
import { useCombinedRefs } from "../../../hooks/useCombineRefss"
import Spinner, { SpinnerSize } from "../../Spinner/Spinner"
import { renderErrorMessage } from "../FormCommon"
import { InputCommonProps } from "./InputCommon"
import { InputStyled } from "./InputStyles"

export type Props = InputCommonProps<string> & {
    autoHeight?: boolean,
    maxLength?: number,
}

const InputTextArea = React.forwardRef((
    props: Props,
    ref: React.ForwardedRef<HTMLTextAreaElement>
) => {
    const innerRef = useCombinedRefs(ref)

    useEffect(() => {
        if (props.autoHeight && innerRef.current) {
            innerRef.current.style.height = `${(innerRef.current.scrollHeight) + 2}px`
        }
    }, [innerRef, props.autoHeight,])

    const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        props.onChange && props.onChange(e.target.value)
        if (props.autoHeight && innerRef.current) {
            innerRef.current.style.height = "0"
            innerRef.current.style.height = `${innerRef.current.scrollHeight}px`
        }
    }

    const renderCharacterCount = () => {
        return (
            <InputStyled.CharacterCount
                reachesTheLimit={props.value.length === props.maxLength}
            >
                {`${props.value.length}/${props.maxLength}`}
            </InputStyled.CharacterCount>
        )
    }

    return (
        <InputStyled.InputContainer>
            <InputStyled.InputTextArea
                type="text"
                errorMessage={!!props.errorMessage}
                placeholder={props.placeholder}
                disabled={props.disabled}
                ref={innerRef}
                value={props.value}
                onChange={handleOnChange}
                onBlur={props.onBlur}
                autoFocus={props.accessibility?.autoFocus}
                tabIndex={props.accessibility?.tabIndex}
                maxLength={props.maxLength}
                autoHeight={props.autoHeight}
                customStyles={props.customStyles}
                loading={props.loading}
            />
            {props.maxLength && renderCharacterCount()}
            {props.errorMessage
                && renderErrorMessage(props.errorMessage)}
            {props.loading
                && <InputStyled.SpinnerContainer>
                    <Spinner size={SpinnerSize.small} />
                </InputStyled.SpinnerContainer>
            }
        </InputStyled.InputContainer>
    )
})

InputTextArea.displayName = "TextArea"

export default InputTextArea
