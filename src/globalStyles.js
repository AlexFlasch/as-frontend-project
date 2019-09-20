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
    /*
      whole screen minus some space to account for a vertical scrollbar
      in order to avoid having a horizontal scrollbar
    */
    width: calc(100vw - 50px);
    height: 100vh;
    margin: 0 25px;

    background-color: ${palette.bodyBackground};
  }
`;
