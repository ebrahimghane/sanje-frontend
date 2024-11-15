// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: aU6fPsMDSmKqgHWpAbdgs
// Component: w-k8SPtgF7fV

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

import { DataFetcher } from "@plasmicpkgs/plasmic-query";
import DynamicPageCardList from "../../DynamicPageCardList"; // plasmic-import: Pbd98u3TbJTJ/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_fragment_design_system_css from "../fragment_design_system/plasmic.module.css"; // plasmic-import: h9Dbk9ygddw7UVEq1NNhKi/projectcss
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: aU6fPsMDSmKqgHWpAbdgs/projectcss
import sty from "./PlasmicDynamicPagePageSection.module.css"; // plasmic-import: w-k8SPtgF7fV/css

createPlasmicElementProxy;

export type PlasmicDynamicPagePageSection__VariantMembers = {};
export type PlasmicDynamicPagePageSection__VariantsArgs = {};
type VariantPropType = keyof PlasmicDynamicPagePageSection__VariantsArgs;
export const PlasmicDynamicPagePageSection__VariantProps =
  new Array<VariantPropType>();

export type PlasmicDynamicPagePageSection__ArgsType = {
  dataSourceUrl?: string;
};
type ArgPropType = keyof PlasmicDynamicPagePageSection__ArgsType;
export const PlasmicDynamicPagePageSection__ArgProps = new Array<ArgPropType>(
  "dataSourceUrl"
);

export type PlasmicDynamicPagePageSection__OverridesType = {
  root?: Flex__<"div">;
  httpRestApiFetcher?: Flex__<typeof DataFetcher>;
  freeBox?: Flex__<"div">;
  text?: Flex__<"div">;
  dynamicPageCardList?: Flex__<typeof DynamicPageCardList>;
};

export interface DefaultDynamicPagePageSectionProps {
  dataSourceUrl?: string;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicDynamicPagePageSection__RenderFunc(props: {
  variants: PlasmicDynamicPagePageSection__VariantsArgs;
  args: PlasmicDynamicPagePageSection__ArgsType;
  overrides: PlasmicDynamicPagePageSection__OverridesType;
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

  return (
    <Stack__
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
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
      <DataFetcher
        data-plasmic-name={"httpRestApiFetcher"}
        data-plasmic-override={overrides.httpRestApiFetcher}
        className={classNames("__wab_instance", sty.httpRestApiFetcher)}
        dataName={"fetchedData"}
        errorDisplay={
          <DataCtxReader__>{$ctx => "Error fetching data"}</DataCtxReader__>
        }
        errorName={"fetchError"}
        headers={{
          "Content-Type": "application/json",
          Accept: "application/json"
        }}
        loadingDisplay={
          <DataCtxReader__>{$ctx => "Loading..."}</DataCtxReader__>
        }
        method={"GET"}
        noLayout={false}
        url={(() => {
          try {
            return $props.dataSourceUrl;
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
            <Stack__
              as={"div"}
              data-plasmic-name={"freeBox"}
              data-plasmic-override={overrides.freeBox}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox)}
            >
              <div
                data-plasmic-name={"text"}
                data-plasmic-override={overrides.text}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text
                )}
              >
                <React.Fragment>
                  {(() => {
                    try {
                      return $ctx.fetchedData.booking_selection_page_ui_by_pk
                        .data.screen_title;
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return "\u0628\u06cc\u0645\u0627\u0631\u0633\u062a\u0627\u0646 \u06af\u0648\u062f\u0631\u0632";
                      }
                      throw e;
                    }
                  })()}
                </React.Fragment>
              </div>
              <DynamicPageCardList
                data-plasmic-name={"dynamicPageCardList"}
                data-plasmic-override={overrides.dynamicPageCardList}
                cards={(() => {
                  try {
                    return $ctx.fetchedData.booking_selection_page_ui_by_pk.data
                      .cards;
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
                className={classNames(
                  "__wab_instance",
                  sty.dynamicPageCardList
                )}
              />
            </Stack__>
          )}
        </DataCtxReader__>
      </DataFetcher>
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "httpRestApiFetcher",
    "freeBox",
    "text",
    "dynamicPageCardList"
  ],
  httpRestApiFetcher: [
    "httpRestApiFetcher",
    "freeBox",
    "text",
    "dynamicPageCardList"
  ],
  freeBox: ["freeBox", "text", "dynamicPageCardList"],
  text: ["text"],
  dynamicPageCardList: ["dynamicPageCardList"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  httpRestApiFetcher: typeof DataFetcher;
  freeBox: "div";
  text: "div";
  dynamicPageCardList: typeof DynamicPageCardList;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicDynamicPagePageSection__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicDynamicPagePageSection__VariantsArgs;
    args?: PlasmicDynamicPagePageSection__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicDynamicPagePageSection__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicDynamicPagePageSection__ArgsType,
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
          internalArgPropNames: PlasmicDynamicPagePageSection__ArgProps,
          internalVariantPropNames: PlasmicDynamicPagePageSection__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicDynamicPagePageSection__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicDynamicPagePageSection";
  } else {
    func.displayName = `PlasmicDynamicPagePageSection.${nodeName}`;
  }
  return func;
}

export const PlasmicDynamicPagePageSection = Object.assign(
  // Top-level PlasmicDynamicPagePageSection renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    httpRestApiFetcher: makeNodeComponent("httpRestApiFetcher"),
    freeBox: makeNodeComponent("freeBox"),
    text: makeNodeComponent("text"),
    dynamicPageCardList: makeNodeComponent("dynamicPageCardList"),

    // Metadata about props expected for PlasmicDynamicPagePageSection
    internalVariantProps: PlasmicDynamicPagePageSection__VariantProps,
    internalArgProps: PlasmicDynamicPagePageSection__ArgProps
  }
);

export default PlasmicDynamicPagePageSection;
/* prettier-ignore-end */
