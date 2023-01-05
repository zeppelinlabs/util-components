/* eslint-disable max-lines-per-function */
import React, { useState } from "react"
import Input from "../../../components/Form/Input/Input"
import InputNumeric from "../../../components/Form/Input/InputNumeric"
import InputPassword from "../../../components/Form/Input/InputPassword"
import InputTextArea from "../../../components/Form/Input/InputTextArea"
import Label from "../../../components/Form/Label/Label"
import DetailComponentPage
    from "../../_Layout/DetailComponentPage/DetailComponentPage"


const InputShowCaseDetail = () => {
    const [inputStringState, setInputStringState,] = useState("")
    const [inputNumericState, setInputNumericState,] = useState<number | null>(1)
    const [inputAmountState, setInputAmountState,] = useState<number | null>(1)

    return <DetailComponentPage>
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
                placeholder="0"
            />
        </Label>

        <hr />
        <Label disabled text="Input disabled">
            <Input
                type="text"
                value={""}
                disabled
            />
        </Label>
        <hr />
        <Label text="Input with leading label">
            <InputNumeric
                value={inputAmountState}
                leadingLabel="$"
                onChange={setInputAmountState}
                step={0.01}
                customStyles={{
                    textAlign: "right",
                }}
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
                    textWeight: "bold",
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
        <hr />
        <Label text="Text area resizable">
            <InputTextArea
                value={inputStringState}
                onChange={setInputStringState}
                customStyles={{ isResizable: true, }}
            />
        </Label>
        <hr />
        <Label text="Input loading">
            <Input
                type="text"
                value="Loading"
                loading
            />
        </Label>
        <hr />
        <Label text="Input password">
            <InputPassword
                value={inputStringState}
                onChange={setInputStringState}
                placeholder="Password"
                errorMessage={inputStringState ? undefined : "Cannot be empty"}
            />
        </Label>
    </DetailComponentPage>
}

export default InputShowCaseDetail