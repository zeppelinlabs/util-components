/* eslint-disable max-lines-per-function */
import React, { useState } from "react"
import Button, { ButtonVariant, ButtonIconPosition }
    from "../../components/Button/Button"
import DetailComponentPage
    from "../_Layout/DetailComponentPage/DetailComponentPage"
import { ReactComponent as ArrowIcon } from ".././../assets/arrow_left.svg"
import { toastNotification } from "../../util/toastNotification"

const messageList = [
    "Fantastic! A button click has occurred!",
    "Wow another click!",
    "Yep, still working",
    "Still clicking",
    "Again ? really ? You already know that its working",
    "This is getting out of hands",
]

const ButtonShowCaseDetail = () => {
    const [clickCount, setClickCount,] = useState(0)

    const handleOnClick = () => {
        toastNotification(messageList[clickCount])
        setClickCount((clickCount < (messageList.length - 1)) ? clickCount + 1 : 0)
    }

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
            onClick={handleOnClick}
            type="button"
            icon={{
                SVGComponent: ArrowIcon,
            }}
        />
        <Button
            customStyles={{ buttonVariant: ButtonVariant.Secondary, }}
            onClick={handleOnClick}
            type="button">
            Button second variant
        </Button>

        <Button
            onClick={handleOnClick}
            type="button">
            With custom <em>JSX content</em>
        </Button>
        <Button
            customStyles={{ isFullWidth: true, }}
            onClick={handleOnClick}
            type="button">
            With full width
        </Button>
    </DetailComponentPage>
}

export default ButtonShowCaseDetail