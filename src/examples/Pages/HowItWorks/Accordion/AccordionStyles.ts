import styled from "styled-components"
import { UiTokens } from "../../../../styles/designTokens/uiTokens"

const AccordionHeader = styled.div`
    display: grid;  
    gap: ${UiTokens.spacing.size16};
    align-items: center;
    grid-template-columns: 1fr 16px;
    row-gap: inherit;
    cursor: pointer;
`

const AccordionContent = styled.div<{ hasMarginBottom?: boolean, }>`
    display: flex;
    flex-direction: column;
    gap: inherit;
    margin-bottom: ${({ hasMarginBottom, }) => (hasMarginBottom ? "100px" : 0)};
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