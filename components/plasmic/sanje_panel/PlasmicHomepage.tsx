// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: aU6fPsMDSmKqgHWpAbdgs
// Component: qMyNx4KEh22M

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

import { SideEffect } from "@plasmicpkgs/plasmic-basic-components";
import Button from "../../Button"; // plasmic-import: oVzoHzMf1TLl/component
import { DataFetcher } from "@plasmicpkgs/plasmic-query";
import LinearScaleCustomChart from "../../LinearScaleCustomChart"; // plasmic-import: 15G81XIekDs9/component
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import { useScreenVariants as useScreenVariantsbr2UhI7UlpvR } from "../fragment_icons/PlasmicGlobalVariant__Screen"; // plasmic-import: BR2UhI7ulpvR/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_fragment_design_system_css from "../fragment_design_system/plasmic.module.css"; // plasmic-import: h9Dbk9ygddw7UVEq1NNhKi/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: aU6fPsMDSmKqgHWpAbdgs/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: qMyNx4KEh22M/css

import ChevronRightIcon from "../fragment_icons/icons/PlasmicIcon__ChevronRight"; // plasmic-import: GHdF3hS-oP_3/icon
import ChevronLeftIcon from "../fragment_icons/icons/PlasmicIcon__ChevronLeft"; // plasmic-import: r9Upp9NbiZkf/icon

createPlasmicElementProxy;

export type PlasmicHomepage__VariantMembers = {};
export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  root?: Flex__<"div">;
  sideEffect?: Flex__<typeof SideEffect>;
  button?: Flex__<typeof Button>;
  section?: Flex__<"section">;
  h4?: Flex__<"h4">;
  h5?: Flex__<"h5">;
  main?: Flex__<"main">;
  groupExpertiseOnlineVisitsPricingStats?: Flex__<typeof DataFetcher>;
  h6?: Flex__<"h6">;
};

export interface DefaultHomepageProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const $globalActions = useGlobalActions?.();

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "currentDoctorData",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          (() => {
            try {
              return {};
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return {};
              }
              throw e;
            }
          })()
      },
      {
        path: "currentDoctorGroupExpertiseOnlineVisitsPricingStats",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => ({})
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsbr2UhI7UlpvR()
  });

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
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
            sty.root
          )}
          dir={"RTL"}
        >
          <SideEffect
            data-plasmic-name={"sideEffect"}
            data-plasmic-override={overrides.sideEffect}
            className={classNames("__wab_instance", sty.sideEffect)}
            onMount={async () => {
              const $steps = {};

              $steps["updateCurrentDoctorData2"] = true
                ? (() => {
                    const actionArgs = {
                      customFunction: async () => {
                        return (() => {
                          return fetch(
                            "https://apigw.paziresh24.com/v1/n8n-search/webhook/my-search-document",
                            {
                              method: "GET",
                              credentials: "include"
                            }
                          )
                            .then(response => response.json())
                            .then(data => {
                              $state.currentDoctorData = data;
                            });
                        })();
                      }
                    };
                    return (({ customFunction }) => {
                      return customFunction();
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
              if (
                $steps["updateCurrentDoctorData2"] != null &&
                typeof $steps["updateCurrentDoctorData2"] === "object" &&
                typeof $steps["updateCurrentDoctorData2"].then === "function"
              ) {
                $steps["updateCurrentDoctorData2"] = await $steps[
                  "updateCurrentDoctorData2"
                ];
              }

              $steps["getMySearchDocument"] = false
                ? (() => {
                    const actionArgs = {
                      args: [
                        undefined,
                        "https://apigw.paziresh24.com/v1/n8n-search/webhook/my-search-document",
                        undefined,
                        undefined,
                        {
                          withCredentials: true,
                          headers: { "Content-Type": "application/json" }
                        }
                      ]
                    };
                    return $globalActions["Fragment.apiRequest"]?.apply(null, [
                      ...actionArgs.args
                    ]);
                  })()
                : undefined;
              if (
                $steps["getMySearchDocument"] != null &&
                typeof $steps["getMySearchDocument"] === "object" &&
                typeof $steps["getMySearchDocument"].then === "function"
              ) {
                $steps["getMySearchDocument"] = await $steps[
                  "getMySearchDocument"
                ];
              }

              $steps["updateCurrentDoctorData"] = false
                ? (() => {
                    const actionArgs = {
                      variable: {
                        objRoot: $state,
                        variablePath: ["currentDoctorData"]
                      },
                      operation: 0,
                      value: $steps.getMySearchDocument
                    };
                    return (({ variable, value, startIndex, deleteCount }) => {
                      if (!variable) {
                        return;
                      }
                      const { objRoot, variablePath } = variable;

                      $stateSet(objRoot, variablePath, value);
                      return value;
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
              if (
                $steps["updateCurrentDoctorData"] != null &&
                typeof $steps["updateCurrentDoctorData"] === "object" &&
                typeof $steps["updateCurrentDoctorData"].then === "function"
              ) {
                $steps["updateCurrentDoctorData"] = await $steps[
                  "updateCurrentDoctorData"
                ];
              }
            }}
          />

          {false ? (
            <Button
              data-plasmic-name={"button"}
              data-plasmic-override={overrides.button}
              className={classNames("__wab_instance", sty.button)}
              onClick={async event => {
                const $steps = {};

                $steps["runCode"] = true
                  ? (() => {
                      const actionArgs = {
                        customFunction: async () => {
                          return (() => {
                            return fetch(
                              "https://apigw.paziresh24.com/v1/n8n-search/webhook/my-search-document",
                              {
                                method: "GET",
                                credentials: "include"
                              }
                            )
                              .then(response => response.json())
                              .then(data => {
                                $state.currentDoctorData = data;
                              });
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

                $steps["updateCurrentDoctorData4"] = false
                  ? (() => {
                      const actionArgs = {
                        customFunction: async () => {
                          return (async () => {
                            async function fetchWithCookies(url) {
                              try {
                                const response = await fetch(url, {
                                  method: "GET",
                                  credentials: "include",
                                  headers: {
                                    "Content-Type": "application/json"
                                  }
                                });
                                if (!response.ok) {
                                  throw new Error(
                                    `HTTP error! Status: ${response.status}`
                                  );
                                }
                                const data = await response.json();
                                console.log(data);
                              } catch (error) {
                                console.error("Error:", error);
                              }
                            }
                            const url =
                              "https://apigw.paziresh24.com/v1/n8n-search/webhook/my-search-document";
                            return ($state.currentDoctorData =
                              fetchWithCookies(url));
                          })();
                        }
                      };
                      return (({ customFunction }) => {
                        return customFunction();
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  $steps["updateCurrentDoctorData4"] != null &&
                  typeof $steps["updateCurrentDoctorData4"] === "object" &&
                  typeof $steps["updateCurrentDoctorData4"].then === "function"
                ) {
                  $steps["updateCurrentDoctorData4"] = await $steps[
                    "updateCurrentDoctorData4"
                  ];
                }
              }}
            />
          ) : null}
          {false ? (
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__fsagY
              )}
            >
              <React.Fragment>
                {(() => {
                  try {
                    return JSON.stringify(
                      $state.currentDoctorGroupExpertiseOnlineVisitsPricingStats
                    );
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
          ) : null}
          {false ? (
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__leMv8
              )}
            >
              <React.Fragment>
                {(() => {
                  try {
                    return JSON.stringify($state.currentDoctorData);
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
          ) : null}
          <section
            data-plasmic-name={"section"}
            data-plasmic-override={overrides.section}
            className={classNames(projectcss.all, sty.section)}
          >
            <h4
              data-plasmic-name={"h4"}
              data-plasmic-override={overrides.h4}
              className={classNames(
                projectcss.all,
                projectcss.h4,
                projectcss.__wab_text,
                sty.h4
              )}
            >
              {
                "\u0634\u0627\u062e\u0635 \u0647\u0627\u06cc \u0639\u0645\u0644\u06a9\u0631\u062f \u0634\u0645\u0627 \u062f\u0631 \u067e\u0644\u062a\u0641\u0631\u0645 \u067e\u0630\u06cc\u0631\u063424"
              }
            </h4>
            <div className={classNames(projectcss.all, sty.freeBox___6T4Ji)}>
              <h5
                data-plasmic-name={"h5"}
                data-plasmic-override={overrides.h5}
                className={classNames(
                  projectcss.all,
                  projectcss.h5,
                  projectcss.__wab_text,
                  sty.h5
                )}
              >
                {
                  "\u0646\u0631\u062e \u0648\u06cc\u0632\u06cc\u062a \u0622\u0646\u0644\u0627\u06cc\u0646"
                }
              </h5>
              <main
                data-plasmic-name={"main"}
                data-plasmic-override={overrides.main}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.main
                )}
              >
                {
                  "\u0627\u0639\u062f\u0627\u062f \u0628\u0631 \u0627\u0633\u0627\u0633 \u067e\u0631\u062f\u0627\u062e\u062a \u0647\u0627\u06cc \u067e\u0631\u062a\u06a9\u0631\u0627\u0631 \u0628\u06cc\u0645\u0627\u0631\u0627\u0646 \u0627\u0633\u062a\u062e\u0631\u0627\u062c \u0634\u062f\u0647 \u0627\u0633\u062a."
                }
              </main>
              {(_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
                (() => {
                  try {
                    return $state.currentDoctorData.entity.group_expertise_id;
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return [];
                    }
                    throw e;
                  }
                })()
              ).map((__plasmic_item_0, __plasmic_idx_0) => {
                const currentItem = __plasmic_item_0;
                const currentIndex = __plasmic_idx_0;
                return (
                  <DataFetcher
                    data-plasmic-name={"groupExpertiseOnlineVisitsPricingStats"}
                    data-plasmic-override={
                      overrides.groupExpertiseOnlineVisitsPricingStats
                    }
                    className={classNames(
                      "__wab_instance",
                      sty.groupExpertiseOnlineVisitsPricingStats
                    )}
                    dataName={"fetchedData"}
                    errorDisplay={
                      <DataCtxReader__>
                        {$ctx => "Error fetching data"}
                      </DataCtxReader__>
                    }
                    errorName={"fetchError"}
                    headers={{
                      "Content-Type": "application/json",
                      Accept: "application/json"
                    }}
                    key={currentIndex}
                    loadingDisplay={
                      <DataCtxReader__>{$ctx => "Loading..."}</DataCtxReader__>
                    }
                    method={"GET"}
                    noLayout={false}
                    previewErrorDisplay={false}
                    previewSpinner={false}
                    url={(() => {
                      try {
                        return (
                          "https://apigw.paziresh24.com/v1/n8n-search/webhook/GroupExpertiseOnlineVisitsPricingStats?group_expertise_id=" +
                          currentItem
                        );
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return undefined;
                        }
                        throw e;
                      }
                    })()}
                  >
                    <DataCtxReader__>
                      {$ctx => (
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__otToo
                          )}
                        >
                          <h6
                            data-plasmic-name={"h6"}
                            data-plasmic-override={overrides.h6}
                            className={classNames(
                              projectcss.all,
                              projectcss.h6,
                              projectcss.__wab_text,
                              sty.h6
                            )}
                          >
                            <React.Fragment>
                              {(() => {
                                try {
                                  return (
                                    "گروه " + $ctx.fetchedData.group_name + ":"
                                  );
                                } catch (e) {
                                  if (
                                    e instanceof TypeError ||
                                    e?.plasmicType ===
                                      "PlasmicUndefinedDataError"
                                  ) {
                                    return "...";
                                  }
                                  throw e;
                                }
                              })()}
                            </React.Fragment>
                          </h6>
                          <LinearScaleCustomChart
                            className={classNames(
                              "__wab_instance",
                              sty.linearScaleCustomChart___8ZMrv
                            )}
                            colorrange={(() => {
                              try {
                                return {
                                  range: [
                                    {
                                      minvalue: $ctx.fetchedData.min / 10000,
                                      "minvalue-lable":
                                        $ctx.fetchedData.min / 10000 +
                                        " هزار تومان",
                                      maxvalue: Math.round(
                                        ($ctx.fetchedData.avg -
                                          ($ctx.fetchedData.max -
                                            $ctx.fetchedData.min) /
                                            10) /
                                          10000
                                      ),
                                      label: "خوش قیمت",
                                      code: "#62B58F"
                                    },
                                    {
                                      minvalue: Math.round(
                                        ($ctx.fetchedData.avg -
                                          ($ctx.fetchedData.max -
                                            $ctx.fetchedData.min) /
                                            10) /
                                          10000
                                      ),
                                      "minvalue-lable":
                                        Math.round(
                                          ($ctx.fetchedData.avg -
                                            ($ctx.fetchedData.max -
                                              $ctx.fetchedData.min) /
                                              10) /
                                            10000
                                        ) + " هزار تومان",
                                      maxvalue: Math.round(
                                        ($ctx.fetchedData.avg +
                                          ($ctx.fetchedData.max -
                                            $ctx.fetchedData.min) /
                                            10) /
                                          10000
                                      ),
                                      label: "میانگین",
                                      code: "#FFC533"
                                    },
                                    {
                                      minvalue: Math.round(
                                        ($ctx.fetchedData.avg +
                                          ($ctx.fetchedData.max -
                                            $ctx.fetchedData.min) /
                                            10) /
                                          10000
                                      ),
                                      "minvalue-lable":
                                        Math.round(
                                          ($ctx.fetchedData.avg +
                                            ($ctx.fetchedData.max -
                                              $ctx.fetchedData.min) /
                                              10) /
                                            10000
                                        ) + " هزار تومان",
                                      maxvalue: $ctx.fetchedData.max / 10000,
                                      "maxvalue-lable":
                                        $ctx.fetchedData.max / 10000 +
                                        " هزار تومان",
                                      label: "گران",
                                      code: "#F2726F"
                                    }
                                  ]
                                };
                              } catch (e) {
                                if (
                                  e instanceof TypeError ||
                                  e?.plasmicType === "PlasmicUndefinedDataError"
                                ) {
                                  return {
                                    range: [
                                      {
                                        minvalue: "1",
                                        "minvalue-lable":
                                          "1 \u0647\u0632\u0627\u0631 \u062a\u0648\u0645\u0627\u0646",
                                        maxvalue: "1",
                                        label:
                                          "\u062e\u0648\u0634 \u0642\u06cc\u0645\u062a\n \u06a9\u0645\u062a\u0631 \u0627\u0632 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646",
                                        code: "#62B58F"
                                      },
                                      {
                                        minvalue: "1",
                                        "minvalue-lable":
                                          "1 \u0647\u0632\u0627\u0631 \u062a\u0648\u0645\u0627\u0646",
                                        maxvalue: "1",
                                        label:
                                          "\u0645\u06cc\u0627\u0646\u06af\u06cc\u0646",
                                        code: "#FFC533"
                                      },
                                      {
                                        minvalue: "1",
                                        "minvalue-lable":
                                          "1 \u0647\u0632\u0627\u0631 \u062a\u0648\u0645\u0627\u0646",
                                        maxvalue: "1",
                                        "maxvalue-lable":
                                          "1 \u0647\u0632\u0627\u0631 \u062a\u0648\u0645\u0627\u0646",
                                        label:
                                          "\u06af\u0631\u0627\u0646\n \u0628\u06cc\u0634 \u0627\u0632 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646",
                                        code: "#F2726F"
                                      }
                                    ]
                                  };
                                }
                                throw e;
                              }
                            })()}
                            label={(() => {
                              try {
                                return (
                                  "ویزیت شما " +
                                  $state.currentDoctorData.entity
                                    .consult_services[0].free_price /
                                    10000 +
                                  " هزارتومان"
                                );
                              } catch (e) {
                                if (
                                  e instanceof TypeError ||
                                  e?.plasmicType === "PlasmicUndefinedDataError"
                                ) {
                                  return undefined;
                                }
                                throw e;
                              }
                            })()}
                            range={(() => {
                              try {
                                return (
                                  ($state.currentDoctorData.entity
                                    .consult_services[0].free_price /
                                    $ctx.fetchedData.max) *
                                  100
                                );
                              } catch (e) {
                                if (
                                  e instanceof TypeError ||
                                  e?.plasmicType === "PlasmicUndefinedDataError"
                                ) {
                                  return undefined;
                                }
                                throw e;
                              }
                            })()}
                          />
                        </div>
                      )}
                    </DataCtxReader__>
                  </DataFetcher>
                );
              })}
            </div>
            {(_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
              (() => {
                try {
                  return $state.currentDoctorData.entity.group_expertise_id;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return [];
                  }
                  throw e;
                }
              })()
            ).map((__plasmic_item_0, __plasmic_idx_0) => {
              const currentItem = __plasmic_item_0;
              const currentIndex = __plasmic_idx_0;
              return (
                <LinearScaleCustomChart
                  className={classNames(
                    "__wab_instance",
                    sty.linearScaleCustomChart__oTlK2
                  )}
                  colorrange={{
                    range: [
                      {
                        minvalue: "27",
                        "minvalue-lable":
                          "27 \u0647\u0632\u0627\u0631 \u062a\u0648\u0645\u0627\u0646",
                        maxvalue: "72",
                        label:
                          "\u062e\u0648\u0634 \u0642\u06cc\u0645\u062a\n \u06a9\u0645\u062a\u0631 \u0627\u0632 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646",
                        code: "#62B58F"
                      },
                      {
                        minvalue: "72",
                        "minvalue-lable":
                          "72 \u0647\u0632\u0627\u0631 \u062a\u0648\u0645\u0627\u0646",
                        maxvalue: "116",
                        label: "\u0645\u06cc\u0627\u0646\u06af\u06cc\u0646",
                        code: "#FFC533"
                      },
                      {
                        minvalue: "116",
                        "minvalue-lable":
                          "116 \u0647\u0632\u0627\u0631 \u062a\u0648\u0645\u0627\u0646",
                        maxvalue: "300",
                        "maxvalue-lable":
                          "300 \u0647\u0632\u0627\u0631 \u062a\u0648\u0645\u0627\u0646",
                        label:
                          "\u06af\u0631\u0627\u0646\n \u0628\u06cc\u0634 \u0627\u0632 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646",
                        code: "#F2726F"
                      }
                    ]
                  }}
                  key={currentIndex}
                  label={(() => {
                    try {
                      return (
                        "ویزیت شما " +
                        $state.currentDoctorData.entity.consult_services[0]
                          .free_price /
                          10000 +
                        " هزارتومان"
                      );
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return undefined;
                      }
                      throw e;
                    }
                  })()}
                  range={
                    hasVariant(globalVariants, "screen", "mobileOnly")
                      ? 80
                      : (() => {
                          try {
                            return (
                              ($state.currentDoctorData.entity
                                .consult_services[0].free_price /
                                1400000) *
                              50
                            );
                          } catch (e) {
                            if (
                              e instanceof TypeError ||
                              e?.plasmicType === "PlasmicUndefinedDataError"
                            ) {
                              return 10;
                            }
                            throw e;
                          }
                        })()
                  }
                />
              );
            })}
          </section>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "sideEffect",
    "button",
    "section",
    "h4",
    "h5",
    "main",
    "groupExpertiseOnlineVisitsPricingStats",
    "h6"
  ],
  sideEffect: ["sideEffect"],
  button: ["button"],
  section: [
    "section",
    "h4",
    "h5",
    "main",
    "groupExpertiseOnlineVisitsPricingStats",
    "h6"
  ],
  h4: ["h4"],
  h5: ["h5"],
  main: ["main"],
  groupExpertiseOnlineVisitsPricingStats: [
    "groupExpertiseOnlineVisitsPricingStats",
    "h6"
  ],
  h6: ["h6"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  sideEffect: typeof SideEffect;
  button: typeof Button;
  section: "section";
  h4: "h4";
  h5: "h5";
  main: "main";
  groupExpertiseOnlineVisitsPricingStats: typeof DataFetcher;
  h6: "h6";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHomepage__ArgsType,
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
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    sideEffect: makeNodeComponent("sideEffect"),
    button: makeNodeComponent("button"),
    section: makeNodeComponent("section"),
    h4: makeNodeComponent("h4"),
    h5: makeNodeComponent("h5"),
    main: makeNodeComponent("main"),
    groupExpertiseOnlineVisitsPricingStats: makeNodeComponent(
      "groupExpertiseOnlineVisitsPricingStats"
    ),
    h6: makeNodeComponent("h6"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */