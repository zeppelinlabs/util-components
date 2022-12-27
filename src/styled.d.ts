import "styled-components"
import { DefaultThemeTokens } from "./styles/designTokens/defaultThemeTokens"
import { FontsTokens } from "./styles/designTokens/fontsTokens"
import { UiTokens } from "./styles/designTokens/uiTokens"

declare module "styled-components" {
	export interface DefaultTheme {
		palette: typeof DefaultThemeTokens;
		fonts: typeof FontsTokens;

		ui: typeof UiTokens;

	}
}
