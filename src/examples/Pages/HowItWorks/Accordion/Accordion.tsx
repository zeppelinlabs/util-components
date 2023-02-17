import React from "react"
import AccordionStyles from "./AccordionStyles"
import { ReactComponent as ArrowDown } from "../../../../assets/icons/arrow-down.svg"

const onClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation()
}

const Accordion = (props: { label: React.ReactNode, children: React.ReactNode, }) => {
    return <AccordionStyles.AccordionLabel>
        <input type="checkbox" />
        {props.label}
        <ArrowDown />
        <AccordionStyles.AccordionContent onClick={onClick}>
            {props.children}
        </AccordionStyles.AccordionContent>
    </AccordionStyles.AccordionLabel>
}

export default Accordion