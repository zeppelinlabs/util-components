
const typeString = (texts: { buttonText: string, }) => `
import Button, { ButtonVariant, } from "components/Button/Button"

<Button type='button'
	onClick={(handleOnClick)}>
	${texts.buttonText}
</Button>

<Button type='button'
	onClick={handleOnClick}
	customStyles={{ buttonVariant: ButtonVariant.Secondary, }}>
	${texts.buttonText}
</Button>

<Button type='button'
	onClick={handleOnClick}
	customStyles={{ buttonVariant: ButtonVariant.Danger, }}>
	${texts.buttonText}
</Button>
`

const stateString = (texts: { buttonText: string, }) => `
import Button from "components/Button/Button"

<Button type="button"
	onClick={handleOnClick}>
	${texts.buttonText}
</Button>

<Button type="button"
	onClick={handleOnClick}
	disabled={true}>
	${texts.buttonText}
</Button>

<Button type="button"
	onClick={handleOnClick}
	isLoading={true}>
	${texts.buttonText}
</Button>
`

const variantsString = (texts: { buttonText: string, }) => `
import Button, { ButtonPosition, } from "components/Button/Button"
import { ReactComponent as CircleIcon } from "assets/icons/circle.svg"

<Button type="button"
	onClick={handleOnClick}>
	${texts.buttonText}
</Button>

<Button type="button"
	onClick={handleOnClick}
	icon={{ SVGComponent: CircleIcon, }}>
	${texts.buttonText}
</Button>

<Button type="button"
	onClick={handleOnClick}
	icon={{
		SVGComponent: CircleIcon,
		position: ButtonIconPosition.Right,
	}}>
	${texts.buttonText}
</Button>

<Button type="button"
	onClick={handleOnClick}
	icon={{
		SVGComponent: CircleIcon,
	}}
/>
`

const sizesString = (texts: { buttonText: string, }) => `
import Button, { ButtonSize, } from "components/Button/Button"

<Button type="button"
	onClick={handleOnClick}
	buttonSize={ButtonSize.Small}>
	${texts.buttonText}
</Button>

<Button type="button"
	onClick={handleOnClick}
	buttonSize={ButtonSize.Base}>
	${texts.buttonText}
</Button>

<Button type="button"
	onClick={handleOnClick}
	buttonSize={ButtonSize.Large}>
	${texts.buttonText}
</Button>

<Button type="button"
	onClick={handleOnClick}
	buttonSize={ButtonSize.XLarge}>
	${texts.buttonText}
</Button>
`

const ButtonCodeViewerStrings = {
	type: typeString,
	state: stateString,
	variants: variantsString,
	sizes: sizesString,
}

export default ButtonCodeViewerStrings