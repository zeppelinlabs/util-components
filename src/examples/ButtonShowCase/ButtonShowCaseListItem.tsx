import React from "react"
import Button from "../../components/Button/Button"
import { ReactComponent as ArrowIcon } from ".././../assets/arrow_left.svg"
import { toastNotification } from "../../util/toastNotification"

const ButtonShowCaseDetailListItem = () => {
    const handleOnClick = () => toastNotification("Fantastic! A button click has occurred!")

    return <Button
        onClick={handleOnClick}
        icon={{
            SVGComponent: ArrowIcon,
        }}
        type="button"
    >
        Button
    </Button>
}

export default ButtonShowCaseDetailListItem