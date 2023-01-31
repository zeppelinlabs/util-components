import React, { useState } from "react"
import Input from "../../../components/Form/Input/Input"
import { HeaderStyled } from "./HeaderStyled"
import { SearchListData } from "./SearchListData"
import { ReactComponent as AngleRight } from "../../../assets/icons/angle-right.svg"
import { ReactComponent as FileAttachment } from "../../../assets/icons/file-attachment.svg"
import { ReactComponent as SearchIcon } from "../../../assets/icons/search.svg"
import { useNavigate } from "react-router-dom"
import { IconPosition } from "../../../components/CommonTypes"

const Search = () => {
	const [searchValue, setSearchValue,] = useState<string>("")

	const navigate = useNavigate()

	const filteredBoardList = SearchListData.filter((component) => {
		return component.name
			.toLowerCase()
			.includes(searchValue.toLowerCase())
	})

	const handleOnClick = (link: string) => {
		setSearchValue("")
		navigate(link)

		return window.scrollTo(0, 0)
	}

	return <HeaderStyled.SearchContainer>
		<Input
			type="text"
			placeholder="Search components"
			value={searchValue}
			onChange={setSearchValue}
			icon={{
				SVGComponent: SearchIcon,
				position: IconPosition.right,
			}
			}
		/>
		{searchValue !== ""
			&& <HeaderStyled.SearchListOptions>
				{
					filteredBoardList.length > 0
						? filteredBoardList.map((result, i) => {
							return <HeaderStyled.SearchOption key={i}
								onClick={() => handleOnClick(result.url)} >
								<FileAttachment />
								<span>
									{result.name}
								</span>
								<HeaderStyled.ArrowContainer>
									<AngleRight />
								</HeaderStyled.ArrowContainer>
							</HeaderStyled.SearchOption>
						})
						: <HeaderStyled.SearchResultNotFound>
							No se encontraron resultados
						</HeaderStyled.SearchResultNotFound>
				}
			</HeaderStyled.SearchListOptions>
		}
	</HeaderStyled.SearchContainer>
}

export default Search