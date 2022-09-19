import * as React from "react";
import type { SVGProps } from "react";

const SvgHeartIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.46 10.05a22.172 22.172 0 0 1-2 2.45c-.7.75-1.437 1.477-2.178 2.154-.447.407-.8.71-1.01.885-.74.612-1.81.612-2.552 0a36.576 36.576 0 0 1-3.192-3.04 22.55 22.55 0 0 1-1.993-2.443A7.229 7.229 0 0 1 .003 6.043c-.05-1.36.47-2.68 1.44-3.635A4.926 4.926 0 0 1 8 2.108a4.922 4.922 0 0 1 6.558.3 4.848 4.848 0 0 1 1.436 3.62 7.206 7.206 0 0 1-1.535 4.023zm-1.317-6.218a2.932 2.932 0 0 0-4.113 0L7.997 4.854 6.964 3.832a2.944 2.944 0 0 0-4.118 0c-.58.57-.89 1.363-.85 2.178-.04 2.983 6 7.987 6 7.987s6.037-5 6-7.99a2.846 2.846 0 0 0-.853-2.175z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgHeartIcon;
