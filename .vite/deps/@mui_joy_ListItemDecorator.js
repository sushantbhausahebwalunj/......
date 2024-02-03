"use client";
import {
  ListItemButtonOrientationContext_default
} from "./chunk-7RQT4CSX.js";
import {
  styled_default,
  useSlot,
  useThemeProps
} from "./chunk-NMEMF6H5.js";
import {
  generateUtilityClass,
  generateUtilityClasses
} from "./chunk-OIOV6HVD.js";
import "./chunk-MYMQ7GMB.js";
import {
  init_composeClasses
} from "./chunk-V72CMWSM.js";
import "./chunk-LFDIQURU.js";
import {
  _objectWithoutPropertiesLoose,
  clsx_default,
  init_clsx,
  init_objectWithoutPropertiesLoose
} from "./chunk-635ZHGJL.js";
import {
  _extends,
  composeClasses,
  init_extends,
  require_jsx_runtime,
  require_prop_types
} from "./chunk-WJCHMYNN.js";
import {
  __toESM,
  require_react
} from "./chunk-W4VDMLRG.js";

// node_modules/@mui/joy/ListItemDecorator/ListItemDecorator.js
init_objectWithoutPropertiesLoose();
init_extends();
var React = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
init_clsx();
init_composeClasses();

// node_modules/@mui/joy/ListItemDecorator/listItemDecoratorClasses.js
function getListItemDecoratorUtilityClass(slot) {
  return generateUtilityClass("MuiListItemDecorator", slot);
}
var listItemDecoratorClasses = generateUtilityClasses("MuiListItemDecorator", ["root"]);
var listItemDecoratorClasses_default = listItemDecoratorClasses;

// node_modules/@mui/joy/ListItemDecorator/ListItemDecorator.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var _excluded = ["component", "className", "children", "slots", "slotProps"];
var useUtilityClasses = () => {
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getListItemDecoratorUtilityClass, {});
};
var ListItemDecoratorRoot = styled_default("span", {
  name: "JoyListItemDecorator",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  ownerState
}) => _extends({
  boxSizing: "border-box",
  display: "inline-flex",
  alignItems: `var(--unstable_ListItemDecorator-alignItems, ${ownerState.parentOrientation === "horizontal" ? "center" : "initial"})`
}, ownerState.parentOrientation === "horizontal" ? {
  minInlineSize: "var(--ListItemDecorator-size)",
  marginInlineEnd: "calc(-1 * var(--ListItem-gap))"
} : {
  minBlockSize: "var(--ListItemDecorator-size)",
  justifyContent: "center",
  marginBlockEnd: "calc(-1 * var(--ListItem-gap))"
}));
var ListItemDecorator = React.forwardRef(function ListItemDecorator2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "JoyListItemDecorator"
  });
  const {
    component,
    className,
    children,
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const parentOrientation = React.useContext(ListItemButtonOrientationContext_default);
  const ownerState = _extends({
    parentOrientation
  }, props);
  const classes = useUtilityClasses();
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps
  });
  const [SlotRoot, rootProps] = useSlot("root", {
    ref,
    className: clsx_default(classes.root, className),
    elementType: ListItemDecoratorRoot,
    externalForwardedProps,
    ownerState
  });
  return (0, import_jsx_runtime.jsx)(SlotRoot, _extends({}, rootProps, {
    children
  }));
});
true ? ListItemDecorator.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: import_prop_types.default.node,
  /**
   * @ignore
   */
  className: import_prop_types.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types.default.elementType,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types.default.shape({
    root: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types.default.shape({
    root: import_prop_types.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object])
} : void 0;
var ListItemDecorator_default = ListItemDecorator;
export {
  ListItemDecorator_default as default,
  getListItemDecoratorUtilityClass,
  listItemDecoratorClasses_default as listItemDecoratorClasses
};
//# sourceMappingURL=@mui_joy_ListItemDecorator.js.map
