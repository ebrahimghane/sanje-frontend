/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SmileIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SmileIcon(props: SmileIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM3.75 12a8.25 8.25 0 1116.5 0 8.25 8.25 0 01-16.5 0zm4.85 2.55a.75.75 0 00-1.2.9 5.742 5.742 0 004.6 2.3 5.742 5.742 0 004.6-2.3.75.75 0 10-1.2-.9 4.243 4.243 0 01-3.4 1.7 4.243 4.243 0 01-3.4-1.7zM10 10a1 1 0 11-2 0 1 1 0 012 0zm5 1a1 1 0 100-2 1 1 0 000 2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SmileIcon;
/* prettier-ignore-end */
