import React from 'react';

export default function StoreIcon({greyedOut}:{greyedOut: boolean}) {
  return (
    <svg
      width="20"
      height="22"
      viewBox="0 0 20 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${greyedOut && "black-and-white"}`}
    >
      <path
        d="M16.9998 21.0599H2.97984C2.62984 21.0599 2.33984 20.7799 2.33984 20.4199V6.39995C2.33984 6.04995 2.61984 5.75995 2.97984 5.75995H16.9998C17.3498 5.75995 17.6398 6.03995 17.6398 6.39995V20.4199C17.6398 20.7699 17.3498 21.0599 16.9998 21.0599Z"
        fill="url(#paint0_linear_10097_1454)"
      />
      <path
        d="M18.4602 14.72L5.59017 4.22003C5.13017 3.84003 5.39017 3.09003 5.99017 3.09003H18.8602C19.2102 3.09003 19.5002 3.37003 19.5002 3.73003V14.24C19.5002 14.77 18.8802 15.06 18.4602 14.72Z"
        fill="url(#paint1_linear_10097_1454)"
      />
      <path
        d="M1.54 12.58L14.41 2.07C14.87 1.69 14.61 0.940002 14.01 0.940002H1.14C0.79 0.940002 0.5 1.22 0.5 1.58V12.09C0.5 12.62 1.12 12.92 1.54 12.58Z"
        fill="url(#paint2_linear_10097_1454)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_10097_1454"
          x1="2.34182"
          y1="13.4112"
          x2="17.6375"
          y2="13.4112"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FF9868" />
          <stop offset="1" stop-color="#FF5403" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_10097_1454"
          x1="5.35294"
          y1="8.97921"
          x2="19.5002"
          y2="8.97921"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#03FFE5" />
          <stop offset="1" stop-color="#14B348" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_10097_1454"
          x1="0.5"
          y1="6.8319"
          x2="14.6472"
          y2="6.8319"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FCFF1C" />
          <stop offset="1" stop-color="#FF9D0A" />
        </linearGradient>
      </defs>
    </svg>
  );
}
