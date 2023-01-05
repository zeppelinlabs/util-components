import React from "react"
import { Paths } from "../../Paths"
import { DetailComponentPageStyled } from "./DetailComponentPageStyled"

type Props = {
	children: React.ReactNode,
}

const DetailComponentPage = (props: Props) => {

	const ButtonList = () => {
		return <>
			<DetailComponentPageStyled.Link to={Paths.Button}>
				Button
			</DetailComponentPageStyled.Link>
			<DetailComponentPageStyled.Link to={Paths.Input}>
				Input
			</DetailComponentPageStyled.Link>
			<DetailComponentPageStyled.Link to={Paths.Select}>
				Select
			</DetailComponentPageStyled.Link>
			<DetailComponentPageStyled.Link to={Paths.Checkbox}>
				Checkbox
			</DetailComponentPageStyled.Link>
			<DetailComponentPageStyled.Link to={Paths.RadioButton}>
				Radio
			</DetailComponentPageStyled.Link>
			<DetailComponentPageStyled.Link to={Paths.Switch}>
				Switch
			</DetailComponentPageStyled.Link>
			<DetailComponentPageStyled.Link to={Paths.Label}>
				Label
			</DetailComponentPageStyled.Link>
			<DetailComponentPageStyled.Link to={Paths.Tag}>
				Tag
			</DetailComponentPageStyled.Link>
			<DetailComponentPageStyled.Link to={Paths.Tooltip}>
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