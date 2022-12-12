/* eslint-disable max-lines-per-function */
import React from "react"
import LayoutHome from "../styles/Layout/LayoutHome/LayoutHome"
import { Link } from "react-router-dom"
import { Paths } from "./Paths"
import ButtonShowCaseDetailListItem from "./ButtonShowCase/ButtonShowCaseListItem"
import TagShowCaseDetailListItem from "./TagShowCase/TagShowCaseListItem"
import SwitchShowCaseDetailListItem from "./Form/SwitchShowCase/SwitchShowCaseListItem"
import TooltipShowCaseDetailListItem from "./TooltipShowCase/TooltipShowCaseListItem"
import CheckboxShowCaseDetailListItem from "./Form/CheckboxShowCase/CheckboxShowCaseListItem"
import LabelShowCaseDetailListItem from "./Form/Label/LabelShowCaseListItem"
import InputShowCaseDetailListItem from "./Form/InputShowCase/InputShowCaseListItem"
import RadioButtonShowCaseDetailListItem
    from "./Form/RadioButtonShowCase/RadioButtonShowCaseListItem"
import SelectShowCaseDetailListItem from "./Form/SelectShowCase/SelectShowCaseDetailListItem"

const Home = () => {
    return (
        <LayoutHome>
            <Link to={Paths.Tag}>Tag</Link>
            <TagShowCaseDetailListItem />
            <hr />

            <Link to={Paths.Tooltip}>Tooltip</Link>
            <TooltipShowCaseDetailListItem />
            <hr />

            <Link to={Paths.Button}>Button</Link>
            <ButtonShowCaseDetailListItem />
            <hr />

            <Link to={Paths.Switch}>Switch</Link>
            <SwitchShowCaseDetailListItem />
            <hr />

            <Link to={Paths.Label}>Label</Link>
            <LabelShowCaseDetailListItem />
            <hr />

            <Link to={Paths.Checkbox}>Checkbox</Link>
            <CheckboxShowCaseDetailListItem />
            <hr />

            <Link to={Paths.RadioButton}>Radio Button</Link>
            <RadioButtonShowCaseDetailListItem />
            <hr />

            <Link to={Paths.Input}>Input</Link>
            <InputShowCaseDetailListItem />
            <hr />

            <Link to={Paths.Select}>Select</Link>
            <SelectShowCaseDetailListItem />
            <hr />

        </LayoutHome>
    )
}

export default Home