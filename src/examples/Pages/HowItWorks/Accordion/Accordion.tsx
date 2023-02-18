import React, { useState } from "react"
import { ReactComponent as ArrowDown } from "../../../../assets/icons/arrow-down.svg"
import { ReactComponent as ArrowTop } from "../../../../assets/icons/arrow-top.svg"
import AccordionStyles from "./AccordionStyles"

type Props = {
    children: React.ReactNode,
    label: React.ReactNode,
    hasMarginBottom?: boolean,
}

const Accordion = (props: Props) => {
    const [isOpen, setIsOpen,] = useState(false)

    return <AccordionStyles.AccordionContainer>
        <AccordionStyles.AccordionHeader onClick={() => setIsOpen(!isOpen)}>
            {props.label}
            {isOpen
                ? <ArrowTop />
                : <ArrowDown />
            }
        </AccordionStyles.AccordionHeader>
        {isOpen && (
            <AccordionStyles.AccordionContent hasMarginBottom={props.hasMarginBottom}>
                {props.children}
            </AccordionStyles.AccordionContent>
        )}
    </AccordionStyles.AccordionContainer>
}

export default Accordion