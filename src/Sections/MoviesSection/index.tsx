import { MovieSectionStyled } from "./styles";
import Card from "../../components/Card";
import { useEffect, useState } from "react";
import MoviesService from "../../services/movies";
import { MoviesArray } from "../../types/movies";

const MovieSection = () => {
  const [movies, setMovies] = useState<MoviesArray>([]);
  const [selectedShow, setSelectedShow] = useState<number>(0);
  const [detailModalOpen, setDetailModalOpen] = useState<boolean>(false);

  useEffect(() => {
    console.log(selectedShow, detailModalOpen);
  }, [selectedShow, detailModalOpen])

  const handleCardClick = (showId: number) => {
    setSelectedShow(showId);
    setDetailModalOpen(true);
  }

  const handleCloseModal = () => {
    setDetailModalOpen(false);
  }

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