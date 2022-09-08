import * as React from "react";
import { SVGProps } from "react";

const SvgSticker = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width="1em"
    height="1em"
  >
    <path d="M20.37 4.55C11.39 6.66 5 14.66 5 24c0 11.03 8.97 20 20 20 9.35 0 17.34-6.4 19.45-15.37-.6.06-1.19.08-1.79.08-5.91 0-11.55-2.32-15.8-6.57-4.68-4.68-7.02-11.03-6.49-17.59zm2.97.43c-.38 5.61 1.63 11.03 5.64 15.04s9.45 6.04 15.06 5.64c-1.06-1.48-3.68-4.36-9.95-10.64-6.33-6.32-9.25-8.97-10.75-10.04z" />
  </svg>
);

export default SvgSticker;
