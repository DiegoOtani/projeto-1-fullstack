export type CardProps = {
  id: number
  imgUrl: string
  title: string
  duration: number
  rating: number | null
  onClick?: (showId: number) => void
  selected: boolean
};