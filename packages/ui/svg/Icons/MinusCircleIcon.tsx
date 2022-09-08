import * as React from "react";
import { SVGProps } from "react";

const SvgMinusCircleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zM8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2zm4 7H4a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgMinusCircleIcon;
