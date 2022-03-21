import styled from "styled-components"
import { colors } from "../../../globalStyles/theme"


const Container = styled.div`
    display: flex;
    align-items: center;
    color: ${colors.common.gray};
    position:relative;
`

const Radio = styled.span`
    display: inline-flex;
    margin-right: 8px;
    position: relative;
    cursor: pointer;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 1px solid ${colors.common.gray};
    transition: ease-in-out 0.2s;
    position: relative;
    overflow: hidden;
    align-content: center;
    align-items: center;
    justify-content: center;
    justify-items: center;

    &:hover {
        //hover styles
    }

    &:before{
        content: "";
        width: 0px;
        height: 0px;
        border-radius: 50%;
        transition: 0.2s;
        box-sizing: border-box;
    }

`

const Input = styled.input`
    position:absolute;
    top: 9px;
    opacity: 0;

    &:checked + ${Radio} {
        background: ${colors.primary};
        border: none;
        &:hover{
            //hover styles when checked
        }

        &:before{
            width: 6px;
            height: 6px;
            background: ${colors.common.white};
        }
    }

    &:hover + ${Radio} {
        //hover styles
    }

    &:focus + ${Radio} {
       //focus styles
    }

    &:disabled + ${Radio} {
        //disabled styles
        opacity:.5;
        cursor: not-allowed;
    }

`

export const RadioButtonStyled = {
    Input,
    Radio,
    Container,
}