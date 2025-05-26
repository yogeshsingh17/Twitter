const TwitterBlueTick = ({ width = 15, height = 15 }) => {
  return (
    <svg
      viewBox="0 0 256 256"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <circle cx="128" cy="128" r="120" fill="#1D9BF0" />
      <path
        d="M176.97 94.63l-57.92 67.83a8 8 0 01-11.9.13l-27.93-29.17a8 8 0 1111.64-11l22.12 23.1 52.3-61.23a8 8 0 1112.69 10.34z"
        fill="black"
      />
    </svg>
  );
};

export default TwitterBlueTick;