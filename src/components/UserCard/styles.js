import styled from 'styled-components';

import palette from '../../constants/palette';

export const StyledUserCard = styled.div`
  position: relative;
  background-color: ${palette.purple4};
  border-radius: 15px;
  padding: 15px;
  margin: 25px;

  display: grid;
  grid-template-columns: 25% 1fr 3fr 3fr;
  grid-column-gap: 15px;
  grid-row-gap: 15px;

  box-shadow: 0 14px 28px ${palette.transparentPurple1},
    0 10px 10px ${palette.transparentPurple1};

  transition-property: box-shadow;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;

  &:hover {
    box-shadow: 0 14px 28px ${palette.transparentAccentPurple},
      0 10px 10px ${palette.transparentAccentPurple};
  }

  img {
    grid-column: 1;
    grid-row: 1 / span 4;
    border-radius: 10px;
    width: 100%;
    height: auto;
  }

  .user-name {
    position: relative;
    display: inline-block;
    grid-column: 2 / span 4;
    font-weight: bold;
    font-size: 1.5rem;
    text-shadow: 0 2px 5px ${palette.textShadow};
    padding: 0 10px;

    &::after {
      content: '';
      position: absolute;
      top: calc(1.5rem + 5px);
      left: 0;
      width: 25%;
      height: 10px;
      background: ${palette.accentGradient};
      border-radius: 5px;
      box-shadow: inset 0px 2px 5px ${palette.purple1};
    }
  }

  .age-label {
    grid-column: 2;
    font-weight: bold;
  }

  .user-age {
    grid-column: 3 / span 4;
  }

  .bio-label {
    grid-column: 2;
    font-weight: bold;
  }

  .user-bio {
    grid-column: 3 / span 4;
  }

  .phone-label {
    grid-column: 2;
    font-weight: bold;
  }

  .user-phone {
    grid-column: 3 / span 4;
  }
`;
