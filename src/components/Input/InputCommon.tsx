import { IconPosition } from "../CommonTypes"
import { InputStyled } from "./InputStyles"

export const renderErrorMessage = (message: string) => {
    return (
        <InputStyled.ErrorWrapper>
            {/* <Icon icon={ErrorIcon} /> */}
            <InputStyled.ErrorText>
                {message}
            </InputStyled.ErrorText>
        </InputStyled.ErrorWrapper>
    )
}

export const renderIcon = (position: IconPosition, icon: JSX.Element) => {
    return (
        <InputStyled.IconContainer position={position}>
            {icon}
        </InputStyled.IconContainer>
    )
}

