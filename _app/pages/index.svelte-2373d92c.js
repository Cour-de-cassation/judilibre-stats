var ut=Object.defineProperty,ft=Object.defineProperties;var ht=Object.getOwnPropertyDescriptors;var ze=Object.getOwnPropertySymbols;var _t=Object.prototype.hasOwnProperty,vt=Object.prototype.propertyIsEnumerable;var Ne=(s,e,t)=>e in s?ut(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,ee=(s,e)=>{for(var t in e||(e={}))_t.call(e,t)&&Ne(s,t,e[t]);if(ze)for(var t of ze(e))vt.call(e,t)&&Ne(s,t,e[t]);return s},_e=(s,e)=>ft(s,ht(e));import{S as ne,i as ie,s as oe,H as Le,e as v,k as G,c as m,a as g,d as c,n as H,b as _,f as M,F as h,I as Te,J as Be,K as Re,x as W,u as B,E as ce,G as K,L as pe,M as mt,N as gt,O as pt,t as te,g as re,P as ye,Q as yt,R as bt,T as Et,U as wt,V as Dt,W as qt,X as kt,Y as It,Z as Vt,_ as Ct,$ as St,a0 as At,a1 as Ft,a2 as Je,l as Ge,j as de,m as ue,o as fe,v as he,a3 as He,a4 as be,a5 as Ke,r as we,w as De,a6 as Ee,a7 as Ot,a8 as Ue,h as Pt,a9 as Mt}from"../chunks/vendor-bd6a732b.js";const Wt=s=>({}),Qe=s=>({}),jt=s=>({}),Xe=s=>({});function zt(s){let e,t,r,l,a,n;const d=s[1].title,i=Le(d,s,s[0],Xe),b=s[1].desc,y=Le(b,s,s[0],Qe);return{c(){e=v("div"),t=v("div"),r=v("h4"),i&&i.c(),l=G(),a=v("p"),y&&y.c(),this.h()},l(f){e=m(f,"DIV",{class:!0});var p=g(e);t=m(p,"DIV",{class:!0});var w=g(t);r=m(w,"H4",{class:!0});var F=g(r);i&&i.l(F),F.forEach(c),l=H(w),a=m(w,"P",{class:!0});var S=g(a);y&&y.l(S),S.forEach(c),w.forEach(c),p.forEach(c),this.h()},h(){_(r,"class","fr-tile__title"),_(a,"class","rf-tile__desc fr-mt-0 fr-mb-0"),_(t,"class","fr-tile__body"),_(e,"class","fr-tile")},m(f,p){M(f,e,p),h(e,t),h(t,r),i&&i.m(r,null),h(t,l),h(t,a),y&&y.m(a,null),n=!0},p(f,[p]){i&&i.p&&(!n||p&1)&&Te(i,d,f,f[0],n?Re(d,f[0],p,jt):Be(f[0]),Xe),y&&y.p&&(!n||p&1)&&Te(y,b,f,f[0],n?Re(b,f[0],p,Wt):Be(f[0]),Qe)},i(f){n||(W(i,f),W(y,f),n=!0)},o(f){B(i,f),B(y,f),n=!1},d(f){f&&c(e),i&&i.d(f),y&&y.d(f)}}}function Nt(s,e,t){let{$$slots:r={},$$scope:l}=e;return s.$$set=a=>{"$$scope"in a&&t(0,l=a.$$scope)},[l,r]}class Lt extends ne{constructor(e){super();ie(this,e,Nt,zt,oe,{})}}function Tt(s){let e;return{c(){e=v("canvas"),this.h()},l(t){e=m(t,"CANVAS",{style:!0}),g(e).forEach(c),this.h()},h(){ce(e,"height",s[0]||"250px")},m(t,r){M(t,e,r),s[5](e)},p(t,[r]){r&1&&ce(e,"height",t[0]||"250px")},i:K,o:K,d(t){t&&c(e),s[5](null)}}}function Bt(s,e,t){let{type:r="line"}=e,{data:l}=e,{height:a}=e,{options:n={}}=e;pe.register(...mt),pe.register(gt),pe.defaults.font.family='"Marianne"';let d,i,b;function y(){b=d.getContext("2d"),i?(i.data=l,i.update()):i=new pe(b,{type:r,data:l,options:n})}function f(p){pt[p?"unshift":"push"](()=>{d=p,t(1,d)})}return s.$$set=p=>{"type"in p&&t(2,r=p.type),"data"in p&&t(3,l=p.data),"height"in p&&t(0,a=p.height),"options"in p&&t(4,n=p.options)},s.$$.update=()=>{s.$$.dirty&8&&l&&y()},[a,d,r,l,n,f]}class Rt extends ne{constructor(e){super();ie(this,e,Bt,Tt,oe,{type:2,data:3,height:0,options:4})}}function Ye(s){let e;return{c(){e=te("(pas de requ\xEAte)")},l(t){e=re(t,"(pas de requ\xEAte)")},m(t,r){M(t,e,r)},d(t){t&&c(e)}}}function Jt(s){let e,t=s[0]&&s[0].length===0&&Ye();return{c(){e=v("div"),t&&t.c(),this.h()},l(r){e=m(r,"DIV",{id:!0,style:!0,class:!0});var l=g(e);t&&t.l(l),l.forEach(c),this.h()},h(){_(e,"id","wordcloud"),ce(e,"height","100%"),ce(e,"max-height","250px"),ce(e,"display","block"),ce(e,"margin","auto"),_(e,"class","svelte-f0olj7"),ye(e,"inactive",s[1])},m(r,l){M(r,e,l),t&&t.m(e,null)},p(r,[l]){r[0]&&r[0].length===0?t||(t=Ye(),t.c(),t.m(e,null)):t&&(t.d(1),t=null),l&2&&ye(e,"inactive",r[1])},i:K,o:K,d(r){r&&c(e),t&&t.d()}}}function Gt(s,e,t){const r=yt(),l={schemeCategory10:Et,schemeAccent:wt,schemeDark2:Dt,schemePaired:qt,schemePastel1:kt,schemePastel2:It,schemeSet1:Vt,schemeSet2:Ct,schemeSet3:St,schemeTableau10:At};let{words:a}=e,{height:n=900}=e,{width:d=1600}=e,{font:i='"Marianne"'}=e,{maxFontSize:b=250}=e,{maxWeight:y=800}=e,{scheme:f="schemeTableau10"}=e,{padding:p=4}=e,w=!1,F="";const S=bt(l[f]),j=E=>r("click",E),V=E=>r("mouseover",E),Y=E=>r("mouseout",E),z=E=>r("mousemove",E);let U;const q=E=>{Je("#wordcloud").append("svg").attr("viewBox",`0 0 ${d} ${n}`).attr("width","100%").attr("height","100%").classed("svg-content-responsive",!0).append("g").attr("transform","translate("+U.size()[0]/2+","+U.size()[1]/2+")").selectAll("text").data(E).enter().append("text").style("font-size",P=>P.size+"px").style("font-weight",P=>P.weight).style("font-family",i).style("fill",(P,R)=>S(R)).attr("text-anchor","middle").attr("transform",P=>"translate("+[P.x,P.y]+")rotate("+P.rotate+")").text(P=>P.text).on("click",j).on("mouseover",V).on("mouseout",Y).on("mousemove",z)},O=()=>{if(a.length){t(1,w=!1),U&&Je("#wordcloud").select("svg").remove(),t(9,F=JSON.stringify(a));const E=a.sort((A,C)=>C.count-A.count),P=E[0].count,R=b*10/E[0].text.length;U=Ft().size([d,n]).words(E).padding(p).rotate(A=>A.text.length>20?0:~~(Math.random()*2)*90).font(i).fontSize(A=>Math.floor(Math.log(A.count+1)**1.5/Math.log(P+1)**1.5*R)).fontWeight(A=>Math.floor(A.count/P*y)).on("end",q),U.start()}else t(9,F=JSON.stringify(a)),t(1,w=!0)};return s.$$set=E=>{"words"in E&&t(0,a=E.words),"height"in E&&t(2,n=E.height),"width"in E&&t(3,d=E.width),"font"in E&&t(4,i=E.font),"maxFontSize"in E&&t(5,b=E.maxFontSize),"maxWeight"in E&&t(6,y=E.maxWeight),"scheme"in E&&t(7,f=E.scheme),"padding"in E&&t(8,p=E.padding)},s.$$.update=()=>{s.$$.dirty&513&&a&&JSON.stringify(a)!==F&&O()},[a,w,n,d,i,b,y,f,p,F]}class Ht extends ne{constructor(e){super();ie(this,e,Gt,Jt,oe,{words:0,height:2,width:3,font:4,maxFontSize:5,maxWeight:6,scheme:7,padding:8})}}function Ze(s){let e;function t(a,n){return a[1]?Ut:Kt}let r=t(s),l=r(s);return{c(){l.c(),e=Ge()},l(a){l.l(a),e=Ge()},m(a,n){l.m(a,n),M(a,e,n)},p(a,n){r!==(r=t(a))&&(l.d(1),l=r(a),l&&(l.c(),l.m(e.parentNode,e)))},d(a){l.d(a),a&&c(e)}}}function Kt(s){let e,t,r,l,a;return{c(){e=v("div"),t=v("div"),r=v("div"),l=v("div"),a=v("div"),this.h()},l(n){e=m(n,"DIV",{class:!0});var d=g(e);t=m(d,"DIV",{class:!0}),g(t).forEach(c),r=m(d,"DIV",{class:!0}),g(r).forEach(c),l=m(d,"DIV",{class:!0}),g(l).forEach(c),a=m(d,"DIV",{class:!0}),g(a).forEach(c),d.forEach(c),this.h()},h(){_(t,"class","svelte-17v7cxr"),_(r,"class","svelte-17v7cxr"),_(l,"class","svelte-17v7cxr"),_(a,"class","svelte-17v7cxr"),_(e,"class","lds-ellipsis svelte-17v7cxr")},m(n,d){M(n,e,d),h(e,t),h(e,r),h(e,l),h(e,a)},d(n){n&&c(e)}}}function Ut(s){let e,t,r,l,a,n,d,i,b,y,f,p,w,F;return{c(){e=v("div"),t=v("div"),r=v("div"),l=v("div"),a=v("div"),n=v("div"),d=v("div"),i=v("div"),b=v("div"),y=v("div"),f=v("div"),p=v("div"),w=v("div"),F=v("div"),this.h()},l(S){e=m(S,"DIV",{class:!0});var j=g(e);t=m(j,"DIV",{class:!0});var V=g(t);r=m(V,"DIV",{class:!0}),g(r).forEach(c),l=m(V,"DIV",{class:!0}),g(l).forEach(c),a=m(V,"DIV",{class:!0}),g(a).forEach(c),n=m(V,"DIV",{class:!0}),g(n).forEach(c),d=m(V,"DIV",{class:!0}),g(d).forEach(c),i=m(V,"DIV",{class:!0}),g(i).forEach(c),b=m(V,"DIV",{class:!0}),g(b).forEach(c),y=m(V,"DIV",{class:!0}),g(y).forEach(c),f=m(V,"DIV",{class:!0}),g(f).forEach(c),p=m(V,"DIV",{class:!0}),g(p).forEach(c),w=m(V,"DIV",{class:!0}),g(w).forEach(c),F=m(V,"DIV",{class:!0}),g(F).forEach(c),V.forEach(c),j.forEach(c),this.h()},h(){_(r,"class","svelte-17v7cxr"),_(l,"class","svelte-17v7cxr"),_(a,"class","svelte-17v7cxr"),_(n,"class","svelte-17v7cxr"),_(d,"class","svelte-17v7cxr"),_(i,"class","svelte-17v7cxr"),_(b,"class","svelte-17v7cxr"),_(y,"class","svelte-17v7cxr"),_(f,"class","svelte-17v7cxr"),_(p,"class","svelte-17v7cxr"),_(w,"class","svelte-17v7cxr"),_(F,"class","svelte-17v7cxr"),_(t,"class","lds-spinner svelte-17v7cxr"),_(e,"class","load-content svelte-17v7cxr")},m(S,j){M(S,e,j),h(e,t),h(t,r),h(t,l),h(t,a),h(t,n),h(t,d),h(t,i),h(t,b),h(t,y),h(t,f),h(t,p),h(t,w),h(t,F)},d(S){S&&c(e)}}}function Qt(s){let e,t=s[0]&&Ze(s);return{c(){e=v("div"),t&&t.c(),this.h()},l(r){e=m(r,"DIV",{class:!0});var l=g(e);t&&t.l(l),l.forEach(c),this.h()},h(){_(e,"class","svelte-17v7cxr"),ye(e,"fulldiv-container",s[0]&&s[1])},m(r,l){M(r,e,l),t&&t.m(e,null)},p(r,[l]){r[0]?t?t.p(r,l):(t=Ze(r),t.c(),t.m(e,null)):t&&(t.d(1),t=null),l&3&&ye(e,"fulldiv-container",r[0]&&r[1])},i:K,o:K,d(r){r&&c(e),t&&t.d()}}}function Xt(s,e,t){let{show:r=!1}=e,{fulldiv:l=!0}=e;return s.$$set=a=>{"show"in a&&t(0,r=a.show),"fulldiv"in a&&t(1,l=a.fulldiv)},[r,l]}class $e extends ne{constructor(e){super();ie(this,e,Xt,Qt,oe,{show:0,fulldiv:1})}}function xe(s,e,t){const r=s.slice();return r[20]=e[t],r[22]=t,r}function et(s,e,t){const r=s.slice();return r[20]=e[t],r[22]=t,r}function tt(s,e,t){const r=s.slice();return r[24]=e[t],r}function rt(s,e,t){const r=s.slice();return r[27]=e[t],r}function st(s){let e,t=s[27].label+"",r,l,a;return{c(){e=v("option"),r=te(t),l=G(),this.h()},l(n){e=m(n,"OPTION",{});var d=g(e);r=re(d,t),l=H(d),d.forEach(c),this.h()},h(){e.__value=a=s[27],e.value=e.__value},m(n,d){M(n,e,d),h(e,r),h(e,l)},p:K,d(n){n&&c(e)}}}function lt(s){let e,t=s[24].label+"",r,l,a;return{c(){e=v("option"),r=te(t),l=G(),this.h()},l(n){e=m(n,"OPTION",{});var d=g(e);r=re(d,t),l=H(d),d.forEach(c),this.h()},h(){e.__value=a=s[24],e.value=e.__value},m(n,d){M(n,e,d),h(e,r),h(e,l)},p:K,d(n){n&&c(e)}}}function Yt(s){let e,t;return e=new $e({props:{show:s[3][s[20].query],fulldiv:!1}}),{c(){de(e.$$.fragment)},l(r){ue(e.$$.fragment,r)},m(r,l){fe(e,r,l),t=!0},p(r,l){const a={};l&8&&(a.show=r[3][r[20].query]),e.$set(a)},i(r){t||(W(e.$$.fragment,r),t=!0)},o(r){B(e.$$.fragment,r),t=!1},d(r){he(e,r)}}}function Zt(s){let e=(s[20].type==="number"?s[2][s[20].query].data:s[2][s[20].query].data.replace(/(....)-(..)-(..)/,"$3/$2/$1"))+"",t;return{c(){t=te(e)},l(r){t=re(r,e)},m(r,l){M(r,t,l)},p(r,l){l&4&&e!==(e=(r[20].type==="number"?r[2][r[20].query].data:r[2][r[20].query].data.replace(/(....)-(..)-(..)/,"$3/$2/$1"))+"")&&Pt(t,e)},i:K,o:K,d(r){r&&c(t)}}}function $t(s){let e,t,r,l;const a=[Zt,Yt],n=[];function d(i,b){return i[2][i[20].query]&&!i[3][i[20].query]?0:1}return t=d(s),r=n[t]=a[t](s),{c(){e=v("span"),r.c(),this.h()},l(i){e=m(i,"SPAN",{slot:!0});var b=g(e);r.l(b),b.forEach(c),this.h()},h(){_(e,"slot","title")},m(i,b){M(i,e,b),n[t].m(e,null),l=!0},p(i,b){let y=t;t=d(i),t===y?n[t].p(i,b):(we(),B(n[y],1,1,()=>{n[y]=null}),De(),r=n[t],r?r.p(i,b):(r=n[t]=a[t](i),r.c()),W(r,1),r.m(e,null))},i(i){l||(W(r),l=!0)},o(i){B(r),l=!1},d(i){i&&c(e),n[t].d()}}}function xt(s){let e,t=s[5][s[20].query]+"",r;return{c(){e=v("span"),r=te(t),this.h()},l(l){e=m(l,"SPAN",{slot:!0});var a=g(e);r=re(a,t),a.forEach(c),this.h()},h(){_(e,"slot","desc")},m(l,a){M(l,e,a),h(e,r)},p:K,d(l){l&&c(e)}}}function at(s){let e,t,r,l;return t=new Lt({props:{$$slots:{desc:[xt],title:[$t]},$$scope:{ctx:s}}}),{c(){e=v("div"),de(t.$$.fragment),r=G(),this.h()},l(a){e=m(a,"DIV",{class:!0});var n=g(e);ue(t.$$.fragment,n),r=H(n),n.forEach(c),this.h()},h(){_(e,"class","fr-col loader-parent")},m(a,n){M(a,e,n),fe(t,e,null),h(e,r),l=!0},p(a,n){const d={};n&1073741836&&(d.$$scope={dirty:n,ctx:a}),t.$set(d)},i(a){l||(W(t.$$.fragment,a),l=!0)},o(a){B(t.$$.fragment,a),l=!1},d(a){a&&c(e),he(t)}}}function er(s){let e,t;return e=new Ht({props:{words:s[2][s[20].query]&&s[9](s[2][s[20].query].data)}}),{c(){de(e.$$.fragment)},l(r){ue(e.$$.fragment,r)},m(r,l){fe(e,r,l),t=!0},p(r,l){const a={};l&4&&(a.words=r[2][r[20].query]&&r[9](r[2][r[20].query].data)),e.$set(a)},i(r){t||(W(e.$$.fragment,r),t=!0)},o(r){B(e.$$.fragment,r),t=!1},d(r){he(e,r)}}}function tr(s){let e,t;return e=new Rt({props:{height:s[20].height,type:s[20].type,data:s[2][s[20].query]&&s[8](s[2][s[20].query].data,s[20].query,s[2][s[20].query].type,s[20].chartType,s[20].fill),options:ee({plugins:{datalabels:{color:"#ffffff"},title:{display:!0,text:s[5][s[20].query]},legend:{display:s[20].legend}}},s[2][s[20].query]&&s[2][s[20].query].type==="time_series"?_e(ee({},s[10]),{scales:{x:{type:"time"}}}):_e(ee({},s[10]),{indexAxis:s[20].indexAxis||"x"}))}}),{c(){de(e.$$.fragment)},l(r){ue(e.$$.fragment,r)},m(r,l){fe(e,r,l),t=!0},p(r,l){const a={};l&4&&(a.data=r[2][r[20].query]&&r[8](r[2][r[20].query].data,r[20].query,r[2][r[20].query].type,r[20].chartType,r[20].fill)),l&4&&(a.options=ee({plugins:{datalabels:{color:"#ffffff"},title:{display:!0,text:r[5][r[20].query]},legend:{display:r[20].legend}}},r[2][r[20].query]&&r[2][r[20].query].type==="time_series"?_e(ee({},r[10]),{scales:{x:{type:"time"}}}):_e(ee({},r[10]),{indexAxis:r[20].indexAxis||"x"}))),e.$set(a)},i(r){t||(W(e.$$.fragment,r),t=!0)},o(r){B(e.$$.fragment,r),t=!1},d(r){he(e,r)}}}function nt(s){let e,t,r,l,a,n,d;t=new $e({props:{show:s[3][s[20].query]&&s[2][s[20].query]}});const i=[tr,er],b=[];function y(f,p){return f[20].type!=="wordCloud"?0:1}return l=y(s),a=b[l]=i[l](s),{c(){e=v("div"),de(t.$$.fragment),r=G(),a.c(),n=G(),this.h()},l(f){e=m(f,"DIV",{class:!0});var p=g(e);ue(t.$$.fragment,p),r=H(p),a.l(p),n=H(p),p.forEach(c),this.h()},h(){_(e,"class","fr-col-12 fr-col-md-6 loader-parent")},m(f,p){M(f,e,p),fe(t,e,null),h(e,r),b[l].m(e,null),h(e,n),d=!0},p(f,p){const w={};p&12&&(w.show=f[3][f[20].query]&&f[2][f[20].query]),t.$set(w),a.p(f,p)},i(f){d||(W(t.$$.fragment,f),W(a),d=!0)},o(f){B(t.$$.fragment,f),B(a),d=!1},d(f){f&&c(e),he(t),b[l].d()}}}function rr(s){let e,t,r,l,a,n,d,i,b,y,f,p,w,F,S,j,V,Y,z,U,q,O,E,P,R,A,C,Z,Q,X,se=s[6],N=[];for(let u=0;u<se.length;u+=1)N[u]=st(rt(s,se,u));let le=s[7],L=[];for(let u=0;u<le.length;u+=1)L[u]=lt(tt(s,le,u));let $=s[4].filter(it),k=[];for(let u=0;u<$.length;u+=1)k[u]=at(et(s,$,u));const ct=u=>B(k[u],1,1,()=>{k[u]=null});let x=s[4].filter(ot),I=[];for(let u=0;u<x.length;u+=1)I[u]=nt(xe(s,x,u));const dt=u=>B(I[u],1,1,()=>{I[u]=null});return{c(){e=v("div"),t=v("div"),r=v("div"),l=v("div"),a=v("div"),n=v("div"),d=v("div"),i=v("div"),b=v("div"),y=v("label"),f=te("Plage de dates"),p=G(),w=v("select");for(let u=0;u<N.length;u+=1)N[u].c();F=G(),S=v("div"),j=v("label"),V=te("Environnement"),Y=G(),z=v("select");for(let u=0;u<L.length;u+=1)L[u].c();U=G(),q=v("div"),O=v("div"),E=v("div");for(let u=0;u<k.length;u+=1)k[u].c();P=G(),R=v("div"),A=v("div"),C=v("div");for(let u=0;u<I.length;u+=1)I[u].c();this.h()},l(u){e=m(u,"DIV",{class:!0});var D=g(e);t=m(D,"DIV",{class:!0});var o=g(t);r=m(o,"DIV",{class:!0});var J=g(r);l=m(J,"DIV",{class:!0});var qe=g(l);a=m(qe,"DIV",{class:!0});var ae=g(a);n=m(ae,"DIV",{class:!0});var ke=g(n);d=m(ke,"DIV",{class:!0});var Ie=g(d);i=m(Ie,"DIV",{class:!0});var ve=g(i);b=m(ve,"DIV",{class:!0});var me=g(b);y=m(me,"LABEL",{class:!0,for:!0});var Ve=g(y);f=re(Ve,"Plage de dates"),Ve.forEach(c),p=H(me),w=m(me,"SELECT",{id:!0,class:!0});var Ce=g(w);for(let T=0;T<N.length;T+=1)N[T].l(Ce);Ce.forEach(c),me.forEach(c),F=H(ve),S=m(ve,"DIV",{class:!0});var ge=g(S);j=m(ge,"LABEL",{class:!0,for:!0});var Se=g(j);V=re(Se,"Environnement"),Se.forEach(c),Y=H(ge),z=m(ge,"SELECT",{id:!0,class:!0});var Ae=g(z);for(let T=0;T<L.length;T+=1)L[T].l(Ae);Ae.forEach(c),ge.forEach(c),ve.forEach(c),Ie.forEach(c),ke.forEach(c),U=H(ae),q=m(ae,"DIV",{class:!0});var Fe=g(q);O=m(Fe,"DIV",{class:!0});var Oe=g(O);E=m(Oe,"DIV",{class:!0});var Pe=g(E);for(let T=0;T<k.length;T+=1)k[T].l(Pe);Pe.forEach(c),Oe.forEach(c),Fe.forEach(c),P=H(ae),R=m(ae,"DIV",{class:!0});var Me=g(R);A=m(Me,"DIV",{class:!0});var We=g(A);C=m(We,"DIV",{class:!0});var je=g(C);for(let T=0;T<I.length;T+=1)I[T].l(je);je.forEach(c),We.forEach(c),Me.forEach(c),ae.forEach(c),qe.forEach(c),J.forEach(c),o.forEach(c),D.forEach(c),this.h()},h(){_(y,"class","fr-label"),_(y,"for","date"),_(w,"id","date"),_(w,"class","fr-select"),s[0]===void 0&&He(()=>s[11].call(w)),_(b,"class","fr-col-6"),_(j,"class","fr-label"),_(j,"for","env"),_(z,"id","env"),_(z,"class","fr-select"),s[1]===void 0&&He(()=>s[12].call(z)),_(S,"class","fr-col-6"),_(i,"class","fr-grid-row fr-grid-row--gutters"),_(d,"class","fr-container fr-container--fluid"),_(n,"class","fr-col-12"),_(E,"class","fr-grid-row fr-grid-row--gutters fr-grid-row--center"),_(O,"class","fr-container fr-container--fluid"),_(q,"class","fr-col-12"),_(C,"class","fr-grid-row fr-grid-row--gutters fr-grid-row--center"),_(A,"class","fr-container fr-container--fluid"),_(R,"class","fr-col-12"),_(a,"class","fr-grid-row fr-grid-row--gutters fr-grid-row--center"),_(l,"class","fr-container fr-container--fluid"),_(r,"class","fr-col-12"),_(t,"class","fr-grid-row fr-grid-row--gutters"),_(e,"class","fr-container fr-container--fluid")},m(u,D){M(u,e,D),h(e,t),h(t,r),h(r,l),h(l,a),h(a,n),h(n,d),h(d,i),h(i,b),h(b,y),h(y,f),h(b,p),h(b,w);for(let o=0;o<N.length;o+=1)N[o].m(w,null);be(w,s[0]),h(i,F),h(i,S),h(S,j),h(j,V),h(S,Y),h(S,z);for(let o=0;o<L.length;o+=1)L[o].m(z,null);be(z,s[1]),h(a,U),h(a,q),h(q,O),h(O,E);for(let o=0;o<k.length;o+=1)k[o].m(E,null);h(a,P),h(a,R),h(R,A),h(A,C);for(let o=0;o<I.length;o+=1)I[o].m(C,null);Z=!0,Q||(X=[Ke(w,"change",s[11]),Ke(z,"change",s[12])],Q=!0)},p(u,[D]){if(D&64){se=u[6];let o;for(o=0;o<se.length;o+=1){const J=rt(u,se,o);N[o]?N[o].p(J,D):(N[o]=st(J),N[o].c(),N[o].m(w,null))}for(;o<N.length;o+=1)N[o].d(1);N.length=se.length}if(D&65&&be(w,u[0]),D&128){le=u[7];let o;for(o=0;o<le.length;o+=1){const J=tt(u,le,o);L[o]?L[o].p(J,D):(L[o]=lt(J),L[o].c(),L[o].m(z,null))}for(;o<L.length;o+=1)L[o].d(1);L.length=le.length}if(D&130&&be(z,u[1]),D&60){$=u[4].filter(it);let o;for(o=0;o<$.length;o+=1){const J=et(u,$,o);k[o]?(k[o].p(J,D),W(k[o],1)):(k[o]=at(J),k[o].c(),W(k[o],1),k[o].m(E,null))}for(we(),o=$.length;o<k.length;o+=1)ct(o);De()}if(D&1852){x=u[4].filter(ot);let o;for(o=0;o<x.length;o+=1){const J=xe(u,x,o);I[o]?(I[o].p(J,D),W(I[o],1)):(I[o]=nt(J),I[o].c(),W(I[o],1),I[o].m(C,null))}for(we(),o=x.length;o<I.length;o+=1)dt(o);De()}},i(u){if(!Z){for(let D=0;D<$.length;D+=1)W(k[D]);for(let D=0;D<x.length;D+=1)W(I[D]);Z=!0}},o(u){k=k.filter(Boolean);for(let D=0;D<k.length;D+=1)B(k[D]);I=I.filter(Boolean);for(let D=0;D<I.length;D+=1)B(I[D]);Z=!1},d(u){u&&c(e),Ee(N,u),Ee(L,u),Ee(k,u),Ee(I,u),Q=!1,Ot(X)}}}let sr=50;const it=s=>["number","date"].includes(s.type),ot=s=>!["number","date"].includes(s.type);function lr(s,e,t){const r=[{query:"total_docs",type:"number"},{query:"last_decision_date",type:"date"},{query:"api_requests_number",type:"number"},{query:"decision_uniq_number",type:"number"},{query:"pods_number",type:"number"},{query:"api_requests_date_histogram",type:"line",legend:!0},{query:"top_words",type:"wordCloud",height:"400px",col:12,legend:!1},{query:"requests_ip_source",type:"pie",legend:!0},{query:"piste",type:"bar",legend:!1},{query:"errors_histogram",type:"bar",indexAxis:"y",legend:!1},{query:"latencty_date_histogram",type:"line",fill:!0,legend:!0},{query:"cpu_date_histogram",type:"line",fill:!0,legend:!0},{query:"mem_date_histogram",type:"line",fill:!0,legend:!0},{query:"bandwidth_date_histogram",type:"line",legend:!1}],l={total_docs:"D\xE9cisions index\xE9es",last_decision_date:"Date de la derni\xE8re d\xE9cision",api_requests_number:"Appels API",api_requests_date_histogram:"Requ\xEAtes",decision_uniq_number:"D\xE9cisions consult\xE9es",errors_histogram:"Erreurs http",requests_ip_source:"Canal d'appel",piste:"Utilisateurs Piste",latencty_date_histogram:"Latence",cpu_date_histogram:"CPU %",mem_date_histogram:"M\xE9moire",bandwidth_date_histogram:"R\xE9seau (octets)",top_words:"Recherches",pods_number:"Conteneurs"},a=[{label:"Dernier jour",start:"now-1d",end:"now",step:"1h"},{label:"Derni\xE8re heure",start:"now-1h",end:"now",step:"1m"},{label:"Derni\xE8re semaine",start:"now-7d",end:"now",step:"4h"},{label:"Dernier mois",start:"now-30d",end:"now",step:"1d"},{label:"Depuis le d\xE9but",start:"2020-01-01T00:00:00",end:"now",step:"1d"}],n=[{label:"Production",name:"production"},{label:"Secours",name:"secours"},{label:"Recette",name:"recette"}];let d=a[0],i=n[0],b={},y={};const f=()=>{r.forEach(q=>{t(3,y[q.query]=!0,y),fetch(new Request(`https://monitor.judilibre.io/stats?query=${q.query}&date_start=${d.start}&date_end=${d.end}&date_interval=${d.step}&env=${i.name}&size=${sr}`,{method:"GET",referer:"https://stats.judilibre.io",mode:"cors"})).then(O=>{if(O.ok)return O.json().then(E=>{t(2,b[q.query]=E[q.query],b),t(3,y[q.query]=!1,y)})})})},p=(q,O,E,P,R)=>{if(E==="time_series"){let A=0,C={};return q.forEach(Q=>{Object.keys(Q).forEach(X=>{X!=="date"&&(C[X]=!0)})}),C=Object.keys(C),C.includes("Mem.total")&&(C=["Mem.used.min","Mem.used.mean","Mem.used.max","Mem.total"]),{datasets:C.map(Q=>({data:q.map(X=>{if(X[Q])return{x:new Date(X.date),y:X[Q]}}),label:Q,borderColor:Y[A++],borderWidth:R?0:void 0,fill:R?"origin":void 0,backgroundColor:R?`#000091${9-2*A}${9-2*A}`:void 0}))}}else{let A=Object.keys(q).sort((C,Z)=>q[Z]-q[C]);return{datasets:[{data:A.map(C=>q[C]),backgroundColor:Y,borderWidth:0,label:l[O]}],labels:A.map(C=>S(C))}}},w=q=>Object.keys(q).filter(O=>O.length>1&&O!=="chien").map(O=>({text:O,count:q[O]})),F={"80.87.226.10":"courdecassation.fr","185.24.185.49":"piste.gouv.fr"},S=q=>F[q]||q,j={responsive:!0,maintainAspectRatio:!1,animation:{duration:0},interaction:{mode:"index"},hover:{intersect:!1},elements:{point:{radius:0},line:{tension:.15}}},V={"F-blue-soft":"#5770BE","N-orange-dark":"#E18863","E-green-soft":"#00AC8C","L-yellow-dark":"#FDCF41","Q-brown":"#A26859","J-pink-light":"#FFC29E","$blue-france":"#000091","$red-marianne":"#E1000F","A-green-warm":"#958B62","B-green-light":"#91AE4F","C-green-warm":"#169B62","G-blue-dark":"#484D7A","H-pink-soft":"#FF8D7E","I-pink-dark":"#D08A77","K-yellow-medium":"#FFE800","M-orange-medium":"#FF9940","O-orange-soft":"#FF6F4C","P-purple":"#7D4E5B"},Y=Object.keys(V).map(q=>V[q]);function z(){d=Ue(this),t(0,d),t(6,a)}function U(){i=Ue(this),t(1,i),t(7,n)}return s.$$.update=()=>{s.$$.dirty&3&&(d||i)&&f()},[d,i,b,y,r,l,a,n,p,w,j,z,U]}class ar extends ne{constructor(e){super();ie(this,e,lr,rr,oe,{})}}function nr(s){let e,t,r,l,a,n,d;return n=new ar({}),{c(){e=G(),t=v("section"),r=v("div"),l=v("div"),a=v("div"),de(n.$$.fragment),this.h()},l(i){Mt('[data-svelte="svelte-9qr2em"]',document.head).forEach(c),e=H(i),t=m(i,"SECTION",{});var y=g(t);r=m(y,"DIV",{class:!0});var f=g(r);l=m(f,"DIV",{class:!0});var p=g(l);a=m(p,"DIV",{class:!0});var w=g(a);ue(n.$$.fragment,w),w.forEach(c),p.forEach(c),f.forEach(c),y.forEach(c),this.h()},h(){document.title="API Judilibre - statistiques",_(a,"class","fr-col-12 fr-mt-2w"),_(l,"class","fr-grid-row fr-grid-row--gutters fr-grid-row--center"),_(r,"class","fr-container")},m(i,b){M(i,e,b),M(i,t,b),h(t,r),h(r,l),h(l,a),fe(n,a,null),d=!0},p:K,i(i){d||(W(n.$$.fragment,i),d=!0)},o(i){B(n.$$.fragment,i),d=!1},d(i){i&&c(e),i&&c(t),he(n)}}}const cr=!0;class dr extends ne{constructor(e){super();ie(this,e,null,nr,oe,{})}}export{dr as default,cr as prerender};
