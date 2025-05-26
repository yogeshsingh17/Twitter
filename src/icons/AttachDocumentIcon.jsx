const AttachDocumentIcon = ({ width = 24, height = 24, fill = "white" }) => {
    return (
        <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            fill={fill}
            aria-hidden="true"
        >
            <g>
                <path d="M14 4c-1.66 0-3 1.34-3 3v8c0 .55.45 1 1 1s1-.45 1-1V8h2v7c0 1.66-1.34 3-3 3s-3-1.34-3-3V7c0-2.76 2.24-5 5-5s5 2.24 5 5v8c0 3.87-3.13 7-7 7s-7-3.13-7-7V8h2v7c0 2.76 2.24 5 5 5s5-2.24 5-5V7c0-1.66-1.34-3-3-3z" />
            </g>
        </svg>
    );
};

export default AttachDocumentIcon;
