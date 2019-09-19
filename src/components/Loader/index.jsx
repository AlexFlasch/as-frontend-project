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

const SpinnerSvg = () => (
  <StyledSpinner viewBox="0 0 100 100" width="100" height="100">
    <defs>
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
      <filter id="shadow-blur">
        <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
      </filter>
    </defs>

    <mask id="main-cutout">
      <rect x="0" y="0" width="100" height="100" fill="white" />
      <StyledMainMaskCircle cx="50" cy="50" r="25" fill="black" />
    </mask>
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
