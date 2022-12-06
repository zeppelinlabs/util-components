import React, { useState } from "react"
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

    return <Select
        options={listOption1}
        selectedValue={value?.key}
        onChange={handleChange1}
    />
}

export default SelectShowCaseDetailListItem