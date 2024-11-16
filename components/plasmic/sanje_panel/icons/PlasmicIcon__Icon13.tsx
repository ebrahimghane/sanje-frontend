// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon13IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon13Icon(props: Icon13IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 400 50"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <rect
        x={"0"}
        y={"0"}
        width={"400"}
        height={"50"}
        fill={"#ccc"}
        rx={"8"}
        ry={"8"}
      ></rect>

      <rect
        x={"400"}
        y={"0"}
        width={"400"}
        height={"50"}
        fill={"#00f"}
        rx={"8"}
        ry={"8"}
      >
        <animate
          attributeName={"x"}
          from={"400"}
          to={"0"}
          dur={"11s"}
          fill={"freeze"}
        ></animate>
      </rect>
    </svg>
  );
}

export default Icon13Icon;
/* prettier-ignore-end */
