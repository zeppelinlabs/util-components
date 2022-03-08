import React from "react"
import Spinner, { SpinnerSize } from "../Spinner/Spinner"
import Icon from "../Icon/Icon"
import { ButtonStyled } from "./ButtonStyles"

export enum ButtonIconPosition {
    left = "left",
    center = "center",
    right = "right"
}

export enum ButtonVariant {
    primary = "primary",
    secondary = "secondary"
}


type BaseProps = {
    text?: string,
    icon?: string | React.FunctionComponent,
    position?: ButtonIconPosition,
    disabled?: boolean,
    loading?: boolean,
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

const renderIcon = (props: Props) => {
    if (props.icon) {
        return (<ButtonStyled.ContainerIcon position={props.position}>
            <Icon icon={props.icon} />
        </ButtonStyled.ContainerIcon>)
    }
}

const renderInternals = (props: Props) => {
    return (
        <>
            <ButtonStyled.ButtonInnerContainer loading={props.loading}>
                {props.icon && props.position === ButtonIconPosition.left
                    && renderIcon(props)}
                {props.text}
                {props.icon && props.position === ButtonIconPosition.center
                    && renderIcon(props)}
                {props.icon && props.position === ButtonIconPosition.right
                    && renderIcon(props)}
            </ButtonStyled.ButtonInnerContainer>

            {props.loading
                && <ButtonStyled.SpinnerContainer>
                    <Spinner size={SpinnerSize.small} />
                </ButtonStyled.SpinnerContainer>
            }
        </>
    )
}

const renderPrimaryButton = (props: Props) => {
    return (
        <ButtonStyled.PrimaryButton
            type={props.type}
            onlyIcon={!props.text}
            onClick={props.type === "submit" ? undefined : props.onClick}
            disabled={props.disabled || props.loading}
        >
            {renderInternals(props)}
        </ButtonStyled.PrimaryButton>
    )
}

const Button = (props: Props) => {

    switch (props.variant) {
        case ButtonVariant.primary:
            return renderPrimaryButton(props)
        case ButtonVariant.secondary:
            return renderSecondaryButton(props)
        default:
            throw new Error("Missing button variant")
    }
}
export default Button
