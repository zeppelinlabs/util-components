/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
import React from "react"
import { HomePageStyled } from "./HomePageStyled"
import { TextStyled } from "../../../styles/typographic"
import Button, { ButtonSize, ButtonVariant } from "../../../components/Button/Button"
import { useNavigate } from "react-router-dom"
import { Paths } from "../../Paths"
import { useWindowSize } from "../../../hooks/useWindowsSize"
import { size } from "../../../styles/mediaQueries"
import { ReactComponent as GithubIcon } from "../../../assets/examples/github.svg"
import { ReactComponent as FigmaIcon } from "../../../assets/examples/figma.svg"

type Props = {
	children: React.ReactNode,
}

const HomePage = (props: Props) => {
	const windowSize = useWindowSize()
	const navigate = useNavigate()

	const redirectToComponents = () => {
		return navigate(Paths.Components)
	}

	const redirectToGithub = () => {
		return window.open(Paths.Github, "_blank")
	}

	const redirectToFigma = () => {
		return window.open(Paths.Figma, "_blank")
	}

	return <>
		<HomePageStyled.Layout isMainBanner>
			<HomePageStyled.Row>
				<HomePageStyled.WrapperContent centerContent>
					<HomePageStyled.HeroContainer isBigTitle>
						<TextStyled.Heading5xl textWeight="medium">
							Simple and fast fully customizable components
						</TextStyled.Heading5xl>
					</HomePageStyled.HeroContainer>

					<HomePageStyled.HeroContainer>
						<TextStyled.Heading2xl textColor="level400">
							UI tools to create whatever you want. Use our library full of production-ready components, or customize it as you need!
						</TextStyled.Heading2xl>
					</HomePageStyled.HeroContainer>

					<HomePageStyled.AlignContentCenter>
						<Button
							type="button"
							onClick={redirectToGithub}
							buttonSize={windowSize.width >= size.desktop ? ButtonSize.XLarge : ButtonSize.Base}
							icon={{
								SVGComponent: GithubIcon,
							}}
							customStyles={{
								buttonVariant: ButtonVariant.Showcase,
							}}
						>
							Github
						</Button>
						<Button
							type="button"
							customStyles={{ buttonVariant: ButtonVariant.Secondary, }}
							onClick={redirectToFigma}
							buttonSize={windowSize.width >= size.desktop ? ButtonSize.XLarge : ButtonSize.Base}
							icon={{
								SVGComponent: FigmaIcon,
							}}
						>
							Figma File
						</Button>
					</HomePageStyled.AlignContentCenter>
				</HomePageStyled.WrapperContent>
			</HomePageStyled.Row>
		</HomePageStyled.Layout>

		<HomePageStyled.Layout isDarkMode>
			<HomePageStyled.Row>
				<HomePageStyled.WrapperContent>
					<HomePageStyled.Grid>
						<HomePageStyled.AnswerColumn>
							<TextStyled.HeadingXl textWeight="medium">
								Customizable
							</TextStyled.HeadingXl>
							<TextStyled.BodyBase textWeight="light">
								You can change colors, fonts, sizes, or whatever you want! Have full control over how they look and behave.
							</TextStyled.BodyBase>
						</HomePageStyled.AnswerColumn>
						<HomePageStyled.AnswerColumn>
							<TextStyled.HeadingXl textWeight="medium">
								Easy to use
							</TextStyled.HeadingXl>
							<TextStyled.BodyBase textWeight="light">
								Ready to copy and paste, just adjust the styles as you want or need.
							</TextStyled.BodyBase>
						</HomePageStyled.AnswerColumn>
						<HomePageStyled.AnswerColumn>
							<TextStyled.HeadingXl textWeight="medium">
								Figma file
							</TextStyled.HeadingXl>
							<TextStyled.BodyBase textWeight="light">
								Full Figma design source, a file you could use to prototype or experiment.
							</TextStyled.BodyBase>
						</HomePageStyled.AnswerColumn>
						<HomePageStyled.AnswerColumn>
							<TextStyled.HeadingXl textWeight="medium">
								Ready to use
							</TextStyled.HeadingXl>
							<TextStyled.BodyBase textWeight="light">
								Our library is designed and coded, every component you use is ready for production.
							</TextStyled.BodyBase>
						</HomePageStyled.AnswerColumn>
					</HomePageStyled.Grid>
				</HomePageStyled.WrapperContent>
			</HomePageStyled.Row>
		</HomePageStyled.Layout>

		<HomePageStyled.Layout>
			<HomePageStyled.Row>
				<HomePageStyled.WrapperContent>
					<TextStyled.Heading4xl textWeight={"light"} hasDotEnd>
						<TextStyled.Weight textWeight="semibold">
							Essential components <br />
						</TextStyled.Weight>
						and much more
					</TextStyled.Heading4xl>
					<HomePageStyled.ComponentsGrid>
						{props.children}
					</HomePageStyled.ComponentsGrid>
					<HomePageStyled.AlignContentCenter>
						<Button
							type="button"
							onClick={redirectToComponents}
							buttonSize={windowSize.width >= size.desktop ? ButtonSize.XLarge : ButtonSize.Base}
							customStyles={{
								buttonVariant: ButtonVariant.Showcase,
							}}
						>
							All components
						</Button>
					</HomePageStyled.AlignContentCenter>
				</HomePageStyled.WrapperContent>
			</HomePageStyled.Row>
		</HomePageStyled.Layout>
	</>
}

export default HomePage