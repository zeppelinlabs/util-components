/* eslint-disable max-lines-per-function */
import React, { useState } from "react"
import Button, { ButtonVariant, ButtonIconPosition, ButtonSize }
	from "../../components/Button/Button"
import DetailComponentPage, { Title, Description }
	from "../_Layout/DetailComponentPage/DetailComponentPage"
import { ReactComponent as CircleIcon } from ".././../assets/icons/circle.svg"
import { toastNotification } from "../../util/toastNotification"
import { useTranslation } from "react-i18next"
import ButtonCodeViewerStrings from "./ButtonCodeViewerStrings"
import { Paths } from "../Paths"

const messageList = [
	"Fantastic! A button click has occurred!",
	"Wow another click!",
	"Yep, still working",
	"Still clicking",
	"Again ? really ? You already know that its working",
	"This is getting out of hands",
]

const ButtonShowCaseDetail = () => {
	const [clickCount, setClickCount,] = useState(0)
	const { t, } = useTranslation()
	const { t: t_PageButton, } = useTranslation("PageComponentButton")

	const handleOnClick = () => {
		toastNotification(messageList[clickCount])
		setClickCount((clickCount < (messageList.length - 1)) ? clickCount + 1 : 0)
	}

	return <DetailComponentPage>
		<Title
			title={t_PageButton("mainSection.title")}
			githubLink={Paths.GithubComponents.Button}
		>
			{t_PageButton("mainSection.description")}
		</Title>
		<Description title={t_PageButton("typeSection.title")}
			description={t_PageButton("typeSection.description")}
			componentList={[
				{
					name: t("common.primary"),
					component: <Button type="button"
						onClick={handleOnClick}>
						{t_PageButton("buttonText")}
					</Button>,
				},
				{
					name: t("common.secondary"),
					component: <Button type="button"
						onClick={handleOnClick}
						customStyles={{ buttonVariant: ButtonVariant.Secondary, }}>
						{t_PageButton("buttonText")}
					</Button>,
				},
				{
					name: t("common.ghost"),
					component: <Button type="button"
						onClick={handleOnClick}
						customStyles={{ buttonVariant: ButtonVariant.Ghost, }}>
						{t_PageButton("buttonText")}
					</Button>,
				},
				{
					name: t("common.danger"),
					component: <Button type="button"
						onClick={handleOnClick}
						customStyles={{ buttonVariant: ButtonVariant.Danger, }}>
						{t_PageButton("buttonText")}
					</Button>,
				},
			]}
		>
			{ButtonCodeViewerStrings.type({ buttonText: t_PageButton("buttonText"), })}
		</Description>

		<Description title={t_PageButton("stateSection.title")}
			description={t_PageButton("stateSection.description")}
			componentList={[
				{
					name: t("common.standard"),
					component: <Button type="button"
						onClick={handleOnClick}>
						{t_PageButton("buttonText")}
					</Button>,
				},
				{
					name: t("common.disabled"),
					component: <Button type="button"
						onClick={handleOnClick}
						customStyles={{ buttonVariant: ButtonVariant.Secondary, }}
						disabled>
						{t_PageButton("buttonText")}
					</Button>,
				},
				{
					name: t("common.loading"),
					component: <Button type="button"
						onClick={handleOnClick}
						isLoading>
						{t_PageButton("buttonText")}
					</Button>,
				},
			]}
		>{
				ButtonCodeViewerStrings.type({ buttonText: t_PageButton("buttonText"), })}
		</Description>

		<Description title={t_PageButton("variantSection.title")}
			description={t_PageButton("variantSection.description")}
			componentList={[
				{
					name: t("common.onlyText"),
					component: <Button type="button"
						onClick={handleOnClick}>
						{t_PageButton("buttonText")}
					</Button>,
				},
				{
					name: t_PageButton("leftIcon"),
					component: <Button type="button"
						icon={{ SVGComponent: CircleIcon, }}
						onClick={handleOnClick}>
						{t_PageButton("buttonText")}
					</Button>,
				},
				{
					name: t_PageButton("rightIcon"),
					component: <Button type="button"
						icon={{
							SVGComponent: CircleIcon,
							position: ButtonIconPosition.Right,
						}}
						onClick={handleOnClick}>
						{t_PageButton("buttonText")}
					</Button>,
				},
				{
					name: t("common.onlyIcon"),
					component: <Button type="button"
						icon={{
							SVGComponent: CircleIcon,
						}}
						onClick={handleOnClick}
					/>,
				},
			]}
		>
			{ButtonCodeViewerStrings.variants({ buttonText: t_PageButton("buttonText"), })}
		</Description>

		<Description title={t_PageButton("sizeSection.title")}
			componentList={[
				{
					name: t_PageButton("sizeSmall"),
					component: <Button type="button"
						buttonSize={ButtonSize.Small}
						icon={{
							SVGComponent: CircleIcon,
						}}
						onClick={handleOnClick}
					>
						{t_PageButton("buttonText")}
					</Button>,
				},
				{
					name: t_PageButton("sizeBase"),
					component: <Button type="button"
						buttonSize={ButtonSize.Base}
						icon={{
							SVGComponent: CircleIcon,
						}}
						onClick={handleOnClick}
					>
						{t_PageButton("buttonText")}
					</Button>,
				},
				{
					name: t_PageButton("sizeLarge"),
					component: <Button type="button"
						buttonSize={ButtonSize.Large}
						icon={{
							SVGComponent: CircleIcon,
						}}
						onClick={handleOnClick}
					>
						{t_PageButton("buttonText")}
					</Button>,
				},
				{
					name: t_PageButton("sizeXLarge"),
					component: <Button type="button"
						buttonSize={ButtonSize.XLarge}
						icon={{
							SVGComponent: CircleIcon,
						}}
						onClick={handleOnClick}
					>
						{t_PageButton("buttonText")}
					</Button>,
				},
			]}
		>
			{ButtonCodeViewerStrings.sizes({ buttonText: t_PageButton("buttonText"), })}
		</Description>
	</DetailComponentPage >
}

export default ButtonShowCaseDetail