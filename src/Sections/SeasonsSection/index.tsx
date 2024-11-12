import { SeasonSectionStyled, SeasonsList, ListItem } from "./styles";
import SeasonService from "../../services/seasons";
import { useContext, useState, useEffect } from "react";
import { ModalContext } from "../../contexts/ModalContext";
import { Season, SeasonsArray } from "../../types/seasons";

const SeasonSection = () => {
  const context = useContext(ModalContext);

  if (!context) throw new Error('Context problem');

  const { selectedShow } = context;
  const [ seasons, setSeasons ] = useState<SeasonsArray>([]);
  const [ selectedSeason, setSelectedSeason ] = useState<number>(1);

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
  </SeasonSectionStyled>
};

export default SeasonSection;