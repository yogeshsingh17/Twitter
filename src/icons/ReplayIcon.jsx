const ReplayIcon = ({ width = 24, height = 24, fill = "white" }) => {
    return (
        <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            width={width}
            height={height}
            fill={fill}
            xmlns="http://www.w3.org/2000/svg"
        >
            <g>
                <path d="M12 4C9.25 4 6.83 5.39 5.38 7.5H8v2H2v-6h2V6c1.82-2.43 4.73-4 8-4 5.52 0 10 4.48 10 10s-4.48 10-10 10c-4.76 0-8.74-3.33-9.75-7.78l1.95-.44C5.01 17.34 8.19 20 12 20c4.42 0 8-3.58 8-8s-3.58-8-8-8zm-1 4h2v3.59l3.21 3.2-1.42 1.42-3.79-3.8V8z" />
            </g>
        </svg>
    );
};

export default ReplayIcon;