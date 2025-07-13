import { Form } from "react-bootstrap";
import styled from "styled-components";

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px 0;
  font-size: var(--normal-text);
  input {
    font-size: var(--small-text);
    border: 2px solid #ddd;

    &:focus {
      box-shadow: none;
      border: 2px solid ${({ theme }) => theme.colors.primary};
    }
  }
  button {
    padding: 10px 20px;
    background-color: ${({ theme }) => theme.colors.primary};
    border: 1px solid transparent;
    color: white;
    font-size: var(--normal-text);
    height: 60px;
    width: 120px;
    border-radius: 5px;
    font-weight: bold;
    text-align: center;
  }
`;
