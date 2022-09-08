import * as React from "react";
import { SVGProps } from "react";

const SvgDownloadIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 14.005C2 14.003 14 14 14 14c-.004 0 0-5 0-5a1 1 0 0 1 2 0v5.005C16 15.1 15.1 16 14 16H2c-1.106 0-2-.89-2-1.995V9a1 1 0 0 1 2 0v5.005zm5-7.258-2.294-2.48a.992.992 0 0 0-1.414 0 1.023 1.023 0 0 0 0 1.432L6.94 9.547A1.48 1.48 0 0 0 8 9.991c.4 0 .778-.158 1.06-.444l3.647-3.85a1.02 1.02 0 0 0 0-1.43.99.99 0 0 0-1.414 0L9 6.744V1a1 1 0 1 0-2 0v5.747z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgDownloadIcon;
