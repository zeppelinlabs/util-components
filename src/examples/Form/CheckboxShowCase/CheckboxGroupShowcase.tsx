/* eslint-disable max-lines-per-function */
import React, { useState } from "react"
import CheckboxGroup, { CheckboxGroupOption } from "../../../components/Form/Checkbox/CheckboxGroup"

const CheckboxGroupShowCase = () => {
    const [checkedState, setCheckedState,] = useState<CheckboxGroupOption<string>[]>([])

    const handleOnChangeCheckboxGroup
        = (value: CheckboxGroupOption<string>[]) => setCheckedState(value)

    const options = [
        {
            key: "option1",
            children: "Option 1",
        },
        {
            key: "option2",
            children: "Option 2",
        },
        {
            key: "option3",
            children: "Option 3",
        },
    ]

    return <>
        <h3>Checkbox Group</h3>
        <CheckboxGroup
            options={options}
            keyValue={checkedState.map(o => o.key)}
            onChange={handleOnChangeCheckboxGroup}
        />
    </>
}

export default CheckboxGroupShowCase