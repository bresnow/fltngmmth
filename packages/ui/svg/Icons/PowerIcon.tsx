import * as React from "react";
import { SVGProps } from "react";

const SvgPowerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.002 16a8 8 0 0 1-4.62-14.532 1 1 0 0 1 1.576.722 1 1 0 0 1-.416.91 6.002 6.002 0 0 0-2.26 6.717 6.002 6.002 0 0 0 11.44 0 6.002 6.002 0 0 0-2.26-6.717 1.001 1.001 0 1 1 1.16-1.632 8.002 8.002 0 0 1 3.005 8.956A8.003 8.003 0 0 1 8.002 16zm0-8a1 1 0 0 1-1-1V1a1 1 0 0 1 2 0v6a1 1 0 0 1-1 1z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgPowerIcon;
