import * as React from "react";
import { SVGProps } from "react";

const SvgFilledNote = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width="1em"
    height="1em"
  >
    <path d="M10.5 6C8.032 6 6 8.032 6 10.5v27c0 2.468 2.032 4.5 4.5 4.5H28v-9.5c0-2.503 1.997-4.5 4.5-4.5H42V10.5C42 8.032 39.968 6 37.5 6h-27zM33 31a2 2 0 0 0-2 2v8.12L41.12 31H33z" />
  </svg>
);

export default SvgFilledNote;
