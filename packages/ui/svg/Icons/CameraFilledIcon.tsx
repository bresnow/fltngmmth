import * as React from "react";
import { SVGProps } from "react";

const SvgCameraFilledIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.993 15H2.007a2.005 2.005 0 0 1-1.42-.583A2.013 2.013 0 0 1 0 13V4a2 2 0 0 1 1.99-2h1.596L5.122.463C5.43.173 5.835.01 6.258 0h3.484c.423.01.828.174 1.136.463L12.414 2h1.595a2 2 0 0 1 1.99 2v9.01A2 2 0 0 1 13.992 15zM8 4c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm0 6a2 2 0 1 0 .001-3.999A2 2 0 0 0 8 10z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgCameraFilledIcon;
