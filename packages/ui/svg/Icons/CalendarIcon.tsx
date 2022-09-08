import * as React from "react";
import { SVGProps } from "react";

const SvgCalendarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.993 16H2.007A2.009 2.009 0 0 1 0 14V4a2.002 2.002 0 0 1 2.008-2H4V1a1 1 0 0 1 2 0v1h4V1a1 1 0 0 1 2 0v1h1.993c1.105 0 2.002.895 2.007 2v10a2.002 2.002 0 0 1-2.008 2zM14 4h-2v1a1 1 0 0 1-2 0V4H6v1a1 1 0 0 1-2 0V4H2v10h12V4zm-3 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-3a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-3 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-3a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-3 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-3a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgCalendarIcon;
