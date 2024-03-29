/* eslint-disable max-lines-per-function */
import React from "react"
import { GlobalStyled } from "../src/styles/globalStyled"
import { ResetStyled } from "./styles/resetStyled"
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/defaultTheme"
import Home from "./examples/Pages/Home/Home"
import { Routes, Route, Navigate } from "react-router-dom"
import { Paths } from "./examples/Paths"
import ButtonShowCaseDetail from "./examples/ButtonShowCase/ButtonShowCaseDetail"
import TagShowCaseDetail from "./examples/TagShowCase/TagShowCaseDetail"
import SwitchShowCaseDetail from "./examples/Form/SwitchShowCase/SwitchShowCaseDetail"
import TooltipShowCaseDetail from "./examples/TooltipShowCase/TooltipShowCaseDetail"
import CheckboxShowCaseDetail from "./examples/Form/CheckboxShowCase/CheckboxShowCaseDetail"
import LabelShowCaseDetail from "./examples/Form/Label/LabelShowCaseDetail"
import InputShowCaseDetail from "./examples/Form/InputShowCase/InputShowCaseDetail"
import RadioButtonShowCaseDetail
    from "./examples/Form/RadioButtonShowCase/RadioButtonShowCaseDetail"
import SelectShowCaseDetail from "./examples/Form/SelectShowCase/SelectShowCaseDetail"
import Header from "./examples/_Layout/Header/Header"
import Footer from "./examples/_Layout/Footer/Footer"
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"
import { FontSrc } from "./fonts/fontsSrc"
import HowItWorksDesign from "./examples/Pages/HowItWorks/Tabs/HowItWorksDesign"
import HowItWorksDevelop from "./examples/Pages/HowItWorks/Tabs/HowItWorksDevelop"

const App = () => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <FontSrc />
            <ResetStyled />
            <GlobalStyled />
            <ToastContainer />
            <Header />
            <Routes>
                <Route path={Paths.Home} element={
                    <Home />
                } />
                <Route path={Paths.HowItWorksDesign || Paths.HowItWorks} element={
                    <HowItWorksDesign />
                } />
                <Route path={Paths.HowItWorksDevelop} element={
                    <HowItWorksDevelop />
                } />
                <Route path={Paths.Components} element={
                    <Navigate to={Paths.Button} />
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
                <Route path={Paths.Checkbox} element={
                    <CheckboxShowCaseDetail />
                } />
                <Route path={Paths.RadioButton} element={
                    <RadioButtonShowCaseDetail />
                } />
                <Route path={Paths.Input} element={
                    <InputShowCaseDetail />
                } />
                <Route path={Paths.Select} element={
                    <SelectShowCaseDetail />
                } />
            </Routes>
            <Footer />
        </ThemeProvider >
    )
}

export default App