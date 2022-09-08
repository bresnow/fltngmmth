import * as React from "react";
import { SVGProps } from "react";

const SvgRibbonIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m11.997 1.995.017 11.63-3.497-2.084a1.005 1.005 0 0 0-1.024 0l-3.485 2.1V1.996h7.994-.005zm-9.992 12.38a1.505 1.505 0 0 0 2.369 1.345L8 13.565l3.622 2.155a1.507 1.507 0 0 0 2.374-1.346V2a2 2 0 0 0-2-2H4.004a2 2 0 0 0-1.999 2v12.374z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgRibbonIcon;
