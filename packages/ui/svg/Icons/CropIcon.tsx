import * as React from "react";
import { SVGProps } from "react";

const SvgCropIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 13H5a2 2 0 0 1-2-2V6h2v5h10a1 1 0 0 1 0 2zm-4-8H1a1 1 0 0 1 0-2h10a2 2 0 0 1 2 2v5h-2V5zM5 2H3V1a1 1 0 0 1 2 0v1zm6 12h2v1a1 1 0 0 1-2 0v-1z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgCropIcon;
