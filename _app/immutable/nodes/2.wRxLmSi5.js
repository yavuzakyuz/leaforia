import{s as w,n as b}from"../chunks/scheduler.BvLojk_z.js";import{S as E,i as I,e as d,s as B,c as u,a as x,g as y,b as M,d as p,f as h,h as k,j as v,l as L}from"../chunks/index.q1xvwFjU.js";import{b as $,g as S}from"../chunks/entry.DTo2GuJG.js";function V(o){let t,e="Start Demo",s,i;return{c(){t=d("button"),t.textContent=e,this.h()},l(n){t=u(n,"BUTTON",{class:!0,"data-svelte-h":!0}),y(t)!=="svelte-n589u0"&&(t.textContent=e),this.h()},h(){h(t,"class","px-6 py-3 bg-leaforaMainBtn text-leaforaTextBright text-xl rounded-lg")},m(n,r){k(n,t,r),s||(i=L(t,"click",o[1]),s=!0)},p:b,d(n){n&&p(t),s=!1,i()}}}function j(o){let t;return{c(){t=d("div"),this.h()},l(e){t=u(e,"DIV",{class:!0}),x(t).forEach(p),this.h()},h(){h(t,"class","animate-spin rounded-full h-16 w-16 border-t-4 border-leaforaMainText")},m(e,s){k(e,t,s)},p:b,d(e){e&&p(t)}}}function H(o){let t,e,s,i=`<img src="${`${$}/leafora.png`}" alt="leaforapng" class="h-full w-full object-cover"/>`,n,r,C="Leafora Studios",g,c;function T(l,f){return l[0]?j:V}let _=T(o),a=_(o);return{c(){t=d("body"),e=d("div"),s=d("div"),s.innerHTML=i,n=B(),r=d("h1"),r.textContent=C,g=B(),c=d("div"),a.c(),this.h()},l(l){t=u(l,"BODY",{class:!0});var f=x(t);e=u(f,"DIV",{class:!0});var m=x(e);s=u(m,"DIV",{class:!0,"data-svelte-h":!0}),y(s)!=="svelte-1p0cx0"&&(s.innerHTML=i),n=M(m),r=u(m,"H1",{class:!0,"data-svelte-h":!0}),y(r)!=="svelte-ck0yql"&&(r.textContent=C),g=M(m),c=u(m,"DIV",{class:!0});var D=x(c);a.l(D),D.forEach(p),m.forEach(p),f.forEach(p),this.h()},h(){h(s,"class","h-64 w-64 overflow-hidden"),h(r,"class","text-3xl text-leaforaMainText"),h(c,"class","mt-20"),h(e,"class","flex flex-col items-center justify-center pt-20"),h(t,"class","bg-customBackground2")},m(l,f){k(l,t,f),v(t,e),v(e,s),v(e,n),v(e,r),v(e,g),v(e,c),a.m(c,null)},p(l,[f]){_===(_=T(l))&&a?a.p(l,f):(a.d(1),a=_(l),a&&(a.c(),a.m(c,null)))},i:b,o:b,d(l){l&&p(t),a.d()}}}function q(o,t,e){let s=!1;function i(){e(0,s=!0),setTimeout(()=>{e(0,s=!1),S(`${$}/arscene`)},6e3)}return[s,i]}class U extends E{constructor(t){super(),I(this,t,q,H,w,{})}}export{U as component};
