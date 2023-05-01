import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Trending(props) {
  return (
    <Svg
      width={30}
      height={30}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M28.75 7.5L16.875 19.375l-6.25-6.25L1.25 22.5"
        stroke="#FBFCFF"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.25 7.5h7.5V15"
        stroke="#FBFCFF"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default Trending;
