import * as React from "react";
import { SVGProps } from "react";

const SvgPlusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 2 0v6h6a1 1 0 0 1 0 2H9v6a1 1 0 0 1-2 0V9z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgPlusIcon;
