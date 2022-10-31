import React from "react"
import Tag, { TagSize, TagIconPosition, TagTextWeight } from "../../components/Tag/Tag"
import LayoutExamples from "../../styles/Layout/LayoutExamples/LayoutExamples"
import { ReactComponent as EmailIcon } from "../../assets/email_icon.svg"

const TagShowCaseDetail = () => {
    return <LayoutExamples>
        <Tag icon={{ SVGComponent: EmailIcon, }} >
            Small
        </Tag>
        <Tag icon={{ SVGComponent: EmailIcon, }}
            customStyles={{ size: TagSize.Medium, }} >
            Medium
        </Tag>
        <Tag icon={{ SVGComponent: EmailIcon, }}
            customStyles={{ size: TagSize.Large, }}>
            Large
        </Tag>
        <Tag onClickRemove={() => {alert("Click")}}
            icon={{ SVGComponent: EmailIcon, }} >
            With close action
        </Tag>
        <Tag icon={{ SVGComponent: EmailIcon, position: TagIconPosition.Right, }} >
            With icon align to right
        </Tag>
        <Tag icon={{ SVGComponent: EmailIcon, }}
            customStyles={{ isCursorPointer: true, }} >
            With cursor pointer
        </Tag>
        <Tag>
            Without icons
        </Tag>
        <Tag icon={{ SVGComponent: EmailIcon, }}
            customStyles={{ textWeight: TagTextWeight.Bold, }} >
            With text bold
        </Tag>
        <Tag onClickRemove={() => {alert("Remove")}}>
            Only remove action
        </Tag>
        <Tag icon={{ SVGComponent: EmailIcon, }}
            customStyles={{
                borderColor: "#004221",
                backgroundColor: "#BAF7D9",
                textColor: "#008542",
                size: TagSize.Large,
            }} >
            With custom colors
        </Tag>
    </LayoutExamples>
}

export default TagShowCaseDetail