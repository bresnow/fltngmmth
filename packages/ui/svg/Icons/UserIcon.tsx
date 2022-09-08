import * as React from "react";
import { SVGProps } from "react";

const SvgUserIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13 5c0-2.76-2.24-5-5-5a5.002 5.002 0 0 0-3.25 8.8A6.994 6.994 0 0 0 1 15a1 1 0 0 0 2 0c0-2.76 2.24-5 5-5s5 2.24 5 5a1 1 0 0 0 2 0c0-2.693-1.52-5.03-3.75-6.2A4.989 4.989 0 0 0 13 5zM8 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgUserIcon;
