import * as React from "react";
import { SVGProps } from "react";

const SvgCartIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m15.953 6.178-1.62 8.046A2.238 2.238 0 0 1 12.193 16H3.807a2.237 2.237 0 0 1-2.142-1.776L.046 6.178a1.778 1.778 0 0 1 .347-1.52c.343-.426.864-.67 1.41-.658H4.01c0-2.21 1.79-4 3.995-4A3.997 3.997 0 0 1 12 4h2.197a1.772 1.772 0 0 1 1.758 2.178zM3.59 13.822a.28.28 0 0 0 .22.178h8.382a.28.28 0 0 0 .218-.178L12.78 12H3.225l.366 1.822zM8.004 2a1.998 1.998 0 0 0-1.998 2H10c0-1.105-.894-2-1.997-2zM2.018 6l.805 4h10.362l.81-4.006H2.01L2.02 6z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgCartIcon;
