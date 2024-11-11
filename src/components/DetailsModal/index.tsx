import { Overlay, DetailModalStyled, CloseButton } from "./styles";
import { DetailModalProps } from "./types";

const DetailsModal = ({ onClick }: DetailModalProps) => {
  return <Overlay>
    <DetailModalStyled>
      <CloseButton onClick={onClick}>X</CloseButton>
    </DetailModalStyled>
  </Overlay>
};

export default DetailsModal;