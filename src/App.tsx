import React from "react"
// import { GlobalStyled } from "../src/styles/globalStyled"
import { ResetStyled } from "./styles/resetStyled"
import styled, { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/defaultTheme"
// import Home from "./examples/Home"
import { Routes, } from "react-router-dom"
import { uith } from "./styles/themeHelpers"
// import { Paths } from "./examples/Paths"
// import ButtonShowCaseDetail from "./examples/ButtonShowCase/ButtonShowCaseDetail"
// import TagShowCaseDetail from "./examples/TagShowCase/TagShowCaseDetail"
// import SwitchShowCaseDetail from "./examples/Form/SwitchShowCase/SwitchShowCaseDetail"
// import TooltipShowCaseDetail from "./examples/TooltipShowCase/TooltipShowCaseDetail"
// import CheckboxShowCaseDetail from "./examples/Form/CheckboxShowCase/CheckboxShowCaseDetail"
// import LabelShowCaseDetail from "./examples/Form/Label/LabelShowCaseDetail"
// import InputShowCaseDetail from "./examples/Form/InputShowCase/InputShowCaseDetail"
// import RadioButtonShowCaseDetail
//     from "./examples/Form/RadioButtonShowCase/RadioButtonShowCaseDetail"
// import SelectShowCaseDetail from "./examples/Form/SelectShowCase/SelectShowCaseDetail"

const Aa = styled.a<{ s: "size4" | "size0", }>`
    border: ${({ s, }) => uith.borderRadius[s]._}
`

const App = () => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <ResetStyled />
            <Aa s="size0" >aaa</Aa>
        </ThemeProvider >
    )
}

export default App
