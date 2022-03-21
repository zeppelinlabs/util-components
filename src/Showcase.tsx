import React from "react"
import styled from "styled-components"
import Button, { ButtonVariant } from "./components/Button/Button"
import { ReactComponent as ArrowIcon } from "./assets/arrow_left.svg?component"
import { ReactComponent as EmailIcon } from "./assets/email_icon.svg?component"
import Input from "./components/Input/Input"
import { IconPosition } from "./components/CommonTypes"
import InputNumeric from "./components/Input/InputNumeric"
import InputPassword from "./components/Input/InputPassword"

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
                iconPosition={IconPosition.left}
            />
            <Button
                variant={ButtonVariant.primary}
                type="submit"
                text="Submit"
                loading={true}
            />
            <Input
                type="text"
                value="Name test"
                placeholder="Your name"
            />
            <Input
                type="email"
                value="name@m"
                placeholder="Your email"
                errorMessage="Email is not correct"
            />
            <Input
                type="email"
                value=""
                placeholder="Email"
                icon={<EmailIcon />}
                position={IconPosition.left}
            />
            <InputNumeric
                value={12}
            />
            <InputNumeric
                value={12}
                leadingLabel="UYU"
            />
            <InputPassword
                value="213"
                placeholder="Password"
            />
        </Wrapper>
    )
}

export default Showcase