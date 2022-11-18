/* eslint-disable max-lines-per-function */
import React, { useState } from "react"
import RadioButton, { RadioOption,  } from "../../../components/Form/RadioButton/RadioButton"
import LayoutExamples from "../../../styles/Layout/LayoutExamples/LayoutExamples"
import { TextWeight } from "../../../styles/typographicHelper"

const listOption1: RadioOption<string>[] = [
    {
        key: "1",
        children: "Input radio",
    },
    {
        key: "2",
        children: "Disabled item",
        disabled: true,
    },
    {
        key: "3",
        children: "With text bold",
        customStyles: { textWeight: TextWeight.Bold, },
    },
]

const listOption2: RadioOption<string>[] = [
    {
        key: "1",
        children: "Input in other radio group",
    },
    {
        key: "2",
        children: <>With <em>JSX</em> content</>,
    },
    {
        key: "3",
        children: "With other colors",
        customStyles: { textColor: "green", },
    },
    {
        key: "4",
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

const RadioButtonShowCaseDetail = () => {

    const [value, setValue,] = useState("")
    const [secondValue, setSecondValue,] = useState("")
    const [thirdValue, setThirdValue,] = useState("")

    const handleChange1 = (value: any) => {
        setValue(value)
    }

    const handleChange2 = (value: any) => {
        setSecondValue(value)
    }

    const handleChange3 = (value: any) => {
        setThirdValue(value)
    }


    return <LayoutExamples>
        <RadioButton
            selectedValue={value}
            onChange={handleChange1}
            name="group-1"
            options={listOption1}
        />
        <hr />
        <RadioButton
            selectedValue={secondValue}
            onChange={handleChange2}
            name="group-2"
            options={listOption2}
        />
        <hr />
        <RadioButton
            selectedValue={thirdValue}
            onChange={handleChange3}
            name="group-3"
            errorMessage="Error, Select one!"
            options={listOption3}
        />
    </LayoutExamples>
}

export default RadioButtonShowCaseDetail