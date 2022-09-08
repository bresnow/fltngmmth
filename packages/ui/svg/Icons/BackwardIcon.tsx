import * as React from "react";
import { SVGProps } from "react";

const SvgBackwardIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m.704 9.128 6.312 3.657c.225.13.48.2.738.2.216 0 .43-.053.617-.158a1.3 1.3 0 0 0 .65-1.164V9.887l5 2.895c.224.13.478.2.737.2.216 0 .43-.053.617-.158.414-.24.663-.686.648-1.164V4.32a1.298 1.298 0 0 0-.648-1.162 1.361 1.361 0 0 0-1.355.046l-5 2.894V4.32a1.3 1.3 0 0 0-.65-1.162 1.36 1.36 0 0 0-1.354.046L.704 6.86a1.267 1.267 0 0 0 0 2.268zm13.327-3.66v5.062L9.66 7.998l4.37-2.53zm-7 0v5.062L2.66 7.998l4.37-2.53z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgBackwardIcon;
