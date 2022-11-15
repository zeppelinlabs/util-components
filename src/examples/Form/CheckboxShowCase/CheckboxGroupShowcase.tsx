/* eslint-disable max-lines-per-function */
import React, { useState } from "react"
import CheckboxGroup, { CheckboxGroupOption } from "../../../components/Form/Checkbox/CheckboxGroup"

type CheckboxGroupOption3 = CheckboxGroupOption<string> & { discount: number, }

const CheckboxGroupShowCase = () => {
    const [checkedState, setCheckedState,] = useState<CheckboxGroupOption<string>[]>([])
    const [checkedState3, setCheckedState3,] = useState<CheckboxGroupOption3[]>([])

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

    const options2 = [
        {
            key: "option1",
            children: <h5> JSX Option 1 </h5>,
        },
        {
            key: "option2",
            children: <h5> JSX Option 2 </h5>,
        },
        {
            key: "option3",
            children: <h5> JSX Option 3 </h5>,
        },
    ]

    const options3: CheckboxGroupOption3[] = [
        {
            key: "option1",
            children: "Débito",
            discount: 0.50,
        },
        {
            key: "option2",
            children: "Crédito",
            discount: 0,
        },
        {
            key: "option3",
            children: "Mercado Pago",
            discount: 0.20,
        },
    ]

    return <>
        <h3>Checkbox Group</h3>
        <CheckboxGroup
            options={options}
            value={checkedState}
            onChange={handleOnChangeCheckboxGroup}
        />
        <hr />
        <CheckboxGroup
            options={options2}
            value={checkedState}
            onChange={handleOnChangeCheckboxGroup}
        />
        <hr />
        <CheckboxGroup
            options={options3}
            value={checkedState3}
            onChange={setCheckedState3}
        />
    </>
}

export default CheckboxGroupShowCase