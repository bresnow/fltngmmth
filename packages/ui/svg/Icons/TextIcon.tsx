import * as React from "react";
import { SVGProps } from "react";

const SvgTextIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 4a1 1 0 0 1-1-1V2H9v12h1a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2h1V2H3v1a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgTextIcon;
