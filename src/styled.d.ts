import "styled-components"
import { ColorTokens } from "./styles/tokens/colorTokens"


interface IPaletteCommon {
	black: string;
	white: string;
}

interface IPalettePrimaryLevels {
	level90: string;
	level50: string;
	level10: string;
}
interface IPaletteNeutralLevels {
	level90: string;
	level50: string;
	level10: string;
}
interface IPaletteSystemLevels {
	info: string;
	warning: string;
	success: string;
	critical: string;
	focus: string;
}

declare module "styled-components" {
	export interface DefaultTheme {
		palette: typeof ColorTokens;
	}
}
