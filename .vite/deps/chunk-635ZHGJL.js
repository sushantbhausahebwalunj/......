import {
  __esm
} from "./chunk-W4VDMLRG.js";

// node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var init_objectWithoutPropertiesLoose = __esm({
  "node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"() {
  }
});

// node_modules/clsx/dist/clsx.mjs
function r(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e)
    n += e;
  else if ("object" == typeof e)
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    } else
      for (f in e)
        e[f] && (n && (n += " "), n += f);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++)
    (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}
var clsx_default;
var init_clsx = __esm({
  "node_modules/clsx/dist/clsx.mjs"() {
    clsx_default = clsx;
  }
});

export {
  _objectWithoutPropertiesLoose,
  init_objectWithoutPropertiesLoose,
  clsx_default,
  init_clsx
};
//# sourceMappingURL=chunk-635ZHGJL.js.map
