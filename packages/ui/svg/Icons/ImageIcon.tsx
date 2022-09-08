import * as React from "react";
import { SVGProps } from "react";

const SvgImageIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 16H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2zm0-3.952-3.023-2.7L6.687 14H14v-1.952zM2 2v12h1.975l6.135-6.648c.4-.44 1.08-.48 1.528-.085L14 9.375V2H2zm4 6a2 2 0 1 1-.001-3.999A2 2 0 0 1 6 8z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgImageIcon;
