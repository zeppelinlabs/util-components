/* eslint-disable max-lines-per-function */
import React from "react"
import LayoutHome from "../styles/Layout/LayoutHome/LayoutHome"
import { Link } from "react-router-dom"
import { Paths } from "./Paths"
import ButtonShowCaseDetailListItem from "./Form/ButtonShowCase/ButtonShowCaseListItem"
import TagShowCaseDetailListItem from "./TagShowCase/TagShowCaseListItem"

const Home = () => {
    return (
        <LayoutHome>
            <Link to={Paths.Button}>Button</Link>
            <ButtonShowCaseDetailListItem />
            <hr />

            <Link to={Paths.Tag}>Tag</Link>
            <TagShowCaseDetailListItem />
            <hr />
        </LayoutHome>
    )
}

export default Home