/* eslint-disable max-lines-per-function */
import React, { useState } from "react"
import Input from "../../../components/Form/Input/Input"
import InputNumeric from "../../../components/Form/Input/InputNumeric"
import InputPassword from "../../../components/Form/Input/InputPassword"
import InputTextArea from "../../../components/Form/Input/InputTextArea"
import Label from "../../../components/Form/Label/Label"
import LayoutExamples from "../../../styles/Layout/LayoutExamples/LayoutExamples"
import { TextAlign, TextWeight } from "../../../styles/typographicHelper"

const InputShowCaseDetail = () => {
    const [inputStringState, setInputStringState,] = useState("")
    const [inputNumericState, setInputNumericState,] = useState<number | null>(1)
    const [inputAmountState, setInputAmountState,] = useState<number | null>(1)

    const handleNumericKeyDown = (event: string) => {
        if (event === "ArrowUp") {
            setInputNumericState(prev => (prev ? prev + 1 : 1))
        } else if (event === "ArrowDown") {
            setInputNumericState(prev => (prev ? prev - 1 : -1))
        }
    }

    return <LayoutExamples>
        <Label text="Input text">
            <Input
                type="text"
                value={inputStringState}
                onChange={setInputStringState}
                accessibility={{ autoFocus: true, }}
                placeholder="Text"
            />
        </Label>
        <hr />
        <Label text="Input numeric">
            <InputNumeric
                value={inputNumericState}
                onChange={setInputNumericState}
                onKeyDown={handleNumericKeyDown}
                placeholder="0"
            />
        </Label>
        <hr />
        <Label text="Input password">
            <InputPassword
                value={inputStringState}
                onChange={setInputStringState}
                placeholder="Password"
                errorMessage={inputStringState ? undefined : "Cannot be empty" }
            />
        </Label>
        <hr />
        <Label disabled text="Input disabled">
            <Input
                type="text"
                value={inputStringState}
                disabled
            />
        </Label>
        <hr />
        <Label text="Input with leading label">
            <InputNumeric
                value={inputAmountState}
                leadingLabel="$"
                onChange={setInputAmountState}
            />
        </Label>
        <hr />
        <Label text="Input with custom styles">
            <Input
                type="text"
                value={inputStringState}
                onChange={setInputStringState}
                customStyles={{
                    textColor: "blue",
                    textAlign: TextAlign.Right,
                    textWeight: TextWeight.Bold,
                }}
            />
        </Label>
        <hr />
        <Label text="Input text area">
            <InputTextArea
                value={inputStringState}
                onChange={setInputStringState}
                maxLength={100}
            />
        </Label>
    </LayoutExamples>
}

export default InputShowCaseDetail