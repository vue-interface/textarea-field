import { defineComponent as S, inject as at, openBlock as u, createElementBlock as s, normalizeClass as w, normalizeStyle as lt, createElementVNode as D, createBlock as R, resolveDynamicComponent as dt, createCommentVNode as a, toDisplayString as V, resolveComponent as ct, resolveDirective as j, renderSlot as d, withDirectives as ht, mergeProps as ft, createVNode as pt, Transition as vt, withCtx as gt } from "vue";
const yt = [
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
function mt(t) {
  const e = document.createElement("textarea");
  return e.textContent = t, e.innerHTML;
}
function Z(t) {
  return typeof t == "number" ? t : !t || !t.replace ? 0 : parseInt(t.replace(/[^\d.]+/g, "")) || 0;
}
function k(t, e, i, r) {
  t.innerHTML = mt(e.value).replace(/(?:\r\n|\r|\n)/g, "<br />") + "&nbsp;";
  let n = Math.max(i, U(t));
  t.innerHTML.match(/(<br\s?\/?\>)+/) && (n += Z(P(e, "lineHeight"))), e.style.height = (!r || n < r ? n : r) + "px";
}
function U(t) {
  return Z(P(t, "height"));
}
function P(t, e) {
  return window.getComputedStyle(t)[e];
}
function bt(t, e) {
  const i = document.createElement("div"), r = window.getComputedStyle(t);
  return i.style.position = "absolute", i.style.zIndex = -1, i.style.visibility = "hidden", t.parentNode.insertBefore(i, t.nextSibling), yt.forEach((n) => i.style[n] = r[n]), i;
}
function Ct(t, e, i) {
  const r = U(t), n = bt(t), o = e.value !== !0 ? e.value : 0;
  t.addEventListener("input", (l) => {
    k(n, l.target, r, o);
  }), k(n, t, r, o);
}
const Et = {
  mounted(t, e, i) {
    e.value !== !1 && (Ct(t, e), t.resize = function() {
      i.context.$nextTick(() => {
        t.dispatchEvent(new Event("input"));
      });
    });
  }
};
function c(t, e = "px") {
  return t != null && t !== !1 && isFinite(t) ? `${t}${e}` : t;
}
const St = S({
  props: {
    absolute: Boolean,
    center: Boolean,
    label: String,
    size: {
      type: String,
      default: "md"
    },
    registry: {
      type: String,
      default: "indicators"
    },
    type: {
      type: String,
      required: !0
    },
    height: [String, Number],
    maxHeight: [String, Number],
    minHeight: [String, Number],
    width: [String, Number],
    maxWidth: [String, Number],
    minWidth: [String, Number]
  },
  data: () => ({
    is: null
  }),
  setup(t) {
    return {
      registryInstance: at(t.registry || "indicators")
    };
  },
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
        width: c(this.width),
        maxWidth: c(this.maxWidth),
        minWidth: c(this.minWidth),
        height: c(this.height),
        maxHeight: c(this.maxHeight),
        minHeight: c(this.minHeight)
      };
    }
  },
  async mounted() {
    const t = await this.component();
    this.is = () => t;
  },
  methods: {
    async component() {
      let t = this.registryInstance.get(this.type);
      return t instanceof Promise ? t : (typeof t == "function" && (t = await t()), t.default ? t.default : t);
    }
  }
}), xt = (t, e) => {
  const i = t.__vccOpts || t;
  for (const [r, n] of e)
    i[r] = n;
  return i;
}, At = { class: "activity-indicator-content" }, $t = {
  key: 1,
  class: "activity-indicator-label"
};
function Ft(t, e, i, r, n, o) {
  return u(), s("div", {
    class: w(["activity-indicator", t.classes]),
    style: lt(t.style)
  }, [
    D("div", At, [
      t.is ? (u(), R(dt(t.is()), {
        key: 0,
        class: "mx-auto"
      })) : a("", !0),
      t.label ? (u(), s("div", $t, V(t.label), 1)) : a("", !0)
    ])
  ], 6);
}
const wt = /* @__PURE__ */ xt(St, [["render", Ft]]);
var Dt = Object.defineProperty, jt = (t, e, i) => e in t ? Dt(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i, kt = (t, e, i) => (jt(t, typeof e != "symbol" ? e + "" : e, i), i), E = function() {
  return E = Object.assign || function(t) {
    for (var e, i = 1, r = arguments.length; i < r; i++) {
      e = arguments[i];
      for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    }
    return t;
  }, E.apply(this, arguments);
};
function zt(t) {
  return t.toLowerCase();
}
var Ot = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g], Bt = /[^A-Z0-9]+/gi;
function Tt(t, e) {
  e === void 0 && (e = {});
  for (var i = e.splitRegexp, r = i === void 0 ? Ot : i, n = e.stripRegexp, o = n === void 0 ? Bt : n, l = e.transform, x = l === void 0 ? zt : l, m = e.delimiter, p = m === void 0 ? " " : m, b = z(z(t, r, "$1\0$2"), o, "\0"), A = 0, $ = b.length; b.charAt(A) === "\0"; )
    A++;
  for (; b.charAt($ - 1) === "\0"; )
    $--;
  return b.slice(A, $).split("\0").map(x).join(p);
}
function z(t, e, i) {
  return e instanceof RegExp ? t.replace(e, i) : e.reduce(function(r, n) {
    return r.replace(n, i);
  }, t);
}
function Lt(t, e) {
  return e === void 0 && (e = {}), Tt(t, E({ delimiter: "." }, e));
}
function C(t, e) {
  return e === void 0 && (e = {}), Lt(t, E({ delimiter: "-" }, e));
}
class It {
  constructor(e = {}) {
    kt(this, "components"), this.components = /* @__PURE__ */ new Map(), Object.entries(e).forEach(([i, r]) => {
      this.register(i, r);
    });
  }
  get(e) {
    const i = this.components.get(
      e = C(e)
    );
    if (i)
      return i;
    throw new Error(`"${e}" has not been registered yet!`);
  }
  register(e, i) {
    return typeof e == "object" ? (Object.entries(e).forEach(([r, n]) => {
      this.register(C(r), n);
    }), this) : (this.components.set(C(e), i), this);
  }
  remove(e) {
    return this.components.delete(C(e)), this;
  }
  reset() {
    return this.components = /* @__PURE__ */ new Map(), this;
  }
}
function Nt(t = {}) {
  return new It(t);
}
Nt();
const v = {};
function g(...t) {
  if (!t.length)
    return v;
  const [e, i] = t;
  return typeof e == "string" ? typeof v[e] < "u" ? v[e] : i : Array.isArray(e) ? e.reduce((r, n) => Object.assign(r, {
    [n]: v[n]
  }), {}) : Object.assign(v, ...t);
}
const Ht = S({
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
var Mt = typeof global == "object" && global && global.Object === Object && global;
const Rt = Mt;
var Vt = typeof self == "object" && self && self.Object === Object && self, Zt = Rt || Vt || Function("return this")();
const Ut = Zt;
var Pt = Ut.Symbol;
const f = Pt;
var W = Object.prototype, Wt = W.hasOwnProperty, Gt = W.toString, y = f ? f.toStringTag : void 0;
function Yt(t) {
  var e = Wt.call(t, y), i = t[y];
  try {
    t[y] = void 0;
    var r = !0;
  } catch {
  }
  var n = Gt.call(t);
  return r && (e ? t[y] = i : delete t[y]), n;
}
var qt = Object.prototype, _t = qt.toString;
function Jt(t) {
  return _t.call(t);
}
var Kt = "[object Null]", Qt = "[object Undefined]", O = f ? f.toStringTag : void 0;
function Xt(t) {
  return t == null ? t === void 0 ? Qt : Kt : O && O in Object(t) ? Yt(t) : Jt(t);
}
function te(t) {
  return t != null && typeof t == "object";
}
var ee = "[object Symbol]";
function ie(t) {
  return typeof t == "symbol" || te(t) && Xt(t) == ee;
}
function ne(t, e) {
  for (var i = -1, r = t == null ? 0 : t.length, n = Array(r); ++i < r; )
    n[i] = e(t[i], i, t);
  return n;
}
var re = Array.isArray;
const oe = re;
var ue = 1 / 0, B = f ? f.prototype : void 0, T = B ? B.toString : void 0;
function G(t) {
  if (typeof t == "string")
    return t;
  if (oe(t))
    return ne(t, G) + "";
  if (ie(t))
    return T ? T.call(t) : "";
  var e = t + "";
  return e == "0" && 1 / t == -ue ? "-0" : e;
}
function Y(t) {
  return t == null ? "" : G(t);
}
function se(t, e, i, r) {
  var n = -1, o = t == null ? 0 : t.length;
  for (r && o && (i = t[++n]); ++n < o; )
    i = e(i, t[n], n, t);
  return i;
}
function ae(t) {
  return function(e) {
    return t == null ? void 0 : t[e];
  };
}
var le = {
  \u00C0: "A",
  \u00C1: "A",
  \u00C2: "A",
  \u00C3: "A",
  \u00C4: "A",
  \u00C5: "A",
  \u00E0: "a",
  \u00E1: "a",
  \u00E2: "a",
  \u00E3: "a",
  \u00E4: "a",
  \u00E5: "a",
  \u00C7: "C",
  \u00E7: "c",
  \u00D0: "D",
  \u00F0: "d",
  \u00C8: "E",
  \u00C9: "E",
  \u00CA: "E",
  \u00CB: "E",
  \u00E8: "e",
  \u00E9: "e",
  \u00EA: "e",
  \u00EB: "e",
  \u00CC: "I",
  \u00CD: "I",
  \u00CE: "I",
  \u00CF: "I",
  \u00EC: "i",
  \u00ED: "i",
  \u00EE: "i",
  \u00EF: "i",
  \u00D1: "N",
  \u00F1: "n",
  \u00D2: "O",
  \u00D3: "O",
  \u00D4: "O",
  \u00D5: "O",
  \u00D6: "O",
  \u00D8: "O",
  \u00F2: "o",
  \u00F3: "o",
  \u00F4: "o",
  \u00F5: "o",
  \u00F6: "o",
  \u00F8: "o",
  \u00D9: "U",
  \u00DA: "U",
  \u00DB: "U",
  \u00DC: "U",
  \u00F9: "u",
  \u00FA: "u",
  \u00FB: "u",
  \u00FC: "u",
  \u00DD: "Y",
  \u00FD: "y",
  \u00FF: "y",
  \u00C6: "Ae",
  \u00E6: "ae",
  \u00DE: "Th",
  \u00FE: "th",
  \u00DF: "ss",
  \u0100: "A",
  \u0102: "A",
  \u0104: "A",
  \u0101: "a",
  \u0103: "a",
  \u0105: "a",
  \u0106: "C",
  \u0108: "C",
  \u010A: "C",
  \u010C: "C",
  \u0107: "c",
  \u0109: "c",
  \u010B: "c",
  \u010D: "c",
  \u010E: "D",
  \u0110: "D",
  \u010F: "d",
  \u0111: "d",
  \u0112: "E",
  \u0114: "E",
  \u0116: "E",
  \u0118: "E",
  \u011A: "E",
  \u0113: "e",
  \u0115: "e",
  \u0117: "e",
  \u0119: "e",
  \u011B: "e",
  \u011C: "G",
  \u011E: "G",
  \u0120: "G",
  \u0122: "G",
  \u011D: "g",
  \u011F: "g",
  \u0121: "g",
  \u0123: "g",
  \u0124: "H",
  \u0126: "H",
  \u0125: "h",
  \u0127: "h",
  \u0128: "I",
  \u012A: "I",
  \u012C: "I",
  \u012E: "I",
  \u0130: "I",
  \u0129: "i",
  \u012B: "i",
  \u012D: "i",
  \u012F: "i",
  \u0131: "i",
  \u0134: "J",
  \u0135: "j",
  \u0136: "K",
  \u0137: "k",
  \u0138: "k",
  \u0139: "L",
  \u013B: "L",
  \u013D: "L",
  \u013F: "L",
  \u0141: "L",
  \u013A: "l",
  \u013C: "l",
  \u013E: "l",
  \u0140: "l",
  \u0142: "l",
  \u0143: "N",
  \u0145: "N",
  \u0147: "N",
  \u014A: "N",
  \u0144: "n",
  \u0146: "n",
  \u0148: "n",
  \u014B: "n",
  \u014C: "O",
  \u014E: "O",
  \u0150: "O",
  \u014D: "o",
  \u014F: "o",
  \u0151: "o",
  \u0154: "R",
  \u0156: "R",
  \u0158: "R",
  \u0155: "r",
  \u0157: "r",
  \u0159: "r",
  \u015A: "S",
  \u015C: "S",
  \u015E: "S",
  \u0160: "S",
  \u015B: "s",
  \u015D: "s",
  \u015F: "s",
  \u0161: "s",
  \u0162: "T",
  \u0164: "T",
  \u0166: "T",
  \u0163: "t",
  \u0165: "t",
  \u0167: "t",
  \u0168: "U",
  \u016A: "U",
  \u016C: "U",
  \u016E: "U",
  \u0170: "U",
  \u0172: "U",
  \u0169: "u",
  \u016B: "u",
  \u016D: "u",
  \u016F: "u",
  \u0171: "u",
  \u0173: "u",
  \u0174: "W",
  \u0175: "w",
  \u0176: "Y",
  \u0177: "y",
  \u0178: "Y",
  \u0179: "Z",
  \u017B: "Z",
  \u017D: "Z",
  \u017A: "z",
  \u017C: "z",
  \u017E: "z",
  \u0132: "IJ",
  \u0133: "ij",
  \u0152: "Oe",
  \u0153: "oe",
  \u0149: "'n",
  \u017F: "s"
}, de = ae(le);
const ce = de;
var he = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, fe = "\\u0300-\\u036f", pe = "\\ufe20-\\ufe2f", ve = "\\u20d0-\\u20ff", ge = fe + pe + ve, ye = "[" + ge + "]", me = RegExp(ye, "g");
function be(t) {
  return t = Y(t), t && t.replace(he, ce).replace(me, "");
}
var Ce = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function Ee(t) {
  return t.match(Ce) || [];
}
var Se = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function xe(t) {
  return Se.test(t);
}
var q = "\\ud800-\\udfff", Ae = "\\u0300-\\u036f", $e = "\\ufe20-\\ufe2f", Fe = "\\u20d0-\\u20ff", we = Ae + $e + Fe, _ = "\\u2700-\\u27bf", J = "a-z\\xdf-\\xf6\\xf8-\\xff", De = "\\xac\\xb1\\xd7\\xf7", je = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", ke = "\\u2000-\\u206f", ze = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", K = "A-Z\\xc0-\\xd6\\xd8-\\xde", Oe = "\\ufe0e\\ufe0f", Q = De + je + ke + ze, X = "['\u2019]", L = "[" + Q + "]", Be = "[" + we + "]", tt = "\\d+", Te = "[" + _ + "]", et = "[" + J + "]", it = "[^" + q + Q + tt + _ + J + K + "]", Le = "\\ud83c[\\udffb-\\udfff]", Ie = "(?:" + Be + "|" + Le + ")", Ne = "[^" + q + "]", nt = "(?:\\ud83c[\\udde6-\\uddff]){2}", rt = "[\\ud800-\\udbff][\\udc00-\\udfff]", h = "[" + K + "]", He = "\\u200d", I = "(?:" + et + "|" + it + ")", Me = "(?:" + h + "|" + it + ")", N = "(?:" + X + "(?:d|ll|m|re|s|t|ve))?", H = "(?:" + X + "(?:D|LL|M|RE|S|T|VE))?", ot = Ie + "?", ut = "[" + Oe + "]?", Re = "(?:" + He + "(?:" + [Ne, nt, rt].join("|") + ")" + ut + ot + ")*", Ve = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Ze = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Ue = ut + ot + Re, Pe = "(?:" + [Te, nt, rt].join("|") + ")" + Ue, We = RegExp([
  h + "?" + et + "+" + N + "(?=" + [L, h, "$"].join("|") + ")",
  Me + "+" + H + "(?=" + [L, h + I, "$"].join("|") + ")",
  h + "?" + I + "+" + N,
  h + "+" + H,
  Ze,
  Ve,
  tt,
  Pe
].join("|"), "g");
function Ge(t) {
  return t.match(We) || [];
}
function Ye(t, e, i) {
  return t = Y(t), e = i ? void 0 : e, e === void 0 ? xe(t) ? Ge(t) : Ee(t) : t.match(e) || [];
}
var qe = "['\u2019]", _e = RegExp(qe, "g");
function Je(t) {
  return function(e) {
    return se(Ye(be(e).replace(_e, "")), t, "");
  };
}
var Ke = Je(function(t, e, i) {
  return t + (i ? "-" : "") + e.toLowerCase();
});
const st = Ke;
function F(t, e, i = "-") {
  const r = String(e).replace(new RegExp(`^${t}${i}?`), "");
  return [
    st(r),
    t
  ].filter((n) => !!n).join(i);
}
function M(t) {
  return !Array.isArray(t) && typeof t == "object";
}
function Qe(t) {
  return t === void 0;
}
const Xe = S({
  directives: {
    bindEvents: {
      beforeMount(t, e) {
        var i, r;
        (r = (i = e.instance) == null ? void 0 : i.bindEvents) == null || r.call(i, t);
      }
    }
  },
  mixins: [
    Ht
  ],
  inheritAttrs: !1,
  props: {
    activity: {
      type: Boolean,
      default: !1
    },
    animated: {
      type: Boolean,
      default: () => g("animated", !1)
    },
    nativeEvents: {
      type: Array,
      default() {
        return ["focus", "blur", "change", "click", "keypress", "keyup", "keydown", "progress", "paste"];
      }
    },
    defaultControlClass: {
      type: String,
      default: () => g("defaultControlClass", "form-control")
    },
    error: {
      type: [String, Array, Boolean],
      default: void 0
    },
    errors: {
      type: [Array, Object, Boolean],
      default() {
        return {};
      }
    },
    feedback: {
      type: [String, Array],
      default: void 0
    },
    group: {
      type: Boolean,
      default: () => g("group", !0)
    },
    helpText: {
      type: [Number, String],
      default: void 0
    },
    hideLabel: Boolean,
    indicator: {
      type: [String, Boolean],
      default: () => g("indicator", "spinner")
    },
    indicatorSize: {
      type: String,
      default: void 0
    },
    inline: Boolean,
    invalid: Boolean,
    label: {
      type: [Number, String],
      default: void 0
    },
    labelClass: {
      type: [Object, String],
      default: () => g("labelClass", "form-label")
    },
    modelValue: {
      default: void 0
    },
    pill: Boolean,
    plaintext: Boolean,
    size: {
      type: String,
      default: void 0
    },
    spacing: {
      type: String,
      default: void 0
    },
    valid: Boolean
  },
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
          ["class", this.controlClasses]
        ])
      );
    },
    controlClass() {
      return this.defaultControlClass;
    },
    controlSizeClass() {
      return F(this.size, this.controlClass);
    },
    formGroupClasses() {
      return Object.assign({
        [this.size && F(this.size, this.componentName)]: !!this.size,
        animated: this.animated,
        "default-empty": this.defaultEmpty,
        "form-group": this.group,
        [this.size && F(this.size, "form-group")]: !!this.size,
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
        [st(this.componentName)]: !0
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
      var i;
      e || (e = this.onInput);
      const r = t instanceof HTMLSelectElement ? (i = t.querySelectorAll("option")) == null ? void 0 : i[t.selectedIndex] : null;
      Qe(this.modelValue) ? r && (t.value = r == null ? void 0 : r.value) : t.value = this.modelValue, t.value && e(t.value), this.hasChanged = !!t.value, this.isEmpty = !t.value, t.addEventListener("focus", () => {
        this.hasFocus = !0;
      }), t.addEventListener("blur", () => {
        this.hasFocus = !1;
      }), t.addEventListener("input", () => {
        this.isEmpty = !1, this.hasChanged = !0;
      }), t.addEventListener(
        t.tagName === "SELECT" ? "change" : "input",
        () => e(t.value)
      ), this.nativeEvents.forEach((n) => {
        t.addEventListener(n, (o) => {
          this.$emit(n, o);
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
      return this.errors && M(this.errors) && (t = this.errors[this.$attrs.name || this.$attrs.id]), !t || Array.isArray(t) || M(t) ? t : [t];
    },
    shouldChangeOnFocus() {
      return !this.getInputField().readOnly;
    },
    onInput(t) {
      this.$emit("update:modelValue", t);
    }
  }
});
const ti = (t, e) => {
  const i = t.__vccOpts || t;
  for (const [r, n] of e)
    i[r] = n;
  return i;
}, ei = S({
  name: "TextareaField",
  directives: {
    Autogrow: Et
  },
  components: {
    ActivityIndicator: wt
  },
  mixins: [
    Xe
  ],
  props: {
    autogrow: [Number, String, Boolean]
  },
  data() {
    return {
      currentValue: this.value
    };
  }
}), ii = ["for", "innerHTML"], ni = { class: "form-group-inner" }, ri = ["innerHTML"], oi = ["innerHTML"];
function ui(t, e, i, r, n, o) {
  const l = ct("activity-indicator"), x = j("autogrow"), m = j("bind-events");
  return u(), s("div", {
    class: w(t.formGroupClasses)
  }, [
    d(t.$slots, "label", {}, () => [
      t.label || t.$attrs.placeholder ? (u(), s("label", {
        key: 0,
        ref: "label",
        for: t.id,
        class: w(t.labelClass),
        onClick: e[0] || (e[0] = (...p) => t.focus && t.focus(...p)),
        innerHTML: t.label || t.$attrs.placeholder
      }, null, 10, ii)) : a("", !0)
    ]),
    D("div", ni, [
      d(t.$slots, "control", {
        bindEvents: t.bindEvents,
        controlAttributes: t.controlAttributes,
        focus: t.focus
      }, () => [
        t.$slots.icon ? (u(), s("div", {
          key: 0,
          class: "form-group-inner-icon",
          onClick: e[1] || (e[1] = (...p) => t.focus && t.focus(...p))
        }, [
          d(t.$slots, "icon")
        ])) : a("", !0),
        ht(D("textarea", ft({ ref: "field" }, t.controlAttributes), null, 16), [
          [x, t.autogrow],
          [m]
        ])
      ]),
      d(t.$slots, "activity", {}, () => [
        pt(vt, { name: "textarea-field-fade" }, {
          default: gt(() => [
            t.activity ? (u(), R(l, {
              key: "activity",
              ref: "activity",
              type: t.indicator,
              size: t.indicatorSize || t.size
            }, null, 8, ["type", "size"])) : a("", !0)
          ]),
          _: 1
        })
      ])
    ]),
    d(t.$slots, "feedback", {}, () => [
      t.invalidFeedback ? (u(), s("div", {
        key: 0,
        class: "invalid-feedback",
        invalid: "",
        innerHTML: t.invalidFeedback
      }, null, 8, ri)) : t.validFeedback ? (u(), s("div", {
        key: 1,
        class: "valid-feedback",
        valid: "",
        innerHTML: t.validFeedback
      }, null, 8, oi)) : a("", !0)
    ]),
    d(t.$slots, "help", {}, () => [
      t.helpText ? (u(), s("small", {
        key: 0,
        ref: "help"
      }, V(t.helpText), 513)) : a("", !0)
    ])
  ], 2);
}
const ai = /* @__PURE__ */ ti(ei, [["render", ui]]);
export {
  ai as TextareaField
};
//# sourceMappingURL=textarea-field.js.map
