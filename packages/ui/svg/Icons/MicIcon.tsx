import * as React from "react";
import { SVGProps } from "react";

const SvgMicIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 13.925V15a1 1 0 1 1-2 0v-1.075a6.006 6.006 0 0 1-5-5.923 1 1 0 1 1 2 0c0 2.21 1.79 4.004 4 4.004s4-1.793 4-4.004a1 1 0 1 1 2 0 6.006 6.006 0 0 1-5 5.923zm-1-2.92c-.797 0-1.56-.317-2.123-.882A2.997 2.997 0 0 1 5 7.996V3.003a3 3 0 1 1 6 0v4.993a3.008 3.008 0 0 1-3 3.01z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgMicIcon;
