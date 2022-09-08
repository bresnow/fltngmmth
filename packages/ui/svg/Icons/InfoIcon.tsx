import * as React from "react";
import { SVGProps } from "react";

const SvgInfoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 14h1.003c.55 0 .997.444.997 1 0 .552-.453 1-.997 1H5.997A.997.997 0 0 1 5 15c0-.552.453-1 .997-1H7V6h-.99a1 1 0 1 1 0-2h1.98C8.55 4 9 4.444 9 5v9zM7.5 3a1.5 1.5 0 1 0-.001-3.001A1.5 1.5 0 0 0 7.5 3z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgInfoIcon;
