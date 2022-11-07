import React, { useState } from "react"
import Checkbox from "../../../components/Form/Checkbox/Checkbox"

const CheckboxShowCaseDetailListItem = () => {
    const [switchValue, setSwitchValue,] = useState(false)
    return <Checkbox
        value={switchValue}
        onChange={(value) => setSwitchValue(value)}
    />
}

export default CheckboxShowCaseDetailListItem