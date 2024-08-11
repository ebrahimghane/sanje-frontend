// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
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
import { SideEffect } from "@plasmicpkgs/plasmic-basic-components";
import ScriptsAndGeneralTags from "../../ScriptsAndGeneralTags"; // plasmic-import: zZNx54MRT-Br/component

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
  sideEffect?: Flex__<typeof SideEffect>;
  scriptsAndGeneralTags?: Flex__<typeof ScriptsAndGeneralTags>;
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

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

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
              className={classNames(
                "__wab_instance",
                sty.interstitialFullPageComponent
              )}
            />
          </div>
          <SideEffect
            data-plasmic-name={"sideEffect"}
            data-plasmic-override={overrides.sideEffect}
            className={classNames("__wab_instance", sty.sideEffect)}
            onMount={async () => {
              const $steps = {};

              $steps["runCode"] = true
                ? (() => {
                    const actionArgs = {
                      customFunction: async () => {
                        return (() => {
                          return setTimeout(function () {
                            const uri = decodeURIComponent($ctx.query.uri);
                            const fullUrl = "https://doctoreto.com/" + uri;
                            window.location.href = fullUrl;
                          }, 10000);
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

          <ScriptsAndGeneralTags
            data-plasmic-name={"scriptsAndGeneralTags"}
            data-plasmic-override={overrides.scriptsAndGeneralTags}
            className={classNames("__wab_instance", sty.scriptsAndGeneralTags)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "freeBox",
    "interstitialFullPageComponent",
    "sideEffect",
    "scriptsAndGeneralTags"
  ],
  freeBox: ["freeBox", "interstitialFullPageComponent"],
  interstitialFullPageComponent: ["interstitialFullPageComponent"],
  sideEffect: ["sideEffect"],
  scriptsAndGeneralTags: ["scriptsAndGeneralTags"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  interstitialFullPageComponent: typeof InterstitialFullPageComponent;
  sideEffect: typeof SideEffect;
  scriptsAndGeneralTags: typeof ScriptsAndGeneralTags;
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
    /* Specify args directly as props*/ Omit<
      PlasmicInterstitialPage__ArgsType,
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
    sideEffect: makeNodeComponent("sideEffect"),
    scriptsAndGeneralTags: makeNodeComponent("scriptsAndGeneralTags"),

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
