import styled from "styled-components";

export const MovieInfoStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  & span {
    display: flex;
    gap: 2px;
    padding: 6px;
  }

  .rating {
    background-color: #FC5056;
    border-radius: 20%;
    color: white;
    font-weight: 700;
  }
`;