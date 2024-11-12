import { MovieInfoTypes } from "./types";
import { MovieInfoStyled } from "./styles";
import { FaStar, FaRegClock } from "react-icons/fa";

const MovieInfo = ({ rating, duration }: MovieInfoTypes) => {
  return <MovieInfoStyled>
    <span className="rating">
      <FaStar />
      {rating}
    </span>
    <span>
      <FaRegClock />
      {duration} minutes
    </span>
  </MovieInfoStyled>
};

export default MovieInfo;