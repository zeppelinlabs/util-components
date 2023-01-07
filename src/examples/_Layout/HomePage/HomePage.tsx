/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
import React from "react"
import { HomePageStyled } from "./HomePageStyled"
import { TextStyled } from "../../../styles/typographic"
import Button, { ButtonSize, ButtonVariant } from "../../../components/Button/Button"
import { useNavigate } from "react-router-dom"
import { Paths } from "../../Paths"

type Props = {
	children: React.ReactNode,
}

const HomePage = (props: Props) => {
	const navigate = useNavigate()

	const redirectToComponents = () => {
		return navigate(Paths.Components)
	}

	const redirectToFigma = () => {
		return window.open(Paths.Figma, "_blank")
	}

	return <>
		<HomePageStyled.Layout>
			<HomePageStyled.Row>
				<HomePageStyled.WrapperContent centerContent>
					<HomePageStyled.HeroContainer>
						<TextStyled.Heading7xl textWeight="medium">
							Design and build
						</TextStyled.Heading7xl>
						<TextStyled.Heading3xl>
							with Zeppelin Components
						</TextStyled.Heading3xl>
					</HomePageStyled.HeroContainer>

					<HomePageStyled.HeroContainer>
						<TextStyled.Heading2xl textColor="level300">
							UI tools to create whatever you want. Use our library full of production-ready components, or customize it as you need!						</TextStyled.Heading2xl>
					</HomePageStyled.HeroContainer>

					<HomePageStyled.AlignContentCenter>
						<Button
							type="button"
							onClick={redirectToComponents}
							buttonSize={ButtonSize.XLarge}
						>
							Get started!
						</Button>
						<Button
							type="button"
							customStyles={{ buttonVariant: ButtonVariant.Secondary, }}
							onClick={redirectToFigma}
							buttonSize={ButtonSize.XLarge}
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
					<TextStyled.Heading5xl textWeight={"light"}>
						<TextStyled.Weight textWeight="semibold">
							Why use a</TextStyled.Weight> <br />Design System
						<TextStyled.Weight textWeight="semibold">?</TextStyled.Weight>
					</TextStyled.Heading5xl>

					<HomePageStyled.Grid>
						<HomePageStyled.AnswerColumn>
							<TextStyled.HeadingXl textWeight="medium">
								Customizable
							</TextStyled.HeadingXl>
							<TextStyled.BodyBase>
								You can change colors, fonts, sizes, or whatever you want! Have full control over how they look and behave.
							</TextStyled.BodyBase>
						</HomePageStyled.AnswerColumn>
						<HomePageStyled.AnswerColumn>
							<TextStyled.HeadingXl textWeight="medium">
								Easy to use
							</TextStyled.HeadingXl>
							<TextStyled.BodyBase>
								Ready to copy and paste, just adjust the styles as you want or need.
							</TextStyled.BodyBase>
						</HomePageStyled.AnswerColumn>
						<HomePageStyled.AnswerColumn>
							<TextStyled.HeadingXl textWeight="medium">
								Figma file
							</TextStyled.HeadingXl>
							<TextStyled.BodyBase>
								Full Figma design source, a file you could use to prototype or experiment.
							</TextStyled.BodyBase>
						</HomePageStyled.AnswerColumn>
						<HomePageStyled.AnswerColumn>
							<TextStyled.HeadingXl textWeight="medium">
								Ready to use
							</TextStyled.HeadingXl>
							<TextStyled.BodyBase>
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
					<TextStyled.Heading5xl textWeight={"light"} hasDotEnd>
						<TextStyled.Weight textWeight="semibold">
							Essential components <br />
						</TextStyled.Weight>
						and much more
					</TextStyled.Heading5xl>
					<HomePageStyled.Grid withoutGap>
						{props.children}
					</HomePageStyled.Grid>
					<HomePageStyled.AlignContentCenter>
						<Button
							type="button"
							onClick={redirectToComponents}
							buttonSize={ButtonSize.XLarge}
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