!function(e){function t(t){for(var n,o,c=t[0],i=t[1],a=t[2],u=0,d=[];u<c.length;u++)o=c[u],Object.prototype.hasOwnProperty.call(S,o)&&S[o]&&d.push(S[o][0]),S[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(T&&T(t);d.length;)d.shift()();return A.push.apply(A,a||[]),r()}function r(){for(var e,t=0;t<A.length;t++){for(var r=A[t],n=!0,o=1;o<r.length;o++){var c=r[o];0!==S[c]&&(n=!1)}n&&(A.splice(t--,1),e=M(M.s=r[0]))}return e}var n=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!j[e]||!g[e])return;for(var r in g[e]=!1,t)Object.prototype.hasOwnProperty.call(t,r)&&(y[r]=t[r]);0==--O&&0===w&&D()}(e,t),n&&n(e,t)};var o,c=!0,i="6a1f41c8382921d74e0a",a={},u=[],d=[];function l(t){var r={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:o!==t,active:!0,accept:function(e,t){if(void 0===e)r._selfAccepted=!0;else if("function"==typeof e)r._selfAccepted=e;else if("object"==typeof e)for(var n=0;n<e.length;n++)r._acceptedDependencies[e[n]]=t||function(){};else r._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)r._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)r._declinedDependencies[e[t]]=!0;else r._declinedDependencies[e]=!0},dispose:function(e){r._disposeHandlers.push(e)},addDisposeHandler:function(e){r._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=r._disposeHandlers.indexOf(e);t>=0&&r._disposeHandlers.splice(t,1)},invalidate:function(){switch(this._selfInvalidated=!0,p){case"idle":(y={})[t]=e[t],s("ready");break;case"ready":H(t);break;case"prepare":case"check":case"dispose":case"apply":(b=b||[]).push(t)}},check:P,apply:k,status:function(e){if(!e)return p;f.push(e)},addStatusHandler:function(e){f.push(e)},removeStatusHandler:function(e){var t=f.indexOf(e);t>=0&&f.splice(t,1)},data:a[t]};return o=void 0,r}var f=[],p="idle";function s(e){p=e;for(var t=0;t<f.length;t++)f[t].call(null,e)}var h,y,v,b,O=0,w=0,m={},g={},j={};function _(e){return+e+""===e?+e:e}function P(e){if("idle"!==p)throw new Error("check() is only allowed in idle status");return c=e,s("check"),(t=1e4,t=t||1e4,new Promise((function(e,r){if("undefined"==typeof XMLHttpRequest)return r(new Error("No browser support"));try{var n=new XMLHttpRequest,o=M.p+""+i+".hot-update.json";n.open("GET",o,!0),n.timeout=t,n.send(null)}catch(e){return r(e)}n.onreadystatechange=function(){if(4===n.readyState)if(0===n.status)r(new Error("Manifest request to "+o+" timed out."));else if(404===n.status)e();else if(200!==n.status&&304!==n.status)r(new Error("Manifest request to "+o+" failed."));else{try{var t=JSON.parse(n.responseText)}catch(e){return void r(e)}e(t)}}}))).then((function(e){if(!e)return s(x()?"ready":"idle"),null;g={},m={},j=e.c,v=e.h,s("prepare");var t=new Promise((function(e,t){h={resolve:e,reject:t}}));for(var r in y={},S)E(r);return"prepare"===p&&0===w&&0===O&&D(),t}));var t}function E(e){j[e]?(g[e]=!0,O++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=M.p+""+e+"."+i+".hot-update.js",document.head.appendChild(t)}(e)):m[e]=!0}function D(){s("ready");var e=h;if(h=null,e)if(c)Promise.resolve().then((function(){return k(c)})).then((function(t){e.resolve(t)}),(function(t){e.reject(t)}));else{var t=[];for(var r in y)Object.prototype.hasOwnProperty.call(y,r)&&t.push(_(r));e.resolve(t)}}function k(t){if("ready"!==p)throw new Error("apply() is only allowed in ready status");return function t(r){var n,c,d,l,f;function p(e){for(var t=[e],r={},n=t.map((function(e){return{chain:[e],id:e}}));n.length>0;){var o=n.pop(),c=o.id,i=o.chain;if((l=I[c])&&(!l.hot._selfAccepted||l.hot._selfInvalidated)){if(l.hot._selfDeclined)return{type:"self-declined",chain:i,moduleId:c};if(l.hot._main)return{type:"unaccepted",chain:i,moduleId:c};for(var a=0;a<l.parents.length;a++){var u=l.parents[a],d=I[u];if(d){if(d.hot._declinedDependencies[c])return{type:"declined",chain:i.concat([u]),moduleId:c,parentId:u};-1===t.indexOf(u)&&(d.hot._acceptedDependencies[c]?(r[u]||(r[u]=[]),h(r[u],[c])):(delete r[u],t.push(u),n.push({chain:i.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:r}}function h(e,t){for(var r=0;r<t.length;r++){var n=t[r];-1===e.indexOf(n)&&e.push(n)}}x();var O={},w=[],m={},g=function(){console.warn("[HMR] unexpected require("+E.moduleId+") to disposed module")};for(var P in y)if(Object.prototype.hasOwnProperty.call(y,P)){var E;f=_(P),E=y[P]?p(f):{type:"disposed",moduleId:P};var D=!1,k=!1,H=!1,A="";switch(E.chain&&(A="\nUpdate propagation: "+E.chain.join(" -> ")),E.type){case"self-declined":r.onDeclined&&r.onDeclined(E),r.ignoreDeclined||(D=new Error("Aborted because of self decline: "+E.moduleId+A));break;case"declined":r.onDeclined&&r.onDeclined(E),r.ignoreDeclined||(D=new Error("Aborted because of declined dependency: "+E.moduleId+" in "+E.parentId+A));break;case"unaccepted":r.onUnaccepted&&r.onUnaccepted(E),r.ignoreUnaccepted||(D=new Error("Aborted because "+f+" is not accepted"+A));break;case"accepted":r.onAccepted&&r.onAccepted(E),k=!0;break;case"disposed":r.onDisposed&&r.onDisposed(E),H=!0;break;default:throw new Error("Unexception type "+E.type)}if(D)return s("abort"),Promise.reject(D);if(k)for(f in m[f]=y[f],h(w,E.outdatedModules),E.outdatedDependencies)Object.prototype.hasOwnProperty.call(E.outdatedDependencies,f)&&(O[f]||(O[f]=[]),h(O[f],E.outdatedDependencies[f]));H&&(h(w,[E.moduleId]),m[f]=g)}var R,q=[];for(c=0;c<w.length;c++)f=w[c],I[f]&&I[f].hot._selfAccepted&&m[f]!==g&&!I[f].hot._selfInvalidated&&q.push({module:f,parents:I[f].parents.slice(),errorHandler:I[f].hot._selfAccepted});s("dispose"),Object.keys(j).forEach((function(e){!1===j[e]&&function(e){delete S[e]}(e)}));var U,T,C=w.slice();for(;C.length>0;)if(f=C.pop(),l=I[f]){var J={},N=l.hot._disposeHandlers;for(d=0;d<N.length;d++)(n=N[d])(J);for(a[f]=J,l.hot.active=!1,delete I[f],delete O[f],d=0;d<l.children.length;d++){var B=I[l.children[d]];B&&((R=B.parents.indexOf(f))>=0&&B.parents.splice(R,1))}}for(f in O)if(Object.prototype.hasOwnProperty.call(O,f)&&(l=I[f]))for(T=O[f],d=0;d<T.length;d++)U=T[d],(R=l.children.indexOf(U))>=0&&l.children.splice(R,1);s("apply"),void 0!==v&&(i=v,v=void 0);for(f in y=void 0,m)Object.prototype.hasOwnProperty.call(m,f)&&(e[f]=m[f]);var L=null;for(f in O)if(Object.prototype.hasOwnProperty.call(O,f)&&(l=I[f])){T=O[f];var X=[];for(c=0;c<T.length;c++)if(U=T[c],n=l.hot._acceptedDependencies[U]){if(-1!==X.indexOf(n))continue;X.push(n)}for(c=0;c<X.length;c++){n=X[c];try{n(T)}catch(e){r.onErrored&&r.onErrored({type:"accept-errored",moduleId:f,dependencyId:T[c],error:e}),r.ignoreErrored||L||(L=e)}}}for(c=0;c<q.length;c++){var G=q[c];f=G.module,u=G.parents,o=f;try{M(f)}catch(e){if("function"==typeof G.errorHandler)try{G.errorHandler(e)}catch(t){r.onErrored&&r.onErrored({type:"self-accept-error-handler-errored",moduleId:f,error:t,originalError:e}),r.ignoreErrored||L||(L=t),L||(L=e)}else r.onErrored&&r.onErrored({type:"self-accept-errored",moduleId:f,error:e}),r.ignoreErrored||L||(L=e)}}if(L)return s("fail"),Promise.reject(L);if(b)return t(r).then((function(e){return w.forEach((function(t){e.indexOf(t)<0&&e.push(t)})),e}));return s("idle"),new Promise((function(e){e(w)}))}(t=t||{})}function x(){if(b)return y||(y={}),b.forEach(H),b=void 0,!0}function H(t){Object.prototype.hasOwnProperty.call(y,t)||(y[t]=e[t])}var I={},S={4:0},A=[];function M(t){if(I[t])return I[t].exports;var r=I[t]={i:t,l:!1,exports:{},hot:l(t),parents:(d=u,u=[],d),children:[]};return e[t].call(r.exports,r,r.exports,function(e){var t=I[e];if(!t)return M;var r=function(r){return t.hot.active?(I[r]?-1===I[r].parents.indexOf(e)&&I[r].parents.push(e):(u=[e],o=r),-1===t.children.indexOf(r)&&t.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),u=[]),M(r)},n=function(e){return{configurable:!0,enumerable:!0,get:function(){return M[e]},set:function(t){M[e]=t}}};for(var c in M)Object.prototype.hasOwnProperty.call(M,c)&&"e"!==c&&"t"!==c&&Object.defineProperty(r,c,n(c));return r.e=function(e){return"ready"===p&&s("prepare"),w++,M.e(e).then(t,(function(e){throw t(),e}));function t(){w--,"prepare"===p&&(m[e]||E(e),0===w&&0===O&&D())}},r.t=function(e,t){return 1&t&&(e=r(e)),M.t(e,-2&t)},r}(t)),r.l=!0,r.exports}M.m=e,M.c=I,M.d=function(e,t,r){M.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},M.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},M.t=function(e,t){if(1&t&&(e=M(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(M.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)M.d(r,n,function(t){return e[t]}.bind(null,n));return r},M.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return M.d(t,"a",t),t},M.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},M.p="",M.h=function(){return i};var R=window.webpackJsonp=window.webpackJsonp||[],q=R.push.bind(R);R.push=t,R=R.slice();for(var U=0;U<R.length;U++)t(R[U]);var T=q;A.push([22,0,1]),r()}({22:function(e,t,r){"use strict";r.r(t);var n,o,c=r(0),i=r.n(c),a=r(4);r(8),r(5),r(27);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?h(e):t}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var O=(o=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(a,e);var t,r,n,o,c=(t=a,function(){var e,r=v(t);if(y()){var n=v(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return s(this,e)});function a(){var e;l(this,a);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return b(h(e=c.call.apply(c,[this].concat(r))),"state",{name:1}),b(h(e),"clickBtn",(function(){console.log("hhh")})),e}return r=a,(n=[{key:"render",value:function(){this.state.name;var e=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},this.state);return i.a.createElement("div",null,i.a.createElement("button",{onClick:this.clickBtn},"click"),i.a.createElement("div",{className:"box2"},e.name))}}])&&f(r.prototype,n),o&&f(r,o),a}(i.a.Component),void((n=o).color="red")||n);window.App=O,Object(a.render)(i.a.createElement(O,null),document.querySelector("#root"))},27:function(e,t){}});