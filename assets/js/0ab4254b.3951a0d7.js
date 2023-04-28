/*! For license information please see 0ab4254b.3951a0d7.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[810532],{951750:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>a,toc:()=>u});var n=r(824246),o=r(511151);const c={id:"architecture",title:"Search Architecture",description:"Documentation on Search Architecture"},i=void 0,a={unversionedId:"features/search/architecture",id:"features/search/architecture",title:"Search Architecture",description:"Documentation on Search Architecture",source:"@site/../docs/features/search/architecture.md",sourceDirName:"features/search",slug:"/features/search/architecture",permalink:"/docs/features/search/architecture",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/features/search/architecture.md",tags:[],version:"current",frontMatter:{id:"architecture",title:"Search Architecture",description:"Documentation on Search Architecture"},sidebar:"docs",previous:{title:"Search Concepts",permalink:"/docs/features/search/concepts"},next:{title:"Search Engines",permalink:"/docs/features/search/search-engines"}},s={},u=[{value:"Tech Stack",id:"tech-stack",level:2}];function l(e){const t=Object.assign({p:"p",img:"img",ul:"ul",li:"li",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Below you can explore the Search Architecture. Our aim with this architecture is\nto support a wide variety of search engines, while providing a simple developer\nexperience for plugin developers, and a good out-of-the-box experience for\nBackstage end-users."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Search Architecture",src:r(945185).Z+"",width:"764",height:"881"})}),"\n",(0,n.jsx)(t.p,{children:"At a base-level, we want to support the following:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"We aim to enable the capability to search across the entire Backstage\necosystem including, but not limited to, entities in the software catalog.\nSearchable content won't be required to relate directly to the software\ncatalog, but by convention, we may encourage loose relationships using\nwell-known field names or attributes."}),"\n",(0,n.jsx)(t.li,{children:"We aim to enable the capability to deploy Backstage using any search engine,\nby providing an integration and translation layer between the core search\nplugin and search engine specific logic that can be extended for different\nsearch engines. We may also introduce the ability to replace the backend API\nendpoint with a custom endpoint for simpler customization."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"More advanced use-cases we hope to support with this architecture include:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"It should be possible for any plugin to expose new content to search. (e.g.\nentity metadata, documentation from TechDocs)"}),"\n",(0,n.jsx)(t.li,{children:"It should be possible for any plugin to append relevant metadata to existing\ncontent in search. (e.g. location (path) for TechDocs page)"}),"\n",(0,n.jsx)(t.li,{children:"It should be possible to refine search queries (e.g. ranking, scoring, etc.)"}),"\n",(0,n.jsx)(t.li,{children:"It should be possible to customize the search UI"}),"\n",(0,n.jsx)(t.li,{children:"It should be possible to add search functionality to any Backstage plugin or\ndeployment"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Architecture non-goals:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"At this time, we do not intend to directly support event-driven or incremental\nindex management. Instead, we'll be focused on scheduled, bulk index\nmanagement."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"tech-stack",children:"Tech Stack"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Stack"}),(0,n.jsx)(t.th,{children:"Location"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Frontend Plugin"}),(0,n.jsx)(t.td,{children:"@backstage/plugin-search"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Frontend Plugin Library"}),(0,n.jsx)(t.td,{children:"@backstage/plugin-search-react"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Isomorphic Plugin Library"}),(0,n.jsx)(t.td,{children:"@backstage/plugin-search-common"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Backend Plugin"}),(0,n.jsx)(t.td,{children:"@backstage/plugin-search-backend"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Backend Plugin Library"}),(0,n.jsx)(t.td,{children:"@backstage/plugin-search-backend-node"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Backend Plugin Module"}),(0,n.jsx)(t.td,{children:"@backstage/plugin-search-backend-module-elasticsearch"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Backend Plugin Module"}),(0,n.jsx)(t.td,{children:"@backstage/plugin-search-backend-module-pg"})]})]})]})]})}const d=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(l,e)})):l(e)}},945185:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/architecture.drawio-0af92b3bf372766547f7db6c3fcea92c.svg"},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var c,i,a=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),s=1;s<arguments.length;s++){for(var u in c=Object(arguments[s]))r.call(c,u)&&(a[u]=c[u]);if(t){i=t(c);for(var l=0;l<i.length;l++)n.call(c,i[l])&&(a[i[l]]=c[i[l]])}}return a}},371426:(e,t,r)=>{r(862525);var n=r(827378),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var c=Symbol.for;o=c("react.element"),t.Fragment=c("react.fragment")}var i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,r){var n,c={},u=null,l=null;for(n in void 0!==r&&(u=""+r),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(l=t.ref),t)a.call(t,n)&&!s.hasOwnProperty(n)&&(c[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===c[n]&&(c[n]=t[n]);return{$$typeof:o,type:e,key:u,ref:l,props:c,_owner:i.current}}t.jsx=u,t.jsxs=u},541535:(e,t,r)=>{var n=r(862525),o=60103,c=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var i=60109,a=60110,s=60112;t.Suspense=60113;var u=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var d=Symbol.for;o=d("react.element"),c=d("react.portal"),t.Fragment=d("react.fragment"),t.StrictMode=d("react.strict_mode"),t.Profiler=d("react.profiler"),i=d("react.provider"),a=d("react.context"),s=d("react.forward_ref"),t.Suspense=d("react.suspense"),u=d("react.memo"),l=d("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function g(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||p}function b(){}function m(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||p}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=g.prototype;var v=m.prototype=new b;v.constructor=m,n(v,g.prototype),v.isPureReactComponent=!0;var j={current:null},x=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function _(e,t,r){var n,c={},i=null,a=null;if(null!=t)for(n in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(i=""+t.key),t)x.call(t,n)&&!k.hasOwnProperty(n)&&(c[n]=t[n]);var s=arguments.length-2;if(1===s)c.children=r;else if(1<s){for(var u=Array(s),l=0;l<s;l++)u[l]=arguments[l+2];c.children=u}if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===c[n]&&(c[n]=s[n]);return{$$typeof:o,type:e,key:i,ref:a,props:c,_owner:j.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var S=/\/+/g;function O(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,r,n,i){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var s=!1;if(null===e)s=!0;else switch(a){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case o:case c:s=!0}}if(s)return i=i(s=e),e=""===n?"."+O(s,0):n,Array.isArray(i)?(r="",null!=e&&(r=e.replace(S,"$&/")+"/"),P(i,t,r,"",(function(e){return e}))):null!=i&&(w(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,r+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(S,"$&/")+"/")+e)),t.push(i)),1;if(s=0,n=""===n?".":n+":",Array.isArray(e))for(var u=0;u<e.length;u++){var l=n+O(a=e[u],u);s+=P(a,t,r,l,i)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),u=0;!(a=e.next()).done;)s+=P(a=a.value,t,r,l=n+O(a,u++),i);else if("object"===a)throw t=""+e,Error(h(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return s}function C(e,t,r){if(null==e)return e;var n=[],o=0;return P(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function E(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var $={current:null};function R(){var e=$.current;if(null===e)throw Error(h(321));return e}var A={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:j,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:C,forEach:function(e,t,r){C(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return C(e,(function(){t++})),t},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error(h(143));return e}},t.Component=g,t.PureComponent=m,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,t.cloneElement=function(e,t,r){if(null==e)throw Error(h(267,e));var c=n({},e.props),i=e.key,a=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,s=j.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(l in t)x.call(t,l)&&!k.hasOwnProperty(l)&&(c[l]=void 0===t[l]&&void 0!==u?u[l]:t[l])}var l=arguments.length-2;if(1===l)c.children=r;else if(1<l){u=Array(l);for(var d=0;d<l;d++)u[d]=arguments[d+2];c.children=u}return{$$typeof:o,type:e.type,key:i,ref:a,props:c,_owner:s}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:a,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=_,t.createFactory=function(e){var t=_.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=w,t.lazy=function(e){return{$$typeof:l,_payload:{_status:-1,_result:e},_init:E}},t.memo=function(e,t){return{$$typeof:u,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return R().useCallback(e,t)},t.useContext=function(e,t){return R().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return R().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return R().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return R().useLayoutEffect(e,t)},t.useMemo=function(e,t){return R().useMemo(e,t)},t.useReducer=function(e,t,r){return R().useReducer(e,t,r)},t.useRef=function(e){return R().useRef(e)},t.useState=function(e){return R().useState(e)},t.version="17.0.2"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Zo:()=>a,ah:()=>c});var n=r(667294);const o=n.createContext({});function c(e){const t=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function a({components:e,children:t,disableParentContext:r}){let a;return a=r?"function"==typeof e?e({}):e||i:c(e),n.createElement(o.Provider,{value:a},t)}}}]);