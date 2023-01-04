import React from "react"
import { Paths } from "../../Paths"
import { LayoutDescriptionComponentStyled } from "./LayoutDescriptionComponentStyled"

type Props = {
	children: React.ReactNode,
}

const LayoutDescriptionComponent = (props: Props) => {

	const ButtonList = () => {
		return <>
			<LayoutDescriptionComponentStyled.Link to={Paths.Tag}>
				Tag
			</LayoutDescriptionComponentStyled.Link>
			<LayoutDescriptionComponentStyled.Link to={Paths.Tooltip}>
				Tooltip
			</LayoutDescriptionComponentStyled.Link>
			<LayoutDescriptionComponentStyled.Link to={Paths.Button}>
				Button
			</LayoutDescriptionComponentStyled.Link>
			<LayoutDescriptionComponentStyled.Link to={Paths.Input}>
				Input
			</LayoutDescriptionComponentStyled.Link>
			<LayoutDescriptionComponentStyled.Link to={Paths.Select}>
				Select
			</LayoutDescriptionComponentStyled.Link>
			<LayoutDescriptionComponentStyled.Link to={Paths.Checkbox}>
				Checkbox
			</LayoutDescriptionComponentStyled.Link>
			<LayoutDescriptionComponentStyled.Link to={Paths.RadioButton}>
				Radio
			</LayoutDescriptionComponentStyled.Link>
			<LayoutDescriptionComponentStyled.Link to={Paths.Switch}>
				Switch
			</LayoutDescriptionComponentStyled.Link>
			<LayoutDescriptionComponentStyled.Link to={Paths.Label}>
				Label
			</LayoutDescriptionComponentStyled.Link>
		</>
	}

	return <LayoutDescriptionComponentStyled.Wrapper>
		<LayoutDescriptionComponentStyled.Row>
			<LayoutDescriptionComponentStyled.ContainerNavigation>
				<LayoutDescriptionComponentStyled.Navigation>
					<ButtonList />
				</LayoutDescriptionComponentStyled.Navigation>

			</LayoutDescriptionComponentStyled.ContainerNavigation>

			<LayoutDescriptionComponentStyled.WrapperContent>
				{props.children}
			</LayoutDescriptionComponentStyled.WrapperContent>
		</LayoutDescriptionComponentStyled.Row>
	</LayoutDescriptionComponentStyled.Wrapper>
}
export default LayoutDescriptionComponent