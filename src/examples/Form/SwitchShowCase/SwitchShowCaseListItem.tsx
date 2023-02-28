import React, { useState } from "react"
import Switch, { SwitchVariant } from "../../../components/Form/Switch/Switch"

const SwitchShowCaseDetailListItem = () => {
    const [switchValue, setSwitchValue,] = useState(false)
    return <Switch
        value={switchValue}
        onChange={(value) => setSwitchValue(value)}
        customStyles={{
            switchVariant: SwitchVariant.Showcase,
        }}
    />
}

export default SwitchShowCaseDetailListItem