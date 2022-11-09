/* eslint-disable max-lines-per-function */
import React, { useState } from "react"
import Checkbox, { ContentCheckboxPosition } from "../../../components/Form/Checkbox/Checkbox"
import LayoutExamples from "../../../styles/Layout/LayoutExamples/LayoutExamples"
import CheckboxGroupShowCase from "./CheckboxGroupShowcase"

const CheckboxShowCaseDetail = () => {
    const [value, setValue,] = useState(false)

    const handleOnChange = (value: boolean) => setValue(value)

    return <LayoutExamples>
        <Checkbox
            value={value}
            onChange={handleOnChange}
        />
        <hr />
        <Checkbox
            value={value}
            onChange={handleOnChange}
            disabled={true}
        />
        <hr />
        <Checkbox
            value={value}
            onChange={handleOnChange}
            accessibility={{ autoFocus: true, }}
            customStyles={{ checkBoxColor: "#9b59b6", }}
        >
            With text and custom box color
        </Checkbox>
        <hr />
        <Checkbox
            value={value}
            onChange={handleOnChange}
            customStyles={{
                contentPosition: ContentCheckboxPosition.Left,
            }}
        >
            With left text or content
        </Checkbox>
        <hr />
        <CheckboxGroupShowCase />
        <hr />
    </LayoutExamples>
}

export default CheckboxShowCaseDetail