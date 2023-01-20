
const typeString = `
import Select, { SelectOption } from "components/Form/Select/Select"
import { ReactComponent as CircleIcon } from "assets/icons/circle.svg"

const listOption: SelectOption<string>[] = [
    {
        key: "1",
        text: "Option 1",
    },
    {
        key: "2",
        text: "Option 2",
    },
]

const [value, setValue,] = useState<SelectOption<string>>()

<Select options={listOption}
    selectedValue={value.key}
    onChange={handleChange}
/>

<Select options={listOption}
    selectedValue={value.key}
    onChange={handleChange}
    icon={CircleIcon}
/>
`

const variantsString = `
import Select, { SelectOption } from "components/Form/Select/Select"

const listOption: SelectOption<string>[] = [
    {
        key: "1",
        text: "Option 1",
    },
    {
        key: "2",
        text: "Option 2",
    },
]

const [value, setValue,] = useState<SelectOption<string>>()

<Select
    options={listOption}
    selectedValue={value.key}
    onChange={handleChange}
    errorMessage={"Error message"}
/>

<Select
    options={listOption}
    selectedValue={value.key}
    onChange={handleChange}
    disabled={true}
/>

<Select
    options={listOption}
    selectedValue={value.key}
    onChange={handleChange}
    isLoading={true}
/>
`

const selectCodeViewerStrings = {
	type: typeString,
	variants: variantsString,
}

export default selectCodeViewerStrings