/* eslint-disable max-lines-per-function */
import React from "react"
import { useTranslation } from "react-i18next"
import Input from "../../../components/Form/Input/Input"
import Label, { LabelVariant } from "../../../components/Form/Label/Label"
import DetailComponentPage, { Title, Description, }
    from "../../_Layout/DetailComponentPage/DetailComponentPage"
import { DetailComponentPageStyled }
    from "../../_Layout/DetailComponentPage/DetailComponentPageStyled"
import labelCodeViewerStrings from "./LabelCodeViewerStrings"


const LabelShowCaseDetail = () => {
    const { t, } = useTranslation()
    const { t: t_PageLabel, } = useTranslation("PageComponentLabel")

    return <DetailComponentPage>
        <Title title={t_PageLabel("mainSection.title")}>
            {t_PageLabel("mainSection.description")}
        </Title>

        <Description title={t_PageLabel("variantSection.title")}
            description={t_PageLabel("variantSection.description")}
            componentList={[
                {
                    name: t("common.optional"),
                    component: <DetailComponentPageStyled.ContainerForInputs>
                        <Label text={`${t_PageLabel("label")}`}
                            labelVariant={LabelVariant.Optional}>
                            <Input type="text" value="" />
                        </Label>
                    </DetailComponentPageStyled.ContainerForInputs>,
                },
                {
                    name: t_PageLabel("titleValue"),
                    component: <DetailComponentPageStyled.ContainerForInputs>
                        <Label text={`${t_PageLabel("label")}`}>
                            {t("common.onlyText")}
                        </Label>
                    </DetailComponentPageStyled.ContainerForInputs>,
                },
                {
                    name: t("common.disabled"),
                    component: <DetailComponentPageStyled.ContainerForInputs>
                        <Label text={`${t_PageLabel("label")}`}
                            disabled>
                            {t("common.onlyText")}
                        </Label>
                    </DetailComponentPageStyled.ContainerForInputs >,
                },
                {
                    name: t("common.required"),
                    component: <DetailComponentPageStyled.ContainerForInputs>
                        <Label text={`${t_PageLabel("label")}`}
                            labelVariant={LabelVariant.Required}>
                            <Input type="text" value="" />
                        </Label>
                    </DetailComponentPageStyled.ContainerForInputs>,
                },
            ]}
        >
            {labelCodeViewerStrings.variants({
                labelText: t_PageLabel("label"),
                children: t("common.onlyText"),
            })}
        </Description>
    </DetailComponentPage>
}

export default LabelShowCaseDetail