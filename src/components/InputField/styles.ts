import styled from "styled-components";

export const InputFieldSyled = styled.div<{ error: boolean }>`
  width: 80%;
  display: flex;
  gap: 10px;

  input {
    width: 100%;
    border-radius: 10px;
    padding: 10px;
    outline: none;
    border: 2px solid ${(props) => (props.error ? "red" : "#ccc")};
    background-color: ${(props) => (props.error ? "#fdd" : "#fff")};
  }
`;

export const SearchButton = styled.button`
  border: none; 
  background-color: rgba(0, 0, 0, 0);

  &:hover {
    cursor: pointer;
  }
`;