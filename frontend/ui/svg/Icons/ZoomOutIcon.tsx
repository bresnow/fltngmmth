import * as React from "react";
import type { SVGProps } from "react";

const SvgZoomOutIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 6a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2h6zm1.206 6.617 3.09 3.086a.985.985 0 0 0 1.41 0 1.016 1.016 0 0 0 0-1.43l-3.08-3.08a7.007 7.007 0 1 0-5.619 2.821 6.98 6.98 0 0 0 4.2-1.397zm-4.2-.605a5.004 5.004 0 1 1 .001-10.01 5.004 5.004 0 0 1 5.004 5.005 5.004 5.004 0 0 1-5.003 5.005z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgZoomOutIcon;
