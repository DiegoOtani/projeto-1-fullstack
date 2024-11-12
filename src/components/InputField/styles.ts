import styled from "styled-components";

export const InputFieldSyled = styled.div`
  width: 80%;
  display: flex;

  input {
    width: 100%;
    border-radius: 10px;
    padding: 10px;
    outline: none;
  }
`;

export const SearchButton = styled.button`
  border: none;
  background-color: rgba(0, 0, 0, 0);

  &:hover {
    cursor: pointer;
  }
`;