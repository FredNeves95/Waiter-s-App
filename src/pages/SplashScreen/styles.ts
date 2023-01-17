import styled, { keyframes } from "styled-components";

const showUp = keyframes`
0%, 100% {
      opacity: 0;
    }
50% {
      opacity: 1;
    }
`;

export const SplashScreenContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    animation: ${showUp} 1.5s ease-in-out;
    opacity: 0;
  }
`;
