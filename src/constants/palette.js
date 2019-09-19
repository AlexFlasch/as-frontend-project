// colors using numbers are ordered from darkest to lightest (1 = dark)
const swatches = {
  purple1: '#202060',
  transparentPurple1: '#20206077',
  purple2: '#602080',
  transparentPurple2: '#60208077',
  purple3: '#CFCFE6',
  transparentPurple3: '#CFCFE677',
  purple4: '#E6E6FF',
  transparentPurple4: '#E6E6FF77',
  accentPurple: '#B030B0',
  transparentAccentPurple: '#B030B077',
};

export default {
  ...swatches,
  text: swatches.purple1,
  background: swatches.purple4,
  bodyBackground: swatches.purple3,
  modalBackground: swatches.transparentPurple1,
  darkPurple: swatches.purple1,
  purple: swatches.purple2,
  accentPurple: swatches.accentPurple,
  textShadow: swatches.transparentAccentPurple,
  gradientStop1: swatches.purple1,
  gradientStop2: swatches.purple2,
  gradientStop3: swatches.accentPurple,
  accentGradient: `linear-gradient(75deg, ${swatches.purple1} 0%, ${swatches.purple2} 50%, ${swatches.accentPurple} 100%);`,
  activeAccentGradient: `linear-gradient(155deg, ${swatches.purple1} 0%, ${swatches.purple2} 50%, ${swatches.accentPurple} 100%);`,
};
