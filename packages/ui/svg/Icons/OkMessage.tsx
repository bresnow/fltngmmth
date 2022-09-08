import * as React from "react";
import { SVGProps } from "react";

const SvgOkMessage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width="1em"
    height="1em"
  >
    <path d="M29.97 9.973A2 2 0 0 0 28 12v24a2 2 0 1 0 4 0V25.87l10.525 11.482a2 2 0 1 0 2.95-2.704l-9.819-10.71 8.881-10.657a2 2 0 0 0-1.56-3.302 2 2 0 0 0-1.514.74L32 22.074V12a2 2 0 0 0-2.03-2.027zM13.5 10C6.888 10 2 16.517 2 24s4.888 14 11.5 14S25 31.483 25 24s-4.888-14-11.5-14zm0 4c3.881 0 7.5 4.228 7.5 10s-3.619 10-7.5 10S6 29.772 6 24s3.619-10 7.5-10z" />
  </svg>
);

export default SvgOkMessage;
