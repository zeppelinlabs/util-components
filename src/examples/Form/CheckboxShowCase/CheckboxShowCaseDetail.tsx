/* eslint-disable max-lines-per-function */
import React, { useState } from "react"
import Checkbox, { ContentCheckboxPosition } from "../../../components/Form/Checkbox/Checkbox"
import LayoutExamples from "../../../styles/Layout/LayoutExamples/LayoutExamples"

const CheckboxShowCaseDetail = () => {
    const [value, setValue,] = useState(false)

    return <LayoutExamples>
        <Checkbox
            value={value}
            onChange={(value) => setValue(value)}
        />
        <hr />
        <Checkbox
            value={value}
            onChange={(value) => setValue(value)}
            disabled={true}
        />
        <hr />
        <Checkbox
            value={value}
            onChange={(value) => setValue(value)}
            accessibility={{ autoFocus: true, }}
            customStyles={{ boxColor: "#9b59b6", }}
        >
            With text and custom box color
        </Checkbox>
        <hr />
        <Checkbox
            value={value}
            onChange={(value) => setValue(value)}
            customStyles={{
                contentPosition: ContentCheckboxPosition.Left,
            }}
        >
            With left text or content
        </Checkbox>
        <hr />
    </LayoutExamples>
}

export default CheckboxShowCaseDetail