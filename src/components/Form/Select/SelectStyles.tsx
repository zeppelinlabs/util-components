import styled, { css } from "styled-components"
import { thp } from "../../../styles/themeHelpers"

type SelectProps = {
    errorMessage?: string | null,
    disabled?: boolean,
    withIcon?:boolean,
}

const Select = styled.select<SelectProps>`
    width: max-content;
    position: relative;
    outline:none;
    font-size: 1.6rem;
    background-color: transparent;
    border: none;
    color: inherit;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    min-height: 36px;
    cursor: pointer;
    padding: ${p => (p.withIcon
        ? "8px 36px"
        : "8px 36px 8px 16px"
    )};

    &:disabled {
        cursor: not-allowed;
    }

    &:focus {
        box-shadow: 0 0 0 4px ${thp.system(c => c.focus)};
    }

    &:hover {
        //hover styles
    }
`

const Wrapper = styled.div<SelectProps>`
    width: max-content;
    display: flex;
    background: ${thp.common(c => c.white)};
    border-width: 1px;
    border-style: solid;
    position: relative;
    border-color: ${thp.neutral(c => c.level50)};
    color: ${thp.common(c => c.black)};

    ${p => (p.errorMessage && css`
        border-color: ${thp.system(c => c.critical)};
        color: ${thp.system(c => c.critical)};
    `)}

    ${p => (p.disabled && css`
        border-color: ${thp.neutral(c => c.level10)};
        color: ${thp.neutral(c => c.level10)};
    `)}
`

const iconContainerBase = css`
    width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    padding: 10px;
    img,
    svg{
        width: 100%;
        height: 100%;
        object-fit: contain;
        path{
            fill: currentColor;
        }
    }
`

const WrapperIcon = styled.div`
    ${iconContainerBase};
`

const WrapperArrow = styled.div`
    ${iconContainerBase};
    right: 0;
`

const Option = styled.option<{
    isOptionHidden?: boolean,
}>`
    ${p => (p.isOptionHidden && css`
        display: none;
    `)}
`

export const SelectStyled = {
    Select,
    Wrapper,
    WrapperIcon,
    WrapperArrow,
    Option,
}