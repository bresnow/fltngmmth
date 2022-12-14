import * as React from "react";
import type { SVGProps } from "react";

const SvgAddMessage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width="1em"
    height="1em"
  >
    <path d="M14.5 4C12.585 4 11 5.585 11 7.5v.984L6.2 11.34A4.52 4.52 0 0 0 4 15.21V30.5c0 3.58 2.92 6.5 6.5 6.5H20c0-6.07 6.28-11 14-11 3.91 0 7.46 1.27 10 3.3V15.21a4.52 4.52 0 0 0-2.2-3.87L37 8.484V7.5C37 5.585 35.415 4 33.5 4h-19zm0 3h19c.295 0 .5.205.5.5v10.469L24 22.83 14 17.97V7.5c0-.295.205-.5.5-.5zM11 11.979v4.533L7.13 14.63c.12-.29.33-.551.6-.711L11 11.979zm26 0 3.27 1.94c.27.16.48.422.6.712L37 16.51V11.98zM34 28c-6.627 0-12 4.029-12 9 0 .693.115 1.364.313 2.012L22.299 39c.702 3-1.317 4.287-2.12 5.434-.476.682.054 1.611.885 1.564 3.657-.204 7.127-.853 7.606-.943 1.607.6 3.413.945 5.33.945 6.627 0 12-4.029 12-9s-5.373-9-12-9zm0 3a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4h-4a1 1 0 1 1 0-2h4v-4a1 1 0 0 1 1-1z" />
  </svg>
);

export default SvgAddMessage;
