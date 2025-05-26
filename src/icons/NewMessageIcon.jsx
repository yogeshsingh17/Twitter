const NewMessageIcon = ({ fill = "none" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"  // Increased viewBox to fit the plus sign
            fill={fill}
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            width="30"
            height="30"
        >
            {/* Message Box */}
            <path d="M4 4h24c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="30,6 16,16 2,6" />

            {/* Plus Sign at Bottom Right */}
            <g transform="translate(22, 22)">
                <circle cx="4" cy="4" r="4" fill="white" />
                <line x1="4" y1="2.5" x2="4" y2="5.5" stroke="black" strokeWidth="1.5" />
                <line x1="2.5" y1="4" x2="5.5" y2="4" stroke="black" strokeWidth="1.5" />
            </g>
        </svg>
    );
};

export default NewMessageIcon;
