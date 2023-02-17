import React from "react"
import { useTranslation } from "react-i18next"
import { DetailComponentPageStyled }
    from "../../_Layout/DetailComponentPage/DetailComponentPageStyled"
import Button, { ButtonSize } from "../../../components/Button/Button"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import oneDark from "react-syntax-highlighter/dist/esm/styles/prism/one-dark"
import { toastNotification } from "../../../util/toastNotification"

export const CodeSnippet = (props: { children: string, }) => {
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

    return <DetailComponentPageStyled.WrapperCode>
        <DetailComponentPageStyled.ContainerCopyButton>
            <Button type="button"
                buttonSize={ButtonSize.Small}
                onClick={() => copyItem(`${props.children}`)}>
                Copy
            </Button>
        </DetailComponentPageStyled.ContainerCopyButton>
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
    </DetailComponentPageStyled.WrapperCode>
}