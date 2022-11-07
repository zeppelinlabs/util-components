import React from "react"
import { LayoutHomeStyled } from "./LayoutHomeStyled"

type Props = {
    children: React.ReactNode,
}

const LayoutHome = (props:Props) => {
    return <LayoutHomeStyled.Wrapper>
        {props.children}
    </LayoutHomeStyled.Wrapper>
}

export default LayoutHome