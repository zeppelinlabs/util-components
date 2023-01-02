import React from "react"
import Tag, { TagSize, TagIconPosition, TagVariant } from "../../components/Tag/Tag"
import LayoutExamples from "../../styles/Layout/LayoutExamples/LayoutExamples"
import { ReactComponent as EmailIcon } from "../../assets/email_icon.svg"

const TagShowCaseDetail = () => {
    // eslint-disable-next-line no-alert
    const handleOnClick = () => alert("Remove")

    return <LayoutExamples>
        <Tag icon={{ SVGComponent: EmailIcon, }} >
            Small
        </Tag>
        <Tag icon={{ SVGComponent: EmailIcon, }}
            customStyles={{ size: TagSize.Base, variant: TagVariant.Secondary, }} >
            Medium
        </Tag>
        <Tag icon={{ SVGComponent: EmailIcon, }}
            customStyles={{ size: TagSize.Large, }}>
            Large
        </Tag>
        <Tag onClickRemove={handleOnClick}
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
            customStyles={{ textWeight: "bold", }} >
            With text bold
        </Tag>
        <Tag onClickRemove={handleOnClick}>
            Only remove action
        </Tag>
        <Tag icon={{ SVGComponent: EmailIcon, }}
            customStyles={{
                borderColor: "red",
                backgroundColor: "#BAF7D9",
                textColor: "#008542",
                size: TagSize.Large,
            }} >
            With custom colors
        </Tag>
        <Tag onClick={handleOnClick} customStyles={{ isCursorPointer: true, }}>
            With onClick event
        </Tag>
    </LayoutExamples>
}

export default TagShowCaseDetail