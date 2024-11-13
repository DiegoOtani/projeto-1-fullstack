import InputField from "../InputField"
import { HeaderStyled } from "./styles"
import { useContext } from "react"
import { SearchContext } from "../../contexts/SearchContext"

const Header = () => {
  const context = useContext(SearchContext)

  if (!context) throw new Error('Context problem');

  const { setSearch } = context;

  return <HeaderStyled>
    <a className="logo" href="https://www.tvmaze.com/" target="blank">TV MAZE</a>
    <InputField/>
    <nav>
      <a onClick={() => setSearch("")}>Tv Shows</a>
      <a href="https://www.tvmaze.com/api" target="blank">Public Api</a>
      <a href="https://github.com/DiegoOtani/projeto-1-fullstack" target="blank">About</a>
    </nav>
  </HeaderStyled>
}

export default Header