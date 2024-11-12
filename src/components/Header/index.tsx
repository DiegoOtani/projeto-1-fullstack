import InputField from "../InputField"
import { HeaderStyled } from "./styles"

const Header = () => {
  return <HeaderStyled>
    <a className="logo" href="https://www.tvmaze.com/" target="blank">TV MAZE</a>
    <InputField onSubmit={() => console.log("domsa")}/>
    <nav>
      <a href="#">Tv Shows</a>
      <a href="#">Public Api</a>
      <a href="#">About</a>
    </nav>
  </HeaderStyled>
}

export default Header