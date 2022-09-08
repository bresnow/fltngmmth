import * as React from "react";
import { SVGProps } from "react";

const SvgPencilIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m15.015 5.356-8.658 8.656a4.411 4.411 0 0 1-1.732.98l-2.64.66-1.185.3a.572.572 0 0 1-.753-.752l.3-1.183.66-2.64c.19-.646.525-1.24.98-1.734L10.645.987c.77-.83 1.93-1.17 3.027-.89a3.092 3.092 0 0 1 1.342 5.26zM3.39 11.046c-.2.24-.354.514-.457.81l-.403 1.613 1.613-.405c.294-.103.568-.258.808-.457l6.824-6.822-.035-.035-1.493-1.49-.036-.037-6.82 6.824zm10.22-8.655a1.107 1.107 0 0 0-1.562 0l-.43.432.035.035 1.492 1.492.035.034.43-.43a1.109 1.109 0 0 0 0-1.565z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgPencilIcon;
