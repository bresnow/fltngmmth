import * as React from "react";
import { SVGProps } from "react";

const SvgStopIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm6-8a5.947 5.947 0 0 0-1.118-3.468l-8.35 8.35A5.987 5.987 0 0 0 14 8zM2 8c0 1.244.392 2.457 1.118 3.468l8.35-8.35A5.987 5.987 0 0 0 2 8z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgStopIcon;
