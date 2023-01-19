import React from "react"
import FormCommonStyles from "./FormCommonStyles"

export const renderErrorMessage = (message: string) => {
    return (
        <FormCommonStyles.ErrorWrapper>
            <FormCommonStyles.ErrorText>
                {message}
            </FormCommonStyles.ErrorText>
        </FormCommonStyles.ErrorWrapper>
    )
}
