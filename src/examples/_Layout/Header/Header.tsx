/* eslint-disable max-lines-per-function */
import React, { useState } from "react"
import { HeaderStyled } from "./HeaderStyled"
import ZeppelinComponentsLogo from "../../../assets/examples/zeppelin-components.svg"
import { ReactComponent as GithubIcon } from "../../../assets/examples/github.svg"
import Button from "../../../components/Button/Button"
import { Paths } from "../../Paths"
import { NavLink } from "react-router-dom"
import Search from "./Search"
import { useWindowSize } from "../../../hooks/useWindowsSize"
import { size } from "../../../styles/mediaQueries"

const Header = () => {
	const windowSize = useWindowSize()

	const [isMenuOpen, setIsMenuOpen,] = useState(false)

	const HandleSearch = () => {
		window.open(Paths.Github, "_blank")
	}

	return <>
		<HeaderStyled.Wrapper>
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
					{windowSize.width >= size.desktop && <Search />}
					<Button
						type="button"
						onClick={HandleSearch}
						icon={{
							SVGComponent: GithubIcon,
						}}
					/>
					<HeaderStyled.ButtonMenu isOpen={isMenuOpen}
						type="button"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						<HeaderStyled.ButtonLine />
						<HeaderStyled.ButtonLine />
						<HeaderStyled.ButtonLine />
					</HeaderStyled.ButtonMenu>
				</HeaderStyled.ContainerSearchBar>

			</HeaderStyled.Row>
		</HeaderStyled.Wrapper>
		{windowSize.width < size.desktop && <Search />}
	</>
}

export default Header