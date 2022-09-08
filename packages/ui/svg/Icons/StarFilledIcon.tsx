import * as React from "react";
import { SVGProps } from "react";

const SvgStarFilledIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.686 15.004c-.215 0-.425-.066-.6-.19a.992.992 0 0 1-.383-1.068l1.164-4.243L.38 6.74c-.33-.255-.46-.69-.33-1.084.132-.396.495-.67.913-.69l4.485-.227 1.6-4.1a1.025 1.025 0 0 1 1.9.001l1.607 4.1 4.484.227c.417.02.78.293.914.69.13.394 0 .827-.328 1.084L12.14 9.5l1.165 4.242a.992.992 0 0 1-.384 1.067c-.34.242-.795.254-1.15.03l-3.766-2.4-3.766 2.4a1.028 1.028 0 0 1-.552.164z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgStarFilledIcon;
