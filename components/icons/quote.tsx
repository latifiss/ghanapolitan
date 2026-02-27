import * as React from 'react';

const Quote = ({ width = 21, height = 14, color = '#000', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox={`0 0 21 14`}
    fill="none"
    style={{ marginRight: '8px' }}
    {...props}
  >
    <path
      fill={color}
      d="M5.255 0h4.75c-.572 4.53-1.077 8.972-1.297 13.941H0C.792 9.104 2.44 4.53 5.255 0Zm11.061 0H21c-.506 4.53-1.077 8.972-1.297 13.941h-8.686C11.919 9.104 13.501 4.53 16.316 0Z"
    />
  </svg>
);
export default Quote;