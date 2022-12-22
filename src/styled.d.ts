import "styled-components"
import { DefaultThemeTokens } from "./styles/designTokens/defaultThemeTokens"

declare module "styled-components" {
	export interface DefaultTheme {
		palette: typeof DefaultThemeTokens;
	}
}
