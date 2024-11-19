const SharinganSVG = () => {
    return (
      <svg
      xmlns="http://www.w3.org/2000/svg"
      id="sharingan_mangekou"
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
            offset="0.5"
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
      <g id="tomoe 1">
        <path
          style={{ fill: 'none', stroke: '#000', strokeWidth: 5 }}
          d="M200,150 C 200,215 170,275 150,295 C 130,275 100,215 100,150 C 100,85 130,25 150,5 C 170,25 200,85 200,150 z"
          id="tomoe 1a"
        />
        <path
          style={{ fill: '#000' }}
          d="M 275,77.5 C 260,40 200,0 150,5 C 170,30 183.4,55.1 190,80 C 215,75 244.2,71.7 275,77.5 z"
          id="tomoe 1b"
        />
        <use
          xlinkHref="#tomoe 1b"
          transform="rotate(180 150 150)"
          id="tomoe 1c"
        />
        <path
          style={{ fill: '#000' }}
          d="M 150,258.7 C 141,244 131.5,195.8 128.6,162.4 L 150,150 171.4,162.4 C 168.5,195.8 159,244 150,258.7 z"
          id="path3000"
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
        style={{ fill: '#a00000' }}
        cx="150"
        cy="150"
        r="20"
        id="center"
      />
    </svg>
    );
  };
  
  export default SharinganSVG;
  