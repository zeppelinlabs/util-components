import {
    TextAlignKeys, TextWeightKeys
} from "../../../styles/themeHelpers"
import { IconPosition } from "../../CommonTypes"

export type CustomInputStyles = {
    textColor?: string,
    textAlign?: TextAlignKeys,
    textWeight?: TextWeightKeys,
    isResizable?: boolean,
    size?: InputSize,
}

export type InputCommonProps<T> = {
    value: T,
    placeholder?: string,
    disabled?: boolean,
    loading?: boolean,
    errorMessage?: string,
    onChange?: (value: T) => void,
    onBlur?: () => void,
    onFocus?: (value: T) => void,
    customStyles?: CustomInputStyles,
    icon?: {
        SVGComponent: React.FunctionComponent,
        position?: IconPosition,
    },
    accessibility?: {
        tabIndex?: number,
        autoFocus?: boolean,
    },
}

export enum InputSize {
    Small = "small",
    Medium = "medium",
    Large = "large",
    Xlarge = "xlarge",
}