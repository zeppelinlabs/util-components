const variantsString = (texts: { labelText: string, children: string, }) => `
import Label, { LabelVariant } from "components/Form/Label/Label"

<Label text={"${texts.labelText}"}
    labelVariant={LabelVariant.Optional}>
    <Input type="text" value="" />
</Label>

<Label text={"${texts.labelText}"}>
    ${texts.children}
</Label>

<Label text={"${texts.labelText}"}
    disabled>
    ${texts.children}
</Label>

<Label text={"${texts.labelText}"}
    labelVariant={LabelVariant.Required}>
    <Input type="text" value="" />
</Label>
`

const labelCodeViewerStrings = {
	variants: variantsString,
}

export default labelCodeViewerStrings