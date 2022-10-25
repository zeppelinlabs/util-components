import React from "react"
import styled from "styled-components"
import Button, { ButtonVariant } from "./components/Button/Button"
import { ReactComponent as ArrowIcon } from "./assets/arrow_left.svg?component"
import { ReactComponent as EmailIcon } from "./assets/email_icon.svg?component"
import Input from "./components/Form/Input/Input"
import { IconPosition } from "./components/CommonTypes"
import InputNumeric from "./components/Form/Input/InputNumeric"
import InputPassword from "./components/Form/Input/InputPassword"
import TextArea from "./components/Form/TextArea/TextArea"
import Switch from "./components/Form/Switch/Switch"
import Checkbox from "./components/Form/Checkbox/Checkbox"
import RadioButton from "./components/Form/RadioButton/RadioButton"
import Select from "./components/Form/Select/Select"
import Tag, { TagIconPosition, TagSize, TagTextWeight } from "./components/Tag/Tag"

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
            <TextArea
                value="Texto de prueba"
                maxLength={120}
            />
            <Switch
                value={false}
                label="Active"
            />
            <Checkbox
                value={true}
                label={"Visa"}
            />
            <RadioButton
                value={"VISA"}
                selectedValue={"VISA"}
            />
            <Select
                keyValue="TEST"
                placeholder=""
                options={[
                    {
                        key: "TEST",
                        text: "op 1"
                    },
                    {
                        key: "TEST",
                        text: "op 2"
                    },
                ]}
            />
            <Tag Icon={{IconSVGComponent: EmailIcon,}} >
                Small
            </Tag>
            <Tag Icon={{ IconSVGComponent: EmailIcon, }}
                customStyles={{ size: TagSize.Medium, }} >
                Medium
            </Tag>
            <Tag Icon={{ IconSVGComponent: EmailIcon, }}
                customStyles={{ size: TagSize.Large, }}>
                Large
            </Tag>
            <Tag onClickRemove={() => { }}
                Icon={{ IconSVGComponent: EmailIcon, }} >
                With close action
            </Tag>
            <Tag Icon={{ IconSVGComponent: EmailIcon, Position: TagIconPosition.Right }} >
                With icon align to right
            </Tag>
            <Tag Icon={{ IconSVGComponent: EmailIcon, }}
                customStyles={{ isCursorPointer: true, }} >
                With cursor pointer
            </Tag>
            <Tag>
                Without icons
            </Tag>
            <Tag Icon={{ IconSVGComponent: EmailIcon, }}
                customStyles={{ TextWeight: TagTextWeight.Bold, }} >
                With text bold
            </Tag>
            <Tag onClickRemove={() => { }}>
                Only remove action
            </Tag>
            <Tag Icon={{ IconSVGComponent: EmailIcon, }}
                customStyles={{
                borderColor: "#004221",
                BackgroundColor: "#BAF7D9",
                TextColor: "#008542",
                size: TagSize.Large,
            }} >
                With custom colors
            </Tag>
        </Wrapper>
    )
}

export default Showcase