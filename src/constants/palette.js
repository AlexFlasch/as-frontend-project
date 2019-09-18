// colors using numbers are ordered from darkest to lightest (1 = dark)
const swatches = {
  purple1: '#202060',
  purple2: '#602080',
  purple3: '#CFCFE6',
  purple4: '#E6E6FF',
  transparentDarkPurple: '#20204077',
  accentPurple: '#B030B0',
};

export default {
  ...swatches,
  text: swatches.purple1,
  background: swatches.purple4,
  bodyBackground: swatches.purple3,
  modalBackground: swatches.transparentDarkPurple,
  darkPurple: swatches.purple1,
  purple: swatches.purple2,
  accentPurple: swatches.accentPurple,
  gradientStop1: swatches.purple1,
  gradientStop2: swatches.purple2,
  gradientStop3: swatches.accentPurple,
  accentGradient: `linear-gradient(75deg, ${swatches.purple1} 0%, ${swatches.purple2} 50%, ${swatches.accentPurple} 100%);`,
};
