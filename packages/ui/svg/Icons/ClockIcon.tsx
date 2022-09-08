import * as React from "react";
import { SVGProps } from "react";

const SvgClockIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zM8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2zm4 7H8a.999.999 0 0 1-1-.99V3.99c0-.55.448-1 1-1s1 .45 1 1V7h3a1 1 0 0 1 0 2z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgClockIcon;
