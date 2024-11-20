import { FooterStyled } from "./styles"

const Footer = () => {
  return <FooterStyled>
    <a className="logo" href="https://www.tvmaze.com/" target="blank">TV MAZE</a>
    <div>
      <h3>Tv Maze API</h3>
      <ul>
        <li><a href="https://www.tvmaze.com/" target="blank">TvShows</a></li>
        <li><a href="https://www.tvmaze.com/api" target="blank">Public API</a></li>
        <li><a href="https://www.tvmaze.com/forums/4/api" target="blank">Foruns API</a></li>
      </ul>
    </div>
    <div>
      <h3>Make by Diego Otani</h3>
      <ul>
        <li><a href="https://github.com/DiegoOtani/projeto-1-fullstack" target="blank">About</a></li>
        <li><a href="https://www.linkedin.com/in/diego-otani-361254277/" target="blank">Contact</a></li>
      </ul>
    </div>
  </FooterStyled>
};

export default Footer;