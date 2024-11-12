import { MovieSectionStyled, Shows, PageButtons } from "./styles";
import Card from "../../components/Card";
import { useEffect, useState } from "react";
import MoviesService from "../../services/movies";
import { MoviesArray } from "../../types/movies";
import { useContext } from "react";
import { ModalContext } from "../../contexts/ModalContext";
import { SearchContext } from "../../contexts/SearchContext";

const MovieSection = () => {
  const modalContext = useContext(ModalContext)
  const searchContext = useContext(SearchContext);

  if (!modalContext) throw new Error('Context problem');
  if (!searchContext) throw new Error('Context problem');

  const { setDetailModalOpen, setSelectedShow } = modalContext;
  const { search } = searchContext;

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
        let data;
        if (search === "") {
          data = await MoviesService.getMovies();
        } else {
          data = await MoviesService.getMoviesBySearch(search);
          console.log(data)
        }
        setMovies(data);
      }
      loadMovies();
    } catch (error) {
      console.error(error);
    }
  }, [search]);

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
    <h1>{search === "" ? "Tv Shows" : "Top 10 results from search..."}</h1>
    <Shows>
      {currentShows.map(movie => (
        <Card 
          onClick={handleCardClick}
          id={movie.id}
          key={movie.id}
          imgUrl={movie.image?.original || movie.image?.medium || 'defaultImageUrl'}
          title={movie.name}
          duration={movie.runtime}
          rating={movie.rating.average}
        />
      ))}
    </Shows>
    
    {search === "" && (
      <PageButtons>
        <button onClick={previousPage} disabled={currentPage === 1}>Previous</button>
        <button onClick={nextPage} disabled={currentPage === Math.ceil(movies.length / showsPerPage)}>Next</button>
      </PageButtons>
    )}
  </MovieSectionStyled>;
};

export default MovieSection;