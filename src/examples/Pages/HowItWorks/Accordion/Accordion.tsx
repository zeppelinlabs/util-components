import React, { useState } from "react"
import { ReactComponent as ArrowDown } from "../../../../assets/icons/arrow-down.svg"
import { ReactComponent as ArrowTop } from "../../../../assets/icons/arrow-top.svg"
import AccordionStyles from "./AccordionStyles"

export enum AccordionVariant {
    Primary = "PRIMARY",
    Secondary = "SECONDARY",
}

export type CustomAccordionStyles = {
    accordionVariant?: AccordionVariant,
}

type Props = {
    children: React.ReactNode,
    label: React.ReactNode,
    hasMarginBottom?: boolean,
    customStyles?: CustomAccordionStyles,
}

const Accordion = (props: Props) => {
    const [isOpen, setIsOpen,] = useState(false)

    return <AccordionStyles.AccordionContainer>
        <AccordionStyles.AccordionHeader
            customStyles={props.customStyles}
            onClick={() => setIsOpen(!isOpen)}>
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