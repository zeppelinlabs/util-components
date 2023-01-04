import React from "react"
import Input from "../../../components/Form/Input/Input"
import Label, { LabelVariant } from "../../../components/Form/Label/Label"
import LayoutDescriptionComponent
    from "../../Layout/LayoutDescriptionComponent/LayoutDescriptionComponent"

const LabelShowCaseDetail = () => {
    return <LayoutDescriptionComponent>
        <Label text="Label text"
            labelVariant={LabelVariant.Optional}>
            <Input type="text" value="" />
        </Label>
        <Label text="Label required" labelVariant={LabelVariant.Required}>
            <Input type="text" value="" />
        </Label>
        <Label text="Label disabled"
            customStyles={{ textColor: "level700", }}
            disabled
        >
            Plain content
        </Label>
        <Label text="Label custom color"
            labelVariant={LabelVariant.Info}
            customStyles={{
                textColor: "level400",
                textWeight: "bold",
            }}
        >
            <Input type="text" value="" />
        </Label>
    </LayoutDescriptionComponent>
}

export default LabelShowCaseDetail