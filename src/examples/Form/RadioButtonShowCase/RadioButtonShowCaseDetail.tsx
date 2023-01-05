/* eslint-disable max-lines-per-function */
import React, { useState } from "react"
import Button, { ButtonVariant } from "../../../components/Button/Button"
import RadioButtonGroup, { RadioOption }
    from "../../../components/Form/RadioButton/RadioButton"
import DetailComponentPage
    from "../../_Layout/DetailComponentPage/DetailComponentPage"

enum ListOptionKey {
    FirstKey = "firstKey",
    SecondKey = "secondKey",
    ThirdKey = "thirdKey",
}

const listOption1: RadioOption<ListOptionKey>[] = [
    {
        key: ListOptionKey.FirstKey,
        children: "Input radio",
    },
    {
        key: ListOptionKey.SecondKey,
        children: "Disabled item",
        disabled: true,
    },
    {
        key: ListOptionKey.ThirdKey,
        children: "With text bold",
        customStyles: { textWeight: "bold", },
    },
]

const listOption2: RadioOption<number>[] = [
    {
        key: 1,
        children: "Input in other radio group",
    },
    {
        key: 2,
        children: <>With <em>JSX</em> content</>,
    },
    {
        key: 3,
        children: "With other colors",
        customStyles: { textColor: "level700", },
    },
    {
        key: 4,
        children: "With auto focus",
        accessibility: {
            autoFocus: true,
        },
    },
]

const listOption3: RadioOption<string>[] = [
    {
        key: "1",
        children: "Input disabled with error",
        disabled: true,
    },
]

const listOption4: RadioOption<string>[] = [
    {
        key: "1",
        children: "Input clear value with button",
    },
]
const listOption5: RadioOption<string | null>[] = [
    {
        key: null,
        children: "Send a null value",
    },
    {
        key: "1",
        children: "Value 1",
    },
]


const RadioButtonShowCaseDetail = () => {

    const [value, setValue,] = useState<ListOptionKey | undefined>()
    const [secondValue, setSecondValue,] = useState<number | undefined>()
    const [thirdValue, setThirdValue,] = useState<string | undefined>()
    const [fourValue, setFourValue,] = useState<string | undefined>("1")
    const [fiveValue, setFiveValue,] = useState<string | null>("1")

    const handleChange1 = (value: ListOptionKey) => {
        setValue(value)
    }

    const handleChange2 = (value: number) => {
        setSecondValue(value)
    }

    const handleChange3 = (value: string) => {
        setThirdValue(value)
    }
    const handleChange4 = (value: string) => {
        setFourValue(value)
    }
    const handleChange5 = (value: string | null) => {
        setFiveValue(value)
    }


    return <DetailComponentPage>
        <RadioButtonGroup
            selectedValue={value}
            onChange={handleChange1}
            name="group-1"
            options={listOption1}
        />
        <hr />
        <RadioButtonGroup
            selectedValue={secondValue}
            onChange={handleChange2}
            name="group-2"
            options={listOption2}
        />
        <hr />
        <RadioButtonGroup
            selectedValue={thirdValue}
            onChange={handleChange3}
            name="group-3"
            errorMessage="Error, Select one!"
            options={listOption3}
        />
        <hr />
        <RadioButtonGroup
            selectedValue={fourValue}
            onChange={handleChange4}
            name="group-4"
            options={listOption4}
        />
        <Button type="button"
            onClick={() => setFourValue(undefined)}
            buttonVariant={ButtonVariant.Primary}>
            Clear value of input radio
        </Button>
        <hr />
        <RadioButtonGroup
            selectedValue={fiveValue}
            onChange={handleChange5}
            name="group-5"
            options={listOption5}
        />
    </DetailComponentPage>
}

export default RadioButtonShowCaseDetail