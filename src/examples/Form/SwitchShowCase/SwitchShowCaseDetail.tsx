/* eslint-disable max-lines-per-function */
import React, { useState } from "react"
import Switch, { ContentSwitchAlign, ContentSwitchPosition }
    from "../../../components/Form/Switch/Switch"
import DetailComponentPage
    from "../../_Layout/DetailComponentPage/DetailComponentPage"

const SwitchShowCaseDetail = () => {
    const [switchValue, setSwitchValue,] = useState(false)

    return <DetailComponentPage>
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
                textAlign: "center",
            }}
        >
            With text or content align to end
        </Switch>
    </DetailComponentPage>
}

export default SwitchShowCaseDetail