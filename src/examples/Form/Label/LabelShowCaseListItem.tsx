import React, { useState } from "react"
import Input from "../../../components/Form/Input/Input"
import Label, { LabelVariant } from "../../../components/Form/Label/Label"

const LabelShowCaseDetailListItem = () => {
    const [inputValue, setInputValue,] = useState("")

    return <Label text="Label required" labelVariant={LabelVariant.Required}>
        <Input type="text" value={inputValue} onChange={setInputValue} />
    </Label>
}

export default LabelShowCaseDetailListItem