import * as React from "react";
import { SVGProps } from "react";

const SvgRepeatIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m15.556 5.058-2.85 2.645c-.4.39-1.036.39-1.434 0a.994.994 0 0 1 0-1.413l1.473-1.287H2v2a1 1 0 1 1-2 0v-2a2 2 0 0 1 2-2l10.75-.006-1.478-1.29a.992.992 0 0 1 0-1.414 1.024 1.024 0 0 1 1.433 0l2.85 2.645a1.486 1.486 0 0 1 .001 2.12zM3.3 8.293a1.024 1.024 0 0 1 1.433 0 .989.989 0 0 1-.001 1.413l-1.48 1.29L14 11.004v-2a1 1 0 0 1 2 0v2a2 2 0 0 1-2 2H3.255l1.473 1.287a.989.989 0 0 1 0 1.413c-.398.39-1.035.39-1.433 0l-2.85-2.645a1.483 1.483 0 0 1-.001-2.12L3.3 8.293z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgRepeatIcon;
