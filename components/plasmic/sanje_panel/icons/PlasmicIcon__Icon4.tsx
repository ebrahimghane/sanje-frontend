// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon4Icon(props: Icon4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 100 120"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"none"}
        stroke={"#000"}
        strokeWidth={"5"}
        d={"M20 40l30 30 30-30"}
      >
        <animateTransform
          attributeName={"transform"}
          type={"translate"}
          from={"0 -20"}
          to={"0 0"}
          begin={"0s"}
          dur={"2s"}
          fill={"freeze"}
        ></animateTransform>

        <animate
          attributeName={"opacity"}
          from={"0"}
          to={"1"}
          begin={"0s"}
          dur={"2s"}
          fill={"freeze"}
        ></animate>

        <animate
          attributeName={"opacity"}
          from={"1"}
          to={"0"}
          begin={"4s"}
          dur={"2s"}
          fill={"freeze"}
        ></animate>
      </path>

      <path
        fill={"none"}
        stroke={"#000"}
        strokeWidth={"5"}
        d={"M20 10l30 30 30-30"}
      >
        <animateTransform
          attributeName={"transform"}
          type={"translate"}
          from={"0 -20"}
          to={"0 0"}
          begin={"2s"}
          dur={"2s"}
          fill={"freeze"}
        ></animateTransform>

        <animate
          attributeName={"opacity"}
          from={"0"}
          to={"1"}
          begin={"2s"}
          dur={"2s"}
          fill={"freeze"}
        ></animate>

        <animate
          attributeName={"opacity"}
          from={"1"}
          to={"0"}
          begin={"6s"}
          dur={"2s"}
          fill={"freeze"}
        ></animate>
      </path>
    </svg>
  );
}

export default Icon4Icon;
/* prettier-ignore-end */
