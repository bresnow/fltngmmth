import * as React from "react";
import { SVGProps } from "react";

const SvgCloseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.586 8 .293 1.707A1 1 0 0 1 1.707.293L8 6.586 14.293.293a1 1 0 0 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgCloseIcon;
