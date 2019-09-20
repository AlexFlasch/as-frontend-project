import { css } from 'styled-components';

import palette from '../constants/palette';

// the base gradient shadow effect in css
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

// transition some of the gradient shadow properties on hover
const hoverStyles = css`
  &:hover::after,
  &.hovered::after {
    ${baseShadow};

    width: 100%;
    bottom: -5px;
    left: 0;
  }
`;

// transition some of the gradient shadow properties on focus or active states
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

// allow specifying whether you'd like the hover and active effects present where the mixin is used,
// and then return the CSS tagged template literal to be used as a mixin accordingly
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
