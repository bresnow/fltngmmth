import * as React from "react";
import { SVGProps } from "react";

const SvgBubbleFilledIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.707 15.7a1 1 0 0 0 .255-.982c-.1-.35-.867-3.026-.866-3.035a7.999 7.999 0 1 0-3.41 3.412l3.037.86a1 1 0 0 0 .984-.254z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgBubbleFilledIcon;
