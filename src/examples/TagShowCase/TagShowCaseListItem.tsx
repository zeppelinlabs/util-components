/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react"
import { ReactComponent as EmailIcon } from "../../assets/email_icon.svg"
import Tag, { TagSize } from "../../components/Tag/Tag"

const TagShowCaseDetailListItem = () => {
    return <Tag icon={{ SVGComponent: EmailIcon, }}
        customStyles={{ size: TagSize.Base, }}
        onClickRemove={() => { }}
    >
        Medium
    </Tag>
}

export default TagShowCaseDetailListItem