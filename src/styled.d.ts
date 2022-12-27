import "styled-components"
import { DefaultThemeTokens } from "./styles/designTokens/defaultThemeTokens"
import { FontsTokens } from "./styles/designTokens/fontsTokens"
import { UiTokens } from "./styles/designTokens/uiTokens"

declare module "styled-components" {
	export interface DefaultTheme {
		palette: typeof DefaultThemeTokens;
	}
	export interface DefaultFonts {
		FontFamilies: typeof FontsTokens.fontFamilies;
		FontWeight: typeof FontsTokens.weights;
		FontSizes: typeof FontsTokens.sizes;
	}
	export interface DefaultUi {
		Radius: typeof UiTokens.borderRadius;
		BorderWidth: typeof UiTokens.borderWidth;
		Spacings: typeof UiTokens.spacing;
		Shadows: typeof UiTokens.shadows;
		InnerShadows: typeof UiTokens.innerShadows;
	}
}
