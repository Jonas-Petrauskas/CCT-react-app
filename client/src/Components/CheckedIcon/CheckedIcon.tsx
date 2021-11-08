import React from "react";

function CheckedIcon({ size = 21 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.2469 22.6235C15.9061 22.6235 20.4938 18.1528 20.4938 12.6378C20.4938 7.12285 15.9061 2.6521 10.2469 2.6521C4.5877 2.6521 0 7.12285 0 12.6378C0 18.1528 4.5877 22.6235 10.2469 22.6235Z"
        fill="white"
      />
      <path
        d="M10.2469 22.1242C15.6231 22.1242 19.9815 17.877 19.9815 12.6378C19.9815 7.39858 15.6231 3.15137 10.2469 3.15137C4.87064 3.15137 0.512329 7.39858 0.512329 12.6378C0.512329 17.877 4.87064 22.1242 10.2469 22.1242Z"
        stroke="#00ADAA"
      />
      <path
        d="M4.09875 9.9417L9.83703 17.7086L21.8731 1.88623"
        stroke="#00ADAA"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default CheckedIcon;
