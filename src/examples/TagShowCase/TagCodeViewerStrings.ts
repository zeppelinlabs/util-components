
const typeString = (texts: { tagText: string, }) => `
import Tag, { TagVariant } from "components/Tag/Tag"

<Tag>
	${texts.tagText}
</Tag>

<Tag customStyles={{ variant: TagVariant.Secondary, }}>
	${texts.tagText}
</Tag>
`

const stateString = (texts: { tagText: string, }) => `
import Tag from "components/Tag/Tag"

<Tag onClickRemove={handleOnClick}>
	${texts.tagText}
</Tag>

<Tag onClickRemove={handleOnClick} isDisabled>
	${texts.tagText}
</Tag>
`

const variantsString = (texts: { tagText: string, }) => `
import Tag, { TagIconPosition, } from "components/Tag/Tag"
import { ReactComponent as CircleIcon } from "assets/icons/circle.svg"

<Tag>
	${texts.tagText}
</Tag>

<Tag icon={{SVGCircleIcon,}}>
	${texts.tagText}
</Tag>

<Tag icon={{
    SVGCircleIcon,
    position:TagIconPosition.Right,
}}>
	${texts.tagText}
</Tag>

<Tag onClickRemove={handleOnClick}>
	${texts.tagText}
</Tag>

<Tag onClickRemove={handleOnClick}
    icon={{SVGCircleIcon,}}>
	${texts.tagText}
</Tag>
`

const sizesString = (texts: { tagText: string, }) => `
import Tag, { TagSize, } from "components/Tag/Tag"

<Tag onClickRemove={handleOnClick}
    customStyles={{ size: TagSize.Small, }}
    icon={{SVGComponent: CircleIcon,}}>
	${texts.tagText}
</Tag>

<Tag onClickRemove={handleOnClick}
    customStyles={{ size: TagSize.Base, }}
    icon={{SVGComponent: CircleIcon,}}>
	${texts.tagText}
</Tag>

<Tag onClickRemove={handleOnClick}
    customStyles={{ size: TagSize.Large, }}
    icon={{SVGComponent: CircleIcon,}}>
	${texts.tagText}
</Tag>
`

const tagCodeViewerStrings = {
	type: typeString,
	state: stateString,
	variants: variantsString,
	sizes: sizesString,
}

export default tagCodeViewerStrings