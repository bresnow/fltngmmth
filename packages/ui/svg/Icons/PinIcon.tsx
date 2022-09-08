import * as React from "react";
import { SVGProps } from "react";

const SvgPinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 16C6.01 16 2 9.514 2 5.982 2 2.678 4.686 0 8 0s6 2.678 6 5.982C14 9.514 9.99 16 8 16zM8 2.028a3.983 3.983 0 0 0-4 3.954c.203 1.91.88 3.737 1.972 5.32.46.754.982 1.47 1.564 2.134.236.25.464.456.464.456s.23-.2.465-.456a15.26 15.26 0 0 0 1.563-2.135c1.09-1.58 1.77-3.41 1.972-5.318a3.983 3.983 0 0 0-4-3.954zm0 5.996a1.982 1.982 0 0 1-1.972-1.99 1.984 1.984 0 0 1 1.99-1.97A1.984 1.984 0 0 1 10 6.044a1.988 1.988 0 0 1-2 1.98z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgPinIcon;
