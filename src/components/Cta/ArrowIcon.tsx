import * as React from "react";
import { SVGProps } from "react";

export const ArrowIconSmall = (props: SVGProps<SVGSVGElement>) => (
    <svg
      width={8}
      height={8}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-icon
      {...props}
    >
      <path
        d="M.917 4h5.25M3.667 1l3 3-3 3"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  );

const ArrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-icon
    {...props}
  >
    <path
      d="M1.5 7H12M7 1l6 6-6 6"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </svg>
);
export default ArrowIcon;


