import * as React from "react";
import { SVGProps } from "react";

const SvgMoonIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.424 13.42a6 6 0 0 1 0-10.84 1 1 0 0 0-.001-1.809 8.001 8.001 0 1 0 0 14.461 1 1 0 0 0-.001-1.809zM7.994 8c0 2.264.963 4.42 2.65 5.93-.214.04-.43.062-.65.07a6 6 0 0 1 0-12c.22.01.436.032.65.07A7.96 7.96 0 0 0 7.994 8z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgMoonIcon;
