const stateString = (texts: { off: string, on: string, disabled: string, }) => `
import Switch from "components/Form/Switch/Switch"

const [switchValue, setSwitchValue,] = useState(false)

<Switch value={false} //${texts.off}
    onChange={() => {}}
/>

<Switch value={switchValue} //${texts.on}
    onChange={(value) => setSwitchValue(value)}
/>

<Switch value={false}
    onChange={() => {}}
    disabled //${texts.disabled}
/>
`

const variantsString = (texts: { switchText: string, }) => `
import Switch, { ContentSwitchPosition, }
    from "components/Form/Switch/Switch"

<Switch value={switchValue} />

<Switch value={switchValue}>
    ${texts.switchText}
</Switch>

<Switch value={switchValue}
    customStyles={{
        contentPosition: ContentSwitchPosition.Left,
    }}>
    ${texts.switchText}
</Switch>

<Switch
    value={switchValue}
    customStyles={{
        contentPosition: ContentSwitchPosition.Bottom,
    }}>
    ${texts.switchText}
</Switch>
`

const sizesString = (texts: { switchText: string, }) => `
import Switch, { SwitchSize, } from "components/Form/Switch/Switch"

<Switch value={switchValue}
    customStyles={{
        size: SwitchSize.Small,
        textSize: "xs",
    }}>
    ${texts.switchText}
</Switch>

<Switch value={switchValue}>
    ${texts.switchText}
</Switch>

<Switch value={switchValue}
    customStyles={{
        size: SwitchSize.Large,
        textSize: "xl",
    }}>
    ${texts.switchText}
</Switch>
`

const switchCodeViewerStrings = {
	state: stateString,
	variants: variantsString,
	sizes: sizesString,
}

export default switchCodeViewerStrings