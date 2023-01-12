/* eslint-disable max-lines-per-function */
import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import Button from "../../../components/Button/Button"
import RadioButtonGroup, { RadioOption, InputRadio, ContentRadioPosition, RadioButtonSize }
    from "../../../components/Form/RadioButton/RadioButton"
import DetailComponentPage, { Title, Description }
    from "../../_Layout/DetailComponentPage/DetailComponentPage"

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

const listOption1: RadioOption<ListOptionKey>[] = [
    {
        key: ListOptionKey.FirstKey,
        children: "Input radio",
    },
    {
        key: ListOptionKey.SecondKey,
        children: "Disabled item",
        disabled: true,
    },
    {
        key: ListOptionKey.ThirdKey,
        children: "With text bold",
        customStyles: { textWeight: "bold", },
    },
]

const listOption2: RadioOption<number>[] = [
    {
        key: 1,
        children: "Input in other radio group",
    },
    {
        key: 2,
        children: <>With <em>JSX</em> content</>,
    },
    {
        key: 3,
        children: "With other colors",
        customStyles: { textColor: "level700", },
    },
    {
        key: 4,
        children: "With auto focus",
        accessibility: {
            autoFocus: true,
        },
    },
]

const listOption3: RadioOption<string>[] = [
    {
        key: "1",
        children: "Input disabled with error",
        disabled: true,
    },
]

const listOption4: RadioOption<string>[] = [
    {
        key: "1",
        children: "Input clear value with button",
    },
]
const listOption5: RadioOption<string | null>[] = [
    {
        key: null,
        children: "Send a null value",
    },
    {
        key: "1",
        children: "Value 1",
    },
]


const RadioButtonShowCaseDetail = () => {

    const [value, setValue,] = useState<ListOptionKey | undefined>()
    const [secondValue, setSecondValue,] = useState<number | undefined>()
    const [thirdValue, setThirdValue,] = useState<string | undefined>()
    const [fourValue, setFourValue,] = useState<string | undefined>("1")
    const [fiveValue, setFiveValue,] = useState<string | null>("1")

    const { t, } = useTranslation()
    const { t: t_PageRadio, } = useTranslation("PageComponentRadio")

    const handleChange = (value: ListOptionKey) => {
        console.log()
    }

    const handleChange1 = (value: ListOptionKey) => {
        setValue(value)
    }

    const handleChange2 = (value: number) => {
        setSecondValue(value)
    }

    const handleChange3 = (value: string) => {
        setThirdValue(value)
    }
    const handleChange4 = (value: string) => {
        setFourValue(value)
    }
    const handleChange5 = (value: string | null) => {
        setFiveValue(value)
    }


    return <DetailComponentPage>
        <Title title={t_PageRadio("mainSection.title")}>
            {t_PageRadio("mainSection.description")}
        </Title>
        <Description title={t_PageRadio("stateSection.title")}
            description={t_PageRadio("stateSection.description")}
            componentList={[
                {
                    name: t("common.selected"),
                    component: <RadioButtonGroup
                        selectedValue={listOption[0].key}
                        onChange={handleChange}
                        name="group-1"
                        options={[listOption[0],]}
                    />,
                },
                {
                    name: t("common.unselected"),
                    component: <RadioButtonGroup
                        selectedValue={value}
                        onChange={handleChange1}
                        name="group-2"
                        options={[listOption[0],]}
                    />,
                },
                {
                    name: t("common.disabled"),
                    component: <RadioButtonGroup
                        selectedValue={value}
                        onChange={handleChange1}
                        name="group-3"
                        options={[listOption[1],]}
                    />,
                },
            ]}
        />
        <Description title={t_PageRadio("variantSection.title")}
            description={t_PageRadio("variantSection.description")}
            componentList={[
                {
                    name: t("common.single"),
                    component: <RadioButtonGroup
                        selectedValue={listOption[0].key}
                        onChange={handleChange}
                        name="group-4"
                        options={[listOption[0],]}
                    />,
                },
                {
                    name: t_PageRadio("left"),
                    component: <RadioButtonGroup
                        selectedValue={listOption[3].key}
                        onChange={handleChange}
                        name="group-5"
                        options={[listOption[3],]}
                    />,
                },
                {
                    name: t_PageRadio("right"),
                    component: <RadioButtonGroup
                        selectedValue={listOption[2].key}
                        onChange={handleChange}
                        name="group-6"
                        options={[listOption[2],]}
                    />,
                },
            ]}
        />
        <Description title={t_PageRadio("sizeSection.title")}
            componentList={[
                {
                    name: t_PageRadio("small"),
                    component: <RadioButtonGroup
                        selectedValue={listOption[4].key}
                        onChange={handleChange}
                        name="group-7"
                        options={[listOption[4],]}
                    />,
                },
                {
                    name: t_PageRadio("base"),
                    component: <RadioButtonGroup
                        selectedValue={listOption[2].key}
                        onChange={handleChange}
                        name="group-8"
                        options={[listOption[2],]}
                    />,
                },
                {
                    name: t_PageRadio("large"),
                    component: <RadioButtonGroup
                        selectedValue={listOption[5].key}
                        onChange={handleChange}
                        name="group-9"
                        options={[listOption[5],]}
                    />,
                },
            ]}
        />
        {/* <RadioButtonGroup
            selectedValue={value}
            onChange={handleChange1}
            name="group-1"
            options={listOption1}
        />
        <hr />
        <RadioButtonGroup
            selectedValue={secondValue}
            onChange={handleChange2}
            name="group-2"
            options={listOption2}
        />
        <hr />
        <RadioButtonGroup
            selectedValue={thirdValue}
            onChange={handleChange3}
            name="group-3"
            errorMessage="Error, Select one!"
            options={listOption3}
        />
        <hr />
        <RadioButtonGroup
            selectedValue={fourValue}
            onChange={handleChange4}
            name="group-4"
            options={listOption4}
        />
        <Button type="button"
            onClick={() => setFourValue(undefined)}
        >
            Clear value of input radio
        </Button>
        <hr />
        <RadioButtonGroup
            selectedValue={fiveValue}
            onChange={handleChange5}
            name="group-5"
            options={listOption5}
        /> */}
    </DetailComponentPage>
}

export default RadioButtonShowCaseDetail