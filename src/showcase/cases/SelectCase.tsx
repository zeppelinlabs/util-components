import React, { useState } from "react"
import { Link } from "react-router-dom"
import Select from "../../components/Form/Select/Select"
import { Paths } from "../Paths"
import { ShowCaseStyled } from "../ShowCaseStyles"

const SelectCase = () => {
    const [selectedKey, setSelectedValue,] = useState("TEST 1")

    return <ShowCaseStyled.Wrapper>
        <Link to={Paths.home}>Volver</Link>
        <Select
            keyValue={selectedKey}
            options={[
                {
                    key: "TEST 1",
                    text: "option 1",
                },
                {
                    key: "TEST 2",
                    text: "option 2",
                },
            ]}
            onChange={o => setSelectedValue(o.key)}
        />
    </ShowCaseStyled.Wrapper>
}

export default SelectCase