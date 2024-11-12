import styled from "styled-components";

export const HeaderStyled = styled.header`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  padding: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  nav {
    min-width: 20%;
    display: flex;
    justify-content: center;
    gap: 10px;
  }

  a {
    text-decoration: none;
    color: white;
    font-weight: 700;
  }

  .logo {
    white-space: nowrap;
    font-size: 26px;
  }
`;