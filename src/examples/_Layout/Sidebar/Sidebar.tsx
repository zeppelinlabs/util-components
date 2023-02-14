import React, { useState } from "react"
import { Paths } from "../../Paths"
import { SidebarStyled } from "./SidebarSyled"
import { ReactComponent as ArrowDown } from "../../../assets/icons/arrow-down.svg"
import { ReactComponent as ArrowTop } from "../../../assets/icons/arrow-top.svg"
import { ReactComponent as GithubIcon } from "../../../assets/examples/github.svg"
import { ReactComponent as FigmaIcon } from "../../../assets/examples/figma.svg"


const ComponentsButtonList = (props: { onNavigate?: () => void, }) => {

    const handleOnClick = () => {
        setTimeout(() => { window.scrollTo(0, 0) }, 100)
        props.onNavigate && props.onNavigate()
    }

    return <SidebarStyled.Navigation>
        <SidebarStyled.Link onClick={handleOnClick} to={Paths.Button}>
            Button
        </SidebarStyled.Link>
        <SidebarStyled.Link onClick={handleOnClick} to={Paths.Checkbox}>
            Checkbox
        </SidebarStyled.Link>
        <SidebarStyled.Link onClick={handleOnClick} to={Paths.Input}>
            Input
        </SidebarStyled.Link>
        <SidebarStyled.Link onClick={handleOnClick} to={Paths.Label}>
            Label
        </SidebarStyled.Link>
        <SidebarStyled.Link onClick={handleOnClick} to={Paths.RadioButton}>
            Radio
        </SidebarStyled.Link>
        <SidebarStyled.Link onClick={handleOnClick} to={Paths.Select}>
            Select
        </SidebarStyled.Link>
        <SidebarStyled.Link onClick={handleOnClick} to={Paths.Switch}>
            Switch
        </SidebarStyled.Link>
        <SidebarStyled.Link onClick={handleOnClick} to={Paths.Tag}>
            Tag
        </SidebarStyled.Link>
        <SidebarStyled.Link onClick={handleOnClick} to={Paths.Tooltip}>
            Tooltip
        </SidebarStyled.Link>
    </SidebarStyled.Navigation>
}

const ButtonList = (props: { onNavigate?: () => void, }) => {
    const [isOpen, setIsOpen,] = useState(false)

    return <>
        <SidebarStyled.AccordionLabel isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
            Components
            <SidebarStyled.WrapperArrow>
                {isOpen
                    ? <ArrowTop />
                    : <ArrowDown />}
            </SidebarStyled.WrapperArrow>
            <SidebarStyled.AccordionContent isOpen={isOpen}>
                <ComponentsButtonList onNavigate={props.onNavigate} />
            </SidebarStyled.AccordionContent>
        </SidebarStyled.AccordionLabel>
        <SidebarStyled.NavLinkAnchor href={Paths.Github} target="_blank">
            How it works
        </SidebarStyled.NavLinkAnchor>
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

