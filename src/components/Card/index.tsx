import MovieInfo from "../MovieInfo"
import { CardProps } from "./types"
import { CardStyled } from "./styles"

const Card = ({ imgUrl, title, duration, rating, onClick, id }: CardProps) => {
  const handleClick = () => {
    if( onClick) onClick(id);
  }
  
  return <CardStyled onClick={handleClick}>
    <img src={imgUrl} alt={title} />
    <h2>{title}</h2>
    <MovieInfo duration={duration} rating={rating}/>
  </CardStyled>
}

export default Card