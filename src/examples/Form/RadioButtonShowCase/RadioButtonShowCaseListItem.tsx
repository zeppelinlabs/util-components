import React, { useState } from "react"
import RadioButtonGroup, { RadioOption, } from "../../../components/Form/RadioButton/RadioButton"


const listOption: RadioOption<string>[] = [
    {
        key: "1",
        children: "",
    },
]

const RadioButtonShowCaseDetailListItem = () => {
    const [value, setValue,] = useState("1")

    const handleOnChange = (value: string) => {
        setValue(value)
    }

    return <>
        <RadioButtonGroup
            selectedValue={value}
            onChange={handleOnChange}
            name="group-1"
            options={listOption}
        />
    </>
}

export default RadioButtonShowCaseDetailListItem