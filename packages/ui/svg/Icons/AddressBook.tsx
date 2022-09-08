import * as React from "react";
import { SVGProps } from "react";

const SvgAddressBook = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width="1em"
    height="1em"
  >
    <path d="M12.5 4C10.032 4 8 6.032 8 8.5v28.754a1.5 1.5 0 0 0 0 .486v1.76c0 2.468 2.032 4.5 4.5 4.5h27a1.5 1.5 0 1 0 0-3h-27c-.846 0-1.5-.654-1.5-1.5V39h28.5a1.5 1.5 0 0 0 1.5-1.5v-29C41 6.032 38.968 4 36.5 4h-24z" />
  </svg>
);

export default SvgAddressBook;
