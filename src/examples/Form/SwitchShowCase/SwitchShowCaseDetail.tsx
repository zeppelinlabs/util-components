/* eslint-disable max-lines-per-function */
import React, { useState } from "react"
import Switch, { ContentSwitchAlign, ContentSwitchPosition }
    from "../../../components/Form/Switch/Switch"
import LayoutExamples from "../../../styles/Layout/LayoutExamples/LayoutExamples"
import { TextAlign } from "../../../styles/typographicHelper"

const SwitchShowCaseDetail = () => {
    const [switchValue, setSwitchValue,] = useState(false)

    return <LayoutExamples>
        <Switch
            value={switchValue}
            onChange={(value) => setSwitchValue(value)}
        />
        <hr />
        <Switch
            value={switchValue}
            onChange={(value) => setSwitchValue(value)}
            disabled={true}
        />
        <hr />
        <Switch
            value={switchValue}
            onChange={(value) => setSwitchValue(value)}
            accessibility={{ autoFocus: true, }}
        >
            With text or content
        </Switch>
        <hr />
        <Switch
            value={switchValue}
            onChange={(value) => setSwitchValue(value)}
            customStyles={{
                contentPosition: ContentSwitchPosition.Left,
            }}
        >
            With text or content position left
        </Switch>
        <hr />
        <Switch
            value={switchValue}
            onChange={(value) => setSwitchValue(value)}
            customStyles={{
                contentPosition: ContentSwitchPosition.Bottom,
                contentAlign: ContentSwitchAlign.Start,
            }}
        >
            With text or content position bottom
        </Switch>
        <hr />
        <Switch
            value={switchValue}
            onChange={(value) => setSwitchValue(value)}
            customStyles={{
                contentPosition: ContentSwitchPosition.Top,
                contentAlign: ContentSwitchAlign.End,
                textAlign: TextAlign.Center,
            }}
        >
            With text or content align to end
        </Switch>
    </LayoutExamples>
}

export default SwitchShowCaseDetail