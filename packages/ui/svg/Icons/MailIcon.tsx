import * as React from "react";
import { SVGProps } from "react";

const SvgMailIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.993 15H2.007A2.009 2.009 0 0 1 0 13V3a2.002 2.002 0 0 1 2.008-2h11.985c1.105 0 2.002.895 2.007 2v10a2.002 2.002 0 0 1-2.008 2zM14 13V4.47L9.055 9.56c-.28.283-.663.44-1.06.44-.4 0-.782-.157-1.063-.44L2 4.484V13h12zM12.63 3H3.36l4.634 4.78L12.63 3z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgMailIcon;
