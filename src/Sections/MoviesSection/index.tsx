import { MovieSectionStyled } from "./styles";
import Card from "../../components/Card";
import { useEffect, useState } from "react";
import MoviesService from "../../services/movies";
import { MoviesArray } from "../../types/movies";
import { useContext } from "react";
import { ModalContext } from "../../contexts/ModalContext";

const MovieSection = () => {
  const context = useContext(ModalContext)

  if (!context) throw new Error('Context problem');

  const { detailModalOpen, selectedShow, setDetailModalOpen, setSelectedShow } = context;

  const [movies, setMovies] = useState<MoviesArray>([]);

  useEffect(() => {
    console.log(selectedShow, detailModalOpen);
  }, [selectedShow, detailModalOpen])

  const handleCardClick = (showId: number) => {
    setSelectedShow(showId);
    setDetailModalOpen(true);
  };

  useEffect(() => {
    try {
      const loadMovies = async () => {
        const data = await MoviesService.getMovies();
        setMovies(data);
      }
      loadMovies();
    } catch (error) {
      console.error(error);
    }
  }, []);

  return <MovieSectionStyled>
    {movies.map(movie => (
      <Card 
        onClick={handleCardClick}
        id={movie.id}
        key={movie.id}
        imgUrl={movie.image.original}
        title={movie.name}
        duration={movie.runtime}
        rating={movie.rating.average}
      />
    ))}
  </MovieSectionStyled>;
};

export default MovieSection;