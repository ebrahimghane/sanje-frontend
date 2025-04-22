/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon10IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon10Icon(props: Icon10IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      xmlSpace={"preserve"}
      viewBox={"0 0 100 100"}
      y={"0"}
      x={"0"}
      version={"1.1"}
      style={{
        background: '#fff"',

        ...(style || {}),
      }}
      preserveAspectRatio={"xMidYMid"}
      display={"block"}
      shapeRendering={"auto"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g
        style={{
          transformOrigin: '50% 50% 0"',
        }}
        className={"ldl-scale"}
      >
        <g className={"ldl-ani"}>
          <g opacity={"1"}>
            <path
              fill={"#74c476"}
              d={
                "M40 63.122c-.4 0-.798-.16-1.092-.481L13.94 42.449H9.486c-1.29 0-1.964 1.533-1.092 2.483l30.515 26.242a1.477 1.477 0 002.184 0l30.515-26.242c.871-.95.198-2.483-1.092-2.483h-4.454L41.094 62.64a1.48 1.48 0 01-1.094.48z"
              }
              strokeWidth={"1"}
            >
              <animate
                attributeName={"opacity"}
                values={"0;1;0"}
                repeatCount={"indefinite"}
                dur={"1s"}
                begin={"0s"}
              ></animate>
            </path>
          </g>

          <g opacity={"1"}>
            <path
              fill={"#bae4b3"}
              d={
                "M40 46.055c-.4 0-.798-.16-1.092-.48L13.94 25.381H9.486c-1.29 0-1.964 1.533-1.092 2.484l30.515 26.242a1.477 1.477 0 002.184 0l30.515-26.242c.871-.95.198-2.484-1.092-2.484h-4.454L41.094 45.574a1.48 1.48 0 01-1.094.481z"
              }
              strokeWidth={"1"}
            >
              <animate
                attributeName={"opacity"}
                values={"0;1;0"}
                repeatCount={"indefinite"}
                dur={"1s"}
                begin={"0.2s"}
              ></animate>
            </path>
          </g>

          <g opacity={"1"}>
            <path
              fill={"#edf8e9"}
              d={
                "M40 28.968c-.4 0-.798-.16-1.092-.48L13.94 8.294H9.486c-1.29 0-1.964 1.533-1.092 2.483L38.909 37.02a1.477 1.477 0 002.184 0l30.515-26.243c.871-.95.198-2.483-1.092-2.483h-4.454L41.094 28.487a1.48 1.48 0 01-1.094.481z"
              }
              strokeWidth={"1"}
            >
              <animate
                attributeName={"opacity"}
                values={"0;1;0"}
                repeatCount={"indefinite"}
                dur={"1s"}
                begin={"0.5s"}
              ></animate>
            </path>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default Icon10Icon;
/* prettier-ignore-end */
