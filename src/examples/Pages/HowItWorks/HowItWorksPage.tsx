/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
import React from "react"
import HowItWorksStyled from "./HowItWorksPageStyled"
import { TextStyled } from "../../../styles/typographic"
import { ReactComponent as AlertIcon } from "../../../assets/icons/alert-circle.svg"
import { Paths } from "../../Paths"

type Props = {
    children: React.ReactNode,
}

const HowItWorksPage = (props: Props) => {
    const handleOnClickTab = () => {
        setTimeout(() => { window.scrollTo(0, 0) }, 100)
    }

    return <>
        <HowItWorksStyled.Layout isMainBanner isDarkMode>
            <HowItWorksStyled.Row>
                <HowItWorksStyled.WrapperContent>
                    <HowItWorksStyled.HowItWorksTitle>
                        How it works?
                    </HowItWorksStyled.HowItWorksTitle>
                    <TextStyled.HeadingXl textColor="level400">
                        Welcome to Zeppelin Components, a fully customizable UI library where you will find production-ready-to-use elements to design or develop your web.
                        <br />
                        First of all, choose the role you are interested in:
                    </TextStyled.HeadingXl>
                    <HowItWorksStyled.WarningMessage>
                        <AlertIcon />
                        <TextStyled.BodySm>
                            Our library is a beta version, we’ll be working on more components. Stay tuned for news and updates on our social media!
                        </TextStyled.BodySm>
                    </HowItWorksStyled.WarningMessage>
                </HowItWorksStyled.WrapperContent>
                <HowItWorksStyled.WrapperTabs>
                    <HowItWorksStyled.ListItem>
                        <HowItWorksStyled.TabItem to={Paths.HowItWorksDesign} onClick={handleOnClickTab}>
                            Design
                        </HowItWorksStyled.TabItem>
                    </HowItWorksStyled.ListItem>
                    <HowItWorksStyled.ListItem>
                        <HowItWorksStyled.TabItem to={Paths.HowItWorksDevelop} onClick={handleOnClickTab}>
                            Development
                        </HowItWorksStyled.TabItem>
                    </HowItWorksStyled.ListItem>
                </HowItWorksStyled.WrapperTabs>
            </HowItWorksStyled.Row>
        </HowItWorksStyled.Layout>
        {props.children}
    </>
}

export default HowItWorksPage