// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon3Icon(props: Icon3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      version={"1.1"}
      viewBox={"0 0 512.035 512.035"}
      xmlSpace={"preserve"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M387.431 239.821c-3.413-1.707-6.827-.853-9.387 1.707L256.017 363.555 133.991 241.528c-2.56-2.56-5.973-3.413-9.387-1.707-3.413.853-5.12 4.267-5.12 7.68v136.533c0 2.56.853 4.267 2.56 5.973l128 119.467c1.707 1.707 4.267 2.56 5.973 2.56s4.267-.853 5.973-2.56l128-119.467c1.707-1.707 2.56-3.413 2.56-5.973V247.501c.001-3.413-1.706-5.973-5.119-7.68zm-11.947 140.8L256.017 492.408 136.551 380.621v-112.64l113.493 113.493c3.413 3.413 8.533 3.413 11.947 0l113.493-113.493v112.64z"
        }
      ></path>

      <path
        d={
          "M387.431.888c-3.413-1.707-6.827-.853-9.387 1.707L256.017 124.621 133.991 2.595c-2.56-2.56-5.973-3.413-9.387-1.707-3.413.853-5.12 4.267-5.12 7.68v136.533c0 2.56.853 4.267 2.56 5.973l128 119.467c1.707 1.707 4.267 2.56 5.973 2.56s4.267-.853 5.973-2.56l128-119.467c1.707-1.707 2.56-3.413 2.56-5.973V8.568c.001-3.413-1.706-5.973-5.119-7.68zm-11.947 140.8L256.017 253.475 136.551 141.688V29.048l113.493 113.493c3.413 3.413 8.533 3.413 11.947 0L375.484 29.048v112.64z"
        }
      ></path>
    </svg>
  );
}

export default Icon3Icon;
/* prettier-ignore-end */
