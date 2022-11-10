import React, { useState } from "react"
import RadioButton from "../../../components/Form/RadioButton/RadioButton"
import LayoutExamples from "../../../styles/Layout/LayoutExamples/LayoutExamples"
import { TextAlign, TextWeight } from "../../../styles/typographicHelper"

const RadioButtonShowCaseDetail = () => {

    const [value, setValue,] = useState("")
    const [secondValue, setSecondValue,] = useState("")

    return <LayoutExamples>
        <RadioButton
            value={"value"}
            onChange={setValue}
            selectedValue={value}
        >
            Element or text
        </RadioButton>

        <RadioButton
            value={"value 2"}
            onChange={setValue}
            selectedValue={value}
            disabled
        >
            Radio button disabled
        </RadioButton>

        <RadioButton
            value={"value 3"}
            onChange={setSecondValue}
            selectedValue={secondValue}
            customStyles={{
                textWeight: TextWeight.Bold,
            }}
        >
            Radio button with bold
        </RadioButton>
    </LayoutExamples>
}

export default RadioButtonShowCaseDetail