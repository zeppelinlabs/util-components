import styled, { css } from "styled-components"
import { thp } from "../../styles/themeHelpers"
import { getFontWeight } from "../../styles/typographicHelper"
import { CustomStyles, TagIconPosition, TagSize } from "./Tag"

type TagProps = {
	customStyles?: CustomStyles,
	IconPosition?: TagIconPosition,
}

const getTagSize = (size:TagSize) => {
    const sizeByCase = {
        [TagSize.Small]: ({
            fontSize: "1.3rem",
            padding: "4px 6px",
            gap: "6px",
            borderWidth:"1px",
            iconSize: "11px",
            closeIconSize: "8px",
        }),
        [TagSize.Medium]: ({
            fontSize: "1.4rem",
            padding: "6px 8px",
            gap: "7px",
            borderWidth: "1px",
            iconSize: "14px",
            closeIconSize: "10px",
        }),
        [TagSize.Large]: ({
            fontSize: "1.5rem",
            padding: "8px 10px",
            gap: "8px",
            borderWidth: "1px",
            iconSize: "16px",
            closeIconSize: "10px",
        }),
    }
    return {
        tagCss: css`
			padding: ${sizeByCase[size].padding};
			font-size: ${sizeByCase[size].fontSize};
			gap:${sizeByCase[size].gap};
			border-width: ${sizeByCase[size].borderWidth};
		`,
        iconSize: css`
			max-width: ${sizeByCase[size].iconSize};
			min-width: ${sizeByCase[size].iconSize};
			height: ${sizeByCase[size].iconSize};
		`,
        closeIconSize: css`
			max-width: ${sizeByCase[size].closeIconSize};
			min-width: ${sizeByCase[size].closeIconSize};
			height: ${sizeByCase[size].closeIconSize};
		`,
    }
}

const Container = styled.span<TagProps>`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	line-height: 1;
	border-radius: 5px;
	border-style: solid;
	width: max-content;

	background-color:${p => (p.customStyles?.backgroundColor || thp.common(c => c.white))};
	color:${p => (p.customStyles?.textColor || "inherit")};
	cursor: ${p => (p.customStyles?.isCursorPointer ? "pointer" : "default")};

	${p => (getTagSize(p.customStyles?.size
        ? p.customStyles.size
        : TagSize.Small
    )).tagCss}
	${p => (p.customStyles?.textWeight
		&& getFontWeight(p.customStyles?.textWeight)
    )};
	${p => (p.customStyles?.borderColor && css`
		border-color: ${p.customStyles.borderColor};
	`)};
	${p => (p.IconPosition && css`
		flex-flow: ${p.IconPosition};
	`)};
	&:focus {
        box-shadow: 0 0 0 4px ${thp.system(c => c.focus)};
    }
	img{
		width:100%;
		max-width:100%;
	}

	svg{
		width: 100%;
		height: 100%;
		path{
			fill: currentColor;
		}
	}
`

const CrossIconContainer = styled.span<{ size?: TagSize, }>`
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	object-fit: contain;
	object-position:center ;
	${p => (getTagSize(p.size ? p.size : TagSize.Small)).closeIconSize};
`

const CustomIconContainer = styled.span<{ size?: TagSize, }>`
	display: flex;
	align-items: center;
	justify-content: center;
	object-fit: contain;
	object-position:center ;
	${p => (getTagSize(p.size ? p.size : TagSize.Small)).iconSize}
`

export const TagStyled = {
    Container,
    CustomIconContainer,
    CrossIconContainer,
}