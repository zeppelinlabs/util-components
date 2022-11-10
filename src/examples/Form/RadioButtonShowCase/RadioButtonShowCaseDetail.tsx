/* eslint-disable max-lines-per-function */
import React, { useState } from "react"
import RadioButton from "../../../components/Form/RadioButton/RadioButton"
import LayoutExamples from "../../../styles/Layout/LayoutExamples/LayoutExamples"
import { TextWeight } from "../../../styles/typographicHelper"

const RadioButtonShowCaseDetail = () => {

    const [value, setValue,] = useState("")
    const [secondValue, setSecondValue,] = useState("")
    const [thirdValue, setThirdValue,] = useState("")

    return <LayoutExamples>
        <RadioButton
            selectedValue={value}
            onChange={setValue}
            name="group-1"
            options={[
                {
                    value: "1",
                    children: "Input radio",
                },
                {
                    value: "3",
                    children: "With text bold",
                    customStyles: {textWeight:TextWeight.Bold,},
                },
                {
                    value: "2",
                    children: "Disabled item",
                    disabled:true,
                },
            ]}
        />
        <hr />
        <RadioButton
            selectedValue={secondValue}
            onChange={setSecondValue}
            name="group-2"
            options={[
                {
                    value: "1",
                    children: "Input in other radio group",
                },
                {
                    value: "2",
                    children: <>With <em>JSX</em> content</>,
                },
                {
                    value: "3",
                    children: "With other colors",
                    customStyles: { textColor: "green", },
                },
                {
                    value: "4",
                    children: "With auto focus",
                    accessibility: {
                        autoFocus:true,
                    },
                },
            ]}
        />
        <hr />
        <RadioButton
            selectedValue={thirdValue}
            onChange={setThirdValue}
            name="group-3"
            errorMessage="Error, Select one!"
            options={[
                {
                    value: "1",
                    children: "Input disabled with error",
                    disabled:true,
                },
            ]}
        />
    </LayoutExamples>
}

export default RadioButtonShowCaseDetail