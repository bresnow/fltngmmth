import * as React from "react";
import { SVGProps } from "react";

const SvgRibbonPlusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.005 5h-2a1 1 0 1 1 0-2h2V1a1 1 0 1 1 2 0v2h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0V5zm.014 8.628-3.5-2.083a1.002 1.002 0 0 0-1.025 0l-3.49 2.08V2h6a1 1 0 0 0 0-2h-6a2 2 0 0 0-2 2v12.374a1.507 1.507 0 0 0 2.371 1.347l3.63-2.16 3.628 2.16a1.508 1.508 0 0 0 2.37-1.345V9.99a1.001 1.001 0 0 0-2 0l.015 3.634v.004z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgRibbonPlusIcon;
