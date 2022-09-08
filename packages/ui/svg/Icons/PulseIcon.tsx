import * as React from "react";
import { SVGProps } from "react";

const SvgPulseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 11.002h2.5a1 1 0 0 0 .894-.552l.793-1.575 1.343 5.368a1 1 0 0 0 1.935.022l2.06-7.535 1.013 3.547c.123.43.515.726.962.725H15a1 1 0 1 0 0-2h-1.744l-1.794-6.276a1 1 0 0 0-1.928.012l-1.99 7.312L6.47 5.757a1 1 0 0 0-1.864-.201L2.88 9.002H1a1 1 0 0 0 0 2z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgPulseIcon;
