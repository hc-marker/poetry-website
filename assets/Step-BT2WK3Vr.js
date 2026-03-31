import{d as G,f as o,i as C,g as p,U as z,b7 as y,ab as I,a as R,h as r,bh as L,bi as q,u as k,ac as J,b as E,aG as Q,au as X,ay as $,b8 as Y,aF as P,a0 as T,bj as Z,K as w,av as ee,aE as te,c as oe,e as S,a7 as F,j as u,a8 as _}from"./index-Df6-4-0p.js";import{a as ie}from"./Select-CRsKCtEb.js";const re={stepHeaderFontSizeSmall:"14px",stepHeaderFontSizeMedium:"16px",indicatorIndexFontSizeSmall:"14px",indicatorIndexFontSizeMedium:"16px",indicatorSizeSmall:"22px",indicatorSizeMedium:"28px",indicatorIconSizeSmall:"14px",indicatorIconSizeMedium:"18px"};function ne(e){const{fontWeightStrong:n,baseColor:s,textColorDisabled:t,primaryColor:c,errorColor:l,textColor1:x,textColor2:f}=e;return Object.assign(Object.assign({},re),{stepHeaderFontWeight:n,indicatorTextColorProcess:s,indicatorTextColorWait:t,indicatorTextColorFinish:c,indicatorTextColorError:l,indicatorBorderColorProcess:c,indicatorBorderColorWait:t,indicatorBorderColorFinish:c,indicatorBorderColorError:l,indicatorColorProcess:c,indicatorColorWait:"#0000",indicatorColorFinish:"#0000",indicatorColorError:"#0000",splitorColorProcess:t,splitorColorWait:t,splitorColorFinish:c,splitorColorError:t,headerTextColorProcess:x,headerTextColorWait:t,headerTextColorFinish:t,headerTextColorError:l,descriptionTextColorProcess:f,descriptionTextColorWait:t,descriptionTextColorFinish:t,descriptionTextColorError:l})}const se={common:G,self:ne},ae=o("steps",`
 width: 100%;
 display: flex;
`,[o("step",`
 position: relative;
 display: flex;
 flex: 1;
 `,[C("disabled","cursor: not-allowed"),C("clickable",`
 cursor: pointer;
 `),p("&:last-child",[o("step-splitor","display: none;")])]),o("step-splitor",`
 background-color: var(--n-splitor-color);
 margin-top: calc(var(--n-step-header-font-size) / 2);
 height: 1px;
 flex: 1;
 align-self: flex-start;
 margin-left: 12px;
 margin-right: 12px;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),o("step-content","flex: 1;",[o("step-content-header",`
 color: var(--n-header-text-color);
 margin-top: calc(var(--n-indicator-size) / 2 - var(--n-step-header-font-size) / 2);
 line-height: var(--n-step-header-font-size);
 font-size: var(--n-step-header-font-size);
 position: relative;
 display: flex;
 font-weight: var(--n-step-header-font-weight);
 margin-left: 9px;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[z("title",`
 white-space: nowrap;
 flex: 0;
 `)]),z("description",`
 color: var(--n-description-text-color);
 margin-top: 12px;
 margin-left: 9px;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),o("step-indicator",`
 background-color: var(--n-indicator-color);
 box-shadow: 0 0 0 1px var(--n-indicator-border-color);
 height: var(--n-indicator-size);
 width: var(--n-indicator-size);
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `,[o("step-indicator-slot",`
 position: relative;
 width: var(--n-indicator-icon-size);
 height: var(--n-indicator-icon-size);
 font-size: var(--n-indicator-icon-size);
 line-height: var(--n-indicator-icon-size);
 `,[z("index",`
 display: inline-block;
 text-align: center;
 position: absolute;
 left: 0;
 top: 0;
 white-space: nowrap;
 font-size: var(--n-indicator-index-font-size);
 width: var(--n-indicator-icon-size);
 height: var(--n-indicator-icon-size);
 line-height: var(--n-indicator-icon-size);
 color: var(--n-indicator-text-color);
 transition: color .3s var(--n-bezier);
 `,[y()]),o("icon",`
 color: var(--n-indicator-text-color);
 transition: color .3s var(--n-bezier);
 `,[y()]),o("base-icon",`
 color: var(--n-indicator-text-color);
 transition: color .3s var(--n-bezier);
 `,[y()])])]),C("vertical","flex-direction: column;",[I("show-description",[p(">",[o("step","padding-bottom: 8px;")])]),p(">",[o("step","margin-bottom: 16px;",[p("&:last-child","margin-bottom: 0;"),p(">",[o("step-indicator",[p(">",[o("step-splitor",`
 position: absolute;
 bottom: -8px;
 width: 1px;
 margin: 0 !important;
 left: calc(var(--n-indicator-size) / 2);
 height: calc(100% - var(--n-indicator-size));
 `)])]),o("step-content",[z("description","margin-top: 8px;")])])])])]),C("content-bottom",[I("vertical",[p(">",[o("step","flex-direction: column",[p(">",[o("step-line","display: flex;",[p(">",[o("step-splitor",`
 margin-top: 0;
 align-self: center;
 `)])])]),p(">",[o("step-content","margin-top: calc(var(--n-indicator-size) / 2 - var(--n-step-header-font-size) / 2);",[o("step-content-header",`
 margin-left: 0;
 `),o("step-content__description",`
 margin-left: 0;
 `)])])])])])])]);function ce(e,n){return typeof e!="object"||e===null||Array.isArray(e)?null:(e.props||(e.props={}),e.props.internalIndex=n+1,e)}function le(e){return e.map((n,s)=>ce(n,s))}const de=Object.assign(Object.assign({},E.props),{current:Number,status:{type:String,default:"process"},size:{type:String,default:"medium"},vertical:Boolean,contentPlacement:{type:String,default:"right"},"onUpdate:current":[Function,Array],onUpdateCurrent:[Function,Array]}),j=X("n-steps"),fe=R({name:"Steps",props:de,slots:Object,setup(e,{slots:n}){const{mergedClsPrefixRef:s,mergedRtlRef:t}=k(e),c=J("Steps",t,s),l=E("Steps","-steps",ae,se,e,s);return Q(j,{props:e,mergedThemeRef:l,mergedClsPrefixRef:s,stepsSlots:n}),{mergedClsPrefix:s,rtlEnabled:c}},render(){const{mergedClsPrefix:e}=this;return r("div",{class:[`${e}-steps`,this.rtlEnabled&&`${e}-steps--rtl`,this.vertical&&`${e}-steps--vertical`,this.contentPlacement==="bottom"&&`${e}-steps--content-bottom`]},le(L(q(this))))}}),pe={status:String,title:String,description:String,disabled:Boolean,internalIndex:{type:Number,default:0}},xe=R({name:"Step",props:pe,slots:Object,setup(e){const n=ee(j,null);n||te("step","`n-step` must be placed inside `n-steps`.");const{inlineThemeDisabled:s}=k(),{props:t,mergedThemeRef:c,mergedClsPrefixRef:l,stepsSlots:x}=n,f=F(t,"vertical"),b=F(t,"contentPlacement"),m=S(()=>{const{status:i}=e;if(i)return i;{const{internalIndex:a}=e,{current:g}=t;if(g===void 0)return"process";if(a<g)return"finish";if(a===g)return t.status||"process";if(a>g)return"wait"}return"process"}),v=S(()=>{const{value:i}=m,{size:a}=t,{common:{cubicBezierEaseInOut:g},self:{stepHeaderFontWeight:W,[u("stepHeaderFontSize",a)]:B,[u("indicatorIndexFontSize",a)]:N,[u("indicatorSize",a)]:H,[u("indicatorIconSize",a)]:O,[u("indicatorTextColor",i)]:M,[u("indicatorBorderColor",i)]:U,[u("headerTextColor",i)]:A,[u("splitorColor",i)]:K,[u("indicatorColor",i)]:V,[u("descriptionTextColor",i)]:D}}=c.value;return{"--n-bezier":g,"--n-description-text-color":D,"--n-header-text-color":A,"--n-indicator-border-color":U,"--n-indicator-color":V,"--n-indicator-icon-size":O,"--n-indicator-index-font-size":N,"--n-indicator-size":H,"--n-indicator-text-color":M,"--n-splitor-color":K,"--n-step-header-font-size":B,"--n-step-header-font-weight":W}}),d=s?oe("step",S(()=>{const{value:i}=m,{size:a}=t;return`${i[0]}${a[0]}`}),v,t):void 0,h=S(()=>{if(e.disabled)return;const{onUpdateCurrent:i,"onUpdate:current":a}=t;return i||a?()=>{i&&_(i,e.internalIndex),a&&_(a,e.internalIndex)}:void 0});return{stepsSlots:x,mergedClsPrefix:l,vertical:f,mergedStatus:m,handleStepClick:h,cssVars:s?void 0:v,themeClass:d==null?void 0:d.themeClass,onRender:d==null?void 0:d.onRender,contentPlacement:b}},render(){const{mergedClsPrefix:e,onRender:n,handleStepClick:s,disabled:t,contentPlacement:c,vertical:l}=this,x=$(this.$slots.default,d=>{const h=d||this.description;return h?r("div",{class:`${e}-step-content__description`},h):null}),f=r("div",{class:`${e}-step-splitor`}),b=r("div",{class:`${e}-step-indicator`,key:c},r("div",{class:`${e}-step-indicator-slot`},r(Y,null,{default:()=>$(this.$slots.icon,d=>{const{mergedStatus:h,stepsSlots:i}=this;return h==="finish"||h==="error"?h==="finish"?r(P,{clsPrefix:e,key:"finish"},{default:()=>T(i["finish-icon"],()=>[r(ie,null)])}):h==="error"?r(P,{clsPrefix:e,key:"error"},{default:()=>T(i["error-icon"],()=>[r(Z,null)])}):null:d||r("div",{key:this.internalIndex,class:`${e}-step-indicator-slot__index`},this.internalIndex)})})),l?f:null),m=r("div",{class:`${e}-step-content`},r("div",{class:`${e}-step-content-header`},r("div",{class:`${e}-step-content-header__title`},T(this.$slots.title,()=>[this.title])),!l&&c==="right"?f:null),x);let v;return!l&&c==="bottom"?v=r(w,null,r("div",{class:`${e}-step-line`},b,f),m):v=r(w,null,b,m),n==null||n(),r("div",{class:[`${e}-step`,t&&`${e}-step--disabled`,!t&&s&&`${e}-step--clickable`,this.themeClass,x&&`${e}-step--show-description`,`${e}-step--${this.mergedStatus}-status`],style:this.cssVars,onClick:s},v)}});export{fe as _,xe as a};
