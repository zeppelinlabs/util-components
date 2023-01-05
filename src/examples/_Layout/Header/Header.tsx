/* eslint-disable max-lines-per-function */
import React, { useState } from "react"
import { HeaderStyled } from "./HeaderStyled"
import ZeppelinComponentsLogo from "../../../assets/examples/zeppelin-components.svg"
import { ReactComponent as GithubIcon } from "../../../assets/examples/github.svg"
import Button, { ButtonVariant } from "../../../components/Button/Button"
import Input from "../../../components/Form/Input/Input"
import { Paths } from "../../Paths"
import { NavLink } from "react-router-dom"

const Header = () => {
	const [searchValue, setSearchValue,] = useState<string>("")

	const HandleSearch = () => {
		window.open("https://github.com/zeppelinlabs/util-components/", "_blank")
	}

	return <HeaderStyled.Wrapper>
		<HeaderStyled.Row>
			<NavLink to={Paths.Home}>
				<img src={ZeppelinComponentsLogo} alt="Zeppelin Components" />
			</NavLink>
			<HeaderStyled.Nav>
				<HeaderStyled.NavList>
					<HeaderStyled.NavListItem>
						<HeaderStyled.NavListLink
							to={Paths.Components}
						>
							Components
						</HeaderStyled.NavListLink>
					</HeaderStyled.NavListItem>
					<HeaderStyled.NavListItem>
						<HeaderStyled.NavListAnchor
							href={Paths.AboutUs}
							target="_blank">
							About us
						</HeaderStyled.NavListAnchor>
					</HeaderStyled.NavListItem>
				</HeaderStyled.NavList>
			</HeaderStyled.Nav>

			<HeaderStyled.ContainerSearchBar>
				<Input value={searchValue}
					type="text"
					placeholder="Search components"
					onChange={setSearchValue}
				/>
				<Button
					type="button"
					buttonVariant={ButtonVariant.Primary}
					onClick={HandleSearch}
					icon={{
						SVGComponent: GithubIcon,
					}}
				/>
			</HeaderStyled.ContainerSearchBar>
		</HeaderStyled.Row>
	</HeaderStyled.Wrapper>
}

export default Header