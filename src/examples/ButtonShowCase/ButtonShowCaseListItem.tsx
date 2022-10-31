import React from "react"
import Button, { ButtonVariant } from "../../components/Form/Button/Button"
import { ReactComponent as ArrowIcon } from ".././../assets/arrow_left.svg"

const ButtonShowCaseDetailListItem = () => {
    return <Button
        buttonVariant={ButtonVariant.Primary}
        onClick={() => alert("click")}
        icon={{
            SVGComponent: ArrowIcon,
        }}
        type="button"
    >
            Button
    </Button>
}

export default ButtonShowCaseDetailListItem