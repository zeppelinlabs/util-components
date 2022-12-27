import React from "react"
import { TagStyled } from "./TagStyled"
import { ReactComponent as CrossIcon } from "../../assets/icons/cross.svg"
import { TextWeightKeys } from "../../styles/themeHelpers"

export enum TagSize {
    Small = "small",
    Medium = "medium",
    Large = "large",
}

export enum TagIconPosition {
    Left = "row",
    Right = "row-reverse",
}

export type CustomStyles = {
    borderColor?: string,
    backgroundColor?: string,
    textColor?: string,
    textWeight?: TextWeightKeys,
    size?: TagSize,
    isCursorPointer?: boolean,
}

type Props = {
    children: React.ReactNode,
    icon?: {
        SVGComponent?: React.FunctionComponent,
        position?: TagIconPosition,
    },
    customStyles?: CustomStyles,
    onClick?: (e: React.MouseEvent<HTMLSpanElement>) => void,
    onClickRemove?: (e: React.MouseEvent<HTMLSpanElement>) => void,
    accessibility?: {
        tabIndex?: number,
    },
}

const Tag = React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => {
    return <TagStyled.Container
        IconPosition={props.icon?.position}
        customStyles={props.customStyles}
        onClick={props.onClick}
        tabIndex={props.accessibility?.tabIndex}
        ref={ref}>
        {props.icon?.SVGComponent
            && <TagStyled.CustomIconContainer size={props.customStyles?.size}>
                <props.icon.SVGComponent />
            </TagStyled.CustomIconContainer>}

        {props.children}

        {props.onClickRemove
            && <TagStyled.CrossIconContainer
                size={props.customStyles?.size}
                onClick={props.onClickRemove}>
                <CrossIcon />
            </TagStyled.CrossIconContainer>}
    </TagStyled.Container>
})

Tag.displayName = "Tag"

export default Tag