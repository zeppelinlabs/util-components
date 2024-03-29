/* eslint-disable max-lines-per-function */
import React, { useState } from "react"
import { HeaderStyled } from "./HeaderStyled"
import ZeppelinComponentsLogo from "../../../assets/examples/zeppelin-components.svg"
import { Paths } from "../../Paths"
import { NavLink, useLocation } from "react-router-dom"
import Search from "./Search"
import { useWindowSize } from "../../../hooks/useWindowsSize"
import { size } from "../../../styles/mediaQueries"
import { Sidebar } from "../Sidebar/Sidebar"
import { ReactComponent as GithubIcon } from "../../../assets/examples/github.svg"
import { ReactComponent as FigmaIcon } from "../../../assets/examples/figma.svg"
import Button, { ButtonVariant } from "../../../components/Button/Button"

const pathsIgnoreSearch = [
	Paths.HowItWorksDesign,
	Paths.HowItWorksDevelop,
]

const Header = () => {
	const windowSize = useWindowSize()
	const location = useLocation()

	const [isMenuOpen, setIsMenuOpen,] = useState(false)

	const redirectToGithub = () => {
		window.open(Paths.Github, "_blank")
	}

	const handleOnClickNavigate = () => {
		setIsMenuOpen(false)
		setTimeout(() => { window.scrollTo(0, 0) }, 100)
	}

	const isMobile = windowSize.width < size.desktop

	const redirectToFigma = () => {
		window.open(Paths.Figma, "_blank")
	}

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
					<Search />
					<Button
						type="button"
						onClick={redirectToGithub}
						icon={{
							SVGComponent: GithubIcon,
						}}
						customStyles={{
							buttonVariant: ButtonVariant.Showcase,
						}}
					/>
					<Button
						type="button"
						onClick={redirectToFigma}
						icon={{
							SVGComponent: FigmaIcon,
						}}
						customStyles={{
							buttonVariant: ButtonVariant.Showcase,
						}}
					/>
				</HeaderStyled.ContainerSearchBar>
				<HeaderStyled.ButtonMenu isOpen={isMenuOpen}
					type="button"
					onClick={() => setIsMenuOpen(!isMenuOpen)}
				>
					<HeaderStyled.ButtonLine />
					<HeaderStyled.ButtonLine />
					<HeaderStyled.ButtonLine />
				</HeaderStyled.ButtonMenu>
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