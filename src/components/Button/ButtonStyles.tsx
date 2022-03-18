import styled, { css } from "styled-components"
import { colors, device } from "../../util/theme"
import { IconPosition } from "../CommonTypes"


const ButtonBase = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: fit-content;
    min-width:  fit-content;
    position:relative;
    border:none;
    cursor: pointer;
    padding: 6px 12px;
    font-size: 14px;

    @media ${device.desktop} {
        // desktop styles
    }

    &:focus {
       // focus styles
    }

    &:disabled {
        //disabled styles
        opacity: 0.5;
        cursor:not-allowed;
    }
`

const PrimaryButton = styled(ButtonBase)`
    background: ${colors.primary};
    color: ${colors.common.white};

    &:hover:not(:disabled) {
        // hover styles
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
type ButtonInnerContainerProps = {
    loading?: boolean,
}
const ButtonInnerContainer = styled.span<ButtonInnerContainerProps>`
    opacity: ${props => (props.loading ? 0 : 1)};

    position:relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    /* width: fit-content;     */
    /* min-width: fit-content; */
`

type IconContainerProps = {
    position: IconPosition,
}
const IconContainer = styled.span<IconContainerProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    width:"16px";
    height:"16px";

    ${props => props.position === IconPosition.left && css`
        margin-right:4px;
    `}

    ${props => props.position === IconPosition.right && css`
        margin-left:4px;
    `}

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
`

export const ButtonStyled = {
    PrimaryButton,
    IconContainer,
    SpinnerContainer,
    ButtonInnerContainer,
}
