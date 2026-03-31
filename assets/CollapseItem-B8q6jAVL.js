import{a as P,h as s,d as W,f as u,i as x,U as l,g as z,bR as H,ab as O,u as D,v as V,a5 as q,b as T,aG as K,ac as F,c as Z,e as N,au as G,a8 as I,bX as X,aB as Y,aT as J,bY as Q,a7 as k,aA as $,aF as ee,bF as te,bZ as re,b0 as ae,b5 as oe,av as le,aE as ne,aI as A}from"./index-Df6-4-0p.js";const se=P({name:"ChevronLeft",render(){return s("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s("path",{d:"M10.3536 3.14645C10.5488 3.34171 10.5488 3.65829 10.3536 3.85355L6.20711 8L10.3536 12.1464C10.5488 12.3417 10.5488 12.6583 10.3536 12.8536C10.1583 13.0488 9.84171 13.0488 9.64645 12.8536L5.14645 8.35355C4.95118 8.15829 4.95118 7.84171 5.14645 7.64645L9.64645 3.14645C9.84171 2.95118 10.1583 2.95118 10.3536 3.14645Z",fill:"currentColor"}))}});function ie(e){const{fontWeight:i,textColor1:n,textColor2:a,textColorDisabled:d,dividerColor:t,fontSize:c}=e;return{titleFontSize:c,titleFontWeight:i,dividerColor:t,titleTextColor:n,titleTextColorDisabled:d,fontSize:c,textColor:a,arrowColor:a,arrowColorDisabled:d,itemMargin:"16px 0 0 0",titlePadding:"16px 0 0 0"}}const de={common:W,self:ie},ce=u("collapse","width: 100%;",[u("collapse-item",`
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 margin: var(--n-item-margin);
 `,[x("disabled",[l("header","cursor: not-allowed;",[l("header-main",`
 color: var(--n-title-text-color-disabled);
 `),u("collapse-item-arrow",`
 color: var(--n-arrow-color-disabled);
 `)])]),u("collapse-item","margin-left: 32px;"),z("&:first-child","margin-top: 0;"),z("&:first-child >",[l("header","padding-top: 0;")]),x("left-arrow-placement",[l("header",[u("collapse-item-arrow","margin-right: 4px;")])]),x("right-arrow-placement",[l("header",[u("collapse-item-arrow","margin-left: 4px;")])]),l("content-wrapper",[l("content-inner","padding-top: 16px;"),H({duration:"0.15s"})]),x("active",[l("header",[x("active",[u("collapse-item-arrow","transform: rotate(90deg);")])])]),z("&:not(:first-child)","border-top: 1px solid var(--n-divider-color);"),O("disabled",[x("trigger-area-main",[l("header",[l("header-main","cursor: pointer;"),u("collapse-item-arrow","cursor: default;")])]),x("trigger-area-arrow",[l("header",[u("collapse-item-arrow","cursor: pointer;")])]),x("trigger-area-extra",[l("header",[l("header-extra","cursor: pointer;")])])]),l("header",`
 font-size: var(--n-title-font-size);
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition: color .3s var(--n-bezier);
 position: relative;
 padding: var(--n-title-padding);
 color: var(--n-title-text-color);
 `,[l("header-main",`
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 color: var(--n-title-text-color);
 `),l("header-extra",`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),u("collapse-item-arrow",`
 display: flex;
 transition:
 transform .15s var(--n-bezier),
 color .3s var(--n-bezier);
 font-size: 18px;
 color: var(--n-arrow-color);
 `)])])]),pe=Object.assign(Object.assign({},T.props),{defaultExpandedNames:{type:[Array,String],default:null},expandedNames:[Array,String],arrowPlacement:{type:String,default:"left"},accordion:{type:Boolean,default:!1},displayDirective:{type:String,default:"if"},triggerAreas:{type:Array,default:()=>["main","extra","arrow"]},onItemHeaderClick:[Function,Array],"onUpdate:expandedNames":[Function,Array],onUpdateExpandedNames:[Function,Array],onExpandedNamesChange:{type:[Function,Array],validator:()=>!0,default:void 0}}),B=G("n-collapse"),he=P({name:"Collapse",props:pe,slots:Object,setup(e,{slots:i}){const{mergedClsPrefixRef:n,inlineThemeDisabled:a,mergedRtlRef:d}=D(e),t=V(e.defaultExpandedNames),c=N(()=>e.expandedNames),v=q(c,t),C=T("Collapse","-collapse",ce,de,e,n);function p(m){const{"onUpdate:expandedNames":o,onUpdateExpandedNames:f,onExpandedNamesChange:y}=e;f&&I(f,m),o&&I(o,m),y&&I(y,m),t.value=m}function g(m){const{onItemHeaderClick:o}=e;o&&I(o,m)}function r(m,o,f){const{accordion:y}=e,{value:E}=v;if(y)m?(p([o]),g({name:o,expanded:!0,event:f})):(p([]),g({name:o,expanded:!1,event:f}));else if(!Array.isArray(E))p([o]),g({name:o,expanded:!0,event:f});else{const w=E.slice(),_=w.findIndex(S=>o===S);~_?(w.splice(_,1),p(w),g({name:o,expanded:!1,event:f})):(w.push(o),p(w),g({name:o,expanded:!0,event:f}))}}K(B,{props:e,mergedClsPrefixRef:n,expandedNamesRef:v,slots:i,toggleItem:r});const h=F("Collapse",d,n),R=N(()=>{const{common:{cubicBezierEaseInOut:m},self:{titleFontWeight:o,dividerColor:f,titlePadding:y,titleTextColor:E,titleTextColorDisabled:w,textColor:_,arrowColor:S,fontSize:U,titleFontSize:L,arrowColorDisabled:M,itemMargin:j}}=C.value;return{"--n-font-size":U,"--n-bezier":m,"--n-text-color":_,"--n-divider-color":f,"--n-title-padding":y,"--n-title-font-size":L,"--n-title-text-color":E,"--n-title-text-color-disabled":w,"--n-title-font-weight":o,"--n-arrow-color":S,"--n-arrow-color-disabled":M,"--n-item-margin":j}}),b=a?Z("collapse",void 0,R,e):void 0;return{rtlEnabled:h,mergedTheme:C,mergedClsPrefix:n,cssVars:a?void 0:R,themeClass:b==null?void 0:b.themeClass,onRender:b==null?void 0:b.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),s("div",{class:[`${this.mergedClsPrefix}-collapse`,this.rtlEnabled&&`${this.mergedClsPrefix}-collapse--rtl`,this.themeClass],style:this.cssVars},this.$slots)}}),me=P({name:"CollapseItemContent",props:{displayDirective:{type:String,required:!0},show:Boolean,clsPrefix:{type:String,required:!0}},setup(e){return{onceTrue:Q(k(e,"show"))}},render(){return s(X,null,{default:()=>{const{show:e,displayDirective:i,onceTrue:n,clsPrefix:a}=this,d=i==="show"&&n,t=s("div",{class:`${a}-collapse-item__content-wrapper`},s("div",{class:`${a}-collapse-item__content-inner`},this.$slots));return d?Y(t,[[J,e]]):e?t:null}})}}),fe={title:String,name:[String,Number],disabled:Boolean,displayDirective:String},ge=P({name:"CollapseItem",props:fe,setup(e){const{mergedRtlRef:i}=D(e),n=ae(),a=oe(()=>{var r;return(r=e.name)!==null&&r!==void 0?r:n}),d=le(B);d||ne("collapse-item","`n-collapse-item` must be placed inside `n-collapse`.");const{expandedNamesRef:t,props:c,mergedClsPrefixRef:v,slots:C}=d,p=N(()=>{const{value:r}=t;if(Array.isArray(r)){const{value:h}=a;return!~r.findIndex(R=>R===h)}else if(r){const{value:h}=a;return h!==r}return!0});return{rtlEnabled:F("Collapse",i,v),collapseSlots:C,randomName:n,mergedClsPrefix:v,collapsed:p,triggerAreas:k(c,"triggerAreas"),mergedDisplayDirective:N(()=>{const{displayDirective:r}=e;return r||c.displayDirective}),arrowPlacement:N(()=>c.arrowPlacement),handleClick(r){let h="main";A(r,"arrow")&&(h="arrow"),A(r,"extra")&&(h="extra"),c.triggerAreas.includes(h)&&d&&!e.disabled&&d.toggleItem(p.value,a.value,r)}}},render(){const{collapseSlots:e,$slots:i,arrowPlacement:n,collapsed:a,mergedDisplayDirective:d,mergedClsPrefix:t,disabled:c,triggerAreas:v}=this,C=$(i.header,{collapsed:a},()=>[this.title]),p=i["header-extra"]||e["header-extra"],g=i.arrow||e.arrow;return s("div",{class:[`${t}-collapse-item`,`${t}-collapse-item--${n}-arrow-placement`,c&&`${t}-collapse-item--disabled`,!a&&`${t}-collapse-item--active`,v.map(r=>`${t}-collapse-item--trigger-area-${r}`)]},s("div",{class:[`${t}-collapse-item__header`,!a&&`${t}-collapse-item__header--active`]},s("div",{class:`${t}-collapse-item__header-main`,onClick:this.handleClick},n==="right"&&C,s("div",{class:`${t}-collapse-item-arrow`,key:this.rtlEnabled?0:1,"data-arrow":!0},$(g,{collapsed:a},()=>[s(ee,{clsPrefix:t},{default:()=>this.rtlEnabled?s(se,null):s(te,null)})])),n==="left"&&C),re(p,{collapsed:a},r=>s("div",{class:`${t}-collapse-item__header-extra`,onClick:this.handleClick,"data-extra":!0},r))),s(me,{clsPrefix:t,displayDirective:d,show:!a},i))}});export{he as _,ge as a};
