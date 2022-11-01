import React, { useState } from "react"
import Switch from "../../../components/Form/Switch/Switch"

const SwitchShowCaseDetailListItem = () => {
    const [switchValue, setSwitchValue,] = useState(false)
    return <Switch
        value={switchValue}
        onChange={(value) => setSwitchValue(value)}
    />
}

export default SwitchShowCaseDetailListItem