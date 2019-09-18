import styled from 'styled-components';

import palette from '../../constants/palette';
import gradientBoxShadow from '../../styleMixins/gradientBoxShadow';

export const StyledSearchHeader = styled.div`
  position: fixed;
  top: 0vh;
  left: 50%;
  transform: translateX(-50%);
  margin: 15px;

  width: 50vw;
  height: 5vh;
  min-width: 250px;
  min-height: 20px;

  ${gradientBoxShadow(false, false)}
`;

export const StyledSearchInput = styled.input`
  padding: 0 15px;
  z-index: 1;

  outline: none;

  width: 100%;
  height: 100%;

  background-color: ${palette.purple4};

  border: 1px solid ${palette.purple3};
  border-radius: 15px;

  font-size: 1.5rem;
  font-family: inherit;

  transition-property: all;
  transition-duration: 0.1s;
  transition-timing-function: ease-in-out;

  &:active,
  &:focus {
    border-color: ${palette.accentPurple};
  }
`;
