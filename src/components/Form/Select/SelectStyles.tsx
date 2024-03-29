import styled, { css } from "styled-components"
import { FontsTokens } from "../../../styles/designTokens/fontsTokens"
import { UiTokens } from "../../../styles/designTokens/uiTokens"
import { thp } from "../../../styles/themeHelpers"
import { CustomSelectStyles } from "./Select"

type SelectProps = {
    errorMessage?: string | null,
    disabled?: boolean,
    loading?: boolean,
    withIcon?: boolean,
    customStyles?: CustomSelectStyles,
}


const Container = styled.div`
    display: grid;
`

const Select = styled.select<SelectProps>`
    width: 100%;
    position: relative;
    outline:none;
    font-size: 1.6rem;
    background-color: transparent;
    border: none;
    color: ${({ value, }) => (value ? "inherit" : thp.base.level1000._)};
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    min-height: 36px;
    line-height: 1;
    cursor: pointer;
    border-radius: ${UiTokens.borderRadius.size8};
    padding: ${({ withIcon, }) => (withIcon
        ? "8px 40px"
        : "8px 40px 8px 16px"
    )};
    ${({ customStyles, }) => (customStyles?.textWeight && css`
        font-weight: ${FontsTokens.weights.Primary[customStyles.textWeight]};
    `)}

    &:disabled {
        cursor: not-allowed;
    }

    &:focus {
        box-shadow: 0 0 0 3px ${thp.primary.level200._};
    }

    &:hover {
        //hover styles
    }
`

const Wrapper = styled.div<SelectProps>`
    width: 100%;
    display: flex;
    background: ${thp.base.level0._};
    border-width: 1px;
    border-style: solid;
    position: relative;
    border-color: ${thp.base.level200._};
    border-radius: ${UiTokens.borderRadius.size8};
    color: ${thp.base.level1000._};

    ${({ errorMessage, }) => (errorMessage && css`
        border-color: ${thp.system.error.level500._};
        color: ${thp.system.error.level500._};
    `)}

    ${({ disabled, }) => (disabled && css`
        background-color: ${thp.base.level100._};
        border-color: ${thp.base.level200._};
        color: ${thp.base.level300._};
    `)}
`

const iconContainerBase = css`
    width: 16px;
    height: 16px;
    top: 50%;
    translate: 0 -50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
`

const WrapperIcon = styled.div`
    ${iconContainerBase};
    left: 13px;
`

const WrapperArrow = styled.div`
    ${iconContainerBase};
    color: ${thp.base.level1000._};
    right: 12px;
    padding: 2px;
`

const Option = styled.option<{
    isOptionHidden?: boolean,
}>`
    ${({ isOptionHidden, }) => (isOptionHidden && css`
        display: none;
    `)}
`

export const SelectStyled = {
    Container,
    Select,
    Wrapper,
    WrapperIcon,
    WrapperArrow,
    Option,
}