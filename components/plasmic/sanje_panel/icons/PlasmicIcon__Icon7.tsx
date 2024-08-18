// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon7IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon7Icon(props: Icon7IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 100 160"}
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
          repeatCount={"indefinite"}
        ></animateTransform>

        <animate
          attributeName={"opacity"}
          from={"0"}
          to={"1"}
          begin={"0s"}
          dur={"2s"}
          fill={"freeze"}
          repeatCount={"indefinite"}
        ></animate>

        <animate
          attributeName={"opacity"}
          from={"1"}
          to={"0"}
          begin={"8s"}
          dur={"2s"}
          fill={"freeze"}
          repeatCount={"indefinite"}
        ></animate>
      </path>

      <path
        fill={"none"}
        stroke={"#000"}
        strokeWidth={"5"}
        d={"M20 60l30 30 30-30"}
      >
        <animateTransform
          attributeName={"transform"}
          type={"translate"}
          from={"0 -20"}
          to={"0 0"}
          begin={"2s"}
          dur={"2s"}
          fill={"freeze"}
          repeatCount={"indefinite"}
        ></animateTransform>

        <animate
          attributeName={"opacity"}
          from={"0"}
          to={"1"}
          begin={"2s"}
          dur={"2s"}
          fill={"freeze"}
          repeatCount={"indefinite"}
        ></animate>

        <animate
          attributeName={"opacity"}
          from={"1"}
          to={"0"}
          begin={"10s"}
          dur={"2s"}
          fill={"freeze"}
          repeatCount={"indefinite"}
        ></animate>
      </path>

      <path
        fill={"none"}
        stroke={"#000"}
        strokeWidth={"5"}
        d={"M20 80l30 30 30-30"}
      >
        <animateTransform
          attributeName={"transform"}
          type={"translate"}
          from={"0 -20"}
          to={"0 0"}
          begin={"4s"}
          dur={"2s"}
          fill={"freeze"}
          repeatCount={"indefinite"}
        ></animateTransform>

        <animate
          attributeName={"opacity"}
          from={"0"}
          to={"1"}
          begin={"4s"}
          dur={"2s"}
          fill={"freeze"}
          repeatCount={"indefinite"}
        ></animate>

        <animate
          attributeName={"opacity"}
          from={"1"}
          to={"0"}
          begin={"12s"}
          dur={"2s"}
          fill={"freeze"}
          repeatCount={"indefinite"}
        ></animate>
      </path>

      <path
        fill={"none"}
        stroke={"#000"}
        strokeWidth={"5"}
        d={"M20 100l30 30 30-30"}
      >
        <animateTransform
          attributeName={"transform"}
          type={"translate"}
          from={"0 -20"}
          to={"0 0"}
          begin={"6s"}
          dur={"2s"}
          fill={"freeze"}
          repeatCount={"indefinite"}
        ></animateTransform>

        <animate
          attributeName={"opacity"}
          from={"0"}
          to={"1"}
          begin={"6s"}
          dur={"2s"}
          fill={"freeze"}
          repeatCount={"indefinite"}
        ></animate>

        <animate
          attributeName={"opacity"}
          from={"1"}
          to={"0"}
          begin={"14s"}
          dur={"2s"}
          fill={"freeze"}
          repeatCount={"indefinite"}
        ></animate>
      </path>
    </svg>
  );
}

export default Icon7Icon;
/* prettier-ignore-end */
