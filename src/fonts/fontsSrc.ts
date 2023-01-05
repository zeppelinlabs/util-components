import { createGlobalStyle } from "styled-components"
import { FontsTokens } from "../styles/designTokens/fontsTokens"
import SilkaBlack from "./silka/Silka-Black.woff"
import SilkaBlack2 from "./silka/Silka-Black.woff2"
import SilkaBold from "./silka/Silka-Bold.woff"
import SilkaBold2 from "./silka/Silka-Bold.woff"
import SilkaExtraLight from "./silka/Silka-ExtraLight.woff"
import SilkaExtraLight2 from "./silka/Silka-ExtraLight.woff"
import SilkaLight from "./silka/Silka-Light.woff"
import SilkaLight2 from "./silka/Silka-Light.woff"
import SilkaMedium from "./silka/Silka-Medium.woff"
import SilkaMedium2 from "./silka/Silka-Medium.woff"
import SilkaRegular from "./silka/Silka-Regular.woff"
import SilkaRegular2 from "./silka/Silka-Regular.woff"
import SilkaSemiBold from "./silka/Silka-SemiBold.woff"
import SilkaSemiBold2 from "./silka/Silka-SemiBold.woff"
import SilkaThin from "./silka/Silka-Thin.woff"
import SilkaThin2 from "./silka/Silka-Thin.woff"

import InterBlack from "./inter/Inter-Black.woff2"
import InterBlack2 from "./inter/Inter-Black.woff2"
import InterRegular from "./inter/Inter-Regular.woff2"
import InterRegular2 from "./inter/Inter-Regular.woff2"
import InterBold from "./inter/Inter-Bold.woff2"
import InterBold2 from "./inter/Inter-Bold.woff2"
import InterLight from "./inter/Inter-Light.woff2"
import InterLight2 from "./inter/Inter-Light.woff2"
import InterSemiBold from "./inter/Inter-SemiBold.woff2"
import InterSemiBold2 from "./inter/Inter-SemiBold.woff2"
import InterExtraLight from "./inter/Inter-ExtraLight.woff2"
import InterExtraLight2 from "./inter/Inter-ExtraLight.woff2"
import InterMedium from "./inter/Inter-Medium.woff2"
import InterMedium2 from "./inter/Inter-Medium.woff2"
import InterThin from "./inter/Inter-Thin.woff2"
import InterThin2 from "./inter/Inter-Thin.woff2"


export const FontSrc = createGlobalStyle`
	@font-face {
		font-family: ${FontsTokens.fontFamilies.Primary};
		src: url(${SilkaBlack2}) format('woff2'),
			url(${SilkaBlack}) format('woff');
		font-weight: ${FontsTokens.weights.Primary.black};
		font-style: normal;
		font-display: swap;
	}

	@font-face {
		font-family: ${FontsTokens.fontFamilies.Primary};
		src: url(${SilkaBold2}) format('woff2'),
			url(${SilkaBold}) format('woff');
		font-weight: ${FontsTokens.weights.Primary.bold};
		font-style: normal;
		font-display: swap;
	}

	@font-face {
		font-family: ${FontsTokens.fontFamilies.Primary};
		src: url(${SilkaExtraLight2}) format('woff2'),
			url(${SilkaExtraLight}) format('woff');
		font-weight: ${FontsTokens.weights.Primary.extralight};
		font-style: normal;
		font-display: swap;
	}

	@font-face {
		font-family: ${FontsTokens.fontFamilies.Primary};
		src: url(${SilkaLight2}) format('woff2'),
			url(${SilkaLight}) format('woff');
		font-weight: ${FontsTokens.weights.Primary.light};
		font-style: normal;
		font-display: swap;
	}

	@font-face {
		font-family: ${FontsTokens.fontFamilies.Primary};
		src: url(${SilkaMedium2}) format('woff2'),
			url(${SilkaMedium}) format('woff');
		font-weight: ${FontsTokens.weights.Primary.medium};
		font-style: normal;
		font-display: swap;
	}

	@font-face {
		font-family: ${FontsTokens.fontFamilies.Primary};
		src: url(${SilkaRegular2}) format('woff2'),
			url(${SilkaRegular}) format('woff');
		font-weight: ${FontsTokens.weights.Primary.regular};
		font-style: normal;
	}

	@font-face {
		font-family: ${FontsTokens.fontFamilies.Primary};
		src: url(${SilkaSemiBold2}) format('woff2'),
			url(${SilkaSemiBold}) format('woff');
		font-weight: ${FontsTokens.weights.Primary.semibold};
		font-style: normal;
		font-display: swap;
	}

	@font-face {
		font-family: ${FontsTokens.fontFamilies.Primary};
		src: url(${SilkaThin2}) format('woff2'),
			url(${SilkaThin}) format('woff');
		font-weight: ${FontsTokens.weights.Primary.thin};
		font-style: normal;
		font-display: swap;
	}

	@font-face {
		font-family: ${FontsTokens.fontFamilies.Secondary};
		src: url(${InterBlack2}) format('woff2'),
			url(${InterBlack}) format('woff');
		font-weight: ${FontsTokens.weights.Secondary.black};
		font-style: normal;
		font-display: swap;
	}

	@font-face {
		font-family: ${FontsTokens.fontFamilies.Secondary};
		src: url(${InterRegular2}) format('woff2'),
			url(${InterRegular}) format('woff');
		font-weight: ${FontsTokens.weights.Secondary.regular};
		font-style: normal;
		font-display: swap;
	}

	@font-face {
		font-family: ${FontsTokens.fontFamilies.Secondary};
		src: url(${InterBold2}) format('woff2'),
			url(${InterBold}) format('woff');
		font-weight: ${FontsTokens.weights.Secondary.bold};
		font-style: normal;
		font-display: swap;
	}

	@font-face {
		font-family: ${FontsTokens.fontFamilies.Secondary};
		src: url(${InterLight2}) format('woff2'),
			url(${InterLight}) format('woff');
		font-weight: ${FontsTokens.weights.Secondary.light};
		font-style: normal;
		font-display: swap;
	}

	@font-face {
		font-family: ${FontsTokens.fontFamilies.Secondary};
		src: url(${InterSemiBold2}) format('woff2'),
			url(${InterSemiBold}) format('woff');
		font-weight: ${FontsTokens.weights.Secondary.semibold};
		font-style: normal;
		font-display: swap;
	}

	@font-face {
		font-family: ${FontsTokens.fontFamilies.Secondary};
		src: url(${InterExtraLight2}) format('woff2'),
			url(${InterExtraLight}) format('woff');
		font-weight: ${FontsTokens.weights.Secondary.extralight};
		font-style: normal;
		font-display: swap;
	}

	@font-face {
		font-family: ${FontsTokens.fontFamilies.Secondary};
		src: url(${InterMedium2}) format('woff2'),
			url(${InterMedium}) format('woff');
		font-weight: ${FontsTokens.weights.Secondary.medium};
		font-style: normal;
		font-display: swap;
	}

	@font-face {
		font-family: ${FontsTokens.fontFamilies.Secondary};
		src: url(${InterThin2}) format('woff2'),
			url(${InterThin}) format('woff');
		font-weight: ${FontsTokens.weights.Secondary.thin};
		font-style: normal;
		font-display: swap;
	}

`