import { EpisodesListStyled, ListItem } from "./styles"
import { EpisodesListProps } from "./types";

const EpisodesList = ({ episodes }: EpisodesListProps) => {
  return <EpisodesListStyled>
    <h2>Episodes List</h2>
    <ul>
      {episodes.map(episode => (
        <ListItem key={episode.id}>
          <button>
            <span>{episode.season}X{episode.number}</span>
            {episode.name}
          </button>
        </ListItem>
      ))}
    </ul>
  </EpisodesListStyled>
};

export default EpisodesList;