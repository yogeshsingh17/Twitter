const BalloonIcon = ({ width = 24, height = 24, fill = "currentColor" }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      width={width}
      height={height}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path d="M8 10c0-2.21 1.79-4 4-4v2c-1.1 0-2 .9-2 2H8zm12 1c0 4.27-2.69 8.01-6.44 8.83L15 22H9l1.45-2.17C6.7 19.01 4 15.27 4 11c0-4.84 3.46-9 8-9s8 4.16 8 9zm-8 7c3.19 0 6-3 6-7s-2.81-7-6-7-6 3-6 7 2.81 7 6 7z" />
      </g>
    </svg>
  );
};

export default BalloonIcon;
