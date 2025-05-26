const ThinkingIcon = ({ width = 24, height = 24, stroke = "white", fill = "none" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={width}
            height={height}
            fill={fill}
            stroke={stroke}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M9 18h6" />
            <path d="M10 22h4" />
            <path d="M12 2a7 7 0 0 0-7 7c0 2.7 1.5 5 3 6.4v.6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-.6c1.5-1.4 3-3.7 3-6.4a7 7 0 0 0-7-7z" />
        </svg>
    );
};

export default ThinkingIcon;