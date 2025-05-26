const FocusModeIcon = ({ width = 24, height = 24, stroke = "white", strokeWidth = 2 }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
        >
            {/* Top-left corner */}
            <path d="M4 9V5H8" />
            {/* Top-right corner */}
            <path d="M16 5h4v4" />
            {/* Bottom-right corner */}
            <path d="M20 15v4h-4" />
            {/* Bottom-left corner */}
            <path d="M8 19H4v-4" />
        </svg>
    );
};

export default FocusModeIcon;
