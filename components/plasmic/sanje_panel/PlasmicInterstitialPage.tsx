/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: aU6fPsMDSmKqgHWpAbdgs
// Component: GV1KOlx_b_Xo

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

import InterstitialFullPageComponent from "../../InterstitialFullPageComponent"; // plasmic-import: yQnkyuy8-tJy/component
import ScriptsAndGeneralTags from "../../ScriptsAndGeneralTags"; // plasmic-import: zZNx54MRT-Br/component
import { SideEffect } from "@plasmicpkgs/plasmic-basic-components";
import { ApiRequest } from "@/fragment/components/api-request"; // plasmic-import: MhkncRKg2Phv/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_fragment_design_system_css from "../fragment_design_system/plasmic.module.css"; // plasmic-import: h9Dbk9ygddw7UVEq1NNhKi/projectcss
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: aU6fPsMDSmKqgHWpAbdgs/projectcss
import sty from "./PlasmicInterstitialPage.module.css"; // plasmic-import: GV1KOlx_b_Xo/css

createPlasmicElementProxy;

export type PlasmicInterstitialPage__VariantMembers = {};
export type PlasmicInterstitialPage__VariantsArgs = {};
type VariantPropType = keyof PlasmicInterstitialPage__VariantsArgs;
export const PlasmicInterstitialPage__VariantProps =
  new Array<VariantPropType>();

export type PlasmicInterstitialPage__ArgsType = {};
type ArgPropType = keyof PlasmicInterstitialPage__ArgsType;
export const PlasmicInterstitialPage__ArgProps = new Array<ArgPropType>();

export type PlasmicInterstitialPage__OverridesType = {
  root?: Flex__<"div">;
  freeBox?: Flex__<"div">;
  interstitialFullPageComponent?: Flex__<typeof InterstitialFullPageComponent>;
  scriptsAndGeneralTags?: Flex__<typeof ScriptsAndGeneralTags>;
  sideEffect?: Flex__<typeof SideEffect>;
  apiRequest?: Flex__<typeof ApiRequest>;
};

export interface DefaultInterstitialPageProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicInterstitialPage__RenderFunc(props: {
  variants: PlasmicInterstitialPage__VariantsArgs;
  args: PlasmicInterstitialPage__ArgsType;
  overrides: PlasmicInterstitialPage__OverridesType;
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

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "apiRequest.data",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        refName: "apiRequest"
      },
      {
        path: "apiRequest.error",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        refName: "apiRequest"
      },
      {
        path: "apiRequest.loading",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        refName: "apiRequest"
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

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicInterstitialPage.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicInterstitialPage.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicInterstitialPage.pageMetadata.title}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        {(() => {
          try {
            return !!$ctx.query.uri;
          } catch (e) {
            if (
              e instanceof TypeError ||
              e?.plasmicType === "PlasmicUndefinedDataError"
            ) {
              return true;
            }
            throw e;
          }
        })() ? (
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
            <div
              data-plasmic-name={"freeBox"}
              data-plasmic-override={overrides.freeBox}
              className={classNames(projectcss.all, sty.freeBox)}
            >
              <InterstitialFullPageComponent
                data-plasmic-name={"interstitialFullPageComponent"}
                data-plasmic-override={overrides.interstitialFullPageComponent}
                displayName={(() => {
                  try {
                    return $ctx.query.display_name;
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
                provider={(() => {
                  try {
                    return $ctx.query.provide;
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
                uri={(() => {
                  try {
                    return $ctx.query.uri.includes("utm")
                      ? $ctx.query.uri
                      : $ctx.query.uri +
                          "/?utm_source=paziresh24&utm_medium=r-btn&utm_campaign=risman";
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

              <ScriptsAndGeneralTags
                data-plasmic-name={"scriptsAndGeneralTags"}
                data-plasmic-override={overrides.scriptsAndGeneralTags}
                className={classNames(
                  "__wab_instance",
                  sty.scriptsAndGeneralTags
                )}
              />

              <SideEffect
                data-plasmic-name={"sideEffect"}
                data-plasmic-override={overrides.sideEffect}
                className={classNames("__wab_instance", sty.sideEffect)}
                onMount={async () => {
                  const $steps = {};

                  $steps["rismanSendSplunkLog"] = true
                    ? (() => {
                        const actionArgs = {
                          args: [
                            (() => {
                              try {
                                return {
                                  event_group: "risman_metrics",
                                  event_type: "interstitial_page_load",
                                  current_url: window?.location?.href,
                                  user_id:
                                    $state?.apiRequest?.data?.users?.[0]?.id,
                                  terminal_id: window.document.cookie
                                    ?.split("; ")
                                    ?.find?.(row =>
                                      row.startsWith("terminal_id=")
                                    )
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
                            })(),
                            "https://splunk-risman-hec.paziresh24.com",
                            "3c14a148-787c-4b8c-b442-96a9c9979683"
                          ]
                        };
                        return $globalActions["Splunk.sendLog"]?.apply(null, [
                          ...actionArgs.args
                        ]);
                      })()
                    : undefined;
                  if (
                    $steps["rismanSendSplunkLog"] != null &&
                    typeof $steps["rismanSendSplunkLog"] === "object" &&
                    typeof $steps["rismanSendSplunkLog"].then === "function"
                  ) {
                    $steps["rismanSendSplunkLog"] = await $steps[
                      "rismanSendSplunkLog"
                    ];
                  }

                  $steps["runCode"] = true
                    ? (() => {
                        const actionArgs = {
                          customFunction: async () => {
                            return setTimeout(function () {
                              try {
                                const urlParams = new URLSearchParams(
                                  window.location.search
                                );
                                const uri = decodeURIComponent(
                                  urlParams.get("uri") || ""
                                );
                                const provide = urlParams.get("provide");
                                if (!uri || !provide) {
                                  console.error(
                                    "Missing URI or Provide parameter."
                                  );
                                  return;
                                }
                                let fullUrl = "";
                                if (provide === "doctoreto") {
                                  fullUrl = "https://doctoreto.com/" + uri;
                                } else if (provide === "page") {
                                  fullUrl = uri;
                                } else {
                                  console.error(
                                    "Provide parameter is not recognized."
                                  );
                                  return;
                                }
                                const a = document.createElement("a");
                                a.href = fullUrl;
                                a.rel = "noreferrer noopener";
                                a.style.display = "none";
                                a.target = "_self";
                                document.body.appendChild(a);
                                a.click();
                                document.body.removeChild(a);
                              } catch (err) {
                                console.error("Redirection error:", err);
                              }
                            }, 4000);
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

                  $steps["loadMetrica"] = true
                    ? (() => {
                        const actionArgs = {
                          customFunction: async () => {
                            return (() => {
                              function loadMetrika() {
                                var metrikaScript =
                                  document.createElement("script");
                                metrikaScript.innerHTML = `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();
    for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
    k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

    ym(98010713, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
    });`;
                                document.head.appendChild(metrikaScript);
                                var metrikaNoScript =
                                  document.createElement("noscript");
                                metrikaNoScript.innerHTML = `<div><img src="https://mc.yandex.ru/watch/97948198" style="position:absolute; left:-9999px;" alt="" /></div>`;
                                document.body.insertBefore(
                                  metrikaNoScript,
                                  document.body.firstChild
                                );
                              }
                              return loadMetrika();
                            })();
                          }
                        };
                        return (({ customFunction }) => {
                          return customFunction();
                        })?.apply(null, [actionArgs]);
                      })()
                    : undefined;
                  if (
                    $steps["loadMetrica"] != null &&
                    typeof $steps["loadMetrica"] === "object" &&
                    typeof $steps["loadMetrica"].then === "function"
                  ) {
                    $steps["loadMetrica"] = await $steps["loadMetrica"];
                  }
                }}
              />

              <ApiRequest
                data-plasmic-name={"apiRequest"}
                data-plasmic-override={overrides.apiRequest}
                children={null}
                className={classNames("__wab_instance", sty.apiRequest)}
                errorDisplay={null}
                loadingDisplay={null}
                method={"GET"}
                onError={async (...eventArgs: any) => {
                  generateStateOnChangeProp($state, [
                    "apiRequest",
                    "error"
                  ]).apply(null, eventArgs);

                  (async error => {
                    const $steps = {};

                    $steps["goToPage"] = false
                      ? (() => {
                          const actionArgs = {
                            destination: (() => {
                              try {
                                return `https://www.paziresh24.com/login/?redirect_url=${globalThis.encodeURIComponent(
                                  globalThis.location.href
                                )}`;
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
                          };
                          return (({ destination }) => {
                            if (
                              typeof destination === "string" &&
                              destination.startsWith("#")
                            ) {
                              document
                                .getElementById(destination.substr(1))
                                .scrollIntoView({ behavior: "smooth" });
                            } else {
                              __nextRouter?.push(destination);
                            }
                          })?.apply(null, [actionArgs]);
                        })()
                      : undefined;
                    if (
                      $steps["goToPage"] != null &&
                      typeof $steps["goToPage"] === "object" &&
                      typeof $steps["goToPage"].then === "function"
                    ) {
                      $steps["goToPage"] = await $steps["goToPage"];
                    }
                  }).apply(null, eventArgs);
                }}
                onLoading={async (...eventArgs: any) => {
                  generateStateOnChangeProp($state, [
                    "apiRequest",
                    "loading"
                  ]).apply(null, eventArgs);
                }}
                onSuccess={async (...eventArgs: any) => {
                  generateStateOnChangeProp($state, [
                    "apiRequest",
                    "data"
                  ]).apply(null, eventArgs);

                  (async data => {
                    const $steps = {};
                  }).apply(null, eventArgs);
                }}
                ref={ref => {
                  $refs["apiRequest"] = ref;
                }}
                url={"https://apigw.paziresh24.com/v1/auth/me"}
              />
            </div>
          </div>
        ) : null}
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "freeBox",
    "interstitialFullPageComponent",
    "scriptsAndGeneralTags",
    "sideEffect",
    "apiRequest"
  ],
  freeBox: [
    "freeBox",
    "interstitialFullPageComponent",
    "scriptsAndGeneralTags",
    "sideEffect",
    "apiRequest"
  ],
  interstitialFullPageComponent: ["interstitialFullPageComponent"],
  scriptsAndGeneralTags: ["scriptsAndGeneralTags"],
  sideEffect: ["sideEffect"],
  apiRequest: ["apiRequest"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  interstitialFullPageComponent: typeof InterstitialFullPageComponent;
  scriptsAndGeneralTags: typeof ScriptsAndGeneralTags;
  sideEffect: typeof SideEffect;
  apiRequest: typeof ApiRequest;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicInterstitialPage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicInterstitialPage__VariantsArgs;
    args?: PlasmicInterstitialPage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicInterstitialPage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicInterstitialPage__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
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
          internalArgPropNames: PlasmicInterstitialPage__ArgProps,
          internalVariantPropNames: PlasmicInterstitialPage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicInterstitialPage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicInterstitialPage";
  } else {
    func.displayName = `PlasmicInterstitialPage.${nodeName}`;
  }
  return func;
}

export const PlasmicInterstitialPage = Object.assign(
  // Top-level PlasmicInterstitialPage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    interstitialFullPageComponent: makeNodeComponent(
      "interstitialFullPageComponent"
    ),
    scriptsAndGeneralTags: makeNodeComponent("scriptsAndGeneralTags"),
    sideEffect: makeNodeComponent("sideEffect"),
    apiRequest: makeNodeComponent("apiRequest"),

    // Metadata about props expected for PlasmicInterstitialPage
    internalVariantProps: PlasmicInterstitialPage__VariantProps,
    internalArgProps: PlasmicInterstitialPage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "هدایت به وب سایت نوبت دهی",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicInterstitialPage;
/* prettier-ignore-end */
