import React from "react"
import { useTranslation } from "react-i18next"
import Button, { ButtonSize } from "../../components/Button/Button"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import oneDark from "react-syntax-highlighter/dist/esm/styles/prism/one-dark"
import { toastNotification } from "../../util/toastNotification"
import CodeSnippetStyles from "./CodeSnippetStyled"

export type CustomCodeSnippetStyles = {
    changeWhiteSpace?: boolean,
    mobileDecreaseWidth?: boolean,
}

type Props = {
    children: string,
    customStyles?: CustomCodeSnippetStyles,
}

export const CodeSnippet = (props: Props) => {
    const { t, } = useTranslation()

    const copyItem = (text?: string) => {
        if (text) {
            try {
                navigator.clipboard.writeText(text)
                toastNotification(t("copy.success"))
            } catch {
                toastNotification(t("copy.error"))
            }
        } else {
            toastNotification(t("copy.wrong"))
        }
    }

    return <CodeSnippetStyles.WrapperCode customStyles={props.customStyles}>
        <CodeSnippetStyles.ContainerCopyButton>
            <Button type="button"
                buttonSize={ButtonSize.Small}
                onClick={() => copyItem(`${props.children}`)}>
                Copy
            </Button>
        </CodeSnippetStyles.ContainerCopyButton>
        <SyntaxHighlighter
            language="jsx"
            style={oneDark}
            showLineNumbers
            showInlineLineNumbers
            wrapLongLines
            wrapLines
        >
            {`${props.children}`}
        </SyntaxHighlighter>
    </CodeSnippetStyles.WrapperCode>
}