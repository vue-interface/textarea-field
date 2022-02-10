(function(h,_){typeof exports=="object"&&typeof module!="undefined"?_(exports):typeof define=="function"&&define.amd?define(["exports"],_):(h=typeof globalThis!="undefined"?globalThis:h||self,_(h.TextareaField={}))})(this,function(h){"use strict";const _=["font","fontFamily","fontKerning","fontSize","fontStretch","fontStyle","fontVariant","fontVariantLigatures","fontVariantCaps","fontVariantNumeric","fontVariantEastAsian","fontWeight","lineHeight","letterSpacing","padding","margin","textAlign","textAlignLast","textDecoration","textDecorationLine","textDecorationStyle","textDecorationColor","textDecorationSkipInk","textDecorationPosition","textIndent","textRendering","textShadow","textSizeAdjust","textOverflow","textTransform","width","wordBreak","wordSpacing","wordWrap"];function H(t){const e=document.createElement("textarea");return e.textContent=t,e.innerHTML}function C(t){return typeof t=="number"?t:!t||!t.replace?0:parseInt(t.replace(/[^\d.]+/g,""))||0}function w(t,e,r,n){t.innerHTML=H(e.value).replace(/(?:\r\n|\r|\n)/g,"<br />")+"&nbsp;";let i=Math.max(r,$(t));t.innerHTML.match(/(<br\s?\/?\>)+/)&&(i+=C(E(e,"lineHeight"))),e.style.height=(!n||i<n?i:n)+"px"}function $(t){return C(E(t,"height"))}function E(t,e){return window.getComputedStyle(t)[e]}function V(t,e){const r=document.createElement("div"),n=window.getComputedStyle(t);return r.style.position="absolute",r.style.zIndex=-1,r.style.visibility="hidden",t.parentNode.insertBefore(r,t.nextSibling),_.forEach(i=>r.style[i]=n[i]),r}function D(t,e,r){const n=$(t),i=V(t),o=e.value!==!0?e.value:0;t.addEventListener("input",s=>{w(i,s.target,n,o)}),w(i,t,n,o)}var M={inserted(t,e,r){D(t,e),t.resize=function(){r.context.$nextTick(()=>{t.dispatchEvent(new Event("input"))})}}};function v(t){return v=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(t)}function W(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function A(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function U(t,e,r){return e&&A(t.prototype,e),r&&A(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function x(t,e){return x=Object.setPrototypeOf||function(n,i){return n.__proto__=i,n},x(t,e)}function Z(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function y(t,e,r){return Z()?y=Reflect.construct:y=function(i,o,s){var c=[null];c.push.apply(c,o);var a=Function.bind.apply(i,c),u=new a;return s&&x(u,s.prototype),u},y.apply(null,arguments)}function T(t,e){return G(t)||q(t,e)||X(t,e)||K()}function G(t){if(Array.isArray(t))return t}function q(t,e){var r=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var n=[],i=!0,o=!1,s,c;try{for(r=r.call(t);!(i=(s=r.next()).done)&&(n.push(s.value),!(e&&n.length===e));i=!0);}catch(a){o=!0,c=a}finally{try{!i&&r.return!=null&&r.return()}finally{if(o)throw c}}return n}}function X(t,e){if(!!t){if(typeof t=="string")return F(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return F(t,e)}}function F(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function K(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var g=function(){return g=Object.assign||function(r){for(var n,i=1,o=arguments.length;i<o;i++){n=arguments[i];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=n[s])}return r},g.apply(this,arguments)};function Y(t){return t.toLowerCase()}var J=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],Q=/[^A-Z0-9]+/gi;function tt(t,e){e===void 0&&(e={});for(var r=e.splitRegexp,n=r===void 0?J:r,i=e.stripRegexp,o=i===void 0?Q:i,s=e.transform,c=s===void 0?Y:s,a=e.delimiter,u=a===void 0?" ":a,d=R(R(t,n,"$1\0$2"),o,"\0"),f=0,l=d.length;d.charAt(f)==="\0";)f++;for(;d.charAt(l-1)==="\0";)l--;return d.slice(f,l).split("\0").map(c).join(u)}function R(t,e,r){return e instanceof RegExp?t.replace(e,r):e.reduce(function(n,i){return n.replace(i,r)},t)}function et(t,e){return e===void 0&&(e={}),tt(t,g({delimiter:"."},e))}function m(t,e){return e===void 0&&(e={}),et(t,g({delimiter:"-"},e))}var k=function(){function t(){var e=this,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};W(this,t),this.components={},Object.entries(r).forEach(function(n){var i=T(n,2),o=i[0],s=i[1];e.register(o,s)})}return U(t,[{key:"validate",value:function(r){if(v(r)==="object"||typeof r=="function")return r;throw new Error("Invalid data type `".concat(v(r),"`. Should be type `object` or `function`."))}},{key:"get",value:function(r){var n=this.components[r=m(r)];if(n)return n;throw new Error('"'.concat(r,'" has not been registered yet!'))}},{key:"register",value:function(r,n){var i=this;return v(r)==="object"?(Object.entries(r).forEach(function(o){var s=T(o,2),c=s[0],a=s[1];i.register(m(c),a)}),this):(this.components[m(r)]=this.validate(n),this)}},{key:"remove",value:function(r){return delete this.components[m(r)],this}},{key:"reset",value:function(){return this.components={},this}}]),t}();function rt(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return y(k,e)}const P=rt();var nt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"activity-indicator",class:t.classes,style:t.style},[r("div",{staticClass:"activity-indicator-content"},[r(t.component,{tag:"component",staticClass:"mx-auto"}),t.label?r("div",{staticClass:"activity-indicator-label"},[t._v(" "+t._s(t.label)+" ")]):t._e()],1)])},it=[],Ct="";function O(t,e,r,n,i,o,s,c){var a=typeof t=="function"?t.options:t;e&&(a.render=e,a.staticRenderFns=r,a._compiled=!0),n&&(a.functional=!0),o&&(a._scopeId="data-v-"+o);var u;if(s?(u=function(l){l=l||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!l&&typeof __VUE_SSR_CONTEXT__!="undefined"&&(l=__VUE_SSR_CONTEXT__),i&&i.call(this,l),l&&l._registeredComponents&&l._registeredComponents.add(s)},a._ssrRegister=u):i&&(u=c?function(){i.call(this,(a.functional?this.parent:this).$root.$options.shadowRoot)}:i),u)if(a.functional){a._injectStyles=u;var d=a.render;a.render=function(St,B){return u.call(B),d(St,B)}}else{var f=a.beforeCreate;a.beforeCreate=f?[].concat(f,u):[u]}return{exports:t,options:a}}function p(t,e="px"){return t!=null&&t!==!1&&isFinite(t)?`${t}${e}`:t}const at={name:"ActivityIndicator",props:{absolute:Boolean,center:Boolean,label:String,size:{type:String,default:"md"},registry:{type:k,default(){return P}},type:{type:String,required:!0},height:[String,Number],maxHeight:[String,Number],minHeight:[String,Number],width:[String,Number],maxWidth:[String,Number],minWidth:[String,Number]},computed:{classes(){return{"activity-indicator-center":this.center,"activity-indicator-absolute":this.absolute,[this.size&&`activity-indicator-${this.size}`]:!!this.size}},style(){return{width:p(this.width),maxWidth:p(this.maxWidth),minWidth:p(this.minWidth),height:p(this.height),maxHeight:p(this.maxHeight),minHeight:p(this.minHeight)}},component(){return()=>{const t=P.get(this.type);return t instanceof Promise?t:typeof t=="function"?t():Promise.resolve(t)}}}},z={};var st=O(at,nt,it,!1,ot,null,null,null);function ot(t){for(let e in z)this[e]=z[e]}var lt=function(){return st.exports}(),wt="",$t="",Et="",At="",Tt="",Ft="",Rt="",kt="",Pt="",Ot="",zt="",Lt="",It="",jt="",ut={props:{dropShadow:[Boolean,String],dropShadowableClassPrefix:{type:String,default:"drop-shadow"},shadow:[Boolean,String],shadowableClassPrefix:{type:String,default:"shadow"}},computed:{shadowableClass(){const t=this.dropShadow===!0?"":this.dropShadow&&`-${this.dropShadow}`,e=this.shadow===!0?"":this.shadow&&`-${this.shadow}`;return{[`${this.dropShadowableClassPrefix}${t}`]:!!this.dropShadow,[`${this.shadowableClassPrefix}${e}`]:!!this.shadow}}}};/*! *****************************************************************************
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
  ***************************************************************************** */var b=function(){return b=Object.assign||function(e){for(var r,n=1,i=arguments.length;n<i;n++){r=arguments[n];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},b.apply(this,arguments)};function ct(t){return t.toLowerCase()}var dt=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],ft=/[^A-Z0-9]+/gi;function ht(t,e){e===void 0&&(e={});for(var r=e.splitRegexp,n=r===void 0?dt:r,i=e.stripRegexp,o=i===void 0?ft:i,s=e.transform,c=s===void 0?ct:s,a=e.delimiter,u=a===void 0?" ":a,d=L(L(t,n,"$1\0$2"),o,"\0"),f=0,l=d.length;d.charAt(f)==="\0";)f++;for(;d.charAt(l-1)==="\0";)l--;return d.slice(f,l).split("\0").map(c).join(u)}function L(t,e,r){return e instanceof RegExp?t.replace(e,r):e.reduce(function(n,i){return n.replace(i,r)},t)}function pt(t,e){return e===void 0&&(e={}),ht(t,b({delimiter:"."},e))}function I(t,e){return e===void 0&&(e={}),pt(t,b({delimiter:"-"},e))}function S(t,e,r="-"){const n=e.toString().replace(new RegExp(`^${t}${r}?`),"");return[I(n),t].filter(i=>!!i).join(r)}function j(t){return!Array.isArray(t)&&typeof t=="object"}var _t={directives:{bindEvents:{bind(t,e,r){if(t.addEventListener("focus",()=>{r.context.hasFocus=!0}),t.addEventListener("blur",()=>{r.context.hasFocus=!1}),t.addEventListener(t.tagName==="SELECT"?"change":"input",n=>{r.context.isEmpty=!t.value,r.context.currentValue=t.value}),r.context.hasChanged=!!t.value,r.context.bindEvents.forEach(n=>{t.addEventListener(n,i=>{r.context.$emit(n,i)})}),t.tagName==="SELECT"){const n=t.querySelector('[value=""]');n&&n.value===t.value&&(r.context.defaultEmpty=!0)}}}},mixins:[ut],inheritAttrs:!1,props:{activity:{type:Boolean,default:!1},bindEvents:{type:Array,default(){return["focus","blur","change","click","keypress","keyup","keydown","progress","paste"]}},componentName:{type:String,default(){return this.$options.name}},defaultControlClass:{type:String,default:"form-control"},defaultValue:{default:null},error:[Boolean,String],errors:{type:Object,default(){return{}}},feedback:[String,Array],group:{type:Boolean,default:!0},helpText:[Number,String],hideLabel:Boolean,indicator:{type:String,default:"spinner"},indicatorSize:String,inline:Boolean,invalid:Boolean,label:[Number,String],labelClass:{type:[Object,String],default:"form-label"},pill:Boolean,plaintext:Boolean,size:String,spacing:String,valid:Boolean,value:{default:null}},data(){return{currentValue:this.value||this.defaultValue,defaultEmpty:!1,hasChanged:!1,hasFocus:!1,isEmpty:!(this.value||this.defaultValue)}},computed:{id(){return this.$attrs.id||this.$attrs.name},controlAttributes(){return Object.keys(this.$attrs).concat([["id",this.id],["class",this.controlClasses]]).reduce((t,e)=>(Array.isArray(e)?t[e[0]]=e[1]:t[e]=this[e]||this.$attrs[e],t),{})},controlClass(){return this.defaultControlClass},controlSizeClass(){return S(this.size,this.controlClass)},formGroupClasses(){return{[I(this.componentName)]:!!this.componentName,[this.size&&S(this.size,this.componentName)]:!!this.size,"default-empty":this.defaultEmpty,"form-group":this.group,[this.size&&S(this.size,"form-group")]:!!this.size,"has-activity":this.activity,"has-changed":this.hasChanged,"has-focus":this.hasFocus,"has-icon":!!this.$slots.icon,"is-empty":this.isEmpty,"is-invalid":!!(this.invalid||this.invalidFeedback),"is-valid":!!(this.valid||this.validFeedback)}},controlClasses(){return Object.assign({[this.controlClass]:!!this.controlClass,[this.controlSizeClass]:!!this.controlSizeClass,"form-control-icon":!!this.$slots.icon,"is-valid":!!(this.valid||this.validFeedback),"is-invalid":!!(this.invalid||this.invalidFeedback),[this.pillClasses]:this.pill,[this.plaintextClass]:this.plaintext,[this.spacing]:!!this.spacing},this.shadowableClass)},hasDefaultSlot(){return!!this.$slots.default},invalidFeedback(){if(this.error)return this.error;const t=this.getFieldErrors();return Array.isArray(t)?t.filter(e=>e&&typeof e=="string").join("<br>"):t},pillClasses(){return"rounded rounded-pill"},plaintextClass(){return"form-control-plaintext"},validFeedback(){return Array.isArray(this.feedback)?this.feedback.join("<br>"):this.feedback}},watch:{hasFocus(){this.getInputField().readOnly||(this.hasChanged=!0)},value(t){this.currentValue=t},currentValue(){this.hasChanged=!0}},mounted(){this.value===null&&this.defaultValue!==null&&this.$emit("input",this.defaultValue)},methods:{blur(){this.getInputField()&&this.getInputField().blur()},focus(){this.getInputField()&&this.getInputField().focus()},getInputField(){return this.$el.querySelector(".form-control, input, select, textarea")},getFieldErrors(){let t=this.error||this.errors;return j(this.errors)&&(t=this.errors[this.$attrs.name||this.$attrs.id]),!t||Array.isArray(t)||j(t)?t:[t]},onInput(t){this.$emit("input",t.target.value),this.$emit("update:value",t.target.value)}}},vt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:t.formGroupClasses},[t._t("label",function(){return[t.label||t.$attrs.placeholder?r("label",{ref:"label",class:t.labelClass,attrs:{for:t.id},domProps:{innerHTML:t._s(t.label||t.$attrs.placeholder)},on:{click:t.focus}}):t._e()]}),r("div",{staticClass:"form-group-inner"},[t._t("control",function(){return[t.$slots.icon?r("div",{staticClass:"form-group-inner-icon",on:{click:t.focus}},[t._t("icon")],2):t._e(),r("textarea",t._b({directives:[{name:"autogrow",rawName:"v-autogrow",value:t.autogrow,expression:"autogrow"},{name:"bind-events",rawName:"v-bind-events"}],ref:"field",domProps:{value:t.currentValue},on:{input:t.onInput}},"textarea",t.controlAttributes,!1))]}),t._t("activity",function(){return[r("transition",{attrs:{name:"textarea-field-fade"}},[t.activity?r("activity-indicator",{key:"activity",ref:"activity",attrs:{type:t.indicator,size:t.indicatorSize||t.size}}):t._e()],1)]})],2),t._t("feedback",function(){return[t.invalidFeedback?r("div",{staticClass:"invalid-feedback",attrs:{invalid:""},domProps:{innerHTML:t._s(t.invalidFeedback)}}):t.validFeedback?r("div",{staticClass:"valid-feedback",attrs:{valid:""},domProps:{innerHTML:t._s(t.validFeedback)}}):t._e()]}),t._t("help",function(){return[t.helpText?r("small",{ref:"help"},[t._v(" "+t._s(t.helpText)+" ")]):t._e()]})],2)},yt=[],Nt="";const gt={name:"TextareaField",directives:{Autogrow:M},components:{ActivityIndicator:lt},mixins:[_t],props:{autogrow:[Number,String,Boolean]}},N={};var mt=O(gt,vt,yt,!1,bt,null,null,null);function bt(t){for(let e in N)this[e]=N[e]}var xt=function(){return mt.exports}();h.TextareaField=xt,Object.defineProperty(h,"__esModule",{value:!0}),h[Symbol.toStringTag]="Module"});
