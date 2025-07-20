const SadSmileyIcon = ({ width = 24, height = 24, stroke = "white", strokeWidth = 2, ...props }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Face outline */}
      <circle cx="12" cy="12" r="10" />
      
      {/* Left eye */}
      <circle cx="9" cy="9" r="1.5" fill={stroke} />
      
      {/* Right eye */}
      <circle cx="15" cy="9" r="1.5" fill={stroke} />
      
      {/* Sad mouth - downward curve */}
      <path d="M8 15 Q12 13 16 15" />
    </svg>
  );
};

export default SadSmileyIcon;