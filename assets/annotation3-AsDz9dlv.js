import{d as Qe,T as de,g as C,f as c,i as j,U as De,V as We,W as et,X as tt,Y as bt,a as Ne,h as X,Z as gt,$ as xt,a0 as wt,a1 as _t,a2 as Oe,a3 as yt,u as ot,b as Ve,a4 as Ct,v as E,a5 as St,C as we,D as ze,E as nt,c as je,a6 as kt,a7 as zt,e as U,a8 as Me,a9 as Pe,aa as Be,ab as Rt,ac as Tt,j as Ae,o as ue,k as be,l as f,A as $t,ad as Dt,p as Mt,q as l,w as s,F as Pt,_ as Bt,B as Vt,r as J,N as Ft,s as m,H as Ue,I as Et,G as re,J as Ht,K as qe,L as Ke,x as Xe,M as It,z as Le,O as At,P as Ut,Q as Lt,R as Ot}from"./index-Df6-4-0p.js";import{i as jt}from"./index-1yOyFXf9.js";import{A as Nt,_ as Wt,a as qt,b as Kt}from"./AddCircleOutline-CQ3TsEHD.js";import{T as Xt,_ as Yt}from"./Time-UF8P6Ruz.js";import{T as Ye}from"./Trash-DTqQAixa.js";import{_ as Zt}from"./InputNumber-C5nACorm.js";import{_ as Gt}from"./Select-CRsKCtEb.js";import{_ as Jt}from"./Empty-DIg0Ic5G.js";import{_ as Qt,a as eo}from"./FormItem-DnYEzAV7.js";import{_ as to}from"./Input-C4fjGpx7.js";import{_ as oo}from"./Alert-CnEaGLKA.js";import"./use-locale-Da3ioVtO.js";import"./Forward-BHRsLNbu.js";import"./Add-C526wbBs.js";import"./Suffix-CUdaJbTt.js";const no={railHeight:"4px",railWidthVertical:"4px",handleSize:"18px",dotHeight:"8px",dotWidth:"8px",dotBorderRadius:"4px"};function ao(r){const d="rgba(0, 0, 0, .85)",T="0 2px 8px 0 rgba(0, 0, 0, 0.12)",{railColor:M,primaryColor:h,baseColor:x,cardColor:N,modalColor:$,popoverColor:H,borderRadius:V,fontSize:B,opacityDisabled:k}=r;return Object.assign(Object.assign({},no),{fontSize:B,markFontSize:B,railColor:M,railColorHover:M,fillColor:h,fillColorHover:h,opacityDisabled:k,handleColor:"#FFF",dotColor:N,dotColorModal:$,dotColorPopover:H,handleBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowHover:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowActive:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowFocus:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",indicatorColor:d,indicatorBoxShadow:T,indicatorTextColor:x,indicatorBorderRadius:V,dotBorder:`2px solid ${M}`,dotBorderActive:`2px solid ${h}`,dotBoxShadow:""})}const lo={common:Qe,self:ao},ro={thPaddingSmall:"6px",thPaddingMedium:"12px",thPaddingLarge:"12px",tdPaddingSmall:"6px",tdPaddingMedium:"12px",tdPaddingLarge:"12px"};function io(r){const{dividerColor:d,cardColor:T,modalColor:M,popoverColor:h,tableHeaderColor:x,tableColorStriped:N,textColor1:$,textColor2:H,borderRadius:V,fontWeightStrong:B,lineHeight:k,fontSizeSmall:Y,fontSizeMedium:te,fontSizeLarge:w}=r;return Object.assign(Object.assign({},ro),{fontSizeSmall:Y,fontSizeMedium:te,fontSizeLarge:w,lineHeight:k,borderRadius:V,borderColor:de(T,d),borderColorModal:de(M,d),borderColorPopover:de(h,d),tdColor:T,tdColorModal:M,tdColorPopover:h,tdColorStriped:de(T,N),tdColorStripedModal:de(M,N),tdColorStripedPopover:de(h,N),thColor:de(T,x),thColorModal:de(M,x),thColorPopover:de(h,x),thTextColor:$,tdTextColor:H,thFontWeight:B})}const so={common:Qe,self:io},uo=C([c("slider",`
 display: block;
 padding: calc((var(--n-handle-size) - var(--n-rail-height)) / 2) 0;
 position: relative;
 z-index: 0;
 width: 100%;
 cursor: pointer;
 user-select: none;
 -webkit-user-select: none;
 `,[j("reverse",[c("slider-handles",[c("slider-handle-wrapper",`
 transform: translate(50%, -50%);
 `)]),c("slider-dots",[c("slider-dot",`
 transform: translateX(50%, -50%);
 `)]),j("vertical",[c("slider-handles",[c("slider-handle-wrapper",`
 transform: translate(-50%, -50%);
 `)]),c("slider-marks",[c("slider-mark",`
 transform: translateY(calc(-50% + var(--n-dot-height) / 2));
 `)]),c("slider-dots",[c("slider-dot",`
 transform: translateX(-50%) translateY(0);
 `)])])]),j("vertical",`
 box-sizing: content-box;
 padding: 0 calc((var(--n-handle-size) - var(--n-rail-height)) / 2);
 width: var(--n-rail-width-vertical);
 height: 100%;
 `,[c("slider-handles",`
 top: calc(var(--n-handle-size) / 2);
 right: 0;
 bottom: calc(var(--n-handle-size) / 2);
 left: 0;
 `,[c("slider-handle-wrapper",`
 top: unset;
 left: 50%;
 transform: translate(-50%, 50%);
 `)]),c("slider-rail",`
 height: 100%;
 `,[De("fill",`
 top: unset;
 right: 0;
 bottom: unset;
 left: 0;
 `)]),j("with-mark",`
 width: var(--n-rail-width-vertical);
 margin: 0 32px 0 8px;
 `),c("slider-marks",`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 22px;
 font-size: var(--n-mark-font-size);
 `,[c("slider-mark",`
 transform: translateY(50%);
 white-space: nowrap;
 `)]),c("slider-dots",`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 50%;
 `,[c("slider-dot",`
 transform: translateX(-50%) translateY(50%);
 `)])]),j("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `,[c("slider-handle",`
 cursor: not-allowed;
 `)]),j("with-mark",`
 width: 100%;
 margin: 8px 0 32px 0;
 `),C("&:hover",[c("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[De("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),c("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),j("active",[c("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[De("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),c("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),c("slider-marks",`
 position: absolute;
 top: 18px;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[c("slider-mark",`
 position: absolute;
 transform: translateX(-50%);
 white-space: nowrap;
 `)]),c("slider-rail",`
 width: 100%;
 position: relative;
 height: var(--n-rail-height);
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 border-radius: calc(var(--n-rail-height) / 2);
 `,[De("fill",`
 position: absolute;
 top: 0;
 bottom: 0;
 border-radius: calc(var(--n-rail-height) / 2);
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-fill-color);
 `)]),c("slider-handles",`
 position: absolute;
 top: 0;
 right: calc(var(--n-handle-size) / 2);
 bottom: 0;
 left: calc(var(--n-handle-size) / 2);
 `,[c("slider-handle-wrapper",`
 outline: none;
 position: absolute;
 top: 50%;
 transform: translate(-50%, -50%);
 cursor: pointer;
 display: flex;
 `,[c("slider-handle",`
 height: var(--n-handle-size);
 width: var(--n-handle-size);
 border-radius: 50%;
 overflow: hidden;
 transition: box-shadow .2s var(--n-bezier), background-color .3s var(--n-bezier);
 background-color: var(--n-handle-color);
 box-shadow: var(--n-handle-box-shadow);
 `,[C("&:hover",`
 box-shadow: var(--n-handle-box-shadow-hover);
 `)]),C("&:focus",[c("slider-handle",`
 box-shadow: var(--n-handle-box-shadow-focus);
 `,[C("&:hover",`
 box-shadow: var(--n-handle-box-shadow-active);
 `)])])])]),c("slider-dots",`
 position: absolute;
 top: 50%;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[j("transition-disabled",[c("slider-dot","transition: none;")]),c("slider-dot",`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 transform: translate(-50%, -50%);
 height: var(--n-dot-height);
 width: var(--n-dot-width);
 border-radius: var(--n-dot-border-radius);
 overflow: hidden;
 box-sizing: border-box;
 border: var(--n-dot-border);
 background-color: var(--n-dot-color);
 `,[j("active","border: var(--n-dot-border-active);")])])]),c("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[We()]),c("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[j("top",`
 margin-bottom: 12px;
 `),j("right",`
 margin-left: 12px;
 `),j("bottom",`
 margin-top: 12px;
 `),j("left",`
 margin-right: 12px;
 `),We()]),et(c("slider",[c("slider-dot","background-color: var(--n-dot-color-modal);")])),tt(c("slider",[c("slider-dot","background-color: var(--n-dot-color-popover);")]))]);function Ze(r){return window.TouchEvent&&r instanceof window.TouchEvent}function Ge(){const r=new Map,d=T=>M=>{r.set(T,M)};return bt(()=>{r.clear()}),[r,d]}const co=0,fo=Object.assign(Object.assign({},Ve.props),{to:Oe.propTo,defaultValue:{type:[Number,Array],default:0},marks:Object,disabled:{type:Boolean,default:void 0},formatTooltip:Function,keyboard:{type:Boolean,default:!0},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:[Number,String],default:1},range:Boolean,value:[Number,Array],placement:String,showTooltip:{type:Boolean,default:void 0},tooltip:{type:Boolean,default:!0},vertical:Boolean,reverse:Boolean,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onDragstart:[Function],onDragend:[Function]}),vo=Ne({name:"Slider",props:fo,slots:Object,setup(r){const{mergedClsPrefixRef:d,namespaceRef:T,inlineThemeDisabled:M}=ot(r),h=Ve("Slider","-slider",uo,lo,r,d),x=E(null),[N,$]=Ge(),[H,V]=Ge(),B=E(new Set),k=Ct(r),{mergedDisabledRef:Y}=k,te=U(()=>{const{step:t}=r;if(Number(t)<=0||t==="mark")return 0;const n=t.toString();let i=0;return n.includes(".")&&(i=n.length-n.indexOf(".")-1),i}),w=E(r.defaultValue),Q=zt(r,"value"),fe=St(Q,w),W=U(()=>{const{value:t}=fe;return(r.range?t:[t]).map($e)}),ve=U(()=>W.value.length>2),g=U(()=>r.placement===void 0?r.vertical?"right":"top":r.placement),L=U(()=>{const{marks:t}=r;return t?Object.keys(t).map(Number.parseFloat):null}),O=E(-1),ge=E(-1),I=E(-1),oe=E(!1),ie=E(!1),me=U(()=>{const{vertical:t,reverse:n}=r;return t?n?"top":"bottom":n?"right":"left"}),_e=U(()=>{if(ve.value)return;const t=W.value,n=he(r.range?Math.min(...t):r.min),i=he(r.range?Math.max(...t):t[0]),{value:v}=me;return r.vertical?{[v]:`${n}%`,height:`${i-n}%`}:{[v]:`${n}%`,width:`${i-n}%`}}),ye=U(()=>{const t=[],{marks:n}=r;if(n){const i=W.value.slice();i.sort((G,K)=>G-K);const{value:v}=me,{value:a}=ve,{range:D}=r,F=a?()=>!1:G=>D?G>=i[0]&&G<=i[i.length-1]:G<=i[0];for(const G of Object.keys(n)){const K=Number(G);t.push({active:F(K),key:K,label:n[G],style:{[v]:`${he(K)}%`}})}}return t});function Ce(t,n){const i=he(t),{value:v}=me;return{[v]:`${i}%`,zIndex:n===O.value?1:0}}function xe(t){return r.showTooltip||I.value===t||O.value===t&&oe.value}function ae(t){return oe.value?!(O.value===t&&ge.value===t):!0}function Fe(t){var n;~t&&(O.value=t,(n=N.get(t))===null||n===void 0||n.focus())}function Ee(){H.forEach((t,n)=>{xe(n)&&t.syncPosition()})}function Re(t){const{"onUpdate:value":n,onUpdateValue:i}=r,{nTriggerFormInput:v,nTriggerFormChange:a}=k;i&&Me(i,t),n&&Me(n,t),w.value=t,v(),a()}function Te(t){const{range:n}=r;if(n){if(Array.isArray(t)){const{value:i}=W;t.join()!==i.join()&&Re(t)}}else Array.isArray(t)||W.value[0]!==t&&Re(t)}function Se(t,n){if(r.range){const i=W.value.slice();i.splice(n,1,t),Te(i)}else Te(t)}function ke(t,n,i){const v=i!==void 0;i||(i=t-n>0?1:-1);const a=L.value||[],{step:D}=r;if(D==="mark"){const K=u(t,a.concat(n),v?i:void 0);return K?K.value:n}if(D<=0)return n;const{value:F}=te;let G;if(v){const K=Number((n/D).toFixed(F)),ce=Math.floor(K),He=K>ce?ce:ce-1,Ie=K<ce?ce:ce+1;G=u(n,[Number((He*D).toFixed(F)),Number((Ie*D).toFixed(F)),...a],i)}else{const K=e(t);G=u(t,[...a,K])}return G?$e(G.value):n}function $e(t){return Math.min(r.max,Math.max(r.min,t))}function he(t){const{max:n,min:i}=r;return(t-i)/(n-i)*100}function o(t){const{max:n,min:i}=r;return i+(n-i)*t}function e(t){const{step:n,min:i}=r;if(Number(n)<=0||n==="mark")return t;const v=Math.round((t-i)/n)*n+i;return Number(v.toFixed(te.value))}function u(t,n=L.value,i){if(!(n!=null&&n.length))return null;let v=null,a=-1;for(;++a<n.length;){const D=n[a]-t,F=Math.abs(D);(i===void 0||D*i>0)&&(v===null||F<v.distance)&&(v={index:a,distance:F,value:n[a]})}return v}function _(t){const n=x.value;if(!n)return;const i=Ze(t)?t.touches[0]:t,v=n.getBoundingClientRect();let a;return r.vertical?a=(v.bottom-i.clientY)/v.height:a=(i.clientX-v.left)/v.width,r.reverse&&(a=1-a),o(a)}function z(t){if(Y.value||!r.keyboard)return;const{vertical:n,reverse:i}=r;switch(t.key){case"ArrowUp":t.preventDefault(),b(n&&i?-1:1);break;case"ArrowRight":t.preventDefault(),b(!n&&i?-1:1);break;case"ArrowDown":t.preventDefault(),b(n&&i?1:-1);break;case"ArrowLeft":t.preventDefault(),b(!n&&i?1:-1);break}}function b(t){const n=O.value;if(n===-1)return;const{step:i}=r,v=W.value[n],a=Number(i)<=0||i==="mark"?v:v+i*t;Se(ke(a,v,t>0?1:-1),n)}function y(t){var n,i;if(Y.value||!Ze(t)&&t.button!==co)return;const v=_(t);if(v===void 0)return;const a=W.value.slice(),D=r.range?(i=(n=u(v,a))===null||n===void 0?void 0:n.index)!==null&&i!==void 0?i:-1:0;D!==-1&&(t.preventDefault(),Fe(D),p(),Se(ke(v,W.value[D]),D))}function p(){oe.value||(oe.value=!0,r.onDragstart&&Me(r.onDragstart),Pe("touchend",document,S),Pe("mouseup",document,S),Pe("touchmove",document,R),Pe("mousemove",document,R))}function P(){oe.value&&(oe.value=!1,r.onDragend&&Me(r.onDragend),Be("touchend",document,S),Be("mouseup",document,S),Be("touchmove",document,R),Be("mousemove",document,R))}function R(t){const{value:n}=O;if(!oe.value||n===-1){P();return}const i=_(t);i!==void 0&&Se(ke(i,W.value[n]),n)}function S(){P()}function ne(t){O.value=t,Y.value||(I.value=t)}function A(t){O.value===t&&(O.value=-1,P()),I.value===t&&(I.value=-1)}function se(t){I.value=t}function Z(t){I.value===t&&(I.value=-1)}we(O,(t,n)=>void ze(()=>ge.value=n)),we(fe,()=>{if(r.marks){if(ie.value)return;ie.value=!0,ze(()=>{ie.value=!1})}ze(Ee)}),nt(()=>{P()});const q=U(()=>{const{self:{markFontSize:t,railColor:n,railColorHover:i,fillColor:v,fillColorHover:a,handleColor:D,opacityDisabled:F,dotColor:G,dotColorModal:K,handleBoxShadow:ce,handleBoxShadowHover:He,handleBoxShadowActive:Ie,handleBoxShadowFocus:at,dotBorder:lt,dotBoxShadow:rt,railHeight:it,railWidthVertical:st,handleSize:dt,dotHeight:ut,dotWidth:ct,dotBorderRadius:ft,fontSize:vt,dotBorderActive:mt,dotColorPopover:ht},common:{cubicBezierEaseInOut:pt}}=h.value;return{"--n-bezier":pt,"--n-dot-border":lt,"--n-dot-border-active":mt,"--n-dot-border-radius":ft,"--n-dot-box-shadow":rt,"--n-dot-color":G,"--n-dot-color-modal":K,"--n-dot-color-popover":ht,"--n-dot-height":ut,"--n-dot-width":ct,"--n-fill-color":v,"--n-fill-color-hover":a,"--n-font-size":vt,"--n-handle-box-shadow":ce,"--n-handle-box-shadow-active":Ie,"--n-handle-box-shadow-focus":at,"--n-handle-box-shadow-hover":He,"--n-handle-color":D,"--n-handle-size":dt,"--n-opacity-disabled":F,"--n-rail-color":n,"--n-rail-color-hover":i,"--n-rail-height":it,"--n-rail-width-vertical":st,"--n-mark-font-size":t}}),ee=M?je("slider",void 0,q,r):void 0,pe=U(()=>{const{self:{fontSize:t,indicatorColor:n,indicatorBoxShadow:i,indicatorTextColor:v,indicatorBorderRadius:a}}=h.value;return{"--n-font-size":t,"--n-indicator-border-radius":a,"--n-indicator-box-shadow":i,"--n-indicator-color":n,"--n-indicator-text-color":v}}),le=M?je("slider-indicator",void 0,pe,r):void 0;return{mergedClsPrefix:d,namespace:T,uncontrolledValue:w,mergedValue:fe,mergedDisabled:Y,mergedPlacement:g,isMounted:kt(),adjustedTo:Oe(r),dotTransitionDisabled:ie,markInfos:ye,isShowTooltip:xe,shouldKeepTooltipTransition:ae,handleRailRef:x,setHandleRefs:$,setFollowerRefs:V,fillStyle:_e,getHandleStyle:Ce,activeIndex:O,arrifiedValues:W,followerEnabledIndexSet:B,handleRailMouseDown:y,handleHandleFocus:ne,handleHandleBlur:A,handleHandleMouseEnter:se,handleHandleMouseLeave:Z,handleRailKeyDown:z,indicatorCssVars:M?void 0:pe,indicatorThemeClass:le==null?void 0:le.themeClass,indicatorOnRender:le==null?void 0:le.onRender,cssVars:M?void 0:q,themeClass:ee==null?void 0:ee.themeClass,onRender:ee==null?void 0:ee.onRender}},render(){var r;const{mergedClsPrefix:d,themeClass:T,formatTooltip:M}=this;return(r=this.onRender)===null||r===void 0||r.call(this),X("div",{class:[`${d}-slider`,T,{[`${d}-slider--disabled`]:this.mergedDisabled,[`${d}-slider--active`]:this.activeIndex!==-1,[`${d}-slider--with-mark`]:this.marks,[`${d}-slider--vertical`]:this.vertical,[`${d}-slider--reverse`]:this.reverse}],style:this.cssVars,onKeydown:this.handleRailKeyDown,onMousedown:this.handleRailMouseDown,onTouchstart:this.handleRailMouseDown},X("div",{class:`${d}-slider-rail`},X("div",{class:`${d}-slider-rail__fill`,style:this.fillStyle}),this.marks?X("div",{class:[`${d}-slider-dots`,this.dotTransitionDisabled&&`${d}-slider-dots--transition-disabled`]},this.markInfos.map(h=>X("div",{key:h.key,class:[`${d}-slider-dot`,{[`${d}-slider-dot--active`]:h.active}],style:h.style}))):null,X("div",{ref:"handleRailRef",class:`${d}-slider-handles`},this.arrifiedValues.map((h,x)=>{const N=this.isShowTooltip(x);return X(gt,null,{default:()=>[X(xt,null,{default:()=>X("div",{ref:this.setHandleRefs(x),class:`${d}-slider-handle-wrapper`,tabindex:this.mergedDisabled?-1:0,role:"slider","aria-valuenow":h,"aria-valuemin":this.min,"aria-valuemax":this.max,"aria-orientation":this.vertical?"vertical":"horizontal","aria-disabled":this.disabled,style:this.getHandleStyle(h,x),onFocus:()=>{this.handleHandleFocus(x)},onBlur:()=>{this.handleHandleBlur(x)},onMouseenter:()=>{this.handleHandleMouseEnter(x)},onMouseleave:()=>{this.handleHandleMouseLeave(x)}},wt(this.$slots.thumb,()=>[X("div",{class:`${d}-slider-handle`})]))}),this.tooltip&&X(_t,{ref:this.setFollowerRefs(x),show:N,to:this.adjustedTo,enabled:this.showTooltip&&!this.range||this.followerEnabledIndexSet.has(x),teleportDisabled:this.adjustedTo===Oe.tdkey,placement:this.mergedPlacement,containerClass:this.namespace},{default:()=>X(yt,{name:"fade-in-scale-up-transition",appear:this.isMounted,css:this.shouldKeepTooltipTransition(x),onEnter:()=>{this.followerEnabledIndexSet.add(x)},onAfterLeave:()=>{this.followerEnabledIndexSet.delete(x)}},{default:()=>{var $;return N?(($=this.indicatorOnRender)===null||$===void 0||$.call(this),X("div",{class:[`${d}-slider-handle-indicator`,this.indicatorThemeClass,`${d}-slider-handle-indicator--${this.mergedPlacement}`],style:this.indicatorCssVars},typeof M=="function"?M(h):h)):null}})})]})})),this.marks?X("div",{class:`${d}-slider-marks`},this.markInfos.map(h=>X("div",{key:h.key,class:`${d}-slider-mark`,style:h.style},typeof h.label=="function"?h.label():h.label))):null))}}),mo=C([c("table",`
 font-size: var(--n-font-size);
 font-variant-numeric: tabular-nums;
 line-height: var(--n-line-height);
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 text-align: left;
 border-collapse: separate;
 border-spacing: 0;
 overflow: hidden;
 background-color: var(--n-td-color);
 border-color: var(--n-merged-border-color);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 --n-merged-border-color: var(--n-border-color);
 `,[C("th",`
 white-space: nowrap;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 text-align: inherit;
 padding: var(--n-th-padding);
 vertical-align: inherit;
 text-transform: none;
 border: 0px solid var(--n-merged-border-color);
 font-weight: var(--n-th-font-weight);
 color: var(--n-th-text-color);
 background-color: var(--n-th-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 border-right: 1px solid var(--n-merged-border-color);
 `,[C("&:last-child",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),C("td",`
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 padding: var(--n-td-padding);
 color: var(--n-td-text-color);
 background-color: var(--n-td-color);
 border: 0px solid var(--n-merged-border-color);
 border-right: 1px solid var(--n-merged-border-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 `,[C("&:last-child",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),j("bordered",`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `,[C("tr",[C("&:last-child",[C("td",`
 border-bottom: 0 solid var(--n-merged-border-color);
 `)])])]),j("single-line",[C("th",`
 border-right: 0px solid var(--n-merged-border-color);
 `),C("td",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),j("single-column",[C("tr",[C("&:not(:last-child)",[C("td",`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])]),j("striped",[C("tr:nth-of-type(even)",[C("td","background-color: var(--n-td-color-striped)")])]),Rt("bottom-bordered",[C("tr",[C("&:last-child",[C("td",`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])])]),et(c("table",`
 background-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `,[C("th",`
 background-color: var(--n-th-color-modal);
 `),C("td",`
 background-color: var(--n-td-color-modal);
 `)])),tt(c("table",`
 background-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `,[C("th",`
 background-color: var(--n-th-color-popover);
 `),C("td",`
 background-color: var(--n-td-color-popover);
 `)]))]),ho=Object.assign(Object.assign({},Ve.props),{bordered:{type:Boolean,default:!0},bottomBordered:{type:Boolean,default:!0},singleLine:{type:Boolean,default:!0},striped:Boolean,singleColumn:Boolean,size:String}),po=Ne({name:"Table",props:ho,setup(r){const{mergedClsPrefixRef:d,inlineThemeDisabled:T,mergedRtlRef:M,mergedComponentPropsRef:h}=ot(r),x=U(()=>{var B,k;return r.size||((k=(B=h==null?void 0:h.value)===null||B===void 0?void 0:B.Table)===null||k===void 0?void 0:k.size)||"medium"}),N=Ve("Table","-table",mo,so,r,d),$=Tt("Table",M,d),H=U(()=>{const B=x.value,{self:{borderColor:k,tdColor:Y,tdColorModal:te,tdColorPopover:w,thColor:Q,thColorModal:fe,thColorPopover:W,thTextColor:ve,tdTextColor:g,borderRadius:L,thFontWeight:O,lineHeight:ge,borderColorModal:I,borderColorPopover:oe,tdColorStriped:ie,tdColorStripedModal:me,tdColorStripedPopover:_e,[Ae("fontSize",B)]:ye,[Ae("tdPadding",B)]:Ce,[Ae("thPadding",B)]:xe},common:{cubicBezierEaseInOut:ae}}=N.value;return{"--n-bezier":ae,"--n-td-color":Y,"--n-td-color-modal":te,"--n-td-color-popover":w,"--n-td-text-color":g,"--n-border-color":k,"--n-border-color-modal":I,"--n-border-color-popover":oe,"--n-border-radius":L,"--n-font-size":ye,"--n-th-color":Q,"--n-th-color-modal":fe,"--n-th-color-popover":W,"--n-th-font-weight":O,"--n-th-text-color":ve,"--n-line-height":ge,"--n-td-padding":Ce,"--n-th-padding":xe,"--n-td-color-striped":ie,"--n-td-color-striped-modal":me,"--n-td-color-striped-popover":_e}}),V=T?je("table",U(()=>x.value[0]),H,r):void 0;return{rtlEnabled:$,mergedClsPrefix:d,cssVars:T?void 0:H,themeClass:V==null?void 0:V.themeClass,onRender:V==null?void 0:V.onRender}},render(){var r;const{mergedClsPrefix:d}=this;return(r=this.onRender)===null||r===void 0||r.call(this),X("table",{class:[`${d}-table`,this.themeClass,{[`${d}-table--rtl`]:this.rtlEnabled,[`${d}-table--bottom-bordered`]:this.bottomBordered,[`${d}-table--bordered`]:this.bordered,[`${d}-table--single-line`]:this.singleLine,[`${d}-table--single-column`]:this.singleColumn,[`${d}-table--striped`]:this.striped}],style:this.cssVars},this.$slots)}}),bo={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Je=Ne({name:"Add",render:function(d,T){return ue(),be("svg",bo,T[0]||(T[0]=[f("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M256 112v288"},null,-1),f("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M400 256H112"},null,-1)]))}}),go={class:"annotation-container"},xo={class:"control-panel"},wo={class:"stats-info"},_o={class:"prediction-sidebar"},yo={class:"sidebar-header"},Co={class:"prediction-list"},So={class:"prediction-info"},ko={class:"prediction-time"},zo={class:"prediction-value"},Ro={style:{"font-weight":"bold",color:"#333"}},To={style:{color:"#666"}},$o={key:0,class:"empty-list"},Do={style:{color:"#666"}},Mo={style:{color:"#666"}},Po={style:{display:"flex",gap:"12px","font-size":"12px",color:"#666"}},Bo={class:"multi-add-container"},Vo={class:"predictions-table"},Fo={class:"table-header"},Eo={key:0,class:"empty-table"},Ho={__name:"annotation3",setup(r){const d=Dt(),T=()=>"pred_"+Date.now()+"_"+Math.random().toString(36).substr(2,9),M=o=>o?new Date(o).toLocaleString():"",h=o=>o==null?"未设置":`${(o*100).toFixed(1)}%`,x=o=>o==null?"default":o>=.7?"success":o>=.3?"warning":"error",N=E(null);let $=null;const H=E(!1),V=E(!1),B=E(null),k=E(null),Y=E(!1),te=E(null),w=E([]),Q=[{label:"温度数据",value:"temperature",unit:"°C",color:"#ff6b6b"},{label:"湿度数据",value:"humidity",unit:"%RH",color:"#228be6"},{label:"压力数据",value:"pressure",unit:"kPa",color:"#20c997"},{label:"流量数据",value:"flow",unit:"L/min",color:"#ff922b"},{label:"电压数据",value:"voltage",unit:"V",color:"#cc5de8"},{label:"电流数据",value:"current",unit:"A",color:"#f06595"},{label:"功率数据",value:"power",unit:"W",color:"#ffd43b"},{label:"转速数据",value:"speed",unit:"RPM",color:"#748ffc"}],fe=o=>{const e=Q.find(u=>u.value===o);return e?e.color:"#228be6"},W=o=>{const e=Q.find(u=>u.value===o);return e?e.label:o},ve=o=>{const e=Q.find(u=>u.value===o);return e?e.unit:""},g=E({timestamp:Date.now(),value:null,dataSeries:"temperature",confidence:.8,annotation:""}),L=E({dataSeries:"temperature",annotation:"",predictions:[]}),O=()=>{L.value.predictions.push({timestamp:null,value:null,confidence:.8})},ge=o=>{L.value.predictions.splice(o,1)},I=E({}),oe=U(()=>k.value?w.value.filter(o=>o.dataSeries===k.value):w.value),ie=U(()=>{const o=k.value?w.value.filter(u=>u.dataSeries===k.value):w.value;return o.length===0?0:(o.reduce((u,_)=>u+(_.confidence||0),0)/o.length*100).toFixed(1)}),me=U(()=>{const o=parseFloat(ie.value)/100;return x(o)}),_e=U(()=>{const o=g.value;return!(!o.timestamp||o.value===null||o.value===void 0||!o.dataSeries||o.confidence===void 0||o.confidence===null||!o.annotation||o.annotation.trim()==="")}),ye=U(()=>{const o=L.value;return!o.dataSeries||o.dataSeries.trim()===""||!o.annotation||o.annotation.trim()===""||o.predictions.length===0?!1:o.predictions.every(e=>e.timestamp&&e.value!==null&&e.value!==void 0)}),Ce=()=>{const o=Date.now(),e=100;Q.forEach(u=>{const _=[],z={temperature:25,humidity:60,pressure:101.3,flow:100,voltage:220,current:10,power:2200,speed:1500}[u.value],b={temperature:15,humidity:25,pressure:10,flow:60,voltage:40,current:5,power:500,speed:200}[u.value];for(let y=0;y<e;y++){const p=o-(e-y-1)*36e5,P=z+Math.sin(y/8)*b*.5+Math.sin(y/15)*b*.3+Math.random()*b*.2;_.push({time:p,value:parseFloat(P.toFixed(2))})}I.value[u.value]=_.sort((y,p)=>y.time-p.time)})},xe=()=>{N.value&&($=jt(N.value),ae(),Fe())},ae=()=>{if(!$)return;const o=[],e=[],u=[];(k.value?[k.value]:Q.map(b=>b.value)).forEach((b,y)=>{const p=Q.find(S=>S.value===b);if(!p)return;const P=I.value[b]||[],R=w.value.filter(S=>S.dataSeries===b).sort((S,ne)=>S.timestamp-ne.timestamp);if(P.length>0&&o.push({name:p.label,type:"line",smooth:!0,symbol:"circle",symbolSize:4,lineStyle:{width:2,color:p.color,type:"solid"},itemStyle:{color:p.color},data:P.map(S=>[S.time,S.value]),tooltip:{formatter:S=>`${new Date(S[0].data[0]).toLocaleString()}<br/>
                    <span style="color: ${p.color}; font-weight: bold;">${p.label}: ${S[0].data[1]} ${p.unit}</span><br/>
                    <span style="color: #666;">原始数据</span>`},emphasis:{lineStyle:{width:3}},z:2}),R.length>0){let S=[];if(P.length>0){const A=P[P.length-1];S.push([A.time,A.value])}const ne=[...S,...R.map(A=>[A.timestamp,A.value])];o.push({name:p.label,type:"line",smooth:!0,symbol:"none",lineStyle:{width:2,color:p.color,type:"dashed",opacity:.8},data:ne,tooltip:{show:!1},silent:!0,z:3}),o.push({name:p.label,type:"scatter",symbol:"diamond",symbolSize:10,itemStyle:{color:A=>{const se=R.find(q=>q.timestamp===A.data[0]),Z=(se==null?void 0:se.confidence)||0;return Z>=.7?"#52c41a":Z>=.3?"#fa8c16":"#f5222d"},borderColor:p.color,borderWidth:2,shadowBlur:3,shadowColor:"rgba(0, 0, 0, 0.2)"},data:R.map(A=>[A.timestamp,A.value]),tooltip:{formatter:A=>{const se=new Date(A.data[0]),Z=R.find(le=>le.timestamp===A.data[0]),q=(Z==null?void 0:Z.confidence)||0,ee=q>=.7?"#52c41a":q>=.3?"#fa8c16":"#f5222d";let pe=`${se.toLocaleString()}<br/>
                    <span style="color: ${p.color}; font-weight: bold;">${p.label}: ${A.data[1]} ${p.unit}</span><br/>
                    <span style="color: ${ee}; font-weight: bold;">置信度: ${h(q)}</span>`;return Z!=null&&Z.annotation&&(pe+=`<br/><span style="color: #666;">标注说明: ${Z.annotation}</span>`),pe}},emphasis:{itemStyle:{shadowBlur:8,shadowColor:"rgba(0, 0, 0, 0.4)",scale:1.3}},z:4})}if(P.length>0&&R.length>0){const S=P[P.length-1],ne=R[0];ne.timestamp>S.time&&o.push({name:p.label,type:"line",smooth:!0,symbol:"none",lineStyle:{width:1,color:p.color,type:"dotted",opacity:.5},data:[[S.time,S.value],[ne.timestamp,ne.value]],tooltip:{show:!1},silent:!0,z:1})}e.includes(p.label)||(e.push(p.label),u.push(p.color))});const z={tooltip:{trigger:"axis",backgroundColor:"rgba(50, 50, 50, 0.95)",borderColor:"#333",borderWidth:1,textStyle:{color:"#fff"},axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{data:e,top:10,type:e.length>10?"scroll":"plain",textStyle:{fontSize:12,color:"#666"},selected:(()=>{const b={};return e.forEach(y=>{b[y]=!0}),b})()},grid:{left:"3%",right:"4%",bottom:"8%",top:e.length>0?"20%":"10%",containLabel:!0},xAxis:{type:"time",axisLine:{lineStyle:{color:"#ccc"}},axisLabel:{color:"#666",formatter:b=>{const y=new Date(b);return`${y.getMonth()+1}/${y.getDate()} ${y.getHours().toString().padStart(2,"0")}:${y.getMinutes().toString().padStart(2,"0")}`}},splitLine:{show:!0,lineStyle:{type:"dashed",color:"#eee"}}},yAxis:{type:"value",name:"数值",nameTextStyle:{color:"#666"},axisLine:{lineStyle:{color:"#ccc"}},splitLine:{show:!0,lineStyle:{type:"dashed",color:"#eee"}},axisLabel:{color:"#666"}},dataZoom:[{type:"inside",xAxisIndex:0,start:0,end:100},{type:"slider",xAxisIndex:0,start:0,end:100,bottom:20,height:20,borderColor:"#e8e8e8",fillerColor:"rgba(34, 139, 230, 0.2)",handleStyle:{color:"#228be6"}}],series:o,color:u,animation:!0,animationDuration:1e3,animationEasing:"cubicOut"};$.setOption(z,!0),$.off("legendselectchanged"),$.on("legendselectchanged",b=>{z.series.filter(p=>p.name===b.name).length>0&&(z.series.forEach((p,P)=>{p.name===b.name&&(z.series[P].show=b.selected[b.name])}),$.setOption(z))})},Fe=()=>{var b,y,p,P;const o=Date.now(),e=((y=(b=I.value.temperature)==null?void 0:b[I.value.temperature.length-1])==null?void 0:y.time)||o;[{timestamp:e+36e5,value:28.5,confidence:.85,annotation:"1小时后温度预测，预计会升温"},{timestamp:e+72e5,value:30.2,confidence:.75,annotation:"2小时后温度继续上升"},{timestamp:e+108e5,value:29.8,confidence:.65,annotation:"3小时后温度略有回落"},{timestamp:e+144e5,value:27.3,confidence:.7,annotation:"4小时后温度下降明显"}].forEach(R=>{w.value.push({id:T(),timestamp:R.timestamp,value:R.value,dataSeries:"temperature",confidence:R.confidence,annotation:R.annotation,createTime:o,isBatch:!1})});const _=((P=(p=I.value.humidity)==null?void 0:p[I.value.humidity.length-1])==null?void 0:P.time)||o;[{timestamp:_+36e5,value:62.3,confidence:.8,annotation:"湿度上升预测"},{timestamp:_+72e5,value:65.8,confidence:.7,annotation:"湿度继续上升预测"}].forEach(R=>{w.value.push({id:T(),timestamp:R.timestamp,value:R.value,dataSeries:"humidity",confidence:R.confidence,annotation:R.annotation,createTime:o,isBatch:!1})})},Ee=o=>{Y.value=!0,te.value=o.id,g.value={timestamp:o.timestamp,value:o.value,dataSeries:o.dataSeries,confidence:o.confidence,annotation:o.annotation||""},B.value=o,H.value=!0},Re=()=>{Y.value=!1,te.value=null,B.value=null,g.value={timestamp:Date.now(),value:null,dataSeries:"temperature",confidence:.8,annotation:""},H.value=!1},Te=()=>{if(!_e.value)return d.error("请填写完整信息"),!1;const o=g.value;if(Y.value&&te.value){const e=w.value.findIndex(u=>u.id===te.value);e!==-1&&(w.value[e]={...w.value[e],timestamp:o.timestamp,value:o.value,dataSeries:o.dataSeries,confidence:o.confidence,annotation:o.annotation,updateTime:Date.now()},d.success("标注更新成功"))}else{const e={id:T(),timestamp:o.timestamp,value:o.value,dataSeries:o.dataSeries,confidence:o.confidence,annotation:o.annotation,createTime:Date.now(),isBatch:!1};w.value.push(e),d.success("标注添加成功")}return Y.value=!1,te.value=null,g.value={timestamp:Date.now(),value:null,dataSeries:"temperature",confidence:.8,annotation:""},ae(),H.value=!1,!0},Se=()=>{if(!ye.value)return d.error("请填写完整信息"),!1;const o=L.value,e=[...o.predictions].filter(u=>u.timestamp&&u.value!==null).sort((u,_)=>u.timestamp-_.timestamp);return e.length===0?(d.error("没有有效的标注数据"),!1):(e.forEach(u=>{const _={id:T(),timestamp:u.timestamp,value:u.value,dataSeries:o.dataSeries,confidence:u.confidence||.8,annotation:o.annotation,createTime:Date.now(),isBatch:!0};w.value.push(_)}),L.value={dataSeries:"temperature",annotation:"",predictions:[]},ae(),V.value=!1,d.success(`成功批量添加 ${e.length} 个标注`),!0)},ke=o=>{var u;const e=w.value.findIndex(_=>_.id===o);e!==-1&&(w.value.splice(e,1),((u=B.value)==null?void 0:u.id)===o&&(B.value=null),ae(),d.success("标注已删除"))},$e=()=>{if(w.value.length===0){d.info("当前没有标注");return}confirm(`确定要清空所有 ${w.value.length} 个标注吗？`)&&(w.value=[],B.value=null,ae(),d.success("已清空所有标注"))},he=()=>{$&&$.resize()};return we(k,()=>{$&&ae()}),we(w,()=>{ae()},{deep:!0}),we(V,o=>{o&&(L.value={dataSeries:"temperature",annotation:"",predictions:[]},O())}),we(H,o=>{o&&!Y.value&&ze(()=>{if(g.value.dataSeries&&I.value[g.value.dataSeries]){const e=I.value[g.value.dataSeries];if(e&&e.length>0){const u=e[e.length-1].value;g.value.value=parseFloat((u*(1+Math.random()*.1)).toFixed(2))}}})}),Mt(()=>{Ce(),ze(()=>{xe(),window.addEventListener("resize",he)})}),nt(()=>{$&&$.dispose(),window.removeEventListener("resize",he)}),(o,e)=>{const u=Ft,_=Vt,z=Bt,b=Gt,y=Et,p=Pt,P=Kt,R=qt,S=Jt,ne=Wt,A=Ht,se=Lt,Z=Yt,q=eo,ee=Zt,pe=vo,le=to,t=Qt,n=Ot,i=oo,v=po;return ue(),be("div",go,[l(se,{"has-sider":""},{default:s(()=>[l(p,null,{default:s(()=>[f("div",xo,[l(z,{justify:"space-between",align:"center"},{default:s(()=>[l(z,null,{default:s(()=>[l(_,{type:"primary",onClick:e[0]||(e[0]=a=>H.value=!0)},{icon:s(()=>[l(u,null,{default:s(()=>[l(m(Nt))]),_:1})]),default:s(()=>[e[15]||(e[15]=J(" 添加标注 ",-1))]),_:1}),l(_,{onClick:e[1]||(e[1]=a=>V.value=!0),type:"info"},{icon:s(()=>[l(u,null,{default:s(()=>[l(m(Je))]),_:1})]),default:s(()=>[e[16]||(e[16]=J(" 批量添加标注 ",-1))]),_:1}),l(_,{type:"error",ghost:""},{default:s(()=>[...e[17]||(e[17]=[J(" 导入 ",-1)])]),_:1})]),_:1}),l(z,null,{default:s(()=>[l(b,{value:m(k),"onUpdate:value":e[2]||(e[2]=a=>Ue(k)?k.value=a:null),options:Q,style:{"min-width":"200px"},placeholder:"选择数据系列",clearable:""},null,8,["value"])]),_:1})]),_:1}),f("div",wo,[l(z,{justify:"space-between",align:"center"},{default:s(()=>[l(z,null,{default:s(()=>[l(y,{size:"small",type:"primary"},{default:s(()=>[J(" 标注数: "+re(m(w).length),1)]),_:1}),l(y,{size:"small",type:"info"},{default:s(()=>[J(" 当前系列: "+re(W(m(k))||"全部"),1)]),_:1}),l(y,{size:"small",type:m(me)},{default:s(()=>[J(" 平均置信度: "+re(m(ie))+"% ",1)]),_:1},8,["type"])]),_:1})]),_:1})])]),f("div",{ref_key:"chartRef",ref:N,class:"chart-container"},null,512)]),_:1}),l(A,{width:400,"native-scrollbar":!1,bordered:"","collapse-mode":"transform","show-trigger":"arrow-circle","collapsed-width":0},{default:s(()=>[f("div",_o,[f("div",yo,[l(z,{justify:"space-between",align:"center",style:{"margin-top":"8px"}},{default:s(()=>[e[19]||(e[19]=f("h3",null,"标注列表",-1)),l(z,null,{default:s(()=>[l(_,{size:"tiny",onClick:$e,type:"error",ghost:""},{default:s(()=>[...e[18]||(e[18]=[J(" 清空 ",-1)])]),_:1})]),_:1})]),_:1})]),f("div",Co,[l(ne,{hoverable:"",clickable:""},{default:s(()=>[(ue(!0),be(qe,null,Ke(m(oe),a=>{var D;return ue(),Xe(R,{key:a.id,onClick:F=>Ee(a),class:It({"prediction-item":!0,"prediction-item-selected":((D=m(B))==null?void 0:D.id)===a.id})},{suffix:s(()=>[l(_,{size:"tiny",circle:"",type:"error",onClick:Ut(F=>ke(a.id),["stop"])},{icon:s(()=>[l(u,null,{default:s(()=>[l(m(Ye))]),_:1})]),_:1},8,["onClick"])]),default:s(()=>[l(P,{title:a.annotation||"未设置标注说明"},{description:s(()=>[f("div",So,[f("div",ko,[l(u,{size:"14"},{default:s(()=>[l(m(Xt))]),_:1}),J(" "+re(M(a.timestamp))+" ",1),l(y,{size:"tiny",type:x(a.confidence),style:{"margin-left":"8px"}},{default:s(()=>[J(re(h(a.confidence)),1)]),_:2},1032,["type"]),a.isBatch?(ue(),Xe(y,{key:0,size:"tiny",type:"warning",style:{"margin-left":"4px"}},{default:s(()=>[...e[20]||(e[20]=[J(" 批量 ",-1)])]),_:1})):Le("",!0)]),f("div",zo,[l(z,{align:"center",size:4},{default:s(()=>[f("div",{class:"color-dot",style:At({backgroundColor:fe(a.dataSeries)})},null,4),f("span",Ro,re(W(a.dataSeries))+": ",1),f("span",To,re(a.value)+" "+re(ve(a.dataSeries)),1)]),_:2},1024)])])]),_:2},1032,["title"])]),_:2},1032,["onClick","class"])}),128)),m(oe).length===0?(ue(),be("div",$o,[l(S,{description:"暂无标注"},{extra:s(()=>[l(_,{size:"small",onClick:e[3]||(e[3]=a=>H.value=!0)},{default:s(()=>[...e[21]||(e[21]=[J(" 添加标注 ",-1)])]),_:1})]),_:1})])):Le("",!0)]),_:1})])])]),_:1})]),_:1}),l(n,{show:m(H),"onUpdate:show":e[10]||(e[10]=a=>Ue(H)?H.value=a:null),preset:"dialog",title:m(Y)?"编辑标注":"添加标注","positive-text":"确定","negative-text":"取消",onPositiveClick:Te,onNegativeClick:Re},{default:s(()=>[l(t,{ref:"formRef",model:m(g),"label-placement":"left","label-width":"100"},{default:s(()=>[l(q,{label:"时间点",path:"timestamp",required:""},{default:s(()=>[l(Z,{value:m(g).timestamp,"onUpdate:value":e[4]||(e[4]=a=>m(g).timestamp=a),type:"datetime",clearable:"",style:{width:"100%"},placeholder:"选择预测时间点"},null,8,["value"])]),_:1}),l(q,{label:"数值",path:"value",required:""},{default:s(()=>[l(ee,{value:m(g).value,"onUpdate:value":e[5]||(e[5]=a=>m(g).value=a),min:0,max:1e4,step:.01,clearable:"",placeholder:"输入预测数值",style:{width:"100%"}},{suffix:s(()=>[f("span",Do,re(ve(m(g).dataSeries)),1)]),_:1},8,["value"])]),_:1}),l(q,{label:"置信度",path:"confidence",required:""},{default:s(()=>[l(z,{vertical:"",style:{width:"100%"}},{default:s(()=>[l(pe,{value:m(g).confidence,"onUpdate:value":e[6]||(e[6]=a=>m(g).confidence=a),min:0,max:1,step:.01,style:{width:"100%"}},null,8,["value"]),l(ee,{value:m(g).confidence,"onUpdate:value":e[7]||(e[7]=a=>m(g).confidence=a),min:0,max:1,step:.01,placeholder:"输入置信度 (0-1)",style:{width:"100%"}},{suffix:s(()=>[f("span",Mo,re(h(m(g).confidence)),1)]),_:1},8,["value"]),f("div",Po,[l(z,{align:"center",size:4},{default:s(()=>[...e[22]||(e[22]=[f("div",{style:{width:"8px",height:"8px",background:"#f5222d","border-radius":"50%"}},null,-1),f("span",null,"低可信度 (0-0.3)",-1)])]),_:1}),l(z,{align:"center",size:4},{default:s(()=>[...e[23]||(e[23]=[f("div",{style:{width:"8px",height:"8px",background:"#fa8c16","border-radius":"50%"}},null,-1),f("span",null,"中等可信度 (0.3-0.7)",-1)])]),_:1}),l(z,{align:"center",size:4},{default:s(()=>[...e[24]||(e[24]=[f("div",{style:{width:"8px",height:"8px",background:"#52c41a","border-radius":"50%"}},null,-1),f("span",null,"高可信度 (0.7-1)",-1)])]),_:1})])]),_:1})]),_:1}),l(q,{label:"数据系列",path:"dataSeries",required:""},{default:s(()=>[l(b,{value:m(g).dataSeries,"onUpdate:value":e[8]||(e[8]=a=>m(g).dataSeries=a),options:Q,placeholder:"选择数据系列",style:{width:"100%"}},null,8,["value"])]),_:1}),l(q,{label:"标注说明",path:"annotation",required:""},{default:s(()=>[l(le,{value:m(g).annotation,"onUpdate:value":e[9]||(e[9]=a=>m(g).annotation=a),type:"textarea",placeholder:"请输入标注说明",autosize:{minRows:2,maxRows:5}},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["show","title"]),l(n,{show:m(V),"onUpdate:show":e[13]||(e[13]=a=>Ue(V)?V.value=a:null),preset:"dialog",title:"批量添加标注","positive-text":"确定添加","negative-text":"取消",onPositiveClick:Se,onNegativeClick:e[14]||(e[14]=a=>V.value=!1),style:{width:"700px"}},{default:s(()=>[f("div",Bo,[l(i,{type:"info",style:{"margin-bottom":"16px"}},{default:s(()=>[...e[25]||(e[25]=[J(" 可以一次性添加多个标注，这些点将用虚线连接显示在图表中 ",-1)])]),_:1}),l(q,{label:"数据系列",required:"",style:{"margin-bottom":"16px"}},{default:s(()=>[l(b,{value:m(L).dataSeries,"onUpdate:value":e[11]||(e[11]=a=>m(L).dataSeries=a),options:Q,placeholder:"选择数据系列",style:{width:"100%"}},null,8,["value"])]),_:1}),l(q,{label:"标注说明",required:"",style:{"margin-bottom":"16px"}},{default:s(()=>[l(le,{value:m(L).annotation,"onUpdate:value":e[12]||(e[12]=a=>m(L).annotation=a),type:"textarea",placeholder:"为这批标注添加统一的标注说明",autosize:{minRows:2,maxRows:5}},null,8,["value"])]),_:1}),f("div",Vo,[f("div",Fo,[l(z,{justify:"space-between",align:"center",style:{"margin-bottom":"12px"}},{default:s(()=>[e[27]||(e[27]=f("span",{style:{"font-weight":"bold"}},"标注列表",-1)),l(_,{size:"small",type:"primary",onClick:O},{icon:s(()=>[l(u,null,{default:s(()=>[l(m(Je))]),_:1})]),default:s(()=>[e[26]||(e[26]=J(" 添加行 ",-1))]),_:1})]),_:1})]),l(v,{bordered:!0,"single-line":!1,size:"small"},{default:s(()=>[e[28]||(e[28]=f("thead",null,[f("tr",null,[f("th",{style:{width:"180px"}},"时间点"),f("th",{style:{width:"120px"}},"数值"),f("th",{style:{width:"100px"}},"置信度"),f("th",{style:{width:"60px"}},"操作")])],-1)),f("tbody",null,[(ue(!0),be(qe,null,Ke(m(L).predictions,(a,D)=>(ue(),be("tr",{key:D},[f("td",null,[l(Z,{value:a.timestamp,"onUpdate:value":F=>a.timestamp=F,type:"datetime",size:"small",style:{width:"100%"},placeholder:"选择时间"},null,8,["value","onUpdate:value"])]),f("td",null,[l(ee,{value:a.value,"onUpdate:value":F=>a.value=F,size:"small",min:0,max:1e4,step:.01,placeholder:"数值",style:{width:"100%"}},null,8,["value","onUpdate:value"])]),f("td",null,[l(ee,{value:a.confidence,"onUpdate:value":F=>a.confidence=F,size:"small",min:0,max:1,step:.01,placeholder:"0-1",style:{width:"100%"}},null,8,["value","onUpdate:value"])]),f("td",null,[l(_,{size:"small",type:"error",text:"",onClick:F=>ge(D)},{icon:s(()=>[l(u,null,{default:s(()=>[l(m(Ye))]),_:1})]),_:1},8,["onClick"])])]))),128))])]),_:1}),m(L).predictions.length===0?(ue(),be("div",Eo,[l(S,{description:"暂无标注数据"},{extra:s(()=>[l(_,{size:"small",onClick:O},{default:s(()=>[...e[29]||(e[29]=[J(" 添加第一行数据 ",-1)])]),_:1})]),_:1})])):Le("",!0),e[30]||(e[30]=f("div",{style:{"margin-top":"16px","font-size":"12px",color:"#666"}}," 提示：请确保时间点按顺序排列，标注将按时间顺序连接显示 ",-1))])])]),_:1},8,["show"])])}}},Qo=$t(Ho,[["__scopeId","data-v-83443dd1"]]);export{Qo as default};
