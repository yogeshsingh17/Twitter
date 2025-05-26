const AdvancedSettingsIcon = ({ width = 24, height = 24, fill = "currentColor", color = "#B6B9BC" }) => {
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
                <path d="M14 6V3h2v8h-2V8H3V6h11zm7 2h-3.5V6H21v2zM8 16v-3h2v8H8v-3H3v-2h5zm13 2h-9.5v-2H21v2z" />
            </g>
        </svg>
    );
};

export default AdvancedSettingsIcon;