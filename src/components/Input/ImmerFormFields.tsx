import { connectField } from "immer-form"
import Input from "./Input"
import InputNumeric from "./InputNumeric"
import InputPassword from "./InputPassword"

export const InputField = connectField(Input)
export const InputNumericField = connectField(InputNumeric)
export const InputPasswordField = connectField(InputPassword)