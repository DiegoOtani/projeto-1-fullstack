import { Star, Clock } from "@phosphor-icons/react";
import { MovieInfoTypes } from "./types";
import { MovieInfoStyled } from "./styles";

const MovieInfo = ({ rating, duration }: MovieInfoTypes) => {
  return <MovieInfoStyled>
    <span>
      <Star />
      {rating}
    </span>
    <span>
      <Clock />
      {duration} minutes
    </span>
  </MovieInfoStyled>
};

export default MovieInfo;