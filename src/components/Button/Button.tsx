import React from "react"
import Spinner, { SpinnerSize } from "../Spinner/Spinner"
import { ButtonStyled } from "./ButtonStyles"

export enum ButtonVariant {
    primary = "PRIMARY",
}

export enum ButtonIconPosition {
    left = "left",
    right = "right"
}

type BaseProps = {
    variant: ButtonVariant,
    text?: string,
    disabled?: boolean,
    loading?: boolean,
    icon?: JSX.Element,
    iconPosition?: ButtonIconPosition,
}



export type Props = BaseProps & (
    {
        type: "button" | "reset",
        onClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
    }

    |
    {
        type: "submit",
    }
)

const renderIcon = (position: ButtonIconPosition, icon: JSX.Element) => {
    return (
        <ButtonStyled.IconContainer
            position={position}
        >
            {icon}
        </ButtonStyled.IconContainer>
    )
}

const renderInternals = (props: Props) => {

    const renderContent = () => {
        return (
            <ButtonStyled.ButtonInnerContainer loading={props.loading}>
                {props.icon && props.iconPosition === ButtonIconPosition.left
                    && renderIcon(props.iconPosition, props.icon)}
                {props.text}
                {props.icon && props.iconPosition === ButtonIconPosition.right
                    && renderIcon(props.iconPosition, props.icon)}
            </ButtonStyled.ButtonInnerContainer>
        )
    }

    const renderLoading = () => {
        return (
            <ButtonStyled.SpinnerContainer>
                <Spinner size={SpinnerSize.small} />
            </ButtonStyled.SpinnerContainer>
        )
    }

    return (
        <>
            {renderContent()}
            {props.loading && renderLoading()}
        </>
    )
}

const Button = (props: Props) => {
    switch (props.variant) {
        case ButtonVariant.primary:
            return (
                <ButtonStyled.PrimaryButton
                    type={props.type}
                    onClick={props.type === "submit" ? undefined : props.onClick}
                    disabled={props.disabled || props.loading}
                >
                    {renderInternals(props)}
                </ButtonStyled.PrimaryButton>
            )
        default:
            throw new Error(`Button variant ${props.variant} not supported`)
    }
}

export default Button
