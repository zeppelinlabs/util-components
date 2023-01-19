const stateString = (texts: {
	checked: string, unchecked: string,
	indeterminate: string, disabled: string,
}) => `
import Checkbox from "components/Form/Checkbox/Checkbox"

<Checkbox
    value={value} //${texts.unchecked}
    onChange={handleOnChange}
/>

<Checkbox
    value={true} //${texts.checked}
    onChange={handleOnChange}
/>

<Checkbox
    value={value}
    onChange={handleOnChange}
    customStyles={{ isIndeterminate: true, }} //${texts.indeterminate}
/>

<Checkbox
    value={value}
    onChange={handleOnChange}
    disabled={true} //${texts.disabled}
/>
`

const variantsString = (texts: { checkboxText: string, }) => `
import Checkbox, { ContentCheckboxPosition, }
    from "components/Form/Checkbox/Checkbox"

<Checkbox
    value={value}
    onChange={handleOnChange}>
</Checkbox>

<Checkbox
    value={value}
    onChange={handleOnChange}
    customStyles={{
        contentPosition: ContentCheckboxPosition.Left,
    }}>
    ${texts.checkboxText}
</Checkbox>

<Checkbox
    value={value}
    onChange={handleOnChange}>
    ${texts.checkboxText}
</Checkbox>
`

const sizesString = (texts: { checkboxText: string, }) => `
import Checkbox, { CheckboxSize, }
    from "components/Form/Checkbox/Checkbox"

<Checkbox
    value={value}
    onChange={handleOnChange}
    customStyles={{
        size: CheckboxSize.Small,
        textSize: "xs",
    }}>
    ${texts.checkboxText}
</Checkbox>

<Checkbox
    value={value}
    onChange={handleOnChange}
    customStyles={{
        size: CheckboxSize.Base,
    }}>
    ${texts.checkboxText}
</Checkbox>

<Checkbox
    value={value}
    onChange={handleOnChange}
    customStyles={{
        size: CheckboxSize.Large,
        textSize: "xl",
    }}>
    ${texts.checkboxText}
</Checkbox>
`

const checkboxCodeViewerStrings = {
	state: stateString,
	variants: variantsString,
	sizes: sizesString,
}

export default checkboxCodeViewerStrings