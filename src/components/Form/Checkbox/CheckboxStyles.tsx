import styled from "styled-components"
import { colors } from "../../../globalStyles/theme"

const Container = styled.span`
    display: flex;
`

const Input = styled.input`
    position: absolute;
    opacity: 0;
    width: 16px;
    height: 16px;

    &:focus + span {
        //focus styles
    }

    &:checked + span {
        background: ${colors.primary};
        border: 1px solid ${colors.common.black};
    }

    &:disabled + span, &:disabled:checked + span {
        opacity:.5;
        cursor:not-allowed
    }

`

const Check = styled.span`
    position: relative;
    cursor: pointer;
    width: 16px;
    height: 16px;
    border: none;
    border: 1px solid ${colors.common.gray};
    margin-right: 8px;
    background: ${colors.common.white};
    transition: ease 0.2s;

    &:hover {
        //hover styles
    }
`

const Tick = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;   
    height: 100%;
    width:8px;
    margin: 0 auto;
   
   svg{
       width: 100%;
       height: 100%;
   }
`

export const CheckboxStyled = {
    Container,
    Input,
    Check,
    Tick,
}
