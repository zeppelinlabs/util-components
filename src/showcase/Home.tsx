/* eslint-disable max-lines-per-function */
import React from "react"
import { Link } from "react-router-dom"
import { Paths } from "./Paths"
import { ShowCaseStyled } from "./ShowCaseStyles"

const Home = () => {
    return (
        <ShowCaseStyled.Wrapper>
            <Link to={Paths.select}>Select</Link>
        </ShowCaseStyled.Wrapper>
    )
}

export default Home