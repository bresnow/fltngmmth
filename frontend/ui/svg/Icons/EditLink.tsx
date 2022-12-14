import * as React from "react";
import type { SVGProps } from "react";

const SvgEditLink = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width="1em"
    height="1em"
  >
    <path d="M13 8C6.948 8 2 12.948 2 19s4.948 11 11 11h4a2 2 0 1 0 0-4h-4c-3.89 0-7-3.11-7-7s3.11-7 7-7h4a2 2 0 1 0 0-4h-4zm16 0c-1.1 0-2 .9-2 2s.9 2 2 2h4c3.86 0 7 3.14 7 7 0 1.26-.33 2.45-.93 3.47.4-.16.82-.28 1.24-.36.39-.07.79-.11 1.18-.11h.02c.68 0 1.35.11 1.98.31.33-1.04.51-2.16.51-3.31 0-6.07-4.93-11-11-11h-4zm-17 9a2 2 0 1 0 0 4h22a2 2 0 1 0 0-4H12zm29.498 7a4.704 4.704 0 0 0-.83.076c-.884.16-1.728.62-2.441 1.334l-11.8 11.799c-.356.357-.619.802-.759 1.285l-1.57 5.48c-.072.19-.105.391-.098.592A1.481 1.481 0 0 0 25.43 46c.2.007.404-.025.595-.098l5.48-1.57c.484-.14.926-.402 1.284-.76l11.8-11.799c.715-.713 1.176-1.557 1.335-2.441.05-.279.073-.556.074-.83a4.441 4.441 0 0 0-1.318-3.182A4.451 4.451 0 0 0 41.498 24zm-6.357 1.67c-.67.21-1.391.33-2.141.33h-4c-1.1 0-2 .9-2 2s.9 2 2 2h1.8l4.34-4.33z" />
  </svg>
);

export default SvgEditLink;
