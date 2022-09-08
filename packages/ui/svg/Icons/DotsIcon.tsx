import * as React from "react";
import { SVGProps } from "react";

const SvgDotsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 16a2 2 0 1 0 .001-3.999A2 2 0 0 0 14 16zm0-6a2 2 0 1 0 .001-3.999A2 2 0 0 0 14 10zm0-6a2 2 0 1 0 .001-3.999A2 2 0 0 0 14 4zM8 16a2 2 0 1 0 .001-3.999A2 2 0 0 0 8 16zm0-6a2 2 0 1 0 .001-3.999A2 2 0 0 0 8 10zm0-6A2 2 0 1 0 8.001.001 2 2 0 0 0 8 4zM2 16a2 2 0 1 0 .001-3.999A2 2 0 0 0 2 16zm0-6a2 2 0 1 0 .001-3.999A2 2 0 0 0 2 10zm0-6A2 2 0 1 0 2.001.001 2 2 0 0 0 2 4z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgDotsIcon;
