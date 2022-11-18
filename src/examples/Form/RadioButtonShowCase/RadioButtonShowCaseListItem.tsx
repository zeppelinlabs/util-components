import React, { useState } from "react"
import RadioButton, { RadioOption, } from "../../../components/Form/RadioButton/RadioButton"

const listOption: RadioOption<string>[] = [
    {
        key: "1",
        children: "Input radio",
    },
]

const RadioButtonShowCaseDetailListItem = () => {
    const [value, setValue,] = useState("")

    const handleOnChange = (value: any) => {
        setValue(value)
    }

    return <>
        <RadioButton
            selectedValue={value}
            onChange={handleOnChange}
            name="group-1"
            options={listOption}
        />
    </>
}

export default RadioButtonShowCaseDetailListItem