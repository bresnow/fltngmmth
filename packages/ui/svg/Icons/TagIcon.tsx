import * as React from "react";
import { SVGProps } from "react";

const SvgTagIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 7a2 2 0 1 1-.001-3.999A2 2 0 0 1 5 7zm9.01 1.5c-.005.005-.005.002-.002.005l-6.07-6.07c-.2-.2-.72-.415-1-.417l-4.955-.024c.01 0 .01-.002.01-.012l.025 4.955c.002.284.218.8.417 1l6.07 6.07c0-.002 0-.002-.005.002l5.51-5.51zm-4.1 6.92a1.992 1.992 0 0 1-2.814-.004l-6.07-6.07c-.57-.57-.998-1.59-1.002-2.4L0 1.993A1.987 1.987 0 0 1 1.992 0l4.956.024c.805.004 1.827.428 2.4 1l6.07 6.07c.772.773.78 2.04.003 2.815l-5.51 5.51z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgTagIcon;
