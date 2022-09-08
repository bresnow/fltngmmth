import * as React from "react";
import { SVGProps } from "react";

const SvgSunFilledIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 4c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm0-4a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1zm0 13a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0v-1a1 1 0 0 1 1-1zM1 7h1a1 1 0 0 1 0 2H1a1 1 0 0 1 0-2zm13 0h1a1 1 0 0 1 0 2h-1a1 1 0 0 1 0-2zM2.343 2.34a1 1 0 0 1 1.414 0l.707.71a1.002 1.002 0 0 1-.427 1.717c-.36.087-.74-.03-.987-.307l-.707-.7a1.008 1.008 0 0 1 0-1.42zm9.193 9.2a1 1 0 0 1 1.414 0l.707.7a1.003 1.003 0 0 1-1.414 1.42l-.707-.71a.993.993 0 0 1 0-1.41zm-9.193.7.707-.7c.247-.277.626-.394.986-.306a1.002 1.002 0 0 1 .428 1.716l-.707.71a1.002 1.002 0 1 1-1.414-1.42zm9.193-9.19.707-.71a1.002 1.002 0 1 1 1.414 1.42l-.707.7a1.001 1.001 0 0 1-.986.306 1.002 1.002 0 0 1-.428-1.716z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgSunFilledIcon;
