import styled from "styled-components";

export const FormWrapper = styled.form`
  max-width: 400px;
  display: grid;
  grid-template-columns: repeat(2, 1fr) 2fr;
  grid-template-rows: repeat(3, 1fr);
  column-gap: 1rem;
  row-gap: 2.5rem;
  position: relative;
`;