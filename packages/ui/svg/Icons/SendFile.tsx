import * as React from "react";
import { SVGProps } from "react";

const SvgSendFile = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width="1em"
    height="1em"
  >
    <path d="M12.5 4C10.02 4 8 6.02 8 8.5v31c0 2.48 2.02 4.5 4.5 4.5h23c2.48 0 4.5-2.02 4.5-4.5V20H28.5c-2.48 0-4.5-2.02-4.5-4.5V4H12.5zm14.5.879V15.5c0 .827.673 1.5 1.5 1.5h10.621L27 4.879zm-1.5 19.119c.383 0 .766.146 1.06.441l6 6c.59.59.59 1.532 0 2.122l-6 6c-.29.29-.68.439-1.06.439s-.77-.15-1.06-.44a1.492 1.492 0 0 1 0-2.12L27.88 33H16.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5h11.38l-3.44-3.44a1.492 1.492 0 0 1 0-2.12 1.494 1.494 0 0 1 1.06-.442z" />
  </svg>
);

export default SvgSendFile;
