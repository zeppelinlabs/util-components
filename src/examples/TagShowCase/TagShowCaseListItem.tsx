import React from "react"
import { ReactComponent as EmailIcon } from "../../assets/email_icon.svg"
import Tag, { TagSize } from "../../components/Tag/Tag"

const TagShowCaseDetailListItem = () => {
    return <Tag icon={{ SVGComponent: EmailIcon, }}
        customStyles={{ size: TagSize.Medium, }} >
        Medium
    </Tag>
}

export default TagShowCaseDetailListItem