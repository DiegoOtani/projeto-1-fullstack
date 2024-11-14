import MovieInfo from "../MovieInfo"
import { CardProps } from "./types"
import { CardStyled } from "./styles"

const Card = ({ imgUrl, title, duration, rating, onClick, id, selected }: CardProps) => {
  const handleClick = () => {
    if( onClick) onClick(id);
  }
  
  return <CardStyled 
    onClick={handleClick}
    selected={selected}
  >
    <img src={imgUrl} alt={title} />
    <div>
      <h2>{title}</h2>
      <MovieInfo duration={duration} rating={rating}/>
    </div>
  </CardStyled>
}

export default Card