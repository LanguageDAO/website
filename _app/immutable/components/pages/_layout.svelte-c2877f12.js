import{S as g,i as y,s as v,C as M,o as I,k as h,q as L,D as N,l as m,m as P,r as Q,h as l,n as u,E as f,B as w,F as E,w as $,a as b,x as T,c as C,y as S,b as A,G as z,H as G,I as q,f as _,t as k,z as x}from"../../chunks/index-c7d6c325.js";import{p as j}from"../../chunks/stores-f55e1a62.js";import{e as B}from"../../chunks/env-public-8638e2b9.js";var p=function(t){window.__fathomClientQueue=window.__fathomClientQueue||[],window.__fathomClientQueue.push(t)},K=function(){window.__fathomClientQueue=window.__fathomClientQueue||[],window.__fathomClientQueue.forEach(function(t){switch(t.type){case"trackPageview":F(t.opts);return;case"trackGoal":R(t.code,t.cents);return;case"enableTrackingForMe":W();return;case"blockTrackingForMe":U();return;case"setSite":Y(t.id);return}}),window.__fathomClientQueue=[]},D=function(t){var e=/(https?)(?=:|\/|$)/;t.forEach(function(a){e.exec(a)!==null&&console.warn("The include domain ".concat(a," might fail to work as intended as it begins with a transfer protocol (http://, https://). Consider removing the protocol portion of the string."))})},H=function(t,e){var a=document.createElement("script"),i=document.getElementsByTagName("script")[0]||document.querySelector("body");a.id="fathom-script",a.async=!0,a.setAttribute("data-site",t),a.src=e&&e.url?e.url:"https://cdn.usefathom.com/script.js",e&&(e.auto!==void 0&&a.setAttribute("data-auto","".concat(e.auto)),e.honorDNT!==void 0&&a.setAttribute("data-honor-dnt","".concat(e.honorDNT)),e.canonical!==void 0&&a.setAttribute("data-canonical","".concat(e.canonical)),e.includedDomains&&(D(e.includedDomains),a.setAttribute("data-included-domains",e.includedDomains.join(","))),e.excludedDomains&&(D(e.excludedDomains),a.setAttribute("data-excluded-domains",e.excludedDomains.join(","))),e.spa&&a.setAttribute("data-spa",e.spa)),a.onload=K,i.parentNode.insertBefore(a,i)},F=function(t){window.fathom?t?window.fathom.trackPageview(t):window.fathom.trackPageview():p({type:"trackPageview",opts:t})},R=function(t,e){window.fathom?window.fathom.trackGoal(t,e):p({type:"trackGoal",code:t,cents:e})},U=function(){window.fathom?window.fathom.blockTrackingForMe():p({type:"blockTrackingForMe"})},W=function(){window.fathom?window.fathom.enableTrackingForMe():p({type:"enableTrackingForMe"})},Y=function(t){window.fathom?window.fathom.setSite(t):p({type:"setSite",id:t})};const O="https://cdn.usefathom.com/script.js";function J(r,t,e){let a;M(r,j,o=>e(0,a=o));const i=B.PUBLIC_FATHOM_ID;return i&&I(async()=>{H(i,{url:O})}),r.$$.update=()=>{r.$$.dirty&1&&i&&(a.url.pathname,F())},[a]}class V extends g{constructor(t){super(),y(this,t,J,null,v,{})}}function X(r){let t,e,a,i,o,d;return{c(){t=h("link"),e=h("link"),a=h("link"),i=h("link"),o=h("style"),d=L(`h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			line-height: 1.3 !important;
		}

		.stretchToScreen {
			width: 100vw;
			height: 100vh;
		}`),this.h()},l(s){const n=N("svelte-14xal8x",document.head);t=m(n,"LINK",{rel:!0,href:!0}),e=m(n,"LINK",{rel:!0,href:!0}),a=m(n,"LINK",{rel:!0,href:!0}),i=m(n,"LINK",{rel:!0,href:!0}),o=m(n,"STYLE",{});var c=P(o);d=Q(c,`h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			line-height: 1.3 !important;
		}

		.stretchToScreen {
			width: 100vw;
			height: 100vh;
		}`),c.forEach(l),n.forEach(l),this.h()},h(){u(t,"rel","stylesheet"),u(t,"href","https://pazly.dev/colors/gradients.css"),u(e,"rel","stylesheet"),u(e,"href","https://pazly.dev/colors/backgrounds.css"),u(a,"rel","stylesheet"),u(a,"href","https://pazly.dev/colors/text.css"),u(i,"rel","stylesheet"),u(i,"href","https://pazly.dev/colors/border.css")},m(s,n){f(document.head,t),f(document.head,e),f(document.head,a),f(document.head,i),f(document.head,o),f(o,d)},p:w,i:w,o:w,d(s){l(t),l(e),l(a),l(i),l(o)}}}class Z extends g{constructor(t){super(),y(this,t,null,X,v,{})}}function tt(r){let t,e,a,i,o;t=new Z({}),a=new V({});const d=r[1].default,s=E(d,r,r[0],null);return{c(){$(t.$$.fragment),e=b(),$(a.$$.fragment),i=b(),s&&s.c()},l(n){T(t.$$.fragment,n),e=C(n),T(a.$$.fragment,n),i=C(n),s&&s.l(n)},m(n,c){S(t,n,c),A(n,e,c),S(a,n,c),A(n,i,c),s&&s.m(n,c),o=!0},p(n,[c]){s&&s.p&&(!o||c&1)&&z(s,d,n,n[0],o?q(d,n[0],c,null):G(n[0]),null)},i(n){o||(_(t.$$.fragment,n),_(a.$$.fragment,n),_(s,n),o=!0)},o(n){k(t.$$.fragment,n),k(a.$$.fragment,n),k(s,n),o=!1},d(n){x(t,n),n&&l(e),x(a,n),n&&l(i),s&&s.d(n)}}}function et(r,t,e){let{$$slots:a={},$$scope:i}=t;return r.$$set=o=>{"$$scope"in o&&e(0,i=o.$$scope)},[i,a]}class it extends g{constructor(t){super(),y(this,t,et,tt,v,{})}}export{it as default};
