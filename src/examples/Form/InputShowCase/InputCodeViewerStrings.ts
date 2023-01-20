
const typeString = (texts: { inputText: string, }) => `
import Input from "components/Form/Input/Input"
import InputNumeric from "components/Form/Input/InputNumeric"
import InputPassword from "components/Form/Input/InputPassword"
import InputTextArea from "components/Form/Input/InputTextArea"

<Input value={inputStringState}
    type="text"
    onChange={setInputStringState}
    placeholder={"${texts.inputText}"}
/>

<InputNumeric value={inputAmountState}
    leadingLabel="$"
    onChange={setInputAmountState}
    placeholder={"${texts.inputText}"}
/>

<InputTextArea value={inputStringState}
    onChange={setInputStringState}
    maxLength={100}
    placeholder={"${texts.inputText}"}
/>

<InputPassword value={inputStringState}
    onChange={setInputStringState}
    placeholder={"${texts.inputText}"}
/>
`

const stateString = (texts: { inputText: string, }) => `
import Input from "components/Form/Input/Input"

<Input type="text"
    value={inputStringState}
    onChange={setInputStringState}
    placeholder={"${texts.inputText}"}
/>

<Input type="text"
    value={inputStringStateFilled!}
    onChange={setInputStringStateFilled}
    placeholder={"${texts.inputText}"}
/>

<Input type="text"
    value={inputStringState}
    placeholder={"${texts.inputText}"}
    disabled
/>

<Input type="text"
    value={inputStringState}
    onChange={setInputStringState}
    placeholder={"${texts.inputText}"}
    errorMessage={inputStringState ? undefined : "Cannot be empty"}
/>

<Input type="text"
    value={inputStringState}
    isLoading
/>
`

const variantsString = (texts: { inputText: string, }) => `
import Input from "components/Form/Input/Input"
import { IconPosition } from "components/CommonTypes"
import { ReactComponent as CircleIcon } from "assets/icons/circle.svg"

<Input type="text"
    value={inputStringState}
    onChange={setInputStringState}
    icon={{
        SVGComponent: CircleIcon,
        position: IconPosition.right,
    }}
    placeholder={"${texts.inputText}"}
/>
`

const sizesString = (texts: { inputText: string, }) => `
import Input from "components/Form/Input/Input"
import { InputSize } from "components/Form/Input/InputCommon"

<Input type="text"
    value={inputStringState}
    onChange={setInputStringState}
    customStyles={{ size: InputSize.Small, }}
    placeholder={"${texts.inputText}"}
/>

<Input type="text"
    value={inputStringState}
    onChange={setInputStringState}
    customStyles={{ size: InputSize.Medium, }}
    placeholder={"${texts.inputText}"}
/>

<Input type="text"
    value={inputStringState}
    onChange={setInputStringState}
    customStyles={{ size: InputSize.Large, }}
    placeholder={"${texts.inputText}"}
/>

<Input type="text"
    value={inputStringState}
    onChange={setInputStringState}
    customStyles={{ size: InputSize.Xlarge, }}
    placeholder={"${texts.inputText}"}
/>
`

const inputCodeViewerStrings = {
	type: typeString,
	state: stateString,
	variants: variantsString,
	sizes: sizesString,
}

export default inputCodeViewerStrings