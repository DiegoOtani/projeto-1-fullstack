import { SeasonSectionStyled, SeasonsList, ListItem } from "./styles";
import SeasonService from "../../services/seasons";
import { useContext, useState, useEffect } from "react";
import { ModalContext } from "../../contexts/ModalContext";
import { SeasonsArray } from "../../types/seasons";
import { EpisodesArray } from "../../types/episodes";
import EpisodesList from "../EpisodesList";

const SeasonSection = () => {
  const context = useContext(ModalContext);

  if (!context) throw new Error('Context problem');

  const { selectedShow } = context;
  const [ seasons, setSeasons ] = useState<SeasonsArray>([]);
  const [ selectedSeason, setSelectedSeason ] = useState<number>(1);
  const [ episodes, setEpisodes ] = useState<EpisodesArray>([]);

  useEffect(() => {
    try {
      const loadSeasons = async() => {
        const data = await SeasonService.getSeasons(selectedShow);
        setSeasons(data);
      };

      loadSeasons();
    } catch (error) {
      console.error(error);
    }
  }, [selectedShow]);

  useEffect(() => {
    try {
      const loadEpisodes = async() => {
        const data = await SeasonService.getEpisodesBySeasonId(selectedSeason);
        setEpisodes(data);
      };

      loadEpisodes();
    } catch (error) {
      console.error(error);
    }
  }, [selectedSeason])

  return <SeasonSectionStyled>
    <nav>
      <SeasonsList>
        {seasons.map(season => (
          <ListItem key={season.id}>
            <button onClick={() => setSelectedSeason(season.id)}>
              {season.number}
            </button>
          </ListItem>
        ))}
      </SeasonsList>
    </nav>
    <EpisodesList episodes={episodes}/>
  </SeasonSectionStyled>
};

export default SeasonSection;