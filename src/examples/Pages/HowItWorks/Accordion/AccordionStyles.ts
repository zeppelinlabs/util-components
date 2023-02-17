import styled from "styled-components"
import { UiTokens } from "../../../../styles/designTokens/uiTokens"
import { thp } from "../../../../styles/themeHelpers"

const AccordionContent = styled.div`
	overflow: hidden;
	max-height: 0;
	transition: max-height .1s;
    grid-column: span 2;
    display: flex;
    flex-direction: column;
`

const AccordionLabel = styled.label`
	color: ${thp.base.level0._};
	display: grid;
	grid-template-columns: 1fr 16px;
	cursor: pointer;
    input {
        display: none;
    }
    :has(input:checked) {
        gap: inherit;
    }
    input:checked ~ svg {
        transform: rotate(180deg);
    }
    input:checked ~ ${AccordionContent} {
        gap: inherit;
        max-height: 100%;
		transition: max-height .3s ease-out;
    }
`

const AccordionStyles = {
    AccordionContent,
    AccordionLabel,
}

export default AccordionStyles