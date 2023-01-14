/* eslint-disable max-lines-per-function */
import React from "react"
import { useTranslation } from "react-i18next"
import Tooltip, { TooltipAlign, TooltipPosition, TooltipSize, TooltipVariant }
    from "../../components/Tooltip/Tooltip"
import { TextStyled } from "../../styles/typographic"
import DetailComponentPage, { Title, Description }
    from "../_Layout/DetailComponentPage/DetailComponentPage"

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
        >{`import Tooltip, { TooltipVariant } from "components/Tooltip/Tooltip"

<Tooltip tooltipContent={${t_PageTooltip("tooltip")}}>
    ${t("common.primary")}
</Tooltip>

<Tooltip tooltipContent={${t_PageTooltip("tooltip")}}
    customStyles={{ tooltipVariant: TooltipVariant.Secondary, }}
>
    ${t("common.secondary")}
</Tooltip>`}
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
        >{`import Tooltip, { TooltipPosition, TooltipAlign }
    from "components/Tooltip/Tooltip"

<Tooltip tooltipContent={${t_PageTooltip("tooltip")}}
    customStyles={{ align: TooltipAlign.Center, }}>
    ${t_PageTooltip("center")}
</Tooltip>

<Tooltip tooltipContent={${t_PageTooltip("tooltip")}}
    customStyles={{ align: TooltipAlign.Left, }}>
    ${t_PageTooltip("topLeft")}
</Tooltip>

<Tooltip tooltipContent={${t_PageTooltip("tooltip")}}
    customStyles={{ align: TooltipAlign.Right, }}>
    ${t_PageTooltip("topRight")}
</Tooltip>

<Tooltip tooltipContent={${t_PageTooltip("tooltip")}}
    customStyles={{ position: TooltipPosition.Left,}}>
    ${t_PageTooltip("left")}
</Tooltip>

<Tooltip tooltipContent={${t_PageTooltip("tooltip")}}
    customStyles={{ position: TooltipPosition.Right,}}>
    ${t_PageTooltip("right")}
</Tooltip>

<Tooltip tooltipContent={${t_PageTooltip("tooltip")}}
    customStyles={{ position: TooltipPosition.Bottom,}}>
    ${t_PageTooltip("bottom")}
</Tooltip>`}
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
        >{`import Tooltip, { TooltipSize } from "components/Tooltip/Tooltip"

<Tooltip tooltipContent={${t_PageTooltip("tooltip")}}
    customStyles={{
        size: TooltipSize.MaxContent,
    }}>
    ${t_PageTooltip("auto")}
</Tooltip>

<Tooltip tooltipContent={${t_PageTooltip("tooltip")}}
    customStyles={{
        size: TooltipSize.Small,
        textSize: "xs",
    }}>
    ${t_PageTooltip("small")}
</Tooltip>

<Tooltip tooltipContent={${t_PageTooltip("tooltip")}}
    customStyles={{
        size: TooltipSize.Medium,
        textSize: "xl",
    }}>
    ${t_PageTooltip("medium")}
</Tooltip>

<Tooltip tooltipContent={${t_PageTooltip("tooltip")}}
    customStyles={{
        size: TooltipSize.Large,
        textSize: "2xl",
    }}>
    ${t_PageTooltip("large")}
</Tooltip>`}
        </Description>

        {/* <div>
            <TextStyled.BodyBase>
                <Tooltip tooltipContent="Content of tooltip">
                    Tooltip example
                </Tooltip>
            </TextStyled.BodyBase>
        </div>
        <div>
            <TextStyled.BodyBase>
                <Tooltip
                    tooltipContent="Content of tooltip with small size"
                    customStyles={{ size: TooltipSize.Small, }}>
                    Tooltip size
                </Tooltip>
            </TextStyled.BodyBase>
        </div>
        <div>
            <TextStyled.BodyBase>
                <Tooltip
                    tooltipContent="Content of tooltip"
                    customStyles={{ align: TooltipAlign.Left, }}>
                    Tooltip example align to left
                </Tooltip>
            </TextStyled.BodyBase>
        </div>
        <div>
            <TextStyled.BodyBase style={{
                "display": "flex",
                "gap": "10px",
                "alignItems": "center",
            }}>
                Tooltip example align to right in icon
                <Tooltip
                    tooltipContent="Content of tooltip"
                    customStyles={{
                        align: TooltipAlign.Right,
                        tooltipVariant: TooltipVariant.Secondary,
                    }}>
                    <InfoIcon />
                </Tooltip>
            </TextStyled.BodyBase>
        </div>
        <div>
            <TextStyled.BodyBase>
                <Tooltip
                    tooltipContent="Content of tooltip"
                    customStyles={{ position: TooltipPosition.Right, }}>
                    Tooltip example position to right
                </Tooltip>
            </TextStyled.BodyBase>
        </div>
        <div>
            <TextStyled.BodyBase>
                <Tooltip
                    tooltipContent="Content of tooltip"
                    customStyles={{
                        position: TooltipPosition.Left,
                        tooltipVariant: TooltipVariant.Secondary,
                    }}>
                    Tooltip example position to left
                </Tooltip>
            </TextStyled.BodyBase>
        </div>
        <div>
            <TextStyled.BodyBase>
                <Tooltip
                    tooltipContent="Content of tooltip"
                    customStyles={{ position: TooltipPosition.Bottom, }}>
                    Tooltip example position to bottom
                </Tooltip>
            </TextStyled.BodyBase>
        </div> */}
    </DetailComponentPage>
}

export default TooltipShowCaseDetail