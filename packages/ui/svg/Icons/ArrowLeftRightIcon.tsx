import * as React from "react";
import { SVGProps } from "react";

const SvgArrowLeftRightIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.728 10.29a.986.986 0 0 1 0 1.412c-.398.39-1.036.39-1.433 0L.445 9.058a1.486 1.486 0 0 1-.001-2.12l2.85-2.645a1.025 1.025 0 0 1 1.434 0 .992.992 0 0 1 0 1.413l-1.48 1.29h9.5l-1.48-1.29a.99.99 0 0 1 .001-1.413 1.02 1.02 0 0 1 1.43 0l2.852 2.645a1.486 1.486 0 0 1 0 2.12L12.694 11.7a1.019 1.019 0 0 1-1.432 0 .99.99 0 0 1 0-1.412l1.48-1.293H3.238l1.49 1.294z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgArrowLeftRightIcon;
