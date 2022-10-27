import React from "react"
import Spinner, { SpinnerSize } from "../Spinner/Spinner"
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
    children: React.ReactNode,
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
        type={props.type}
        ref={ref}
        buttonVariant={props.buttonVariant}
        disabled={props.disabled || props.loading}
        tabIndex={props.accessibility?.tabIndex}
        autoFocus={props.accessibility?.autoFocus}
        onClick={props.type === "submit"
            ? undefined
            : props.onClick
        }
    >
        {props.loading
            ? <ButtonStyled.SpinnerContainer>
                <Spinner size={SpinnerSize.small} />
            </ButtonStyled.SpinnerContainer>
            : <>
                {props.icon?.SVGComponent
                    && <ButtonStyled.IconContainer>
                        <props.icon.SVGComponent />
                    </ButtonStyled.IconContainer>
                }
                {props.children}
            </>
        }
    </ButtonStyled.Button>
})

Button.displayName = "Button"

export default Button
