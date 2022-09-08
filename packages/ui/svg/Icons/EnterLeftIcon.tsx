import * as React from "react";
import { SVGProps } from "react";

const SvgEnterLeftIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.995 14C1.997 14 2 2 2 2c0 .004 5 0 5 0a1 1 0 0 0 0-2H1.995C.9 0 0 .9 0 2v12c0 1.106.89 2 1.995 2H7a1 1 0 0 0 0-2H1.995zm7.258-5 2.48 2.294a.992.992 0 0 1 0 1.414c-.396.39-1.037.39-1.432 0L6.453 9.06A1.48 1.48 0 0 1 6.009 8c0-.4.158-.778.444-1.06l3.85-3.647a1.02 1.02 0 0 1 1.43 0 .99.99 0 0 1 0 1.414L9.256 7H15a1 1 0 1 1 0 2H9.253z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgEnterLeftIcon;
