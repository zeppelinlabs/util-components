import styled, { css } from "styled-components"
import { device } from "../../styles/mediaQueries"
import { thp } from "../../styles/themeHelpers"
import { IconPosition } from "../CommonTypes"
import { ButtonVariant, CustomButtonStyles } from "./Button"

type Props = {
    buttonVariant: ButtonVariant,
    loading?: boolean,
    disabled?: boolean,
    customStyles?: CustomButtonStyles,
}

const getButtonVariant = (variant: ButtonVariant) => {
    const ButtonByCase = {
        [ButtonVariant.Primary]: (PrimaryButton),
        [ButtonVariant.Secondary]: (SecondaryButton),
    }
    return ButtonByCase[variant]
}

const PrimaryButton = () => css<Props>`
    background: ${thp.primary(c => c.level50)};
    color: ${thp.common(c => c.white)};

    &:hover:not(:disabled) {
        // hover styles
    }
`
const SecondaryButton = () => css<Props>`
    background: ${thp.common(c => c.white)};
    color: ${thp.common(c => c.black)};
    border: 1px solid ${thp.common(c => c.black)};

    &:hover:not(:disabled) {
        // hover styles
    }
`

const Button = styled.button<Props>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: fit-content;
    min-width:  fit-content;
    border:none;
    cursor: pointer;
    padding: 6px 12px;
    font-size: 1.4rem;
    transition: all .3s ease-out;
    opacity: ${props => (props.loading ? 0 : 1)};
    ${p => (getButtonVariant(p.buttonVariant))}

    img{
        width:100%;
        max-width:100%;
    }
    svg{
        width: 100%;
        height: 100%;
        path{
            fill: currentColor;
        }
    }
    &:focus {
       // focus styles
    }
    &:disabled {
        opacity: 0.5;
        cursor:not-allowed;
    }
`


const SpinnerContainer = styled.span`
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

const IconContainer = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width:"16px";
    max-width:"16px";
    height:"16px";
`

export const ButtonStyled = {
    Button,
    IconContainer,
    SpinnerContainer,
}
