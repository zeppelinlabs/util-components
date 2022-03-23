import styled, { css } from "styled-components"
import { colors } from "../../../globalStyles/theme"
import pointer_down from "../../../assets/pointer_down.svg"

type SelectProps = {
    errorMessage?: string | null,
}

const Select = styled.select<SelectProps>`
    background: ${colors.common.white};
    border: 1px solid ${colors.common.gray};
    box-sizing: border-box;
    padding: 8px 32px 8px 12px;
    outline:none;
    font-size: 1.6rem;
    background: white url(${pointer_down});
    background-repeat: no-repeat;
    background-position: calc(100% - 12px) center;
    background-size: 12px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-color: ${props => (props.errorMessage && colors.system.critical)};

    &::-ms-expand {
        display: none;
    }

    &:disabled {
        //disabled styles
        cursor: not-allowed;
        opacity:.5;
    }

    &:focus {
        //focus styles
    }

    &:hover {
        //hover styles
    }
`

const OptionPlaceholder = styled.option`
    display: none;
`
export const SelectStyled = {
    Select,
    OptionPlaceholder,
}