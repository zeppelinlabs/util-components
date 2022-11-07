import React from "react"
import Button, { ButtonVariant } from "../../components/Button/Button"
import { ReactComponent as ArrowIcon } from ".././../assets/arrow_left.svg"

const ButtonShowCaseDetailListItem = () => {
    // eslint-disable-next-line no-alert
    const handleOnClick = () => alert("Click")

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