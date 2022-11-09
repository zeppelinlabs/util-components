import React from "react"
import Input from "../../../components/Form/Input/Input"
import Label, { LabelVariant } from "../../../components/Form/Label/Label"
import LayoutExamples from "../../../styles/Layout/LayoutExamples/LayoutExamples"
import { TextWeight } from "../../../styles/typographicHelper"

const LabelShowCaseDetail = () => {
    return <LayoutExamples>
        <Label text="Label text"
            labelVariant={LabelVariant.Optional}>
            <Input type="text" value=""/>
        </Label>
        <Label text="Label required" labelVariant={LabelVariant.Required}>
            <Input type="text" value="" />
        </Label>
        <Label text="Label disabled"
            customStyles={{ textColor: "blue", }}
            disabled
        >
            Plain content
        </Label>
        <Label text="Label custom color"
            labelVariant={LabelVariant.Info}
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