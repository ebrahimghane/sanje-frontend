/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon11IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon11Icon(props: Icon11IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      xmlSpace={"preserve"}
      viewBox={"0 0 100 100"}
      y={"0"}
      x={"0"}
      version={"1.1"}
      preserveAspectRatio={"xMidYMid"}
      display={"block"}
      shapeRendering={"auto"}
      className={classNames(
        "plasmic-default__svg",
        className,
        "plasmic-default__svg plasmic_default__all plasmic_default__svg InterstitialFullPageComponent__svg__nY56"
      )}
      role={"img"}
      height={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g className={"ldl-scale"}>
        <g className={"ldl-ani"}>
          <g opacity={"1"}>
            <path
              fill={"#74c476"}
              d={
                "M63.122 60c0 .4-.16.798-.481 1.092L42.449 86.06v4.454c0 1.29 1.533 1.964 2.483 1.092l26.242-30.515a1.477 1.477 0 000-2.184L44.932 28.392c-.95-.871-2.483-.198-2.483 1.092v4.454L62.64 58.906A1.48 1.48 0 0163.12 60z"
              }
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
                "M46.055 60c0 .4-.16.798-.48 1.092L25.381 86.06v4.454c0 1.29 1.533 1.964 2.484 1.092l26.242-30.515a1.477 1.477 0 000-2.184L27.865 28.392c-.95-.871-2.484-.198-2.484 1.092v4.454l20.193 24.968A1.48 1.48 0 0146.055 60z"
              }
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
                "M28.968 60c0 .4-.16.798-.48 1.092L8.294 86.06v4.454c0 1.29 1.533 1.964 2.483 1.092L37.02 61.091a1.477 1.477 0 000-2.184L10.777 28.392c-.95-.871-2.483-.198-2.483 1.092v4.454l20.193 24.968A1.48 1.48 0 0128.968 60z"
              }
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

export default Icon11Icon;
/* prettier-ignore-end */
