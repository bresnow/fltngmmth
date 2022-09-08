import * as React from "react";
import { SVGProps } from "react";

const SvgAddLink = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width="1em"
    height="1em"
  >
    <path d="M13 8C6.948 8 2 12.948 2 19s4.948 11 11 11h4a2 2 0 1 0 0-4h-4c-3.89 0-7-3.11-7-7s3.11-7 7-7h4a2 2 0 1 0 0-4h-4zm16 0c-1.1 0-2 .9-2 2s.9 2 2 2h4c3.86 0 7 3.14 7 7 0 1.33-.37 2.57-1.02 3.63 1.29.41 2.5 1.02 3.58 1.8.92-1.6 1.44-3.45 1.44-5.43 0-6.07-4.93-11-11-11h-4zm-17 9a2 2 0 1 0 0 4h22a2 2 0 1 0 0-4H12zm23 7c-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11-4.925-11-11-11zm0 3a1 1 0 0 1 1 1v6h6a1 1 0 0 1 0 2h-6v6a1 1 0 0 1-2 0v-6h-6a1 1 0 0 1 0-2h6v-6a1 1 0 0 1 1-1z" />
  </svg>
);

export default SvgAddLink;
