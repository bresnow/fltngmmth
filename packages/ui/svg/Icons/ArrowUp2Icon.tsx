import * as React from "react";
import { SVGProps } from "react";

const SvgArrowUp2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m9 3.247 2.294 2.48a.99.99 0 0 0 1.414 0c.39-.395.39-1.037 0-1.432L9.06.445A1.469 1.469 0 0 0 8 0c-.4 0-.778.158-1.06.444l-3.647 3.85a1.025 1.025 0 0 0 0 1.434.992.992 0 0 0 1.414 0L7 3.248V15c0 .553.446 1 1 1 .55 0 1-.448 1-1V3.246z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgArrowUp2Icon;
