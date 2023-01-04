/* eslint-disable max-lines-per-function */
import React from "react"
import Button, { ButtonVariant, ButtonIconPosition }
    from "../../components/Button/Button"
import LayoutDescriptionComponent
    from "../Layout/LayoutDescriptionComponent/LayoutDescriptionComponent"
import { ReactComponent as ArrowIcon } from ".././../assets/arrow_left.svg"
import { toast } from "react-toastify"

const ButtonShowCaseDetail = () => {
    const handleOnClick = () => toast("Fantastic! A button click has occurred!")

    return <LayoutDescriptionComponent>
        <Button
            buttonVariant={ButtonVariant.Primary}
            onClick={handleOnClick}
            type="button"
        >
            Button
        </Button>
        <Button
            buttonVariant={ButtonVariant.Primary}
            onClick={handleOnClick}
            icon={{
                SVGComponent: ArrowIcon,
            }}
            type="button"
        >
            With icon
        </Button >
        <Button
            buttonVariant={ButtonVariant.Primary}
            onClick={handleOnClick}
            icon={{
                SVGComponent: ArrowIcon,
                position: ButtonIconPosition.Right,
            }}
            type="button"
        >
            Icon position right
        </Button>
        <Button
            buttonVariant={ButtonVariant.Secondary}
            type="submit"
            loading={true}
        >
            Submit
        </Button>
        <Button
            buttonVariant={ButtonVariant.Primary}
            type="submit"
            icon={{
                SVGComponent: ArrowIcon,
            }}
        />
        <Button
            buttonVariant={ButtonVariant.Secondary}
            type="submit">
            Button second variant
        </Button>

        <Button
            buttonVariant={ButtonVariant.Primary}
            type="submit">
            With custom <em>JSX content</em>
        </Button>
        <Button
            buttonVariant={ButtonVariant.Primary}
            customStyles={{ isFullWidth: true, }}
            type="submit">
            With full width
        </Button>
    </LayoutDescriptionComponent>
}

export default ButtonShowCaseDetail