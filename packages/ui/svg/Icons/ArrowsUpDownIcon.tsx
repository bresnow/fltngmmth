import * as React from "react";
import { SVGProps } from "react";

const SvgArrowsUpDownIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m12.998 12.753 1.295-1.48a.99.99 0 0 1 1.414 0c.39.396.39 1.037 0 1.432l-2.647 2.85c-.284.287-.66.445-1.06.445-.402 0-.78-.158-1.06-.444l-2.648-2.85a1.024 1.024 0 0 1 0-1.433.99.99 0 0 1 1.414 0l1.292 1.478V1a1 1 0 0 1 2 0v11.753zm-8-9.506 1.296 1.48a.99.99 0 0 0 1.414 0c.39-.396.39-1.037 0-1.432L5.06.445A1.469 1.469 0 0 0 4 0c-.4 0-.778.158-1.06.444L.293 3.294a1.024 1.024 0 0 0 0 1.433.99.99 0 0 0 1.414 0L3 3.25V15a1 1 0 1 0 2 0V3.246z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgArrowsUpDownIcon;
