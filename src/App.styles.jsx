import bgMobile from './assets/images/bg-main-mobile.png'
import bgDesktop from './assets/images/bg-main-desktop.png'
import styled from "styled-components";

export const MainWrapper = styled.div`
  width: 100vW;
  min-height: 100vh;
  padding: 3rem 1rem;
  background-image: url(${bgMobile});
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    gap: 8rem;
    background-image: url(${bgDesktop});
    flex-direction: row;
    justify-content: center;
  }

`;