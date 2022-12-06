/* eslint-disable max-lines-per-function */
import React, { useState } from "react"
import Select, { SelectOption } from "../../../components/Form/Select/Select"
import LayoutExamples from "../../../styles/Layout/LayoutExamples/LayoutExamples"
import { ReactComponent as InfoIcon } from "../../../assets/info.svg"


enum ListOptionKey {
    FirstKey = "firstKey",
    SecondKey = "secondKey",
    ThirdKey = "thirdKey",
}

const listOption1: SelectOption<ListOptionKey>[] = [
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

const listOption5: SelectOption<string>[] = [
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

    const [value, setValue,] = useState<ListOptionKey>()
    const [secondValue, setSecondValue,] = useState<number>()
    const [thirdValue, setThirdValue,] = useState<string | null>()
    const [fourValue, setFourValue,] = useState<string>("2")
    const [fiveValue, setFiveValue,] = useState<string>("1")
    const [sixValue, setSixValue,] = useState<number>()

    const handleChange1 = (value: ListOptionKey) => {
        setValue(value)
    }

    const handleChange2 = (value: number) => {
        setSecondValue(value)
    }

    const handleChange3 = (value: string | null) => {
        setThirdValue(value)
    }
    const handleChange4 = (value: string) => {
        setFourValue(value)
    }
    const handleChange5 = (value: string) => {
        setFiveValue(value)
    }
    const handleChange6 = (value: number) => {
        setSixValue(value)
    }


    return <LayoutExamples>
        <Select
            options={listOption1}
            selectedValue={value}
            onChange={handleChange1}
            placeholder="Select one"
            label={{text:"Select with label",}}
        />
        <Select
            options={listOption2}
            selectedValue={secondValue}
            onChange={handleChange2}
            placeholder="Select one"
            errorMessage={"Error message"}
            label={{ text: "With error", }}
        />
        <Select
            options={listOption3}
            selectedValue={thirdValue}
            onChange={handleChange3}
            placeholder="Select one"
            label={{ text: "Send a null value", }}
        />
        <Select
            options={listOption4}
            selectedValue={fourValue}
            onChange={handleChange4}
            placeholder="Select one"
            label={{ text: "With option selected", }}
        />
        <Select
            options={listOption5}
            selectedValue={fiveValue}
            onChange={handleChange5}
            icon={InfoIcon}
            label={{ text: "Without placeholder and icon", }}
        />
        <Select
            options={listOption6}
            selectedValue={sixValue}
            onChange={handleChange6}
            loading={true}
            label={{ text: "With loading state", }}
        />
        <Select
            options={listOption6}
            selectedValue={sixValue}
            onChange={handleChange6}
            disabled={true}
            label={{ text: "With disabled state", }}
        />
    </LayoutExamples>
}

export default SelectShowCaseDetail