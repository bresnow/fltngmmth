import * as React from "react";
import { SVGProps } from "react";

const SvgHomeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.005 13.997c0-.008-8 0-8 0 .007 0 0-5 0-5a1 1 0 0 0-2 0v5a2 2 0 0 0 2 2h8a2 2 0 0 0 1.994-2v-5a1 1 0 1 0-2 0l.005 5zm2.372-6.23a.972.972 0 0 0 1.4-.146 1.063 1.063 0 0 0-.14-1.457L8.692.263a1.091 1.091 0 0 0-1.42 0L.365 6.135a1.063 1.063 0 0 0-.14 1.458c.16.21.403.346.668.373a.966.966 0 0 0 .73-.227l6.37-5.39 6.376 5.422.007-.005zm-6.354 3.22a1.994 1.994 0 1 0-1.999-1.995 2 2 0 0 0 2 1.994z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgHomeIcon;
