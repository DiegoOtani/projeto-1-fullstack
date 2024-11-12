import { Overlay, DetailModalStyled, CloseButton } from "./styles";
import { DetailModalProps } from "./types";
import ShowInfoSection from "../../Sections/ShowInfo";
import SeasonSection from "../../Sections/SeasonsSection";
import { useState } from "react";

const DetailsModal = ({ onClick }: DetailModalProps) => {
  const [ info, setInfo ] = useState<"info" | "seasons">("info");

  return <Overlay>
    <DetailModalStyled>
      <CloseButton onClick={onClick}>X</CloseButton>
      <button onClick={() => setInfo("info")}>Info</button>
      <button onClick={() => setInfo("seasons")}>Seasons</button>
      {info === "info" 
        ? <ShowInfoSection />
        : <SeasonSection />
      }
    </DetailModalStyled>
  </Overlay>
};

export default DetailsModal;