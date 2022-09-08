import * as React from "react";
import { SVGProps } from "react";

const SvgTarget2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zM9 2.09V4a1 1 0 0 1-2 0V2.09A5.988 5.988 0 0 0 2.1 7H4a1 1 0 0 1 0 2H2.1A5.985 5.985 0 0 0 7 13.91V12a1 1 0 0 1 2 0v1.91A5.985 5.985 0 0 0 13.9 9H12a1 1 0 0 1 0-2h1.9A5.985 5.985 0 0 0 9 2.09z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgTarget2Icon;
