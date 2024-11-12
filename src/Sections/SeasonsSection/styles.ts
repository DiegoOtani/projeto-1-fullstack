import styled from "styled-components";

export const SeasonSectionStyled = styled.section`
  display: flex;
  flex-direction: column;

  nav {
    display: flex;
    justify-content: start;
  }
`;

export const SeasonsList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const ListItem = styled.li`
  list-style: none;

  button {
    padding: 10px;
    border: none;
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    border: 1px solid white;

    &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.6);
  }
  }
`;