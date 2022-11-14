import React from "react"
import Input from "../../../components/Form/Input/Input"
import InputNumeric from "../../../components/Form/Input/InputNumeric"
import InputPassword from "../../../components/Form/Input/InputPassword"
import Label from "../../../components/Form/Label/Label"
import LayoutExamples from "../../../styles/Layout/LayoutExamples/LayoutExamples"

const InputShowCaseDetail = () => {
    return <LayoutExamples>
        <Label text="Label text">
            <Input type="text" value=""/>
        </Label>
        <hr />
        <Label text="Label text">
            <InputNumeric type="text" value={1}/>
        </Label>
        <hr />
        <Label text="Label text">
            <InputPassword type="text" value=""/>
        </Label>
    </LayoutExamples>
}

export default InputShowCaseDetail