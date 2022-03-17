import React from "react"
import styled from "styled-components"
import Button, { ButtonIconPosition, ButtonVariant } from "./components/Button/Button"
import { ReactComponent as ArrowIcon } from "./assets/arrow_left.svg?component"

const Wrapper = styled.div`
    padding:100px;
    display:grid;
    grid-template-rows:auto;
    row-gap:16px;
    justify-content: start;
`

const Showcase = () => {
    return (
        <Wrapper>
            <Button
                variant={ButtonVariant.primary}
                onClick={() => console.log("click")}
                type="button"
                text="Edit"
            />
            <Button
                variant={ButtonVariant.primary}
                onClick={() => console.log("click")}
                type="button"
                text="Go back"
                icon={<ArrowIcon />}
                iconPosition={ButtonIconPosition.left}
            />
            <Button
                variant={ButtonVariant.primary}
                type="submit"
                text="Submit"
                loading={true}
            />
        </Wrapper>
    )
}

export default Showcase