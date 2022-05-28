import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function BackArrow(props) {
  return (
    <Svg
      width={22}
      height={20}
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M1.124 9.1l7.433-7.433a1.466 1.466 0 011.05-.437 1.486 1.486 0 011.05 2.538L5.762 8.663h14.253a1.486 1.486 0 110 2.973H5.76l4.896 4.897a1.486 1.486 0 11-2.102 2.102l-7.433-7.433A1.488 1.488 0 011.124 9.1z"
        fill="#8C9BAB"
        stroke="#fff"
        strokeWidth={0.75}
      />
    </Svg>
  );
}

export default BackArrow;
