const DropdownIcon = ({ width = 24, height = 24, fill = "white" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            width={width}
            height={height}
            fill={fill}
        >
            <path d="M96 192l64 64 64-64c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-80 80c-9.4 9.4-24.6 9.4-33.9 0l-80-80c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z" />
        </svg>
    );
};

export default DropdownIcon;
