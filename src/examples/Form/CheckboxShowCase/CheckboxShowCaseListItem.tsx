import React, { useState } from "react"
import Checkbox from "../../../components/Form/Checkbox/Checkbox"

const CheckboxShowCaseDetailListItem = () => {
    const [value, setValue,] = useState(true)

    const handleOnChange = (value: boolean) => setValue(value)

    return <Checkbox
        value={value}
        onChange={handleOnChange}
    />
}

export default CheckboxShowCaseDetailListItem