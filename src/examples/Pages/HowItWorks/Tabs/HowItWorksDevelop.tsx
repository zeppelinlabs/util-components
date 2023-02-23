/* eslint-disable max-lines */
/* eslint-disable react/jsx-max-depth */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
import React from "react"
import { TextStyled } from "../../../../styles/typographic"
import HowItWorksPage from "../HowItWorksPage"
import HowItWorksStyled from "../HowItWorksPageStyled"
import GoToTheCodeImage from "../../../../assets/examples/go-to-the-code.png"
import FigmaImage1 from "../../../../assets/examples/figma-dev-1.png"
import FigmaImage2 from "../../../../assets/examples/figma-dev-2.png"
import FigmaImage3 from "../../../../assets/examples/figma-dev-3.png"
import FigmaImage4 from "../../../../assets/examples/figma-dev-4.png"
import FigmaImage5 from "../../../../assets/examples/figma-dev-5.png"
import { Paths } from "../../../Paths"
import { CodeSnippet } from "../../../CodeSnippet/CodeSnippet"
import Accordion, { AccordionVariant } from "../Accordion/Accordion"

const HowItWorksDevelop = () => {
    return <HowItWorksPage>
        <HowItWorksStyled.Layout>
            <HowItWorksStyled.Row>
                <HowItWorksStyled.WrapperContent>
                    <HowItWorksStyled.TextArticle>
                        <TextStyled.Heading3xl textWeight="semibold">
                            Required technologies
                        </TextStyled.Heading3xl>
                        <HowItWorksStyled.List>
                            <HowItWorksStyled.ListItem>
                                <TextStyled.BodyBase>
                                    Typescript
                                </TextStyled.BodyBase>
                            </HowItWorksStyled.ListItem>
                            <HowItWorksStyled.ListItem>
                                <TextStyled.BodyBase>
                                    Styled Components
                                </TextStyled.BodyBase>
                            </HowItWorksStyled.ListItem>
                            <HowItWorksStyled.ListItem>
                                <TextStyled.BodyBase>
                                    React
                                </TextStyled.BodyBase>
                            </HowItWorksStyled.ListItem>
                        </HowItWorksStyled.List>
                        <TextStyled.BodyBase>
                            Traditionally, components are distributed as NPM packages, which can be installed in a project to utilize them. However, this method of distribution limits customization options, as control over the component is limited to the props and parameters made available by the creator.
                        </TextStyled.BodyBase>
                        <TextStyled.BodyBase>
                            At Zeppelin Labs, we believe in giving our users full control over the components they use. That's why we have chosen a different approach. Instead of distributing our components as NPM packages, we make the code available in a simple, easy-to-use boilerplate. This way, you can attach the code to your project and customize it to your exact specifications, giving you complete control over its behavior and appearance.
                        </TextStyled.BodyBase>
                        <TextStyled.BodyBase>
                            However, we understand that this approach may have some limitations, including a manual and potentially difficult update process as we add more features. We are constantly working to improve our processes and make updates more seamless for our users. We value your feedback and suggestions on how we can continue to improve our services and make them even more user-friendly.
                        </TextStyled.BodyBase>
                    </HowItWorksStyled.TextArticle>
                    <HowItWorksStyled.GetComponentSteps>
                        <TextStyled.Heading3xl textWeight="semibold">
                            Get Components easy and quickly
                        </TextStyled.Heading3xl>
                        <TextStyled.Heading2xl textWeight="light">
                            1- Identify the desired component
                        </TextStyled.Heading2xl>
                        <TextStyled.Heading2xl textWeight="light">
                            2- Use the button “Go to the code”
                        </TextStyled.Heading2xl>
                        <img src={GoToTheCodeImage} alt="example how go to the code" />
                        <TextStyled.Heading2xl textWeight="light">
                            3- Download files from Github
                        </TextStyled.Heading2xl>
                        <HowItWorksStyled.TextArticle>
                            <TextStyled.BodyBase>
                                The files included in our component distribution are divided into two categories. The first type is the file containing the logic required for the component to function properly. The second type is the style file, which controls the appearance of the component.
                            </TextStyled.BodyBase>
                            <TextStyled.BodyBase>
                                Most of our components are self-contained, meaning they do not rely on external libraries. However, in certain instances, they may depend on another component within the Zeppelin framework. This approach streamlines project administration and makes it easier to manage over time.
                            </TextStyled.BodyBase>
                        </HowItWorksStyled.TextArticle>
                        <HowItWorksStyled.Callout>
                            <HowItWorksStyled.GridColumnExpanded>
                                <HowItWorksStyled.CalloutDescription>
                                    <TextStyled.HeadingXl textWeight="semibold">
                                        Oh No! I Have the Component I Need and This Error? What the Token?
                                    </TextStyled.HeadingXl>
                                    <TextStyled.BodyBase>
                                        At Zeppelin Components, our goal is to create amazing interfaces based on Design Systems. And to do that, we use a tool called a Design Token. This fancy term simply refers to a variable that stores common values in Figma that we constantly use during development.
                                    </TextStyled.BodyBase>
                                    <TextStyled.BodyBase>
                                        We encourage your design team to try this methodology by checking out the Design tab. We promise, it’ll make your life a whole lot easier!
                                        But wait, what if you want to use Zeppelin Components without tokens? No problem! Simply replace the variables that are causing errors with values for colors, sizes, effects, fonts, or other properties. You have full control over the components, so you can customize them to your heart’s content.
                                    </TextStyled.BodyBase>
                                    <TextStyled.BodyBase>
                                        And to make it even easier, we’ve also described how you can automate the process of exporting Figma design tokens and importing them into your project. Our components will be automatically compatible, so you can focus on creating amazing designs without any fuss.
                                    </TextStyled.BodyBase>
                                </HowItWorksStyled.CalloutDescription>
                            </HowItWorksStyled.GridColumnExpanded>
                        </HowItWorksStyled.Callout>
                    </HowItWorksStyled.GetComponentSteps>
                </HowItWorksStyled.WrapperContent>
            </HowItWorksStyled.Row>
        </HowItWorksStyled.Layout>

        <HowItWorksStyled.Layout isDarkMode>
            <HowItWorksStyled.Row>
                <HowItWorksStyled.WrapperContent>
                    <HowItWorksStyled.DevInformationSection>
                        <Accordion label={
                            <TextStyled.Heading3xl textWeight="semibold">
                                Automation with Figma Tokens
                            </TextStyled.Heading3xl>
                        }>
                            <HowItWorksStyled.TextArticle>
                                <TextStyled.BodyBase>
                                    Design systems often store repeated information such as color, font sizes, shadows, etc. in "variables" or "design tokens". By synchronizing these design tokens from Figma with the&nbsp;
                                    <HowItWorksStyled.Link href={Paths.TokensStudio} target="_blank" isDarkMode>
                                        Tokens Studio for Figma plugin (Figma Tokens)
                                    </HowItWorksStyled.Link>
                                    , we can save time in creating, updating, and structuring objects with this information in the project setup, among other benefits.
                                </TextStyled.BodyBase>
                            </HowItWorksStyled.TextArticle>
                            <HowItWorksStyled.FigmaTokensFirstSteps>
                                <HowItWorksStyled.Section>
                                    <TextStyled.Heading2xl textWeight="semibold">
                                        First steps:
                                    </TextStyled.Heading2xl>
                                    <Accordion hasMarginBottom
                                        customStyles={{
                                            accordionVariant: AccordionVariant.Secondary,
                                        }}
                                        label={
                                            <TextStyled.BodyLg textWeight="semibold">
                                                Add the Automation Script
                                            </TextStyled.BodyLg>
                                        }>
                                        <TextStyled.BodyBase>
                                            To keep in mind:
                                        </TextStyled.BodyBase>
                                        <HowItWorksStyled.WrapperText>
                                            <HowItWorksStyled.List>
                                                <HowItWorksStyled.ListItem>
                                                    <TextStyled.BodyBase>
                                                        Required dependencies:
                                                    </TextStyled.BodyBase>
                                                </HowItWorksStyled.ListItem>
                                                <HowItWorksStyled.List>
                                                    <HowItWorksStyled.ListItem>
                                                        <TextStyled.BodyBase>
                                                            Styled Components ^5.3.3
                                                        </TextStyled.BodyBase>
                                                    </HowItWorksStyled.ListItem>
                                                    <HowItWorksStyled.ListItem>
                                                        <TextStyled.BodyBase>
                                                            ts-node ^10.9.1
                                                        </TextStyled.BodyBase>
                                                    </HowItWorksStyled.ListItem>
                                                </HowItWorksStyled.List>
                                                <HowItWorksStyled.ListItem>
                                                    <TextStyled.BodyBase>
                                                        Necessary utility in root/src/util
                                                    </TextStyled.BodyBase>
                                                    <HowItWorksStyled.List>
                                                        <HowItWorksStyled.ListItem>
                                                            <TextStyled.BodyBase>
                                                                ObjectTyped.ts
                                                            </TextStyled.BodyBase>
                                                        </HowItWorksStyled.ListItem>
                                                    </HowItWorksStyled.List>
                                                </HowItWorksStyled.ListItem>
                                            </HowItWorksStyled.List>
                                            <HowItWorksStyled.List isNumericList>
                                                <HowItWorksStyled.ListItem>
                                                    <TextStyled.BodyBase>
                                                        Create a new directory named figmaTokens in the root directory of your application.
                                                    </TextStyled.BodyBase>
                                                </HowItWorksStyled.ListItem>
                                                <HowItWorksStyled.ListItem>
                                                    <TextStyled.BodyBase>
                                                        Copy the entire **scripts**directory to the root directory of your application.
                                                    </TextStyled.BodyBase>
                                                </HowItWorksStyled.ListItem>
                                                <HowItWorksStyled.ListItem>
                                                    <TextStyled.BodyBase>
                                                        In the package.json, add the following script, making sure that the first two routes match what was done in step 2. The third route will be generated by the script.
                                                    </TextStyled.BodyBase>
                                                </HowItWorksStyled.ListItem>
                                            </HowItWorksStyled.List>
                                        </HowItWorksStyled.WrapperText>
                                        <CodeSnippet customStyles={{ changeWhiteSpace: true, mobileDecreaseWidth: true, }}>
                                            "generate-theme": "ts-node --project ./scripts/tsconfig.json ./scripts/generateDesignTokens/generateDesignTokens && npx eslint src/styles/designTokens --fix"
                                        </CodeSnippet>
                                        <HowItWorksStyled.List isNumericList start={4}>
                                            <HowItWorksStyled.ListItem>
                                                <TextStyled.BodyBase>
                                                    Modify the start and build scripts to run the script automatically with your application.
                                                </TextStyled.BodyBase>
                                            </HowItWorksStyled.ListItem>
                                        </HowItWorksStyled.List>
                                        <CodeSnippet customStyles={{ mobileDecreaseWidth: true, }}>{`"start": "yarn generate-theme && react-scripts start",
"build": "yarn generate-theme && react-scripts build"`}
                                        </CodeSnippet>
                                        <HowItWorksStyled.List isNumericList start={5}>
                                            <HowItWorksStyled.ListItem>
                                                <TextStyled.BodyBase>
                                                    Add the following entry in the .gitignore file:                                                            </TextStyled.BodyBase>
                                            </HowItWorksStyled.ListItem>
                                        </HowItWorksStyled.List>
                                        <CodeSnippet customStyles={{ mobileDecreaseWidth: true, }}>
                                            src/styles/designTokens/**
                                        </CodeSnippet>
                                    </Accordion>
                                </HowItWorksStyled.Section>
                                <HowItWorksStyled.Section>
                                    <Accordion hasMarginBottom
                                        customStyles={{
                                            accordionVariant: AccordionVariant.Secondary,
                                        }}
                                        label={
                                            <TextStyled.BodyLg textWeight="semibold">
                                                Instruction to install Figma Tokens and export design tokens from Figma
                                            </TextStyled.BodyLg>
                                        }
                                    >
                                        <HowItWorksStyled.FigmaInstructions>
                                            <TextStyled.BodyBase>
                                                If you have never used the Figma Tokens plugin, you can add it to Figma by clicking the upper-right blue "Try it out" button in the plugin link provided here. This step only needs to be done once, and the plugin will work for all the projects you use later on.
                                            </TextStyled.BodyBase>
                                            <HowItWorksStyled.GridFigmaInstructionsSteps>
                                                <img src={FigmaImage1} alt="Figma example 1" />
                                                <TextStyled.BodyBase>
                                                    1 - In the project you are working on, right-click (“Outside of any element and outside of any canvas”) and in the Plugins section, the option "Tokens Studio for Figma" will appear. You must have editing permissions in the project for the option to appear
                                                </TextStyled.BodyBase>
                                            </HowItWorksStyled.GridFigmaInstructionsSteps>
                                            <HowItWorksStyled.GridFigmaInstructionsSteps>
                                                <img src={FigmaImage2} alt="Figma example 2" />
                                                <TextStyled.BodyBase>
                                                    2 - The plugin displays the created and active Sets of Tokens. In most cases, you only need to export the tokens without editing additional information. You can do this by clicking the export button located at the bottom-right corner.
                                                </TextStyled.BodyBase>
                                            </HowItWorksStyled.GridFigmaInstructionsSteps>
                                            <HowItWorksStyled.GridFigmaInstructionsSteps>
                                                <img src={FigmaImage3} alt="Figma example 3" />
                                                <TextStyled.BodyBase>

                                                    3 - You need to select the plugin to export the tokens in separate files. The plugin will export separate files for each Set created in it.
                                                </TextStyled.BodyBase>
                                            </HowItWorksStyled.GridFigmaInstructionsSteps>
                                            <TextStyled.BodyBase textWeight="medium">
                                                Disclaimer: Now that you have editing permissions in Figma, DO NOT EDIT the content of the designs or the tokens. If necessary, do it with a responsible designer.
                                            </TextStyled.BodyBase>
                                        </HowItWorksStyled.FigmaInstructions>
                                    </Accordion>
                                </HowItWorksStyled.Section>
                                <HowItWorksStyled.Section>
                                    <Accordion hasMarginBottom
                                        customStyles={{
                                            accordionVariant: AccordionVariant.Secondary,
                                        }}
                                        label={
                                            <TextStyled.BodyLg textWeight="semibold">
                                                Import or Update the Design Tokens to the Project
                                            </TextStyled.BodyLg>
                                        }
                                    >
                                        <TextStyled.BodyBase>
                                            To add the design tokens exported from Figma, simply place the corresponding .json files in the root/figmaTokens directory. This directory should already exist if you added the automation script.
                                        </TextStyled.BodyBase>
                                        <TextStyled.BodyBase>
                                            If you need to update the tokens, just add the new .json files to the directory and the script will take care of the rest. If any TypeScript tokens are removed during the update, the project will flag all the places where you need to replace the missing token when you run it.
                                        </TextStyled.BodyBase>
                                        <TextStyled.BodyBase>
                                            For fontTokens, you need to edit the options object in the&nbsp;
                                            <TextStyled.WordBreak>
                                                root/scripts/generateDesignTokens/fontTokensHelper.ts
                                            </TextStyled.WordBreak>
                                            file to translate the Figma weight value into a valid value for CSS. The key should be the value from the Figma exported .json, and the value should be the valid translation to use in CSS.
                                        </TextStyled.BodyBase>
                                    </Accordion>
                                </HowItWorksStyled.Section>
                                <HowItWorksStyled.Section>
                                    <Accordion hasMarginBottom
                                        customStyles={{
                                            accordionVariant: AccordionVariant.Secondary,
                                        }}
                                        label={
                                            <TextStyled.BodyLg textWeight="semibold">
                                                Tokens types
                                            </TextStyled.BodyLg>
                                        }
                                    >
                                        <TextStyled.BodyBase>
                                            We propose to divide the tokens into 3 sets which generate 3 files when exported:
                                        </TextStyled.BodyBase>
                                        <HowItWorksStyled.List hasGap>
                                            <HowItWorksStyled.ListItem>
                                                <TextStyled.BodyBase>
                                                    <TextStyled.Weight textWeight="medium">
                                                        Set:Color = Token:defaultTheme
                                                    </TextStyled.Weight>
                                                    This set stores everything related to the colors of the application, and this content is the only one added to the styled components Theme by default.
                                                    Note: If the current project requires "Themes" management (e.g. colors by brands, Dark mode - Light mode, etc.), this set will probably store more information from other sets besides colors. It will be necessary to modify the automation script and discuss with the design team the management of these tokens.
                                                </TextStyled.BodyBase>
                                            </HowItWorksStyled.ListItem>

                                            <HowItWorksStyled.ListItem>
                                                <TextStyled.BodyBase>
                                                    <TextStyled.Weight textWeight="medium">
                                                        Set:Typography = Token:fontsTokens
                                                    </TextStyled.Weight>
                                                    This set stores the names of the typographies, weights, and text sizes used throughout the project.
                                                    Disclaimer: Figma stores the weight name related to the typography as a token but this is not a valid value to apply in CSS. You must adjust the automation to transform the name delivered by Figma tokens to a valid value for CSS.
                                                </TextStyled.BodyBase>
                                            </HowItWorksStyled.ListItem>

                                            <HowItWorksStyled.ListItem>
                                                <TextStyled.BodyBase>
                                                    <TextStyled.Weight textWeight="medium">
                                                        Set:Global = Token:uiToken
                                                    </TextStyled.Weight>
                                                    This set stores all the additional tokens configured in Figma. You should use these tokens and not write their "direct" values in the style.
                                                    Disclaimer: DO NOT COMMIT OR EDIT THE CONTENT of the files housed in the directory&nbsp;
                                                    <TextStyled.WordBreak>
                                                        root/src/styles/designTokens/
                                                    </TextStyled.WordBreak>
                                                    as these are generated automatically by the script and will be constantly re-written.
                                                </TextStyled.BodyBase>
                                            </HowItWorksStyled.ListItem>
                                        </HowItWorksStyled.List>
                                    </Accordion>
                                </HowItWorksStyled.Section>
                                <HowItWorksStyled.Section>
                                    <Accordion hasMarginBottom
                                        customStyles={{
                                            accordionVariant: AccordionVariant.Secondary,
                                        }}
                                        label={
                                            <TextStyled.BodyLg textWeight="semibold">
                                                Config Styled components
                                            </TextStyled.BodyLg>
                                        }
                                    >
                                        <HowItWorksStyled.List isNumericList>
                                            <HowItWorksStyled.ListItem>
                                                <TextStyled.BodyBase>
                                                    Copy the file root/src/styled.d.ts from the components project to the root/src/ directory.
                                                </TextStyled.BodyBase>
                                            </HowItWorksStyled.ListItem>
                                            <HowItWorksStyled.ListItem>
                                                <TextStyled.BodyBase>
                                                    Copy the following files from the components project to the appRoot/src/styles/ directory:&nbsp;
                                                    <TextStyled.WordBreak>
                                                        root/src/styles/defaultTheme.ts root/src/styles/themeHelpers.tsroot/src/styles/ThemeProxy.ts
                                                    </TextStyled.WordBreak>
                                                </TextStyled.BodyBase>
                                            </HowItWorksStyled.ListItem>
                                            <HowItWorksStyled.ListItem>
                                                <TextStyled.BodyBase>
                                                    In your project's App.ts file, wrap your other components in the ThemeProvider from styled components, adding the previously copied defaultTheme. Disclaimer: Components outside of this provider will not have their styles work correctly and in some cases, it may generate errors or simply not display the value of the used token.
                                                </TextStyled.BodyBase>
                                            </HowItWorksStyled.ListItem>
                                        </HowItWorksStyled.List>
                                        <CodeSnippet customStyles={{ mobileDecreaseWidth: true, }}>
                                            {`import {ThemeProvider} from "styled-components"
import {defaultTheme} from "./styles/defaultTheme"

const App = () => {
    return (
        <ThemeProvider theme={defaultTheme}>
            // ...Other components
        </ThemeProvider >
    )
}`}
                                        </CodeSnippet>
                                        <HowItWorksStyled.List isNumericList start={4}>
                                            <HowItWorksStyled.ListItem>
                                                <TextStyled.BodyBase>
                                                    The font size FontTokens have automatically been converted from px to rem, so in your global styles file, add the following CSS lines to the related element's style for the correct functioning of the Rem measure.
                                                </TextStyled.BodyBase>
                                            </HowItWorksStyled.ListItem>
                                        </HowItWorksStyled.List>
                                        <CodeSnippet customStyles={{ mobileDecreaseWidth: true, }}>
                                            {`html {
    -webkit-text-size-adjust: 100%;
    font-size: 62.5%;
}`}
                                        </CodeSnippet>
                                    </Accordion>
                                </HowItWorksStyled.Section>
                            </HowItWorksStyled.FigmaTokensFirstSteps>
                            <HowItWorksStyled.FigmaTokensFirstSteps>
                                <TextStyled.Heading2xl textWeight="semibold">
                                    Working on the project:
                                </TextStyled.Heading2xl>
                                <HowItWorksStyled.Section>
                                    <Accordion hasMarginBottom
                                        customStyles={{
                                            accordionVariant: AccordionVariant.Secondary,
                                        }}
                                        label={
                                            <TextStyled.BodyLg textWeight="semibold">
                                                Running the script
                                            </TextStyled.BodyLg>
                                        }
                                    >
                                        <HowItWorksStyled.List hasGap>
                                            <HowItWorksStyled.ListItem>
                                                <TextStyled.BodyBase>
                                                    One-time setup: If you want to generate tokens only for project configuration, run the following command in the terminal:
                                                </TextStyled.BodyBase>
                                            </HowItWorksStyled.ListItem>
                                            <CodeSnippet>
                                                yarn generate-theme
                                            </CodeSnippet>
                                            <HowItWorksStyled.ListItem>
                                                <TextStyled.BodyBase>
                                                    Continuous setup: To generate tokens each time you run the following command, execute it in the terminal:
                                                </TextStyled.BodyBase>
                                            </HowItWorksStyled.ListItem>
                                            <CodeSnippet>
                                                yarn start
                                            </CodeSnippet>
                                        </HowItWorksStyled.List>
                                    </Accordion>
                                </HowItWorksStyled.Section>
                                <HowItWorksStyled.FigmaInstructions>
                                    <Accordion hasMarginBottom
                                        customStyles={{
                                            accordionVariant: AccordionVariant.Secondary,
                                        }}
                                        label={
                                            <TextStyled.BodyLg textWeight="semibold">
                                                How to use tokens in CSS styles?
                                            </TextStyled.BodyLg>
                                        }
                                    >
                                        <HowItWorksStyled.GridFigmaInstructionsSteps>
                                            <TextStyled.BodyBase>
                                                When you are analyzing the design of your application in Figma, the exact names of the tokens you should use in your styles will be displayed Ej:
                                            </TextStyled.BodyBase>
                                            <img src={FigmaImage4} alt="Figma use token example 1" />
                                        </HowItWorksStyled.GridFigmaInstructionsSteps>
                                        <HowItWorksStyled.GridFigmaInstructionsSteps>
                                            <TextStyled.BodyBase>
                                                Due to limitations of the plugin, some token names may not be displayed in some cases, but you can consult it like this:
                                            </TextStyled.BodyBase>
                                            <img src={FigmaImage5} alt="Figma use token example 2" />
                                        </HowItWorksStyled.GridFigmaInstructionsSteps>
                                        <HowItWorksStyled.List hasGap>
                                            <HowItWorksStyled.Section>
                                                <HowItWorksStyled.ListItem>
                                                    <TextStyled.BodyLg textWeight="semibold">
                                                        Use the Theme de styled components
                                                    </TextStyled.BodyLg>
                                                </HowItWorksStyled.ListItem>
                                                <TextStyled.BodyBase>
                                                    In terms of color tokens, it is mandatory to use the Styled Components Theme as a convention in projects. This can be used in two ways:
                                                </TextStyled.BodyBase>
                                                <TextStyled.BodyLg textWeight="semibold">
                                                    Common usage with Styled Components
                                                </TextStyled.BodyLg>
                                                <CodeSnippet customStyles={{ mobileDecreaseWidth: true, }}>
                                                    {`color: ${"${({ theme, }) => (theme.palette.primary.level1000)}"};`}
                                                </CodeSnippet>
                                                <TextStyled.BodyLg textWeight="semibold">
                                                    Usage with thp (Theme Helper). This is a shortcut developed by Zeppelin.
                                                </TextStyled.BodyLg>
                                                <CodeSnippet customStyles={{ mobileDecreaseWidth: true, }}>
                                                    {`import { thp } from "./themeHelpers"

background-color: ${"${thp.base.level0._}"};`}
                                                </CodeSnippet>
                                                <TextStyled.BodyBase>
                                                    When using thp, the editor will show you the entries that the object has or you can visit the file&nbsp;
                                                    <TextStyled.WordBreak>
                                                        root/src/styles/designTokens/defaultThemeTokens.ts
                                                    </TextStyled.WordBreak>
                                                    to familiarize yourself with the object's form.
                                                </TextStyled.BodyBase>
                                                <TextStyled.BodyBase>
                                                    Important to add at the end ._
                                                </TextStyled.BodyBase>
                                            </HowItWorksStyled.Section>
                                            <HowItWorksStyled.ListItem>
                                                <HowItWorksStyled.Section>
                                                    <TextStyled.BodyLg textWeight="semibold">
                                                        Using Tokens
                                                    </TextStyled.BodyLg>
                                                    <TextStyled.BodyBase>
                                                        You can directly use the object exported by the automation in root/src/styles/designTokens/. It's important to note that for Theme tokens, you must use the styled-components Theme. We recommend using the thp shortcut to access tokens easily
                                                    </TextStyled.BodyBase>
                                                    <CodeSnippet customStyles={{ mobileDecreaseWidth: true, }}>
                                                        {`import { FontsTokens } from "./designTokens/fontsTokens"
import { UiTokens } from "./designTokens/uiTokens"

font-weight: ${"${FontsTokens.weights.Primary.regular}"};
border-radius: ${"${UiTokens.borderRadius.size16"}};`}
                                                    </CodeSnippet>
                                                </HowItWorksStyled.Section>
                                            </HowItWorksStyled.ListItem>
                                            <HowItWorksStyled.ListItem>
                                                <HowItWorksStyled.Section>
                                                    <TextStyled.BodyLg textWeight="semibold">
                                                        Props
                                                    </TextStyled.BodyLg>
                                                    <TextStyled.BodyBase>
                                                        If you need to create a component that changes a token value based on its props, for example, "a component with a style that can change the text color from black to light gray based on props", you can do it easily.
                                                    </TextStyled.BodyBase>
                                                    <TextStyled.BodyLg textWeight="semibold">
                                                        With thp
                                                    </TextStyled.BodyLg>
                                                    <CodeSnippet customStyles={{ mobileDecreaseWidth: true, }}>
                                                        {`import {DefaultTheme} from "styled-components"

type ThemeBaseColorKeys = keyof DefaultTheme["palette"]["base"]

type Props = {
    textColor: ThemeBaseColorKeys,
}

{const Heading24 = styled.h2<Props>${"`"}
    color: ${"${({ textColor, }) => thp.base[textColor]._}"}}
${"`"}
`}
                                                    </CodeSnippet>
                                                    <TextStyled.BodyLg>
                                                        With other tokens
                                                    </TextStyled.BodyLg>
                                                    <CodeSnippet customStyles={{ mobileDecreaseWidth: true, }}>
                                                        {`import { FontsTokens } from "./designTokens/fontsTokens"

type TextWeightKeys = keyof (typeof FontsTokens)["weights"]["Primary"]

type Props = {
	textWeight: TextWeightKeys,
}

const Heading24 = styled.h2<Props>${"`"}
	font-weight: ${"${FontsTokens.weights.Primary[p.textWeight]};"}
${"`"}
`}
                                                    </CodeSnippet>
                                                </HowItWorksStyled.Section>
                                            </HowItWorksStyled.ListItem>
                                        </HowItWorksStyled.List>
                                    </Accordion>
                                </HowItWorksStyled.FigmaInstructions>
                            </HowItWorksStyled.FigmaTokensFirstSteps>
                        </Accordion>
                        <Accordion label={
                            <TextStyled.Heading3xl textWeight="semibold">
                                Reset CSS
                            </TextStyled.Heading3xl>
                        }>
                            <HowItWorksStyled.TextArticle>
                                <TextStyled.BodyBase>
                                    Our component styles are designed to be modular and independent, providing flexibility in their implementation. However, to ensure a consistent and cohesive user experience, we have created a reset styled file that standardizes the visual appearance and behavior of the elements in our interface.&nbsp;
                                    <HowItWorksStyled.Link href={Paths.GithubResetStyles} target="_blank" isDarkMode>
                                        Link
                                    </HowItWorksStyled.Link>
                                </TextStyled.BodyBase>
                            </HowItWorksStyled.TextArticle>
                        </Accordion>
                        <Accordion label={
                            <TextStyled.Heading3xl textWeight="semibold">
                                Global Styles
                            </TextStyled.Heading3xl>
                        }>
                            <HowItWorksStyled.TextArticle>
                                <TextStyled.BodyBase>
                                    To ensure consistency and maintain the integrity of your Zeppelin Components, it's best practice to include this styles within your global stylesheet.&nbsp;
                                    <HowItWorksStyled.Link href={Paths.GithubGlobalStyles} target="_blank" isDarkMode>
                                        Link
                                    </HowItWorksStyled.Link>
                                    &nbsp;o
                                </TextStyled.BodyBase>
                                <CodeSnippet customStyles={{ mobileDecreaseWidth: true, }}>
                                    {`*,
*::after,
*::before{
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	-webkit-tap-highlight-color: transparent;
}

html {
	box-sizing: border-box;
	-webkit-text-size-adjust: 100%;
	font-size: 62.5%;
	min-height:100%;
	scroll-behavior: smooth;
	position:relative;
}
html:focus-within {
	scroll-behavior: smooth;
}
body {
	text-rendering: optimizeSpeed;
	font-family: ?;
	font-weight: ?;
	line-height: 1;
	min-height:100%;
	position:relative;
	scroll-behavior: smooth;
	overflow-x: hidden !important; ?
	background-color: ?;
	color: ?;
}
svg {
	width: 100%;
	height: 100%;
	object-fit: contain;
	object-position: center;
	path{
		fill: currentColor;
	}
}`}
                                </CodeSnippet>
                            </HowItWorksStyled.TextArticle>
                        </Accordion>
                    </HowItWorksStyled.DevInformationSection>
                </HowItWorksStyled.WrapperContent>
            </HowItWorksStyled.Row >
        </HowItWorksStyled.Layout >
    </HowItWorksPage >
}

export default HowItWorksDevelop