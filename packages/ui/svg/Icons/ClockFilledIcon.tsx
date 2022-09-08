import * as React from "react";
import { SVGProps } from "react";

const SvgClockFilledIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm4-9H9V3.99c0-.55-.448-1-1-1s-1 .45-1 1v4.02c.005.548.45.99 1 .99h4a1 1 0 0 0 0-2z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgClockFilledIcon;
