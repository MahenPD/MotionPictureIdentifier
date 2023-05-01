import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Grid(props) {
  return (
    <>
      <Svg
        width={30}
        height={30}
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <Path
          d="M12.5 3.75H3.75v8.75h8.75V3.75zM26.25 3.75H17.5v8.75h8.75V3.75zM26.25 17.5H17.5v8.75h8.75V17.5zM12.5 17.5H3.75v8.75h8.75V17.5z"
          stroke="#fff"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </>
  );
}

export default Grid;
