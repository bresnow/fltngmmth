import * as React from "react";
import { SVGProps } from "react";

const SvgLockFilledIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13 16H3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1c0-2.21 1.79-4 4-4s4 1.79 4 4h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2zM8 2a2 2 0 0 0-2 2h4a2 2 0 0 0-2-2zm0 6a2 2 0 1 1 .001 3.999A2 2 0 0 1 8 8z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgLockFilledIcon;
