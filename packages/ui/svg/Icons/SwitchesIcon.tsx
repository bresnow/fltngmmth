import * as React from "react";
import { SVGProps } from "react";

const SvgSwitchesIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.5 7h-9a3.5 3.5 0 1 1 0-7h9a3.5 3.5 0 1 1 0 7zm0-5a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 12.5 2zm-9 7h9a3.5 3.5 0 1 1 0 7h-9a3.5 3.5 0 1 1 0-7zm0 5a1.5 1.5 0 1 0-.001-3.001A1.5 1.5 0 0 0 3.5 14z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgSwitchesIcon;
