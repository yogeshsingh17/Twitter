const UpwardArrowIcon = ({ width = 24, height = 24, fill = "white", color = "#202327" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={width}
            height={height}
            fill={fill}
            style={{ color }}
        >
            <g>
                <path d="M12 3.59l7.457 7.45-1.414 1.42L13 7.41V21h-2V7.41l-5.043 5.05-1.414-1.42L12 3.59z" />
            </g>
        </svg>
    );
};

export default UpwardArrowIcon;