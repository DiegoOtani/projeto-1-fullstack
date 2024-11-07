import MovieInfo from "../MovieInfo"
import { CardProps } from "./types"
import { CardStyled } from "./styles"

const Card = ({ imgUrl, title, duration, rating }: CardProps) => {
  return <CardStyled>
    <img src={imgUrl} alt={title} />
    <h2>{title}</h2>
    <MovieInfo duration={duration} rating={rating}/>
  </CardStyled>
}

export default Card