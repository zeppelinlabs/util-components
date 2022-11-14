import React, { useState } from "react"
import Input from "../../../components/Form/Input/Input"

const InputShowCaseDetailListItem = () => {
    const [inputValue, setInputValue,] = useState("")

    return <Input type="text" value={inputValue} onChange={setInputValue} />
}

export default InputShowCaseDetailListItem