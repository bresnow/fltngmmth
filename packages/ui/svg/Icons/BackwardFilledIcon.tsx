import * as React from "react";
import { SVGProps } from "react";

const SvgBackwardFilledIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.016 12.785c.225.13.48.2.738.2.216 0 .43-.053.617-.158a1.3 1.3 0 0 0 .65-1.164V9.887l5 2.895c.224.13.478.2.737.2.216 0 .43-.053.617-.158.414-.24.663-.686.648-1.164V4.32a1.298 1.298 0 0 0-.648-1.162 1.361 1.361 0 0 0-1.355.046l-5 2.894V4.32a1.3 1.3 0 0 0-.65-1.162 1.36 1.36 0 0 0-1.354.046L.704 6.86a1.267 1.267 0 0 0 0 2.268l6.312 3.657z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgBackwardFilledIcon;
