/* eslint-disable max-len */
import React from "react"
import { TextStyled } from "../styles/typographic"
import HowItWorksPage from "./_Layout/HowItWorks/HowItWorksPage"
import HowItWorksStyled from "./_Layout/HowItWorks/HowItWorksPageStyled"

// eslint-disable-next-line @typescript-eslint/no-empty-function
const HowItWorksDevelop = () => {
    return <HowItWorksPage>
        <HowItWorksStyled.Layout isDarkMode>
            <HowItWorksStyled.Row>
                <HowItWorksStyled.WrapperContent>
                    <HowItWorksStyled.Grid>
                        <HowItWorksStyled.AnswerColumn>
                            <TextStyled.HeadingXl textWeight="medium">
                                Customizable
                            </TextStyled.HeadingXl>
                            <TextStyled.BodyBase textWeight="light">
                                You can change colors, fonts, sizes, or whatever you want! Have full control over how they look and behave.
                            </TextStyled.BodyBase>
                        </HowItWorksStyled.AnswerColumn>
                    </HowItWorksStyled.Grid>
                </HowItWorksStyled.WrapperContent>
            </HowItWorksStyled.Row>
        </HowItWorksStyled.Layout>
    </HowItWorksPage>
}

export default HowItWorksDevelop