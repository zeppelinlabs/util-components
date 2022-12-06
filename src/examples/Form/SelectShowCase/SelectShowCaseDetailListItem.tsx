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
    const [value, setValue,] = useState<number>(2)

    const handleChange1 = (value: number) => {
        setValue(value)

    }

    return <Select
        options={listOption1}
        selectedValue={value}
        onChange={handleChange1}
        placeholder="Seleccione una opción"
        label={{ text: "hola", }}
    />
}

export default SelectShowCaseDetailListItem