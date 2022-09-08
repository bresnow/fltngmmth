import * as React from "react";
import { SVGProps } from "react";

const SvgAttach = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width="1em"
    height="1em"
  >
    <path d="M31.488 4.045a11.51 11.51 0 0 0-8.164 3.37L4.631 26.106a2 2 0 1 0 2.828 2.829l18.693-18.694a7.516 7.516 0 0 1 10.672 0 7.516 7.516 0 0 1 0 10.672L18.81 38.93a3.628 3.628 0 0 1-5.172 0 3.628 3.628 0 0 1 0-5.172L27.98 19.414a2 2 0 1 0-2.828-2.828L10.81 30.93c-2.974 2.973-2.974 7.854 0 10.828 2.973 2.973 7.854 2.973 10.828 0l18.015-18.016c4.493-4.492 4.493-11.836 0-16.328a11.51 11.51 0 0 0-8.164-3.37z" />
  </svg>
);

export default SvgAttach;
