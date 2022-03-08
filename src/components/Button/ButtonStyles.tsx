import * as React from "react"
import styled, { css } from "styled-components"
import { ButtonIconPosition, } from "./Button"
import { device } from "../../themes/mediaVariables"
import { colors } from "../../theme"


const Button = css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: auto;
    min-width: max-content;
    padding: 4px 8px;
    border:none;
    cursor: pointer;
    font-size: 16px;

    @media ${device.desktop} {
        // 
    }

    &:focus {
       //
    }

    &:disabled {
        opacity: 0.5;
        cursor:not-allowed;
    }
`

const PrimaryButton = styled(Button)`
    background: ${colors.primary};
    color: ${colors.text};


    &:hover:not(:disabled) {
        //
    }

`

const iconPosition = (position: ButtonIconPosition,) => {
    switch (position) {

        case ButtonIconPosition.center:
            return css`margin: 0 -2px;`

        case ButtonIconPosition.left:
            return css`margin-right: 8px;`

        case ButtonIconPosition.right:
            return css`margin-left: 8px;`

        default:
            throw new Error(`Position icon: "${position}" unsopported`)
    }
}


const SpinnerContainer = styled.div`
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    display:flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    z-index: 1;
`


const ButtonInnerContainer_ = styled.span<{ loading: "true" | "false", }>`
    opacity: ${p => (p.loading === "true" ? 0 : 1)};
    transition: opacity .2s;
    position:relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: auto;
    min-width: max-content;
`

const ButtonInnerContainer = (
    props: React.ComponentPropsWithoutRef<"span"> & { loading?: boolean, }
) => {
    return <ButtonInnerContainer_
        {...props}
        loading={props.loading ? "true" : "false"}
    />
}

const ContainerIcon = styled.div<{ position?: ButtonIconPosition, }>`
    ${({ position, }) => position && iconPosition(position)};
`

export const ButtonStyled = {
    PrimaryButton,
    ContainerIcon,
    SpinnerContainer,
    ButtonInnerContainer,
}
