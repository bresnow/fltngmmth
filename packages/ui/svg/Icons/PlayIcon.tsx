import * as React from "react";
import { SVGProps } from "react";

const SvgPlayIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 13.998 13 8 3 2.002v11.996zm-2 0V2.002C1 .448 2.696-.512 4.03.288l10 5.998c1.294.776 1.294 2.652 0 3.428l-10 5.998c-1.334.8-3.03-.16-3.03-1.714z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgPlayIcon;
