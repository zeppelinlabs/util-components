/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
import React from "react"
import { TextStyled } from "../../../../styles/typographic"
import HowItWorksPage from "../HowItWorksPage"
import HowItWorksStyled from "../HowItWorksPageStyled"
import Figma1 from "../../../../assets/examples/figma-design-1.png"
import Figma2 from "../../../../assets/examples/figma-design-2.png"
import Figma3 from "../../../../assets/examples/figma-design-3.png"
import Figma4 from "../../../../assets/examples/figma-design-4.png"
import Figma5 from "../../../../assets/examples/figma-design-5.png"
import Figma6 from "../../../../assets/examples/figma-design-6.png"
import Figma7 from "../../../../assets/examples/figma-design-7.png"
import Button, { ButtonSize } from "../../../../components/Button/Button"
import { useWindowSize } from "../../../../hooks/useWindowsSize"
import { size } from "../../../../styles/mediaQueries"
import { Paths } from "../../../Paths"

const HowItWorksDesign = () => {
    const windowSize = useWindowSize()

    const redirectToFigma = () => {
        return window.open(Paths.Figma, "_blank")
    }

    return <HowItWorksPage>
        <HowItWorksStyled.Layout>
            <HowItWorksStyled.Row>
                <HowItWorksStyled.WrapperContent>
                    <HowItWorksStyled.GridFigmaDescription>
                        <img src={Figma1} alt="Figma File preview" />
                        <HowItWorksStyled.GridFigmaGetFile>
                            <TextStyled.BodyBase>
                                Here you will find a Figma file with the must-have components; Soon, we are adding new ones. You can duplicate and customize it as you need or want!
                            </TextStyled.BodyBase>
                            <Button
                                type="button"
                                onClick={redirectToFigma}
                                buttonSize={windowSize.width >= size.desktop ? ButtonSize.XLarge : ButtonSize.Base}
                            >
                                Get the Figma File
                            </Button>
                        </HowItWorksStyled.GridFigmaGetFile>
                        <HowItWorksStyled.GridColumnExpanded>
                            <TextStyled.BodyBase>
                                There are two important things you will need to use our components correctly:
                                <br />
                                1- How to use the “Tokens studio for Figma” Plugin
                                <br />
                                2- How to use Figma libraries
                            </TextStyled.BodyBase>
                        </HowItWorksStyled.GridColumnExpanded>
                    </HowItWorksStyled.GridFigmaDescription>

                    <HowItWorksStyled.HowToUseTokensSection>
                        <TextStyled.Heading3xl textWeight="semibold">
                            1-  How to use the "Tokens studio for Figma" Plugin
                        </TextStyled.Heading3xl>
                        <TextStyled.BodyBase>
                            Once you duplicated and named the file, it's time to customize it, and for that we use this plugin.
                        </TextStyled.BodyBase>
                    </HowItWorksStyled.HowToUseTokensSection>
                    <HowItWorksStyled.Callout>
                        <img src={Figma2} alt="Figma Tokens preview" />
                        <HowItWorksStyled.CalloutDescription>
                            <TextStyled.HeadingXl textWeight="semibold">
                                What is it?
                            </TextStyled.HeadingXl>
                            <TextStyled.BodyBase>
                                Is a Figma Plugin that allows you to integrate Tokens into your Figma designs. It gives you reusable tokens that can be used for a whole range of design options, from border radius or spacer units to semantic color and typography styles. It allows you to change tokens and see these changes applied to the whole document or its styles.
                            </TextStyled.BodyBase>
                            <TextStyled.BodyBase>
                                For more info, check it out:&nbsp;
                                <HowItWorksStyled.Link href={Paths.TokensStudio} target={"_blank"}>
                                    https://docs.tokens.studio/
                                </HowItWorksStyled.Link>
                            </TextStyled.BodyBase>
                        </HowItWorksStyled.CalloutDescription>
                    </HowItWorksStyled.Callout>

                    <HowItWorksStyled.GridSteps>
                        <TextStyled.BodyBase>
                            1 - Open the plugin in both files, the original and the one you duplicated.
                            <br />
                            In the first one you have to export a single file including the parent key. That file will download.
                            <br />
                            Then, load it into the second one.
                        </TextStyled.BodyBase>
                        <img src={Figma3} alt="Figma Tokens first step example 1" />
                        <img src={Figma4} alt="Figma Tokens first step example 2" />
                    </HowItWorksStyled.GridSteps>

                    <HowItWorksStyled.GridSteps>
                        <TextStyled.BodyBase>
                            2 - Once you have that file loaded, the plugin will be synced.
                            <br />
                            Use the right-click to edit all tokens. Check colors, fonts, sizes, spacing, effects, etc. While you are doing it, components will update themselves.
                            <br />
                            <TextStyled.Weight textWeight={"semibold"}>
                                Don't forget to update the plugin when you are done.
                            </TextStyled.Weight>
                        </TextStyled.BodyBase>
                        <HowItWorksStyled.GridColumnExpanded>
                            <img src={Figma5} alt="Figma Tokens second step example" />
                        </HowItWorksStyled.GridColumnExpanded>
                    </HowItWorksStyled.GridSteps>

                    <HowItWorksStyled.HowToUseLibrariesSection>
                        <TextStyled.Heading3xl textWeight="semibold">
                            2-  How to use Figma Libraries
                        </TextStyled.Heading3xl>
                        <TextStyled.BodyBase>
                            In Figma, you can share components and styles by publishing the file with them. This turns your file into a library, so you can use instances of those components in other files. Updates to the design of your components can be published and pushed out to other documents where instances of your components live.
                            <TextStyled.Weight textWeight="semibold">
                                In this case, we are going to publish this library, so you can use it in your files.
                            </TextStyled.Weight>
                        </TextStyled.BodyBase>
                    </HowItWorksStyled.HowToUseLibrariesSection>

                    <HowItWorksStyled.HowToUseLibrariesSectionSteps>
                        <HowItWorksStyled.HowToUseLibrariesSectionStepsColumns>
                            <img src={Figma6} alt="Figma example 1" />
                            <TextStyled.BodyBase>
                                1 - When your file is ready to use, tap "Team library" and publish it.
                            </TextStyled.BodyBase>
                        </HowItWorksStyled.HowToUseLibrariesSectionStepsColumns>
                        <HowItWorksStyled.HowToUseLibrariesSectionStepsColumns>
                            <img src={Figma7} alt="Figma example 2" />
                            <TextStyled.BodyBase>
                                2 - In every file you would use the library, tap "Team library" and turn it on. Now you could see and use all components on the tab "Assets".
                            </TextStyled.BodyBase>
                        </HowItWorksStyled.HowToUseLibrariesSectionStepsColumns>
                        <HowItWorksStyled.GridColumnExpanded>
                            <TextStyled.BodyBase>
                                For more info about libraries:&nbsp;
                                <HowItWorksStyled.Link href={Paths.FigmaHelp} target="_blank">
                                    https://help.figma.com/hc/en-us/articles/360041051154-Guide-to-libraries-in-Figma
                                </HowItWorksStyled.Link>
                            </TextStyled.BodyBase>
                        </HowItWorksStyled.GridColumnExpanded>
                    </HowItWorksStyled.HowToUseLibrariesSectionSteps>
                </HowItWorksStyled.WrapperContent>
            </HowItWorksStyled.Row>
        </HowItWorksStyled.Layout>


        <HowItWorksStyled.Layout isDarkMode>
            <HowItWorksStyled.Row>
                <HowItWorksStyled.WrapperContent>
                    <HowItWorksStyled.ReasonsForUsingArticle>
                        <TextStyled.Heading3xl textWeight="semibold">
                            Still, having doubts?
                        </TextStyled.Heading3xl>
                        <TextStyled.Heading3xl textWeight="light">
                            Here are some reasons for using a Design System in your designs
                        </TextStyled.Heading3xl>
                    </HowItWorksStyled.ReasonsForUsingArticle>
                    <HowItWorksStyled.Grid>
                        <HowItWorksStyled.AnswerColumn>
                            <TextStyled.HeadingXl textWeight="medium">
                                More productivity
                            </TextStyled.HeadingXl>
                            <TextStyled.BodyBase textWeight="light">
                                Since UI elements are already designed and reusable, teams can focus on more complex problems like information prioritization, workflow optimization, and journey management.                            </TextStyled.BodyBase>
                        </HowItWorksStyled.AnswerColumn>
                        <HowItWorksStyled.AnswerColumn>
                            <TextStyled.HeadingXl textWeight="medium">
                                Scalability
                            </TextStyled.HeadingXl>
                            <TextStyled.BodyBase textWeight="light">
                                Adding more features and products exponentially increases complexity. Centralizing UI decisions will make your design unfold in a linear way.                            </TextStyled.BodyBase>
                        </HowItWorksStyled.AnswerColumn>
                        <HowItWorksStyled.AnswerColumn>
                            <TextStyled.HeadingXl textWeight="medium">
                                Consistency
                            </TextStyled.HeadingXl>
                            <TextStyled.BodyBase textWeight="light">
                                Use the same elements over and over, reducing the risks of unintended inconsistency, this improves visual quality and makes your products much easier to use.                            </TextStyled.BodyBase>
                        </HowItWorksStyled.AnswerColumn>
                        <HowItWorksStyled.AnswerColumn>
                            <TextStyled.HeadingXl textWeight="medium">
                                Code and design quality
                            </TextStyled.HeadingXl>
                            <TextStyled.BodyBase textWeight="light">
                                Designers will work out all edge cases and optimize them for the user experience, and developers will make sure a component is accessible, customizable, and has extensive test coverage.                            </TextStyled.BodyBase>
                        </HowItWorksStyled.AnswerColumn>
                    </HowItWorksStyled.Grid>
                </HowItWorksStyled.WrapperContent>
            </HowItWorksStyled.Row>
        </HowItWorksStyled.Layout>

        <HowItWorksStyled.Layout>
            <HowItWorksStyled.Row>
                <HowItWorksStyled.WrapperContent>
                    <HowItWorksStyled.ThatsAllArticle>
                        <TextStyled.Heading3xl textWeight="semibold">
                            And...that’s all!
                        </TextStyled.Heading3xl>
                        <TextStyled.BodyLg>
                            Let us know how is working for you and your team via our social media. Every comment or suggestion is important to us!
                            <br />
                            Don't forget that this is a beta version, we are working on new components that will be published soon, stay tuned!
                        </TextStyled.BodyLg>
                    </HowItWorksStyled.ThatsAllArticle>
                </HowItWorksStyled.WrapperContent>
            </HowItWorksStyled.Row>
        </HowItWorksStyled.Layout>
    </HowItWorksPage>
}

export default HowItWorksDesign