import React from "react"
import { toast } from "react-toastify"
import Button, { ButtonVariant } from "../../components/Button/Button"
import { ReactComponent as ArrowIcon } from ".././../assets/arrow_left.svg"

const ButtonShowCaseDetailListItem = () => {
    const handleOnClick = () => toast("Fantastic! A button click has occurred!")

    return <Button
        buttonVariant={ButtonVariant.Primary}
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