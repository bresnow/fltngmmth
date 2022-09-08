import * as React from "react";
import { SVGProps } from "react";

const SvgBubbleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.993 13.995a6.004 6.004 0 1 1 4.289-10.212 6 6 0 0 1 .88 7.27c-.14.238-.175.522-.1.787l.502 1.702-1.718-.49a1 1 0 0 0-.787.1 5.99 5.99 0 0 1-3.067.843zm6.73 1.96a1 1 0 0 0 1.239-1.236c-.1-.35-.867-3.026-.866-3.035a7.999 7.999 0 1 0-3.41 3.411l3.04.862h-.003z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgBubbleIcon;
