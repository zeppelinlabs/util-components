import styled from "styled-components"
import { FontsTokens } from "../../../styles/designTokens/fontsTokens"
import { thp } from "../../../styles/themeHelpers"

const ErrorWrapper = styled.div`
    display: flex;
    padding-top: 4px;
    width: 100%;
    word-break: break-word;
    align-items: center;
`

const ErrorText = styled.span`
    color:${thp.system.error.level600._};
    font-size: ${FontsTokens.sizes.Primary.xs.fontSize};
    line-height: ${FontsTokens.sizes.Primary.xs.lineHeight};
    font-weight: ${FontsTokens.weights.Primary.light};
`

const FormCommonStyles = {
    ErrorWrapper,
    ErrorText,
}

export default FormCommonStyles
