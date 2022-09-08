import * as React from "react";
import { SVGProps } from "react";

const SvgTrashFilledIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 4v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4a1 1 0 0 1 0-2h5a2 2 0 1 1 4 0h5a1 1 0 0 1 0 2zM5 5a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V6a1 1 0 0 1 1-1zm3 0a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V6a1 1 0 0 1 1-1zm3 0a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V6a1 1 0 0 1 1-1z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgTrashFilledIcon;
