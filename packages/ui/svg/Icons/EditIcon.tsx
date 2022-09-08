import * as React from "react";
import { SVGProps } from "react";

const SvgEditIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 16H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h8.41l-.835.836L8.415 2H2v12h12V7.547l1.146-1.145.854-.854V14a2 2 0 0 1-2 2zm-1.57-9.7L9.97 8.76c-.31.284-.682.495-1.087.615l-2.4.6a.354.354 0 0 1-.397-.076.361.361 0 0 1-.075-.398l.6-2.4c.12-.405.33-.777.617-1.088l2.46-2.46 1.824-1.822 2.748 2.746L12.43 6.3zm2.71-2.706L12.39.848l.275-.274a1.945 1.945 0 0 1 3.251.872 1.94 1.94 0 0 1-.503 1.876l-.273.274z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgEditIcon;
