import React from "react"
import { GlobalStyled } from "../src/styles/globalStyled"
import { ResetStyled } from "./styles/resetStyled"
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/defaultTheme"
import Home from "./showcase/Home"
import { Routes, Route } from "react-router-dom"
import { Paths } from "./showcase/Paths"
import SelectCase from "./showcase/cases/SelectCase"

const App = () => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <ResetStyled />
            <GlobalStyled />
            <Routes>
                <Route path={Paths.home} element={
                    <Home />
                } />
                <Route path={Paths.select} element={
                    <SelectCase />
                } />
            </Routes>
        </ThemeProvider >
    )
}

export default App
