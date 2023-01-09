import React from "react"
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