var it=Object.defineProperty,ot=Object.defineProperties;var ct=Object.getOwnPropertyDescriptors;var Te=Object.getOwnPropertySymbols;var ut=Object.prototype.hasOwnProperty,dt=Object.prototype.propertyIsEnumerable;var Le=(t,e,r)=>e in t?it(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,K=(t,e)=>{for(var r in e||(e={}))ut.call(e,r)&&Le(t,r,e[r]);if(Te)for(var r of Te(e))dt.call(e,r)&&Le(t,r,e[r]);return t},_e=(t,e)=>ot(t,ct(e));import{S as oe,i as ce,s as ue,H as Me,e as h,k as M,c as _,a as p,d as u,n as R,b as m,f as N,F as f,I as Re,J as Ne,K as Be,x as P,u as B,E as We,G as Z,L as te,M as ft,W as ht,N as _t,O as pt,P as mt,t as x,g as ee,j as pe,m as me,o as ve,v as ge,r as be,w as ye,Q as ze,R as de,T as Ge,U as fe,V as vt,h as gt,X as He,Y as bt}from"../chunks/vendor-309c7e4b.js";const yt=t=>({}),Je=t=>({}),Et=t=>({}),Ue=t=>({});function qt(t){let e,r,l,a,i,s;const d=t[1].title,c=Me(d,t,t[0],Ue),E=t[1].desc,y=Me(E,t,t[0],Je);return{c(){e=h("div"),r=h("div"),l=h("h4"),c&&c.c(),a=M(),i=h("p"),y&&y.c(),this.h()},l(v){e=_(v,"DIV",{class:!0});var b=p(e);r=_(b,"DIV",{class:!0});var D=p(r);l=_(D,"H4",{class:!0});var z=p(l);c&&c.l(z),z.forEach(u),a=R(D),i=_(D,"P",{class:!0});var A=p(i);y&&y.l(A),A.forEach(u),D.forEach(u),b.forEach(u),this.h()},h(){m(l,"class","fr-tile__title"),m(i,"class","rf-tile__desc fr-mt-0 fr-mb-0"),m(r,"class","fr-tile__body"),m(e,"class","fr-tile")},m(v,b){N(v,e,b),f(e,r),f(r,l),c&&c.m(l,null),f(r,a),f(r,i),y&&y.m(i,null),s=!0},p(v,[b]){c&&c.p&&(!s||b&1)&&Re(c,d,v,v[0],s?Be(d,v[0],b,Et):Ne(v[0]),Ue),y&&y.p&&(!s||b&1)&&Re(y,E,v,v[0],s?Be(E,v[0],b,yt):Ne(v[0]),Je)},i(v){s||(P(c,v),P(y,v),s=!0)},o(v){B(c,v),B(y,v),s=!1},d(v){v&&u(e),c&&c.d(v),y&&y.d(v)}}}function wt(t,e,r){let{$$slots:l={},$$scope:a}=e;return t.$$set=i=>{"$$scope"in i&&r(0,a=i.$$scope)},[a,l]}class Dt extends oe{constructor(e){super();ce(this,e,wt,qt,ue,{})}}function It(t){let e;return{c(){e=h("canvas"),this.h()},l(r){e=_(r,"CANVAS",{style:!0}),p(e).forEach(u),this.h()},h(){We(e,"height",t[0]||"250px")},m(r,l){N(r,e,l),t[5](e)},p(r,[l]){l&1&&We(e,"height",r[0]||"250px")},i:Z,o:Z,d(r){r&&u(e),t[5](null)}}}function Vt(t,e,r){let{type:l="line"}=e,{data:a}=e,{height:i}=e,{options:s={}}=e;te.register(...ft),te.register(ht,_t),te.register(pt),te.defaults.font.family='"Marianne"';let d,c,E;function y(){E=d.getContext("2d"),c&&c.destroy(),c=new te(E,{type:l,data:a,options:s})}function v(b){mt[b?"unshift":"push"](()=>{d=b,r(1,d)})}return t.$$set=b=>{"type"in b&&r(2,l=b.type),"data"in b&&r(3,a=b.data),"height"in b&&r(0,i=b.height),"options"in b&&r(4,s=b.options)},t.$$.update=()=>{t.$$.dirty&8&&a&&y()},[i,d,l,a,s,v]}class $t extends oe{constructor(e){super();ce(this,e,Vt,It,ue,{type:2,data:3,height:0,options:4})}}function Fe(t,e,r){const l=t.slice();return l[16]=e[r],l[18]=r,l}function Ke(t,e,r){const l=t.slice();return l[19]=e[r],l}function Qe(t,e,r){const l=t.slice();return l[22]=e[r],l}function Xe(t,e,r){const l=t.slice();return l[25]=e[r],l}function Ye(t){let e,r=t[25].label+"",l,a,i;return{c(){e=h("option"),l=x(r),a=M(),this.h()},l(s){e=_(s,"OPTION",{});var d=p(e);l=ee(d,r),a=R(d),d.forEach(u),this.h()},h(){e.__value=i=t[25],e.value=e.__value},m(s,d){N(s,e,d),f(e,l),f(e,a)},p:Z,d(s){s&&u(e)}}}function Ze(t){let e,r=t[22].label+"",l,a,i;return{c(){e=h("option"),l=x(r),a=M(),this.h()},l(s){e=_(s,"OPTION",{});var d=p(e);l=ee(d,r),a=R(d),d.forEach(u),this.h()},h(){e.__value=i=t[22],e.value=e.__value},m(s,d){N(s,e,d),f(e,l),f(e,a)},p:Z,d(s){s&&u(e)}}}function xe(t){let e,r;return e=new Dt({props:{$$slots:{desc:[Ct],title:[kt]},$$scope:{ctx:t}}}),{c(){pe(e.$$.fragment)},l(l){me(e.$$.fragment,l)},m(l,a){ve(e,l,a),r=!0},p(l,a){const i={};a&268435460&&(i.$$scope={dirty:a,ctx:l}),e.$set(i)},i(l){r||(P(e.$$.fragment,l),r=!0)},o(l){B(e.$$.fragment,l),r=!1},d(l){ge(e,l)}}}function kt(t){let e,r=t[2][t[19]].data+"",l;return{c(){e=h("span"),l=x(r),this.h()},l(a){e=_(a,"SPAN",{slot:!0});var i=p(e);l=ee(i,r),i.forEach(u),this.h()},h(){m(e,"slot","title")},m(a,i){N(a,e,i),f(e,l)},p(a,i){i&4&&r!==(r=a[2][a[19]].data+"")&&gt(l,r)},d(a){a&&u(e)}}}function Ct(t){let e,r=t[4][t[19]]+"",l;return{c(){e=h("span"),l=x(r),this.h()},l(a){e=_(a,"SPAN",{slot:!0});var i=p(e);l=ee(i,r),i.forEach(u),this.h()},h(){m(e,"slot","desc")},m(a,i){N(a,e,i),f(e,l)},p:Z,d(a){a&&u(e)}}}function et(t){let e,r,l,a=t[2][t[19]]&&xe(t);return{c(){e=h("div"),a&&a.c(),r=M(),this.h()},l(i){e=_(i,"DIV",{class:!0});var s=p(e);a&&a.l(s),r=R(s),s.forEach(u),this.h()},h(){m(e,"class","fr-col")},m(i,s){N(i,e,s),a&&a.m(e,null),f(e,r),l=!0},p(i,s){i[2][i[19]]?a?(a.p(i,s),s&4&&P(a,1)):(a=xe(i),a.c(),P(a,1),a.m(e,r)):a&&(be(),B(a,1,1,()=>{a=null}),ye())},i(i){l||(P(a),l=!0)},o(i){B(a),l=!1},d(i){i&&u(e),a&&a.d()}}}function tt(t){let e,r,l,a,i;return r=new $t({props:{height:t[16].height,type:t[16].type,data:t[2][t[16].query]&&K({},t[7](t[2][t[16].query].data,t[16].query,t[2][t[16].query].type,t[16].chartType,t[16].fill)),options:K({plugins:{title:{display:!0,text:t[4][t[16].query]},legend:{display:t[2][t[16].query]&&t[2][t[16].query].type==="time_series"}}},t[2][t[16].query]&&t[2][t[16].query].type==="time_series"?_e(K({},t[8]),{scales:{x:{type:"time"}}}):t[8])}}),{c(){e=h("div"),pe(r.$$.fragment),l=M(),this.h()},l(s){e=_(s,"DIV",{class:!0});var d=p(e);me(r.$$.fragment,d),l=R(d),d.forEach(u),this.h()},h(){m(e,"class",a="fr-col-12 fr-col-md-"+(t[16].col||6))},m(s,d){N(s,e,d),ve(r,e,null),f(e,l),i=!0},p(s,d){const c={};d&4&&(c.data=s[2][s[16].query]&&K({},s[7](s[2][s[16].query].data,s[16].query,s[2][s[16].query].type,s[16].chartType,s[16].fill))),d&4&&(c.options=K({plugins:{title:{display:!0,text:s[4][s[16].query]},legend:{display:s[2][s[16].query]&&s[2][s[16].query].type==="time_series"}}},s[2][s[16].query]&&s[2][s[16].query].type==="time_series"?_e(K({},s[8]),{scales:{x:{type:"time"}}}):s[8])),r.$set(c)},i(s){i||(P(r.$$.fragment,s),i=!0)},o(s){B(r.$$.fragment,s),i=!1},d(s){s&&u(e),ge(r)}}}function jt(t){let e,r,l,a,i,s,d,c,E,y,v,b,D,z,A,G,I,H,V,re,W,j,O,se,L,T,J,le,he,Ee,Q=t[5],$=[];for(let o=0;o<Q.length;o+=1)$[o]=Ye(Xe(t,Q,o));let X=t[6],k=[];for(let o=0;o<X.length;o+=1)k[o]=Ze(Qe(t,X,o));let U=t[3].filter(rt).map(st),q=[];for(let o=0;o<U.length;o+=1)q[o]=et(Ke(t,U,o));const at=o=>B(q[o],1,1,()=>{q[o]=null});let F=t[3].filter(lt),w=[];for(let o=0;o<F.length;o+=1)w[o]=tt(Fe(t,F,o));const nt=o=>B(w[o],1,1,()=>{w[o]=null});return{c(){e=h("div"),r=h("div"),l=h("div"),a=h("div"),i=h("div"),s=h("div"),d=h("div"),c=h("div"),E=h("div"),y=h("label"),v=x("Plage de dates"),b=M(),D=h("select");for(let o=0;o<$.length;o+=1)$[o].c();z=M(),A=h("div"),G=h("label"),I=x("Environnement"),H=M(),V=h("select");for(let o=0;o<k.length;o+=1)k[o].c();re=M(),W=h("div"),j=h("div"),O=h("div");for(let o=0;o<q.length;o+=1)q[o].c();se=M(),L=h("div"),T=h("div"),J=h("div");for(let o=0;o<w.length;o+=1)w[o].c();this.h()},l(o){e=_(o,"DIV",{class:!0});var g=p(e);r=_(g,"DIV",{class:!0});var n=p(r);l=_(n,"DIV",{class:!0});var S=p(l);a=_(S,"DIV",{class:!0});var qe=p(a);i=_(qe,"DIV",{class:!0});var Y=p(i);s=_(Y,"DIV",{class:!0});var we=p(s);d=_(we,"DIV",{class:!0});var De=p(d);c=_(De,"DIV",{class:!0});var ae=p(c);E=_(ae,"DIV",{class:!0});var ne=p(E);y=_(ne,"LABEL",{class:!0,for:!0});var Ie=p(y);v=ee(Ie,"Plage de dates"),Ie.forEach(u),b=R(ne),D=_(ne,"SELECT",{id:!0,class:!0});var Ve=p(D);for(let C=0;C<$.length;C+=1)$[C].l(Ve);Ve.forEach(u),ne.forEach(u),z=R(ae),A=_(ae,"DIV",{class:!0});var ie=p(A);G=_(ie,"LABEL",{class:!0,for:!0});var $e=p(G);I=ee($e,"Environnement"),$e.forEach(u),H=R(ie),V=_(ie,"SELECT",{id:!0,class:!0});var ke=p(V);for(let C=0;C<k.length;C+=1)k[C].l(ke);ke.forEach(u),ie.forEach(u),ae.forEach(u),De.forEach(u),we.forEach(u),re=R(Y),W=_(Y,"DIV",{class:!0});var Ce=p(W);j=_(Ce,"DIV",{class:!0});var je=p(j);O=_(je,"DIV",{class:!0});var Oe=p(O);for(let C=0;C<q.length;C+=1)q[C].l(Oe);Oe.forEach(u),je.forEach(u),Ce.forEach(u),se=R(Y),L=_(Y,"DIV",{class:!0});var Se=p(L);T=_(Se,"DIV",{class:!0});var Pe=p(T);J=_(Pe,"DIV",{class:!0});var Ae=p(J);for(let C=0;C<w.length;C+=1)w[C].l(Ae);Ae.forEach(u),Pe.forEach(u),Se.forEach(u),Y.forEach(u),qe.forEach(u),S.forEach(u),n.forEach(u),g.forEach(u),this.h()},h(){m(y,"class","fr-label"),m(y,"for","date"),m(D,"id","date"),m(D,"class","fr-select"),t[0]===void 0&&ze(()=>t[9].call(D)),m(E,"class","fr-col-6"),m(G,"class","fr-label"),m(G,"for","cluster"),m(V,"id","cluster"),m(V,"class","fr-select"),t[1]===void 0&&ze(()=>t[10].call(V)),m(A,"class","fr-col-6"),m(c,"class","fr-grid-row fr-grid-row--gutters"),m(d,"class","fr-container fr-container--fluid"),m(s,"class","fr-col-12"),m(O,"class","fr-grid-row fr-grid-row--gutters fr-grid-row--center"),m(j,"class","fr-container fr-container--fluid"),m(W,"class","fr-col-12"),m(J,"class","fr-grid-row fr-grid-row--gutters fr-grid-row--center"),m(T,"class","fr-container fr-container--fluid"),m(L,"class","fr-col-12"),m(i,"class","fr-grid-row fr-grid-row--gutters fr-grid-row--center"),m(a,"class","fr-container fr-container--fluid"),m(l,"class","fr-col-12"),m(r,"class","fr-grid-row fr-grid-row--gutters"),m(e,"class","fr-container fr-container--fluid")},m(o,g){N(o,e,g),f(e,r),f(r,l),f(l,a),f(a,i),f(i,s),f(s,d),f(d,c),f(c,E),f(E,y),f(y,v),f(E,b),f(E,D);for(let n=0;n<$.length;n+=1)$[n].m(D,null);de(D,t[0]),f(c,z),f(c,A),f(A,G),f(G,I),f(A,H),f(A,V);for(let n=0;n<k.length;n+=1)k[n].m(V,null);de(V,t[1]),f(i,re),f(i,W),f(W,j),f(j,O);for(let n=0;n<q.length;n+=1)q[n].m(O,null);f(i,se),f(i,L),f(L,T),f(T,J);for(let n=0;n<w.length;n+=1)w[n].m(J,null);le=!0,he||(Ee=[Ge(D,"change",t[9]),Ge(V,"change",t[10])],he=!0)},p(o,[g]){if(g&32){Q=o[5];let n;for(n=0;n<Q.length;n+=1){const S=Xe(o,Q,n);$[n]?$[n].p(S,g):($[n]=Ye(S),$[n].c(),$[n].m(D,null))}for(;n<$.length;n+=1)$[n].d(1);$.length=Q.length}if(g&33&&de(D,o[0]),g&64){X=o[6];let n;for(n=0;n<X.length;n+=1){const S=Qe(o,X,n);k[n]?k[n].p(S,g):(k[n]=Ze(S),k[n].c(),k[n].m(V,null))}for(;n<k.length;n+=1)k[n].d(1);k.length=X.length}if(g&66&&de(V,o[1]),g&28){U=o[3].filter(rt).map(st);let n;for(n=0;n<U.length;n+=1){const S=Ke(o,U,n);q[n]?(q[n].p(S,g),P(q[n],1)):(q[n]=et(S),q[n].c(),P(q[n],1),q[n].m(O,null))}for(be(),n=U.length;n<q.length;n+=1)at(n);ye()}if(g&412){F=o[3].filter(lt);let n;for(n=0;n<F.length;n+=1){const S=Fe(o,F,n);w[n]?(w[n].p(S,g),P(w[n],1)):(w[n]=tt(S),w[n].c(),P(w[n],1),w[n].m(J,null))}for(be(),n=F.length;n<w.length;n+=1)nt(n);ye()}},i(o){if(!le){for(let g=0;g<U.length;g+=1)P(q[g]);for(let g=0;g<F.length;g+=1)P(w[g]);le=!0}},o(o){q=q.filter(Boolean);for(let g=0;g<q.length;g+=1)B(q[g]);w=w.filter(Boolean);for(let g=0;g<w.length;g+=1)B(w[g]);le=!1},d(o){o&&u(e),fe($,o),fe(k,o),fe(q,o),fe(w,o),he=!1,vt(Ee)}}}let Ot=50;const rt=t=>t.type==="number",st=t=>t.query,lt=t=>t.type!=="number";function St(t,e,r){const l=[{query:"api_requests_number",type:"number"},{query:"api_requests_date_histogram",type:"line"},{query:"decision_uniq_number",type:"number"},{query:"errors_histogram",type:"bar"},{query:"requests_ip_source",type:"bar"},{query:"latencty_date_histogram",type:"line",fill:!0},{query:"pods_number",type:"number"},{query:"cpu_date_histogram",type:"line",fill:!0},{query:"mem_date_histogram",type:"line",fill:!0},{query:"bandwidth_date_histogram",type:"line"},{query:"top_words",type:"bar",height:"400px",col:12}],a={api_requests_number:"Appels API",api_requests_date_histogram:"Requ\xEAtes",decision_uniq_number:"D\xE9cisions consult\xE9es",errors_histogram:"Erreurs http",requests_ip_source:"Canal d'appel",latencty_date_histogram:"Latence",cpu_date_histogram:"CPU %",mem_date_histogram:"M\xE9moire",bandwidth_date_histogram:"R\xE9seau (octets)",top_words:"Recherches",pods_number:"Conteneurs"},i=[{label:"Dernier jour",start:"now-1d",end:"now",step:"30m"},{label:"Derni\xE8re heure",start:"now-1h",end:"now",step:"2m"},{label:"Derni\xE8re semaine",start:"now-7d",end:"now",step:"12h"},{label:"Dernier mois",start:"now-30d",end:"now",step:"1d"},{label:"Depuis le d\xE9but",start:"2020-01-01T00:00:00",end:"now",step:"1d"}];let s=i[0];const d=[{label:"Production",name:"judilibre-scw-prod-par2"},{label:"Secours",name:"judilibre-scw-prod-par1"},{label:"Recette",name:"judilibre-scw-dev-par1"}];let c=d[0],E={};const y=(I,H,V,re,W)=>{if(V==="time_series"){let j=0,O={};return I.forEach(L=>{Object.keys(L).forEach(T=>{T!=="date"&&(O[T]=!0)})}),O=Object.keys(O),O.includes("Mem.total")&&(O=["Mem.used.min","Mem.used.mean","Mem.used.max","Mem.total"]),{datasets:O.map(L=>({data:I.map(T=>{if(T[L])return{x:new Date(T.date),y:T[L]}}),label:L,borderColor:z[j++],borderWidth:W?0:void 0,fill:W?"origin":void 0,backgroundColor:W?`#000091${9-2*j}${9-2*j}`:void 0}))}}else return{datasets:[{data:Object.keys(I).map(j=>I[j]),backgroundColor:z[0],label:a[H]}],labels:Object.keys(I).map(j=>b(j))}},v={"80.87.226.10":"courdecassation.fr","185.24.185.49":"piste.gouv.fr"},b=I=>v[I]||I,D={responsive:!0,maintainAspectRatio:!1,animation:{duration:0},interaction:{mode:"index"},hover:{intersect:!1},elements:{point:{radius:0},line:{tension:0}}},z=["#4dc9f6","#f67019","#f53794","#537bc4","#acc236","#166a8f","#00a950","#58595b","#8549ba"];function A(){s=He(this),r(0,s),r(5,i)}function G(){c=He(this),r(1,c),r(6,d)}return t.$$.update=()=>{t.$$.dirty&3&&(s||c)&&l.forEach(I=>{fetch(new Request(`https://monitor.judilibre.io/stats?query=${I.query}&date_start=${s.start}&date_end=${s.end}&date_interval=${s.step}&cluster=${c.name}&size=${Ot}`,{method:"GET",referer:"https://stats.judilibre.io",mode:"cors"})).then(H=>{if(H.ok)return H.json().then(V=>{r(2,E[I.query]=V[I.query],E)})})})},[s,c,E,l,a,i,d,y,D,A,G]}class Pt extends oe{constructor(e){super();ce(this,e,St,jt,ue,{})}}function At(t){let e,r,l,a,i,s,d;return s=new Pt({}),{c(){e=M(),r=h("section"),l=h("div"),a=h("div"),i=h("div"),pe(s.$$.fragment),this.h()},l(c){bt('[data-svelte="svelte-9qr2em"]',document.head).forEach(u),e=R(c),r=_(c,"SECTION",{});var y=p(r);l=_(y,"DIV",{class:!0});var v=p(l);a=_(v,"DIV",{class:!0});var b=p(a);i=_(b,"DIV",{class:!0});var D=p(i);me(s.$$.fragment,D),D.forEach(u),b.forEach(u),v.forEach(u),y.forEach(u),this.h()},h(){document.title="API Judilibre - statistiques",m(i,"class","fr-col-12 fr-mt-2w"),m(a,"class","fr-grid-row fr-grid-row--gutters fr-grid-row--center"),m(l,"class","fr-container")},m(c,E){N(c,e,E),N(c,r,E),f(r,l),f(l,a),f(a,i),ve(s,i,null),d=!0},p:Z,i(c){d||(P(s.$$.fragment,c),d=!0)},o(c){B(s.$$.fragment,c),d=!1},d(c){c&&u(e),c&&u(r),ge(s)}}}const Mt=!0;class Rt extends oe{constructor(e){super();ce(this,e,null,At,ue,{})}}export{Rt as default,Mt as prerender};
