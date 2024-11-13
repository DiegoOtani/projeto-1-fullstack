import { useState } from "react";
import { EpisodesListStyled, ListItem } from "./styles"
import { EpisodesListProps } from "./types";
import EpisodeDescription from "../../components/EpisodeDescription";

const EpisodesList = ({ episodes }: EpisodesListProps) => {
  const [ episodeSelected, setEpisodeSelected ] = useState<number>(0);

  return <EpisodesListStyled>
    {episodes.length !== 0 && (<h2>Episodes List</h2>)}
    <ul>
      {episodes.map(episode => (
        <ListItem key={episode.id}>
          <button onClick={() => setEpisodeSelected(episodeSelected === episode.id ? 0 : episode.id)}>
            <span>{episode.season}X{episode.number}</span>
            {episode.name}
          </button>
          {episodeSelected === episode.id && (
            <EpisodeDescription 
              key={episode.id}
              season={episode.season}
              episode={episode.number}
              name={episode.name}
              summary={episode.summary}
            />
          )}
        </ListItem>
      ))}
    </ul>
  </EpisodesListStyled>
};

export default EpisodesList;