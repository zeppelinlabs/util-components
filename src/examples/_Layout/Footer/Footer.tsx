import React from "react"
import { FooterStyled } from "./FooterStyled"
import ZeppelinLabsLogo from "../../../assets/examples/zeppelin-labs.svg"
import { Paths } from "../../Paths"
import { Link } from "react-router-dom"

const Footer = () => {
	return <FooterStyled.Wrapper>
		<FooterStyled.Row>
			<FooterStyled.Link href={Paths.AboutUs} target="_blank">
				<img src={ZeppelinLabsLogo} alt="Zeppelin Labs" />
			</FooterStyled.Link>
			<FooterStyled.ContainerFooterNav>
				{Paths.zeppelinSocialMedia.map((link, i) => {
					return <FooterStyled.Link key={i} href={link.link} target="_blank">
						{link.text}
					</FooterStyled.Link>
				})}
			</FooterStyled.ContainerFooterNav>
		</FooterStyled.Row>
	</FooterStyled.Wrapper>
}

export default Footer