/* eslint-disable max-lines-per-function */
import React, { useState } from "react"
import Checkbox, { ContentCheckboxPosition } from "../../../components/Form/Checkbox/Checkbox"
import CheckboxGroupShowCase from "./CheckboxGroupShowcase"
import LayoutDescriptionComponent
    from "../../Layout/LayoutDescriptionComponent/LayoutDescriptionComponent"

const CheckboxShowCaseDetail = () => {
    const [value, setValue,] = useState(false)

    const handleOnChange = (value: boolean) => setValue(value)

    return <LayoutDescriptionComponent>
        <Checkbox
            value={value}
            onChange={handleOnChange}
        />
        <hr />
        <Checkbox
            value={false}
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
            errorMessage="Error message"
        >
            With error message
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
    </LayoutDescriptionComponent>
}

export default CheckboxShowCaseDetail