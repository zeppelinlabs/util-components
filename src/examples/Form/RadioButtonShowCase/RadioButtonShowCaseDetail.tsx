/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable max-lines-per-function */
import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import RadioButtonGroup, { RadioOption, ContentRadioPosition, RadioButtonSize }
    from "../../../components/Form/RadioButton/RadioButton"
import { Paths } from "../../Paths"
import DetailComponentPage, { Title, Description }
    from "../../_Layout/DetailComponentPage/DetailComponentPage"
import radioCodeViewerStrings from "./RadioCodeViewerStrings"

enum ListOptionKey {
    FirstKey = "firstKey",
    SecondKey = "secondKey",
    ThirdKey = "thirdKey",
    FourKey = "fourKey",
    FiveKey = "fiveKey",
    SixKey = "sixKey",
    SevenKey = "sevenKey",
}

const listOption: RadioOption<ListOptionKey>[] = [
    {
        key: ListOptionKey.FirstKey,
        children: "",
    },
    {
        key: ListOptionKey.SecondKey,
        children: "",
        disabled: true,
    },
    {
        key: ListOptionKey.ThirdKey,
        children: "Label",
    },
    {
        key: ListOptionKey.FourKey,
        children: "Label",
        customStyles: { contentPosition: ContentRadioPosition.Left, },
    },
    {
        key: ListOptionKey.FiveKey,
        children: "Label",
        customStyles: {
            size: RadioButtonSize.Small,
            textSize: "xs",
        },
    },
    {
        key: ListOptionKey.SixKey,
        children: "Label",
        customStyles: {
            size: RadioButtonSize.Large,
            textSize: "xl",
        },
    },
]

const RadioButtonShowCaseDetail = () => {

    const [value, setValue,] = useState<ListOptionKey | undefined>()

    const { t, } = useTranslation()
    const { t: t_PageRadio, } = useTranslation("PageComponentRadio")

    const handleChange = (value: ListOptionKey) => {
        setValue(value)
    }

    return <DetailComponentPage>
        <Title
            title={t_PageRadio("mainSection.title")}
            githubLink={Paths.GithubComponents.RadioButton}
        >
            {t_PageRadio("mainSection.description")}
        </Title>
        <Description title={t_PageRadio("stateSection.title")}
            description={t_PageRadio("stateSection.description")}
            componentList={[
                {
                    name: t("common.selected"),
                    component: <RadioButtonGroup
                        selectedValue={listOption[0].key}
                        onChange={() => { }}
                        name="group-1"
                        options={[listOption[0],]}
                    />,
                },
                {
                    name: t("common.unselected"),
                    component: <RadioButtonGroup
                        selectedValue={value}
                        onChange={() => { }}
                        name="group-2"
                        options={[listOption[0],]}
                    />,
                },
                {
                    name: t("common.disabled"),
                    component: <RadioButtonGroup
                        selectedValue={value}
                        onChange={handleChange}
                        name="group-3"
                        options={[listOption[1],]}
                    />,
                },
            ]}
        >
            {radioCodeViewerStrings.state({
                selected: t("common.selected"),
                unselected: t("common.unselected"),
                disabled: t("common.disabled"),
            })}
        </Description>

        <Description title={t_PageRadio("variantSection.title")}
            description={t_PageRadio("variantSection.description")}
            componentList={[
                {
                    name: t("common.single"),
                    component: <RadioButtonGroup
                        selectedValue={listOption[0].key}
                        onChange={() => { }}
                        name="group-4"
                        options={[listOption[0],]}
                    />,
                },
                {
                    name: t_PageRadio("left"),
                    component: <RadioButtonGroup
                        selectedValue={listOption[3].key}
                        onChange={() => { }}
                        name="group-5"
                        options={[listOption[3],]}
                    />,
                },
                {
                    name: t_PageRadio("right"),
                    component: <RadioButtonGroup
                        selectedValue={listOption[2].key}
                        onChange={() => { }}
                        name="group-6"
                        options={[listOption[2],]}
                    />,
                },
            ]}
        >
            {radioCodeViewerStrings.variants({ radioText: "Label", })}
        </Description>

        <Description title={t_PageRadio("sizeSection.title")}
            componentList={[
                {
                    name: t_PageRadio("small"),
                    component: <RadioButtonGroup
                        selectedValue={listOption[4].key}
                        onChange={() => { }}
                        name="group-7"
                        options={[listOption[4],]}
                    />,
                },
                {
                    name: t_PageRadio("base"),
                    component: <RadioButtonGroup
                        selectedValue={listOption[2].key}
                        onChange={() => { }}
                        name="group-8"
                        options={[listOption[2],]}
                    />,
                },
                {
                    name: t_PageRadio("large"),
                    component: <RadioButtonGroup
                        selectedValue={listOption[5].key}
                        onChange={() => { }}
                        name="group-9"
                        options={[listOption[5],]}
                    />,
                },
            ]}
        >
            {radioCodeViewerStrings.sizes({ radioText: "Label", })}
        </Description>
    </DetailComponentPage>
}

export default RadioButtonShowCaseDetail