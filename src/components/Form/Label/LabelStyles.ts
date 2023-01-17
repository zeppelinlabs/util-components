import styled, { css } from "styled-components"
import { CustomLabelStyles } from "./Label"
import { thp, } from "../../../styles/themeHelpers"
import { FontsTokens } from "../../../styles/designTokens/fontsTokens"
import { UiTokens } from "../../../styles/designTokens/uiTokens"

type PropsStyled = {
    customStyles?: CustomLabelStyles,
    disabled?: boolean,
}

const Label = styled.label<PropsStyled>`
    display: flex;
    flex-flow: column;
    gap: ${UiTokens.spacing.size8};
    width: 100%;
    font-size: 1.6rem;
    color: ${({ disabled, }) => (disabled
        ? thp.base.level500._
        : thp.base.level1000._
    )};

    ${({ disabled, }) => (disabled && css`
        cursor: not-allowed;
        > *{
            cursor: not-allowed;
        }
    `)}
`

const LabelText = styled.span<PropsStyled>`
    display: flex;
    width: 100%;
    align-items: center;
    font-size: 1.4rem;
    gap: 8px;
    text-align: ${({ customStyles, }) => (customStyles?.textAlign
        ? customStyles.textAlign
        : "left"
    )};
    font-weight: ${({ customStyles, }) => (customStyles?.textWeight
        ? FontsTokens.weights.Primary[customStyles.textWeight]
        : FontsTokens.weights.Primary.medium
    )};
    ${({ disabled, customStyles, }) => (!disabled && customStyles?.textColor && css`
        color:${thp.base[customStyles.textColor]._};
    `)};
`

const Content = styled.span`
    min-height: 40px;
    display: grid;
    align-items: center;
`

const Required = styled.span`
    color: ${thp.system.error.level500._};
`

const Tag = styled.span`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 2px 5px;
    border-radius: ${UiTokens.borderRadius.size4};
    font-size: 1rem;
    line-height: 1.2;
    color: ${thp.base.level1000._};
    background-color: ${thp.base.level200._};
`

const ContentInfoIcon = styled.span`
    width: 14px;
    height: 14px;
    display: flex;
    align-content: center;
    justify-content: center;

    svg{
        width: 100%;
        height: 100%;
        path{
            fill: currentColor;
        }
    }
`

export const LabelStyled = {
    Label,
    Required,
    LabelText,
    Content,
    Tag,
    ContentInfoIcon,
}