import styled from "styled-components";

export const ShowInfo = styled.section`
  display: flex;
  justify-content: space-between;
  
  .summary {
    max-width: 35%;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;

  span {
    color: red;
  }
`;