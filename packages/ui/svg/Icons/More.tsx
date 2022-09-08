import * as React from "react";
import { SVGProps } from "react";

const SvgMore = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width="1em"
    height="1em"
  >
    <path d="M7.998 18.498c-3.02 0-5.502 2.481-5.502 5.502 0 3.02 2.481 5.502 5.502 5.502 3.02 0 5.502-2.481 5.502-5.502 0-3.02-2.482-5.502-5.502-5.502zm32 0c-3.02 0-5.502 2.481-5.502 5.502 0 3.02 2.481 5.502 5.502 5.502 3.02 0 5.502-2.481 5.502-5.502 0-3.02-2.482-5.502-5.502-5.502zm-16 .002c-3.02 0-5.5 2.48-5.5 5.5s2.48 5.5 5.5 5.5 5.5-2.48 5.5-5.5-2.48-5.5-5.5-5.5z" />
  </svg>
);

export default SvgMore;
