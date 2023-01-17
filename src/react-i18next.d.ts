// import the original type declarations
import "react-i18next"
// import all namespaces (for the default language, only)
import { en } from "./locales/en"

// react-i18next versions higher than 11.11.0
declare module "react-i18next" {
    // and extend them!
    interface CustomTypeOptions {
        // custom namespace type if you changed it
        ns: (keyof typeof en)[];
        defaultNS: "common";
        // custom resources type
        resources: typeof en;
    }
}