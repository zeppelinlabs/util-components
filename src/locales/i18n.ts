import i18n, { Namespace, TFuncKey, TFuncReturn } from "i18next"
import { initReactI18next } from "react-i18next"
import { DefaultNamespace } from "react-i18next/TransWithoutContext"
import { ObjectTyped } from "../util/ObjectTyped"
import { en as translationEN } from "./en"

export type StringKey<NS extends Namespace = DefaultNamespace> = {
    [K in TFuncKey<NS>]: TFuncReturn<NS, K, string> extends string ? K : never
}[TFuncKey<NS>]



i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        ns: ObjectTyped.keys(translationEN),
        defaultNS: "common",
        resources: {
            en: translationEN,
        },
        lng: "en", // if you're using a language detector, do not define the lng option
        fallbackLng: "en",
        interpolation: {
            escapeValue: false,
        },
    })

export default i18n