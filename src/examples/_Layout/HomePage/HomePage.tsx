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

type Props = {
	children: React.ReactNode,
}

const HomePage = (props: Props) => {
	const windowSize = useWindowSize()
	const navigate = useNavigate()

	const redirectToComponents = () => {
		return navigate(Paths.Components)
	}

	const redirectToFigma = () => {
		return window.open(Paths.Figma, "_blank")
	}

	return <>
		<HomePageStyled.Layout isMainBanner>
			<HomePageStyled.Row>
				<HomePageStyled.WrapperContent centerContent>
					<HomePageStyled.HeroContainer isBigTitle>
						<HomePageStyled.Title>
							Simple and fast fully customizable components
						</HomePageStyled.Title>
					</HomePageStyled.HeroContainer>

					<HomePageStyled.HeroContainer>
						<HomePageStyled.Text>
							UI tools to create whatever you want. Use our library full of production-ready components, or customize it as you need!
						</HomePageStyled.Text>
					</HomePageStyled.HeroContainer>

					<HomePageStyled.AlignContentCenter>
						<Button
							type="button"
							onClick={redirectToComponents}
							buttonSize={windowSize.width >= size.desktop ? ButtonSize.XLarge : ButtonSize.Base}
						>
							Get started!
						</Button>
						<Button
							type="button"
							customStyles={{ buttonVariant: ButtonVariant.Secondary, }}
							onClick={redirectToFigma}
							buttonSize={windowSize.width >= size.desktop ? ButtonSize.XLarge : ButtonSize.Base}
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
							<HomePageStyled.Subtitle>
								Customizable
							</HomePageStyled.Subtitle>
							<HomePageStyled.Paragraph>
								You can change colors, fonts, sizes, or whatever you want! Have full control over how they look and behave.
							</HomePageStyled.Paragraph>
						</HomePageStyled.AnswerColumn>
						<HomePageStyled.AnswerColumn>
							<HomePageStyled.Subtitle>
								Easy to use
							</HomePageStyled.Subtitle>
							<HomePageStyled.Paragraph>
								Ready to copy and paste, just adjust the styles as you want or need.
							</HomePageStyled.Paragraph>
						</HomePageStyled.AnswerColumn>
						<HomePageStyled.AnswerColumn>
							<HomePageStyled.Subtitle>
								Figma file
							</HomePageStyled.Subtitle>
							<HomePageStyled.Paragraph>
								Full Figma design source, a file you could use to prototype or experiment.
							</HomePageStyled.Paragraph>
						</HomePageStyled.AnswerColumn>
						<HomePageStyled.AnswerColumn>
							<HomePageStyled.Subtitle>
								Ready to use
							</HomePageStyled.Subtitle>
							<HomePageStyled.Paragraph>
								Our library is designed and coded, every component you use is ready for production.
							</HomePageStyled.Paragraph>
						</HomePageStyled.AnswerColumn>
					</HomePageStyled.Grid>
				</HomePageStyled.WrapperContent>
			</HomePageStyled.Row>
		</HomePageStyled.Layout>

		<HomePageStyled.Layout>
			<HomePageStyled.Row>
				<HomePageStyled.WrapperContent>
					<HomePageStyled.ExtraTitle hasDotEnd>
						<TextStyled.Weight textWeight="semibold">
							Essential components <br />
						</TextStyled.Weight>
						and much more
					</HomePageStyled.ExtraTitle>
					<HomePageStyled.ComponentsGrid>
						{props.children}
					</HomePageStyled.ComponentsGrid>
					<HomePageStyled.AlignContentCenter>
						<Button
							type="button"
							onClick={redirectToComponents}
							buttonSize={windowSize.width >= size.desktop ? ButtonSize.XLarge : ButtonSize.Base}
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