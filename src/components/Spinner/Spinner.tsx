import React from "react"
import { SpinerStyled } from "./SpinnerStyles"
import { ReactComponent as SpinnerIcon } from "../../assets/spinner.svg"

export enum SpinnerSize {
    small = "SMALL",
    medium = "MEDIUM",
    large = "LARGE"

}

export type Props = {
    size: SpinnerSize,
}

const Spinner = (props: Props) => {
    return (
        <SpinerStyled.Container size={props.size}>
            <SpinnerIcon />
        </SpinerStyled.Container>
    )
}

export default Spinner
