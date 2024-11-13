import styled from "styled-components";

export const FooterStyled = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 50px 120px;
  background-color: rgba(0, 0, 0, 0.9);
  color: rgba(255, 255, 255, 0.8);

  div {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  h3 {
    font-size: 24px;
    font-weight: 600;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: rgba(255, 255, 255, 0.8);
    font-weight: 400;
    font-size: 20px;

    &:hover {
      color: rgba(255, 255, 255, 1);
      text-decoration: underline;
    }
  }

  .logo {
    white-space: nowrap;
    font-size: 26px;
  }
`;