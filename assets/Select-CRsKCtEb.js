import{p as nn,bk as Ge,C as be,E as pn,a as me,h as a,aq as tn,as as Zn,d as on,bl as Oe,av as bn,bm as ln,b5 as Je,aF as Qn,a3 as mn,f as R,U as k,i as J,g as oe,ab as Xe,V as wn,ay as sn,b9 as Xn,ax as et,a0 as nt,u as rn,ac as xn,b as Re,a7 as j,D as yn,aG as dn,c as an,e as _,v as P,bn as tt,bo as ot,j as pe,b6 as Ie,aI as Be,bp as it,bq as lt,at as Fe,br as rt,I as Ye,bs as un,K as at,bt as st,aJ as dt,Z as ut,$ as ct,a1 as ht,a2 as en,aB as ft,aT as vt,aC as cn,a5 as hn,a4 as gt,a6 as pt,bu as bt,aD as mt,aH as wt,bv as xt,a8 as te}from"./index-Df6-4-0p.js";import{a as yt}from"./Suffix-CUdaJbTt.js";import{e as Ct,V as St,_ as Ft}from"./Empty-DIg0Ic5G.js";import{u as Ot}from"./use-locale-Da3ioVtO.js";function Cn(e,r){r&&(nn(()=>{const{value:s}=e;s&&Ge.registerHandler(s,r)}),be(e,(s,d)=>{d&&Ge.unregisterHandler(d)},{deep:!1}),pn(()=>{const{value:s}=e;s&&Ge.unregisterHandler(s)}))}function fn(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}function Ze(e){const r=e.filter(s=>s!==void 0);if(r.length!==0)return r.length===1?r[0]:s=>{e.forEach(d=>{d&&d(s)})}}const Rt=me({name:"Checkmark",render(){return a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},a("g",{fill:"none"},a("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),Tt=me({props:{onFocus:Function,onBlur:Function},setup(e){return()=>a("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}}),Pt={height:"calc(var(--n-option-height) * 7.6)",paddingTiny:"4px 0",paddingSmall:"4px 0",paddingMedium:"4px 0",paddingLarge:"4px 0",paddingHuge:"4px 0",optionPaddingTiny:"0 12px",optionPaddingSmall:"0 12px",optionPaddingMedium:"0 12px",optionPaddingLarge:"0 12px",optionPaddingHuge:"0 12px",loadingSize:"18px"};function Mt(e){const{borderRadius:r,popoverColor:s,textColor3:d,dividerColor:f,textColor2:p,primaryColorPressed:h,textColorDisabled:l,primaryColor:S,opacityDisabled:M,hoverColor:T,fontSizeTiny:x,fontSizeSmall:$,fontSizeMedium:F,fontSizeLarge:v,fontSizeHuge:z,heightTiny:H,heightSmall:O,heightMedium:C,heightLarge:I,heightHuge:V}=e;return Object.assign(Object.assign({},Pt),{optionFontSizeTiny:x,optionFontSizeSmall:$,optionFontSizeMedium:F,optionFontSizeLarge:v,optionFontSizeHuge:z,optionHeightTiny:H,optionHeightSmall:O,optionHeightMedium:C,optionHeightLarge:I,optionHeightHuge:V,borderRadius:r,color:s,groupHeaderTextColor:d,actionDividerColor:f,optionTextColor:p,optionTextColorPressed:h,optionTextColorDisabled:l,optionTextColorActive:S,optionOpacityDisabled:M,optionCheckColor:S,optionColorPending:T,optionColorActive:"rgba(0, 0, 0, 0)",optionColorActivePending:T,actionTextColor:p,loadingColor:S})}const Sn=tn({name:"InternalSelectMenu",common:on,peers:{Scrollbar:Zn,Empty:Ct},self:Mt}),vn=me({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:r,labelFieldRef:s,nodePropsRef:d}=bn(ln);return{labelField:s,nodeProps:d,renderLabel:e,renderOption:r}},render(){const{clsPrefix:e,renderLabel:r,renderOption:s,nodeProps:d,tmNode:{rawNode:f}}=this,p=d==null?void 0:d(f),h=r?r(f,!1):Oe(f[this.labelField],f,!1),l=a("div",Object.assign({},p,{class:[`${e}-base-select-group-header`,p==null?void 0:p.class]}),h);return f.render?f.render({node:l,option:f}):s?s({node:l,option:f,selected:!1}):l}});function zt(e,r){return a(mn,{name:"fade-in-scale-up-transition"},{default:()=>e?a(Qn,{clsPrefix:r,class:`${r}-base-select-option__check`},{default:()=>a(Rt)}):null})}const gn=me({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:r,pendingTmNodeRef:s,multipleRef:d,valueSetRef:f,renderLabelRef:p,renderOptionRef:h,labelFieldRef:l,valueFieldRef:S,showCheckmarkRef:M,nodePropsRef:T,handleOptionClick:x,handleOptionMouseEnter:$}=bn(ln),F=Je(()=>{const{value:O}=s;return O?e.tmNode.key===O.key:!1});function v(O){const{tmNode:C}=e;C.disabled||x(O,C)}function z(O){const{tmNode:C}=e;C.disabled||$(O,C)}function H(O){const{tmNode:C}=e,{value:I}=F;C.disabled||I||$(O,C)}return{multiple:d,isGrouped:Je(()=>{const{tmNode:O}=e,{parent:C}=O;return C&&C.rawNode.type==="group"}),showCheckmark:M,nodeProps:T,isPending:F,isSelected:Je(()=>{const{value:O}=r,{value:C}=d;if(O===null)return!1;const I=e.tmNode.rawNode[S.value];if(C){const{value:V}=f;return V.has(I)}else return O===I}),labelField:l,renderLabel:p,renderOption:h,handleMouseMove:H,handleMouseEnter:z,handleClick:v}},render(){const{clsPrefix:e,tmNode:{rawNode:r},isSelected:s,isPending:d,isGrouped:f,showCheckmark:p,nodeProps:h,renderOption:l,renderLabel:S,handleClick:M,handleMouseEnter:T,handleMouseMove:x}=this,$=zt(s,e),F=S?[S(r,s),p&&$]:[Oe(r[this.labelField],r,s),p&&$],v=h==null?void 0:h(r),z=a("div",Object.assign({},v,{class:[`${e}-base-select-option`,r.class,v==null?void 0:v.class,{[`${e}-base-select-option--disabled`]:r.disabled,[`${e}-base-select-option--selected`]:s,[`${e}-base-select-option--grouped`]:f,[`${e}-base-select-option--pending`]:d,[`${e}-base-select-option--show-checkmark`]:p}],style:[(v==null?void 0:v.style)||"",r.style||""],onClick:Ze([M,v==null?void 0:v.onClick]),onMouseenter:Ze([T,v==null?void 0:v.onMouseenter]),onMousemove:Ze([x,v==null?void 0:v.onMousemove])}),a("div",{class:`${e}-base-select-option__content`},F));return r.render?r.render({node:z,option:r,selected:s}):l?l({node:z,option:r,selected:s}):z}}),kt=R("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[R("scrollbar",`
 max-height: var(--n-height);
 `),R("virtual-list",`
 max-height: var(--n-height);
 `),R("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[k("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),R("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),R("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),k("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),k("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),k("header",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),k("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),R("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),R("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[J("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),oe("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),oe("&:active",`
 color: var(--n-option-text-color-pressed);
 `),J("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),J("pending",[oe("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),J("selected",`
 color: var(--n-option-text-color-active);
 `,[oe("&::before",`
 background-color: var(--n-option-color-active);
 `),J("pending",[oe("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),J("disabled",`
 cursor: not-allowed;
 `,[Xe("selected",`
 color: var(--n-option-text-color-disabled);
 `),J("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),k("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[wn({enterScale:"0.5"})])])]),_t=me({name:"InternalSelectMenu",props:Object.assign(Object.assign({},Re.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,scrollbarProps:Object,onToggle:Function}),setup(e){const{mergedClsPrefixRef:r,mergedRtlRef:s,mergedComponentPropsRef:d}=rn(e),f=xn("InternalSelectMenu",s,r),p=Re("InternalSelectMenu","-internal-select-menu",kt,Sn,e,j(e,"clsPrefix")),h=P(null),l=P(null),S=P(null),M=_(()=>e.treeMate.getFlattenedNodes()),T=_(()=>tt(M.value)),x=P(null);function $(){const{treeMate:o}=e;let c=null;const{value:A}=e;A===null?c=o.getFirstAvailableNode():(e.multiple?c=o.getNode((A||[])[(A||[]).length-1]):c=o.getNode(A),(!c||c.disabled)&&(c=o.getFirstAvailableNode())),X(c||null)}function F(){const{value:o}=x;o&&!e.treeMate.getNode(o.key)&&(x.value=null)}let v;be(()=>e.show,o=>{o?v=be(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?$():F(),yn(le)):F()},{immediate:!0}):v==null||v()},{immediate:!0}),pn(()=>{v==null||v()});const z=_(()=>ot(p.value.self[pe("optionHeight",e.size)])),H=_(()=>Ie(p.value.self[pe("padding",e.size)])),O=_(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),C=_(()=>{const o=M.value;return o&&o.length===0}),I=_(()=>{var o,c;return(c=(o=d==null?void 0:d.value)===null||o===void 0?void 0:o.Select)===null||c===void 0?void 0:c.renderEmpty});function V(o){const{onToggle:c}=e;c&&c(o)}function E(o){const{onScroll:c}=e;c&&c(o)}function B(o){var c;(c=S.value)===null||c===void 0||c.sync(),E(o)}function Y(){var o;(o=S.value)===null||o===void 0||o.sync()}function K(){const{value:o}=x;return o||null}function ie(o,c){c.disabled||X(c,!1)}function ae(o,c){c.disabled||V(c)}function W(o){var c;Be(o,"action")||(c=e.onKeyup)===null||c===void 0||c.call(e,o)}function U(o){var c;Be(o,"action")||(c=e.onKeydown)===null||c===void 0||c.call(e,o)}function D(o){var c;(c=e.onMousedown)===null||c===void 0||c.call(e,o),!e.focusable&&o.preventDefault()}function ce(){const{value:o}=x;o&&X(o.getNext({loop:!0}),!0)}function we(){const{value:o}=x;o&&X(o.getPrev({loop:!0}),!0)}function X(o,c=!1){x.value=o,c&&le()}function le(){var o,c;const A=x.value;if(!A)return;const ee=T.value(A.key);ee!==null&&(e.virtualScroll?(o=l.value)===null||o===void 0||o.scrollTo({index:ee}):(c=S.value)===null||c===void 0||c.scrollTo({index:ee,elSize:z.value}))}function Te(o){var c,A;!((c=h.value)===null||c===void 0)&&c.contains(o.target)&&((A=e.onFocus)===null||A===void 0||A.call(e,o))}function se(o){var c,A;!((c=h.value)===null||c===void 0)&&c.contains(o.relatedTarget)||(A=e.onBlur)===null||A===void 0||A.call(e,o)}dn(ln,{handleOptionMouseEnter:ie,handleOptionClick:ae,valueSetRef:O,pendingTmNodeRef:x,nodePropsRef:j(e,"nodeProps"),showCheckmarkRef:j(e,"showCheckmark"),multipleRef:j(e,"multiple"),valueRef:j(e,"value"),renderLabelRef:j(e,"renderLabel"),renderOptionRef:j(e,"renderOption"),labelFieldRef:j(e,"labelField"),valueFieldRef:j(e,"valueField")}),dn(it,h),nn(()=>{const{value:o}=S;o&&o.sync()});const he=_(()=>{const{size:o}=e,{common:{cubicBezierEaseInOut:c},self:{height:A,borderRadius:ee,color:xe,groupHeaderTextColor:re,actionDividerColor:G,optionTextColorPressed:ye,optionTextColor:de,optionTextColorDisabled:Pe,optionTextColorActive:Me,optionOpacityDisabled:ze,optionCheckColor:ve,actionTextColor:ge,optionColorPending:ke,optionColorActive:_e,loadingColor:$e,loadingSize:Ce,optionColorActivePending:Se,[pe("optionFontSize",o)]:Q,[pe("optionHeight",o)]:t,[pe("optionPadding",o)]:u}}=p.value;return{"--n-height":A,"--n-action-divider-color":G,"--n-action-text-color":ge,"--n-bezier":c,"--n-border-radius":ee,"--n-color":xe,"--n-option-font-size":Q,"--n-group-header-text-color":re,"--n-option-check-color":ve,"--n-option-color-pending":ke,"--n-option-color-active":_e,"--n-option-color-active-pending":Se,"--n-option-height":t,"--n-option-opacity-disabled":ze,"--n-option-text-color":de,"--n-option-text-color-active":Me,"--n-option-text-color-disabled":Pe,"--n-option-text-color-pressed":ye,"--n-option-padding":u,"--n-option-padding-left":Ie(u,"left"),"--n-option-padding-right":Ie(u,"right"),"--n-loading-color":$e,"--n-loading-size":Ce}}),{inlineThemeDisabled:q}=e,Z=q?an("internal-select-menu",_(()=>e.size[0]),he,e):void 0,fe={selfRef:h,next:ce,prev:we,getPendingTmNode:K};return Cn(h,e.onResize),Object.assign({mergedTheme:p,mergedClsPrefix:r,rtlEnabled:f,virtualListRef:l,scrollbarRef:S,itemSize:z,padding:H,flattenedNodes:M,empty:C,mergedRenderEmpty:I,virtualListContainer(){const{value:o}=l;return o==null?void 0:o.listElRef},virtualListContent(){const{value:o}=l;return o==null?void 0:o.itemsElRef},doScroll:E,handleFocusin:Te,handleFocusout:se,handleKeyUp:W,handleKeyDown:U,handleMouseDown:D,handleVirtualListResize:Y,handleVirtualListScroll:B,cssVars:q?void 0:he,themeClass:Z==null?void 0:Z.themeClass,onRender:Z==null?void 0:Z.onRender},fe)},render(){const{$slots:e,virtualScroll:r,clsPrefix:s,mergedTheme:d,themeClass:f,onRender:p}=this;return p==null||p(),a("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${s}-base-select-menu`,`${s}-base-select-menu--${this.size}-size`,this.rtlEnabled&&`${s}-base-select-menu--rtl`,f,this.multiple&&`${s}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},sn(e.header,h=>h&&a("div",{class:`${s}-base-select-menu__header`,"data-header":!0,key:"header"},h)),this.loading?a("div",{class:`${s}-base-select-menu__loading`},a(Xn,{clsPrefix:s,strokeWidth:20})):this.empty?a("div",{class:`${s}-base-select-menu__empty`,"data-empty":!0},nt(e.empty,()=>{var h;return[((h=this.mergedRenderEmpty)===null||h===void 0?void 0:h.call(this))||a(Ft,{theme:d.peers.Empty,themeOverrides:d.peerOverrides.Empty,size:this.size})]})):a(et,Object.assign({ref:"scrollbarRef",theme:d.peers.Scrollbar,themeOverrides:d.peerOverrides.Scrollbar,scrollable:this.scrollable,container:r?this.virtualListContainer:void 0,content:r?this.virtualListContent:void 0,onScroll:r?void 0:this.doScroll},this.scrollbarProps),{default:()=>r?a(St,{ref:"virtualListRef",class:`${s}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:h})=>h.isGroup?a(vn,{key:h.key,clsPrefix:s,tmNode:h}):h.ignored?null:a(gn,{clsPrefix:s,key:h.key,tmNode:h})}):a("div",{class:`${s}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(h=>h.isGroup?a(vn,{key:h.key,clsPrefix:s,tmNode:h}):a(gn,{clsPrefix:s,key:h.key,tmNode:h})))}),sn(e.action,h=>h&&[a("div",{class:`${s}-base-select-menu__action`,"data-action":!0,key:"action"},h),a(Tt,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),$t={paddingSingle:"0 26px 0 12px",paddingMultiple:"3px 26px 0 12px",clearSize:"16px",arrowSize:"16px"};function It(e){const{borderRadius:r,textColor2:s,textColorDisabled:d,inputColor:f,inputColorDisabled:p,primaryColor:h,primaryColorHover:l,warningColor:S,warningColorHover:M,errorColor:T,errorColorHover:x,borderColor:$,iconColor:F,iconColorDisabled:v,clearColor:z,clearColorHover:H,clearColorPressed:O,placeholderColor:C,placeholderColorDisabled:I,fontSizeTiny:V,fontSizeSmall:E,fontSizeMedium:B,fontSizeLarge:Y,heightTiny:K,heightSmall:ie,heightMedium:ae,heightLarge:W,fontWeight:U}=e;return Object.assign(Object.assign({},$t),{fontSizeTiny:V,fontSizeSmall:E,fontSizeMedium:B,fontSizeLarge:Y,heightTiny:K,heightSmall:ie,heightMedium:ae,heightLarge:W,borderRadius:r,fontWeight:U,textColor:s,textColorDisabled:d,placeholderColor:C,placeholderColorDisabled:I,color:f,colorDisabled:p,colorActive:f,border:`1px solid ${$}`,borderHover:`1px solid ${l}`,borderActive:`1px solid ${h}`,borderFocus:`1px solid ${l}`,boxShadowHover:"none",boxShadowActive:`0 0 0 2px ${Fe(h,{alpha:.2})}`,boxShadowFocus:`0 0 0 2px ${Fe(h,{alpha:.2})}`,caretColor:h,arrowColor:F,arrowColorDisabled:v,loadingColor:h,borderWarning:`1px solid ${S}`,borderHoverWarning:`1px solid ${M}`,borderActiveWarning:`1px solid ${S}`,borderFocusWarning:`1px solid ${M}`,boxShadowHoverWarning:"none",boxShadowActiveWarning:`0 0 0 2px ${Fe(S,{alpha:.2})}`,boxShadowFocusWarning:`0 0 0 2px ${Fe(S,{alpha:.2})}`,colorActiveWarning:f,caretColorWarning:S,borderError:`1px solid ${T}`,borderHoverError:`1px solid ${x}`,borderActiveError:`1px solid ${T}`,borderFocusError:`1px solid ${x}`,boxShadowHoverError:"none",boxShadowActiveError:`0 0 0 2px ${Fe(T,{alpha:.2})}`,boxShadowFocusError:`0 0 0 2px ${Fe(T,{alpha:.2})}`,colorActiveError:f,caretColorError:T,clearColor:z,clearColorHover:H,clearColorPressed:O})}const Fn=tn({name:"InternalSelection",common:on,peers:{Popover:lt},self:It}),Bt=oe([R("base-selection",`
 --n-padding-single: var(--n-padding-single-top) var(--n-padding-single-right) var(--n-padding-single-bottom) var(--n-padding-single-left);
 --n-padding-multiple: var(--n-padding-multiple-top) var(--n-padding-multiple-right) var(--n-padding-multiple-bottom) var(--n-padding-multiple-left);
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[R("base-loading",`
 color: var(--n-loading-color);
 `),R("base-selection-tags","min-height: var(--n-height);"),k("border, state-border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),k("state-border",`
 z-index: 1;
 border-color: #0000;
 `),R("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[k("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),R("base-selection-overlay",`
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `,[k("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),R("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[k("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),R("base-selection-tags",`
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),R("base-selection-label",`
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `,[R("base-selection-input",`
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `,[k("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),k("render-label",`
 color: var(--n-text-color);
 `)]),Xe("disabled",[oe("&:hover",[k("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),J("focus",[k("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),J("active",[k("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),R("base-selection-label","background-color: var(--n-color-active);"),R("base-selection-tags","background-color: var(--n-color-active);")])]),J("disabled","cursor: not-allowed;",[k("arrow",`
 color: var(--n-arrow-color-disabled);
 `),R("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[R("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),k("render-label",`
 color: var(--n-text-color-disabled);
 `)]),R("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),R("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),R("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[k("input",`
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `),k("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>J(`${e}-status`,[k("state-border",`border: var(--n-border-${e});`),Xe("disabled",[oe("&:hover",[k("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),J("active",[k("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),R("base-selection-label",`background-color: var(--n-color-active-${e});`),R("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),J("focus",[k("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),R("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),R("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[oe("&:last-child","padding-right: 0;"),R("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[k("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),Et=me({name:"InternalSelection",props:Object.assign(Object.assign({},Re.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const{mergedClsPrefixRef:r,mergedRtlRef:s}=rn(e),d=xn("InternalSelection",s,r),f=P(null),p=P(null),h=P(null),l=P(null),S=P(null),M=P(null),T=P(null),x=P(null),$=P(null),F=P(null),v=P(!1),z=P(!1),H=P(!1),O=Re("InternalSelection","-internal-selection",Bt,Fn,e,j(e,"clsPrefix")),C=_(()=>e.clearable&&!e.disabled&&(H.value||e.active)),I=_(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):Oe(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),V=_(()=>{const t=e.selectedOption;if(t)return t[e.labelField]}),E=_(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function B(){var t;const{value:u}=f;if(u){const{value:N}=p;N&&(N.style.width=`${u.offsetWidth}px`,e.maxTagCount!=="responsive"&&((t=$.value)===null||t===void 0||t.sync({showAllItemsBeforeCalculate:!1})))}}function Y(){const{value:t}=F;t&&(t.style.display="none")}function K(){const{value:t}=F;t&&(t.style.display="inline-block")}be(j(e,"active"),t=>{t||Y()}),be(j(e,"pattern"),()=>{e.multiple&&yn(B)});function ie(t){const{onFocus:u}=e;u&&u(t)}function ae(t){const{onBlur:u}=e;u&&u(t)}function W(t){const{onDeleteOption:u}=e;u&&u(t)}function U(t){const{onClear:u}=e;u&&u(t)}function D(t){const{onPatternInput:u}=e;u&&u(t)}function ce(t){var u;(!t.relatedTarget||!(!((u=h.value)===null||u===void 0)&&u.contains(t.relatedTarget)))&&ie(t)}function we(t){var u;!((u=h.value)===null||u===void 0)&&u.contains(t.relatedTarget)||ae(t)}function X(t){U(t)}function le(){H.value=!0}function Te(){H.value=!1}function se(t){!e.active||!e.filterable||t.target!==p.value&&t.preventDefault()}function he(t){W(t)}const q=P(!1);function Z(t){if(t.key==="Backspace"&&!q.value&&!e.pattern.length){const{selectedOptions:u}=e;u!=null&&u.length&&he(u[u.length-1])}}let fe=null;function o(t){const{value:u}=f;if(u){const N=t.target.value;u.textContent=N,B()}e.ignoreComposition&&q.value?fe=t:D(t)}function c(){q.value=!0}function A(){q.value=!1,e.ignoreComposition&&D(fe),fe=null}function ee(t){var u;z.value=!0,(u=e.onPatternFocus)===null||u===void 0||u.call(e,t)}function xe(t){var u;z.value=!1,(u=e.onPatternBlur)===null||u===void 0||u.call(e,t)}function re(){var t,u;if(e.filterable)z.value=!1,(t=M.value)===null||t===void 0||t.blur(),(u=p.value)===null||u===void 0||u.blur();else if(e.multiple){const{value:N}=l;N==null||N.blur()}else{const{value:N}=S;N==null||N.blur()}}function G(){var t,u,N;e.filterable?(z.value=!1,(t=M.value)===null||t===void 0||t.focus()):e.multiple?(u=l.value)===null||u===void 0||u.focus():(N=S.value)===null||N===void 0||N.focus()}function ye(){const{value:t}=p;t&&(K(),t.focus())}function de(){const{value:t}=p;t&&t.blur()}function Pe(t){const{value:u}=T;u&&u.setTextContent(`+${t}`)}function Me(){const{value:t}=x;return t}function ze(){return p.value}let ve=null;function ge(){ve!==null&&window.clearTimeout(ve)}function ke(){e.active||(ge(),ve=window.setTimeout(()=>{E.value&&(v.value=!0)},100))}function _e(){ge()}function $e(t){t||(ge(),v.value=!1)}be(E,t=>{t||(v.value=!1)}),nn(()=>{dt(()=>{const t=M.value;t&&(e.disabled?t.removeAttribute("tabindex"):t.tabIndex=z.value?-1:0)})}),Cn(h,e.onResize);const{inlineThemeDisabled:Ce}=e,Se=_(()=>{const{size:t}=e,{common:{cubicBezierEaseInOut:u},self:{fontWeight:N,borderRadius:je,color:We,placeholderColor:Ke,textColor:Ee,paddingSingle:Ae,paddingMultiple:De,caretColor:Ue,colorDisabled:qe,textColorDisabled:Ne,placeholderColorDisabled:ue,colorActive:n,boxShadowFocus:i,boxShadowActive:g,boxShadowHover:w,border:b,borderFocus:m,borderHover:y,borderActive:L,arrowColor:ne,arrowColorDisabled:Rn,loadingColor:Tn,colorActiveWarning:Pn,boxShadowFocusWarning:Mn,boxShadowActiveWarning:zn,boxShadowHoverWarning:kn,borderWarning:_n,borderFocusWarning:$n,borderHoverWarning:In,borderActiveWarning:Bn,colorActiveError:En,boxShadowFocusError:An,boxShadowActiveError:Dn,boxShadowHoverError:Nn,borderError:Ln,borderFocusError:Hn,borderHoverError:Vn,borderActiveError:jn,clearColor:Wn,clearColorHover:Kn,clearColorPressed:Un,clearSize:qn,arrowSize:Gn,[pe("height",t)]:Jn,[pe("fontSize",t)]:Yn}}=O.value,Le=Ie(Ae),He=Ie(De);return{"--n-bezier":u,"--n-border":b,"--n-border-active":L,"--n-border-focus":m,"--n-border-hover":y,"--n-border-radius":je,"--n-box-shadow-active":g,"--n-box-shadow-focus":i,"--n-box-shadow-hover":w,"--n-caret-color":Ue,"--n-color":We,"--n-color-active":n,"--n-color-disabled":qe,"--n-font-size":Yn,"--n-height":Jn,"--n-padding-single-top":Le.top,"--n-padding-multiple-top":He.top,"--n-padding-single-right":Le.right,"--n-padding-multiple-right":He.right,"--n-padding-single-left":Le.left,"--n-padding-multiple-left":He.left,"--n-padding-single-bottom":Le.bottom,"--n-padding-multiple-bottom":He.bottom,"--n-placeholder-color":Ke,"--n-placeholder-color-disabled":ue,"--n-text-color":Ee,"--n-text-color-disabled":Ne,"--n-arrow-color":ne,"--n-arrow-color-disabled":Rn,"--n-loading-color":Tn,"--n-color-active-warning":Pn,"--n-box-shadow-focus-warning":Mn,"--n-box-shadow-active-warning":zn,"--n-box-shadow-hover-warning":kn,"--n-border-warning":_n,"--n-border-focus-warning":$n,"--n-border-hover-warning":In,"--n-border-active-warning":Bn,"--n-color-active-error":En,"--n-box-shadow-focus-error":An,"--n-box-shadow-active-error":Dn,"--n-box-shadow-hover-error":Nn,"--n-border-error":Ln,"--n-border-focus-error":Hn,"--n-border-hover-error":Vn,"--n-border-active-error":jn,"--n-clear-size":qn,"--n-clear-color":Wn,"--n-clear-color-hover":Kn,"--n-clear-color-pressed":Un,"--n-arrow-size":Gn,"--n-font-weight":N}}),Q=Ce?an("internal-selection",_(()=>e.size[0]),Se,e):void 0;return{mergedTheme:O,mergedClearable:C,mergedClsPrefix:r,rtlEnabled:d,patternInputFocused:z,filterablePlaceholder:I,label:V,selected:E,showTagsPanel:v,isComposing:q,counterRef:T,counterWrapperRef:x,patternInputMirrorRef:f,patternInputRef:p,selfRef:h,multipleElRef:l,singleElRef:S,patternInputWrapperRef:M,overflowRef:$,inputTagElRef:F,handleMouseDown:se,handleFocusin:ce,handleClear:X,handleMouseEnter:le,handleMouseLeave:Te,handleDeleteOption:he,handlePatternKeyDown:Z,handlePatternInputInput:o,handlePatternInputBlur:xe,handlePatternInputFocus:ee,handleMouseEnterCounter:ke,handleMouseLeaveCounter:_e,handleFocusout:we,handleCompositionEnd:A,handleCompositionStart:c,onPopoverUpdateShow:$e,focus:G,focusInput:ye,blur:re,blurInput:de,updateCounter:Pe,getCounter:Me,getTail:ze,renderLabel:e.renderLabel,cssVars:Ce?void 0:Se,themeClass:Q==null?void 0:Q.themeClass,onRender:Q==null?void 0:Q.onRender}},render(){const{status:e,multiple:r,size:s,disabled:d,filterable:f,maxTagCount:p,bordered:h,clsPrefix:l,ellipsisTagPopoverProps:S,onRender:M,renderTag:T,renderLabel:x}=this;M==null||M();const $=p==="responsive",F=typeof p=="number",v=$||F,z=a(rt,null,{default:()=>a(yt,{clsPrefix:l,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var O,C;return(C=(O=this.$slots).arrow)===null||C===void 0?void 0:C.call(O)}})});let H;if(r){const{labelField:O}=this,C=D=>a("div",{class:`${l}-base-selection-tag-wrapper`,key:D.value},T?T({option:D,handleClose:()=>{this.handleDeleteOption(D)}}):a(Ye,{size:s,closable:!D.disabled,disabled:d,onClose:()=>{this.handleDeleteOption(D)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>x?x(D,!0):Oe(D[O],D,!0)})),I=()=>(F?this.selectedOptions.slice(0,p):this.selectedOptions).map(C),V=f?a("div",{class:`${l}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},a("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:d,value:this.pattern,autofocus:this.autofocus,class:`${l}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),a("span",{ref:"patternInputMirrorRef",class:`${l}-base-selection-input-tag__mirror`},this.pattern)):null,E=$?()=>a("div",{class:`${l}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},a(Ye,{size:s,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:d})):void 0;let B;if(F){const D=this.selectedOptions.length-p;D>0&&(B=a("div",{class:`${l}-base-selection-tag-wrapper`,key:"__counter__"},a(Ye,{size:s,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:d},{default:()=>`+${D}`})))}const Y=$?f?a(un,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:I,counter:E,tail:()=>V}):a(un,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:I,counter:E}):F&&B?I().concat(B):I(),K=v?()=>a("div",{class:`${l}-base-selection-popover`},$?I():this.selectedOptions.map(C)):void 0,ie=v?Object.assign({show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover},S):null,W=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?a("div",{class:`${l}-base-selection-placeholder ${l}-base-selection-overlay`},a("div",{class:`${l}-base-selection-placeholder__inner`},this.placeholder)):null,U=f?a("div",{ref:"patternInputWrapperRef",class:`${l}-base-selection-tags`},Y,$?null:V,z):a("div",{ref:"multipleElRef",class:`${l}-base-selection-tags`,tabindex:d?void 0:0},Y,z);H=a(at,null,v?a(st,Object.assign({},ie,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>U,default:K}):U,W)}else if(f){const O=this.pattern||this.isComposing,C=this.active?!O:!this.selected,I=this.active?!1:this.selected;H=a("div",{ref:"patternInputWrapperRef",class:`${l}-base-selection-label`,title:this.patternInputFocused?void 0:fn(this.label)},a("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${l}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:d,disabled:d,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),I?a("div",{class:`${l}-base-selection-label__render-label ${l}-base-selection-overlay`,key:"input"},a("div",{class:`${l}-base-selection-overlay__wrapper`},T?T({option:this.selectedOption,handleClose:()=>{}}):x?x(this.selectedOption,!0):Oe(this.label,this.selectedOption,!0))):null,C?a("div",{class:`${l}-base-selection-placeholder ${l}-base-selection-overlay`,key:"placeholder"},a("div",{class:`${l}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,z)}else H=a("div",{ref:"singleElRef",class:`${l}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?a("div",{class:`${l}-base-selection-input`,title:fn(this.label),key:"input"},a("div",{class:`${l}-base-selection-input__content`},T?T({option:this.selectedOption,handleClose:()=>{}}):x?x(this.selectedOption,!0):Oe(this.label,this.selectedOption,!0))):a("div",{class:`${l}-base-selection-placeholder ${l}-base-selection-overlay`,key:"placeholder"},a("div",{class:`${l}-base-selection-placeholder__inner`},this.placeholder)),z);return a("div",{ref:"selfRef",class:[`${l}-base-selection`,this.rtlEnabled&&`${l}-base-selection--rtl`,this.themeClass,e&&`${l}-base-selection--${e}-status`,{[`${l}-base-selection--active`]:this.active,[`${l}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${l}-base-selection--disabled`]:this.disabled,[`${l}-base-selection--multiple`]:this.multiple,[`${l}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},H,h?a("div",{class:`${l}-base-selection__border`}):null,h?a("div",{class:`${l}-base-selection__state-border`}):null)}});function Ve(e){return e.type==="group"}function On(e){return e.type==="ignored"}function Qe(e,r){try{return!!(1+r.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function At(e,r){return{getIsGroup:Ve,getIgnored:On,getKey(d){return Ve(d)?d.name||d.key||"key-required":d[e]},getChildren(d){return d[r]}}}function Dt(e,r,s,d){if(!r)return e;function f(p){if(!Array.isArray(p))return[];const h=[];for(const l of p)if(Ve(l)){const S=f(l[d]);S.length&&h.push(Object.assign({},l,{[d]:S}))}else{if(On(l))continue;r(s,l)&&h.push(l)}return h}return f(e)}function Nt(e,r,s){const d=new Map;return e.forEach(f=>{Ve(f)?f[s].forEach(p=>{d.set(p[r],p)}):d.set(f[r],f)}),d}function Lt(e){const{boxShadow2:r}=e;return{menuBoxShadow:r}}const Ht=tn({name:"Select",common:on,peers:{InternalSelection:Fn,InternalSelectMenu:Sn},self:Lt}),Vt=oe([R("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 font-weight: var(--n-font-weight);
 `),R("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[wn({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),jt=Object.assign(Object.assign({},Re.props),{to:en.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearCreatedOptionsOnClear:{type:Boolean,default:!0},clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,menuSize:{type:String},filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],ellipsisTagPopoverProps:Object,consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},scrollbarProps:Object,onChange:[Function,Array],items:Array}),Gt=me({name:"Select",props:jt,slots:Object,setup(e){const{mergedClsPrefixRef:r,mergedBorderedRef:s,namespaceRef:d,inlineThemeDisabled:f,mergedComponentPropsRef:p}=rn(e),h=Re("Select","-select",Vt,Ht,e,r),l=P(e.defaultValue),S=j(e,"value"),M=hn(S,l),T=P(!1),x=P(""),$=xt(e,["items","options"]),F=P([]),v=P([]),z=_(()=>v.value.concat(F.value).concat($.value)),H=_(()=>{const{filter:n}=e;if(n)return n;const{labelField:i,valueField:g}=e;return(w,b)=>{if(!b)return!1;const m=b[i];if(typeof m=="string")return Qe(w,m);const y=b[g];return typeof y=="string"?Qe(w,y):typeof y=="number"?Qe(w,String(y)):!1}}),O=_(()=>{if(e.remote)return $.value;{const{value:n}=z,{value:i}=x;return!i.length||!e.filterable?n:Dt(n,H.value,i,e.childrenField)}}),C=_(()=>{const{valueField:n,childrenField:i}=e,g=At(n,i);return bt(O.value,g)}),I=_(()=>Nt(z.value,e.valueField,e.childrenField)),V=P(!1),E=hn(j(e,"show"),V),B=P(null),Y=P(null),K=P(null),{localeRef:ie}=Ot("Select"),ae=_(()=>{var n;return(n=e.placeholder)!==null&&n!==void 0?n:ie.value.placeholder}),W=[],U=P(new Map),D=_(()=>{const{fallbackOption:n}=e;if(n===void 0){const{labelField:i,valueField:g}=e;return w=>({[i]:String(w),[g]:w})}return n===!1?!1:i=>Object.assign(n(i),{value:i})});function ce(n){const i=e.remote,{value:g}=U,{value:w}=I,{value:b}=D,m=[];return n.forEach(y=>{if(w.has(y))m.push(w.get(y));else if(i&&g.has(y))m.push(g.get(y));else if(b){const L=b(y);L&&m.push(L)}}),m}const we=_(()=>{if(e.multiple){const{value:n}=M;return Array.isArray(n)?ce(n):[]}return null}),X=_(()=>{const{value:n}=M;return!e.multiple&&!Array.isArray(n)?n===null?null:ce([n])[0]||null:null}),le=gt(e,{mergedSize:n=>{var i,g;const{size:w}=e;if(w)return w;const{mergedSize:b}=n||{};if(b!=null&&b.value)return b.value;const m=(g=(i=p==null?void 0:p.value)===null||i===void 0?void 0:i.Select)===null||g===void 0?void 0:g.size;return m||"medium"}}),{mergedSizeRef:Te,mergedDisabledRef:se,mergedStatusRef:he}=le;function q(n,i){const{onChange:g,"onUpdate:value":w,onUpdateValue:b}=e,{nTriggerFormChange:m,nTriggerFormInput:y}=le;g&&te(g,n,i),b&&te(b,n,i),w&&te(w,n,i),l.value=n,m(),y()}function Z(n){const{onBlur:i}=e,{nTriggerFormBlur:g}=le;i&&te(i,n),g()}function fe(){const{onClear:n}=e;n&&te(n)}function o(n){const{onFocus:i,showOnFocus:g}=e,{nTriggerFormFocus:w}=le;i&&te(i,n),w(),g&&re()}function c(n){const{onSearch:i}=e;i&&te(i,n)}function A(n){const{onScroll:i}=e;i&&te(i,n)}function ee(){var n;const{remote:i,multiple:g}=e;if(i){const{value:w}=U;if(g){const{valueField:b}=e;(n=we.value)===null||n===void 0||n.forEach(m=>{w.set(m[b],m)})}else{const b=X.value;b&&w.set(b[e.valueField],b)}}}function xe(n){const{onUpdateShow:i,"onUpdate:show":g}=e;i&&te(i,n),g&&te(g,n),V.value=n}function re(){se.value||(xe(!0),V.value=!0,e.filterable&&De())}function G(){xe(!1)}function ye(){x.value="",v.value=W}const de=P(!1);function Pe(){e.filterable&&(de.value=!0)}function Me(){e.filterable&&(de.value=!1,E.value||ye())}function ze(){se.value||(E.value?e.filterable?De():G():re())}function ve(n){var i,g;!((g=(i=K.value)===null||i===void 0?void 0:i.selfRef)===null||g===void 0)&&g.contains(n.relatedTarget)||(T.value=!1,Z(n),G())}function ge(n){o(n),T.value=!0}function ke(){T.value=!0}function _e(n){var i;!((i=B.value)===null||i===void 0)&&i.$el.contains(n.relatedTarget)||(T.value=!1,Z(n),G())}function $e(){var n;(n=B.value)===null||n===void 0||n.focus(),G()}function Ce(n){var i;E.value&&(!((i=B.value)===null||i===void 0)&&i.$el.contains(mt(n))||G())}function Se(n){if(!Array.isArray(n))return[];if(D.value)return Array.from(n);{const{remote:i}=e,{value:g}=I;if(i){const{value:w}=U;return n.filter(b=>g.has(b)||w.has(b))}else return n.filter(w=>g.has(w))}}function Q(n){t(n.rawNode)}function t(n){if(se.value)return;const{tag:i,remote:g,clearFilterAfterSelect:w,valueField:b}=e;if(i&&!g){const{value:m}=v,y=m[0]||null;if(y){const L=F.value;L.length?L.push(y):F.value=[y],v.value=W}}if(g&&U.value.set(n[b],n),e.multiple){const m=Se(M.value),y=m.findIndex(L=>L===n[b]);if(~y){if(m.splice(y,1),i&&!g){const L=u(n[b]);~L&&(F.value.splice(L,1),w&&(x.value=""))}}else m.push(n[b]),w&&(x.value="");q(m,ce(m))}else{if(i&&!g){const m=u(n[b]);~m?F.value=[F.value[m]]:F.value=W}Ae(),G(),q(n[b],n)}}function u(n){return F.value.findIndex(g=>g[e.valueField]===n)}function N(n){E.value||re();const{value:i}=n.target;x.value=i;const{tag:g,remote:w}=e;if(c(i),g&&!w){if(!i){v.value=W;return}const{onCreate:b}=e,m=b?b(i):{[e.labelField]:i,[e.valueField]:i},{valueField:y,labelField:L}=e;$.value.some(ne=>ne[y]===m[y]||ne[L]===m[L])||F.value.some(ne=>ne[y]===m[y]||ne[L]===m[L])?v.value=W:v.value=[m]}}function je(n){n.stopPropagation();const{multiple:i,tag:g,remote:w,clearCreatedOptionsOnClear:b}=e;!i&&e.filterable&&G(),g&&!w&&b&&(F.value=W),fe(),i?q([],[]):q(null,null)}function We(n){!Be(n,"action")&&!Be(n,"empty")&&!Be(n,"header")&&n.preventDefault()}function Ke(n){A(n)}function Ee(n){var i,g,w,b,m;if(!e.keyboard){n.preventDefault();return}switch(n.key){case" ":if(e.filterable)break;n.preventDefault();case"Enter":if(!(!((i=B.value)===null||i===void 0)&&i.isComposing)){if(E.value){const y=(g=K.value)===null||g===void 0?void 0:g.getPendingTmNode();y?Q(y):e.filterable||(G(),Ae())}else if(re(),e.tag&&de.value){const y=v.value[0];if(y){const L=y[e.valueField],{value:ne}=M;e.multiple&&Array.isArray(ne)&&ne.includes(L)||t(y)}}}n.preventDefault();break;case"ArrowUp":if(n.preventDefault(),e.loading)return;E.value&&((w=K.value)===null||w===void 0||w.prev());break;case"ArrowDown":if(n.preventDefault(),e.loading)return;E.value?(b=K.value)===null||b===void 0||b.next():re();break;case"Escape":E.value&&(wt(n),G()),(m=B.value)===null||m===void 0||m.focus();break}}function Ae(){var n;(n=B.value)===null||n===void 0||n.focus()}function De(){var n;(n=B.value)===null||n===void 0||n.focusInput()}function Ue(){var n;E.value&&((n=Y.value)===null||n===void 0||n.syncPosition())}ee(),be(j(e,"options"),ee);const qe={focus:()=>{var n;(n=B.value)===null||n===void 0||n.focus()},focusInput:()=>{var n;(n=B.value)===null||n===void 0||n.focusInput()},blur:()=>{var n;(n=B.value)===null||n===void 0||n.blur()},blurInput:()=>{var n;(n=B.value)===null||n===void 0||n.blurInput()}},Ne=_(()=>{const{self:{menuBoxShadow:n}}=h.value;return{"--n-menu-box-shadow":n}}),ue=f?an("select",void 0,Ne,e):void 0;return Object.assign(Object.assign({},qe),{mergedStatus:he,mergedClsPrefix:r,mergedBordered:s,namespace:d,treeMate:C,isMounted:pt(),triggerRef:B,menuRef:K,pattern:x,uncontrolledShow:V,mergedShow:E,adjustedTo:en(e),uncontrolledValue:l,mergedValue:M,followerRef:Y,localizedPlaceholder:ae,selectedOption:X,selectedOptions:we,mergedSize:Te,mergedDisabled:se,focused:T,activeWithoutMenuOpen:de,inlineThemeDisabled:f,onTriggerInputFocus:Pe,onTriggerInputBlur:Me,handleTriggerOrMenuResize:Ue,handleMenuFocus:ke,handleMenuBlur:_e,handleMenuTabOut:$e,handleTriggerClick:ze,handleToggle:Q,handleDeleteOption:t,handlePatternInput:N,handleClear:je,handleTriggerBlur:ve,handleTriggerFocus:ge,handleKeydown:Ee,handleMenuAfterLeave:ye,handleMenuClickOutside:Ce,handleMenuScroll:Ke,handleMenuKeydown:Ee,handleMenuMousedown:We,mergedTheme:h,cssVars:f?void 0:Ne,themeClass:ue==null?void 0:ue.themeClass,onRender:ue==null?void 0:ue.onRender})},render(){return a("div",{class:`${this.mergedClsPrefix}-select`},a(ut,null,{default:()=>[a(ct,null,{default:()=>a(Et,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,ellipsisTagPopoverProps:this.ellipsisTagPopoverProps,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,r;return[(r=(e=this.$slots).arrow)===null||r===void 0?void 0:r.call(e)]}})}),a(ht,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===en.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>a(mn,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,r,s;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),ft(a(_t,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(r=this.menuProps)===null||r===void 0?void 0:r.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:this.menuSize,renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(s=this.menuProps)===null||s===void 0?void 0:s.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange,scrollbarProps:this.scrollbarProps}),{empty:()=>{var d,f;return[(f=(d=this.$slots).empty)===null||f===void 0?void 0:f.call(d)]},header:()=>{var d,f;return[(f=(d=this.$slots).header)===null||f===void 0?void 0:f.call(d)]},action:()=>{var d,f;return[(f=(d=this.$slots).action)===null||f===void 0?void 0:f.call(d)]}}),this.displayDirective==="show"?[[vt,this.mergedShow],[cn,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[cn,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}});export{Tt as F,_t as N,Gt as _,Rt as a,Fn as b,At as c,Et as d,fn as g,Sn as i,Ze as m,Ht as s,Cn as u};
