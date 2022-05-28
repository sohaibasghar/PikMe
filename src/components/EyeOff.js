import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

function EyeOff(props) {
  return (
    <Svg
      width={24}
      height={25}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G
        clipPath="url(#clip0_2_6370)"
        stroke="#C9CAD1"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round">
        <Path d="M9.9 4.38a9.12 9.12 0 012.1-.24c7 0 11 8 11 8a18.49 18.49 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24m8.06 8.06A10.07 10.07 0 0112 20.14c-7 0-11-8-11-8A18.45 18.45 0 016.06 6.2l11.88 11.88zM1 1.14l22 22" />
      </G>
      <Defs>
        <ClipPath id="clip0_2_6370">
          <Path fill="#fff" transform="translate(0 .14)" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default EyeOff;
