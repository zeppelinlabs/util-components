/* eslint-disable max-lines-per-function */
import React from "react"
import { useTranslation } from "react-i18next"
import Tooltip, { TooltipAlign, TooltipPosition, TooltipSize, TooltipVariant }
    from "../../components/Tooltip/Tooltip"
import { TextStyled } from "../../styles/typographic"
import DetailComponentPage, { Title, Description }
    from "../_Layout/DetailComponentPage/DetailComponentPage"
import tooltipCodeViewerStrings from "./TooltipCodeViewerStrings"

const TooltipShowCaseDetail = () => {

    const { t, } = useTranslation()
    const { t: t_PageTooltip, } = useTranslation("PageComponentTooltip")

    return <DetailComponentPage>
        <Title title={t_PageTooltip("mainSection.title")}>
            {t_PageTooltip("mainSection.description")}
        </Title>

        <Description title={t_PageTooltip("typeSection.title")}
            description={t_PageTooltip("typeSection.description")}
            componentList={[
                {
                    name: t("common.primary"),
                    component: <Tooltip tooltipContent={t_PageTooltip("tooltip")}>
                        <TextStyled.BodyBase>
                            {t_PageTooltip("hover")}
                        </TextStyled.BodyBase>
                    </Tooltip>,
                },
                {
                    name: t("common.secondary"),
                    component: <Tooltip tooltipContent={t_PageTooltip("tooltip")}
                        customStyles={{ tooltipVariant: TooltipVariant.Secondary, }}
                    >
                        <TextStyled.BodyBase>
                            {t_PageTooltip("hover")}
                        </TextStyled.BodyBase>
                    </Tooltip>,
                },
            ]}
        >
            {tooltipCodeViewerStrings.type({
                tooltipContent: t_PageTooltip("tooltip"),
                label: t_PageTooltip("hover"),
            })}
        </Description>

        <Description title={t_PageTooltip("variantSection.title")}
            description={t_PageTooltip("variantSection.description")}
            componentList={[
                {
                    name: t_PageTooltip("topCenter"),
                    component: <Tooltip tooltipContent={t_PageTooltip("tooltip")}
                        customStyles={{ align: TooltipAlign.Center, }}>
                        <TextStyled.BodyBase>
                            {t_PageTooltip("hover")}
                        </TextStyled.BodyBase>
                    </Tooltip>,
                },
                {
                    name: t_PageTooltip("topLeft"),
                    component: <Tooltip tooltipContent={t_PageTooltip("tooltip")}
                        customStyles={{ align: TooltipAlign.Left, }}>
                        <TextStyled.BodyBase>
                            {t_PageTooltip("hover")}
                        </TextStyled.BodyBase>
                    </Tooltip>,
                },
                {
                    name: t_PageTooltip("topRight"),
                    component: <Tooltip tooltipContent={t_PageTooltip("tooltip")}
                        customStyles={{ align: TooltipAlign.Right, }}>
                        <TextStyled.BodyBase>
                            {t_PageTooltip("hover")}
                        </TextStyled.BodyBase>
                    </Tooltip>,
                },
                {
                    name: t_PageTooltip("left"),
                    component: <Tooltip tooltipContent={t_PageTooltip("tooltip")}
                        customStyles={{
                            tooltipVariant: TooltipVariant.Secondary,
                            position: TooltipPosition.Left,
                        }}>
                        <TextStyled.BodyBase>
                            {t_PageTooltip("hover")}
                        </TextStyled.BodyBase>
                    </Tooltip>,
                },
                {
                    name: t_PageTooltip("right"),
                    component: <Tooltip tooltipContent={t_PageTooltip("tooltip")}
                        customStyles={{
                            tooltipVariant: TooltipVariant.Secondary,
                            position: TooltipPosition.Right,
                        }}>
                        <TextStyled.BodyBase>
                            {t_PageTooltip("hover")}
                        </TextStyled.BodyBase>
                    </Tooltip>,
                },
                {
                    name: t_PageTooltip("bottom"),
                    component: <Tooltip tooltipContent={t_PageTooltip("tooltip")}
                        customStyles={{
                            tooltipVariant: TooltipVariant.Secondary,
                            position: TooltipPosition.Bottom,
                        }}>
                        <TextStyled.BodyBase>
                            {t_PageTooltip("hover")}
                        </TextStyled.BodyBase>
                    </Tooltip>,
                },
            ]}
        >
            {tooltipCodeViewerStrings.variants({
                tooltipContent: t_PageTooltip("tooltip"),
                label: t_PageTooltip("hover"),
            })}
        </Description>

        <Description title={t_PageTooltip("sizeSection.title")}
            componentList={[
                {
                    name: t_PageTooltip("auto"),
                    component: <Tooltip tooltipContent={t_PageTooltip("tooltip")}
                        customStyles={{
                            size: TooltipSize.MaxContent,
                        }}>
                        <TextStyled.BodyBase>
                            {t_PageTooltip("hover")}
                        </TextStyled.BodyBase>
                    </Tooltip>,
                },
                {
                    name: t_PageTooltip("small"),
                    component: <Tooltip tooltipContent={t_PageTooltip("tooltip")}
                        customStyles={{
                            size: TooltipSize.Small,
                            textSize: "xs",
                        }}>
                        <TextStyled.BodyBase>
                            {t_PageTooltip("hover")}
                        </TextStyled.BodyBase>
                    </Tooltip>,
                },
                {
                    name: t_PageTooltip("medium"),
                    component: <Tooltip tooltipContent={t_PageTooltip("tooltip")}
                        customStyles={{
                            size: TooltipSize.Medium,
                            textSize: "xl",
                        }}>
                        <TextStyled.BodyBase>
                            {t_PageTooltip("hover")}
                        </TextStyled.BodyBase>
                    </Tooltip>,
                },
                {
                    name: t_PageTooltip("large"),
                    component: <Tooltip tooltipContent={t_PageTooltip("tooltip")}
                        customStyles={{
                            size: TooltipSize.Large,
                            textSize: "2xl",
                        }}>
                        <TextStyled.BodyBase>
                            {t_PageTooltip("hover")}
                        </TextStyled.BodyBase>
                    </Tooltip>,
                },
            ]}
        >
            {tooltipCodeViewerStrings.sizes({
                tooltipContent: t_PageTooltip("tooltip"),
                label: t_PageTooltip("hover"),
            })}
        </Description>
    </DetailComponentPage>
}

export default TooltipShowCaseDetail