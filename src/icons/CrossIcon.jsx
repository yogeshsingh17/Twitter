const GrayCrossIcon = ({ width = 30, height = 40 }) => {
  return (
    <svg
      viewBox="0 0 256 256"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      {/* Transparent background (same as tick icon) */}
      <circle cx="128" cy="128" r="120" fill="transparent" stroke="none" strokeWidth="16" />

      {/* White cross made of two intersecting lines */}
      <path
        d="M90 90 L166 166"
        fill="none"
        stroke="gray"
        strokeWidth="16"
        strokeLinecap="round"
      />
      <path
        d="M166 90 L90 166"
        fill="none"
        stroke="gray"
        strokeWidth="16"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default GrayCrossIcon;