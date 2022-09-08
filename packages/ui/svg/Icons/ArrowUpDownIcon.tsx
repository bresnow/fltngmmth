import * as React from "react";
import { SVGProps } from "react";

const SvgArrowUpDownIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.29 11.27a.987.987 0 0 1 1.412-.001 1.02 1.02 0 0 1 0 1.43l-2.644 2.852a1.49 1.49 0 0 1-2.12 0l-2.645-2.85a1.024 1.024 0 0 1 0-1.433.988.988 0 0 1 1.413-.001l1.29 1.477V3.25l-1.29 1.478a.994.994 0 0 1-1.413 0 1.024 1.024 0 0 1 0-1.433L6.938.445a1.483 1.483 0 0 1 2.12-.001L11.7 3.302a1.02 1.02 0 0 1 0 1.433.993.993 0 0 1-1.412.001l-1.293-1.48v9.503l1.294-1.49z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgArrowUpDownIcon;
