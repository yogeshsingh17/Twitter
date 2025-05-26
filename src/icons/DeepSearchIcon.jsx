const DeepSearchIcon = ({ width = 24, height = 24, stroke = "white" }) => {
    return (
        <svg
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            fill="none"
            stroke={stroke}
            strokeWidth="1.333"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <g>
                <path d="M1.333 8.882C3 14.795 12 13.886 12 9.036c0-2.737-4.038-3.307-4.856-1.921-.616 1.043 2.328.961 1.712 2.004C8.038 10.505 4 9.935 4 7.2c0-5.075 9.667-6.049 10.667-.136" />
            </g>
        </svg>
    );
};

export default DeepSearchIcon;