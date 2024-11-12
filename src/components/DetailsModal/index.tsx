import { Overlay, DetailModalStyled, CloseButton } from "./styles";
import { DetailModalProps } from "./types";
import ShowInfoSection from "../../Sections/ShowInfo";
import SeasonSection from "../../Sections/SeasonsSection";

const DetailsModal = ({ onClick }: DetailModalProps) => {
  return <Overlay>
    <DetailModalStyled>
      <CloseButton onClick={onClick}>X</CloseButton>
      <ShowInfoSection />
      <SeasonSection />
    </DetailModalStyled>
  </Overlay>
};

export default DetailsModal;