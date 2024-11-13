import styled from "styled-components";

export const EpisodesListStyled = styled.section`

  h2 {
    text-align: center;
    padding: 10px;
  }

  ul {
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
`;

export const ListItem = styled.li`
  list-style: none;

  button {
    padding: 6px;
    border: none;
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    border-radius: 10px;

    &:hover {
      cursor: pointer;
      background-color: rgba(0, 0, 0, 0.6);
    }

    span {
      margin-right: 5px;
    }
  }
`;