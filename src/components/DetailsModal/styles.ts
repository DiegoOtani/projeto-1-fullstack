import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DetailModalStyled = styled.section`
  position: relative;
  background-color: #fff;
  padding: 30px;
  border-radius: 8px;
  min-width: 50%;
  max-width: 70%;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background-color: transparent;
  color: red;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    font-weight: 700;
  }
`;

export const MenuButtons = styled.button`
  border: none;
  border-radius: 10px;
  margin: 5px;
  padding: 12px;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;

  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
  }
`;