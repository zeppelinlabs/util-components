import React from "react"
import { FooterStyled } from "./FooterStyled"
import ZeppelinLabsLogo from "../../../assets/examples/zeppelin-labs.svg"
import { Paths } from "../../Paths"

const Footer = () => {
	return <FooterStyled.Wrapper>
		<FooterStyled.Row>
			<img src={ZeppelinLabsLogo} alt="Zeppelin Labs" height={"30px"} />
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