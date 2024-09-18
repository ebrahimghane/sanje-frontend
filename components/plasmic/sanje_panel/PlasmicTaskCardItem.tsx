// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: aU6fPsMDSmKqgHWpAbdgs
// Component: HREvsQHdw0h_

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

import { AntdAccordion } from "@plasmicpkgs/antd5/skinny/registerCollapse";
import { accordionHelpers as AntdAccordion_Helpers } from "@plasmicpkgs/antd5/skinny/registerCollapse";
import { AntdAccordionItem } from "@plasmicpkgs/antd5/skinny/registerCollapse";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_fragment_design_system_css from "../fragment_design_system/plasmic.module.css"; // plasmic-import: h9Dbk9ygddw7UVEq1NNhKi/projectcss
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: aU6fPsMDSmKqgHWpAbdgs/projectcss
import sty from "./PlasmicTaskCardItem.module.css"; // plasmic-import: HREvsQHdw0h_/css

createPlasmicElementProxy;

export type PlasmicTaskCardItem__VariantMembers = {};
export type PlasmicTaskCardItem__VariantsArgs = {};
type VariantPropType = keyof PlasmicTaskCardItem__VariantsArgs;
export const PlasmicTaskCardItem__VariantProps = new Array<VariantPropType>();

export type PlasmicTaskCardItem__ArgsType = {
  type?: string;
  icon?: string;
  title?: string;
  subtitle?: string;
  description?: string;
};
type ArgPropType = keyof PlasmicTaskCardItem__ArgsType;
export const PlasmicTaskCardItem__ArgProps = new Array<ArgPropType>(
  "type",
  "icon",
  "title",
  "subtitle",
  "description"
);

export type PlasmicTaskCardItem__OverridesType = {
  root?: Flex__<"div">;
  accordion?: Flex__<typeof AntdAccordion>;
  freeBox?: Flex__<"div">;
};

export interface DefaultTaskCardItemProps {
  type?: string;
  icon?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicTaskCardItem__RenderFunc(props: {
  variants: PlasmicTaskCardItem__VariantsArgs;
  args: PlasmicTaskCardItem__ArgsType;
  overrides: PlasmicTaskCardItem__OverridesType;
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

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "accordion.activePanelId",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: generateOnMutateForSpec(
          "activePanelId",
          AntdAccordion_Helpers
        )
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
      dir={"rtl"}
    >
      {(() => {
        const child$Props = {
          activeKey: generateStateValueProp($state, [
            "accordion",
            "activePanelId"
          ]),
          bordered: true,
          className: classNames("__wab_instance", sty.accordion),
          expandIconPosition: "end",
          ghost: false,
          items: (
            <React.Fragment>
              <AntdAccordionItem
                className={classNames(
                  "__wab_instance",
                  sty.accordionItem__qOxjb
                )}
                headerClass={classNames({ [sty["pcls_lnTIMVltcJCy"]]: true })}
                id={1}
                label2={
                  <div
                    data-plasmic-name={"freeBox"}
                    data-plasmic-override={overrides.freeBox}
                    className={classNames(projectcss.all, sty.freeBox)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__ySjrf
                      )}
                    >
                      <React.Fragment>
                        {(() => {
                          try {
                            return $props.icon;
                          } catch (e) {
                            if (
                              e instanceof TypeError ||
                              e?.plasmicType === "PlasmicUndefinedDataError"
                            ) {
                              return "First Item";
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
                        sty.text__fp4C
                      )}
                    >
                      <React.Fragment>
                        {(() => {
                          try {
                            return $props.title;
                          } catch (e) {
                            if (
                              e instanceof TypeError ||
                              e?.plasmicType === "PlasmicUndefinedDataError"
                            ) {
                              return "First Item";
                            }
                            throw e;
                          }
                        })()}
                      </React.Fragment>
                    </div>
                  </div>
                }
                showArrow={true}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__rtMIa
                  )}
                >
                  <div
                    className={projectcss.__wab_expr_html_text}
                    dangerouslySetInnerHTML={{
                      __html: (() => {
                        try {
                          return $props.subtitle;
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return "First Children";
                          }
                          throw e;
                        }
                      })()
                    }}
                  />
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__vcXyb
                  )}
                >
                  <div
                    className={projectcss.__wab_expr_html_text}
                    dangerouslySetInnerHTML={{
                      __html: (() => {
                        try {
                          return $props.description;
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return "First Children";
                          }
                          throw e;
                        }
                      })()
                    }}
                  />
                </div>
              </AntdAccordionItem>
              <AntdAccordionItem
                className={classNames(
                  "__wab_instance",
                  sty.accordionItem__vhnw8
                )}
                id={2}
                label2={
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__hpka
                    )}
                  >
                    {"Second Item"}
                  </div>
                }
                showArrow={true}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__peaMn
                  )}
                >
                  {"Second Children"}
                </div>
              </AntdAccordionItem>
            </React.Fragment>
          ),
          onChange: generateStateOnChangePropForCodeComponents(
            $state,
            "activePanelId",
            ["accordion", "activePanelId"],
            AntdAccordion_Helpers
          ),
          size: "middle"
        };
        initializeCodeComponentStates(
          $state,
          [
            {
              name: "activePanelId",
              plasmicStateName: "accordion.activePanelId"
            }
          ],
          [],
          AntdAccordion_Helpers ?? {},
          child$Props
        );

        return (
          <AntdAccordion
            data-plasmic-name={"accordion"}
            data-plasmic-override={overrides.accordion}
            {...child$Props}
          />
        );
      })()}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "accordion", "freeBox"],
  accordion: ["accordion", "freeBox"],
  freeBox: ["freeBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  accordion: typeof AntdAccordion;
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTaskCardItem__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTaskCardItem__VariantsArgs;
    args?: PlasmicTaskCardItem__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTaskCardItem__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicTaskCardItem__ArgsType,
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
          internalArgPropNames: PlasmicTaskCardItem__ArgProps,
          internalVariantPropNames: PlasmicTaskCardItem__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicTaskCardItem__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTaskCardItem";
  } else {
    func.displayName = `PlasmicTaskCardItem.${nodeName}`;
  }
  return func;
}

export const PlasmicTaskCardItem = Object.assign(
  // Top-level PlasmicTaskCardItem renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    accordion: makeNodeComponent("accordion"),
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicTaskCardItem
    internalVariantProps: PlasmicTaskCardItem__VariantProps,
    internalArgProps: PlasmicTaskCardItem__ArgProps
  }
);

export default PlasmicTaskCardItem;
/* prettier-ignore-end */
