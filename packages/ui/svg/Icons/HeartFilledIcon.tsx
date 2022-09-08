import * as React from "react";
import { SVGProps } from "react";

const SvgHeartFilledIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.283 14.654c-.447.407-.8.71-1.01.885-.74.612-1.81.612-2.552 0a36.848 36.848 0 0 1-3.19-3.04 22.324 22.324 0 0 1-1.994-2.443A7.224 7.224 0 0 1 .003 6.043c-.05-1.36.47-2.68 1.44-3.635A4.926 4.926 0 0 1 8 2.108a4.922 4.922 0 0 1 6.558.3 4.848 4.848 0 0 1 1.436 3.62 7.195 7.195 0 0 1-1.532 4.023 21.947 21.947 0 0 1-2 2.45 37.8 37.8 0 0 1-2.18 2.154z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgHeartFilledIcon;
