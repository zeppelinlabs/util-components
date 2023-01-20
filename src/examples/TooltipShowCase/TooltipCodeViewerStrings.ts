
const typeString = (texts: { tooltipContent: string, label: string, }) => `
import Tooltip, { TooltipVariant } from "components/Tooltip/Tooltip"

<Tooltip tooltipContent={${texts.tooltipContent}}>
	${texts.label}
</Tooltip>

<Tooltip tooltipContent={${texts.tooltipContent}}
    customStyles={{ tooltipVariant: TooltipVariant.Secondary, }}
>
	${texts.label}
</Tooltip>
`

const variantsString = (texts: { tooltipContent: string, label: string, }) => `
import Tooltip, { TooltipPosition, TooltipAlign }
    from "components/Tooltip/Tooltip"

<Tooltip tooltipContent={${texts.tooltipContent}}
    customStyles={{ align: TooltipAlign.Center, }}>
	${texts.label}
</Tooltip>

<Tooltip tooltipContent={${texts.tooltipContent}}
    customStyles={{ align: TooltipAlign.Left, }}>
	${texts.label}
</Tooltip>

<Tooltip tooltipContent={${texts.tooltipContent}}
    customStyles={{ align: TooltipAlign.Right, }}>
	${texts.label}
</Tooltip>

<Tooltip tooltipContent={${texts.tooltipContent}}
    customStyles={{ position: TooltipPosition.Left,}}>
	${texts.label}
</Tooltip>

<Tooltip tooltipContent={${texts.tooltipContent}}
    customStyles={{ position: TooltipPosition.Right,}}>
	${texts.label}
</Tooltip>

<Tooltip tooltipContent={${texts.tooltipContent}}
    customStyles={{ position: TooltipPosition.Bottom,}}>
	${texts.label}
</Tooltip>
`

const sizesString = (texts: { tooltipContent: string, label: string, }) => `
import Tooltip, { TooltipSize } from "components/Tooltip/Tooltip"

<Tooltip tooltipContent={${texts.tooltipContent}}
    customStyles={{
        size: TooltipSize.MaxContent,
    }}>
	${texts.label}
</Tooltip>

<Tooltip tooltipContent={${texts.tooltipContent}}
    customStyles={{
        size: TooltipSize.Small,
        textSize: "xs",
    }}>
	${texts.label}
</Tooltip>

<Tooltip tooltipContent={${texts.tooltipContent}}
    customStyles={{
        size: TooltipSize.Medium,
        textSize: "xl",
    }}>
	${texts.label}
</Tooltip>

<Tooltip tooltipContent={${texts.tooltipContent}}
    customStyles={{
        size: TooltipSize.Large,
        textSize: "2xl",
    }}>
	${texts.label}
</Tooltip>
`

const tooltipCodeViewerStrings = {
	type: typeString,
	variants: variantsString,
	sizes: sizesString,
}

export default tooltipCodeViewerStrings