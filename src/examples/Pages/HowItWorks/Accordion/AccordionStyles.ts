import styled, { css } from "styled-components"
import { UiTokens } from "../../../../styles/designTokens/uiTokens"
import { thp } from "../../../../styles/themeHelpers"
import { AccordionVariant, CustomAccordionStyles } from "./Accordion"


const getButtonVariant = (variant: AccordionVariant) => {
    const ButtonByCase = {
        [AccordionVariant.Primary]: (PrimaryAccordion),
        [AccordionVariant.Secondary]: (SecondaryAccordion),
    }
    return ButtonByCase[variant]
}

const PrimaryAccordion = () => css`
    background-color: transparent;
`

const SecondaryAccordion = () => css`
    background-color:  ${thp.primary.level300._};
    color: ${thp.base.level1000._};
    padding: ${UiTokens.spacing.size2};
`

const AccordionHeader = styled.div<{ customStyles?: CustomAccordionStyles, }>`
    display: grid;  
    gap: ${UiTokens.spacing.size16};
    align-items: center;
    grid-template-columns: 1fr 16px;
    row-gap: inherit;
    cursor: pointer;
    ${({ customStyles, }) => (getButtonVariant(customStyles?.accordionVariant
    || AccordionVariant.Primary))}
`

const AccordionContent = styled.div<{ hasMarginBottom?: boolean, }>`
    display: flex;
    flex-direction: column;
    gap: inherit;
    margin-bottom: ${({ hasMarginBottom, }) => (hasMarginBottom ? "100px" : 0)};
    width: 100%;
`

const AccordionContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: inherit;
`

const AccordionStyles = {
    AccordionHeader,
    AccordionContent,
    AccordionContainer,
}

export default AccordionStyles