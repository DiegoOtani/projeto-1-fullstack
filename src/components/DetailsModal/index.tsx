import { Overlay, DetailModalStyled, CloseButton } from "./styles";
import { DetailModalProps } from "./types";
import ShowInfoSection from "../../Sections/ShowInfo";

const DetailsModal = ({ onClick }: DetailModalProps) => {
  return <Overlay>
    <DetailModalStyled>
      <CloseButton onClick={onClick}>X</CloseButton>
      <ShowInfoSection />
    </DetailModalStyled>
  </Overlay>
};

export default DetailsModal;