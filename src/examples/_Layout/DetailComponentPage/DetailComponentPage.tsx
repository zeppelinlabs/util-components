/* eslint-disable max-lines-per-function */
import React from "react"
import { useTranslation } from "react-i18next"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import oneDark from "react-syntax-highlighter/dist/esm/styles/prism/one-dark"
import Button, { ButtonIconPosition, ButtonSize, ButtonVariant }
	from "../../../components/Button/Button"
import { useWindowSize } from "../../../hooks/useWindowsSize"
import { size } from "../../../styles/mediaQueries"
import { TextStyled } from "../../../styles/typographic"
import { toastNotification } from "../../../util/toastNotification"
import { SidebarDesktop } from "../Sidebar/Sidebar"
import { DetailComponentPageStyled } from "./DetailComponentPageStyled"
import { ReactComponent as GithubIcon } from "../../../assets/examples/github.svg"

type Props = {
	children: React.ReactNode,
}

const DetailComponentPage = (props: Props) => {
	const windowSize = useWindowSize()

	return <DetailComponentPageStyled.Wrapper>
		{windowSize.width >= size.desktop
			? (<DetailComponentPageStyled.Row>
				<SidebarDesktop />
				<DetailComponentPageStyled.WrapperContent>
					{props.children}
				</DetailComponentPageStyled.WrapperContent>
			</DetailComponentPageStyled.Row>)
			: (<DetailComponentPageStyled.WrapperContent>
				{props.children}
			</DetailComponentPageStyled.WrapperContent>)
		}
	</DetailComponentPageStyled.Wrapper>
}

export default DetailComponentPage

type TitleProps = {
	title: string,
	children: React.ReactNode,
	githubLink: string,
}
export const Title = (props: TitleProps) => {
	const windowSize = useWindowSize()

	const redirectToGithub = () => {
		return window.open(props.githubLink, "_blank")
	}

	return <DetailComponentPageStyled.WrapperTitle>
		<DetailComponentPageStyled.ContainerInLine>
			<TextStyled.Heading3xl textWeight="semibold">
				{props.title}
			</TextStyled.Heading3xl>
			<Button
				type="button"
				customStyles={{ buttonVariant: ButtonVariant.Secondary, }}
				onClick={redirectToGithub}
				buttonSize={ButtonSize.Small}
				icon={{
					SVGComponent: GithubIcon,
					position: ButtonIconPosition.Right,
				}}
			>
				{windowSize.width >= size.desktop && "Go to the code"}
			</Button>
		</DetailComponentPageStyled.ContainerInLine>
		<TextStyled.BodyXl textColor="level400">
			{props.children}
		</TextStyled.BodyXl>
	</DetailComponentPageStyled.WrapperTitle>
}

type DescriptionProps = {
	title: string,
	description?: React.ReactNode,
	componentList?: {
		name: string,
		component: React.ReactNode,
	}[],
	children?: string,
}
export const Description = (props: DescriptionProps) => {

	const editorHeader = "import React from \"react\"\n"
	const { t, } = useTranslation()

	const copyItem = (text?: string) => {
		if (text) {
			try {
				navigator.clipboard.writeText(text)
				toastNotification(t("copy.success"))
			} catch {
				toastNotification(t("copy.error"))
			}
		} else {
			toastNotification(t("copy.wrong"))
		}
	}

	return <DetailComponentPageStyled.WrapperSubTitle>
		<TextStyled.HeadingXl textWeight="semibold">
			{props.title}
		</TextStyled.HeadingXl>
		{props.description && <TextStyled.BodyBase textColor="level400">
			{props.description}
		</TextStyled.BodyBase>}
		{props.componentList && <DetailComponentPageStyled.StageComponents>
			{props.componentList.map((item, i) => {
				return <DetailComponentPageStyled.ContainComponentAndText key={i}>
					<DetailComponentPageStyled.ContainComponent>
						{item.component}
					</DetailComponentPageStyled.ContainComponent>
					<TextStyled.BodySm textWeight="light" textColor="level500">
						{item.name}
					</TextStyled.BodySm>
				</DetailComponentPageStyled.ContainComponentAndText>
			})}
		</DetailComponentPageStyled.StageComponents>}

		{props.children && <DetailComponentPageStyled.WrapperCode>
			<DetailComponentPageStyled.ContainerCopyButton>
				<Button type="button"
					buttonSize={ButtonSize.Small}
					onClick={() => copyItem(`${editorHeader}${props.children}`)}>
					Copy
				</Button>
			</DetailComponentPageStyled.ContainerCopyButton>
			<SyntaxHighlighter
				language="jsx"
				style={oneDark}
				showLineNumbers
				showInlineLineNumbers
				wrapLongLines
				wrapLines
			>
				{`${editorHeader}${props.children}`}
			</SyntaxHighlighter>
		</DetailComponentPageStyled.WrapperCode>}

	</DetailComponentPageStyled.WrapperSubTitle>
}