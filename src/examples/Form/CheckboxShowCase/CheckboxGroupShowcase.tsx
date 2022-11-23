/* eslint-disable max-lines-per-function */
import React, { useState } from "react"
import CheckboxGroup, { CheckboxGroupOption } from "../../../components/Form/Checkbox/CheckboxGroup"

type CheckboxGroupOption3 = CheckboxGroupOption<CheckboxGroupOption3Keys> & { discount: number, }

enum CheckboxGroupOption3Keys {
    option1 = "option1",
    option2 = "option2",
    option3 = "option3",
}

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
            children: <h5> JSX Option 3 disabled</h5>,
            disabled: true,
        },
    ]

    const options3: CheckboxGroupOption3[] = [
        {
            key: CheckboxGroupOption3Keys.option1,
            children: "Débito",
            discount: 0.50,
            customStyles: {
                checkBoxColor: "#9b59b6",
            },
        },
        {
            key: CheckboxGroupOption3Keys.option2,
            children: "Crédito",
            discount: 0,
            customStyles: {
                checkBoxColor: "#00b7ff",
            },
        },
        {
            key: CheckboxGroupOption3Keys.option3,
            children: "Mercado Pago",
            discount: 0.20,
            customStyles: {
                checkBoxColor: "#2a63ff",
            },
        },
    ]

    return <>
        <h3>Checkbox Group</h3>
        <CheckboxGroup
            options={options}
            keyValue={checkedState.map(o => o.key)}
            onChange={handleOnChangeCheckboxGroup}
        />
        <hr />
        <CheckboxGroup
            options={options2}
            keyValue={checkedState.map(o => o.key)}
            onChange={handleOnChangeCheckboxGroup}
        />
        <hr />
        <CheckboxGroup
            options={options3}
            keyValue={checkedState3.map(o => o.key)}
            onChange={setCheckedState3}
        />
    </>
}

export default CheckboxGroupShowCase