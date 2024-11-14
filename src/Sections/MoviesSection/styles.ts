import styled from "styled-components";

export const MovieSectionStyled = styled.section`
  min-height: 80vh;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  h1 {
    font-size: 30px;
    font-weight: 700;
    padding: 20px;
  }
`;

export const Shows = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

export const PageButtons  = styled.div`
  display: flex;
  gap: 10px;
  padding-top: 20px;
  
  button {
    padding: 10px;
    border-radius: 6px;

    &:hover {
      cursor: pointer;
    }
  }
`;