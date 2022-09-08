import * as React from "react";
import { SVGProps } from "react";

const SvgPauseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11 2.007V2h1v12h-1V2.007zm-2 0v11.986C9 15.1 9.893 16 11 16h1c1.11 0 2-.9 2-2.007V2.007A2.003 2.003 0 0 0 12 0h-1C9.89 0 9 .9 9 2.007zm-5 0V2h1v12H4V2.007zM2 13.993C2 15.1 2.893 16 4 16h1c1.11 0 2-.9 2-2.007V2.007A2.003 2.003 0 0 0 5 0H4C2.89 0 2 .9 2 2.007v11.986z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgPauseIcon;
