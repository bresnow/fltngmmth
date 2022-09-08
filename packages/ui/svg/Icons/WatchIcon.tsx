import * as React from "react";
import { SVGProps } from "react";

const SvgWatchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2 2 2 0 0 1-2-2V4a2 2 0 0 1 2-2 2 2 0 0 1 2-2h4a2 2 0 0 1 2 2 2 2 0 0 1 2 2v8a2 2 0 0 1-2 2zm0-10H4v8h8V4zM8 5c.55 0 .995.442 1 .99V7h1a1 1 0 0 1 0 2H8a.999.999 0 0 1-1-.99V5.99A.994.994 0 0 1 8 5z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgWatchIcon;
