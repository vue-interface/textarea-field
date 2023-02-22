import { defineComponent as y, inject as tt, toRaw as rt, openBlock as l, createElementBlock as f, normalizeClass as W, normalizeStyle as ot, createElementVNode as C, createBlock as _, resolveDynamicComponent as nt, toDisplayString as w, createCommentVNode as j, computed as it, Fragment as $e, renderList as Ae, unref as D, renderSlot as c, normalizeProps as B, guardReactiveProps as T, resolveComponent as R, resolveDirective as X, withDirectives as st, mergeProps as at, vModelText as lt, createVNode as ee, Transition as ut, withCtx as P, createTextVNode as ct } from "vue";
var dt = Object.defineProperty, ft = (e, t, r) => t in e ? dt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, ht = (e, t, r) => (ft(e, typeof t != "symbol" ? t + "" : t, r), r), I = function() {
  return I = Object.assign || function(e) {
    for (var t, r = 1, o = arguments.length; r < o; r++) {
      t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, I.apply(this, arguments);
};
function pt(e) {
  return e.toLowerCase();
}
var yt = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g], vt = /[^A-Z0-9]+/gi;
function bt(e, t) {
  t === void 0 && (t = {});
  for (var r = t.splitRegexp, o = r === void 0 ? yt : r, n = t.stripRegexp, s = n === void 0 ? vt : n, d = t.transform, V = d === void 0 ? pt : d, F = t.delimiter, L = F === void 0 ? " " : F, m = te(te(e, o, "$1\0$2"), s, "\0"), a = 0, M = m.length; m.charAt(a) === "\0"; )
    a++;
  for (; m.charAt(M - 1) === "\0"; )
    M--;
  return m.slice(a, M).split("\0").map(V).join(L);
}
function te(e, t, r) {
  return t instanceof RegExp ? e.replace(t, r) : t.reduce(function(o, n) {
    return o.replace(n, r);
  }, e);
}
function mt(e, t) {
  return t === void 0 && (t = {}), bt(e, I({ delimiter: "." }, t));
}
function z(e, t) {
  return t === void 0 && (t = {}), mt(e, I({ delimiter: "-" }, t));
}
let gt = class {
  constructor(t = {}) {
    ht(this, "components"), this.components = /* @__PURE__ */ new Map(), Object.entries(t).forEach(([r, o]) => {
      this.register(r, o);
    });
  }
  get(t) {
    const r = this.components.get(
      t = z(t)
    );
    if (r)
      return r;
    throw new Error(`"${t}" has not been registered yet!`);
  }
  register(t, r) {
    return typeof t == "object" ? (Object.entries(t).forEach(([o, n]) => {
      this.register(z(o), n);
    }), this) : (this.components.set(z(t), r), this);
  }
  remove(t) {
    return this.components.delete(z(t)), this;
  }
  reset() {
    return this.components = /* @__PURE__ */ new Map(), this;
  }
};
function jt(e = {}) {
  return new gt(e);
}
const St = jt();
function g(e, t = "px") {
  return e != null && e !== !1 && isFinite(e) ? `${e}${t}` : e;
}
const Ct = y({
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
        width: g(this.width),
        maxWidth: g(this.maxWidth),
        minWidth: g(this.minWidth),
        height: g(this.height),
        maxHeight: g(this.maxHeight),
        minHeight: g(this.minHeight)
      };
    }
  },
  // async mounted() {
  //     const component = await this.component();
  //     this.is = () => component;
  // },
  methods: {
    componentFromRegistry(e) {
      var t;
      try {
        return (t = tt(this.registry || "indicators", St)) == null ? void 0 : t.get(e);
      } catch {
      }
    },
    component() {
      return typeof this.type == "string" ? this.componentFromRegistry(this.type) : rt(this.type);
    }
  }
}), $t = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [o, n] of t)
    r[o] = n;
  return r;
}, At = { class: "activity-indicator-content" }, xt = {
  key: 0,
  class: "activity-indicator-label"
};
function wt(e, t, r, o, n, s) {
  return l(), f("div", {
    class: W(["activity-indicator", e.classes]),
    style: ot(e.style)
  }, [
    C("div", At, [
      (l(), _(nt(e.component()), { class: "mx-auto" })),
      e.label ? (l(), f("div", xt, w(e.label), 1)) : j("", !0)
    ])
  ], 6);
}
const Et = /* @__PURE__ */ $t(Ct, [["render", wt]]), Ot = [
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
function kt(e) {
  const t = document.createElement("textarea");
  return t.textContent = e, t.innerHTML;
}
function xe(e) {
  return typeof e == "number" ? e : !e || !e.replace ? 0 : parseInt(e.replace(/[^\d.]+/g, "")) || 0;
}
function re(e, t, r, o) {
  e.innerHTML = kt(t.value).replace(/(?:\r\n|\r|\n)/g, "<br />") + "&nbsp;";
  let n = Math.max(r, we(e));
  e.innerHTML.match(/(<br\s?\/?\>)+/) && (n += xe(Ee(t, "lineHeight"))), t.style.height = (!o || n < o ? n : o) + "px";
}
function we(e) {
  return xe(Ee(e, "height"));
}
function Ee(e, t) {
  return window.getComputedStyle(e)[t];
}
function Ft(e, t) {
  const r = document.createElement("div"), o = window.getComputedStyle(e);
  return r.style.position = "absolute", r.style.zIndex = -1, r.style.visibility = "hidden", e.parentNode.insertBefore(r, e.nextSibling), Ot.forEach((n) => r.style[n] = o[n]), r;
}
function zt(e, t, r) {
  const o = we(e), n = Ft(e), s = t.value !== !0 ? t.value : 0;
  e.addEventListener("input", (d) => {
    re(n, d.target, o, s);
  }), re(n, e, o, s);
}
const Bt = {
  mounted(e, t, r) {
    t.value !== !1 && (zt(e, t), e.resize = function() {
      r.context.$nextTick(() => {
        e.dispatchEvent(new Event("input"));
      });
    });
  }
}, A = {};
function u(...e) {
  if (!e.length)
    return A;
  const [t, r] = e;
  return typeof t == "string" ? typeof A[t] < "u" ? A[t] : r : Array.isArray(t) ? t.reduce((o, n) => Object.assign(o, {
    //@ts-ignore
    [n]: A[n]
  }), {}) : Object.assign(A, ...e);
}
const Oe = y({
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
      const e = this.dropShadow === !0 ? "" : this.dropShadow && `-${this.dropShadow}`, t = this.shadow === !0 ? "" : this.shadow && `-${this.shadow}`;
      return {
        [`${this.dropShadowableClassPrefix}${e}`]: !!this.dropShadow,
        [`${this.shadowableClassPrefix}${t}`]: !!this.shadow
      };
    }
  }
});
var Tt = typeof global == "object" && global && global.Object === Object && global;
const ke = Tt;
var It = typeof self == "object" && self && self.Object === Object && self, Nt = ke || It || Function("return this")();
const h = Nt;
var Vt = h.Symbol;
const $ = Vt;
var Fe = Object.prototype, Lt = Fe.hasOwnProperty, Mt = Fe.toString, x = $ ? $.toStringTag : void 0;
function Dt(e) {
  var t = Lt.call(e, x), r = e[x];
  try {
    e[x] = void 0;
    var o = !0;
  } catch {
  }
  var n = Mt.call(e);
  return o && (t ? e[x] = r : delete e[x]), n;
}
var Rt = Object.prototype, Pt = Rt.toString;
function Ht(e) {
  return Pt.call(e);
}
var Ut = "[object Null]", Zt = "[object Undefined]", oe = $ ? $.toStringTag : void 0;
function v(e) {
  return e == null ? e === void 0 ? Zt : Ut : oe && oe in Object(e) ? Dt(e) : Ht(e);
}
function O(e) {
  return e != null && typeof e == "object";
}
var Wt = "[object Symbol]";
function _t(e) {
  return typeof e == "symbol" || O(e) && v(e) == Wt;
}
function Gt(e, t) {
  for (var r = -1, o = e == null ? 0 : e.length, n = Array(o); ++r < o; )
    n[r] = t(e[r], r, e);
  return n;
}
var qt = Array.isArray;
const ze = qt;
var Yt = 1 / 0, ne = $ ? $.prototype : void 0, ie = ne ? ne.toString : void 0;
function Be(e) {
  if (typeof e == "string")
    return e;
  if (ze(e))
    return Gt(e, Be) + "";
  if (_t(e))
    return ie ? ie.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Yt ? "-0" : t;
}
function Q(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Jt = "[object AsyncFunction]", Kt = "[object Function]", Qt = "[object GeneratorFunction]", Xt = "[object Proxy]";
function Te(e) {
  if (!Q(e))
    return !1;
  var t = v(e);
  return t == Kt || t == Qt || t == Jt || t == Xt;
}
var er = h["__core-js_shared__"];
const H = er;
var se = function() {
  var e = /[^.]+$/.exec(H && H.keys && H.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function tr(e) {
  return !!se && se in e;
}
var rr = Function.prototype, or = rr.toString;
function b(e) {
  if (e != null) {
    try {
      return or.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var nr = /[\\^$.*+?()[\]{}|]/g, ir = /^\[object .+?Constructor\]$/, sr = Function.prototype, ar = Object.prototype, lr = sr.toString, ur = ar.hasOwnProperty, cr = RegExp(
  "^" + lr.call(ur).replace(nr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function dr(e) {
  if (!Q(e) || tr(e))
    return !1;
  var t = Te(e) ? cr : ir;
  return t.test(b(e));
}
function fr(e, t) {
  return e == null ? void 0 : e[t];
}
function k(e, t) {
  var r = fr(e, t);
  return dr(r) ? r : void 0;
}
var hr = k(h, "WeakMap");
const G = hr;
var pr = 9007199254740991;
function Ie(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= pr;
}
function yr(e) {
  return e != null && Ie(e.length) && !Te(e);
}
var vr = Object.prototype;
function Ne(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || vr;
  return e === r;
}
var br = "[object Arguments]";
function ae(e) {
  return O(e) && v(e) == br;
}
var Ve = Object.prototype, mr = Ve.hasOwnProperty, gr = Ve.propertyIsEnumerable, jr = ae(function() {
  return arguments;
}()) ? ae : function(e) {
  return O(e) && mr.call(e, "callee") && !gr.call(e, "callee");
};
const Sr = jr;
function Cr() {
  return !1;
}
var Le = typeof exports == "object" && exports && !exports.nodeType && exports, le = Le && typeof module == "object" && module && !module.nodeType && module, $r = le && le.exports === Le, ue = $r ? h.Buffer : void 0, Ar = ue ? ue.isBuffer : void 0, xr = Ar || Cr;
const wr = xr;
var Er = "[object Arguments]", Or = "[object Array]", kr = "[object Boolean]", Fr = "[object Date]", zr = "[object Error]", Br = "[object Function]", Tr = "[object Map]", Ir = "[object Number]", Nr = "[object Object]", Vr = "[object RegExp]", Lr = "[object Set]", Mr = "[object String]", Dr = "[object WeakMap]", Rr = "[object ArrayBuffer]", Pr = "[object DataView]", Hr = "[object Float32Array]", Ur = "[object Float64Array]", Zr = "[object Int8Array]", Wr = "[object Int16Array]", _r = "[object Int32Array]", Gr = "[object Uint8Array]", qr = "[object Uint8ClampedArray]", Yr = "[object Uint16Array]", Jr = "[object Uint32Array]", i = {};
i[Hr] = i[Ur] = i[Zr] = i[Wr] = i[_r] = i[Gr] = i[qr] = i[Yr] = i[Jr] = !0;
i[Er] = i[Or] = i[Rr] = i[kr] = i[Pr] = i[Fr] = i[zr] = i[Br] = i[Tr] = i[Ir] = i[Nr] = i[Vr] = i[Lr] = i[Mr] = i[Dr] = !1;
function Kr(e) {
  return O(e) && Ie(e.length) && !!i[v(e)];
}
function Qr(e) {
  return function(t) {
    return e(t);
  };
}
var Me = typeof exports == "object" && exports && !exports.nodeType && exports, E = Me && typeof module == "object" && module && !module.nodeType && module, Xr = E && E.exports === Me, U = Xr && ke.process, eo = function() {
  try {
    var e = E && E.require && E.require("util").types;
    return e || U && U.binding && U.binding("util");
  } catch {
  }
}();
const ce = eo;
var de = ce && ce.isTypedArray, to = de ? Qr(de) : Kr;
const ro = to;
function De(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var oo = De(Object.keys, Object);
const no = oo;
var io = Object.prototype, so = io.hasOwnProperty;
function ao(e) {
  if (!Ne(e))
    return no(e);
  var t = [];
  for (var r in Object(e))
    so.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var lo = k(h, "Map");
const q = lo;
function Re(e) {
  return e == null ? "" : Be(e);
}
var uo = De(Object.getPrototypeOf, Object);
const co = uo;
var fo = "[object Object]", ho = Function.prototype, po = Object.prototype, Pe = ho.toString, yo = po.hasOwnProperty, vo = Pe.call(Object);
function bo(e) {
  if (!O(e) || v(e) != fo)
    return !1;
  var t = co(e);
  if (t === null)
    return !0;
  var r = yo.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && Pe.call(r) == vo;
}
function mo(e, t, r, o) {
  var n = -1, s = e == null ? 0 : e.length;
  for (o && s && (r = e[++n]); ++n < s; )
    r = t(r, e[n], n, e);
  return r;
}
function go(e) {
  return function(t) {
    return e == null ? void 0 : e[t];
  };
}
var jo = {
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
}, So = go(jo);
const Co = So;
var $o = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Ao = "\\u0300-\\u036f", xo = "\\ufe20-\\ufe2f", wo = "\\u20d0-\\u20ff", Eo = Ao + xo + wo, Oo = "[" + Eo + "]", ko = RegExp(Oo, "g");
function Fo(e) {
  return e = Re(e), e && e.replace($o, Co).replace(ko, "");
}
var zo = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function Bo(e) {
  return e.match(zo) || [];
}
var To = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function Io(e) {
  return To.test(e);
}
var He = "\\ud800-\\udfff", No = "\\u0300-\\u036f", Vo = "\\ufe20-\\ufe2f", Lo = "\\u20d0-\\u20ff", Mo = No + Vo + Lo, Ue = "\\u2700-\\u27bf", Ze = "a-z\\xdf-\\xf6\\xf8-\\xff", Do = "\\xac\\xb1\\xd7\\xf7", Ro = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Po = "\\u2000-\\u206f", Ho = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", We = "A-Z\\xc0-\\xd6\\xd8-\\xde", Uo = "\\ufe0e\\ufe0f", _e = Do + Ro + Po + Ho, Ge = "['’]", fe = "[" + _e + "]", Zo = "[" + Mo + "]", qe = "\\d+", Wo = "[" + Ue + "]", Ye = "[" + Ze + "]", Je = "[^" + He + _e + qe + Ue + Ze + We + "]", _o = "\\ud83c[\\udffb-\\udfff]", Go = "(?:" + Zo + "|" + _o + ")", qo = "[^" + He + "]", Ke = "(?:\\ud83c[\\udde6-\\uddff]){2}", Qe = "[\\ud800-\\udbff][\\udc00-\\udfff]", S = "[" + We + "]", Yo = "\\u200d", he = "(?:" + Ye + "|" + Je + ")", Jo = "(?:" + S + "|" + Je + ")", pe = "(?:" + Ge + "(?:d|ll|m|re|s|t|ve))?", ye = "(?:" + Ge + "(?:D|LL|M|RE|S|T|VE))?", Xe = Go + "?", et = "[" + Uo + "]?", Ko = "(?:" + Yo + "(?:" + [qo, Ke, Qe].join("|") + ")" + et + Xe + ")*", Qo = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Xo = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", en = et + Xe + Ko, tn = "(?:" + [Wo, Ke, Qe].join("|") + ")" + en, rn = RegExp([
  S + "?" + Ye + "+" + pe + "(?=" + [fe, S, "$"].join("|") + ")",
  Jo + "+" + ye + "(?=" + [fe, S + he, "$"].join("|") + ")",
  S + "?" + he + "+" + pe,
  S + "+" + ye,
  Xo,
  Qo,
  qe,
  tn
].join("|"), "g");
function on(e) {
  return e.match(rn) || [];
}
function nn(e, t, r) {
  return e = Re(e), t = r ? void 0 : t, t === void 0 ? Io(e) ? on(e) : Bo(e) : e.match(t) || [];
}
var sn = "['’]", an = RegExp(sn, "g");
function ln(e) {
  return function(t) {
    return mo(nn(Fo(t).replace(an, "")), e, "");
  };
}
var un = k(h, "DataView");
const Y = un;
var cn = k(h, "Promise");
const J = cn;
var dn = k(h, "Set");
const K = dn;
var ve = "[object Map]", fn = "[object Object]", be = "[object Promise]", me = "[object Set]", ge = "[object WeakMap]", je = "[object DataView]", hn = b(Y), pn = b(q), yn = b(J), vn = b(K), bn = b(G), p = v;
(Y && p(new Y(new ArrayBuffer(1))) != je || q && p(new q()) != ve || J && p(J.resolve()) != be || K && p(new K()) != me || G && p(new G()) != ge) && (p = function(e) {
  var t = v(e), r = t == fn ? e.constructor : void 0, o = r ? b(r) : "";
  if (o)
    switch (o) {
      case hn:
        return je;
      case pn:
        return ve;
      case yn:
        return be;
      case vn:
        return me;
      case bn:
        return ge;
    }
  return t;
});
const mn = p;
var gn = "[object Map]", jn = "[object Set]", Sn = Object.prototype, Cn = Sn.hasOwnProperty;
function $n(e) {
  if (e == null)
    return !0;
  if (yr(e) && (ze(e) || typeof e == "string" || typeof e.splice == "function" || wr(e) || ro(e) || Sr(e)))
    return !e.length;
  var t = mn(e);
  if (t == gn || t == jn)
    return !e.size;
  if (Ne(e))
    return !ao(e).length;
  for (var r in e)
    if (Cn.call(e, r))
      return !1;
  return !0;
}
var An = ln(function(e, t, r) {
  return e + (r ? "-" : "") + t.toLowerCase();
});
const N = An, xn = /* @__PURE__ */ y({
  __name: "FormControlErrors",
  props: {
    error: null,
    errors: null,
    name: null,
    id: null
  },
  setup(e) {
    const t = e, r = String((t == null ? void 0 : t.id) || (t == null ? void 0 : t.name)), o = it(() => t.error ? /* @__PURE__ */ new Map(
      [[r, [t.error]]]
    ) : bo(t.errors) ? new Map(
      Object.entries(t.errors)
    ) : Array.isArray(t.errors) ? /* @__PURE__ */ new Map(
      [[r, t.errors]]
    ) : /* @__PURE__ */ new Map());
    return (n, s) => (l(!0), f($e, null, Ae(D(o).get(D(r)), (d) => c(n.$slots, "default", B(T({ key: D(r), error: d })))), 256));
  }
}), wn = /* @__PURE__ */ y({
  __name: "FormControlFeedback",
  props: {
    feedback: null
  },
  setup(e) {
    return (t, r) => (l(!0), f($e, null, Ae([].concat(e.feedback), (o) => c(t.$slots, "default", B(T({ feedback: o })))), 256));
  }
});
function Se(e, t, r = "-") {
  const o = String(t).replace(new RegExp(`^${e}${r}?`), "");
  return [
    N(o),
    e
  ].filter((n) => !!n).join(r);
}
const En = y({
  components: {
    FormControlErrors: xn,
    FormControlFeedback: wn
  },
  directives: {
    bindEvents: {
      created(e, t) {
        var r, o;
        (o = (r = t.instance) == null ? void 0 : r.bindEvents) == null || o.call(r, e);
      }
    }
  },
  mixins: [
    Oe
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
      default: () => u("animated", !1)
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
      default: () => u("controlClass", "form-control")
    },
    /**
     * Add form-group wrapper to input.
     */
    group: {
      type: Boolean,
      default: () => u("group", !0)
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
      default: () => u("indicator", "spinner")
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
      default: () => u("labelClass", "form-label")
    },
    /**
     * The model default value.
     */
    modelValue: {
      type: [Boolean, Number, String, Array, Object],
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
      currentValue: null,
      hasChanged: !1,
      hasFocus: !1,
      isDirty: !1
    };
  },
  computed: {
    model: {
      get() {
        return this.getModelValue();
      },
      set(e) {
        this.setModelValue(e);
      }
    },
    id() {
      return this.$attrs.id || Math.random().toString(36).slice(2);
    },
    isEmpty() {
      return $n(this.model);
    },
    isInvalid() {
      return !!(this.invalid || this.error || (Array.isArray(this.errors) ? this.errors.length : this.errors[this.$attrs.id || this.$attrs.name]));
    },
    isValid() {
      return !!(this.valid || this.feedback);
    },
    componentName() {
      return this.$options.name;
    },
    controlAttributes() {
      return Object.assign({}, this.$attrs, {
        id: this.id,
        class: this.controlClasses
        // value: this.model
      });
    },
    controlClasses() {
      return Object.assign({
        [this.controlClass]: !!this.controlClass,
        [this.controlSizeClass]: !!this.controlSizeClass,
        [this.formControlClass]: !!this.formControlClass,
        [this.plaintextClass]: this.plaintext,
        "form-control-icon": !!this.$slots.icon,
        "is-valid": this.isValid,
        "is-invalid": this.isInvalid
      }, this.shadowableClass);
    },
    controlSizeClass() {
      return Se(this.size, this.formControlClass);
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
        "is-invalid": this.isInvalid,
        "is-valid": this.isValid,
        [this.$attrs.class]: !!this.$attrs.class,
        [this.size && Se(this.size, this.componentName)]: !!this.size
      }, !!this.componentName && {
        [N(this.componentName)]: !0
      });
    },
    plaintextClass() {
      return "form-control-plaintext";
    }
  },
  methods: {
    bindEvents(e) {
      for (const t of this.$options.emits)
        e.addEventListener(t, (r) => {
          this.$emit(t, r);
        });
      e.addEventListener("focus", () => {
        this.isDirty = !0, this.hasFocus = !0;
      }), e.addEventListener("blur", () => {
        this.hasFocus = !1;
      });
    },
    blur() {
      var e;
      (e = this.$refs.field) == null || e.blur();
    },
    focus() {
      var e;
      (e = this.$refs.field) == null || e.focus();
    },
    getFieldErrors() {
      let e = this.error || this.errors;
      return this.errors && !Array.isArray(this.errors) && (e = this.errors[this.$attrs.name || this.$attrs.id]), !e || Array.isArray(e) || Q(e) ? e : [e];
    },
    getModelValue() {
      return this.modelValue !== void 0 ? this.modelValue : this.currentValue;
    },
    setModelValue(e) {
      this.hasChanged = !0, this.currentValue = e, this.$emit("update:modelValue", e);
    }
  }
});
function Z(e, t, r = "-") {
  const o = String(t).replace(new RegExp(`^${e}${r}?`), "");
  return [
    N(o),
    e
  ].filter((n) => !!n).join(r);
}
function Ce(e) {
  return !Array.isArray(e) && typeof e == "object";
}
y({
  directives: {
    bindEvents: {
      beforeMount(e, t) {
        var r, o;
        (o = (r = t.instance) == null ? void 0 : r.bindEvents) == null || o.call(r, e);
      }
    }
  },
  mixins: [
    Oe
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
      default: () => u("animated", !1)
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
      default: () => u("defaultControlClass", "form-control")
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
      default: () => u("group", !0)
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
      default: () => u("indicator", "spinner")
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
      default: () => u("labelClass", "form-label")
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
      return Z(this.size, this.controlClass);
    },
    formGroupClasses() {
      return Object.assign({
        [this.size && Z(this.size, this.componentName)]: !!this.size,
        animated: this.animated,
        "default-empty": this.defaultEmpty,
        "form-group": this.group,
        [this.size && Z(this.size, "form-group")]: !!this.size,
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
        [N(this.componentName)]: !0
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
      const e = this.getFieldErrors();
      return Array.isArray(e) ? e.filter((t) => t && typeof t == "string").join("<br>") : e;
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
    bindEvents(e, t) {
      var r;
      t || (t = this.onInput);
      const o = e instanceof HTMLSelectElement ? (r = e.querySelectorAll("option")) == null ? void 0 : r[e.selectedIndex] : null;
      o && (e.value = o == null ? void 0 : o.value), e.value && t(e.value), this.hasChanged = !!e.value, this.isEmpty = !e.value, e.addEventListener("focus", () => {
        this.hasFocus = !0;
      }), e.addEventListener("blur", () => {
        this.hasFocus = !1;
      }), e.addEventListener("input", () => {
        this.isEmpty = !1, this.hasChanged = !0;
      }), e.addEventListener(
        e.tagName === "SELECT" ? "change" : "input",
        () => t(e.value)
      ), this.nativeEvents.forEach((n) => {
        e.addEventListener(n, (s) => {
          this.$emit(n, s);
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
      let e = this.error || this.errors;
      return this.errors && Ce(this.errors) && (e = this.errors[this.$attrs.name || this.$attrs.id]), !e || Array.isArray(e) || Ce(e) ? e : [e];
    },
    shouldChangeOnFocus() {
      return !this.getInputField().readOnly;
    },
    onInput(e) {
      this.$emit("update:modelValue", e);
    }
  }
});
const On = y({
  name: "TextareaField",
  directives: {
    Autogrow: Bt
  },
  components: {
    ActivityIndicator: Et
  },
  extends: En,
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
const kn = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [o, n] of t)
    r[o] = n;
  return r;
}, Fn = ["for"], zn = { class: "form-group-inner" }, Bn = {
  invalid: "",
  class: "invalid-feedback"
}, Tn = /* @__PURE__ */ C("br", null, null, -1), In = {
  valid: "",
  class: "valid-feedback"
};
function Nn(e, t, r, o, n, s) {
  const d = R("activity-indicator"), V = R("FormControlErrors"), F = R("FormControlFeedback"), L = X("autogrow"), m = X("bind-events");
  return l(), f("div", {
    class: W(e.formGroupClasses)
  }, [
    c(e.$slots, "label", {}, () => [
      e.label ? (l(), f("label", {
        key: 0,
        ref: "label",
        for: e.id,
        class: W(e.labelClass)
      }, w(e.label), 11, Fn)) : j("", !0)
    ]),
    C("div", zn, [
      c(e.$slots, "control", {
        bindEvents: e.bindEvents,
        controlAttributes: e.controlAttributes,
        focus: e.focus
      }, () => [
        e.$slots.icon ? (l(), f("div", {
          key: 0,
          class: "form-group-inner-icon",
          onClick: t[0] || (t[0] = (...a) => e.focus && e.focus(...a))
        }, [
          c(e.$slots, "icon")
        ])) : j("", !0),
        st(C("textarea", at({
          ref: "field",
          "onUpdate:modelValue": t[1] || (t[1] = (a) => e.model = a)
        }, e.controlAttributes), null, 16), [
          [lt, e.model],
          [L, e.autogrow],
          [m]
        ])
      ]),
      c(e.$slots, "activity", {}, () => [
        ee(ut, { name: "textarea-field-fade" }, {
          default: P(() => [
            e.activity ? (l(), _(d, {
              key: "activity",
              ref: "activity",
              type: e.indicator,
              size: e.indicatorSize || e.size
            }, null, 8, ["type", "size"])) : j("", !0)
          ]),
          _: 1
        })
      ])
    ]),
    c(e.$slots, "errors", B(T({ error: e.error, errors: e.errors, id: e.$attrs.id, name: e.$attrs.name })), () => [
      e.error || e.errors ? (l(), _(V, {
        key: 0,
        id: e.$attrs.id,
        name: e.$attrs.name,
        error: e.error,
        errors: e.errors
      }, {
        default: P(({ error: a }) => [
          C("div", Bn, [
            ct(w(a), 1),
            Tn
          ])
        ]),
        _: 1
      }, 8, ["id", "name", "error", "errors"])) : j("", !0)
    ]),
    c(e.$slots, "feedback", B(T({ feedback: e.feedback })), () => [
      ee(F, { feedback: e.feedback }, {
        default: P(({ feedback: a }) => [
          C("div", In, w(a), 1)
        ]),
        _: 1
      }, 8, ["feedback"])
    ]),
    c(e.$slots, "help", {}, () => [
      e.helpText ? (l(), f("small", {
        key: 0,
        ref: "help"
      }, w(e.helpText), 513)) : j("", !0)
    ])
  ], 2);
}
const Mn = /* @__PURE__ */ kn(On, [["render", Nn]]);
export {
  Mn as TextareaField
};
//# sourceMappingURL=textarea-field.js.map
