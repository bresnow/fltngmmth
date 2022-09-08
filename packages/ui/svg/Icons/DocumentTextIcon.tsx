import * as React from "react";
import { SVGProps } from "react";

const SvgDocumentTextIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 16H3a2.002 2.002 0 0 1-2-2.008V2.008C1 .9 1.894.003 3 0h6.5a2.364 2.364 0 0 1 1.56.65l2.29 2.287c.4.425.63.98.65 1.564V14a1.993 1.993 0 0 1-2 2zM10 2.414V4h1.59L10 2.414zM12 6h-2a2 2 0 0 1-2-2V2c-1.92 0-5 0-5 .006V14h9V6zM5 4h1a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2zm0 3h5a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2zm0 3h5a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgDocumentTextIcon;
