import React from "react"
import Input from "../../../components/Form/Input/Input"
import Label from "../../../components/Form/Label/Label"
import LayoutExamples from "../../../styles/Layout/LayoutExamples/LayoutExamples"
import { TextWeight } from "../../../styles/typographicHelper"

const LabelShowCaseDetail = () => {
    return <LayoutExamples>
        <Label text="Label text">
            <Input type="text" value=""/>
        </Label>
        <Label text="Label required" required>
            <Input type="text" value="" />
        </Label>
        <Label text="Label disabled"
            customStyles={{ textColor: "blue", }}
            disabled
        >
            Plain content
        </Label>
        <Label text="Label custom color"
            customStyles={{
                textColor: "blue",
                textWeight: TextWeight.Bold,
            }}
        >
            <Input type="text" value="" />
        </Label>
    </LayoutExamples>
}

export default LabelShowCaseDetail