import * as React from "react";
import { SVGProps } from "react";

const SvgDocumentIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 16H3a2.002 2.002 0 0 1-2-2.008V2.008C1 .9 1.894.003 3 0h6.5c.583.018 1.14.248 1.563.65l2.288 2.287c.4.424.63.98.65 1.563V14a2 2 0 0 1-2 2zm-9-2h9V6h-2a2 2 0 0 1-2-2V2c-1.92 0-5 0-5 .006V14zm7-11.586V4h1.587L10 2.414z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgDocumentIcon;
