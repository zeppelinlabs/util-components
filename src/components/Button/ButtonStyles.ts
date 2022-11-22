import styled, { css } from "styled-components"
import { thp } from "../../styles/themeHelpers"
import { ButtonIconPosition, ButtonVariant, CustomButtonStyles } from "./Button"

type Props = {
    buttonVariant: ButtonVariant,
    buttonPosition?: ButtonIconPosition,
    loading?: boolean,
    disabled?: boolean,
    customStyles?: CustomButtonStyles,
    isOnlyIcon: boolean,
}

const getButtonVariant = (variant: ButtonVariant) => {
    const ButtonByCase = {
        [ButtonVariant.Primary]: (PrimaryButton),
        [ButtonVariant.Secondary]: (SecondaryButton),
    }
    return ButtonByCase[variant]
}

const SpinnerContainer = styled.span`
    max-width: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const PrimaryButton = () => css<Props>`
    background: ${thp.primary(c => c.level50)};
    color: ${thp.common(c => c.white)};

    &:hover:not(:disabled) {
        // hover styles
    }
    ${SpinnerContainer}{
        color: ${thp.common(c => c.white)};
    }
`
const SecondaryButton = () => css<Props>`
    background: ${thp.common(c => c.white)};
    color: ${thp.common(c => c.black)};
    border: 1px solid ${thp.common(c => c.black)};

    &:hover:not(:disabled) {
        // hover styles
    }
    ${SpinnerContainer}{
        color: ${thp.common(c => c.black)};
    }
`

const Button = styled.button<Props>`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width:  30px;
    min-height: 30px;
    border:none;
    cursor: pointer;
    font-size: 1.4rem;
    transition: all .3s ease-out;
    gap: 5px;
    position: relative;

    padding:${p => (p.isOnlyIcon ? "8px" : "8px 16px")};
    width: ${p => (p.customStyles?.isFullWidth ? "100%" : "fit-content")};
    flex-direction: ${p => (p.buttonPosition ? p.buttonPosition :"row")};
    opacity: ${props => (props.loading ? 0 : 1)};
    ${p => (getButtonVariant(p.buttonVariant))}
    img,
    svg{
        width: 100%;
        height: 100%;
        object-fit: contain;
        path{
            fill: currentColor;
        }
    }
    ${p => (p.loading && css`
        color: transparent;
    `)};
    &:focus {
       box-shadow: 0 0 0 4px ${thp.system(c => c.focus)};
    }
    &:disabled {
        opacity: 0.5;
        cursor:not-allowed;
    }
`




const IconContainer = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width:16px;
    max-width:16px;
    height:16px;
`

export const ButtonStyled = {
    Button,
    IconContainer,
    SpinnerContainer,
}
