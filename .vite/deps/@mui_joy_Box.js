"use client";
import {
  defaultTheme_default,
  identifier_default
} from "./chunk-OIOV6HVD.js";
import {
  createBox,
  init_esm as init_esm2
} from "./chunk-LFDIQURU.js";
import "./chunk-635ZHGJL.js";
import {
  ClassNameGenerator_default,
  generateUtilityClasses,
  init_esm,
  require_prop_types
} from "./chunk-WJCHMYNN.js";
import {
  __toESM
} from "./chunk-W4VDMLRG.js";

// node_modules/@mui/joy/Box/Box.js
init_esm2();
var import_prop_types = __toESM(require_prop_types());

// node_modules/@mui/joy/Box/boxClasses.js
init_esm();
var boxClasses = generateUtilityClasses("MuiBox", ["root"]);
var boxClasses_default = boxClasses;

// node_modules/@mui/joy/Box/Box.js
var Box = createBox({
  themeId: identifier_default,
  defaultTheme: defaultTheme_default,
  defaultClassName: boxClasses_default.root,
  generateClassName: ClassNameGenerator_default.generate
});
true ? Box.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: import_prop_types.default.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types.default.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object])
} : void 0;
var Box_default = Box;
export {
  boxClasses_default as boxClasses,
  Box_default as default
};
//# sourceMappingURL=@mui_joy_Box.js.map
