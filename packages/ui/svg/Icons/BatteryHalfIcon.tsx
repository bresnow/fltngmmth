import * as React from "react";
import { SVGProps } from "react";

const SvgBatteryHalfIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 10v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a2 2 0 1 1 0 4zm-2-5H2v6h10V5zm-7 5H3V6h2v4zm3 0H6V6h2v4z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgBatteryHalfIcon;
