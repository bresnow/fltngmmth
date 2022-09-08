import * as React from "react";
import { SVGProps } from "react";

const SvgBlocksIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 16H2a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2zm0-5H2v3h12v-3zm0-4H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2zm0-5H2v3h12V2z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgBlocksIcon;
