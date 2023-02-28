import React from "react"
import Button, { ButtonVariant } from "../../components/Button/Button"
import { toastNotification } from "../../util/toastNotification"

const ButtonShowCaseDetailListItem = () => {
    const handleOnClick = () => toastNotification("Fantastic! A button click has occurred!")

    return <Button
        onClick={handleOnClick}
        type="button"
        customStyles={{
            buttonVariant: ButtonVariant.Showcase,
        }}
    >
        Button
    </Button>
}

export default ButtonShowCaseDetailListItem