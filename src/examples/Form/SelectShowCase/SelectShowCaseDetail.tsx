/* eslint-disable max-lines-per-function */
import React, { useState } from "react"
import Select, { SelectOption } from "../../../components/Form/Select/Select"
import { ReactComponent as CircleIcon } from "../../../assets/icons/circle.svg"
import DetailComponentPage, { Title, Description, }
    from "../../_Layout/DetailComponentPage/DetailComponentPage"
import { useTranslation } from "react-i18next"
import { DetailComponentPageStyled }
    from "../../_Layout/DetailComponentPage/DetailComponentPageStyled"
import selectCodeViewerStrings from "./SelectCodeViewerStrings"


enum ListOptionKey {
    Placeholder = "placeholder",
    FirstKey = "firstKey",
    SecondKey = "secondKey",
    ThirdKey = "thirdKey",
}

const listOption1: SelectOption<ListOptionKey>[] = [
    {
        key: ListOptionKey.Placeholder,
        text: "Select one option",
    },
    {
        key: ListOptionKey.FirstKey,
        text: "Option 1",
    },
    {
        key: ListOptionKey.SecondKey,
        text: "Option 2",
    },
    {
        key: ListOptionKey.ThirdKey,
        text: "Option 3",
    },
]

const listOption2: SelectOption<number>[] = [
    {
        key: 0,
        text: "Select one option",
    },
    {
        key: 1,
        text: "Option 1",
    },
    {
        key: 2,
        text: "Option 2",
    },
    {
        key: 3,
        text: "Option 3",
    },
    {
        key: 4,
        text: "Option 4",
    },
]

const listOption5: SelectOption<string | null>[] = [
    {
        key: null,
        text: "Select one option",
        isOptionHidden: true,
    },
    {
        key: "1",
        text: "Option 1",
    },
]
const listOption6: SelectOption<number>[] = [
    {
        key: 1,
        text: "Option 1",
    },
]


const SelectShowCaseDetail = () => {

    const [value, setValue,] = useState<SelectOption<ListOptionKey>>()
    const [secondValue, setSecondValue,] = useState<SelectOption<number> | undefined>()
    const [thirdValue, setFiveValue,] = useState<SelectOption<string | null>>()
    const [fourthValue, setSixValue,] = useState<SelectOption<number>>()

    const { t, } = useTranslation()
    const { t: t_PageSelect, } = useTranslation("PageComponentSelect")

    const handleChange1 = (value: SelectOption<ListOptionKey>) => {
        setValue(value)
    }

    const handleChange2 = (value: SelectOption<number>) => {
        setSecondValue(value)
    }

    const handleChange3 = (value: SelectOption<string | null>) => {
        setFiveValue(value)
    }

    const handleChange4 = (value: SelectOption<number>) => {
        setSixValue(value)
    }


    return <DetailComponentPage>
        <Title title={t_PageSelect("mainSection.title")}>
            {t_PageSelect("mainSection.description")}
        </Title>

        <Description title={t_PageSelect("typeSection.title")}
            description={t_PageSelect("typeSection.description")}
            componentList={[
                {
                    name: t("common.standard"),
                    component: <DetailComponentPageStyled.ContainerForInputs>
                        <Select
                            options={listOption1}
                            selectedValue={value?.key}
                            onChange={handleChange1}
                        />
                    </DetailComponentPageStyled.ContainerForInputs>,
                },
                {
                    name: t("common.witIcon"),
                    component: <DetailComponentPageStyled.ContainerForInputs>
                        <Select
                            options={listOption5}
                            selectedValue={thirdValue?.key}
                            onChange={handleChange3}
                            icon={CircleIcon}
                        />
                    </DetailComponentPageStyled.ContainerForInputs>,
                },
            ]}
        >
            {selectCodeViewerStrings.type}
        </Description>

        <Description title={t_PageSelect("variantSection.title")}
            description={t_PageSelect("variantSection.description")}
            componentList={[
                {
                    name: t("common.error"),
                    component: <DetailComponentPageStyled.ContainerForInputs>
                        <Select
                            options={listOption2}
                            selectedValue={secondValue?.key}
                            onChange={handleChange2}
                            errorMessage={"Error message"}
                        />
                    </DetailComponentPageStyled.ContainerForInputs>,
                },
                {
                    name: t("common.disabled"),
                    component: <DetailComponentPageStyled.ContainerForInputs>
                        <Select
                            options={listOption6}
                            selectedValue={fourthValue?.key}
                            onChange={handleChange4}
                            disabled={true}
                        />
                    </DetailComponentPageStyled.ContainerForInputs>,
                },
                {
                    name: t("common.loading"),
                    component: <DetailComponentPageStyled.ContainerForInputs>
                        <Select
                            options={listOption6}
                            selectedValue={fourthValue?.key}
                            onChange={handleChange4}
                            isLoading={true}
                        />
                    </DetailComponentPageStyled.ContainerForInputs>,
                },
            ]}
        >
            {selectCodeViewerStrings.variants}
        </Description>
    </DetailComponentPage>
}

export default SelectShowCaseDetail