import * as React from "react";
import { SVGProps } from "react";

const SvgLink = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width="1em"
    height="1em"
  >
    <path d="M13 13C6.948 13 2 17.948 2 24s4.948 11 11 11h4a2 2 0 1 0 0-4h-4c-3.89 0-7-3.11-7-7s3.11-7 7-7h4a2 2 0 1 0 0-4h-4zm18 0a2 2 0 1 0 0 4h4c3.89 0 7 3.11 7 7s-3.11 7-7 7h-4a2 2 0 1 0 0 4h4c6.052 0 11-4.948 11-11s-4.948-11-11-11h-4zm-19 9a2 2 0 1 0 0 4h24a2 2 0 1 0 0-4H12z" />
  </svg>
);

export default SvgLink;
