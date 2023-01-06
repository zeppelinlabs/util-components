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
							Aca un texto explicativo sobre el tema.Aca un texto explicativo sobre el tema. Aca un texto explicativo sobre el tema.Aca un texto explicativo sobre el tema. Aca un texto explicativo sobre el tema.
						</TextStyled.Heading2xl>
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
							onClick={redirectToComponents}
							buttonSize={ButtonSize.XLarge}
						>
							How it works
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
								Title 1
							</TextStyled.HeadingXl>
							<TextStyled.BodyBase>
								Aca un texto explicativo sobre el tema.Aca un texto explicativo sobre el tema. Aca un texto explicativo sobre el tema.Aca un texto explicativo sobre el tema.
							</TextStyled.BodyBase>
						</HomePageStyled.AnswerColumn>
						<HomePageStyled.AnswerColumn>
							<TextStyled.HeadingXl textWeight="medium">
								Title 2
							</TextStyled.HeadingXl>
							<TextStyled.BodyBase>
								Aca un texto explicativo sobre el tema.Aca un texto explicativo sobre el tema. Aca un texto explicativo sobre el tema.Aca un texto explicativo sobre el tema.
							</TextStyled.BodyBase>
						</HomePageStyled.AnswerColumn>
						<HomePageStyled.AnswerColumn>
							<TextStyled.HeadingXl textWeight="medium">
								Title 3
							</TextStyled.HeadingXl>
							<TextStyled.BodyBase>
								Aca un texto explicativo sobre el tema.Aca un texto explicativo sobre el tema. Aca un texto explicativo sobre el tema.Aca un texto explicativo sobre el tema.
							</TextStyled.BodyBase>
						</HomePageStyled.AnswerColumn>
						<HomePageStyled.AnswerColumn>
							<TextStyled.HeadingXl textWeight="medium">
								Title 4
							</TextStyled.HeadingXl>
							<TextStyled.BodyBase>
								Aca un texto explicativo sobre el tema.Aca un texto explicativo sobre el tema. Aca un texto explicativo sobre el tema.Aca un texto explicativo sobre el tema.
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