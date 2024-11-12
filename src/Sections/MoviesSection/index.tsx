import { MovieSectionStyled, Shows, PageButtons } from "./styles";
import Card from "../../components/Card";
import { useEffect, useState } from "react";
import MoviesService from "../../services/movies";
import { MoviesArray } from "../../types/movies";
import { useContext } from "react";
import { ModalContext } from "../../contexts/ModalContext";

const MovieSection = () => {
  const context = useContext(ModalContext)

  if (!context) throw new Error('Context problem');

  const { setDetailModalOpen, setSelectedShow } = context;

  const [movies, setMovies] = useState<MoviesArray>([]);

  const [currentPage, setCurrentPage] = useState<number>(1);

  const showsPerPage = 20;

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

  const indexOfLastShow = currentPage * showsPerPage;
  const indexOfFirstShow = indexOfLastShow - showsPerPage;

  const currentShows = movies.slice(indexOfFirstShow, indexOfLastShow);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const previousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return <MovieSectionStyled>
    <Shows>
      {currentShows.map(movie => (
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
    </Shows>

    <PageButtons>
      <button onClick={previousPage} disabled={currentPage === 1}>Previous</button>
      <button onClick={nextPage} disabled={currentPage === Math.ceil(movies.length / showsPerPage)}>Next</button>
    </PageButtons>
  </MovieSectionStyled>;
};

export default MovieSection;