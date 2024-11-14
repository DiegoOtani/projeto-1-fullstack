import styled from "styled-components";

export const SeasonSectionStyled = styled.section`
  display: flex;
  flex-direction: column;

  h2 {
    padding: 20px;
    text-align: center;
  }

  nav {
    padding: 10px;
    display: flex;
    justify-content: start;
  }
`;

export const SeasonsList = styled.ul`
  width: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
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