// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconIcon(props: IconIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      version={"1.1"}
      viewBox={"0 0 310.806 310.806"}
      xmlSpace={"preserve"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M305.095 229.104L186.055 42.579c-6.713-10.52-18.172-16.801-30.652-16.801-12.481 0-23.94 6.281-30.651 16.801L5.711 229.103a36.358 36.358 0 00-1.233 37.042 36.357 36.357 0 0031.886 18.883h238.079c13.282 0 25.5-7.235 31.888-18.886a36.359 36.359 0 00-1.236-37.038zm-149.692 24.527c-10.947 0-19.82-8.874-19.82-19.82 0-10.947 8.874-19.821 19.82-19.821 10.947 0 19.82 8.874 19.82 19.821 0 10.946-8.874 19.82-19.82 19.82zM182.875 115.9l-9.762 65.727c-1.437 9.675-10.445 16.353-20.119 14.916-7.816-1.161-13.676-7.289-14.881-14.692l-10.601-65.597c-2.468-15.273 7.912-29.655 23.185-32.123 15.273-2.468 29.655 7.912 32.123 23.185.464 2.876.448 5.845.055 8.584z"
        }
      ></path>
    </svg>
  );
}

export default IconIcon;
/* prettier-ignore-end */
