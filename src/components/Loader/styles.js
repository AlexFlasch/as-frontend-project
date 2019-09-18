import styled, { keyframes } from 'styled-components';

import palette from '../../constants/palette';

export const StyledLoader = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100vw;
  height: 100vh;

  z-index: 5;

  background-color: ${palette.modalBackground};
`;

export const StyledSpinner = styled.svg`
  width: 10vw;
  height: 10vw;
  margin: 10px;
`;

const spinAnim = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
`;

export const StyledMainMaskCircle = styled.circle`
  transform-origin: top center;
  animation-name: ${spinAnim};
  animation-duration: 1.5s;
  animation-delay: 0.5s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
`;

export const StyledShadowMaskCircle = styled.circle`
  transform-origin: top center;
  animation-name: ${spinAnim};
  animation-duration: 1.5s;
  animation-delay: 0.5s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
`;
