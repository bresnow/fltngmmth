import * as React from "react";
import { SVGProps } from "react";

const SvgPlusCircleFilledIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm4-7H9v3a1 1 0 0 1-2 0V9H4a1 1 0 0 1 0-2h3V4a1 1 0 0 1 2 0v3h3a1 1 0 0 1 0 2z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgPlusCircleFilledIcon;
