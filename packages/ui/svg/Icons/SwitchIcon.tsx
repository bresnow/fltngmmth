import * as React from "react";
import { SVGProps } from "react";

const SvgSwitchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11 10a2 2 0 1 0 .001-3.999A2 2 0 0 0 11 10zM2 8c0-1.657 1.34-3 2.993-3h6.014a3 3 0 0 1 0 6H4.993A3 3 0 0 1 2 8zM0 8a5 5 0 0 0 4.993 5h6.014A4.997 4.997 0 0 0 16 8a5 5 0 0 0-4.993-5H4.993A4.997 4.997 0 0 0 0 8z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgSwitchIcon;
