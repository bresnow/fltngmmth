import * as React from "react";
import { SVGProps } from "react";

const SvgOk = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width="1em"
    height="1em"
  >
    <path d="M24 4C12.972 4 4 12.972 4 24s8.972 20 20 20 20-8.972 20-20S35.028 4 24 4zm8.561 16.561-10 10c-.293.293-.677.439-1.061.439s-.768-.146-1.061-.439l-5-5a1.5 1.5 0 1 1 2.121-2.121l3.939 3.939 8.939-8.939a1.5 1.5 0 0 1 2.123 2.121z" />
  </svg>
);

export default SvgOk;
