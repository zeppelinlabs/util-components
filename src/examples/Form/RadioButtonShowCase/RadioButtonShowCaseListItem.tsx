import React, { useState } from "react"
import RadioButton from "../../../components/Form/RadioButton/RadioButton"

const RadioButtonShowCaseDetailListItem = () => {
    const [value, setValue,] = useState("")
    return <>
        <RadioButton
            value={"value"}
            onChange={setValue}
            selectedValue={value}
        >
            Radio button
        </RadioButton>
    </>
}

export default RadioButtonShowCaseDetailListItem