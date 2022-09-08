import * as React from "react";
import { SVGProps } from "react";

const SvgOkCircleFilledIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm-1-5c.4 0 .778-.158 1.06-.443l3.648-3.833c.39-.395.39-1.033 0-1.428s-1.024-.395-1.414 0L7 8.772 5.707 7.296a.992.992 0 0 0-1.414 0 1.018 1.018 0 0 0 0 1.428l1.646 1.833c.283.285.658.443 1.06.443z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgOkCircleFilledIcon;
