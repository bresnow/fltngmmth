import * as React from "react";
import { SVGProps } from "react";

const SvgDocumentPlusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 13h-2v2a1 1 0 0 1-2 0v-2H9a1 1 0 0 1 0-2h2V9a1 1 0 0 1 2 0v2h2a1 1 0 0 1 0 2zm-3-6a1 1 0 0 1-1-1H9a2 2 0 0 1-2-2V2c-1.92 0-5 0-5 .006V14h7a1 1 0 0 1 0 2H2a2.002 2.002 0 0 1-2-2.008V2.008C0 .9.894.003 2 0h6.5c.583.018 1.14.248 1.563.65l2.288 2.287c.4.424.63.98.65 1.563V6a1 1 0 0 1-1 1zM9 2.414V4h1.587L9 2.414z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgDocumentPlusIcon;
