import styled from 'styled-components';

import palette from '../../constants/palette';

export const StyledLoadMoreButton = styled.button`
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 2;

  cursor: pointer;
  border: none;
  border-radius: 10px;
  color: ${palette.purple4};
  font-weight: bold;
  font-size: 1.25rem;
  padding: 10px;
  margin: 10px;

  background: ${palette.accentGradient};
  box-shadow: 0 5px 5px ${palette.transparentPurple1};
  text-shadow: none;

  transition-property: all;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;

  /* before element to help us give the illusion of a gradient transition */
  &::before {
    content: '${props => props.children}';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    border: none;
    border-radius: 10px;
    color: ${palette.purple4};
    font-weight: bold;
    font-size: 1.25rem;

    opacity: 0;
    background: ${palette.activeAccentGradient};
    text-shadow: 0 0 2px ${palette.transparentAccentPurple};

    transition-property: opacity;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
  }

  &:hover {
    box-shadow: 0 2px 2.5px ${palette.transparentAccentPurple};
    text-shadow: 0 0 2px ${palette.transparentAccentPurple};
  }

  &:hover::before {
    opacity: 1;
  }
`;
