import * as React from "react";
import { SVGProps } from "react";

const SvgVolumeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 15V1a1 1 0 0 0-2 0v14a1 1 0 0 0 2 0zM11 5a1 1 0 0 0-2 0v10a1 1 0 0 0 2 0V5zM7 9a1 1 0 0 0-2 0v6a1 1 0 0 0 2 0V9zm-4 4a1 1 0 0 0-2 0v2a1 1 0 0 0 2 0v-2z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgVolumeIcon;
