import React from "react"
import { GlobalStyled } from "../src/styles/globalStyled"
import { ResetStyled } from "./styles/resetStyled"
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/defaultTheme"
import Home from "./examples/Home"
import { Routes, Route } from "react-router-dom"
import { Paths } from "./examples/Paths"
import ButtonShowCaseDetail from "./examples/ButtonShowCase/ButtonShowCaseDetail"
import TagShowCaseDetail from "./examples/TagShowCase/TagShowCaseDetail"
import SwitchShowCaseDetail from "./examples/Form/SwitchShowCase/SwitchShowCaseDetail"
import TooltipShowCaseDetail from "./examples/TooltipShowCase/TooltipShowCaseDetail"
import LabelShowCaseDetail from "./examples/Form/Label/LabelShowCaseDetail"

const App = () => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <ResetStyled />
            <GlobalStyled />
            <Routes>
                <Route path={Paths.Home} element={
                    <Home />
                } />
                <Route path={Paths.Tag} element={
                    <TagShowCaseDetail />
                } />
                <Route path={Paths.Tooltip} element={
                    <TooltipShowCaseDetail />
                } />
                <Route path={Paths.Button} element={
                    <ButtonShowCaseDetail />
                } />
                <Route path={Paths.Switch} element={
                    <SwitchShowCaseDetail />
                } />
                <Route path={Paths.Label} element={
                    <LabelShowCaseDetail />
                } />
            </Routes>
        </ThemeProvider >
    )
}

export default App
