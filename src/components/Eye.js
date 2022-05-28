import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Eye(props) {
  return (
    <Svg
      width={24}
      height={25}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M1 12.07s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
        stroke="#C9CAD1"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 15.07a3 3 0 100-6 3 3 0 000 6z"
        stroke="#C9CAD1"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default Eye;
