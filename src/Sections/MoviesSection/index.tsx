import { MovieSectionStyled } from "./styles";
import Card from "../../components/Card";
import { useEffect, useState } from "react";
import MoviesService from "../../services/movies";
import { MoviesArray } from "../../types/movies";

const MovieSection = () => {
  const [movies, setMovies] = useState<MoviesArray>([]);

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