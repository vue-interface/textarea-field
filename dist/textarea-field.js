import { defineComponent as A, inject as Gt, toRaw as _t, openBlock as a, createElementBlock as u, normalizeClass as M, normalizeStyle as qt, createElementVNode as V, createBlock as bt, resolveDynamicComponent as Yt, toDisplayString as H, createCommentVNode as y, resolveComponent as Jt, resolveDirective as _, renderSlot as p, withDirectives as Kt, mergeProps as Qt, vModelText as Xt, createVNode as te, Transition as ee, withCtx as re } from "vue";
var ne = Object.defineProperty, ie = (t, e, r) => e in t ? ne(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, oe = (t, e, r) => (ie(t, typeof e != "symbol" ? e + "" : e, r), r), k = function() {
  return k = Object.assign || function(t) {
    for (var e, r = 1, n = arguments.length; r < n; r++) {
      e = arguments[r];
      for (var i in e)
        Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
    }
    return t;
  }, k.apply(this, arguments);
};
function se(t) {
  return t.toLowerCase();
}
var ae = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g], le = /[^A-Z0-9]+/gi;
function ue(t, e) {
  e === void 0 && (e = {});
  for (var r = e.splitRegexp, n = r === void 0 ? ae : r, i = e.stripRegexp, s = i === void 0 ? le : i, f = e.transform, T = f === void 0 ? se : f, E = e.delimiter, j = E === void 0 ? " " : E, w = q(q(t, n, "$1\0$2"), s, "\0"), B = 0, N = w.length; w.charAt(B) === "\0"; )
    B++;
  for (; w.charAt(N - 1) === "\0"; )
    N--;
  return w.slice(B, N).split("\0").map(T).join(j);
}
function q(t, e, r) {
  return e instanceof RegExp ? t.replace(e, r) : e.reduce(function(n, i) {
    return n.replace(i, r);
  }, t);
}
function ce(t, e) {
  return e === void 0 && (e = {}), ue(t, k({ delimiter: "." }, e));
}
function O(t, e) {
  return e === void 0 && (e = {}), ce(t, k({ delimiter: "-" }, e));
}
let de = class {
  constructor(e = {}) {
    oe(this, "components"), this.components = /* @__PURE__ */ new Map(), Object.entries(e).forEach(([r, n]) => {
      this.register(r, n);
    });
  }
  get(e) {
    const r = this.components.get(
      e = O(e)
    );
    if (r)
      return r;
    throw new Error(`"${e}" has not been registered yet!`);
  }
  register(e, r) {
    return typeof e == "object" ? (Object.entries(e).forEach(([n, i]) => {
      this.register(O(n), i);
    }), this) : (this.components.set(O(e), r), this);
  }
  remove(e) {
    return this.components.delete(O(e)), this;
  }
  reset() {
    return this.components = /* @__PURE__ */ new Map(), this;
  }
};
function he(t = {}) {
  return new de(t);
}
const fe = he();
function v(t, e = "px") {
  return t != null && t !== !1 && isFinite(t) ? `${t}${e}` : t;
}
const pe = A({
  props: {
    absolute: Boolean,
    center: Boolean,
    label: {
      type: String,
      default: void 0
    },
    size: {
      type: String,
      default: "md"
    },
    registry: {
      type: String,
      default: "indicators"
    },
    type: {
      type: [Object, String],
      required: !0
    },
    height: {
      type: [String, Number],
      default: void 0
    },
    maxHeight: {
      type: [String, Number],
      default: void 0
    },
    minHeight: {
      type: [String, Number],
      default: void 0
    },
    width: {
      type: [String, Number],
      default: void 0
    },
    maxWidth: {
      type: [String, Number],
      default: void 0
    },
    minWidth: {
      type: [String, Number],
      default: void 0
    }
  },
  data: () => ({
    is: null
  }),
  computed: {
    classes() {
      return {
        "activity-indicator-center": this.center,
        "activity-indicator-absolute": this.absolute,
        [this.size && `activity-indicator-${this.size}`]: !!this.size
      };
    },
    style() {
      return {
        width: v(this.width),
        maxWidth: v(this.maxWidth),
        minWidth: v(this.minWidth),
        height: v(this.height),
        maxHeight: v(this.maxHeight),
        minHeight: v(this.minHeight)
      };
    }
  },
  // async mounted() {
  //     const component = await this.component();
  //     this.is = () => component;
  // },
  methods: {
    componentFromRegistry(t) {
      var e;
      try {
        return (e = Gt(this.registry || "indicators", fe)) == null ? void 0 : e.get(t);
      } catch {
      }
    },
    component() {
      return typeof this.type == "string" ? this.componentFromRegistry(this.type) : _t(this.type);
    }
  }
}), ve = (t, e) => {
  const r = t.__vccOpts || t;
  for (const [n, i] of e)
    r[n] = i;
  return r;
}, ye = { class: "activity-indicator-content" }, be = {
  key: 0,
  class: "activity-indicator-label"
};
function me(t, e, r, n, i, s) {
  return a(), u("div", {
    class: M(["activity-indicator", t.classes]),
    style: qt(t.style)
  }, [
    V("div", ye, [
      (a(), bt(Yt(t.component()), { class: "mx-auto" })),
      t.label ? (a(), u("div", be, H(t.label), 1)) : y("", !0)
    ])
  ], 6);
}
const ge = /* @__PURE__ */ ve(pe, [["render", me]]), je = [
  "font",
  "fontFamily",
  "fontKerning",
  "fontSize",
  "fontStretch",
  "fontStyle",
  "fontVariant",
  "fontVariantLigatures",
  "fontVariantCaps",
  "fontVariantNumeric",
  "fontVariantEastAsian",
  "fontWeight",
  "lineHeight",
  "letterSpacing",
  "padding",
  "margin",
  "textAlign",
  "textAlignLast",
  "textDecoration",
  "textDecorationLine",
  "textDecorationStyle",
  "textDecorationColor",
  "textDecorationSkipInk",
  "textDecorationPosition",
  "textIndent",
  "textRendering",
  "textShadow",
  "textSizeAdjust",
  "textOverflow",
  "textTransform",
  "width",
  "wordBreak",
  "wordSpacing",
  "wordWrap"
];
function Se(t) {
  const e = document.createElement("textarea");
  return e.textContent = t, e.innerHTML;
}
function mt(t) {
  return typeof t == "number" ? t : !t || !t.replace ? 0 : parseInt(t.replace(/[^\d.]+/g, "")) || 0;
}
function Y(t, e, r, n) {
  t.innerHTML = Se(e.value).replace(/(?:\r\n|\r|\n)/g, "<br />") + "&nbsp;";
  let i = Math.max(r, gt(t));
  t.innerHTML.match(/(<br\s?\/?\>)+/) && (i += mt(jt(e, "lineHeight"))), e.style.height = (!n || i < n ? i : n) + "px";
}
function gt(t) {
  return mt(jt(t, "height"));
}
function jt(t, e) {
  return window.getComputedStyle(t)[e];
}
function xe(t, e) {
  const r = document.createElement("div"), n = window.getComputedStyle(t);
  return r.style.position = "absolute", r.style.zIndex = -1, r.style.visibility = "hidden", t.parentNode.insertBefore(r, t.nextSibling), je.forEach((i) => r.style[i] = n[i]), r;
}
function Ce(t, e, r) {
  const n = gt(t), i = xe(t), s = e.value !== !0 ? e.value : 0;
  t.addEventListener("input", (f) => {
    Y(i, f.target, n, s);
  }), Y(i, t, n, s);
}
const Ae = {
  mounted(t, e, r) {
    e.value !== !1 && (Ce(t, e), t.resize = function() {
      r.context.$nextTick(() => {
        t.dispatchEvent(new Event("input"));
      });
    });
  }
}, S = {};
function l(...t) {
  if (!t.length)
    return S;
  const [e, r] = t;
  return typeof e == "string" ? typeof S[e] < "u" ? S[e] : r : Array.isArray(e) ? e.reduce((n, i) => Object.assign(n, {
    //@ts-ignore
    [i]: S[i]
  }), {}) : Object.assign(S, ...t);
}
const St = A({
  props: {
    dropShadow: {
      type: [Boolean, String],
      default: void 0
    },
    dropShadowableClassPrefix: {
      type: String,
      default: "drop-shadow"
    },
    shadow: {
      type: [Boolean, String],
      default: void 0
    },
    shadowableClassPrefix: {
      type: String,
      default: "shadow"
    }
  },
  computed: {
    shadowableClass() {
      const t = this.dropShadow === !0 ? "" : this.dropShadow && `-${this.dropShadow}`, e = this.shadow === !0 ? "" : this.shadow && `-${this.shadow}`;
      return {
        [`${this.dropShadowableClassPrefix}${t}`]: !!this.dropShadow,
        [`${this.shadowableClassPrefix}${e}`]: !!this.shadow
      };
    }
  }
});
var $e = typeof global == "object" && global && global.Object === Object && global;
const xt = $e;
var Ee = typeof self == "object" && self && self.Object === Object && self, we = xt || Ee || Function("return this")();
const c = we;
var Oe = c.Symbol;
const m = Oe;
var Ct = Object.prototype, ke = Ct.hasOwnProperty, Fe = Ct.toString, x = m ? m.toStringTag : void 0;
function ze(t) {
  var e = ke.call(t, x), r = t[x];
  try {
    t[x] = void 0;
    var n = !0;
  } catch {
  }
  var i = Fe.call(t);
  return n && (e ? t[x] = r : delete t[x]), i;
}
var Te = Object.prototype, Be = Te.toString;
function Ne(t) {
  return Be.call(t);
}
var Ie = "[object Null]", Le = "[object Undefined]", J = m ? m.toStringTag : void 0;
function g(t) {
  return t == null ? t === void 0 ? Le : Ie : J && J in Object(t) ? ze(t) : Ne(t);
}
function F(t) {
  return t != null && typeof t == "object";
}
var De = "[object Symbol]";
function Me(t) {
  return typeof t == "symbol" || F(t) && g(t) == De;
}
function Ve(t, e) {
  for (var r = -1, n = t == null ? 0 : t.length, i = Array(n); ++r < n; )
    i[r] = e(t[r], r, t);
  return i;
}
var He = Array.isArray;
const At = He;
var Re = 1 / 0, K = m ? m.prototype : void 0, Q = K ? K.toString : void 0;
function $t(t) {
  if (typeof t == "string")
    return t;
  if (At(t))
    return Ve(t, $t) + "";
  if (Me(t))
    return Q ? Q.call(t) : "";
  var e = t + "";
  return e == "0" && 1 / t == -Re ? "-0" : e;
}
function G(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var Pe = "[object AsyncFunction]", Ue = "[object Function]", Ze = "[object GeneratorFunction]", We = "[object Proxy]";
function Et(t) {
  if (!G(t))
    return !1;
  var e = g(t);
  return e == Ue || e == Ze || e == Pe || e == We;
}
var Ge = c["__core-js_shared__"];
const I = Ge;
var X = function() {
  var t = /[^.]+$/.exec(I && I.keys && I.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function _e(t) {
  return !!X && X in t;
}
var qe = Function.prototype, Ye = qe.toString;
function h(t) {
  if (t != null) {
    try {
      return Ye.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var Je = /[\\^$.*+?()[\]{}|]/g, Ke = /^\[object .+?Constructor\]$/, Qe = Function.prototype, Xe = Object.prototype, tr = Qe.toString, er = Xe.hasOwnProperty, rr = RegExp(
  "^" + tr.call(er).replace(Je, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function nr(t) {
  if (!G(t) || _e(t))
    return !1;
  var e = Et(t) ? rr : Ke;
  return e.test(h(t));
}
function ir(t, e) {
  return t == null ? void 0 : t[e];
}
function $(t, e) {
  var r = ir(t, e);
  return nr(r) ? r : void 0;
}
var or = $(c, "WeakMap");
const R = or;
var sr = 9007199254740991;
function wt(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= sr;
}
function ar(t) {
  return t != null && wt(t.length) && !Et(t);
}
var lr = Object.prototype;
function Ot(t) {
  var e = t && t.constructor, r = typeof e == "function" && e.prototype || lr;
  return t === r;
}
var ur = "[object Arguments]";
function tt(t) {
  return F(t) && g(t) == ur;
}
var kt = Object.prototype, cr = kt.hasOwnProperty, dr = kt.propertyIsEnumerable, hr = tt(function() {
  return arguments;
}()) ? tt : function(t) {
  return F(t) && cr.call(t, "callee") && !dr.call(t, "callee");
};
const fr = hr;
function pr() {
  return !1;
}
var Ft = typeof exports == "object" && exports && !exports.nodeType && exports, et = Ft && typeof module == "object" && module && !module.nodeType && module, vr = et && et.exports === Ft, rt = vr ? c.Buffer : void 0, yr = rt ? rt.isBuffer : void 0, br = yr || pr;
const mr = br;
var gr = "[object Arguments]", jr = "[object Array]", Sr = "[object Boolean]", xr = "[object Date]", Cr = "[object Error]", Ar = "[object Function]", $r = "[object Map]", Er = "[object Number]", wr = "[object Object]", Or = "[object RegExp]", kr = "[object Set]", Fr = "[object String]", zr = "[object WeakMap]", Tr = "[object ArrayBuffer]", Br = "[object DataView]", Nr = "[object Float32Array]", Ir = "[object Float64Array]", Lr = "[object Int8Array]", Dr = "[object Int16Array]", Mr = "[object Int32Array]", Vr = "[object Uint8Array]", Hr = "[object Uint8ClampedArray]", Rr = "[object Uint16Array]", Pr = "[object Uint32Array]", o = {};
o[Nr] = o[Ir] = o[Lr] = o[Dr] = o[Mr] = o[Vr] = o[Hr] = o[Rr] = o[Pr] = !0;
o[gr] = o[jr] = o[Tr] = o[Sr] = o[Br] = o[xr] = o[Cr] = o[Ar] = o[$r] = o[Er] = o[wr] = o[Or] = o[kr] = o[Fr] = o[zr] = !1;
function Ur(t) {
  return F(t) && wt(t.length) && !!o[g(t)];
}
function Zr(t) {
  return function(e) {
    return t(e);
  };
}
var zt = typeof exports == "object" && exports && !exports.nodeType && exports, C = zt && typeof module == "object" && module && !module.nodeType && module, Wr = C && C.exports === zt, L = Wr && xt.process, Gr = function() {
  try {
    var t = C && C.require && C.require("util").types;
    return t || L && L.binding && L.binding("util");
  } catch {
  }
}();
const nt = Gr;
var it = nt && nt.isTypedArray, _r = it ? Zr(it) : Ur;
const qr = _r;
function Yr(t, e) {
  return function(r) {
    return t(e(r));
  };
}
var Jr = Yr(Object.keys, Object);
const Kr = Jr;
var Qr = Object.prototype, Xr = Qr.hasOwnProperty;
function tn(t) {
  if (!Ot(t))
    return Kr(t);
  var e = [];
  for (var r in Object(t))
    Xr.call(t, r) && r != "constructor" && e.push(r);
  return e;
}
var en = $(c, "Map");
const P = en;
function Tt(t) {
  return t == null ? "" : $t(t);
}
function rn(t, e, r, n) {
  var i = -1, s = t == null ? 0 : t.length;
  for (n && s && (r = t[++i]); ++i < s; )
    r = e(r, t[i], i, t);
  return r;
}
function nn(t) {
  return function(e) {
    return t == null ? void 0 : t[e];
  };
}
var on = {
  // Latin-1 Supplement block.
  À: "A",
  Á: "A",
  Â: "A",
  Ã: "A",
  Ä: "A",
  Å: "A",
  à: "a",
  á: "a",
  â: "a",
  ã: "a",
  ä: "a",
  å: "a",
  Ç: "C",
  ç: "c",
  Ð: "D",
  ð: "d",
  È: "E",
  É: "E",
  Ê: "E",
  Ë: "E",
  è: "e",
  é: "e",
  ê: "e",
  ë: "e",
  Ì: "I",
  Í: "I",
  Î: "I",
  Ï: "I",
  ì: "i",
  í: "i",
  î: "i",
  ï: "i",
  Ñ: "N",
  ñ: "n",
  Ò: "O",
  Ó: "O",
  Ô: "O",
  Õ: "O",
  Ö: "O",
  Ø: "O",
  ò: "o",
  ó: "o",
  ô: "o",
  õ: "o",
  ö: "o",
  ø: "o",
  Ù: "U",
  Ú: "U",
  Û: "U",
  Ü: "U",
  ù: "u",
  ú: "u",
  û: "u",
  ü: "u",
  Ý: "Y",
  ý: "y",
  ÿ: "y",
  Æ: "Ae",
  æ: "ae",
  Þ: "Th",
  þ: "th",
  ß: "ss",
  // Latin Extended-A block.
  Ā: "A",
  Ă: "A",
  Ą: "A",
  ā: "a",
  ă: "a",
  ą: "a",
  Ć: "C",
  Ĉ: "C",
  Ċ: "C",
  Č: "C",
  ć: "c",
  ĉ: "c",
  ċ: "c",
  č: "c",
  Ď: "D",
  Đ: "D",
  ď: "d",
  đ: "d",
  Ē: "E",
  Ĕ: "E",
  Ė: "E",
  Ę: "E",
  Ě: "E",
  ē: "e",
  ĕ: "e",
  ė: "e",
  ę: "e",
  ě: "e",
  Ĝ: "G",
  Ğ: "G",
  Ġ: "G",
  Ģ: "G",
  ĝ: "g",
  ğ: "g",
  ġ: "g",
  ģ: "g",
  Ĥ: "H",
  Ħ: "H",
  ĥ: "h",
  ħ: "h",
  Ĩ: "I",
  Ī: "I",
  Ĭ: "I",
  Į: "I",
  İ: "I",
  ĩ: "i",
  ī: "i",
  ĭ: "i",
  į: "i",
  ı: "i",
  Ĵ: "J",
  ĵ: "j",
  Ķ: "K",
  ķ: "k",
  ĸ: "k",
  Ĺ: "L",
  Ļ: "L",
  Ľ: "L",
  Ŀ: "L",
  Ł: "L",
  ĺ: "l",
  ļ: "l",
  ľ: "l",
  ŀ: "l",
  ł: "l",
  Ń: "N",
  Ņ: "N",
  Ň: "N",
  Ŋ: "N",
  ń: "n",
  ņ: "n",
  ň: "n",
  ŋ: "n",
  Ō: "O",
  Ŏ: "O",
  Ő: "O",
  ō: "o",
  ŏ: "o",
  ő: "o",
  Ŕ: "R",
  Ŗ: "R",
  Ř: "R",
  ŕ: "r",
  ŗ: "r",
  ř: "r",
  Ś: "S",
  Ŝ: "S",
  Ş: "S",
  Š: "S",
  ś: "s",
  ŝ: "s",
  ş: "s",
  š: "s",
  Ţ: "T",
  Ť: "T",
  Ŧ: "T",
  ţ: "t",
  ť: "t",
  ŧ: "t",
  Ũ: "U",
  Ū: "U",
  Ŭ: "U",
  Ů: "U",
  Ű: "U",
  Ų: "U",
  ũ: "u",
  ū: "u",
  ŭ: "u",
  ů: "u",
  ű: "u",
  ų: "u",
  Ŵ: "W",
  ŵ: "w",
  Ŷ: "Y",
  ŷ: "y",
  Ÿ: "Y",
  Ź: "Z",
  Ż: "Z",
  Ž: "Z",
  ź: "z",
  ż: "z",
  ž: "z",
  Ĳ: "IJ",
  ĳ: "ij",
  Œ: "Oe",
  œ: "oe",
  ŉ: "'n",
  ſ: "s"
}, sn = nn(on);
const an = sn;
var ln = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, un = "\\u0300-\\u036f", cn = "\\ufe20-\\ufe2f", dn = "\\u20d0-\\u20ff", hn = un + cn + dn, fn = "[" + hn + "]", pn = RegExp(fn, "g");
function vn(t) {
  return t = Tt(t), t && t.replace(ln, an).replace(pn, "");
}
var yn = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function bn(t) {
  return t.match(yn) || [];
}
var mn = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function gn(t) {
  return mn.test(t);
}
var Bt = "\\ud800-\\udfff", jn = "\\u0300-\\u036f", Sn = "\\ufe20-\\ufe2f", xn = "\\u20d0-\\u20ff", Cn = jn + Sn + xn, Nt = "\\u2700-\\u27bf", It = "a-z\\xdf-\\xf6\\xf8-\\xff", An = "\\xac\\xb1\\xd7\\xf7", $n = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", En = "\\u2000-\\u206f", wn = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Lt = "A-Z\\xc0-\\xd6\\xd8-\\xde", On = "\\ufe0e\\ufe0f", Dt = An + $n + En + wn, Mt = "['’]", ot = "[" + Dt + "]", kn = "[" + Cn + "]", Vt = "\\d+", Fn = "[" + Nt + "]", Ht = "[" + It + "]", Rt = "[^" + Bt + Dt + Vt + Nt + It + Lt + "]", zn = "\\ud83c[\\udffb-\\udfff]", Tn = "(?:" + kn + "|" + zn + ")", Bn = "[^" + Bt + "]", Pt = "(?:\\ud83c[\\udde6-\\uddff]){2}", Ut = "[\\ud800-\\udbff][\\udc00-\\udfff]", b = "[" + Lt + "]", Nn = "\\u200d", st = "(?:" + Ht + "|" + Rt + ")", In = "(?:" + b + "|" + Rt + ")", at = "(?:" + Mt + "(?:d|ll|m|re|s|t|ve))?", lt = "(?:" + Mt + "(?:D|LL|M|RE|S|T|VE))?", Zt = Tn + "?", Wt = "[" + On + "]?", Ln = "(?:" + Nn + "(?:" + [Bn, Pt, Ut].join("|") + ")" + Wt + Zt + ")*", Dn = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Mn = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Vn = Wt + Zt + Ln, Hn = "(?:" + [Fn, Pt, Ut].join("|") + ")" + Vn, Rn = RegExp([
  b + "?" + Ht + "+" + at + "(?=" + [ot, b, "$"].join("|") + ")",
  In + "+" + lt + "(?=" + [ot, b + st, "$"].join("|") + ")",
  b + "?" + st + "+" + at,
  b + "+" + lt,
  Mn,
  Dn,
  Vt,
  Hn
].join("|"), "g");
function Pn(t) {
  return t.match(Rn) || [];
}
function Un(t, e, r) {
  return t = Tt(t), e = r ? void 0 : e, e === void 0 ? gn(t) ? Pn(t) : bn(t) : t.match(e) || [];
}
var Zn = "['’]", Wn = RegExp(Zn, "g");
function Gn(t) {
  return function(e) {
    return rn(Un(vn(e).replace(Wn, "")), t, "");
  };
}
var _n = $(c, "DataView");
const U = _n;
var qn = $(c, "Promise");
const Z = qn;
var Yn = $(c, "Set");
const W = Yn;
var ut = "[object Map]", Jn = "[object Object]", ct = "[object Promise]", dt = "[object Set]", ht = "[object WeakMap]", ft = "[object DataView]", Kn = h(U), Qn = h(P), Xn = h(Z), ti = h(W), ei = h(R), d = g;
(U && d(new U(new ArrayBuffer(1))) != ft || P && d(new P()) != ut || Z && d(Z.resolve()) != ct || W && d(new W()) != dt || R && d(new R()) != ht) && (d = function(t) {
  var e = g(t), r = e == Jn ? t.constructor : void 0, n = r ? h(r) : "";
  if (n)
    switch (n) {
      case Kn:
        return ft;
      case Qn:
        return ut;
      case Xn:
        return ct;
      case ti:
        return dt;
      case ei:
        return ht;
    }
  return e;
});
const ri = d;
var ni = "[object Map]", ii = "[object Set]", oi = Object.prototype, si = oi.hasOwnProperty;
function pt(t) {
  if (t == null)
    return !0;
  if (ar(t) && (At(t) || typeof t == "string" || typeof t.splice == "function" || mr(t) || qr(t) || fr(t)))
    return !t.length;
  var e = ri(t);
  if (e == ni || e == ii)
    return !t.size;
  if (Ot(t))
    return !tn(t).length;
  for (var r in t)
    if (si.call(t, r))
      return !1;
  return !0;
}
var ai = Gn(function(t, e, r) {
  return t + (r ? "-" : "") + e.toLowerCase();
});
const z = ai;
function vt(t, e, r = "-") {
  const n = String(e).replace(new RegExp(`^${t}${r}?`), "");
  return [
    z(n),
    t
  ].filter((i) => !!i).join(r);
}
const li = A({
  directives: {
    bindEvents(t, e) {
      var r, n;
      (n = (r = e.instance) == null ? void 0 : r.bindEvents) == null || n.call(r, t);
    }
  },
  mixins: [
    St
  ],
  inheritAttrs: !1,
  props: {
    /**
     * Show type activity indicator.
     */
    activity: {
      type: Boolean,
      default: !1
    },
    /**
     * Animate floating labels inside the input.
     */
    animated: {
      type: Boolean,
      default: () => l("animated", !1)
    },
    /**
     * Additional classes assigned to the control element. These do not
     * override any of the classes assigned by the FormControl.
     */
    controlClass: {
      type: [Array, Object, String],
      default: void 0
    },
    /**
     * An inline field validation error.
     */
    error: {
      type: [String, Array, Boolean],
      default: void 0
    },
    /**
     * An inline field validation errors passed as object with key/value
     * pairs. If errors passed as an object, the form name will be used for
     * the key.
     */
    errors: {
      type: [Array, Object, Boolean],
      default() {
        return {};
      }
    },
    /**
     * Some feedback to add to the field once the field is successfully
     * valid.
     */
    feedback: {
      type: [String, Array],
      default: void 0
    },
    /**
     * The primary class assigned to the form control.
     */
    formControlClass: {
      type: [Array, Object, String],
      default: () => l("controlClass", "form-control")
    },
    /**
     * Add form-group wrapper to input.
     */
    group: {
      type: Boolean,
      default: () => l("group", !0)
    },
    /**
     * Some instructions to appear under the field label.
     */
    helpText: {
      type: [Number, String],
      default: void 0
    },
    /**
     * The activity indicator type.
     */
    indicator: {
      type: [Object, String, Boolean],
      default: () => l("indicator", "spinner")
    },
    /**
     * The activity indicator size.
     */
    indicatorSize: {
      type: String,
      default: void 0
    },
    /**
     * Force the input to be invalid.
     */
    invalid: Boolean,
    /**
     * The value of label element. If no value, no label will appear.
     */
    label: {
      type: [Number, String],
      default: void 0
    },
    /**
     * The default label class assigned to the label element.
     */
    labelClass: {
      type: [Object, String],
      default: () => l("labelClass", "form-label")
    },
    /**
     * The model default value.
     */
    modelValue: {
      type: [Number, String, Array, Object],
      default: void 0
    },
    /**
     * Should the control look like plaintext.
     */
    plaintext: Boolean,
    /**
     * The size of the form control.
     */
    size: {
      type: String,
      default: void 0
    },
    /**
     * Force the input to be valid.
     */
    valid: Boolean
  },
  emits: [
    "focus",
    "blur",
    "change",
    "click",
    "keypress",
    "keyup",
    "keydown",
    "progress",
    "paste",
    "update:modelValue"
  ],
  data() {
    return {
      // currentValue: this.modelValue,
      hasChanged: !1,
      hasFocus: !1,
      isDirty: !1,
      isEmpty: pt(this.modelValue)
    };
  },
  computed: {
    model: {
      get() {
        return this.modelValue;
      },
      set(t) {
        this.hasChanged = !0, this.isEmpty = pt(t), this.$emit("update:modelValue", t);
      }
    },
    id() {
      return this.$attrs.id || Math.random().toString(36).slice(2);
    },
    componentName() {
      return this.$options.name;
    },
    formGroupClasses() {
      return Object.assign({
        animated: this.animated,
        "form-group": this.group,
        "has-activity": this.activity,
        "has-changed": this.hasChanged,
        "has-focus": this.hasFocus,
        "has-icon": !!this.$slots.icon,
        "is-dirty": this.isDirty,
        "is-empty": this.isEmpty,
        "is-invalid": !!(this.invalid || this.invalidFeedback),
        "is-valid": !!(this.valid || this.validFeedback),
        [this.$attrs.class]: !!this.$attrs.class,
        [this.size && vt(this.size, this.componentName)]: !!this.size
      }, !!this.componentName && {
        [z(this.componentName)]: !0
      });
    },
    controlAttributes() {
      return Object.assign({}, this.$attrs, {
        id: this.id,
        class: this.controlClasses,
        value: this.modelValue
      });
    },
    controlClasses() {
      return Object.assign({
        [this.controlClass]: !!this.controlClass,
        [this.controlSizeClass]: !!this.controlSizeClass,
        [this.formControlClass]: !!this.formControlClass,
        [this.plaintextClass]: this.plaintext,
        "form-control-icon": !!this.$slots.icon,
        "is-valid": !!(this.valid || this.validFeedback),
        "is-invalid": !!(this.invalid || this.invalidFeedback)
      }, this.shadowableClass);
    },
    controlSizeClass() {
      return vt(this.size, this.formControlClass);
    },
    invalidFeedback() {
      if (this.error === "")
        return null;
      if (this.error)
        return this.error;
      const t = this.getFieldErrors();
      return Array.isArray(t) ? t.filter((e) => e && typeof e == "string").join("<br>") : t;
    },
    validFeedback() {
      return Array.isArray(this.feedback) ? this.feedback.join("<br>") : this.feedback;
    },
    plaintextClass() {
      return "form-control-plaintext";
    }
  },
  // watch: {
  //     currentValue(value) {
  //         this.hasChanged = true;
  //         this.isEmpty = isEmpty(value);
  //         this.$emit('update:modelValue', this.value);
  //     }
  // },
  methods: {
    bindEvents(t) {
      for (const e of this.$options.emits)
        t.addEventListener(e, (r) => {
          this.$emit(e, r);
        });
      t.addEventListener("focus", () => {
        this.isDirty = !0, this.hasFocus = !0;
      }), t.addEventListener("blur", () => {
        this.hasFocus = !1;
      });
    },
    blur() {
      var t;
      (t = this.$refs.field) == null || t.blur();
    },
    focus() {
      var t;
      (t = this.$refs.field) == null || t.focus();
    },
    getFieldErrors() {
      let t = this.error || this.errors;
      return this.errors && !Array.isArray(this.errors) && (t = this.errors[this.$attrs.name || this.$attrs.id]), !t || Array.isArray(t) || G(t) ? t : [t];
    }
  }
});
function D(t, e, r = "-") {
  const n = String(e).replace(new RegExp(`^${t}${r}?`), "");
  return [
    z(n),
    t
  ].filter((i) => !!i).join(r);
}
function yt(t) {
  return !Array.isArray(t) && typeof t == "object";
}
A({
  directives: {
    bindEvents: {
      beforeMount(t, e) {
        var r, n;
        (n = (r = e.instance) == null ? void 0 : r.bindEvents) == null || n.call(r, t);
      }
    }
  },
  mixins: [
    St
  ],
  inheritAttrs: !1,
  props: {
    modelValue: {
      default: void 0
    },
    /**
     * Show type activity indicator.
     */
    activity: {
      type: Boolean,
      default: !1
    },
    /**
     * Animate floating labels inside the input.
     */
    animated: {
      type: Boolean,
      default: () => l("animated", !1)
    },
    /**
     * An array of event names that correlate with callback functions.
     */
    nativeEvents: {
      type: Array,
      default() {
        return ["focus", "blur", "change", "click", "keypress", "keyup", "keydown", "progress", "paste"];
      }
    },
    /**
     * The default class name assigned to the control element.
     */
    defaultControlClass: {
      type: String,
      default: () => l("defaultControlClass", "form-control")
    },
    /**
     * An inline field validation error.
     */
    error: {
      type: [String, Array, Boolean],
      default: void 0
    },
    /**
     * An inline field validation errors passed as object with key/value
     * pairs. If errors passed as an object, the form name will be used for
     * the key.
     */
    errors: {
      type: [Array, Object, Boolean],
      default() {
        return {};
      }
    },
    /**
     * Some feedback to add to the field once the field is successfully
     * valid.
     */
    feedback: {
      type: [String, Array],
      default: void 0
    },
    /**
     * Add form-group wrapper to input.
     */
    group: {
      type: Boolean,
      default: () => l("group", !0)
    },
    /**
     * Some instructions to appear under the field label.
     */
    helpText: {
      type: [Number, String],
      default: void 0
    },
    /**
     * Hide the label for browsers, but leave it for screen readers.
     */
    hideLabel: Boolean,
    /**
     * The activity indicator type.
     */
    indicator: {
      type: [String, Boolean],
      default: () => l("indicator", "spinner")
    },
    /**
     * The activity indicator size.
     */
    indicatorSize: {
      type: String,
      default: void 0
    },
    /**
     * Display the form field inline.
     */
    inline: Boolean,
    /**
     * The invalid property.
     */
    invalid: Boolean,
    /**
     * The value of label element. If no value, no label will appear.
     */
    label: {
      type: [Number, String],
      default: void 0
    },
    /**
     * The default label class assigned to the label element.
     */
    labelClass: {
      type: [Object, String],
      default: () => l("labelClass", "form-label")
    },
    /**
     * Should the control look like a pill.
     */
    pill: Boolean,
    /**
     * Should the control look like plaintext.
     */
    plaintext: Boolean,
    /**
     * The size of the form control.
     */
    size: {
      type: String,
      default: void 0
    },
    /**
     * Additional margin/padding classes for fine control of spacing.
     */
    spacing: {
      type: String,
      default: void 0
    },
    /**
     * The valid property.
     */
    valid: Boolean
  },
  emits: [
    "blur",
    "change",
    "click",
    "focus",
    "keydown",
    "keypress",
    "keyup",
    "update:modelValue"
  ],
  data() {
    return {
      defaultEmpty: !1,
      hasChanged: !1,
      hasFocus: !1,
      isEmpty: !0
    };
  },
  computed: {
    id() {
      return this.$attrs.id || this.$attrs.name || (Math.random() + 1).toString(36).substring(7);
    },
    componentName() {
      return this.$options.name;
    },
    controlAttributes() {
      return Object.fromEntries(
        Object.entries(this.$attrs).concat([
          ["id", this.id],
          ["class", this.controlClasses],
          ["value", this.modelValue]
        ])
      );
    },
    controlClass() {
      return this.defaultControlClass;
    },
    controlSizeClass() {
      return D(this.size, this.controlClass);
    },
    formGroupClasses() {
      return Object.assign({
        [this.size && D(this.size, this.componentName)]: !!this.size,
        animated: this.animated,
        "default-empty": this.defaultEmpty,
        "form-group": this.group,
        [this.size && D(this.size, "form-group")]: !!this.size,
        "has-activity": this.activity,
        "has-changed": this.hasChanged,
        "has-focus": this.hasFocus,
        "has-icon": !!this.$slots.icon,
        "is-empty": this.isEmpty,
        "is-invalid": !!(this.invalid || this.invalidFeedback),
        "is-valid": !!(this.valid || this.validFeedback),
        [this.$attrs.class]: !!this.$attrs.class,
        [this.$attrs.id]: !!this.$attrs.id
      }, !!this.componentName && {
        [z(this.componentName)]: !0
      });
    },
    controlClasses() {
      return Object.assign({
        [this.controlClass]: !!this.controlClass,
        [this.controlSizeClass]: !!this.controlSizeClass,
        "form-control-icon": !!this.$slots.icon,
        "is-valid": !!(this.valid || this.validFeedback),
        "is-invalid": !!(this.invalid || this.invalidFeedback),
        [this.pillClasses]: this.pill,
        [this.plaintextClass]: this.plaintext,
        [this.spacing]: !!this.spacing
      }, this.shadowableClass);
    },
    hasDefaultSlot() {
      return !!this.$slots.default;
    },
    invalidFeedback() {
      if (this.error === "")
        return null;
      if (this.error)
        return this.error;
      const t = this.getFieldErrors();
      return Array.isArray(t) ? t.filter((e) => e && typeof e == "string").join("<br>") : t;
    },
    pillClasses() {
      return "rounded rounded-pill";
    },
    plaintextClass() {
      return "form-control-plaintext";
    },
    validFeedback() {
      return Array.isArray(this.feedback) ? this.feedback.join("<br>") : this.feedback;
    }
  },
  watch: {
    hasFocus() {
      this.shouldChangeOnFocus() && (this.hasChanged = !0);
    },
    defaultEmpty() {
      this.hasChanged = !0;
    }
  },
  methods: {
    bindEvents(t, e) {
      var r;
      e || (e = this.onInput);
      const n = t instanceof HTMLSelectElement ? (r = t.querySelectorAll("option")) == null ? void 0 : r[t.selectedIndex] : null;
      n && (t.value = n == null ? void 0 : n.value), t.value && e(t.value), this.hasChanged = !!t.value, this.isEmpty = !t.value, t.addEventListener("focus", () => {
        this.hasFocus = !0;
      }), t.addEventListener("blur", () => {
        this.hasFocus = !1;
      }), t.addEventListener("input", () => {
        this.isEmpty = !1, this.hasChanged = !0;
      }), t.addEventListener(
        t.tagName === "SELECT" ? "change" : "input",
        () => e(t.value)
      ), this.nativeEvents.forEach((i) => {
        t.addEventListener(i, (s) => {
          this.$emit(i, s);
        });
      });
    },
    blur() {
      this.getInputField() && this.getInputField().blur();
    },
    focus() {
      this.getInputField() && this.getInputField().focus();
    },
    getInputField() {
      return this.$el.querySelector(
        ".form-control, input, select, textarea"
      );
    },
    getFieldErrors() {
      let t = this.error || this.errors;
      return this.errors && yt(this.errors) && (t = this.errors[this.$attrs.name || this.$attrs.id]), !t || Array.isArray(t) || yt(t) ? t : [t];
    },
    shouldChangeOnFocus() {
      return !this.getInputField().readOnly;
    },
    onInput(t) {
      this.$emit("update:modelValue", t);
    }
  }
});
const ui = A({
  name: "TextareaField",
  directives: {
    Autogrow: Ae
  },
  components: {
    ActivityIndicator: ge
  },
  extends: li,
  props: {
    /**
     * The autogrow attribute
     *
     * @property Boolean
     */
    autogrow: {
      type: [Number, String, Boolean],
      default: !1
    }
  }
});
const ci = (t, e) => {
  const r = t.__vccOpts || t;
  for (const [n, i] of e)
    r[n] = i;
  return r;
}, di = ["for"], hi = { class: "form-group-inner" }, fi = ["innerHTML"], pi = ["innerHTML"];
function vi(t, e, r, n, i, s) {
  const f = Jt("activity-indicator"), T = _("autogrow"), E = _("bind-events");
  return a(), u("div", {
    class: M(t.formGroupClasses)
  }, [
    p(t.$slots, "label", {}, () => [
      t.label ? (a(), u("label", {
        key: 0,
        ref: "label",
        for: t.id,
        class: M(t.labelClass)
      }, H(t.label), 11, di)) : y("", !0)
    ]),
    V("div", hi, [
      p(t.$slots, "control", {
        bindEvents: t.bindEvents,
        controlAttributes: t.controlAttributes,
        focus: t.focus
      }, () => [
        t.$slots.icon ? (a(), u("div", {
          key: 0,
          class: "form-group-inner-icon",
          onClick: e[0] || (e[0] = (...j) => t.focus && t.focus(...j))
        }, [
          p(t.$slots, "icon")
        ])) : y("", !0),
        Kt(V("textarea", Qt({
          ref: "field",
          "onUpdate:modelValue": e[1] || (e[1] = (j) => t.model = j)
        }, t.controlAttributes), null, 16), [
          [Xt, t.model],
          [T, t.autogrow],
          [E]
        ])
      ]),
      p(t.$slots, "activity", {}, () => [
        te(ee, { name: "textarea-field-fade" }, {
          default: re(() => [
            t.activity ? (a(), bt(f, {
              key: "activity",
              ref: "activity",
              type: t.indicator,
              size: t.indicatorSize || t.size
            }, null, 8, ["type", "size"])) : y("", !0)
          ]),
          _: 1
        })
      ])
    ]),
    p(t.$slots, "feedback", {}, () => [
      t.invalidFeedback ? (a(), u("div", {
        key: 0,
        class: "invalid-feedback",
        invalid: "",
        innerHTML: t.invalidFeedback
      }, null, 8, fi)) : t.validFeedback ? (a(), u("div", {
        key: 1,
        class: "valid-feedback",
        valid: "",
        innerHTML: t.validFeedback
      }, null, 8, pi)) : y("", !0)
    ]),
    p(t.$slots, "help", {}, () => [
      t.helpText ? (a(), u("small", {
        key: 0,
        ref: "help"
      }, H(t.helpText), 513)) : y("", !0)
    ])
  ], 2);
}
const mi = /* @__PURE__ */ ci(ui, [["render", vi]]);
export {
  mi as TextareaField
};
//# sourceMappingURL=textarea-field.js.map
