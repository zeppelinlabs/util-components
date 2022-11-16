import React, { useState } from "react"
import RadioButton from "../../../components/Form/RadioButton/RadioButton"

const RadioButtonShowCaseDetailListItem = () => {
    const [value, setValue,] = useState("")
    return <>
        <RadioButton
            selectedValue={value}
            onChange={setValue}
            name="group-1"
            options={[
                {
                    key: "1",
                    value: "1",
                    children: "Input radio",
                },
            ]}
        />
    </>
}

export default RadioButtonShowCaseDetailListItem