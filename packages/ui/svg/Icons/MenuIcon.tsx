import * as React from "react";
import type { SVGProps } from "react";

const SvgMenuIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 14h14a1 1 0 0 0 0-2H1a1 1 0 0 0 0 2zm0-5h14a1 1 0 0 0 0-2H1a1 1 0 0 0 0 2zm0-5h14a1 1 0 0 0 0-2H1a1 1 0 0 0 0 2z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgMenuIcon;
