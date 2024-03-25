var app=function(){"use strict";function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function s(){return Object.create(null)}function o(e){e.forEach(n)}function l(e){return"function"==typeof e}function i(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function r(e,t){e.appendChild(t)}function a(e,t,n){e.insertBefore(t,n||null)}function c(e){e.parentNode.removeChild(e)}function u(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function h(e){return document.createElement(e)}function d(e){return document.createTextNode(e)}function p(){return d(" ")}function f(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function g(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let m;function v(e){m=e}const y=[],b=[],w=[],$=[],x=Promise.resolve();let k=!1;function C(e){w.push(e)}let F=!1;const L=new Set;function _(){if(!F){F=!0;do{for(let e=0;e<y.length;e+=1){const t=y[e];v(t),A(t.$$)}for(v(null),y.length=0;b.length;)b.pop()();for(let e=0;e<w.length;e+=1){const t=w[e];L.has(t)||(L.add(t),t())}w.length=0}while(y.length);for(;$.length;)$.pop()();k=!1,F=!1,L.clear()}}function A(e){if(null!==e.fragment){e.update(),o(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(C)}}const z=new Set;let j;function T(e,t){e&&e.i&&(z.delete(e),e.i(t))}function M(e,t,n,s){if(e&&e.o){if(z.has(e))return;z.add(e),j.c.push((()=>{z.delete(e),s&&(n&&e.d(1),s())})),e.o(t)}}function H(e){e&&e.c()}function S(e,t,s,i){const{fragment:r,on_mount:a,on_destroy:c,after_update:u}=e.$$;r&&r.m(t,s),i||C((()=>{const t=a.map(n).filter(l);c?c.push(...t):o(t),e.$$.on_mount=[]})),u.forEach(C)}function B(e,t){const n=e.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function I(e,t){-1===e.$$.dirty[0]&&(y.push(e),k||(k=!0,x.then(_)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function P(t,n,l,i,r,a,u=[-1]){const h=m;v(t);const d=t.$$={fragment:null,ctx:null,props:a,update:e,not_equal:r,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(h?h.$$.context:n.context||[]),callbacks:s(),dirty:u,skip_bound:!1};let p=!1;if(d.ctx=l?l(t,n.props||{},((e,n,...s)=>{const o=s.length?s[0]:n;return d.ctx&&r(d.ctx[e],d.ctx[e]=o)&&(!d.skip_bound&&d.bound[e]&&d.bound[e](o),p&&I(t,e)),n})):[],d.update(),p=!0,o(d.before_update),d.fragment=!!i&&i(d.ctx),n.target){if(n.hydrate){const e=function(e){return Array.from(e.childNodes)}(n.target);d.fragment&&d.fragment.l(e),e.forEach(c)}else d.fragment&&d.fragment.c();n.intro&&T(t.$$.fragment),S(t,n.target,n.anchor,n.customElement),_()}v(h)}class E{$destroy(){B(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}var N=[{link:"https://kentonishi.com",badge:"./badges/kento.webp",title:"Kento Nishi"},{link:"https://github.com/oliver-ni",badge:"./badges/oliver.webp",title:"Oliver Ni"},{link:"https://enzo.run",badge:"./badges/enzo.webp",title:"Enzo"},{link:"https://aplet.me",badge:"./badges/aplet.webp",title:"Aplet123"},{link:"https://danirukun.com",badge:"./badges/danirukun.webp",title:"DaniruKun"},{link:"https://anish.lakkapragada.com/",badge:"./badges/anish.webp",title:"Anish"},{link:"https://www.alexyzhang.dev",badge:"./badges/alex.webp",title:"Alex Zhang"},{link:"https://helenawsu.github.io/photography",badge:"./badges/helena.webp",title:"Helena Su"},{link:"https://github.com/lithomas1",badge:"./badges/thomas.webp",title:"Thomas Li"}],D=[{name:"LiveTL/LiveTL",description:"Get live translations from YouTube streams, crowdsourced from multilingual viewers!"},{name:"r2dev2/Sozai",description:"UI framework with vuetify-like material components built with Svelte"},{name:"r2dev2/Cryptoduel",description:"A multiplayer cryptogram game where the fastest cryptogram solver wins!"},{name:"r2dev2/Stareye",description:"Time races with two phones using motion detection!"},{name:"r2dev2/WayChess",description:"A modern design, open source, fully featured chess GUI."},{name:"r2dev2/ChessData",description:"A dataset which contains millions of positions with stockfish evaluations."},{name:"pogify/Pogify",description:"Listen to music with your live audience without getting DMCA-striked!"},{name:"r2dev2/LiRush",description:"An open source implementation of puzzle rush."}];function O(t){let n,s,o,l,i,u,m,v,y,b,w,$,x,k;return{c(){var e,r,a;n=h("a"),s=h("div"),o=h("h3"),l=d(t[2]),i=p(),u=h("p"),m=d(t[1]),v=p(),y=h("div"),b=p(),w=h("div"),$=h("img"),f(o,"class","svelte-1lb84do"),e="height",r="100%",y.style.setProperty(e,r,a?"important":""),$.src!==(x="https://img.shields.io/github/stars/"+t[0]+"?style=social")&&f($,"src",x),f($,"height","22"),f($,"alt",k=t[0]+"'s star count"),f($,"class","svelte-1lb84do"),f(w,"class","center svelte-1lb84do"),f(s,"class","project-card svelte-1lb84do"),f(n,"href",t[3]),f(n,"class","svelte-1lb84do")},m(e,t){a(e,n,t),r(n,s),r(s,o),r(o,l),r(s,i),r(s,u),r(u,m),r(s,v),r(s,y),r(s,b),r(s,w),r(w,$)},p(e,[t]){4&t&&g(l,e[2]),2&t&&g(m,e[1]),1&t&&$.src!==(x="https://img.shields.io/github/stars/"+e[0]+"?style=social")&&f($,"src",x),1&t&&k!==(k=e[0]+"'s star count")&&f($,"alt",k),8&t&&f(n,"href",e[3])},i:e,o:e,d(e){e&&c(n)}}}function R(e,t,n){let s,o,{name:l}=t,{description:i}=t;return e.$$set=e=>{"name"in e&&n(0,l=e.name),"description"in e&&n(1,i=e.description)},e.$$.update=()=>{1&e.$$.dirty&&n(2,s=l.split("/")[1]),1&e.$$.dirty&&n(3,o=`https://github.com/${l}`)},[l,i,s,o]}class U extends E{constructor(e){super(),P(this,e,R,O,i,{name:0,description:1})}}function V(t){let n;return{c(){n=h("div"),n.innerHTML='<img class="eyes svelte-12xroy" src="eyes.webp" alt="Ronak&#39;s eyes"/> \n  <div class="info svelte-12xroy"><h1 class="svelte-12xroy">Ronak Badhe</h1> \n    <div class="links svelte-12xroy"><a href="https://hackmd.io/@r2dev2" class="svelte-12xroy"><svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" fill="#FFFFFF" style="--len: 103" class="svelte-12xroy"><path d="M14 6l-1-2H5v17h2v-7h5l1 2h7V6h-6zm4 8h-4l-1-2H7V6h5l1 2h5v6z" class="svelte-12xroy"></path></svg> \n        <span>CTF</span></a> \n      <a href="#projects" class="svelte-12xroy"><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 20 20" height="48px" viewBox="-2 -2 22 22" width="48px" fill="#FFFFFF" style="--len: 110" class="svelte-12xroy"><path d="M12.71,12.84c0.84-0.88,1.17-2.06,0.99-3.18l1.59-0.48c0.42,0.78,1.25,1.32,2.2,1.32c1.38,0,2.5-1.12,2.5-2.5 s-1.12-2.5-2.5-2.5C16.12,5.5,15,6.62,15,8c0,0.08,0,0.15,0.01,0.22L13.42,8.7c-0.52-1.15-1.61-2-2.92-2.17l0-1.58 c1.14-0.23,2-1.24,2-2.45C12.5,1.12,11.38,0,10,0S7.5,1.12,7.5,2.5c0,1.21,0.86,2.22,2,2.45l0,1.58C8.2,6.71,7.11,7.55,6.58,8.7 L4.99,8.22C5,8.15,5,8.08,5,8c0-1.38-1.12-2.5-2.5-2.5S0,6.62,0,8s1.12,2.5,2.5,2.5c0.95,0,1.78-0.53,2.2-1.32L6.3,9.66 c-0.18,1.12,0.15,2.3,0.99,3.18l-1.15,1.43C5.8,14.1,5.41,14,5,14c-1.38,0-2.5,1.12-2.5,2.5S3.62,19,5,19s2.5-1.12,2.5-2.5 c0-0.61-0.22-1.17-0.58-1.6l1.15-1.43c1.18,0.71,2.68,0.71,3.86,0l1.15,1.43c-0.36,0.43-0.58,0.99-0.58,1.6c0,1.38,1.12,2.5,2.5,2.5 s2.5-1.12,2.5-2.5S16.38,14,15,14c-0.41,0-0.8,0.1-1.14,0.27L12.71,12.84z" class="svelte-12xroy"></path></svg> \n        <span>Dev</span></a> \n      <a href="https://r2dev2.github.io/blog" class="svelte-12xroy"><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="48px" viewBox="0 0 24 24" width="48px" fill="#FFFFFF" style="--len: 137" class="svelte-12xroy"><g><path d="M16,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V8L16,3z M8,7h3c0.55,0,1,0.45,1,1v0c0,0.55-0.45,1-1,1H8 C7.45,9,7,8.55,7,8v0C7,7.45,7.45,7,8,7z M16,17H8c-0.55,0-1-0.45-1-1v0c0-0.55,0.45-1,1-1h8c0.55,0,1,0.45,1,1v0 C17,16.55,16.55,17,16,17z M16,13H8c-0.55,0-1-0.45-1-1v0c0-0.55,0.45-1,1-1h8c0.55,0,1,0.45,1,1v0C17,12.55,16.55,13,16,13z M15,8 V5l4,4h-3C15.45,9,15,8.55,15,8z" class="svelte-12xroy"></path></g></svg> \n        <span>Blog</span></a></div></div>',f(n,"class","profile svelte-12xroy")},m(e,t){a(e,n,t)},p:e,i:e,o:e,d(e){e&&c(n)}}}class G extends E{constructor(e){super(),P(this,e,null,V,i,{})}}function K(e,t,n){const s=e.slice();return s[0]=t[n],s}function Y(e,t,n){const s=e.slice();return s[3]=t[n].link,s[4]=t[n].badge,s[5]=t[n].title,s}function q(t){let n,s,o,l;return{c(){n=h("a"),s=h("img"),l=p(),s.src!==(o=t[4])&&f(s,"src",o),f(s,"title",t[5]),f(s,"alt",t[5]),f(s,"width","64"),f(s,"height","64"),f(s,"class","svelte-ye10yu"),f(n,"class","person svelte-ye10yu"),f(n,"title",t[5]),f(n,"href",t[3])},m(e,t){a(e,n,t),r(n,s),r(n,l)},p:e,d(e){e&&c(n)}}}function W(e){let n,s;const o=[e[0]];let l={};for(let e=0;e<o.length;e+=1)l=t(l,o[e]);return n=new U({props:l}),{c(){H(n.$$.fragment)},m(e,t){S(n,e,t),s=!0},p(e,t){const s=0&t?function(e,t){const n={},s={},o={$$scope:1};let l=e.length;for(;l--;){const i=e[l],r=t[l];if(r){for(const e in i)e in r||(s[e]=1);for(const e in r)o[e]||(n[e]=r[e],o[e]=1);e[l]=r}else for(const e in i)o[e]=1}for(const e in s)e in n||(n[e]=void 0);return n}(o,[(l=e[0],"object"==typeof l&&null!==l?l:{})]):{};var l;n.$set(s)},i(e){s||(T(n.$$.fragment,e),s=!0)},o(e){M(n.$$.fragment,e),s=!1},d(e){B(n,e)}}}function Z(e){let t,n,s,l,i,g,m,v,y,b,w,$,x,k,C,F,L;t=new G({});let _=N,A=[];for(let t=0;t<_.length;t+=1)A[t]=q(Y(e,_,t));let z=D,I=[];for(let t=0;t<z.length;t+=1)I[t]=W(K(e,z,t));const P=e=>M(I[e],1,1,(()=>{I[e]=null}));return{c(){H(t.$$.fragment),n=p(),s=h("main"),l=h("section"),l.innerHTML='<h2 class="svelte-ye10yu">About</h2> \n    <div class="two-col svelte-ye10yu"><div class="col svelte-ye10yu"><img src="./pfp.webp" alt="picture of me!" width="150px" height="150px" style="justify-content: left; border-radius: 50%;"/></div> \n      <div class="col svelte-ye10yu">Hi! I&#39;m a developer and hacker (the cybersecurity kind) at UCLA. You might know me from:\n        <ul><li>former intern at <a href="https://cadence.com" class="svelte-ye10yu">Cadence</a> and <a href="http://axiado.com" class="svelte-ye10yu">Axiado</a></li> \n          <li>maintainer of <a href="https://livetl.app" class="svelte-ye10yu">LiveTL</a> (I am <a href="https://github.com/r2dev2" class="svelte-ye10yu">r2dev2</a>) and various other <a href="#projects" class="svelte-ye10yu">open source software</a></li> \n          <li>CTFs with <a href="https://ctftime.org/team/186494" class="svelte-ye10yu">PBR | UCLA</a>, I also write web security challenges for <a href="https://lac.tf" class="svelte-ye10yu">LaCTF</a> (I am r2uwu2)</li> \n          <li>chess - my lichess is <a href="https://lichess.org/@/r2d2bb8" class="svelte-ye10yu">r2d2bb8</a>, send me a challenge!</li></ul></div></div> \n    <p>Contact me via a lichess direct message over <a href="https://lichess.org/@/r2d2bb8" class="svelte-ye10yu">here</a>.</p>',i=p(),g=h("section"),m=h("h2"),m.textContent="Cool People",v=d("\n    I think these people are pretty cool, go check them out!\n    "),y=h("div");for(let e=0;e<A.length;e+=1)A[e].c();b=p(),w=h("section"),$=h("h2"),$.textContent="Projects",x=p(),k=h("p"),k.textContent="I have developed many open source projects, some more useful than others. Maybe one will suit your needs!",C=p(),F=h("div");for(let e=0;e<I.length;e+=1)I[e].c();f(l,"name","About"),f(m,"class","svelte-ye10yu"),f(y,"class","cool-people svelte-ye10yu"),f(g,"name","Cool People"),f($,"class","svelte-ye10yu"),f(F,"class","projects svelte-ye10yu"),f(w,"name","Projects"),f(w,"id","projects"),f(s,"class","svelte-ye10yu")},m(e,o){S(t,e,o),a(e,n,o),a(e,s,o),r(s,l),r(s,i),r(s,g),r(g,m),r(g,v),r(g,y);for(let e=0;e<A.length;e+=1)A[e].m(y,null);r(s,b),r(s,w),r(w,$),r(w,x),r(w,k),r(w,C),r(w,F);for(let e=0;e<I.length;e+=1)I[e].m(F,null);L=!0},p(e,[t]){if(0&t){let n;for(_=N,n=0;n<_.length;n+=1){const s=Y(e,_,n);A[n]?A[n].p(s,t):(A[n]=q(s),A[n].c(),A[n].m(y,null))}for(;n<A.length;n+=1)A[n].d(1);A.length=_.length}if(0&t){let n;for(z=D,n=0;n<z.length;n+=1){const s=K(e,z,n);I[n]?(I[n].p(s,t),T(I[n],1)):(I[n]=W(s),I[n].c(),T(I[n],1),I[n].m(F,null))}for(j={r:0,c:[],p:j},n=z.length;n<I.length;n+=1)P(n);j.r||o(j.c),j=j.p}},i(e){if(!L){T(t.$$.fragment,e);for(let e=0;e<z.length;e+=1)T(I[e]);L=!0}},o(e){M(t.$$.fragment,e),I=I.filter(Boolean);for(let e=0;e<I.length;e+=1)M(I[e]);L=!1},d(e){B(t,e),e&&c(n),e&&c(s),u(A,e),u(I,e)}}}const J=new class extends E{constructor(e){super(),P(this,e,null,Z,i,{})}}({target:document.body,props:{}});return"undefined"!=typeof module&&module.hot&&("undefined"!=typeof module&&module.hot.dispose((()=>{J.$destroy()})),"undefined"!=typeof module&&module.hot.accept()),J}();
//# sourceMappingURL=bundle.js.map
