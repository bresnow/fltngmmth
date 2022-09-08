import * as React from "react";
import { SVGProps } from "react";

const SvgBrokenLink = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width="1em"
    height="1em"
  >
    <path d="M17.066 2.979a2 2 0 0 0-1.666 3.22l3 4a2 2 0 1 0 3.2-2.398l-3-4a2 2 0 0 0-1.534-.822zm14.008 0A2 2 0 0 0 29.4 3.8l-3 4a2 2 0 1 0 3.2 2.398l3-4a2 2 0 0 0-1.526-3.22zM13 13C6.948 13 2 17.948 2 24s4.948 11 11 11h4a2 2 0 1 0 0-4h-4c-3.89 0-7-3.11-7-7s3.11-7 7-7h4a2 2 0 1 0 0-4h-4zm18 0a2 2 0 1 0 0 4h4c3.89 0 7 3.11 7 7s-3.11 7-7 7h-4a2 2 0 1 0 0 4h4c6.052 0 11-4.948 11-11s-4.948-11-11-11h-4zM20.074 36.979a2 2 0 0 0-1.674.822l-3 4a2 2 0 1 0 3.2 2.398l3-4a2 2 0 0 0-1.526-3.22zm7.992 0a2 2 0 0 0-1.666 3.22l3 4a2 2 0 1 0 3.2-2.398l-3-4a2 2 0 0 0-1.534-.822z" />
  </svg>
);

export default SvgBrokenLink;
