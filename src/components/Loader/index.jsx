import React from 'react';
import PropTypes from 'prop-types';
import posed, { PoseGroup } from 'react-pose';

import {
  StyledLoader,
  StyledSpinner,
  StyledMainMaskCircle,
  StyledShadowMaskCircle,
} from './styles';

import palette from '../../constants/palette';

// some SVG fun to make a neat looking loader!
const SpinnerSvg = () => (
  <StyledSpinner viewBox="0 0 100 100" width="100" height="100">
    <defs>
      {/* The gradient that shows the purple stuff behind the white circle (and inside the cutout from the masks below) */}
      <linearGradient id="shadow-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop
          offset="10%"
          style={{ stopColor: palette.gradientStop1, stopOpacity: 1 }}
        />
        <stop
          offset="50%"
          style={{ stopColor: palette.gradientStop2, stopOpacity: 1 }}
        />
        <stop
          offset="90%"
          style={{ stopColor: palette.gradientStop3, stopOpacity: 1 }}
        />
      </linearGradient>
      {/* Filter to make the circle acting as the gradient shadow look more like a shadow instead of a normal circle */}
      <filter id="shadow-blur">
        <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
      </filter>
    </defs>

    {/* Mask to cut out the white circle
    (keep it a bit bigger than the shadow mask to make the gradient more pronounced inside the cutout) */}
    <mask id="main-cutout">
      <rect x="0" y="0" width="100" height="100" fill="white" />
      <StyledMainMaskCircle cx="50" cy="50" r="25" fill="black" />
    </mask>
    {/* Mask to cut out the blurred purple circle acting as the shadow
    (the mask itself is also blurred to keep a nice shadow-y effect) */}
    <mask id="shadow-cutout">
      <rect x="0" y="0" width="100" height="100" fill="white" />
      <StyledShadowMaskCircle
        cx="50"
        cy="50"
        r="20"
        fill="black"
        filter="url(#shadow-blur)"
      />
    </mask>

    <circle
      cx="50"
      cy="55"
      r="40"
      fill="url(#shadow-gradient)"
      filter="url(#shadow-blur)"
      opacity="0.8"
      mask="url(#shadow-cutout)"
    />
    <circle cx="50" cy="50" r="37.5" fill="#fff" mask="url(#main-cutout)" />
  </StyledSpinner>
);

// Allows the Loading screen to fade in and out nicely when its mounted and unmounted
const FadeTransition = posed.div({
  exit: { opacity: 0, ease: 'easeInOut' },
  enter: { opacity: 1, ease: 'easeInOut' },
});

const Loader = props => {
  return (
    <PoseGroup enterPose="enter" exitPose="exit">
      {props.visible && (
        <FadeTransition key="loader" initialPose="hidden">
          <StyledLoader>
            <SpinnerSvg />
            <span>Loading...</span>
          </StyledLoader>
        </FadeTransition>
      )}
    </PoseGroup>
  );
};

Loader.defaultProps = {
  visible: true,
};

Loader.propTypes = {
  visible: PropTypes.bool,
};

export default Loader;
