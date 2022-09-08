import * as React from "react";
import { SVGProps } from "react";

const SvgMonitorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.994 13h-4.99a1 1 0 0 0 1.01 1h1.98c.357-.002.688.187.87.496a1.003 1.003 0 0 1-.86 1.504h-8a1 1 0 0 1-1-1c.003-.55.45-.997 1-1H5.97c.267.003.524-.1.714-.29A.995.995 0 0 0 6.98 13H2.007A2.008 2.008 0 0 1 0 11V3a2.002 2.002 0 0 1 2.008-2H13.99A2.006 2.006 0 0 1 16 3v8.01A2 2 0 0 1 13.994 13zm0-10H2.004l.007 8h11.994l-.01-8z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgMonitorIcon;
