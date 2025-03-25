// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: aU6fPsMDSmKqgHWpAbdgs
// Component: 0UcJTMqEEn6u

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

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_fragment_design_system_css from "../fragment_design_system/plasmic.module.css"; // plasmic-import: h9Dbk9ygddw7UVEq1NNhKi/projectcss
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: aU6fPsMDSmKqgHWpAbdgs/projectcss
import sty from "./PlasmicDynamicPageCardItem.module.css"; // plasmic-import: 0UcJTMqEEn6u/css

import ChevronLeftIcon from "../fragment_icons/icons/PlasmicIcon__ChevronLeft"; // plasmic-import: r9Upp9NbiZkf/icon

createPlasmicElementProxy;

export type PlasmicDynamicPageCardItem__VariantMembers = {
  noTitle: "noTitle";
};
export type PlasmicDynamicPageCardItem__VariantsArgs = {
  noTitle?: SingleBooleanChoiceArg<"noTitle">;
};
type VariantPropType = keyof PlasmicDynamicPageCardItem__VariantsArgs;
export const PlasmicDynamicPageCardItem__VariantProps =
  new Array<VariantPropType>("noTitle");

export type PlasmicDynamicPageCardItem__ArgsType = {
  children?: React.ReactNode;
  caption?: string;
  title?: string;
  subtitle?: string;
  iconUrl?: string;
  overlayText?: string;
  navigateLink?: string;
};
type ArgPropType = keyof PlasmicDynamicPageCardItem__ArgsType;
export const PlasmicDynamicPageCardItem__ArgProps = new Array<ArgPropType>(
  "children",
  "caption",
  "title",
  "subtitle",
  "iconUrl",
  "overlayText",
  "navigateLink"
);

export type PlasmicDynamicPageCardItem__OverridesType = {
  root?: Flex__<"div">;
  captionText?: Flex__<"div">;
  svg?: Flex__<"svg">;
  header?: Flex__<"a"> & Partial<LinkProps>;
  img?: Flex__<typeof PlasmicImg__>;
  subtitleText?: Flex__<"div">;
  body?: Flex__<"div">;
};

export interface DefaultDynamicPageCardItemProps {
  children?: React.ReactNode;
  caption?: string;
  title?: string;
  subtitle?: string;
  iconUrl?: string;
  overlayText?: string;
  navigateLink?: string;
  noTitle?: SingleBooleanChoiceArg<"noTitle">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicDynamicPageCardItem__RenderFunc(props: {
  variants: PlasmicDynamicPageCardItem__VariantsArgs;
  args: PlasmicDynamicPageCardItem__ArgsType;
  overrides: PlasmicDynamicPageCardItem__OverridesType;
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
        path: "noTitle",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.noTitle
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
    >
      {(() => {
        try {
          return !!$props.overlayText;
        } catch (e) {
          if (
            e instanceof TypeError ||
            e?.plasmicType === "PlasmicUndefinedDataError"
          ) {
            return false;
          }
          throw e;
        }
      })() ? (
        <div className={classNames(projectcss.all, sty.freeBox__cTcaN)}>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__cSagy
            )}
          >
            <React.Fragment>
              {(() => {
                try {
                  return $props.overlayText;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return " ";
                  }
                  throw e;
                }
              })()}
            </React.Fragment>
          </div>
        </div>
      ) : null}
      <div className={classNames(projectcss.all, sty.freeBox__yYon2)}>
        <div
          data-plasmic-name={"captionText"}
          data-plasmic-override={overrides.captionText}
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.captionText
          )}
        >
          <React.Fragment>
            {(() => {
              try {
                return $props.caption;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return " ";
                }
                throw e;
              }
            })()}
          </React.Fragment>
        </div>
        <ChevronLeftIcon
          data-plasmic-name={"svg"}
          data-plasmic-override={overrides.svg}
          className={classNames(projectcss.all, sty.svg)}
          role={"img"}
        />
      </div>
      <Stack__
        as={PlasmicLink__}
        data-plasmic-name={"header"}
        data-plasmic-override={overrides.header}
        hasGap={true}
        className={classNames(projectcss.all, projectcss.a, sty.header, {
          [sty.headernoTitle]: hasVariant($state, "noTitle", "noTitle")
        })}
        component={Link}
        href={(() => {
          try {
            return $props.navigateLink;
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
        platform={"nextjs"}
      >
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__wHmgr)}
        >
          <PlasmicImg__
            data-plasmic-name={"img"}
            data-plasmic-override={overrides.img}
            alt={""}
            className={classNames(sty.img)}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"100%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"auto"}
            height={"25"}
            loading={"lazy"}
            src={(() => {
              try {
                return $props.iconUrl;
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
            width={"25"}
          />

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__lxd3T
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
                    return " ";
                  }
                  throw e;
                }
              })()}
            </React.Fragment>
          </div>
        </Stack__>
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__sWitC)}
        >
          <div
            data-plasmic-name={"subtitleText"}
            data-plasmic-override={overrides.subtitleText}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.subtitleText
            )}
          >
            <React.Fragment>
              {(() => {
                try {
                  return $props.subtitle;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return " ";
                  }
                  throw e;
                }
              })()}
            </React.Fragment>
          </div>
        </Stack__>
      </Stack__>
      <div
        data-plasmic-name={"body"}
        data-plasmic-override={overrides.body}
        className={classNames(projectcss.all, sty.body, {
          [sty.bodynoTitle]: hasVariant($state, "noTitle", "noTitle")
        })}
      >
        {renderPlasmicSlot({
          defaultContents: (
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__zOyUr
              )}
            >
              {""}
            </div>
          ),
          value: args.children
        })}
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "captionText", "svg", "header", "img", "subtitleText", "body"],
  captionText: ["captionText"],
  svg: ["svg"],
  header: ["header", "img", "subtitleText"],
  img: ["img"],
  subtitleText: ["subtitleText"],
  body: ["body"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  captionText: "div";
  svg: "svg";
  header: "a";
  img: typeof PlasmicImg__;
  subtitleText: "div";
  body: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicDynamicPageCardItem__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicDynamicPageCardItem__VariantsArgs;
    args?: PlasmicDynamicPageCardItem__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicDynamicPageCardItem__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicDynamicPageCardItem__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicDynamicPageCardItem__ArgProps,
          internalVariantPropNames: PlasmicDynamicPageCardItem__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicDynamicPageCardItem__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicDynamicPageCardItem";
  } else {
    func.displayName = `PlasmicDynamicPageCardItem.${nodeName}`;
  }
  return func;
}

export const PlasmicDynamicPageCardItem = Object.assign(
  // Top-level PlasmicDynamicPageCardItem renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    captionText: makeNodeComponent("captionText"),
    svg: makeNodeComponent("svg"),
    header: makeNodeComponent("header"),
    img: makeNodeComponent("img"),
    subtitleText: makeNodeComponent("subtitleText"),
    body: makeNodeComponent("body"),

    // Metadata about props expected for PlasmicDynamicPageCardItem
    internalVariantProps: PlasmicDynamicPageCardItem__VariantProps,
    internalArgProps: PlasmicDynamicPageCardItem__ArgProps
  }
);

export default PlasmicDynamicPageCardItem;
/* prettier-ignore-end */
