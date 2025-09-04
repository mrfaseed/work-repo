// AuroraGradientLogo.jsx
// A self-contained React component for a smoothly animated logo.
// Prerequisite: You need to have styled-components installed -> npm install styled-components

import React from 'react';
import styled, { keyframes } from 'styled-components';

// The animation for the background gradient
const auroraSpread = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// A rich, 12-color "Cosmic Aurora" palette for the gradient
const cosmicAuroraColors = [
  '#27003b', '#4a007b', '#8b1da8', '#c729d1',
  '#f050f0', '#f050a8', '#f05050', '#f0a850',
    
  '#f0f050', '#a8f050', '#05ffa1', '#01cdfe',
];

// The styled container that holds the animation and mask
const StyledLogoContainer = styled.div`
  min-width: 250px;
  min-height: 64px;

  /* Create the multi-color gradient from our color array */
  background: linear-gradient(60deg, ${cosmicAuroraColors.join(', ')});

  /* Make the background huge to allow for smooth movement */
  background-size: 400% 400%;

  /* Apply the animation */
  animation: ${auroraSpread} 18s ease-in-out infinite;

  /* Use the provided SVG as a mask to clip the animated background */
  mask-image: ${(props) => props.maskUrl};
  -webkit-mask-image: ${(props) => props.maskUrl};
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-position: center;
  -webkit-mask-position: center;
`;

// The main component function
export default function AuroraGradientLogo({ width = '100%', height = 'auto', ...rest }) {
  // The SVG markup with a simple white fill for masking.
  // KEY FIX: Added fill-rule="evenodd" to the path for the 'B' shape
  // This ensures the inner counter-shape (the hole) is correctly rendered.
  const svgMarkup = `
    <svg viewBox="0 0 982.737 250.736" xmlns="http://www.w3.org/2000/svg">
      <g fill="white">
        <path d="M494.835 453.131h45.357V519H642.466v-65.869h44.467v193.362H642.466q-.444-47.66-.889-95.319l-100.98-.5-2.184 95.815H494.835z" transform="translate(-494.835 -397.178)"/>
        <path d="M1154.893 397.178h17.576l.236.262a23.638 23.638 0 0035.13-.064l.177-.2h17.445l-10.93 11.812a64.61 64.61 0 00-17.191 43.886v.255h-14.192a65.1 65.1 0 00-17.32-44.142z" transform="translate(-494.835 -397.178)"/>
        <path class="cls-2" d="M1127.519,558.486a6.2,6.2,0,0,1-1.5-8.337c3.544-5.491,9.524-24.067,6.856-37.046-6.088-29.617-36.315-38.128-48.719-38.032-.447,0-.887-.1-1.332-.1H959.093c-4.44,0-8.041,3.1-8.04,6.925q0,10.256,0,20.511c0,3.833,3.615,6.937,8.066,6.925l113.526-.317c.3,0,.592-.011.887-.039,2.437-.227,17.082-.956,17.444,14.336.395,16.681-15.019,17.021-15.02,17.021l-116.914.637c-4.421.024-7.989,3.118-7.989,6.925q0,45.533,0,91.065c0,3.817,3.578,6.914,8.01,6.924,28.651.067,124.818.27,133.889-.019,8.449-.27,8.449-.27,16.191-3.36a11.789,11.789,0,0,1,1.629-.555c3.989-.958,21.569-6.7,32.379-35.234C1152.229,582.757,1136.354,565.71,1127.519,558.486Zm-37.363,51.033H995.688v-33.7h87.353s18.578,1.7,18.182,16S1090.156,609.519,1090.156,609.519Z" transform="translate(-494.835 -397.178)"/>
        <path d="M1237.129 453.6h51.78l66.588 67.234 63.552-67.234h55.732l-91.616 93.787 94.407 97.873h-54.546q-33.666-34.469-67.332-68.937l-67.058 68.937h-54.151l94.134-97.362z" transform="translate(-494.835 -397.178)"/>
        <path d="M696.465 504.255h88.386l23.83 41.945 72.51-41.945H936.34L822.979 564.583l-28.085 50.991s-8.851 11.575 6.468 12.256s30.3 0 30.3 0l-11.575 20.085H735.319s-32.851-11.162-12.085-42.822c19.558-29.818 19.546-29.921 15.671-24.4z" transform="translate(-494.835 -397.178)"/>
        <rect x="672.612" y="78.043" width="45.455" height="170.553"/>
      </g>
    </svg>
  `;

  const encodedSvg = encodeURIComponent(svgMarkup);
  const maskUrl = `url("data:image/svg+xml;charset=UTF-8,${encodedSvg}")`;

  const containerStyle = {
    width,
    height,
    aspectRatio: '982.737 / 250.736',
  };

  return <StyledLogoContainer style={containerStyle} maskUrl={maskUrl} {...rest} />;
}