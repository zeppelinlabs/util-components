
import React from "react"
import { CheckboxStyled } from "./CheckboxStyles"
import { ReactComponent as TickIcon } from "../../../assets/icons/tick.svg"
import { ReactComponent as MinusIcon } from "../../../assets/icons/minus.svg"
import { renderErrorMessage } from "../FormCommon"
import { TextAlignKeys, TextSizeKeys, TextWeightKeys } from "../../../styles/themeHelpers"

export enum ContentCheckboxPosition {
    Left = "row-reverse",
}

export enum CheckboxSize {
    Small = "small",
    Base = "base",
    Large = "large",
}

export type CustomCheckboxStyles = {
    checkBoxColor?: string,
    textColor?: string,
    textAlign?: TextAlignKeys,
    textSize?: TextSizeKeys,
    textWeight?: TextWeightKeys,
    contentPosition?: ContentCheckboxPosition,
    size?: CheckboxSize,
    isIndeterminate?: boolean,
}

export type Props = {
    children?: React.ReactNode,
    value: boolean,
    disabled?: boolean,
    errorMessage?: string,
    onChange?: (value: boolean) => void,
    customStyles?: CustomCheckboxStyles,
    accessibility?: {
        tabIndex?: number,
        autoFocus?: boolean,
    },
}


const Checkbox = React.forwardRef((
    props: Props,
    ref: React.ForwardedRef<HTMLInputElement>
) => {
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange && props.onChange(e.target.checked)
    }

    return (
        <CheckboxStyled.Container>
            <CheckboxStyled.Wrapper customStyles={props.customStyles}>
                <CheckboxStyled.Input
                    type="checkbox"
                    checked={props.value}
                    disabled={props.disabled}
                    ref={ref}
                    onChange={handleOnChange}
                    customStyles={props.customStyles}
                    tabIndex={props.accessibility?.tabIndex}
                    autoFocus={props.accessibility?.autoFocus}
                />
                <CheckboxStyled.Check customStyles={props.customStyles}>
                    {props.value && (
                        <CheckboxStyled.Tick>
                            {props.customStyles?.isIndeterminate
                                ? <MinusIcon />
                                : <TickIcon />
                            }
                        </CheckboxStyled.Tick>
                    )}
                </CheckboxStyled.Check>
                {props.children
                    && <CheckboxStyled.ChildrenWrapper customStyles={props.customStyles}>
                        {props.children}
                    </CheckboxStyled.ChildrenWrapper>}
            </CheckboxStyled.Wrapper>
            {props.errorMessage
                && renderErrorMessage(props.errorMessage)
            }
        </CheckboxStyled.Container>
    )
})

Checkbox.displayName = "Checkbox"

export default Checkbox
