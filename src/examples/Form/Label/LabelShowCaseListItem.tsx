import React, { useState } from "react"
import Input from "../../../components/Form/Input/Input"
import Label from "../../../components/Form/Label/Label"

const LabelShowCaseDetailListItem = () => {
    const [inputValue, setInputValue,] = useState("")

    return <Label text="Label required" required>
        <Input type="text" value={inputValue} onChange={setInputValue} />
    </Label>
}

export default LabelShowCaseDetailListItem