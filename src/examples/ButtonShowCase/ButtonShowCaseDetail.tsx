/* eslint-disable max-lines-per-function */
import React from "react"
import LayoutExamples from "../../styles/Layout/LayoutExamples/LayoutExamples"
import Button, { ButtonVariant, ButtonIconPosition }
    from "../../components/Button/Button"

import { ReactComponent as ArrowIcon } from ".././../assets/arrow_left.svg"

const ButtonShowCaseDetail = () => {
    return <LayoutExamples>
        <Button
            buttonVariant={ButtonVariant.Primary}
            onClick={() => alert("click")}
            type="button"
        >
            Button
        </Button>
        <Button
            buttonVariant={ButtonVariant.Primary}
            onClick={() => alert("click")}
            icon={{
                SVGComponent: ArrowIcon,
            }}
            type="button"
        >
            With icon
        </Button >
        <Button
            buttonVariant={ButtonVariant.Primary}
            onClick={() => alert("click")}
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
    </LayoutExamples>
}

export default ButtonShowCaseDetail