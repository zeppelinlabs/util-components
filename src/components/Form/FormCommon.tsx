import React from "react"
import styled, { css } from "styled-components"
import { FontsTokens } from "../../styles/designTokens/fontsTokens"
import { thp } from "../../styles/themeHelpers"
import { IconPosition } from "../CommonTypes"

export const renderErrorMessage = (message: string) => {
    return (
        <ErrorWrapper>
            <ErrorText>
                {message}
            </ErrorText>
        </ErrorWrapper>
    )
}

export const renderIcon = (position: IconPosition, icon: JSX.Element) => {
    return (
        <IconContainer position={position}>
            {icon}
        </IconContainer>
    )
}

const ErrorWrapper = styled.div`
    display: flex;
    padding-top: 4px;
    width: 100%;
    word-break: break-word;
    align-items: center;
`

const ErrorText = styled.span`
    color:${thp.system.error.level600._};
    font-size: ${FontsTokens.sizes.Primary.xs.fontSize};
    line-height: ${FontsTokens.sizes.Primary.xs.lineHeight};
    font-weight: ${FontsTokens.weights.Primary.light};
`

type IconContainerProps = {
    position: IconPosition,
}
const IconContainer = styled.div<IconContainerProps>`
    position: absolute;
    top:0;
    bottom: 0;
    width: 12px;
    pointer-events: none;
    display: flex;
    place-items: center;
    ${props => props.position === IconPosition.left && css`
        left: 12px;
    `};
     ${props => props.position === IconPosition.right && css`
        right: 12px;
    `};
`