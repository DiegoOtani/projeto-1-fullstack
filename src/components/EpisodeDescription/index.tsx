import { EpisodeDescriptionStyled } from "./styles";
import { EpisodeDescriptionProps } from "./types";

const EpisodeDescription = ({ season, episode, name, summary }: EpisodeDescriptionProps) => {
  return <EpisodeDescriptionStyled>
    <h3><span>{season} X {episode}</span> {name}</h3>
    <p dangerouslySetInnerHTML={{ __html: summary }}/>
  </EpisodeDescriptionStyled>
}

export default EpisodeDescription;