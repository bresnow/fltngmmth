import * as React from "react";
import { SVGProps } from "react";

const SvgMegaphone = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width="1em"
    height="1em"
  >
    <path d="M39.307 8.709c-.275.013-.552.06-.828.145l-32 9.779A3.512 3.512 0 0 0 4 21.98v5.04c0 1.532 1.011 2.9 2.479 3.347l5.728 1.75c-.412 3.77 1.768 7.444 5.525 8.555 3.71 1.096 7.481-.745 9.22-4.049l11.527 3.523-.002-.001c2.21.675 4.523-1.036 4.523-3.346V12.2c0-1.733-1.3-3.128-2.883-3.433a3.418 3.418 0 0 0-.81-.059zM15.078 32.994l9.014 2.756c-1.184 1.773-3.347 2.684-5.51 2.045-2.192-.648-3.512-2.635-3.504-4.8z" />
  </svg>
);

export default SvgMegaphone;
