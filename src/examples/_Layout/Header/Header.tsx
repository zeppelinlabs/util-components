/* eslint-disable max-lines-per-function */
import React from "react"
import { HeaderStyled } from "./HeaderStyled"
import ZeppelinComponentsLogo from "../../../assets/examples/zeppelin-components.svg"
import { ReactComponent as GithubIcon } from "../../../assets/examples/github.svg"
import Button from "../../../components/Button/Button"
import { Paths } from "../../Paths"
import { NavLink } from "react-router-dom"
import Search from "./Search"

const Header = () => {

	const HandleSearch = () => {
		window.open(Paths.Github, "_blank")
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
							href={Paths.Github}
							target="_blank"
						>
							How it works
						</HeaderStyled.NavListAnchor>
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
				<Search />
				<Button
					type="button"
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