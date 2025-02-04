// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: aU6fPsMDSmKqgHWpAbdgs

import * as React from "react";
import { hasVariant, ensureGlobalVariants } from "@plasmicapp/react-web";
import { Fragment } from "@/fragment/fragment"; // plasmic-import: aoWuS25X94s0/codeComponent
import { GrowthBook } from "@/fragment/growthbook"; // plasmic-import: DbAR2bd9pX5P/codeComponent
import { Splunk } from "@/fragment/splunk"; // plasmic-import: Iqj9wqmRKfGb/codeComponent
import { AntdConfigProvider } from "@plasmicpkgs/antd5/skinny/registerConfigProvider";
import { Hamdast } from "@/hamdast/hamdast"; // plasmic-import: RuE2-zUZLQ_z/codeComponent
import { EmbedCss } from "@plasmicpkgs/plasmic-embed-css";

export interface GlobalContextsProviderProps {
  children?: React.ReactElement;
  fragmentProps?: Partial<
    Omit<React.ComponentProps<typeof Fragment>, "children">
  >;

  growthBookProps?: Partial<
    Omit<React.ComponentProps<typeof GrowthBook>, "children">
  >;

  splunkProps?: Partial<Omit<React.ComponentProps<typeof Splunk>, "children">>;
  antdConfigProviderProps?: Partial<
    Omit<React.ComponentProps<typeof AntdConfigProvider>, "children">
  >;

  hamdastProps?: Partial<
    Omit<React.ComponentProps<typeof Hamdast>, "children">
  >;

  embedCssProps?: Partial<
    Omit<React.ComponentProps<typeof EmbedCss>, "children">
  >;
}

export default function GlobalContextsProvider(
  props: GlobalContextsProviderProps
) {
  const {
    children,
    fragmentProps,
    growthBookProps,
    splunkProps,
    antdConfigProviderProps,
    hamdastProps,
    embedCssProps
  } = props;

  return (
    <Fragment
      {...fragmentProps}
      apiConfig={
        fragmentProps && "apiConfig" in fragmentProps
          ? fragmentProps.apiConfig!
          : { withCredentials: true }
      }
      previewApiConfig={
        fragmentProps && "previewApiConfig" in fragmentProps
          ? fragmentProps.previewApiConfig!
          : undefined
      }
      primaryColor={
        fragmentProps && "primaryColor" in fragmentProps
          ? fragmentProps.primaryColor!
          : "#000000"
      }
      rtl={fragmentProps && "rtl" in fragmentProps ? fragmentProps.rtl! : true}
    >
      <GrowthBook
        {...growthBookProps}
        apiHost={
          growthBookProps && "apiHost" in growthBookProps
            ? growthBookProps.apiHost!
            : undefined
        }
        clientKey={
          growthBookProps && "clientKey" in growthBookProps
            ? growthBookProps.clientKey!
            : undefined
        }
        previewAttributes={
          growthBookProps && "previewAttributes" in growthBookProps
            ? growthBookProps.previewAttributes!
            : undefined
        }
      >
        <Splunk
          {...splunkProps}
          defaultApiHost={
            splunkProps && "defaultApiHost" in splunkProps
              ? splunkProps.defaultApiHost!
              : "https://rokhdad-splunk-hec.paziresh24.com"
          }
          defaultApiKey={
            splunkProps && "defaultApiKey" in splunkProps
              ? splunkProps.defaultApiKey!
              : "9da1ff03-1642-4f63-aba2-2ea5e033f06d"
          }
        >
          <AntdConfigProvider
            {...antdConfigProviderProps}
            borderRadius={
              antdConfigProviderProps &&
              "borderRadius" in antdConfigProviderProps
                ? antdConfigProviderProps.borderRadius!
                : 6
            }
            colorBgBase={
              antdConfigProviderProps &&
              "colorBgBase" in antdConfigProviderProps
                ? antdConfigProviderProps.colorBgBase!
                : "#ffffff"
            }
            colorError={
              antdConfigProviderProps && "colorError" in antdConfigProviderProps
                ? antdConfigProviderProps.colorError!
                : "#ff4d4f"
            }
            colorInfo={
              antdConfigProviderProps && "colorInfo" in antdConfigProviderProps
                ? antdConfigProviderProps.colorInfo!
                : "#1677ff"
            }
            colorPrimary={
              antdConfigProviderProps &&
              "colorPrimary" in antdConfigProviderProps
                ? antdConfigProviderProps.colorPrimary!
                : "#1677ff"
            }
            colorSuccess={
              antdConfigProviderProps &&
              "colorSuccess" in antdConfigProviderProps
                ? antdConfigProviderProps.colorSuccess!
                : "#52c41a"
            }
            colorWarning={
              antdConfigProviderProps &&
              "colorWarning" in antdConfigProviderProps
                ? antdConfigProviderProps.colorWarning!
                : "#faad14"
            }
            controlHeight={
              antdConfigProviderProps &&
              "controlHeight" in antdConfigProviderProps
                ? antdConfigProviderProps.controlHeight!
                : 32
            }
            defaultDark={
              antdConfigProviderProps &&
              "defaultDark" in antdConfigProviderProps
                ? antdConfigProviderProps.defaultDark!
                : false
            }
            lineWidth={
              antdConfigProviderProps && "lineWidth" in antdConfigProviderProps
                ? antdConfigProviderProps.lineWidth!
                : 1
            }
            loadingText={
              antdConfigProviderProps &&
              "loadingText" in antdConfigProviderProps
                ? antdConfigProviderProps.loadingText!
                : undefined
            }
            removeLoading={
              antdConfigProviderProps &&
              "removeLoading" in antdConfigProviderProps
                ? antdConfigProviderProps.removeLoading!
                : undefined
            }
            sizeStep={
              antdConfigProviderProps && "sizeStep" in antdConfigProviderProps
                ? antdConfigProviderProps.sizeStep!
                : 4
            }
            sizeUnit={
              antdConfigProviderProps && "sizeUnit" in antdConfigProviderProps
                ? antdConfigProviderProps.sizeUnit!
                : 4
            }
            themeStyles={
              antdConfigProviderProps &&
              "themeStyles" in antdConfigProviderProps
                ? antdConfigProviderProps.themeStyles!
                : true
                ? {
                    fontFamily: "initial",
                    fontSize: "1rem",
                    fontWeight: "400",
                    lineHeight: "1.5",
                    color: "#2B2F33",
                    letterSpacing: "normal"
                  }
                : undefined
            }
            wireframe={
              antdConfigProviderProps && "wireframe" in antdConfigProviderProps
                ? antdConfigProviderProps.wireframe!
                : false
            }
          >
            <Hamdast
              {...hamdastProps}
              clientKey={
                hamdastProps && "clientKey" in hamdastProps
                  ? hamdastProps.clientKey!
                  : "9e5789a2da3a43a8k05636486a07200b"
              }
            >
              <EmbedCss
                {...embedCssProps}
                css={
                  embedCssProps && "css" in embedCssProps
                    ? embedCssProps.css!
                    : ".pl__z-50{\r\n  z-index: 9999 !important;\r\n}"
                }
              >
                {children}
              </EmbedCss>
            </Hamdast>
          </AntdConfigProvider>
        </Splunk>
      </GrowthBook>
    </Fragment>
  );
}
