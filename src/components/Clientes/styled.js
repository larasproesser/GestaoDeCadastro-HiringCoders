import NumberFormat from "react-number-format";
import styled from "styled-components";
import { StyledButton } from "../Botoes/styled";

export const Form = styled.form`
  max-width: 35rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  font-weight: bolder;
`

export const DataForm = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
`
export const Label = styled.label`
  font-size: 1.4rem;
  margin-bottom: .5rem;
  color: #a06820;
`
export const Input = styled.input`
  width: 100%;
  height: 2.5rem;
  font-family: sans-serif;
  font-size: 1.2rem;
  border-radius: 1rem;
  border: 1px solid #a06820;
  padding: .5rem 1rem;

  &:focus {
    outline: none;
  }
`;

export const FormatedInput = styled(NumberFormat)`
    width: 100%;
    height: 2.5rem;
    font-family: sans-serif;
    font-size: 1.2rem;
    border-radius: 1rem;
    border: 1px solid #a06820;
    padding: .5rem 1rem;

    &:focus {
      outline: none;
    }
`;


export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

export const ModifiedButton = styled(StyledButton)`
  width: 10rem;
  font-size: 1rem;
  margin: 1rem 0;

  &:first-child {
    border: 1px solid #a06820;
    background-color: transparent;
    color: #a06820;
    font-weight: bolder;
    transition: 1s;
  }
`;