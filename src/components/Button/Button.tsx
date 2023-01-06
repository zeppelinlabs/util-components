import React from "react"
import Spinner, { SpinnerSize } from "../Spinner/Spinner"
import { ButtonStyled } from "./ButtonStyles"

export enum ButtonVariant {
    Primary = "PRIMARY",
    Secondary = "SECONDARY",
}

export enum ButtonSize {
    Small = "SMALL",
    Base = "BASE",
    Large = "LARGE",
    XLarge = "XLARGE",
}
export enum ButtonIconPosition {
    Left = "row",
    Right = "row-reverse",
}

export type CustomButtonStyles = {
    isFullWidth?: boolean,
    buttonVariant?: ButtonVariant,
}

type BaseProps = {
    children?: React.ReactNode,
    loading?: boolean,
    disabled?: boolean,
    buttonSize?: ButtonSize,
    customStyles?: CustomButtonStyles,
    icon?: {
        SVGComponent: React.FunctionComponent,
        position?: ButtonIconPosition,
    },
    accessibility?: {
        tabIndex?: number,
        autoFocus?: boolean,
    },
}

type Props = BaseProps & (
    {
        type: "button" | "reset",
        onClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
    }
    |
    {
        type: "submit",
    }
)


const Button = React.forwardRef((
    props: Props,
    ref: React.ForwardedRef<HTMLButtonElement>,
) => {
    return <ButtonStyled.Button
        ref={ref}
        disabled={props.disabled || props.loading}
        loading={props.loading}
        tabIndex={props.accessibility?.tabIndex}
        autoFocus={props.accessibility?.autoFocus}
        type={props.type}
        buttonPosition={props.icon?.position}
        buttonSize={props.buttonSize ? props.buttonSize : ButtonSize.Base}
        customStyles={props.customStyles}
        isOnlyIcon={!props.children}
        onClick={props.type === "submit"
            ? undefined
            : props.onClick
        }
    >
        {props.icon
            && <ButtonStyled.IconContainer
                buttonSize={props.buttonSize ? props.buttonSize : ButtonSize.Base}
            >
                <props.icon.SVGComponent />
            </ButtonStyled.IconContainer>
        }
        {props.children}
        {props.loading
            && <ButtonStyled.SpinnerContainer>
                <Spinner size={SpinnerSize.small} />
            </ButtonStyled.SpinnerContainer>
        }
    </ButtonStyled.Button>
})

Button.displayName = "Button"

export default Button
