import * as React from "react";
import { SVGProps } from "react";

const SvgDocumentFilledIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 4V.073c.4.096.765.295 1.064.576l2.288 2.287c.28.3.478.665.575 1.063H10zM8 4a2 2 0 0 0 2 2h4v8a2 2 0 0 1-2 2H3a2.002 2.002 0 0 1-2-2.008V2.008C1 .9 1.894.003 3 0h5v4z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgDocumentFilledIcon;
