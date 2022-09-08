import * as React from "react";
import { SVGProps } from "react";

const SvgDotsHrIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 10a2 2 0 1 0 .001-3.999A2 2 0 0 0 14 10zm-6 0a2 2 0 1 0 .001-3.999A2 2 0 0 0 8 10zm-6 0a2 2 0 1 0 .001-3.999A2 2 0 0 0 2 10z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgDotsHrIcon;
