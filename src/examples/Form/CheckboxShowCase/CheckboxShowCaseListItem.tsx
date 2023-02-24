import React, { useState } from "react"
import Checkbox, { CheckboxVariant } from "../../../components/Form/Checkbox/Checkbox"

const CheckboxShowCaseDetailListItem = () => {
    const [value, setValue,] = useState(true)

    const handleOnChange = (value: boolean) => setValue(value)

    return <Checkbox
        value={value}
        onChange={handleOnChange}
        customStyles={{
            checkboxVariant: CheckboxVariant.Showcase,
        }}
    />
}

export default CheckboxShowCaseDetailListItem