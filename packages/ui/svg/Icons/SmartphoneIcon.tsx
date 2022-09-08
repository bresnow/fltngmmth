import * as React from "react";
import { SVGProps } from "react";

const SvgSmartphoneIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11 16H5a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2zm0-13H5v10h6V3z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgSmartphoneIcon;
