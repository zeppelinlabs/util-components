import React from "react"
import { TagStyled } from "./TagStyled"
import { ReactComponent as CrossIcon} from "../../assets/icons/cross.svg"

export enum TagSize {
    Small = "small",
    Medium = "medium",
    Large = "large",
}

export enum TagIconPosition {
    Left = "row",
    Right = "row-reverse",
}

export enum TagTextWeight {
    Light = "100",
    Bold = "800",
}

export type CustomStyles = {
    borderColor?: string,
    backgroundColor?: string,
    textColor?: string,
    textWeight?: TagTextWeight,
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
}

const Tag = React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => {
    return <TagStyled.Container
        IconPosition={props.icon?.position}
        customStyles={props.customStyles}
        onClick={props.onClick}
        ref={ref}>
        {props.icon?.SVGComponent
            && <TagStyled.CustomIconContainer size={props.customStyles?.size}>
                <props.icon.SVGComponent/>
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