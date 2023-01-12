import React from "react"
import { TextStyled } from "../../../styles/typographic"
import { Paths } from "../../Paths"
import { DetailComponentPageStyled } from "./DetailComponentPageStyled"

type Props = {
	children: React.ReactNode,
}

const DetailComponentPage = (props: Props) => {

	const handleOnClick = () => {
		window.scrollTo(0, 0)
	}

	const ButtonList = () => {
		return <>
			<DetailComponentPageStyled.Link onClick={handleOnClick} to={Paths.Button}>
				Button
			</DetailComponentPageStyled.Link>
			<DetailComponentPageStyled.Link onClick={handleOnClick} to={Paths.Input}>
				Input
			</DetailComponentPageStyled.Link>
			<DetailComponentPageStyled.Link onClick={handleOnClick} to={Paths.Select}>
				Select
			</DetailComponentPageStyled.Link>
			<DetailComponentPageStyled.Link onClick={handleOnClick} to={Paths.Checkbox}>
				Checkbox
			</DetailComponentPageStyled.Link>
			<DetailComponentPageStyled.Link onClick={handleOnClick} to={Paths.RadioButton}>
				Radio
			</DetailComponentPageStyled.Link>
			<DetailComponentPageStyled.Link onClick={handleOnClick} to={Paths.Switch}>
				Switch
			</DetailComponentPageStyled.Link>
			<DetailComponentPageStyled.Link onClick={handleOnClick} to={Paths.Label}>
				Label
			</DetailComponentPageStyled.Link>
			<DetailComponentPageStyled.Link onClick={handleOnClick} to={Paths.Tag}>
				Tag
			</DetailComponentPageStyled.Link>
			<DetailComponentPageStyled.Link onClick={handleOnClick} to={Paths.Tooltip}>
				Tooltip
			</DetailComponentPageStyled.Link>
		</>
	}

	return <DetailComponentPageStyled.Wrapper>
		<DetailComponentPageStyled.Row>
			<DetailComponentPageStyled.ContainerNavigation>
				<DetailComponentPageStyled.Navigation>
					<ButtonList />
				</DetailComponentPageStyled.Navigation>

			</DetailComponentPageStyled.ContainerNavigation>

			<DetailComponentPageStyled.WrapperContent>
				{props.children}
			</DetailComponentPageStyled.WrapperContent>
		</DetailComponentPageStyled.Row>
	</DetailComponentPageStyled.Wrapper>
}
export default DetailComponentPage
type TitleProps = {
	title: string,
	children: React.ReactNode,
}
export const Title = (props: TitleProps) => {
	return <DetailComponentPageStyled.WrapperTitle>
		<TextStyled.Heading3xl textWeight="semibold">
			{props.title}
		</TextStyled.Heading3xl>
		<TextStyled.BodyXl textColor="level400">
			{props.children}
		</TextStyled.BodyXl>
	</DetailComponentPageStyled.WrapperTitle>
}

type DescriptionProps = {
	title: string,
	description?: React.ReactNode,
	componentList?: {
		name: string,
		component: React.ReactNode,
	}[],
	children?: React.ReactNode,
}
export const Description = (props: DescriptionProps) => {
	return <DetailComponentPageStyled.WrapperSubTitle>
		<TextStyled.HeadingXl textWeight="semibold">
			{props.title}
		</TextStyled.HeadingXl>
		{props.description && <TextStyled.BodyBase textColor="level400">
			{props.description}
		</TextStyled.BodyBase>}
		{props.componentList && <DetailComponentPageStyled.StageComponents>
			{props.componentList.map((item, i) => {
				return <DetailComponentPageStyled.ContainComponentAndText key={i}>
					<DetailComponentPageStyled.ContainComponent>
						{item.component}
					</DetailComponentPageStyled.ContainComponent>
					<TextStyled.BodySm textWeight="light" textColor="level500">
						{item.name}
					</TextStyled.BodySm>
				</DetailComponentPageStyled.ContainComponentAndText>
			})}
		</DetailComponentPageStyled.StageComponents>}
	</DetailComponentPageStyled.WrapperSubTitle>
}