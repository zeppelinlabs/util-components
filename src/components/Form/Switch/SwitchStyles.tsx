import styled from "styled-components"
import { colors } from "../../../globalStyles/theme"

type PropsStyled = {
    disabled?: boolean,
}

const Input = styled.input<PropsStyled>`
    position: absolute;
    opacity: 0;
    width: 38px;
    height: 23px;

    &:checked + span {
        background: ${colors.primary};
        border: 1px solid ${colors.primary};
        &:before {
            left: 100%;
            transform: translateX(-100%);
        }
    }

    &:focus + span {
        //focus styles
    }

    &:hover + span {
        //hover styles
    }

    &:disabled + span, &:disabled:checked + span {
        //disabled styles
        opacity:.5;
        cursor:not-allowed;
    }    

`
const Slider = styled.span`
    display: flex;
    cursor: pointer;
    width: 38px;
    height: 23px;
    border-radius: 100px;
    background:  ${colors.common.gray};
    position: relative;
    transition: ease 0.2s;
    border: 1px solid ${colors.common.black};
    margin-right: 8px;

    &:before{
        content: "";
        position:absolute;
        top: 0;
        left: 0;
        width: 21px;
        height: 21px;
        border-radius: 21px;
        transition: ease 0.2s;
        background: ${colors.common.white};
    }

`

export const SwitchStyled = {
    Input,
    Slider,
}