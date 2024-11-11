import { ShowInfo } from "./styles";
import MoviesService from "../../services/movies";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { ModalContext } from "../../contexts/ModalContext";
import { Movies } from "../../types/movies";

const ShowInfoSection = () => {
  const context = useContext(ModalContext)

  if (!context) throw new Error('Context problem');

  const { selectedShow } = context;
  const [show, setShow] = useState<Movies | undefined>(undefined)
  useEffect(() => {
    try {
      const loadShowInfo = async() => {
        const data = await MoviesService.getMovieById(selectedShow);
        setShow(data)
      }

      loadShowInfo();
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    console.log(show)
  }, [show])

  return <ShowInfo>
    
  </ShowInfo>
}

export default ShowInfoSection;