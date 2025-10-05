import { styled } from "styled-components";

export const InputWrapper = styled.div`
  display: grid;
  gap: 0.5rem;
  grid-area: ${({ $id }) => {
    switch ($id) {
      case "cardName":
        return "1 / 1 / 2 / 4";

      case "cardNumber":
        return "2 / 1 / 3 / 4";

      case "expDateMonth":
        return "3 / 1 / 4 / 2";

      case "expDateYear":
        return "3 / 2 / 4 / 3";

      case "cvc":
        return "3 / 3 / 4 / 4";

      default:
        break;
    }
  }};
  position: relative;

  & input {
    width: 100%;
    align-self: end;
    padding: 0.8rem;
    border-radius: 0.5rem;
    font-size: 18px;
    border: 1px solid;
    border-color: ${({ $error }) => $error && "hsl(0, 100%, 66%)"};
  }

  & input::placeholder {
    color: hsl(212, 12%, 71%);
  }

  & label {
    color: hsl(278, 68%, 11%);
    text-transform: uppercase;
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
    display: ${({ $id }) => ($id === "cardExpirationYear" ? "none" : "block")};
    position: ${({ $id }) =>
      $id === "cardExpirationMonth" ? "absolute" : "static"};
    white-space: nowrap;
  }
`;

export const Error = styled.span`
  color: hsl(0, 100%, 66%);
  font-size: 15px;
  position: absolute;
  bottom: -1.5rem;
  width: 100%;
  white-space: nowrap;
`;
