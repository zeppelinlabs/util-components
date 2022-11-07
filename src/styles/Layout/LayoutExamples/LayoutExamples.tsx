import React from "react"
import { Link } from "react-router-dom"
import { Paths } from "../../../examples/Paths"
import { LayoutExamplesStyled } from "./LayoutExamplesStyled"

type Props = {
    children: React.ReactNode,
}

const LayoutExamples = (props:Props) => {
    return <LayoutExamplesStyled.Wrapper>
        <Link to={Paths.Home}>Regresar</Link>

        {props.children}
    </LayoutExamplesStyled.Wrapper>
}

export default LayoutExamples