/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon12IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon12Icon(props: Icon12IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 300 50"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path fill={"#e0e0e0"} d={"M0 0h300v50H0z"}></path>

      <path fill={"#007bff"} d={"M300 0h300v50H300z"}>
        <animate
          attributeName={"x"}
          from={"300"}
          to={"0"}
          dur={"11s"}
          fill={"freeze"}
        ></animate>
      </path>
    </svg>
  );
}

export default Icon12Icon;
/* prettier-ignore-end */
