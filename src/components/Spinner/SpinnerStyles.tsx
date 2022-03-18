import styled, { keyframes } from "styled-components"
import { SpinnerSize } from "./Spinner"

const spinnerAnimation = keyframes`
    from {
        transform:rotate(0deg);
        transform-origin: center center;
    }
    to {
        transform:rotate(360deg);
        transform-origin: center center;
    }
    
`

type IconProps = {
    size: SpinnerSize,
}

const getIconSize = (size: SpinnerSize) => {
    switch (size) {
        case SpinnerSize.small:
            return "16px"
        case SpinnerSize.medium:
            return "40px"
        case SpinnerSize.large:
            return "60px"
        default:
            throw new Error("Spinner size not exists")
    }
}

export const Container = styled.div<IconProps>`
    width: ${props => getIconSize(props.size)};
    height: ${props => getIconSize(props.size)};
    display:block;
    animation: ${spinnerAnimation} 1s linear infinite;
    transform-origin: center center;
`

export const SpinerStyled = {
    Container,
}