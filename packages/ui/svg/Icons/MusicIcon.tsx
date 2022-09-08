import * as React from "react";
import { SVGProps } from "react";

const SvgMusicIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.017 13.93a2.983 2.983 0 0 1-2.983-2.984 2.984 2.984 0 0 1 2.983-2.986c.34.003.676.065.994.183v-1.99L7.046 7.646v5.29a3.024 3.024 0 0 1-5.488 1.79 3.025 3.025 0 0 1 3.5-4.593v-6.75A1.654 1.654 0 0 1 6.28 1.8L13.29.044A1.36 1.36 0 0 1 15 1.391v9.554a2.985 2.985 0 0 1-2.983 2.985zm-7.955-1.99a.994.994 0 1 0 0 1.985.994.994 0 0 0 0-1.983zm8.95-9.77L7.044 3.66v1.925l5.966-1.493V2.167v.002zm-.995 7.78a.995.995 0 1 0 .001.001z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgMusicIcon;
