import * as React from "react";
import { SVGProps } from "react";

const SvgPinFilledIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 16.05C6.01 16.05 2 9.542 2 6a6 6 0 1 1 12 0c0 3.543-4.01 10.05-6 10.05zM8 4.076a1.986 1.986 0 1 0 2 1.986 1.987 1.987 0 0 0-.59-1.407A1.992 1.992 0 0 0 8 4.075z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgPinFilledIcon;
