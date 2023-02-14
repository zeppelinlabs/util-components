/* eslint-disable max-lines-per-function */
import React, { useState } from "react"
import { HeaderStyled } from "./HeaderStyled"
import ZeppelinComponentsLogo from "../../../assets/examples/zeppelin-components.svg"
import { ReactComponent as GithubIcon } from "../../../assets/examples/github.svg"
import Button from "../../../components/Button/Button"
import { Paths } from "../../Paths"
import { NavLink, useLocation } from "react-router-dom"
import Search from "./Search"
import { useWindowSize } from "../../../hooks/useWindowsSize"
import { size } from "../../../styles/mediaQueries"
import { Sidebar } from "../Sidebar/Sidebar"

const pathsIgnoreSearch = [
	Paths.HowItWorksDesign,
	Paths.HowItWorksDevelop,
]

const Header = () => {
	const windowSize = useWindowSize()
	const location = useLocation()

	const [isMenuOpen, setIsMenuOpen,] = useState(false)

	const HandleSearch = () => {
		window.open(Paths.Github, "_blank")
	}

	const handleOnClickNavigate = () => {
		setIsMenuOpen(false)
		setTimeout(() => { window.scrollTo(0, 0) }, 100)
	}

	const isMobile = windowSize.width < size.desktop

	return <>
		<HeaderStyled.Wrapper>
			<HeaderStyled.Row>
				<NavLink
					onClick={handleOnClickNavigate}
					to={Paths.Home}
				>
					<img src={ZeppelinComponentsLogo} alt="Zeppelin Components" />
				</NavLink>
				<HeaderStyled.Nav>
					<HeaderStyled.NavList>
						<HeaderStyled.NavListItem>
							<HeaderStyled.NavListLink
								to={Paths.Components}
								onClick={handleOnClickNavigate}
							>
								Components
							</HeaderStyled.NavListLink>
						</HeaderStyled.NavListItem>
						<HeaderStyled.NavListItem>
							<HeaderStyled.NavListLink
								to={Paths.HowItWorks}
								onClick={handleOnClickNavigate}
							>
								How it works
							</HeaderStyled.NavListLink>
						</HeaderStyled.NavListItem>
						<HeaderStyled.NavListItem>
							<HeaderStyled.NavListAnchor
								href={Paths.AboutUs}
								target="_blank"
							>
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
		{isMobile
			&& <>
				{!pathsIgnoreSearch.includes(location.pathname)
					&& <Search />}
				<Sidebar isOpen={isMenuOpen} onNavigate={handleOnClickNavigate} />
			</>}
	</>
}

export default Header