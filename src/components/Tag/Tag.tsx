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
	BackgroundColor?: string,
	TextColor?: string,
	TextWeight?: TagTextWeight,
	size?: TagSize,
	isCursorPointer?: boolean,
}

type Props = {
	children: React.ReactNode,
	Icon?: {
		IconSVGComponent: React.FunctionComponent,
		Position?: TagIconPosition,
	}
	customStyles?: CustomStyles,
	onClick?: () => void,
	onClickRemove?: () => void,
}

const Tag = (props: Props) => {

	return <TagStyled.Container
		IconPosition={props.Icon?.Position}
		customStyles={props.customStyles}
		onClick={props.onClick}>
		{props.Icon?.IconSVGComponent
			&& <TagStyled.CustomIconContainer size={props.customStyles?.size}>
				<props.Icon.IconSVGComponent/>
		</TagStyled.CustomIconContainer>}

		{props.children}

		{props.onClickRemove
			&& <TagStyled.CrossIconContainer
				size={props.customStyles?.size}
				onClick={props.onClickRemove}>
			<CrossIcon />
		</TagStyled.CrossIconContainer>}
	</TagStyled.Container>
}

export default Tag