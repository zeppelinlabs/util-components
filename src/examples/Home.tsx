/* eslint-disable max-lines-per-function */
import React from "react"
import HomePage from "./_Layout/HomePage/HomePage"
import { HomePageStyled } from "./_Layout/HomePage/HomePageStyled"
import ButtonShowCaseDetailListItem from "./ButtonShowCase/ButtonShowCaseListItem"
import TagShowCaseDetailListItem from "./TagShowCase/TagShowCaseListItem"
import SwitchShowCaseDetailListItem from "./Form/SwitchShowCase/SwitchShowCaseListItem"
import TooltipShowCaseDetailListItem from "./TooltipShowCase/TooltipShowCaseListItem"
import CheckboxShowCaseDetailListItem from "./Form/CheckboxShowCase/CheckboxShowCaseListItem"
import InputShowCaseDetailListItem from "./Form/InputShowCase/InputShowCaseListItem"
import RadioButtonShowCaseDetailListItem
    from "./Form/RadioButtonShowCase/RadioButtonShowCaseListItem"
import SelectShowCaseDetailListItem from "./Form/SelectShowCase/SelectShowCaseDetailListItem"
import { useWindowSize } from "../hooks/useWindowsSize"
import { size } from "../styles/mediaQueries"

const Home = () => {
    const windowSize = useWindowSize()

    return (
        <HomePage>
            <HomePageStyled.ContainerComponent>
                <CheckboxShowCaseDetailListItem />
            </HomePageStyled.ContainerComponent>
            <HomePageStyled.ContainerComponent>
                <ButtonShowCaseDetailListItem />
            </HomePageStyled.ContainerComponent>
            {windowSize.width >= size.desktop && <>
                <HomePageStyled.ContainerComponent>
                    <RadioButtonShowCaseDetailListItem />
                </HomePageStyled.ContainerComponent>
                <HomePageStyled.ContainerComponent>
                    <TagShowCaseDetailListItem />
                </HomePageStyled.ContainerComponent>
                <HomePageStyled.ContainerComponent>
                    <InputShowCaseDetailListItem />
                </HomePageStyled.ContainerComponent>
                <HomePageStyled.ContainerComponent>
                    <SelectShowCaseDetailListItem />
                </HomePageStyled.ContainerComponent>
            </>}
            <HomePageStyled.ContainerComponent>
                <TooltipShowCaseDetailListItem />
            </HomePageStyled.ContainerComponent>
            <HomePageStyled.ContainerComponent>
                <SwitchShowCaseDetailListItem />
            </HomePageStyled.ContainerComponent>
        </HomePage>
    )
}

export default Home