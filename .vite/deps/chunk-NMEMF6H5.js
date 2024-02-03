import {
  defaultTheme_default,
  identifier_default
} from "./chunk-OIOV6HVD.js";
import {
  appendOwnerState,
  mergeSlotProps,
  resolveComponentProps
} from "./chunk-MYMQ7GMB.js";
import {
  createCssVarsProvider,
  createStyled,
  init_esm as init_esm2,
  useThemeProps
} from "./chunk-LFDIQURU.js";
import {
  _objectWithoutPropertiesLoose,
  init_objectWithoutPropertiesLoose
} from "./chunk-635ZHGJL.js";
import {
  _extends,
  init_esm,
  init_extends,
  require_jsx_runtime,
  useForkRef
} from "./chunk-WJCHMYNN.js";
import {
  __toESM,
  require_react
} from "./chunk-W4VDMLRG.js";

// node_modules/@mui/joy/styles/styled.js
init_esm2();
var styled = createStyled({
  defaultTheme: defaultTheme_default,
  themeId: identifier_default
});
var styled_default = styled;

// node_modules/@mui/joy/styles/useThemeProps.js
init_extends();
init_esm2();
function useThemeProps2({
  props,
  name
}) {
  return useThemeProps({
    props,
    name,
    defaultTheme: _extends({}, defaultTheme_default, {
      components: {}
    }),
    themeId: identifier_default
  });
}

// node_modules/@mui/joy/styles/CssVarsProvider.js
init_esm2();
var {
  CssVarsProvider,
  useColorScheme,
  getInitColorSchemeScript
} = createCssVarsProvider({
  themeId: identifier_default,
  theme: defaultTheme_default,
  attribute: "data-joy-color-scheme",
  modeStorageKey: "joy-mode",
  colorSchemeStorageKey: "joy-color-scheme",
  defaultColorScheme: {
    light: "light",
    dark: "dark"
  }
});

// node_modules/@mui/joy/styles/ThemeProvider.js
var React = __toESM(require_react());
init_esm2();
var import_jsx_runtime = __toESM(require_jsx_runtime());

// node_modules/@mui/joy/styles/StyledEngineProvider.js
init_esm2();

// node_modules/@mui/joy/utils/useSlot.js
init_extends();
init_objectWithoutPropertiesLoose();
init_esm();
var _excluded = ["className", "elementType", "ownerState", "externalForwardedProps", "getSlotOwnerState", "internalForwardedProps"];
var _excluded2 = ["component", "slots", "slotProps"];
var _excluded3 = ["component"];
function useSlot(name, parameters) {
  const {
    className,
    elementType: initialElementType,
    ownerState,
    externalForwardedProps,
    getSlotOwnerState,
    internalForwardedProps
  } = parameters, useSlotPropsParams = _objectWithoutPropertiesLoose(parameters, _excluded);
  const {
    component: rootComponent,
    slots = {
      [name]: void 0
    },
    slotProps = {
      [name]: void 0
    }
  } = externalForwardedProps, other = _objectWithoutPropertiesLoose(externalForwardedProps, _excluded2);
  const elementType = slots[name] || initialElementType;
  const resolvedComponentsProps = resolveComponentProps(slotProps[name], ownerState);
  const _mergeSlotProps = mergeSlotProps(_extends({
    className
  }, useSlotPropsParams, {
    externalForwardedProps: name === "root" ? other : void 0,
    externalSlotProps: resolvedComponentsProps
  })), {
    props: {
      component: slotComponent
    },
    internalRef
  } = _mergeSlotProps, mergedProps = _objectWithoutPropertiesLoose(_mergeSlotProps.props, _excluded3);
  const ref = useForkRef(internalRef, resolvedComponentsProps == null ? void 0 : resolvedComponentsProps.ref, parameters.ref);
  const slotOwnerState = getSlotOwnerState ? getSlotOwnerState(mergedProps) : {};
  const finalOwnerState = _extends({}, ownerState, slotOwnerState);
  const LeafComponent = name === "root" ? slotComponent || rootComponent : slotComponent;
  const props = appendOwnerState(elementType, _extends({}, name === "root" && !rootComponent && !slots[name] && internalForwardedProps, name !== "root" && !slots[name] && internalForwardedProps, mergedProps, LeafComponent && {
    as: LeafComponent
  }, {
    ref
  }), finalOwnerState);
  Object.keys(slotOwnerState).forEach((propName) => {
    delete props[propName];
  });
  return [elementType, props];
}

export {
  styled_default,
  useThemeProps2 as useThemeProps,
  useSlot
};
//# sourceMappingURL=chunk-NMEMF6H5.js.map
