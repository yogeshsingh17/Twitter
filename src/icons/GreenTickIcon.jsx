const GreenTickIcon = ({ width = 30, height = 40 }) => {
  return (
    <svg
      viewBox="0 0 256 256"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      {/* Transparent background with blue border (optional) */}
      <circle cx="128" cy="128" r="120" fill="transparent" stroke="none" strokeWidth="16" />

      {/* Thicker, larger white tick */}
      <path
        d="M90 130 L120 160 L180 90"
        fill="none"
        stroke="green"
        strokeWidth="16"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default GreenTickIcon;