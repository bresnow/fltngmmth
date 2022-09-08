import * as React from "react";
import { SVGProps } from "react";

const SvgContactCard = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width="1em"
    height="1em"
  >
    <path d="M39.5 8a4.5 4.5 0 0 1 4.5 4.5v23.009a4.5 4.5 0 0 1-4.5 4.5h-31a4.5 4.5 0 0 1-4.5-4.5V12.5A4.5 4.5 0 0 1 8.5 8h31zm-21 17h-7a1.5 1.5 0 0 0-1.486 1.296L10 26.5v.984l.016.217c.325 2.227 2.189 3.302 4.984 3.302 2.662 0 4.479-.974 4.928-2.989l.057-.31.015-.219V26.5a1.5 1.5 0 0 0-1.296-1.486L18.5 25zm18 .992h-8.995l-.204.014a1.5 1.5 0 0 0 0 2.972l.204.014H36.5l.204-.014a1.499 1.499 0 0 0 0-2.972l-.204-.014zM15 17.004a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM36.5 19h-8.995l-.204.014a1.5 1.5 0 0 0 0 2.972l.204.014H36.5l.204-.014a1.5 1.5 0 0 0 0-2.972L36.5 19z" />
  </svg>
);

export default SvgContactCard;
