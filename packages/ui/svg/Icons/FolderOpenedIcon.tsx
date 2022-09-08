import * as React from "react";
import { SVGProps } from "react";

const SvgFolderOpenedIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.993 15H2.007A2.009 2.009 0 0 1 0 13V3a2 2 0 0 1 1.99-2h4.752c.423.01.828.174 1.136.463L9.414 3h4.595a2 2 0 0 1 1.99 2v8a2.002 2.002 0 0 1-2.008 2zM14 13V9H2v4h12zM2 3v4h12V5H9.258a1.665 1.665 0 0 1-1.136-.463L6.586 3H2z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgFolderOpenedIcon;
