import React from "react"
import Spinner, { SpinnerSize } from "../../Spinner/Spinner"
import { ButtonStyled } from "./ButtonStyles"

export enum ButtonVariant {
    Primary = "PRIMARY",
    Secondary = "SECONDARY",
}
export enum ButtonIconPosition {
    Left = "row",
    Right = "row-reverse",
}

export type CustomButtonStyles = {
    isFullWidth?: boolean,
}

type BaseProps = {
    children?: React.ReactNode,
    loading?: boolean,
    disabled?: boolean,
    buttonVariant: ButtonVariant,
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
        buttonVariant={props.buttonVariant}
        buttonPosition={props.icon?.position}
        customStyles={props.customStyles}
        isOnlyIcon={!props.children}
        onClick={props.type === "submit"
            ? undefined
            : props.onClick
        }
    >
        {props.icon
            && <ButtonStyled.IconContainer>
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
