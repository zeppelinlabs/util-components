/* eslint-disable max-lines-per-function */
import React, { useState } from "react"
import Select, { SelectOption } from "../../../components/Form/Select/Select"
import LayoutExamples from "../../../styles/Layout/LayoutExamples/LayoutExamples"
import { ReactComponent as InfoIcon } from "../../../assets/info.svg"


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
    const [sixValue, setSixValue,] = useState <SelectOption<number>>()

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


    return <LayoutExamples>
        <Select
            options={listOption1}
            selectedValue={value?.key}
            onChange={handleChange1}
            label={{text:"Select with label",}}
        />
        <Select
            options={listOption2}
            selectedValue={secondValue?.key}
            onChange={handleChange2}
            errorMessage={"Error message"}
            label={{ text: "With error", }}
        />
        <Select
            options={listOption3}
            selectedValue={thirdValue?.key}
            onChange={handleChange3}
            label={{ text: "Send a null value", }}
        />
        <Select
            options={listOption4}
            selectedValue={fourValue?.key}
            onChange={handleChange4}
            label={{ text: "With option selected", }}
        />
        <Select
            options={listOption5}
            selectedValue={fiveValue?.key}
            onChange={handleChange5}
            icon={InfoIcon}
            label={{ text: "With placeholder hidden and icon", }}
        />
        <Select
            options={listOption6}
            selectedValue={sixValue?.key}
            onChange={handleChange6}
            loading={true}
            label={{ text: "With loading state", }}
        />
        <Select
            options={listOption6}
            selectedValue={sixValue?.key}
            onChange={handleChange6}
            disabled={true}
            label={{ text: "With disabled state", }}
        />
    </LayoutExamples>
}

export default SelectShowCaseDetail