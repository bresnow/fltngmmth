import * as React from "react";
import { SVGProps } from "react";

const SvgNotificationsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.95 13.315c-.137.41-.523.688-.956.685H9.996A1.998 1.998 0 1 1 6 14H1c-.43 0-.813-.275-.95-.684A1.003 1.003 0 0 1 .4 12.2 3.99 3.99 0 0 0 2.005 9V6A5.998 5.998 0 1 1 14 6v3a3.979 3.979 0 0 0 1.6 3.2c.344.258.484.707.35 1.115zm-3.784-4.31v-3a4.167 4.167 0 0 0-8.328 0v3a5.82 5.82 0 0 1-.833 3H13a5.828 5.828 0 0 1-.834-3z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgNotificationsIcon;
