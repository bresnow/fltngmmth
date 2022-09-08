import * as React from "react";
import { SVGProps } from "react";

const SvgArrowsLeftRightIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m3.247 12.998 1.48 1.295a.99.99 0 0 1 0 1.414c-.396.39-1.037.39-1.432 0L.445 13.06A1.477 1.477 0 0 1 0 12c0-.402.158-.78.444-1.06l2.85-2.648a1.024 1.024 0 0 1 1.433 0 .99.99 0 0 1 0 1.414L3.25 10.998H15a1 1 0 0 1 0 2H3.246zm9.506-8-1.48 1.296a.99.99 0 0 0 0 1.414c.396.39 1.037.39 1.432 0l2.85-2.647C15.843 4.778 16 4.403 16 4c0-.4-.158-.778-.444-1.06L12.706.293a1.024 1.024 0 0 0-1.433 0 .99.99 0 0 0 0 1.414L12.75 3H1a1 1 0 0 0 0 2h11.753z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgArrowsLeftRightIcon;
