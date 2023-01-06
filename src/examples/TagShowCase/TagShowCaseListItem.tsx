/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react"
import { ReactComponent as CircleIcon } from "../../assets/icons/circle.svg"
import Tag, { TagSize } from "../../components/Tag/Tag"
import { toastNotification } from "../../util/toastNotification"

const TagShowCaseDetailListItem = () => {
    return <Tag icon={{ SVGComponent: CircleIcon, }}
        customStyles={{ size: TagSize.Base, }}
        onClickRemove={() => toastNotification("Fantastic! A button click remove has occurred!")}
    >
        Tag Base
    </Tag>
}

export default TagShowCaseDetailListItem