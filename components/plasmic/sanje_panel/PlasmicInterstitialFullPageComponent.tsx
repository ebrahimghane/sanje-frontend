// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: aU6fPsMDSmKqgHWpAbdgs
// Component: yQnkyuy8-tJy

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import Button from "../../Button"; // plasmic-import: oVzoHzMf1TLl/component
import { SideEffect } from "@plasmicpkgs/plasmic-basic-components";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_fragment_design_system_css from "../fragment_design_system/plasmic.module.css"; // plasmic-import: h9Dbk9ygddw7UVEq1NNhKi/projectcss
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: aU6fPsMDSmKqgHWpAbdgs/projectcss
import sty from "./PlasmicInterstitialFullPageComponent.module.css"; // plasmic-import: yQnkyuy8-tJy/css

import Icon11Icon from "./icons/PlasmicIcon__Icon11"; // plasmic-import: JdG0eXaRAeXh/icon
import Icon2Icon from "./icons/PlasmicIcon__Icon2"; // plasmic-import: X98YuP_uFRc3/icon
import ChevronRightIcon from "../fragment_icons/icons/PlasmicIcon__ChevronRight"; // plasmic-import: GHdF3hS-oP_3/icon
import ChevronLeftIcon from "../fragment_icons/icons/PlasmicIcon__ChevronLeft"; // plasmic-import: r9Upp9NbiZkf/icon

createPlasmicElementProxy;

export type PlasmicInterstitialFullPageComponent__VariantMembers = {};
export type PlasmicInterstitialFullPageComponent__VariantsArgs = {};
type VariantPropType = keyof PlasmicInterstitialFullPageComponent__VariantsArgs;
export const PlasmicInterstitialFullPageComponent__VariantProps =
  new Array<VariantPropType>();

export type PlasmicInterstitialFullPageComponent__ArgsType = {
  provider?: string;
  uri?: string;
  displayName?: string;
};
type ArgPropType = keyof PlasmicInterstitialFullPageComponent__ArgsType;
export const PlasmicInterstitialFullPageComponent__ArgProps =
  new Array<ArgPropType>("provider", "uri", "displayName");

export type PlasmicInterstitialFullPageComponent__OverridesType = {
  root?: Flex__<"div">;
  svg?: Flex__<"svg">;
  loading?: Flex__<"svg">;
  splunkEventRedirect?: Flex__<typeof SideEffect>;
  writeTransitionDataCookie?: Flex__<typeof SideEffect>;
};

export interface DefaultInterstitialFullPageComponentProps {
  provider?: string;
  uri?: string;
  displayName?: string;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicInterstitialFullPageComponent__RenderFunc(props: {
  variants: PlasmicInterstitialFullPageComponent__VariantsArgs;
  args: PlasmicInterstitialFullPageComponent__ArgsType;
  overrides: PlasmicInterstitialFullPageComponent__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const $globalActions = useGlobalActions?.();

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_fragment_design_system_css.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.root
      )}
    >
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__zvQgp)}
      >
        <div className={classNames(projectcss.all, sty.freeBox___4Coll)}>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__poNvi
            )}
          >
            <React.Fragment>
              <React.Fragment>{""}</React.Fragment>
              {
                <h6
                  className={classNames(
                    projectcss.all,
                    projectcss.h6,
                    projectcss.__wab_text,
                    sty.h6__eBtE2
                  )}
                >
                  {
                    "\u062a\u0627 \u0686\u0646\u062f \u062b\u0627\u0646\u06cc\u0647 \u062f\u06cc\u06af\u0631 \u0627\u0632 \u067e\u0630\u06cc\u0631\u063424 \u0628\u0647 \u0633\u0627\u06cc\u062a \u0646\u0648\u0628\u062a\u200c\u062f\u0647\u06cc \u0641\u0639\u0627\u0644 \u067e\u0632\u0634\u06a9 \u0645\u0646\u062a\u0642\u0644 \u0645\u06cc\u200c\u0634\u0648\u06cc\u062f."
                  }
                </h6>
              }
              <React.Fragment>{""}</React.Fragment>
            </React.Fragment>
          </div>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__yw6Jt
            )}
          >
            <React.Fragment>
              <React.Fragment>{""}</React.Fragment>
              {
                <h6
                  className={classNames(
                    projectcss.all,
                    projectcss.h6,
                    projectcss.__wab_text,
                    sty.h6__rtPk1
                  )}
                >
                  {
                    "\u062f\u0631 \u0633\u0627\u06cc\u062a \u0645\u0642\u0635\u062f\u060c \u0646\u0648\u0628\u062a \u062e\u0648\u062f \u0631\u0627 \u062b\u0628\u062a \u06a9\u0646\u06cc\u062f.\n"
                  }
                </h6>
              }
              <React.Fragment>{""}</React.Fragment>
            </React.Fragment>
          </div>
        </div>
        <div className={classNames(projectcss.all, sty.freeBox__laggs)}>
          <div className={classNames(projectcss.all, sty.freeBox__sDsLk)}>
            <PlasmicImg__
              alt={""}
              className={classNames(sty.img___29ZsY)}
              displayHeight={"40px"}
              displayMaxHeight={"none"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"35px"}
              loading={"lazy"}
              src={
                "https://www.paziresh24.com/_next/static/media/logo.5e03fe79.svg"
              }
            />

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___1S3F8
              )}
            >
              {"\u067e\u0630\u06cc\u0631\u0634\u06f2\u06f4"}
            </div>
          </div>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__vbKAv
            )}
          >
            {" >>>"}
          </div>
          <Icon11Icon
            data-plasmic-name={"svg"}
            data-plasmic-override={overrides.svg}
            className={classNames(projectcss.all, sty.svg)}
            role={"img"}
          />

          <div className={classNames(projectcss.all, sty.freeBox__zLftn)}>
            <PlasmicImg__
              alt={""}
              className={classNames(sty.img__nQKyM)}
              displayHeight={"40px"}
              displayMaxHeight={"none"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"35px"}
              loading={"lazy"}
              src={{
                src: "/plasmic/sanje_panel/images/image2.svg",
                fullWidth: 1132,
                fullHeight: 1132,
                aspectRatio: 1
              }}
            />

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__mZyXo
              )}
            >
              <React.Fragment>
                {(() => {
                  try {
                    return $props.provider === "doctoreto"
                      ? "دکتـــرِتو"
                      : $props.displayName;
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return "\u0646\u0648\u0628\u062a\u200c\u062f\u0647\u06cc \u067e\u0632\u0634\u06a9";
                    }
                    throw e;
                  }
                })()}
              </React.Fragment>
            </div>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___0MfFb
              )}
            >
              <React.Fragment>
                {(() => {
                  try {
                    return $props.provider === "doctoreto"
                      ? "دکتـــرِتو"
                      : $props.displayName;
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return "\u067e\u0630\u06cc\u0631\u063424";
                    }
                    throw e;
                  }
                })()}
              </React.Fragment>
            </div>
          </div>
        </div>
      </Stack__>
      <Icon2Icon
        data-plasmic-name={"loading"}
        data-plasmic-override={overrides.loading}
        className={classNames(projectcss.all, sty.loading)}
        role={"img"}
      />

      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text__fqZvh
        )}
      >
        <React.Fragment>
          <React.Fragment>{""}</React.Fragment>
          {
            <h6
              className={classNames(
                projectcss.all,
                projectcss.h6,
                projectcss.__wab_text,
                sty.h6__qUd
              )}
            >
              {
                "\u062a\u0627 \u0686\u0646\u062f \u062b\u0627\u0646\u06cc\u0647 \u062f\u06cc\u06af\u0631 \u0622\u0646 \u0631\u0627 \u0645\u0634\u0627\u0647\u062f\u0647 \u062e\u0648\u0627\u0647\u06cc\u062f \u06a9\u0631\u062f."
              }
            </h6>
          }
          <React.Fragment>{""}</React.Fragment>
        </React.Fragment>
      </div>
      <PlasmicImg__
        alt={""}
        className={classNames(sty.img__gd4Ci)}
        displayHeight={"auto"}
        displayMaxHeight={"none"}
        displayMaxWidth={"100%"}
        displayMinHeight={"0"}
        displayMinWidth={"0"}
        displayWidth={"auto"}
        loading={"lazy"}
        src={{
          src: "/plasmic/sanje_panel/images/image7.svg",
          fullWidth: 400,
          fullHeight: 8,
          aspectRatio: 50
        }}
      />

      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text__tasqH
        )}
      >
        <React.Fragment>
          <React.Fragment>{""}</React.Fragment>
          {
            <h6
              className={classNames(
                projectcss.all,
                projectcss.h6,
                projectcss.__wab_text,
                sty.h6__a1Uvo
              )}
            >
              <React.Fragment>
                <React.Fragment>{""}</React.Fragment>
                {
                  <h6
                    className={classNames(
                      projectcss.all,
                      projectcss.h6,
                      projectcss.__wab_text,
                      sty.h6__iPoxf
                    )}
                  >
                    {
                      "\u067e\u0633 \u0627\u0632 \u0645\u0634\u0627\u0647\u062f\u0647 \u0633\u0627\u06cc\u062a \u067e\u0632\u0634\u06a9\u060c \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0646\u0648\u0628\u062a \u062e\u0648\u062f \u0631\u0627 \u062b\u0628\u062a \u06a9\u0646\u06cc\u062f."
                    }
                  </h6>
                }
                <React.Fragment>{""}</React.Fragment>
              </React.Fragment>
            </h6>
          }
          <React.Fragment>{""}</React.Fragment>
        </React.Fragment>
      </div>
      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text__uXg5H
        )}
      >
        <React.Fragment>
          <React.Fragment>{""}</React.Fragment>
          {
            <h6
              className={classNames(
                projectcss.all,
                projectcss.h6,
                projectcss.__wab_text,
                sty.h6__n09Sf
              )}
            >
              <React.Fragment>
                {(() => {
                  try {
                    return `نوبت‌دهی ${$props.displayName} در پذیرش24 فعال نبود. بجای آن نوبت دهی ایشان در سایت دیگری برای شما پیدا کردیم.`;
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return "\n\ud83d\udd0d \u067e\u0632\u0634\u06a9 \u0634\u0645\u0627 \u062f\u0631 \u067e\u0630\u06cc\u0631\u0634\u06f2\u06f4 \u062d\u0636\u0648\u0631 \u0646\u062f\u0627\u0634\u062a\u060c \u0627\u0645\u0627 \u0646\u0648\u0628\u062a\u200c\u062f\u0647\u06cc \u0622\u0646 \u0631\u0627 \u062f\u0631 \u0633\u0627\u06cc\u062a\u06cc \u062f\u06cc\u06af\u0631 \u0628\u0631\u0627\u06cc \u0634\u0645\u0627 \u067e\u06cc\u062f\u0627 \u06a9\u0631\u062f\u06cc\u0645.\n\n\u062a\u0627 \u0686\u0646\u062f \u062b\u0627\u0646\u06cc\u0647 \u062f\u06cc\u06af\u0631 \u0622\u0646 \u0631\u0627 \u0645\u0634\u0627\u0647\u062f\u0647 \u062e\u0648\u0627\u0647\u06cc\u062f \u06a9\u0631\u062f.\n";
                    }
                    throw e;
                  }
                })()}
              </React.Fragment>
            </h6>
          }
          <React.Fragment>{""}</React.Fragment>
        </React.Fragment>
      </div>
      <Button
        children2={
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__dL3T
            )}
          >
            {
              "\u062f\u0631 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0645\u0648\u062a\u0648\u0631 \u062c\u0633\u062a\u062c\u0648 \u0645\u0634\u06a9\u0644\u06cc \u062f\u0627\u0631\u06cc\u062f\u061f"
            }
          </div>
        }
        className={classNames("__wab_instance", sty.button__qMxJ4)}
        color={"clear"}
        link={"https://survey.porsline.ir/s/NeySKF1?terminal_id=xxxx&url=xxxx"}
        outline={true}
        size={"compact"}
        target={true}
      />

      <Button
        children2={
          "\u0628\u0627\u0632\u06af\u0634\u062a \u0628\u0647 \u0646\u062a\u0627\u06cc\u062c \u062c\u0633\u062a\u062c\u0648"
        }
        className={classNames("__wab_instance", sty.button___6V6Qq)}
        color={"sand"}
        link={""}
        onClick={async event => {
          const $steps = {};

          $steps["runCode"] = true
            ? (() => {
                const actionArgs = {
                  customFunction: async () => {
                    return (() => {
                      return window.history.back();
                    })();
                  }
                };
                return (({ customFunction }) => {
                  return customFunction();
                })?.apply(null, [actionArgs]);
              })()
            : undefined;
          if (
            $steps["runCode"] != null &&
            typeof $steps["runCode"] === "object" &&
            typeof $steps["runCode"].then === "function"
          ) {
            $steps["runCode"] = await $steps["runCode"];
          }
        }}
        outline={true}
        showEndIcon={true}
        size={"compact"}
        target={true}
      />

      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text__dbBj7
        )}
      >
        <React.Fragment>
          {(() => {
            try {
              return $props.displayName;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return "";
              }
              throw e;
            }
          })()}
        </React.Fragment>
      </div>
      <SideEffect
        data-plasmic-name={"splunkEventRedirect"}
        data-plasmic-override={overrides.splunkEventRedirect}
        className={classNames("__wab_instance", sty.splunkEventRedirect)}
        onMount={async () => {
          const $steps = {};

          $steps["sendSplunkEventOfLoadPage"] = false
            ? (() => {
                const actionArgs = {
                  args: [
                    (() => {
                      try {
                        return {
                          event_group: "search_metrics",
                          event_type: "interstitial_page_load",
                          current_url: window.location.href,
                          terminal_id: window.document.cookie
                            ?.split("; ")
                            ?.find?.(row => row.startsWith("terminal_id="))
                            ?.split?.("=")?.[1]
                        };
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return undefined;
                        }
                        throw e;
                      }
                    })()
                  ]
                };
                return $globalActions["Splunk.sendLog"]?.apply(null, [
                  ...actionArgs.args
                ]);
              })()
            : undefined;
          if (
            $steps["sendSplunkEventOfLoadPage"] != null &&
            typeof $steps["sendSplunkEventOfLoadPage"] === "object" &&
            typeof $steps["sendSplunkEventOfLoadPage"].then === "function"
          ) {
            $steps["sendSplunkEventOfLoadPage"] = await $steps[
              "sendSplunkEventOfLoadPage"
            ];
          }
        }}
      />

      <SideEffect
        data-plasmic-name={"writeTransitionDataCookie"}
        data-plasmic-override={overrides.writeTransitionDataCookie}
        className={classNames("__wab_instance", sty.writeTransitionDataCookie)}
        onMount={async () => {
          const $steps = {};

          $steps["runCode"] = true
            ? (() => {
                const actionArgs = {
                  customFunction: async () => {
                    return (() => {
                      return (function () {
                        function getQueryParams() {
                          let params = {};
                          let queryString = window.location.search.substring(1);
                          let vars = queryString.split("&");
                          for (let i = 0; i < vars.length; i++) {
                            let pair = vars[i].split("=");
                            let key = decodeURIComponent(pair[0]);
                            let value = decodeURIComponent(pair[1] || "");
                            params[key] = value;
                          }
                          return params;
                        }
                        function getCookie(name) {
                          let match = document.cookie.match(
                            new RegExp("(^|;\\s*)" + name + "=([^;]*)")
                          );
                          return match ? decodeURIComponent(match[2]) : null;
                        }
                        let params = getQueryParams();
                        let destinationURL = params["uri"] || "";
                        let destinationHost = "";
                        if (destinationURL) {
                          try {
                            let urlObj = new URL(destinationURL);
                            destinationHost = urlObj.hostname;
                          } catch (e) {
                            console.error(
                              "Invalid destination URL:",
                              destinationURL
                            );
                          }
                        }
                        let destinationDoctorName =
                          params["display_name"] || "";
                        let surveyResponseStatus = "Not-displayed";
                        let terminalId = getCookie("terminal_id") || "";
                        let destinationSiteTitle = "";
                        switch (destinationHost) {
                          case "drdr.ir":
                            destinationSiteTitle = "دکتردکتر";
                            break;
                          case "darmankade.com":
                            destinationSiteTitle = "درمانکده";
                            break;
                          case "nobat.ir":
                            destinationSiteTitle = "نوبت دات‌آی‌آر";
                            break;
                          case "doctoreto.com":
                            destinationSiteTitle = "دکترتو";
                            break;
                          default:
                            destinationSiteTitle = "سایت پزشک";
                            break;
                        }
                        let cookieData = {
                          surveyResponseStatus: surveyResponseStatus,
                          destinationURL: destinationURL,
                          destinationHost: destinationHost,
                          destinationDoctorName: destinationDoctorName,
                          terminalId: terminalId,
                          destinationSiteTitle: destinationSiteTitle
                        };
                        let now = new Date();
                        let expireTime = new Date(
                          now.getTime() + 24 * 60 * 60 * 1000
                        );
                        let expires = "expires=" + expireTime.toUTCString();
                        let cookieName = "transitionData";
                        let cookieValue = encodeURIComponent(
                          JSON.stringify(cookieData)
                        );
                        let cookiePath = "path=/";
                        let cookieDomain = "domain=.paziresh24.com";
                        document.cookie = `${cookieName}=${cookieValue}; ${expires}; ${cookiePath}; ${cookieDomain}`;
                      })();
                    })();
                  }
                };
                return (({ customFunction }) => {
                  return customFunction();
                })?.apply(null, [actionArgs]);
              })()
            : undefined;
          if (
            $steps["runCode"] != null &&
            typeof $steps["runCode"] === "object" &&
            typeof $steps["runCode"].then === "function"
          ) {
            $steps["runCode"] = await $steps["runCode"];
          }
        }}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "svg",
    "loading",
    "splunkEventRedirect",
    "writeTransitionDataCookie"
  ],
  svg: ["svg"],
  loading: ["loading"],
  splunkEventRedirect: ["splunkEventRedirect"],
  writeTransitionDataCookie: ["writeTransitionDataCookie"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  svg: "svg";
  loading: "svg";
  splunkEventRedirect: typeof SideEffect;
  writeTransitionDataCookie: typeof SideEffect;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicInterstitialFullPageComponent__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicInterstitialFullPageComponent__VariantsArgs;
    args?: PlasmicInterstitialFullPageComponent__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit< // Specify variants directly as props
    PlasmicInterstitialFullPageComponent__VariantsArgs,
    ReservedPropsType
  > &
    /* Specify args directly as props*/ Omit<
      PlasmicInterstitialFullPageComponent__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicInterstitialFullPageComponent__ArgProps,
          internalVariantPropNames:
            PlasmicInterstitialFullPageComponent__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicInterstitialFullPageComponent__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicInterstitialFullPageComponent";
  } else {
    func.displayName = `PlasmicInterstitialFullPageComponent.${nodeName}`;
  }
  return func;
}

export const PlasmicInterstitialFullPageComponent = Object.assign(
  // Top-level PlasmicInterstitialFullPageComponent renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    svg: makeNodeComponent("svg"),
    loading: makeNodeComponent("loading"),
    splunkEventRedirect: makeNodeComponent("splunkEventRedirect"),
    writeTransitionDataCookie: makeNodeComponent("writeTransitionDataCookie"),

    // Metadata about props expected for PlasmicInterstitialFullPageComponent
    internalVariantProps: PlasmicInterstitialFullPageComponent__VariantProps,
    internalArgProps: PlasmicInterstitialFullPageComponent__ArgProps
  }
);

export default PlasmicInterstitialFullPageComponent;
/* prettier-ignore-end */
