/* eslint-disable max-lines-per-function */
import React, { useState } from "react"
import Select, { SelectOption } from "../../../components/Form/Select/Select"
import { ReactComponent as CircleIcon } from "../../../assets/icons/circle.svg"
import DetailComponentPage, { Title, Description, }
    from "../../_Layout/DetailComponentPage/DetailComponentPage"
import { useTranslation } from "react-i18next"
import { DetailComponentPageStyled }
    from "../../_Layout/DetailComponentPage/DetailComponentPageStyled"


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

const listOption3: SelectOption<string | null>[] = [
    {
        key: null,
        text: "Option 1",
    },
    {
        key: "1",
        text: "Option 2",
    },
]

const listOption4: SelectOption<string>[] = [
    {
        key: "1",
        text: "Option 1",
    },
    {
        key: "2",
        text: "Option 2",
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
    const [thirdValue, setThirdValue,] = useState<SelectOption<string | null>>()
    const [fourValue, setFourValue,] = useState<SelectOption<string>>(listOption4[1])
    const [fiveValue, setFiveValue,] = useState<SelectOption<string | null>>()
    const [sixValue, setSixValue,] = useState<SelectOption<number>>()

    const { t, } = useTranslation()
    const { t: t_PageSelect, } = useTranslation("PageComponentSelect")

    const handleChange1 = (value: SelectOption<ListOptionKey>) => {
        setValue(value)
    }

    const handleChange2 = (value: SelectOption<number>) => {
        setSecondValue(value)
    }

    const handleChange3 = (value: SelectOption<string | null>) => {
        setThirdValue(value)
    }
    const handleChange4 = (value: SelectOption<string>) => {
        setFourValue(value)
    }
    const handleChange5 = (value: SelectOption<string | null>) => {
        setFiveValue(value)
    }
    const handleChange6 = (value: SelectOption<number>) => {
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
                            selectedValue={fiveValue?.key}
                            onChange={handleChange5}
                            icon={CircleIcon}
                        />
                    </DetailComponentPageStyled.ContainerForInputs>,
                },
            ]}
        >{`import Select, { SelectOption } from "components/Form/Select/Select"
import { ReactComponent as CircleIcon } from "assets/icons/circle.svg"

const listOption: SelectOption<string>[] = [
    {
        key: "1",
        text: "Option 1",
    },
    {
        key: "2",
        text: "Option 2",
    },
]

const [value, setValue,] = useState<SelectOption<string>>()

<Select options={listOption}
    selectedValue={value.key}
    onChange={handleChange}
/>

<Select options={listOption}
    selectedValue={value.key}
    onChange={handleChange}
    icon={CircleIcon}
/>`}
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
                            selectedValue={sixValue?.key}
                            onChange={handleChange6}
                            disabled={true}
                        />
                    </DetailComponentPageStyled.ContainerForInputs>,
                },
                {
                    name: t("common.loading"),
                    component: <DetailComponentPageStyled.ContainerForInputs>
                        <Select
                            options={listOption6}
                            selectedValue={sixValue?.key}
                            onChange={handleChange6}
                            isLoading={true}
                        />
                    </DetailComponentPageStyled.ContainerForInputs>,
                },
            ]}
        >{`import Select, { SelectOption } from "components/Form/Select/Select"

const listOption: SelectOption<string>[] = [
    {
        key: "1",
        text: "Option 1",
    },
    {
        key: "2",
        text: "Option 2",
    },
]

const [value, setValue,] = useState<SelectOption<string>>()

<Select
    options={listOption}
    selectedValue={value.key}
    onChange={handleChange}
    errorMessage={"Error message"}
/>

<Select
    options={listOption}
    selectedValue={value.key}
    onChange={handleChange}
    disabled={true}
/>

<Select
    options={listOption}
    selectedValue={value.key}
    onChange={handleChange}
    isLoading={true}
/>`}
        </Description>
    </DetailComponentPage>
}

export default SelectShowCaseDetail