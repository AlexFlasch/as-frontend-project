import { css } from 'styled-components';

import palette from '../constants/palette';

const baseShadow = css`
  content: '';
  position: absolute;
  z-index: -1;
  bottom: -10px;
  left: 2.5%;
  height: 105%;
  width: 95%;
  border-radius: 50px;
  opacity: 0.8;
  filter: blur(6px);
  background: ${palette.accentGradient};
`;

const hoverStyles = css`
  &:hover::after,
  &.hovered::after {
    ${baseShadow};

    width: 100%;
    bottom: -5px;
    left: 0;
  }
`;

const activeStyles = css`
  &:active::after,
  &:focus::after,
  &.active::after,
  &.focused::after {
    ${baseShadow};

    width: 100%;
    bottom: -5px;
    left: 0;
    filter: blur(4px);
  }
`;

export default (hasHover = true, hasActive = true) => css`
  position: relative;

  &::after {
    ${baseShadow};

    transition-property: all;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
  }

  ${hasHover ? hoverStyles : ''};
  ${hasActive ? activeStyles : ''};
`;
