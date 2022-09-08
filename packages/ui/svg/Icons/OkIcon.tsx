import * as React from "react";
import { SVGProps } from "react";

const SvgOkIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 14c.4 0 .778-.158 1.06-.443l9.648-9.833c.39-.395.39-1.033 0-1.428s-1.024-.395-1.414 0L5 11.772 1.707 8.296a.99.99 0 0 0-1.414 0 1.018 1.018 0 0 0 0 1.428l3.646 3.833c.283.285.658.443 1.06.443z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgOkIcon;
