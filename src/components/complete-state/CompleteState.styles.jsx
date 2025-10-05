import { styled } from "styled-components";

export const CompleteStateWrapper = styled.div`
  width: 100%;
  display: grid;
  gap: 2rem;
  place-items: center;
  position: relative;

  & h1 {
    text-transform: uppercase;
    font-size: 2rem;
    color: hsl(278, 68%, 11%);
  }

  & p {
    color: hsl(212, 12%, 71%);
  }
`;
