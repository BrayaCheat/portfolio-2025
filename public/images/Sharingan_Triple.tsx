const Sharingan_Triple = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            id="sharingan"
            width="300"
      height="300"
      viewBox="0 0 300 300"
      style={{
        objectFit: 'contain',
        maxWidth: '100%',
        maxHeight: '100%',
      }}
        >
            <defs id="defs">
                <radialGradient id="gr">
                    <stop
                        offset="0"
                        style={{ stopColor: '#660000', stopOpacity: 1 }}
                        id="st1"
                    />
                    <stop
                        style={{ stopColor: '#c30000', stopOpacity: 1 }}
                        offset="0.6"
                        id="st2"
                    />
                    <stop
                        style={{ stopColor: '#a00000', stopOpacity: 1 }}
                        offset="1"
                        id="st3"
                    />
                </radialGradient>
            </defs>
            <circle
                style={{
                    fill: 'url(#gr)',
                    stroke: '#000',
                    strokeWidth: 10,
                }}
                cx="150"
                cy="150"
                r="145"
                id="iris"
            />
            <circle
                style={{
                    fill: 'none',
                    stroke: '#000000',
                    strokeWidth: 4,
                    strokeOpacity: 0.3,
                }}
                cx="150"
                cy="150"
                r="90"
                id="circle"
            />
            <g id="tomoe 1">
                <circle
                    style={{ fill: '#000' }}
                    cx="60"
                    cy="150"
                    r="20"
                    id="tomoe 1a"
                />
                <path
                    style={{ fill: '#000' }}
                    d="M 60,170 59.4,152.9 C 43.9,152.9 28.7,154.1 18.8,133.3 22.4,156 32.8,170 60,170 z"
                    id="tomoe 1b"
                />
            </g>
            <use
                xlinkHref="#tomoe 1"
                transform="rotate(120 150 150)"
                id="tomoe 2"
            />
            <use
                xlinkHref="#tomoe 1"
                transform="rotate(-120 150 150)"
                id="tomoe 3"
            />
            <circle
                style={{ fill: '#000' }}
                cx="150"
                cy="150"
                r="25"
                id="center"
            />
        </svg>
    );
};

export default Sharingan_Triple;
