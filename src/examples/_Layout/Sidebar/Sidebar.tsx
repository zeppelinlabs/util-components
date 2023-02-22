import React, { useState } from "react"
import { Paths } from "../../Paths"
import { SidebarStyled } from "./SidebarSyled"
import { ReactComponent as ArrowDown } from "../../../assets/icons/arrow-down.svg"
import { ReactComponent as ArrowTop } from "../../../assets/icons/arrow-top.svg"
import { ReactComponent as GithubIcon } from "../../../assets/examples/github.svg"
import { ReactComponent as FigmaIcon } from "../../../assets/examples/figma.svg"


const ComponentsButtonList = (props: { onNavigate?: () => void, }) => {

    return <SidebarStyled.Navigation>
        <SidebarStyled.Link onClick={props.onNavigate} to={Paths.Button}>
            Button
        </SidebarStyled.Link>
        <SidebarStyled.Link onClick={props.onNavigate} to={Paths.Input}>
            Input
        </SidebarStyled.Link>
        <SidebarStyled.Link onClick={props.onNavigate} to={Paths.Select}>
            Select
        </SidebarStyled.Link>
        <SidebarStyled.Link onClick={props.onNavigate} to={Paths.Checkbox}>
            Checkbox
        </SidebarStyled.Link>
        <SidebarStyled.Link onClick={props.onNavigate} to={Paths.RadioButton}>
            Radio
        </SidebarStyled.Link>
        <SidebarStyled.Link onClick={props.onNavigate} to={Paths.Switch}>
            Switch
        </SidebarStyled.Link>
        <SidebarStyled.Link onClick={props.onNavigate} to={Paths.Label}>
            Label
        </SidebarStyled.Link>
        <SidebarStyled.Link onClick={props.onNavigate} to={Paths.Tag}>
            Tag
        </SidebarStyled.Link>
        <SidebarStyled.Link onClick={props.onNavigate} to={Paths.Tooltip}>
            Tooltip
        </SidebarStyled.Link>
    </SidebarStyled.Navigation>
}

const ButtonList = (props: { onNavigate?: () => void, }) => {
    const [isAccordionOpen, setIsAccordionOpen,] = useState(false)

    return <>
        <SidebarStyled.AccordionLabel
            isOpen={isAccordionOpen}
            onClick={() => setIsAccordionOpen(!isAccordionOpen)}
        >
            Components
            <SidebarStyled.WrapperArrow>
                {isAccordionOpen
                    ? <ArrowTop />
                    : <ArrowDown />}
            </SidebarStyled.WrapperArrow>
            <SidebarStyled.AccordionContent isOpen={isAccordionOpen}>
                <ComponentsButtonList onNavigate={props.onNavigate} />
            </SidebarStyled.AccordionContent>
        </SidebarStyled.AccordionLabel>
        <SidebarStyled.NavListLink to={Paths.HowItWorks} onClick={props.onNavigate}>
            How it works
        </SidebarStyled.NavListLink>
        <SidebarStyled.NavLinkAnchor href={Paths.AboutUs} target="_blank">
            About us
        </SidebarStyled.NavLinkAnchor>
        <SidebarStyled.NavLinkAnchor href={Paths.Github} target="_blank">
            <SidebarStyled.NavLinkIcon>
                <GithubIcon />
            </SidebarStyled.NavLinkIcon>
            Github
        </SidebarStyled.NavLinkAnchor>
        <SidebarStyled.NavLinkAnchor href={Paths.Figma} target="_blank">
            <SidebarStyled.NavLinkIcon>
                <FigmaIcon />
            </SidebarStyled.NavLinkIcon>
            Figma
        </SidebarStyled.NavLinkAnchor>
    </>
}

export const SidebarDesktop = () => {
    return <SidebarStyled.ContainerNavigation>
        <ComponentsButtonList />
    </SidebarStyled.ContainerNavigation >
}

type Props = {
    isOpen: boolean,
    onNavigate?: () => void,
}

export const Sidebar = (props: Props) => {
    return <SidebarStyled.OverlayMenu isOpen={props.isOpen}>
        <SidebarStyled.Navigation>
            <ButtonList onNavigate={props.onNavigate} />
        </SidebarStyled.Navigation>
    </SidebarStyled.OverlayMenu>
}

