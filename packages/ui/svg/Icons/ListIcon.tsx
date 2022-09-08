import * as React from "react";
import { SVGProps } from "react";

const SvgListIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 13a1 1 0 0 0-1-1H6a1 1 0 0 0 0 2h9a1 1 0 0 0 1-1zm0-5a1 1 0 0 0-1-1H6a1 1 0 0 0 0 2h9a1 1 0 0 0 1-1zm0-5a1 1 0 0 0-1-1H6a1 1 0 0 0 0 2h9a1 1 0 0 0 1-1zM2 15a2 2 0 1 0 .001-3.999A2 2 0 0 0 2 15zm0-5a2 2 0 1 0 .001-3.999A2 2 0 0 0 2 10zm0-5a2 2 0 1 0 .001-3.999A2 2 0 0 0 2 5z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgListIcon;
