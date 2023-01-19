import React, { useState } from "react"
import Label from "../../../components/Form/Label/Label"
import Select, { SelectOption } from "../../../components/Form/Select/Select"

const listOption1: SelectOption<number>[] = [
    {
        key: 1,
        text: "Opción #1",
    },
    {
        key: 2,
        text: "Opción #2",
    },
    {
        key: 3,
        text: "Opción #3",
    },
]

const SelectShowCaseDetailListItem = () => {
    const [value, setValue,] = useState<SelectOption<number>>()

    const handleChange1 = (value: SelectOption<number>) => {
        setValue(value)
    }

    return <Label text="Select">
        <Select
            options={listOption1}
            selectedValue={value?.key}
            onChange={handleChange1}
        />
    </Label>
}

export default SelectShowCaseDetailListItem