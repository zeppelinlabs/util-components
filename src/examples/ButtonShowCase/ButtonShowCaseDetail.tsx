/* eslint-disable max-lines-per-function */
import React from "react"
import Button, { ButtonVariant, ButtonIconPosition }
    from "../../components/Button/Button"
import DetailComponentPage
    from "../_Layout/DetailComponentPage/DetailComponentPage"
import { ReactComponent as ArrowIcon } from ".././../assets/arrow_left.svg"
import { toastNotification } from "../../util/toastNotification"

const ButtonShowCaseDetail = () => {
    const handleOnClick = () => toastNotification("Fantastic! A button click has occurred!")

    return <DetailComponentPage>
        <Button
            onClick={handleOnClick}
            type="button"
        >
            Button
        </Button>
        <Button
            onClick={handleOnClick}
            icon={{
                SVGComponent: ArrowIcon,
            }}
            type="button"
        >
            With icon
        </Button >
        <Button
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
            customStyles={{ buttonVariant: ButtonVariant.Secondary, }}
            type="submit"
            loading={true}
        >
            Submit
        </Button>
        <Button
            type="submit"
            icon={{
                SVGComponent: ArrowIcon,
            }}
        />
        <Button
            customStyles={{ buttonVariant: ButtonVariant.Secondary, }}
            type="submit">
            Button second variant
        </Button>

        <Button
            type="submit">
            With custom <em>JSX content</em>
        </Button>
        <Button
            customStyles={{ isFullWidth: true, }}
            type="submit">
            With full width
        </Button>
    </DetailComponentPage>
}

export default ButtonShowCaseDetail