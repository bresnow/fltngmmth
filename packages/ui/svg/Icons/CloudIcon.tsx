import * as React from "react";
import { SVGProps } from "react";

const SvgCloudIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.002 9.64a4.283 4.283 0 0 1-4.21 4.36h-7a4.975 4.975 0 0 1-1.26-9.734A5.63 5.63 0 0 1 8.583 1a5.732 5.732 0 0 1 5.59 5.1 4.363 4.363 0 0 1 1.83 3.54zm-3.23-2.1-.5-.27-.03-.567a3.763 3.763 0 0 0-3.66-3.7 3.665 3.665 0 0 0-3.4 2.463l-.21.55-.58.09a2.982 2.982 0 0 0 .4 5.9h7a2.29 2.29 0 0 0 2.21-2.36 2.362 2.362 0 0 0-1.23-2.108v.002z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgCloudIcon;
