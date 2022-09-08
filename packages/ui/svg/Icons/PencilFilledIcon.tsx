import * as React from "react";
import { SVGProps } from "react";

const SvgPencilFilledIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m15.09 5.306-.437.436-4.398-4.393.438-.438a3.108 3.108 0 1 1 4.398 4.394zm-1.85 1.85-2.917 2.916-3.934 3.933c-.5.457-1.094.794-1.74.985l-3.846.96a.574.574 0 0 1-.756-.754l.962-3.843c.19-.648.528-1.244.985-1.74L5.93 5.677l2.917-2.916 4.394 4.393z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgPencilFilledIcon;
