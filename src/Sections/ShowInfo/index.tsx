import { ShowInfo, Info } from "./styles";
import MoviesService from "../../services/movies";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { ModalContext } from "../../contexts/ModalContext";
import { Movies } from "../../types/movies";
import Card from "../../components/Card";

const ShowInfoSection = () => {
  const context = useContext(ModalContext)

  if (!context) throw new Error('Context problem');

  const { selectedShow } = context;
  const [show, setShow] = useState<Movies | undefined>(undefined);

  useEffect(() => {
    try {
      const loadShowInfo = async() => {
        const data = await MoviesService.getMovieById(selectedShow);
        setShow(data)
      }

      loadShowInfo();
    } catch (error) {
      console.error(error);
    }
  }, [selectedShow]);

  if(!show) return <p>Error to find show.</p>

  return <ShowInfo>
    <Card 
      id={show.id}
      key={show.id}
      imgUrl={show.image.original}
      title={show.name}
      duration={show.runtime}
      rating={show.rating.average}
    />
    <p className="summary" dangerouslySetInnerHTML={{ __html: show.summary }} />
    <Info>
      <p>Language: <span>{show.language}</span></p>
      <p>Genres: {show.genres.join(', ')}</p>
      <p>Status: <span>{show.status}</span></p>
      <p>Producer: <strong>{show.network?.name}</strong></p>
    </Info>
  </ShowInfo>
}

export default ShowInfoSection;