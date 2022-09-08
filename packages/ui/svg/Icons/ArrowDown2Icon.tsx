import * as React from "react";
import { SVGProps } from "react";

const SvgArrowDown2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m9 12.753 2.294-2.48a.99.99 0 0 1 1.414 0c.39.395.39 1.037 0 1.432l-3.647 3.85A1.473 1.473 0 0 1 8 16c-.4 0-.778-.158-1.06-.444l-3.647-3.85a1.025 1.025 0 0 1 0-1.434.992.992 0 0 1 1.414 0L7 12.752V1c0-.553.446-1 1-1 .55 0 1 .448 1 1v11.753z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgArrowDown2Icon;
