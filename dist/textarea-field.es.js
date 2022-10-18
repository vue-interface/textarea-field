import { openBlock as a, createElementBlock as d, normalizeClass as $, normalizeStyle as D, createElementVNode as E, createBlock as I, resolveDynamicComponent as M, createCommentVNode as p, toDisplayString as O, resolveComponent as V, resolveDirective as x, renderSlot as g, withDirectives as W, mergeProps as Z, createVNode as G, Transition as q, withCtx as U } from "vue";
const X = ["font", "fontFamily", "fontKerning", "fontSize", "fontStretch", "fontStyle", "fontVariant", "fontVariantLigatures", "fontVariantCaps", "fontVariantNumeric", "fontVariantEastAsian", "fontWeight", "lineHeight", "letterSpacing", "padding", "margin", "textAlign", "textAlignLast", "textDecoration", "textDecorationLine", "textDecorationStyle", "textDecorationColor", "textDecorationSkipInk", "textDecorationPosition", "textIndent", "textRendering", "textShadow", "textSizeAdjust", "textOverflow", "textTransform", "width", "wordBreak", "wordSpacing", "wordWrap"];
function K(e) {
  const t = document.createElement("textarea");
  return t.textContent = e, t.innerHTML;
}
function B(e) {
  return typeof e == "number" ? e : !e || !e.replace ? 0 : parseInt(e.replace(/[^\d.]+/g, "")) || 0;
}
function A(e, t, i, n) {
  e.innerHTML = K(t.value).replace(/(?:\r\n|\r|\n)/g, "<br />") + "&nbsp;";
  let r = Math.max(i, j(e));
  e.innerHTML.match(/(<br\s?\/?\>)+/) && (r += B(N(t, "lineHeight"))), t.style.height = (!n || r < n ? r : n) + "px";
}
function j(e) {
  return B(N(e, "height"));
}
function N(e, t) {
  return window.getComputedStyle(e)[t];
}
function Y(e, t) {
  const i = document.createElement("div"), n = window.getComputedStyle(e);
  return i.style.position = "absolute", i.style.zIndex = -1, i.style.visibility = "hidden", e.parentNode.insertBefore(i, e.nextSibling), X.forEach((r) => i.style[r] = n[r]), i;
}
function J(e, t, i) {
  const n = j(e), r = Y(e), s = t.value !== !0 ? t.value : 0;
  e.addEventListener("input", (o) => {
    A(r, o.target, n, s);
  }), A(r, e, n, s);
}
const Q = {
  mounted(e, t, i) {
    t.value !== !1 && (J(e, t), e.resize = function() {
      i.context.$nextTick(() => {
        e.dispatchEvent(new Event("input"));
      });
    });
  }
};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var S = function() {
  return S = Object.assign || function(t) {
    for (var i, n = 1, r = arguments.length; n < r; n++) {
      i = arguments[n];
      for (var s in i)
        Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s]);
    }
    return t;
  }, S.apply(this, arguments);
};
function ee(e) {
  return e.toLowerCase();
}
var te = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g], ie = /[^A-Z0-9]+/gi;
function ne(e, t) {
  t === void 0 && (t = {});
  for (var i = t.splitRegexp, n = i === void 0 ? te : i, r = t.stripRegexp, s = r === void 0 ? ie : r, o = t.transform, m = o === void 0 ? ee : o, c = t.delimiter, l = c === void 0 ? " " : c, u = F(F(e, n, "$1\0$2"), s, "\0"), h = 0, f = u.length; u.charAt(h) === "\0"; )
    h++;
  for (; u.charAt(f - 1) === "\0"; )
    f--;
  return u.slice(h, f).split("\0").map(m).join(l);
}
function F(e, t, i) {
  return t instanceof RegExp ? e.replace(t, i) : t.reduce(function(n, r) {
    return n.replace(r, i);
  }, e);
}
function re(e, t) {
  return t === void 0 && (t = {}), ne(e, S({
    delimiter: "."
  }, t));
}
function b(e, t) {
  return t === void 0 && (t = {}), re(e, S({
    delimiter: "-"
  }, t));
}
class R {
  constructor(t = {}) {
    this.components = /* @__PURE__ */ new Map(), Object.entries(t).forEach(([i, n]) => {
      this.register(i, n);
    });
  }
  get(t) {
    const i = this.components.get(t = b(t));
    if (i)
      return i;
    throw new Error(`"${t}" has not been registered yet!`);
  }
  register(t, i) {
    return typeof t == "object" ? (Object.entries(t).forEach(([n, r]) => {
      this.register(b(n), r);
    }), this) : (this.components.set(b(t), i), this);
  }
  remove(t) {
    return this.components.delete(b(t)), this;
  }
  reset() {
    return this.components = /* @__PURE__ */ new Map(), this;
  }
}
function se(...e) {
  return new R(...e);
}
const k = se();
const H = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [n, r] of t)
    i[n] = r;
  return i;
};
function v(e, t = "px") {
  return e != null && e !== !1 && isFinite(e) ? `${e}${t}` : e;
}
const ae = {
  name: "ActivityIndicator",
  props: {
    absolute: Boolean,
    center: Boolean,
    label: String,
    size: {
      type: String,
      default: "md"
    },
    registry: {
      type: R,
      default() {
        return k;
      }
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
  async mounted() {
    const e = await this.component();
    this.is = () => e;
  },
  methods: {
    async component() {
      let e = k.get(this.type);
      return e instanceof Promise ? e : (typeof e == "function" && (e = await e()), e.default ? e.default : e);
    }
  }
}, oe = { class: "activity-indicator-content" }, le = {
  key: 1,
  class: "activity-indicator-label"
};
function ue(e, t, i, n, r, s) {
  return a(), d("div", {
    class: $(["activity-indicator", s.classes]),
    style: D(s.style)
  }, [
    E("div", oe, [
      e.is ? (a(), I(M(e.is()), {
        key: 0,
        class: "mx-auto"
      })) : p("", !0),
      i.label ? (a(), d("div", le, O(i.label), 1)) : p("", !0)
    ])
  ], 6);
}
const de = /* @__PURE__ */ H(ae, [["render", ue]]);
const y = {};
function _(...e) {
  if (!e.length)
    return y;
  const [t, i] = e;
  return typeof t == "string" ? typeof y[t] < "u" ? y[t] : i : Array.isArray(t) ? t.reduce((n, r) => Object.assign(n, {
    [r]: y[r]
  }), {}) : Object.assign(y, ...e);
}
var ce = {
  props: {
    dropShadow: [Boolean, String],
    dropShadowableClassPrefix: {
      type: String,
      default: "drop-shadow"
    },
    shadow: [Boolean, String],
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
}, C = function() {
  return C = Object.assign || function(t) {
    for (var i, n = 1, r = arguments.length; n < r; n++) {
      i = arguments[n];
      for (var s in i)
        Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s]);
    }
    return t;
  }, C.apply(this, arguments);
};
function he(e) {
  return e.toLowerCase();
}
var fe = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g], pe = /[^A-Z0-9]+/gi;
function ge(e, t) {
  t === void 0 && (t = {});
  for (var i = t.splitRegexp, n = i === void 0 ? fe : i, r = t.stripRegexp, s = r === void 0 ? pe : r, o = t.transform, m = o === void 0 ? he : o, c = t.delimiter, l = c === void 0 ? " " : c, u = T(T(e, n, "$1\0$2"), s, "\0"), h = 0, f = u.length; u.charAt(h) === "\0"; )
    h++;
  for (; u.charAt(f - 1) === "\0"; )
    f--;
  return u.slice(h, f).split("\0").map(m).join(l);
}
function T(e, t, i) {
  return t instanceof RegExp ? e.replace(t, i) : t.reduce(function(n, r) {
    return n.replace(r, i);
  }, e);
}
function ve(e, t) {
  return t === void 0 && (t = {}), ge(e, C({
    delimiter: "."
  }, t));
}
function P(e, t) {
  return t === void 0 && (t = {}), ve(e, C({
    delimiter: "-"
  }, t));
}
function w(e, t, i = "-") {
  const n = t.toString().replace(new RegExp(`^${e}${i}?`), "");
  return [P(n), e].filter((r) => !!r).join(i);
}
function z(e) {
  return !Array.isArray(e) && typeof e == "object";
}
function L(e) {
  return e === void 0;
}
const me = {
  directives: {
    bindEvents: {
      beforeMount(e, t, i) {
        t.instance.bindEvents(e);
      }
    }
  },
  mixins: [ce],
  inheritAttrs: !1,
  props: {
    activity: {
      type: Boolean,
      default: !1
    },
    animated: {
      type: Boolean,
      default: () => _("animated", !1)
    },
    nativeEvents: {
      type: Array,
      default() {
        return ["focus", "blur", "change", "click", "keypress", "keyup", "keydown", "progress", "paste"];
      }
    },
    defaultControlClass: {
      type: String,
      default: () => _("defaultControlClass", "form-control")
    },
    error: [String, Array, Boolean],
    errors: {
      type: [Array, Object, Boolean],
      default() {
        return {};
      }
    },
    feedback: [String, Array],
    group: {
      type: Boolean,
      default: () => _("group", !0)
    },
    helpText: [Number, String],
    hideLabel: Boolean,
    indicator: {
      type: String,
      default: () => _("indicator", "spinner")
    },
    indicatorSize: String,
    inline: Boolean,
    invalid: Boolean,
    label: [Number, String],
    labelClass: {
      type: [Object, String],
      default: () => _("labelClass", "form-label")
    },
    modelValue: {
      default: void 0
    },
    pill: Boolean,
    plaintext: Boolean,
    size: String,
    spacing: String,
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
      return Object.fromEntries(Object.entries(this.$attrs).concat([["id", this.id], ["class", this.controlClasses]]));
    },
    controlClass() {
      return this.defaultControlClass;
    },
    controlSizeClass() {
      return w(this.size, this.controlClass);
    },
    formGroupClasses() {
      return {
        [P(this.componentName)]: !!this.componentName,
        [this.size && w(this.size, this.componentName)]: !!this.size,
        animated: this.animated,
        "default-empty": this.defaultEmpty,
        "form-group": this.group,
        [this.size && w(this.size, "form-group")]: !!this.size,
        "has-activity": this.activity,
        "has-changed": this.hasChanged,
        "has-focus": this.hasFocus,
        "has-icon": !!this.$slots.icon,
        "is-empty": this.isEmpty,
        "is-invalid": !!(this.invalid || this.invalidFeedback),
        "is-valid": !!(this.valid || this.validFeedback),
        [this.$attrs.class]: !!this.$attrs.class,
        [this.$attrs.id]: !!this.$attrs.id
      };
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
      t || (t = this.onInput);
      const i = e.querySelectorAll("option")[e.selectedIndex];
      L(this.modelValue) ? L(i) || (e.value = i.value) : e.value = this.modelValue, e.value && t(e.value), this.hasChanged = !!e.value, this.isEmpty = !e.value, e.addEventListener("focus", () => {
        this.hasFocus = !0;
      }), e.addEventListener("blur", () => {
        this.hasFocus = !1;
      }), e.addEventListener("input", (n) => {
        this.isEmpty = !1, this.hasChanged = !0;
      }), e.addEventListener(e.tagName === "SELECT" ? "change" : "input", () => t(e.value)), this.nativeEvents.forEach((n) => {
        e.addEventListener(n, (r) => {
          this.$emit(n, r);
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
      return this.$el.querySelector(".form-control, input, select, textarea");
    },
    getFieldErrors() {
      let e = this.error || this.errors;
      return this.errors && z(this.errors) && (e = this.errors[this.$attrs.name || this.$attrs.id]), !e || Array.isArray(e) || z(e) ? e : [e];
    },
    shouldChangeOnFocus() {
      return !this.getInputField().readOnly;
    },
    onInput(e) {
      this.$emit("update:modelValue", e);
    }
  }
};
const ye = {
  name: "TextareaField",
  directives: {
    Autogrow: Q
  },
  components: {
    ActivityIndicator: de
  },
  mixins: [
    me
  ],
  props: {
    autogrow: [Number, String, Boolean]
  },
  data() {
    return {
      currentValue: this.value
    };
  }
}, _e = ["for", "innerHTML"], be = { class: "form-group-inner" }, Se = ["value"], Ce = ["innerHTML"], we = ["innerHTML"];
function $e(e, t, i, n, r, s) {
  const o = V("activity-indicator"), m = x("autogrow"), c = x("bind-events");
  return a(), d("div", {
    class: $(e.formGroupClasses)
  }, [
    g(e.$slots, "label", {}, () => [
      e.label || e.$attrs.placeholder ? (a(), d("label", {
        key: 0,
        ref: "label",
        for: e.id,
        class: $(e.labelClass),
        onClick: t[0] || (t[0] = (...l) => e.focus && e.focus(...l)),
        innerHTML: e.label || e.$attrs.placeholder
      }, null, 10, _e)) : p("", !0)
    ]),
    E("div", be, [
      g(e.$slots, "control", {}, () => [
        e.$slots.icon ? (a(), d("div", {
          key: 0,
          class: "form-group-inner-icon",
          onClick: t[1] || (t[1] = (...l) => e.focus && e.focus(...l))
        }, [
          g(e.$slots, "icon")
        ])) : p("", !0),
        W(E("textarea", Z({ ref: "field" }, e.controlAttributes, {
          value: r.currentValue,
          onInput: t[2] || (t[2] = (...l) => e.onInput && e.onInput(...l))
        }), null, 16, Se), [
          [m, i.autogrow],
          [c]
        ])
      ]),
      g(e.$slots, "activity", {}, () => [
        G(q, { name: "textarea-field-fade" }, {
          default: U(() => [
            e.activity ? (a(), I(o, {
              key: "activity",
              ref: "activity",
              type: e.indicator,
              size: e.indicatorSize || e.size
            }, null, 8, ["type", "size"])) : p("", !0)
          ]),
          _: 1
        })
      ])
    ]),
    g(e.$slots, "feedback", {}, () => [
      e.invalidFeedback ? (a(), d("div", {
        key: 0,
        class: "invalid-feedback",
        invalid: "",
        innerHTML: e.invalidFeedback
      }, null, 8, Ce)) : e.validFeedback ? (a(), d("div", {
        key: 1,
        class: "valid-feedback",
        valid: "",
        innerHTML: e.validFeedback
      }, null, 8, we)) : p("", !0)
    ]),
    g(e.$slots, "help", {}, () => [
      e.helpText ? (a(), d("small", {
        key: 0,
        ref: "help"
      }, O(e.helpText), 513)) : p("", !0)
    ])
  ], 2);
}
const xe = /* @__PURE__ */ H(ye, [["render", $e]]);
export {
  xe as TextareaField
};
