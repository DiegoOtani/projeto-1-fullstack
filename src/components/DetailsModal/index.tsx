import { Overlay, DetailModalStyled, CloseButton, MenuButtons } from "./styles";
import { DetailModalProps } from "./types";
import ShowInfoSection from "../../Sections/ShowInfo";
import SeasonSection from "../../Sections/SeasonsSection";
import { useState } from "react";

const DetailsModal = ({ onClick }: DetailModalProps) => {
  const [ info, setInfo ] = useState<"info" | "seasons">("info");

  return <Overlay>
    <DetailModalStyled>
      <CloseButton onClick={onClick}>X</CloseButton>
      <MenuButtons onClick={() => setInfo("info")}>Info</MenuButtons>
      <MenuButtons onClick={() => setInfo("seasons")}>Seasons</MenuButtons>
      {info === "info" 
        ? <ShowInfoSection />
        : <SeasonSection />
      }
    </DetailModalStyled>
  </Overlay>
};

export default DetailsModal;