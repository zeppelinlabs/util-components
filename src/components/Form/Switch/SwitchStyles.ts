import styled, { css } from "styled-components"
import { CustomSwitchStyles } from "./Switch"
import { thp } from "../../../styles/themeHelpers"
import { getFontWeight } from "../../../styles/typographicHelper"

type Props = {
    customStyles?: CustomSwitchStyles,
}

const Wrapper = styled.label<Props>`
    display: flex;
    gap: 10px;
    flex-flow: ${p => (p.customStyles?.contentPosition
        ? p.customStyles?.contentPosition
        : "row"
    )};
    align-items: ${p => (p.customStyles?.contentAlign
        ? p.customStyles?.contentAlign
        : "center"
    )};
    width: fit-content;
`

const Slider = styled.span`
    display: flex;
    cursor: pointer;
    width: 38px;
    min-width: 38px;
    max-width: 38px;
    height: 23px;
    max-height: 23px;
    min-height: 23px;
    border-radius: 100px;
    position: relative;
    transition: ease 0.3s;
    background-color:  ${thp.base(c => c.level500)};
    border: 1px solid ${thp.base(c => c.level900)};

    &:before{
        content: "";
        position:absolute;
        top: 0;
        left: 0;
        width: 21px;
        height: 21px;
        border-radius: 21px;
        transition: ease 0.2s;
        background: ${thp.base(c => c.level50)};
    };
`

const Input = styled.input<Props>`
    position: absolute;
    opacity: 0;
    width: 38px;
    height: 23px;

    &:checked + ${Slider} {
        background-color: ${thp.primary(c => c.level500)};
        border: 1px solid ${thp.primary(c => c.level500)};
        &:before {
            left: 100%;
            transform: translateX(-100%);
        };
    };

    &:focus + ${Slider} {
        box-shadow: 0 0 0 4px ${thp.system(c => c.success.level500)};
    };

    &:hover + ${Slider} {
        //hover styles
    };

    &:disabled + ${Slider}, &:disabled:checked + ${Slider} {
        opacity:.5;
        cursor:not-allowed;
    };

`

const ChildrenWrapper = styled.div<Props>`
    ${p => (p.customStyles?.textColor && css`
        color: ${p.customStyles?.textColor};
    `)};
    ${p => (p.customStyles?.textAlign && css`
        text-align: ${p.customStyles?.textAlign};
    `)};
    ${p => (p.customStyles?.textWeight
        && getFontWeight(p.customStyles?.textWeight)
    )};
`

export const SwitchStyled = {
    Wrapper,
    Input,
    Slider,
    ChildrenWrapper,
}