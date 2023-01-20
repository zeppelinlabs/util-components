const stateString = (texts: { selected: string, unselected: string, disabled: string, }) => `
import RadioButtonGroup, { RadioOption, }
    from "components/Form/RadioButton/RadioButton"

enum ListOptionKey {
    FirstKey = "firstKey",
    SecondKey = "secondKey",
    ThirdKey = "thirdKey",
}

const listOption: RadioOption<ListOptionKey>[] = [
    {
        key: ListOptionKey.FirstKey,
        children: "", //${texts.selected}
    },
    {
        key: ListOptionKey.SecondKey,
        children: "", //${texts.unselected}
    },
    {
        key: ListOptionKey.SecondKey,
        children: "", //${texts.disabled}
        disabled: true,
    },
]

const [value, setValue,] = useState<ListOptionKey | null>(ListOptionKey.SecondKey)

const handleChange = (value: ListOptionKey) => {
    setValue(value)
}

<RadioButtonGroup
    selectedValue={value}
    onChange={handleChange}
    name="group-1"
    options={listOption}
/>
`

const variantsString = (texts: { radioText: string, }) => `
import RadioButtonGroup, { RadioOption, ContentRadioPosition, }
    from "components/Form/RadioButton/RadioButton"

const listOption: RadioOption<string>[] = [
    {
        key: "01",
        children: "",
    },
    {
        key: "02",
        children: "${texts.radioText}",
    },
    {
        key: "03",
        children: "${texts.radioText}",
        customStyles: { contentPosition: ContentRadioPosition.Left, },
    },
]

const [value, setValue,] = useState<string | null>("01")

const handleChange = (value: string) => {
    setValue(value)
}

<RadioButtonGroup
    selectedValue={value}
    onChange={handleChange}
    name="group-2"
    options={listOption}
/>
`

const sizesString = (texts: { radioText: string, }) => `
import RadioButtonGroup, { RadioOption, RadioButtonSize, }
    from "components/Form/RadioButton/RadioButton"

const listOption: RadioOption<number>[] = [
    {
        key: 1,
        children: "${texts.radioText}",
        customStyles: {
            size: RadioButtonSize.Small,
            textSize: "xs",
        },
    },
    {
        key: 2,
        children: "${texts.radioText}",
    },
    {
        key: 3,
        children: "${texts.radioText}",
        customStyles: {
            size: RadioButtonSize.Large,
            textSize: "xl",
        },
    },
]

const [value, setValue,] = useState<string | null>()

const handleChange = (value: number) => {
    setValue(value)
}

<RadioButtonGroup
    selectedValue={value}
    onChange={handleChange}
    name="group-3"
    options={listOption}
/>
`

const radioCodeViewerStrings = {
	state: stateString,
	variants: variantsString,
	sizes: sizesString,
}

export default radioCodeViewerStrings