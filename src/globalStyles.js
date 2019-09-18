import { createGlobalStyle } from 'styled-components';

import palette from './constants/palette';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Raleway', sans-serif;
    font-size: 18px;
  }

  body {
    width: 100vw;
    height: 100vh;

    background-color: ${palette.bodyBackground};
  }
`;
