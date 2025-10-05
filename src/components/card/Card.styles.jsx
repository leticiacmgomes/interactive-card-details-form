import styled from "styled-components";
import cardFrontBg from "../../assets/images/bg-card-front.png";
import cardBackBg from "../../assets/images/bg-card-back.png";

export const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    max-width: 450px;
    gap: 2rem;
    flex-direction: column-reverse;
  }
`;

export const CardFront = styled.div`
  background-image: url(${cardFrontBg});
  background-size: cover;
  border-radius: 0.5rem;
  width: 18rem;
  height: 9rem;
  padding: 1rem;
  position: relative;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);

  @media (min-width: 768px) {
    width: 350px;
    height: 175px;
  }
`;

export const Logo = styled.img`
  width: 3rem;
  grid-area: 1 / 1 / 2 / 3;
  margin-bottom: 0.8rem;
`;

export const CardNumber = styled.p`
  color: white;
  font-size: 1.2rem;
  letter-spacing: 0.2rem;
  grid-area: 2 / 1 / 3 / 3;
  justify-self: center;
`;

export const CardName = styled.p`
  color: white;
  text-transform: uppercase;
  font-size: 0.8rem;
  grid-area: 3 / 1 / 4 / 2;
`;

export const ExpirationDate = styled.p`
  color: white;
  font-size: 0.8rem;
  grid-area: 3 / 2 / 4 / 3;
  justify-self: end;
`;

export const CardBack = styled.div`
  background-image: url(${cardBackBg});
  background-size: cover;
  width: 18rem;
  height: 9rem;
  border-radius: 0.5rem;
  position: relative;
  margin-bottom: -3rem;
  align-self: end;

  @media (min-width: 768px) {
    width: 350px;
    height: 175px;
  }
`;

export const CardCvc = styled.p`
  color: white;
  font-size: 0.8rem;
  position: absolute;
  top: 4.5rem;

  left: calc(100% - 3.5rem);
  @media (min-width: 768px) {
    top: 5.5rem;
  }
`;
