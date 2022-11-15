import { TextAlign, TextWeight } from "../../../styles/typographicHelper"
import { IconPosition } from "../../CommonTypes"

export type CustomInputStyles = {
    textColor?: string,
    textAlign?: TextAlign,
    textWeight?: TextWeight,
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