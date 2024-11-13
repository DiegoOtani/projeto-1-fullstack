import styled from "styled-components";

export const ShowInfo = styled.section`
  display: flex;
  justify-content: space-between;
  
  .summary {
    max-width: 35%;
  }
`;

export const Info = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 10px;
  width: 30%;
  height: 100%;
`;

export const ColorInfo = styled.span<{ status: boolean }>`
  color: ${(props) => (props.status ? "red" : "green")};
`;