import * as React from "react";
import { SVGProps } from "react";

const SvgDuplicateIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 12h-2v2a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2zM2 14h8V6H2v8zM14 2H6v2h4a2 2 0 0 1 2 2v4h2V2z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgDuplicateIcon;
