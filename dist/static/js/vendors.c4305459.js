(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"./node_modules/@babel/code-frame/lib/index.js":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.codeFrameColumns=a,t.default=function(t,n,r,o={}){if(!i){i=!0;const t="Passing lineNumber and colNumber is deprecated to @babel/code-frame. Please use `codeFrameColumns`.";if(e.emitWarning)e.emitWarning(t,"DeprecationWarning");else{new Error(t).name="DeprecationWarning",console.warn(new Error(t))}}r=Math.max(r,0);return a(t,{start:{column:r,line:n}},o)};var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var s=r?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(n,i,s):n[i]=e[i]}n.default=e,t&&t.set(e,n);return n}(n("./node_modules/@babel/highlight/lib/index.js"));function o(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}let i=!1;const s=/\r\n|[\n\r\u2028\u2029]/;function a(e,t,n={}){const o=(n.highlightCode||n.forceColor)&&(0,r.shouldHighlight)(n),i=(0,r.getChalk)(n),a=function(e){return{gutter:e.grey,marker:e.red.bold,message:e.red.bold}}(i),l=(e,t)=>o?e(t):t,u=e.split(s),{start:c,end:d,markerLines:p}=function(e,t,n){const r=Object.assign({column:0,line:-1},e.start),o=Object.assign({},r,e.end),{linesAbove:i=2,linesBelow:s=3}=n||{},a=r.line,l=r.column,u=o.line,c=o.column;let d=Math.max(a-(i+1),0),p=Math.min(t.length,u+s);-1===a&&(d=0),-1===u&&(p=t.length);const f=u-a,h={};if(f)for(let m=0;m<=f;m++){const e=m+a;if(l)if(0===m){const n=t[e-1].length;h[e]=[l,n-l+1]}else if(m===f)h[e]=[0,c];else{const n=t[e-m].length;h[e]=[0,n]}else h[e]=!0}else h[a]=l===c?!l||[l,0]:[l,c-l];return{start:d,end:p,markerLines:h}}(t,u,n),f=t.start&&"number"===typeof t.start.column,h=String(d).length;let m=(o?(0,r.default)(e,n):e).split(s).slice(c,d).map((e,t)=>{const r=c+1+t,o=` ${(" "+r).slice(-h)} | `,i=p[r],s=!p[r+1];if(i){let t="";if(Array.isArray(i)){const r=e.slice(0,Math.max(i[0]-1,0)).replace(/[^\t]/g," "),u=i[1]||1;t=["\n ",l(a.gutter,o.replace(/\d/g," ")),r,l(a.marker,"^").repeat(u)].join(""),s&&n.message&&(t+=" "+l(a.message,n.message))}return[l(a.marker,">"),l(a.gutter,o),e,t].join("")}return` ${l(a.gutter,o)}${e}`}).join("\n");return n.message&&!f&&(m=`${" ".repeat(h+1)}${n.message}\n${m}`),o?i.reset(m):m}}).call(this,n("./node_modules/process/browser.js"))},"./node_modules/@babel/core/lib/config/caching.js":function(e,t,n){"use strict";function r(){const e=(t=n("./node_modules/gensync/index.js"))&&t.__esModule?t:{default:t};var t;return r=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.makeWeakCache=l,t.makeWeakCacheSync=function(e){return s(l(e))},t.makeStrongCache=u,t.makeStrongCacheSync=function(e){return s(u(e))},t.assertSimpleType=h;var o=n("./node_modules/@babel/core/lib/gensync-utils/async.js"),i=n("./node_modules/@babel/core/lib/config/util.js");const s=e=>(0,r().default)(e).sync;function*a(e){return!0}function l(e){return c(WeakMap,e)}function u(e){return c(Map,e)}function c(e,t){const n=new e,r=new e,s=new e;return function*(e,a){const l=yield*(0,o.isAsync)(),u=l?r:n,c=yield*function*(e,t,n,r,i){const s=yield*d(t,r,i);if(s.valid)return s;if(e){const e=yield*d(n,r,i);if(e.valid){return{valid:!0,value:yield*(0,o.waitFor)(e.value.promise)}}}return{valid:!1,value:null}}(l,u,s,e,a);if(c.valid)return c.value;const h=new f(a),g=t(e,h);let y,b;if((0,i.isIterableIterator)(g)){const t=g;b=yield*(0,o.onFirstPause)(t,()=>{y=function(e,t,n){const r=new m;return p(t,e,n,r),r}(h,s,e)})}else b=g;return p(u,h,e,b),y&&(s.delete(e),y.release(b)),b}}function*d(e,t,n){const r=e.get(t);if(r)for(const{value:o,valid:i}of r)if(yield*i(n))return{valid:!0,value:o};return{valid:!1,value:null}}function p(e,t,n,r){t.configured()||t.forever();let o=e.get(n);switch(t.deactivate(),t.mode()){case"forever":o=[{value:r,valid:a}],e.set(n,o);break;case"invalidate":o=[{value:r,valid:t.validator()}],e.set(n,o);break;case"valid":o?o.push({value:r,valid:t.validator()}):(o=[{value:r,valid:t.validator()}],e.set(n,o))}}class f{constructor(e){this._active=!0,this._never=!1,this._forever=!1,this._invalidate=!1,this._configured=!1,this._pairs=[],this._data=void 0,this._data=e}simple(){return function(e){function t(t){if("boolean"!==typeof t)return e.using(()=>h(t()));t?e.forever():e.never()}return t.forever=()=>e.forever(),t.never=()=>e.never(),t.using=t=>e.using(()=>h(t())),t.invalidate=t=>e.invalidate(()=>h(t())),t}(this)}mode(){return this._never?"never":this._forever?"forever":this._invalidate?"invalidate":"valid"}forever(){if(!this._active)throw new Error("Cannot change caching after evaluation has completed.");if(this._never)throw new Error("Caching has already been configured with .never()");this._forever=!0,this._configured=!0}never(){if(!this._active)throw new Error("Cannot change caching after evaluation has completed.");if(this._forever)throw new Error("Caching has already been configured with .forever()");this._never=!0,this._configured=!0}using(e){if(!this._active)throw new Error("Cannot change caching after evaluation has completed.");if(this._never||this._forever)throw new Error("Caching has already been configured with .never or .forever()");this._configured=!0;const t=e(this._data),n=(0,o.maybeAsync)(e,"You appear to be using an async cache handler, but Babel has been called synchronously");return(0,o.isThenable)(t)?t.then(e=>(this._pairs.push([e,n]),e)):(this._pairs.push([t,n]),t)}invalidate(e){return this._invalidate=!0,this.using(e)}validator(){const e=this._pairs;return function*(t){for(const[n,r]of e)if(n!==(yield*r(t)))return!1;return!0}}deactivate(){this._active=!1}configured(){return this._configured}}function h(e){if((0,o.isThenable)(e))throw new Error("You appear to be using an async cache handler, which your current version of Babel does not support. We may add support for this in the future, but if you're on the most recent version of @babel/core and still seeing this error, then you'll need to synchronously handle your caching logic.");if(null!=e&&"string"!==typeof e&&"boolean"!==typeof e&&"number"!==typeof e)throw new Error("Cache keys must be either string, boolean, number, null, or undefined.");return e}class m{constructor(){this.released=!1,this.promise=void 0,this._resolve=void 0,this.promise=new Promise(e=>{this._resolve=e})}release(e){this.released=!0,this._resolve(e)}}},"./node_modules/@babel/core/lib/config/config-chain.js":function(e,t,n){"use strict";function r(){const e=d(n("./node_modules/path-browserify/index.js"));return r=function(){return e},e}function o(){const e=d(n("./node_modules/@babel/core/node_modules/debug/src/browser.js"));return o=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.buildPresetChain=function*(e,t){const n=yield*f(e,t);return n?{plugins:F(n.plugins),presets:F(n.presets),options:n.options.map(e=>R(e)),files:new Set}:null},t.buildRootChain=function*(e,t){let n,o;const i=new a.ConfigPrinter,u=yield*x({options:e,dirname:t.cwd},t,void 0,i);if(!u)return null;const c=i.output();let d;"string"===typeof e.configFile?d=yield*(0,l.loadConfig)(e.configFile,t.cwd,t.envName,t.caller):!1!==e.configFile&&(d=yield*(0,l.findRootConfig)(t.root,t.envName,t.caller));let{babelrc:p,babelrcRoots:f}=e,h=t.cwd;const m=L(),g=new a.ConfigPrinter;if(d){const e=b(d),r=yield*j(e,t,void 0,g);if(!r)return null;n=g.output(),void 0===p&&(p=e.options.babelrc),void 0===f&&(h=e.dirname,f=e.options.babelrcRoots),M(m,r)}const y="string"===typeof t.filename?yield*(0,l.findPackageData)(t.filename):null;let _,E,w=!1;const T=L();if((!0===p||void 0===p)&&y&&function(e,t,n,o){if("boolean"===typeof n)return n;const i=e.root;if(void 0===n)return-1!==t.directories.indexOf(i);let a=n;Array.isArray(a)||(a=[a]);if(a=a.map(e=>"string"===typeof e?r().default.resolve(o,e):e),1===a.length&&a[0]===i)return-1!==t.directories.indexOf(i);return a.some(n=>("string"===typeof n&&(n=(0,s.default)(n,o)),t.directories.some(t=>W(n,o,t,e))))}(t,y,f,h)){if(({ignore:_,config:E}=yield*(0,l.findRelativeConfig)(y,t.envName,t.caller)),_&&T.files.add(_.filepath),_&&q(t,_.ignore,null,_.dirname)&&(w=!0),E&&!w){const e=v(E),n=new a.ConfigPrinter,r=yield*j(e,t,void 0,n);r?(o=n.output(),M(T,r)):w=!0}E&&w&&T.files.add(E.filepath)}if(t.showConfig)return console.log(`Babel configs on "${t.filename}" (ascending priority):\n`+[n,o,c].filter(e=>!!e).join("\n\n")),null;const S=M(M(M(L(),m),T),u);return{plugins:w?[]:F(S.plugins),presets:w?[]:F(S.presets),options:w?[]:S.options.map(e=>R(e)),fileHandling:w?"ignored":"transpile",ignore:_||void 0,babelrc:E||void 0,config:d||void 0,files:S.files}},t.buildPresetChainWalker=void 0;var i=n("./node_modules/@babel/core/lib/config/validation/options.js"),s=d(n("./node_modules/@babel/core/lib/config/pattern-to-regex.js")),a=n("./node_modules/@babel/core/lib/config/printer.js"),l=n("./node_modules/@babel/core/lib/config/files/index-browser.js"),u=n("./node_modules/@babel/core/lib/config/caching.js"),c=n("./node_modules/@babel/core/lib/config/config-descriptors.js");function d(e){return e&&e.__esModule?e:{default:e}}const p=(0,o().default)("babel:config:config-chain");const f=I({root:e=>h(e),env:(e,t)=>m(e)(t),overrides:(e,t)=>g(e)(t),overridesEnv:(e,t,n)=>y(e)(t)(n),createLogger:()=>()=>{}});t.buildPresetChainWalker=f;const h=(0,u.makeWeakCacheSync)(e=>k(e,e.alias,c.createUncachedDescriptors)),m=(0,u.makeWeakCacheSync)(e=>(0,u.makeStrongCacheSync)(t=>O(e,e.alias,c.createUncachedDescriptors,t))),g=(0,u.makeWeakCacheSync)(e=>(0,u.makeStrongCacheSync)(t=>A(e,e.alias,c.createUncachedDescriptors,t))),y=(0,u.makeWeakCacheSync)(e=>(0,u.makeStrongCacheSync)(t=>(0,u.makeStrongCacheSync)(n=>P(e,e.alias,c.createUncachedDescriptors,t,n))));const b=(0,u.makeWeakCacheSync)(e=>({filepath:e.filepath,dirname:e.dirname,options:(0,i.validate)("configfile",e.options)})),v=(0,u.makeWeakCacheSync)(e=>({filepath:e.filepath,dirname:e.dirname,options:(0,i.validate)("babelrcfile",e.options)})),_=(0,u.makeWeakCacheSync)(e=>({filepath:e.filepath,dirname:e.dirname,options:(0,i.validate)("extendsfile",e.options)})),x=I({root:e=>k(e,"base",c.createCachedDescriptors),env:(e,t)=>O(e,"base",c.createCachedDescriptors,t),overrides:(e,t)=>A(e,"base",c.createCachedDescriptors,t),overridesEnv:(e,t,n)=>P(e,"base",c.createCachedDescriptors,t,n),createLogger:(e,t,n)=>function(e,t,n){var r;if(!n)return()=>{};return n.configure(t.showConfig,a.ChainFormatter.Programmatic,{callerName:null==(r=t.caller)?void 0:r.name})}(0,t,n)}),E=I({root:e=>w(e),env:(e,t)=>T(e)(t),overrides:(e,t)=>S(e)(t),overridesEnv:(e,t,n)=>C(e)(t)(n),createLogger:(e,t,n)=>function(e,t,n){if(!n)return()=>{};return n.configure(t.showConfig,a.ChainFormatter.Config,{filepath:e})}(e.filepath,t,n)});function*j(e,t,n,r){const o=yield*E(e,t,n,r);return o&&o.files.add(e.filepath),o}const w=(0,u.makeWeakCacheSync)(e=>k(e,e.filepath,c.createUncachedDescriptors)),T=(0,u.makeWeakCacheSync)(e=>(0,u.makeStrongCacheSync)(t=>O(e,e.filepath,c.createUncachedDescriptors,t))),S=(0,u.makeWeakCacheSync)(e=>(0,u.makeStrongCacheSync)(t=>A(e,e.filepath,c.createUncachedDescriptors,t))),C=(0,u.makeWeakCacheSync)(e=>(0,u.makeStrongCacheSync)(t=>(0,u.makeStrongCacheSync)(n=>P(e,e.filepath,c.createUncachedDescriptors,t,n))));function k({dirname:e,options:t},n,r){return r(e,t,n)}function O({dirname:e,options:t},n,r,o){const i=t.env&&t.env[o];return i?r(e,i,`${n}.env["${o}"]`):null}function A({dirname:e,options:t},n,r,o){const i=t.overrides&&t.overrides[o];if(!i)throw new Error("Assertion failure - missing override");return r(e,i,`${n}.overrides[${o}]`)}function P({dirname:e,options:t},n,r,o,i){const s=t.overrides&&t.overrides[o];if(!s)throw new Error("Assertion failure - missing override");const a=s.env&&s.env[i];return a?r(e,a,`${n}.overrides[${o}].env["${i}"]`):null}function I({root:e,env:t,overrides:n,overridesEnv:r,createLogger:o}){return function*(i,s,a=new Set,l){const{dirname:u}=i,c=[],d=e(i);if(B(d,u,s)){c.push({config:d,envName:void 0,index:void 0});const e=t(i,s.envName);e&&B(e,u,s)&&c.push({config:e,envName:s.envName,index:void 0}),(d.options.overrides||[]).forEach((e,t)=>{const o=n(i,t);if(B(o,u,s)){c.push({config:o,index:t,envName:void 0});const e=r(i,t,s.envName);e&&B(e,u,s)&&c.push({config:e,index:t,envName:s.envName})}})}if(c.some(({config:{options:{ignore:e,only:t}}})=>q(s,e,t,u)))return null;const p=L(),f=o(i,s,l);for(const{config:e,index:t,envName:n}of c){if(!(yield*N(p,e.options,u,s,a,l)))return null;f(e,t,n),D(p,e)}return p}}function*N(e,t,n,r,o,i){if(void 0===t.extends)return!0;const s=yield*(0,l.loadConfig)(t.extends,n,r.envName,r.caller);if(o.has(s))throw new Error(`Configuration cycle detected loading ${s.filepath}.\nFile already loaded following the config chain:\n`+Array.from(o,e=>" - "+e.filepath).join("\n"));o.add(s);const a=yield*j(_(s),r,o,i);return o.delete(s),!!a&&(M(e,a),!0)}function M(e,t){e.options.push(...t.options),e.plugins.push(...t.plugins),e.presets.push(...t.presets);for(const n of t.files)e.files.add(n);return e}function D(e,{options:t,plugins:n,presets:r}){return e.options.push(t),e.plugins.push(...n()),e.presets.push(...r()),e}function L(){return{options:[],presets:[],plugins:[],files:new Set}}function R(e){const t=Object.assign({},e);return delete t.extends,delete t.env,delete t.overrides,delete t.plugins,delete t.presets,delete t.passPerPreset,delete t.ignore,delete t.only,delete t.test,delete t.include,delete t.exclude,Object.prototype.hasOwnProperty.call(t,"sourceMap")&&(t.sourceMaps=t.sourceMap,delete t.sourceMap),t}function F(e){const t=new Map,n=[];for(const r of e)if("function"===typeof r.value){const e=r.value;let o=t.get(e);o||(o=new Map,t.set(e,o));let i=o.get(r.name);i?i.value=r:(i={value:r},n.push(i),r.ownPass||o.set(r.name,i))}else n.push({value:r});return n.reduce((e,t)=>(e.push(t.value),e),[])}function B({options:e},t,n){return(void 0===e.test||z(n,e.test,t))&&(void 0===e.include||z(n,e.include,t))&&(void 0===e.exclude||!z(n,e.exclude,t))}function z(e,t,n){return U(e,Array.isArray(t)?t:[t],n)}function q(e,t,n,r){if(t&&U(e,t,r)){var o;const n=`No config is applied to "${null!=(o=e.filename)?o:"(unknown)"}" because it matches one of \`ignore: ${JSON.stringify(t)}\` from "${r}"`;return p(n),e.showConfig&&console.log(n),!0}if(n&&!U(e,n,r)){var i;const t=`No config is applied to "${null!=(i=e.filename)?i:"(unknown)"}" because it fails to match one of \`only: ${JSON.stringify(n)}\` from "${r}"`;return p(t),e.showConfig&&console.log(t),!0}return!1}function U(e,t,n){return t.some(t=>W(t,n,e.filename,e))}function W(e,t,n,r){if("function"===typeof e)return!!e(n,{dirname:t,envName:r.envName,caller:r.caller});if("string"!==typeof n)throw new Error("Configuration contains string/RegExp pattern, but no filename was passed to Babel");return"string"===typeof e&&(e=(0,s.default)(e,t)),e.test(n)}},"./node_modules/@babel/core/lib/config/config-descriptors.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createCachedDescriptors=function(e,t,n){const{plugins:r,presets:o,passPerPreset:i}=t;return{options:t,plugins:r?()=>u(r,e)(n):()=>[],presets:o?()=>a(o,e)(n)(!!i):()=>[]}},t.createUncachedDescriptors=function(e,t,n){let r,o;return{options:t,plugins:()=>(r||(r=f(t.plugins||[],e,n)),r),presets:()=>(o||(o=p(t.presets||[],e,n,!!t.passPerPreset)),o)}},t.createDescriptor=m;var r=n("./node_modules/@babel/core/lib/config/files/index-browser.js"),o=n("./node_modules/@babel/core/lib/config/item.js"),i=n("./node_modules/@babel/core/lib/config/caching.js");const s=new WeakMap,a=(0,i.makeWeakCacheSync)((e,t)=>{const n=t.using(e=>e);return(0,i.makeStrongCacheSync)(t=>(0,i.makeStrongCacheSync)(r=>p(e,n,t,r).map(e=>d(s,e))))}),l=new WeakMap,u=(0,i.makeWeakCacheSync)((e,t)=>{const n=t.using(e=>e);return(0,i.makeStrongCacheSync)(t=>f(e,n,t).map(e=>d(l,e)))}),c={};function d(e,t){const{value:n,options:r=c}=t;if(!1===r)return t;let o=e.get(n);o||(o=new WeakMap,e.set(n,o));let i=o.get(r);if(i||(i=[],o.set(r,i)),-1===i.indexOf(t)){const e=i.filter(e=>{return r=t,(n=e).name===r.name&&n.value===r.value&&n.options===r.options&&n.dirname===r.dirname&&n.alias===r.alias&&n.ownPass===r.ownPass&&(n.file&&n.file.request)===(r.file&&r.file.request)&&(n.file&&n.file.resolved)===(r.file&&r.file.resolved);var n,r});if(e.length>0)return e[0];i.push(t)}return t}function p(e,t,n,r){return h("preset",e,t,n,r)}function f(e,t,n){return h("plugin",e,t,n)}function h(e,t,n,r,o){const i=t.map((t,i)=>m(t,n,{type:e,alias:`${r}$${i}`,ownPass:!!o}));return function(e){const t=new Map;for(const n of e){if("function"!==typeof n.value)continue;let r=t.get(n.value);if(r||(r=new Set,t.set(n.value,r)),r.has(n.name)){const t=e.filter(e=>e.value===n.value);throw new Error(["Duplicate plugin/preset detected.","If you'd like to use two separate instances of a plugin,","they need separate names, e.g.","","  plugins: [","    ['some-plugin', {}],","    ['some-plugin', {}, 'some unique name'],","  ]","","Duplicates detected are:",""+JSON.stringify(t,null,2)].join("\n"))}r.add(n.name)}}(i),i}function m(e,t,{type:n,alias:i,ownPass:s}){const a=(0,o.getItemDescriptor)(e);if(a)return a;let l,u,c=e;Array.isArray(c)&&(3===c.length?[c,u,l]=c:[c,u]=c);let d=void 0,p=null;if("string"===typeof c){if("string"!==typeof n)throw new Error("To resolve a string-based item, the type of item must be given");const e="plugin"===n?r.loadPlugin:r.loadPreset,o=c;({filepath:p,value:c}=e(c,t)),d={request:o,resolved:p}}if(!c)throw new Error("Unexpected falsy value: "+String(c));if("object"===typeof c&&c.__esModule){if(!c.default)throw new Error("Must export a default export when using ES6 modules.");c=c.default}if("object"!==typeof c&&"function"!==typeof c)throw new Error(`Unsupported format: ${typeof c}. Expected an object or a function.`);if(null!==p&&"object"===typeof c&&c)throw new Error("Plugin/Preset files are not allowed to export objects, only functions. In "+p);return{name:l,alias:p||i,value:c,options:u,dirname:t,ownPass:s,file:d}}},"./node_modules/@babel/core/lib/config/files/index-browser.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.findConfigUpwards=function*(e){return null},t.findPackageData=function*(e){return{filepath:e,directories:[],pkg:null,isPackage:!1}},t.findRelativeConfig=function*(e,t,n){return{pkg:null,config:null,ignore:null}},t.findRootConfig=function*(e,t,n){return null},t.loadConfig=function*(e,t,n,r){throw new Error(`Cannot load ${e} relative to ${t} in a browser`)},t.resolveShowConfigPath=function*(e){return null},t.resolvePlugin=function(e,t){return null},t.resolvePreset=function(e,t){return null},t.loadPlugin=function(e,t){throw new Error(`Cannot load plugin ${e} relative to ${t} in a browser`)},t.loadPreset=function(e,t){throw new Error(`Cannot load preset ${e} relative to ${t} in a browser`)},t.ROOT_CONFIG_FILENAMES=void 0;t.ROOT_CONFIG_FILENAMES=[]},"./node_modules/@babel/core/lib/config/full.js":function(e,t,n){"use strict";function r(){const e=y(n("./node_modules/gensync/index.js"));return r=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n("./node_modules/@babel/core/lib/gensync-utils/async.js"),i=n("./node_modules/@babel/core/lib/config/util.js"),s=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=g();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("./node_modules/@babel/core/lib/index.js")),a=y(n("./node_modules/@babel/core/lib/config/plugin.js")),l=n("./node_modules/@babel/core/lib/config/item.js"),u=n("./node_modules/@babel/core/lib/config/config-chain.js");function c(){const e=y(n("./node_modules/@babel/traverse/lib/index.js"));return c=function(){return e},e}var d=n("./node_modules/@babel/core/lib/config/caching.js"),p=n("./node_modules/@babel/core/lib/config/validation/options.js"),f=n("./node_modules/@babel/core/lib/config/validation/plugins.js"),h=y(n("./node_modules/@babel/core/lib/config/helpers/config-api.js")),m=y(n("./node_modules/@babel/core/lib/config/partial.js"));function g(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return g=function(){return e},e}function y(e){return e&&e.__esModule?e:{default:e}}var b=(0,r().default)((function*(e){const t=yield*(0,m.default)(e);if(!t)return null;const{options:n,context:r,fileHandling:o}=t;if("ignored"===o)return null;const s={},{plugins:a,presets:u}=n;if(!a||!u)throw new Error("Assertion failure - plugins and presets exist");const c=e=>{const t=(0,l.getItemDescriptor)(e);if(!t)throw new Error("Assertion failure - must be config item");return t},d=u.map(c),f=a.map(c),h=[[]],g=[];if(yield*v(r,(function*e(t,n){const o=[];for(let i=0;i<t.length;i++){const e=t[i];if(!1!==e.options)try{e.ownPass?o.push({preset:yield*w(e,r),pass:[]}):o.unshift({preset:yield*w(e,r),pass:n})}catch(a){throw"BABEL_UNKNOWN_OPTION"===a.code&&(0,p.checkNoUnwrappedItemOptionPairs)(t,i,"preset",a),a}}if(o.length>0){h.splice(1,0,...o.map(e=>e.pass).filter(e=>e!==n));for(const{preset:t,pass:n}of o){if(!t)return!0;n.push(...t.plugins);if(yield*e(t.presets,n))return!0;t.options.forEach(e=>{(0,i.mergeOptions)(s,e)})}}}))(d,h[0]))return null;const y=s;return(0,i.mergeOptions)(y,n),yield*v(r,(function*(){h[0].unshift(...f);for(const t of h){const n=[];g.push(n);for(let o=0;o<t.length;o++){const i=t[o];if(!1!==i.options)try{n.push(yield*x(i,r))}catch(e){throw"BABEL_UNKNOWN_PLUGIN_PROPERTY"===e.code&&(0,p.checkNoUnwrappedItemOptionPairs)(t,o,"plugin",e),e}}}}))(),y.plugins=g[0],y.presets=g.slice(1).filter(e=>e.length>0).map(e=>({plugins:e})),y.passPerPreset=y.presets.length>0,{options:y,passes:g}}));function v(e,t){return function*(n,r){try{return yield*t(n,r)}catch(o){throw/^\[BABEL\]/.test(o.message)||(o.message=`[BABEL] ${e.filename||"unknown"}: ${o.message}`),o}}}t.default=b;const _=(0,d.makeWeakCache)((function*({value:e,options:t,dirname:n,alias:r},o){if(!1===t)throw new Error("Assertion failure");t=t||{};let i=e;if("function"===typeof e){const l=Object.assign({},s,(0,h.default)(o));try{i=e(l,t,n)}catch(a){throw r&&(a.message+=` (While processing: ${JSON.stringify(r)})`),a}}if(!i||"object"!==typeof i)throw new Error("Plugin/Preset did not return an object.");if("function"===typeof i.then)throw yield*[],new Error("You appear to be using an async plugin, which your current version of Babel does not support. If you're using a published plugin, you may need to upgrade your @babel/core version.");return{value:i,options:t,dirname:n,alias:r}}));function*x(e,t){if(e.value instanceof a.default){if(e.options)throw new Error("Passed options to an existing Plugin instance will not work.");return e.value}return yield*E(yield*_(e,t),t)}const E=(0,d.makeWeakCache)((function*({value:e,options:t,dirname:n,alias:r},i){const s=(0,f.validatePluginObject)(e),l=Object.assign({},s);if(l.visitor&&(l.visitor=c().default.explode(Object.assign({},l.visitor))),l.inherits){const e={name:void 0,alias:r+"$inherits",value:l.inherits,options:t,dirname:n},s=yield*(0,o.forwardAsync)(x,t=>i.invalidate(n=>t(e,n)));l.pre=S(s.pre,l.pre),l.post=S(s.post,l.post),l.manipulateOptions=S(s.manipulateOptions,l.manipulateOptions),l.visitor=c().default.visitors.merge([s.visitor||{},l.visitor||{}])}return new a.default(l,t,r)})),j=(e,t)=>{if(e.test||e.include||e.exclude){const e=t.name?`"${t.name}"`:"/* your preset */";throw new Error([`Preset ${e} requires a filename to be set when babel is called directly,`,"```",`babel.transform(code, { filename: 'file.ts', presets: [${e}] });`,"```","See https://babeljs.io/docs/en/options#filename for more information."].join("\n"))}};function*w(e,t){const n=T(yield*_(e,t));return((e,t,n)=>{if(!t.filename){const{options:t}=e;j(t,n),t.overrides&&t.overrides.forEach(e=>j(e,n))}})(n,t,e),yield*(0,u.buildPresetChain)(n,t)}const T=(0,d.makeWeakCacheSync)(({value:e,dirname:t,alias:n})=>({options:(0,p.validate)("preset",e),alias:n,dirname:t}));function S(e,t){const n=[e,t].filter(Boolean);return n.length<=1?n[0]:function(...e){for(const t of n)t.apply(this,e)}}},"./node_modules/@babel/core/lib/config/helpers/config-api.js":function(e,t,n){"use strict";function r(){const e=(t=n("./node_modules/semver/semver.js"))&&t.__esModule?t:{default:t};var t;return r=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return{version:o.version,cache:e.simple(),env:t=>e.using(e=>"undefined"===typeof t?e.envName:"function"===typeof t?(0,i.assertSimpleType)(t(e.envName)):(Array.isArray(t)||(t=[t]),t.some(t=>{if("string"!==typeof t)throw new Error("Unexpected non-string value");return t===e.envName}))),async:()=>!1,caller:t=>e.using(e=>(0,i.assertSimpleType)(t(e.caller))),assertVersion:s}};var o=n("./node_modules/@babel/core/lib/index.js"),i=n("./node_modules/@babel/core/lib/config/caching.js");function s(e){if("number"===typeof e){if(!Number.isInteger(e))throw new Error("Expected string or integer value.");e=`^${e}.0.0-0`}if("string"!==typeof e)throw new Error("Expected string or integer value.");if(r().default.satisfies(o.version,e))return;const t=Error.stackTraceLimit;"number"===typeof t&&t<25&&(Error.stackTraceLimit=25);const n=new Error(`Requires Babel "${e}", but was loaded with "${o.version}". If you are sure you have a compatible version of @babel/core, it is likely that something in your build process is loading the wrong version. Inspect the stack trace of this error to look for the first entry that doesn't mention "@babel/core" or "babel-core" to see what is calling Babel.`);throw"number"===typeof t&&(Error.stackTraceLimit=t),Object.assign(n,{code:"BABEL_VERSION_UNSUPPORTED",version:o.version,range:e})}},"./node_modules/@babel/core/lib/config/helpers/environment.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getEnv=function(e="development"){return Object({NODE_ENV:"production",PUBLIC_URL:"/miniapp-docs/0.0.5/",DOCZ_BASE:"/miniapp-docs/0.0.5/",npm_package_devDependencies__qunhe_baozheng_docz_theme:"^0.0.105"}).BABEL_ENV||"production"}},"./node_modules/@babel/core/lib/config/index.js":function(e,t,n){"use strict";function r(){const e=s(n("./node_modules/gensync/index.js"));return r=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.default}}),t.loadOptionsAsync=t.loadOptionsSync=t.loadOptions=t.loadPartialConfigAsync=t.loadPartialConfigSync=t.loadPartialConfig=void 0;var o=s(n("./node_modules/@babel/core/lib/config/full.js")),i=n("./node_modules/@babel/core/lib/config/partial.js");function s(e){return e&&e.__esModule?e:{default:e}}const a=(0,r().default)((function*(e){var t;const n=yield*(0,o.default)(e);return null!=(t=null==n?void 0:n.options)?t:null})),l=e=>(t,n)=>(void 0===n&&"function"===typeof t&&(n=t,t=void 0),n?e.errback(t,n):e.sync(t)),u=l(i.loadPartialConfig);t.loadPartialConfig=u;const c=i.loadPartialConfig.sync;t.loadPartialConfigSync=c;const d=i.loadPartialConfig.async;t.loadPartialConfigAsync=d;const p=l(a);t.loadOptions=p;const f=a.sync;t.loadOptionsSync=f;const h=a.async;t.loadOptionsAsync=h},"./node_modules/@babel/core/lib/config/item.js":function(e,t,n){"use strict";function r(){const e=(t=n("./node_modules/path-browserify/index.js"))&&t.__esModule?t:{default:t};var t;return r=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.createItemFromDescriptor=i,t.createConfigItem=function(e,{dirname:t=".",type:n}={}){return i((0,o.createDescriptor)(e,r().default.resolve(t),{type:n,alias:"programmatic item"}))},t.getItemDescriptor=function(e){if(e instanceof s)return e._descriptor;return};var o=n("./node_modules/@babel/core/lib/config/config-descriptors.js");function i(e){return new s(e)}class s{constructor(e){this._descriptor=void 0,this.value=void 0,this.options=void 0,this.dirname=void 0,this.name=void 0,this.file=void 0,this._descriptor=e,Object.defineProperty(this,"_descriptor",{enumerable:!1}),this.value=this._descriptor.value,this.options=this._descriptor.options,this.dirname=this._descriptor.dirname,this.name=this._descriptor.name,this.file=this._descriptor.file?{request:this._descriptor.file.request,resolved:this._descriptor.file.resolved}:void 0,Object.freeze(this)}}Object.freeze(s.prototype)},"./node_modules/@babel/core/lib/config/partial.js":function(e,t,n){"use strict";function r(){const e=p(n("./node_modules/path-browserify/index.js"));return r=function(){return e},e}function o(){const e=p(n("./node_modules/gensync/index.js"));return o=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=f,t.loadPartialConfig=void 0;var i=p(n("./node_modules/@babel/core/lib/config/plugin.js")),s=n("./node_modules/@babel/core/lib/config/util.js"),a=n("./node_modules/@babel/core/lib/config/item.js"),l=n("./node_modules/@babel/core/lib/config/config-chain.js"),u=n("./node_modules/@babel/core/lib/config/helpers/environment.js"),c=n("./node_modules/@babel/core/lib/config/validation/options.js"),d=n("./node_modules/@babel/core/lib/config/files/index-browser.js");function p(e){return e&&e.__esModule?e:{default:e}}function*f(e){if(null!=e&&("object"!==typeof e||Array.isArray(e)))throw new Error("Babel options must be an object, null, or undefined");const t=e?(0,c.validate)("arguments",e):{},{envName:n=(0,u.getEnv)(),cwd:o=".",root:i=".",rootMode:p="root",caller:f,cloneInputAst:h=!0}=t,m=r().default.resolve(o),g=yield*function*(e,t){switch(t){case"root":return e;case"upward-optional":{const t=yield*(0,d.findConfigUpwards)(e);return null===t?e:t}case"upward":{const t=yield*(0,d.findConfigUpwards)(e);if(null!==t)return t;throw Object.assign(new Error(`Babel was run with rootMode:"upward" but a root could not be found when searching upward from "${e}".\nOne of the following config files must be in the directory tree: "${d.ROOT_CONFIG_FILENAMES.join(", ")}".`),{code:"BABEL_ROOT_NOT_FOUND",dirname:e})}default:throw new Error("Assertion failure - unknown rootMode value.")}}(r().default.resolve(m,i),p),y="string"===typeof t.filename?r().default.resolve(o,t.filename):void 0,b={filename:y,cwd:m,root:g,envName:n,caller:f,showConfig:(yield*(0,d.resolveShowConfigPath)(m))===y},v=yield*(0,l.buildRootChain)(t,b);if(!v)return null;const _={};return v.options.forEach(e=>{(0,s.mergeOptions)(_,e)}),_.cloneInputAst=h,_.babelrc=!1,_.configFile=!1,_.passPerPreset=!1,_.envName=b.envName,_.cwd=b.cwd,_.root=b.root,_.filename="string"===typeof b.filename?b.filename:void 0,_.plugins=v.plugins.map(e=>(0,a.createItemFromDescriptor)(e)),_.presets=v.presets.map(e=>(0,a.createItemFromDescriptor)(e)),{options:_,context:b,fileHandling:v.fileHandling,ignore:v.ignore,babelrc:v.babelrc,config:v.config,files:v.files}}const h=(0,o().default)((function*(e){let t=!1;if("object"===typeof e&&null!==e&&!Array.isArray(e)){var n=e;({showIgnoredFiles:t}=n),e=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(n,["showIgnoredFiles"])}const r=yield*f(e);if(!r)return null;const{options:o,babelrc:s,ignore:a,config:l,fileHandling:u,files:c}=r;return"ignored"!==u||t?((o.plugins||[]).forEach(e=>{if(e.value instanceof i.default)throw new Error("Passing cached plugin instances is not supported in babel.loadPartialConfig()")}),new m(o,s?s.filepath:void 0,a?a.filepath:void 0,l?l.filepath:void 0,u,c)):null}));t.loadPartialConfig=h;class m{constructor(e,t,n,r,o,i){this.options=void 0,this.babelrc=void 0,this.babelignore=void 0,this.config=void 0,this.fileHandling=void 0,this.files=void 0,this.options=e,this.babelignore=n,this.babelrc=t,this.config=r,this.fileHandling=o,this.files=i,Object.freeze(this)}hasFilesystemConfig(){return void 0!==this.babelrc||void 0!==this.config}}Object.freeze(m.prototype)},"./node_modules/@babel/core/lib/config/pattern-to-regex.js":function(e,t,n){"use strict";function r(){const e=i(n("./node_modules/path-browserify/index.js"));return r=function(){return e},e}function o(){const e=i(n("./node_modules/lodash/escapeRegExp.js"));return o=function(){return e},e}function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const n=r().default.resolve(t,e).split(r().default.sep);return new RegExp(["^",...n.map((e,t)=>{const r=t===n.length-1;return"**"===e?r?p:d:"*"===e?r?c:u:0===e.indexOf("*.")?l+(0,o().default)(e.slice(1))+(r?a:s):(0,o().default)(e)+(r?a:s)})].join(""))};const s="\\"+r().default.sep,a=`(?:${s}|$)`,l=`[^${s}]+`,u=`(?:${l}${s})`,c=`(?:${l}${a})`,d=u+"*?",p=`${u}*?${c}?`},"./node_modules/@babel/core/lib/config/plugin.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=class{constructor(e,t,n){this.key=void 0,this.manipulateOptions=void 0,this.post=void 0,this.pre=void 0,this.visitor=void 0,this.parserOverride=void 0,this.generatorOverride=void 0,this.options=void 0,this.key=e.name||n,this.manipulateOptions=e.manipulateOptions,this.post=e.post,this.pre=e.pre,this.visitor=e.visitor||{},this.parserOverride=e.parserOverride,this.generatorOverride=e.generatorOverride,this.options=t}}},"./node_modules/@babel/core/lib/config/printer.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ConfigPrinter=t.ChainFormatter=void 0;const r={Programmatic:0,Config:1};t.ChainFormatter=r;const o={title(e,t,n){let o="";return e===r.Programmatic?(o="programmatic options",t&&(o+=" from "+t)):o="config "+n,o},loc(e,t){let n="";return null!=e&&(n+=`.overrides[${e}]`),null!=t&&(n+=`.env["${t}"]`),n},optionsAndDescriptors(e){const t=Object.assign({},e.options);delete t.overrides,delete t.env;const n=[...e.plugins()];n.length&&(t.plugins=n.map(e=>i(e)));const r=[...e.presets()];return r.length&&(t.presets=[...r].map(e=>i(e))),JSON.stringify(t,void 0,2)}};function i(e){var t;let n=null==(t=e.file)?void 0:t.request;return null==n&&("object"===typeof e.value?n=e.value:"function"===typeof e.value&&(n=`[Function: ${e.value.toString().substr(0,50)} ... ]`)),null==n&&(n="[Unknown]"),void 0===e.options?n:null==e.name?[n,e.options]:[n,e.options,e.name]}class s{constructor(){this._stack=[]}configure(e,t,{callerName:n,filepath:r}){return e?(e,o,i)=>{this._stack.push({type:t,callerName:n,filepath:r,content:e,index:o,envName:i})}:()=>{}}static format(e){let t=o.title(e.type,e.callerName,e.filepath);const n=o.loc(e.index,e.envName);n&&(t+=" "+n);return`${t}\n${o.optionsAndDescriptors(e.content)}`}output(){return 0===this._stack.length?"":this._stack.map(e=>s.format(e)).join("\n\n")}}t.ConfigPrinter=s},"./node_modules/@babel/core/lib/config/util.js":function(e,t,n){"use strict";function r(e,t){for(const n of Object.keys(t)){const r=t[n];void 0!==r&&(e[n]=r)}}Object.defineProperty(t,"__esModule",{value:!0}),t.mergeOptions=function(e,t){for(const n of Object.keys(t))if("parserOpts"===n&&t.parserOpts){const n=t.parserOpts;r(e.parserOpts=e.parserOpts||{},n)}else if("generatorOpts"===n&&t.generatorOpts){const n=t.generatorOpts;r(e.generatorOpts=e.generatorOpts||{},n)}else{const r=t[n];void 0!==r&&(e[n]=r)}},t.isIterableIterator=function(e){return!!e&&"function"===typeof e.next&&"function"===typeof e[Symbol.iterator]}},"./node_modules/@babel/core/lib/config/validation/option-assertions.js":function(e,t,n){"use strict";function r(e){switch(e.type){case"root":return"";case"env":return`${r(e.parent)}.env["${e.name}"]`;case"overrides":return`${r(e.parent)}.overrides[${e.index}]`;case"option":return`${r(e.parent)}.${e.name}`;case"access":return`${r(e.parent)}[${JSON.stringify(e.name)}]`;default:throw new Error("Assertion failure: Unknown type "+e.type)}}function o(e,t){return{type:"access",name:t,parent:e}}function i(e,t){if(void 0!==t&&("object"!==typeof t||Array.isArray(t)||!t))throw new Error(r(e)+" must be an object, or undefined");return t}function s(e,t){if(null!=t&&!Array.isArray(t))throw new Error(r(e)+" must be an array, or undefined");return t}function a(e){return"string"===typeof e||"function"===typeof e||e instanceof RegExp}function l(e,t){if(("object"!==typeof t||!t)&&"string"!==typeof t&&"function"!==typeof t)throw new Error(r(e)+" must be a string, object, function");return t}Object.defineProperty(t,"__esModule",{value:!0}),t.msg=r,t.access=o,t.assertRootMode=function(e,t){if(void 0!==t&&"root"!==t&&"upward"!==t&&"upward-optional"!==t)throw new Error(r(e)+' must be a "root", "upward", "upward-optional" or undefined');return t},t.assertSourceMaps=function(e,t){if(void 0!==t&&"boolean"!==typeof t&&"inline"!==t&&"both"!==t)throw new Error(r(e)+' must be a boolean, "inline", "both", or undefined');return t},t.assertCompact=function(e,t){if(void 0!==t&&"boolean"!==typeof t&&"auto"!==t)throw new Error(r(e)+' must be a boolean, "auto", or undefined');return t},t.assertSourceType=function(e,t){if(void 0!==t&&"module"!==t&&"script"!==t&&"unambiguous"!==t)throw new Error(r(e)+' must be "module", "script", "unambiguous", or undefined');return t},t.assertCallerMetadata=function(e,t){const n=i(e,t);if(n){if("string"!==typeof n.name)throw new Error(r(e)+' set but does not contain "name" property string');for(const t of Object.keys(n)){const i=o(e,t),s=n[t];if(null!=s&&"boolean"!==typeof s&&"string"!==typeof s&&"number"!==typeof s)throw new Error(r(i)+" must be null, undefined, a boolean, a string, or a number.")}}return t},t.assertInputSourceMap=function(e,t){if(void 0!==t&&"boolean"!==typeof t&&("object"!==typeof t||!t))throw new Error(r(e)+" must be a boolean, object, or undefined");return t},t.assertString=function(e,t){if(void 0!==t&&"string"!==typeof t)throw new Error(r(e)+" must be a string, or undefined");return t},t.assertFunction=function(e,t){if(void 0!==t&&"function"!==typeof t)throw new Error(r(e)+" must be a function, or undefined");return t},t.assertBoolean=function(e,t){if(void 0!==t&&"boolean"!==typeof t)throw new Error(r(e)+" must be a boolean, or undefined");return t},t.assertObject=i,t.assertArray=s,t.assertIgnoreList=function(e,t){const n=s(e,t);n&&n.forEach((t,n)=>function(e,t){if("string"!==typeof t&&"function"!==typeof t&&!(t instanceof RegExp))throw new Error(r(e)+" must be an array of string/Function/RegExp values, or undefined");return t}(o(e,n),t));return n},t.assertConfigApplicableTest=function(e,t){if(void 0===t)return t;if(Array.isArray(t))t.forEach((t,n)=>{if(!a(t))throw new Error(r(o(e,n))+" must be a string/Function/RegExp.")});else if(!a(t))throw new Error(r(e)+" must be a string/Function/RegExp, or an array of those");return t},t.assertConfigFileSearch=function(e,t){if(void 0!==t&&"boolean"!==typeof t&&"string"!==typeof t)throw new Error(r(e)+" must be a undefined, a boolean, a string, got "+JSON.stringify(t));return t},t.assertBabelrcSearch=function(e,t){if(void 0===t||"boolean"===typeof t)return t;if(Array.isArray(t))t.forEach((t,n)=>{if(!a(t))throw new Error(r(o(e,n))+" must be a string/Function/RegExp.")});else if(!a(t))throw new Error(r(e)+" must be a undefined, a boolean, a string/Function/RegExp or an array of those, got "+JSON.stringify(t));return t},t.assertPluginList=function(e,t){const n=s(e,t);n&&n.forEach((t,n)=>function(e,t){if(Array.isArray(t)){if(0===t.length)throw new Error(r(e)+" must include an object");if(t.length>3)throw new Error(r(e)+" may only be a two-tuple or three-tuple");if(l(o(e,0),t[0]),t.length>1){const n=t[1];if(void 0!==n&&!1!==n&&("object"!==typeof n||Array.isArray(n)||null===n))throw new Error(r(o(e,1))+" must be an object, false, or undefined")}if(3===t.length){const n=t[2];if(void 0!==n&&"string"!==typeof n)throw new Error(r(o(e,2))+" must be a string, or undefined")}}else l(e,t);return t}(o(e,n),t));return n}},"./node_modules/@babel/core/lib/config/validation/options.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.validate=function(e,t){return c({type:"root",source:e},t)},t.checkNoUnwrappedItemOptionPairs=function(e,t,n,r){if(0===t)return;const o=e[t-1],i=e[t];o.file&&void 0===o.options&&"object"===typeof i.value&&(r.message+=`\n- Maybe you meant to use\n"${n}": [\n  ["${o.file.request}", ${JSON.stringify(i.value,void 0,2)}]\n]\nTo be a valid ${n}, its name and options should be wrapped in a pair of brackets`)};i(n("./node_modules/@babel/core/lib/config/plugin.js"));var r=i(n("./node_modules/@babel/core/lib/config/validation/removed.js")),o=n("./node_modules/@babel/core/lib/config/validation/option-assertions.js");function i(e){return e&&e.__esModule?e:{default:e}}const s={cwd:o.assertString,root:o.assertString,rootMode:o.assertRootMode,configFile:o.assertConfigFileSearch,caller:o.assertCallerMetadata,filename:o.assertString,filenameRelative:o.assertString,code:o.assertBoolean,ast:o.assertBoolean,cloneInputAst:o.assertBoolean,envName:o.assertString},a={babelrc:o.assertBoolean,babelrcRoots:o.assertBabelrcSearch},l={extends:o.assertString,ignore:o.assertIgnoreList,only:o.assertIgnoreList},u={inputSourceMap:o.assertInputSourceMap,presets:o.assertPluginList,plugins:o.assertPluginList,passPerPreset:o.assertBoolean,env:function(e,t){if("env"===e.parent.type)throw new Error((0,o.msg)(e)+" is not allowed inside of another .env block");const n=e.parent,r=(0,o.assertObject)(e,t);if(r)for(const i of Object.keys(r)){const t=(0,o.assertObject)((0,o.access)(e,i),r[i]);if(!t)continue;c({type:"env",name:i,parent:n},t)}return r},overrides:function(e,t){if("env"===e.parent.type)throw new Error((0,o.msg)(e)+" is not allowed inside an .env block");if("overrides"===e.parent.type)throw new Error((0,o.msg)(e)+" is not allowed inside an .overrides block");const n=e.parent,r=(0,o.assertArray)(e,t);if(r)for(const[i,s]of r.entries()){const t=(0,o.access)(e,i),r=(0,o.assertObject)(t,s);if(!r)throw new Error((0,o.msg)(t)+" must be an object");c({type:"overrides",index:i,parent:n},r)}return r},test:o.assertConfigApplicableTest,include:o.assertConfigApplicableTest,exclude:o.assertConfigApplicableTest,retainLines:o.assertBoolean,comments:o.assertBoolean,shouldPrintComment:o.assertFunction,compact:o.assertCompact,minified:o.assertBoolean,auxiliaryCommentBefore:o.assertString,auxiliaryCommentAfter:o.assertString,sourceType:o.assertSourceType,wrapPluginVisitorMethod:o.assertFunction,highlightCode:o.assertBoolean,sourceMaps:o.assertSourceMaps,sourceMap:o.assertSourceMaps,sourceFileName:o.assertString,sourceRoot:o.assertString,getModuleId:o.assertFunction,moduleRoot:o.assertString,moduleIds:o.assertBoolean,moduleId:o.assertString,parserOpts:o.assertObject,generatorOpts:o.assertObject};function c(e,t){const n=function e(t){return"root"===t.type?t.source:e(t.parent)}(e);return function(e){if(p(e,"sourceMap")&&p(e,"sourceMaps"))throw new Error(".sourceMap is an alias for .sourceMaps, cannot use both")}(t),Object.keys(t).forEach(r=>{const i={type:"option",name:r,parent:e};if("preset"===n&&l[r])throw new Error((0,o.msg)(i)+" is not allowed in preset options");if("arguments"!==n&&s[r])throw new Error((0,o.msg)(i)+" is only allowed in root programmatic options");if("arguments"!==n&&"configfile"!==n&&a[r]){if("babelrcfile"===n||"extendsfile"===n)throw new Error((0,o.msg)(i)+' is not allowed in .babelrc or "extends"ed files, only in root programmatic options, or babel.config.js/config file options');throw new Error((0,o.msg)(i)+" is only allowed in root programmatic options, or babel.config.js/config file options")}(u[r]||l[r]||a[r]||s[r]||d)(i,t[r])}),t}function d(e){const t=e.name;if(r.default[t]){const{message:n,version:i=5}=r.default[t];throw new Error(`Using removed Babel ${i} option: ${(0,o.msg)(e)} - ${n}`)}{const t=new Error(`Unknown option: ${(0,o.msg)(e)}. Check out https://babeljs.io/docs/en/babel-core/#options for more information about options.`);throw t.code="BABEL_UNKNOWN_OPTION",t}}function p(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},"./node_modules/@babel/core/lib/config/validation/plugins.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.validatePluginObject=function(e){const t={type:"root",source:"plugin"};return Object.keys(e).forEach(n=>{const r=o[n];if(!r){const e=new Error(`.${n} is not a valid Plugin property`);throw e.code="BABEL_UNKNOWN_PLUGIN_PROPERTY",e}r({type:"option",name:n,parent:t},e[n])}),e};var r=n("./node_modules/@babel/core/lib/config/validation/option-assertions.js");const o={name:r.assertString,manipulateOptions:r.assertFunction,pre:r.assertFunction,post:r.assertFunction,inherits:r.assertFunction,visitor:function(e,t){const n=(0,r.assertObject)(e,t);if(n&&(Object.keys(n).forEach(e=>function(e,t){if(t&&"object"===typeof t)Object.keys(t).forEach(t=>{if("enter"!==t&&"exit"!==t)throw new Error(`.visitor["${e}"] may only have .enter and/or .exit handlers.`)});else if("function"!==typeof t)throw new Error(`.visitor["${e}"] must be a function`);return t}(e,n[e])),n.enter||n.exit))throw new Error((0,r.msg)(e)+' cannot contain catch-all "enter" or "exit" handlers. Please target individual nodes.');return n},parserOverride:r.assertFunction,generatorOverride:r.assertFunction}},"./node_modules/@babel/core/lib/config/validation/removed.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={auxiliaryComment:{message:"Use `auxiliaryCommentBefore` or `auxiliaryCommentAfter`"},blacklist:{message:"Put the specific transforms you want in the `plugins` option"},breakConfig:{message:"This is not a necessary option in Babel 6"},experimental:{message:"Put the specific transforms you want in the `plugins` option"},externalHelpers:{message:"Use the `external-helpers` plugin instead. Check out http://babeljs.io/docs/plugins/external-helpers/"},extra:{message:""},jsxPragma:{message:"use the `pragma` option in the `react-jsx` plugin. Check out http://babeljs.io/docs/plugins/transform-react-jsx/"},loose:{message:"Specify the `loose` option for the relevant plugin you are using or use a preset that sets the option."},metadataUsedHelpers:{message:"Not required anymore as this is enabled by default"},modules:{message:"Use the corresponding module transform plugin in the `plugins` option. Check out http://babeljs.io/docs/plugins/#modules"},nonStandard:{message:"Use the `react-jsx` and `flow-strip-types` plugins to support JSX and Flow. Also check out the react preset http://babeljs.io/docs/plugins/preset-react/"},optional:{message:"Put the specific transforms you want in the `plugins` option"},sourceMapName:{message:"The `sourceMapName` option has been removed because it makes more sense for the tooling that calls Babel to assign `map.file` themselves."},stage:{message:"Check out the corresponding stage-x presets http://babeljs.io/docs/plugins/#presets"},whitelist:{message:"Put the specific transforms you want in the `plugins` option"},resolveModuleSource:{version:6,message:"Use `babel-plugin-module-resolver@3`'s 'resolvePath' options"},metadata:{version:6,message:"Generated plugin metadata is always included in the output result"},sourceMapTarget:{version:6,message:"The `sourceMapTarget` option has been removed because it makes more sense for the tooling that calls Babel to assign `map.file` themselves."}}},"./node_modules/@babel/core/lib/gensync-utils/async.js":function(e,t,n){"use strict";function r(){const e=(t=n("./node_modules/gensync/index.js"))&&t.__esModule?t:{default:t};var t;return r=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.maybeAsync=function(e,t){return(0,r().default)({sync(...n){const r=e.apply(this,n);if(c(r))throw new Error(t);return r},async(...t){return Promise.resolve(e.apply(this,t))}})},t.forwardAsync=function(e,t){const n=(0,r().default)(e);return a(e=>{const r=n[e];return t(r)})},t.isThenable=c,t.waitFor=t.onFirstPause=t.isAsync=void 0;const o=e=>e,i=(0,r().default)((function*(e){return yield*e})),s=(0,r().default)({sync:()=>!1,errback:e=>e(null,!0)});t.isAsync=s;const a=(0,r().default)({sync:e=>e("sync"),async:e=>e("async")});const l=(0,r().default)({name:"onFirstPause",arity:2,sync:function(e){return i.sync(e)},errback:function(e,t,n){let r=!1;i.errback(e,(e,t)=>{r=!0,n(e,t)}),r||t()}});t.onFirstPause=l;const u=(0,r().default)({sync:o,async:o});function c(e){return!!e&&("object"===typeof e||"function"===typeof e)&&!!e.then&&"function"===typeof e.then}t.waitFor=u},"./node_modules/@babel/core/lib/index.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Plugin=function(e){throw new Error(`The (${e}) Babel 5 plugin is being run with an unsupported Babel version.`)},Object.defineProperty(t,"File",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"buildExternalHelpers",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"resolvePlugin",{enumerable:!0,get:function(){return i.resolvePlugin}}),Object.defineProperty(t,"resolvePreset",{enumerable:!0,get:function(){return i.resolvePreset}}),Object.defineProperty(t,"version",{enumerable:!0,get:function(){return s.version}}),Object.defineProperty(t,"getEnv",{enumerable:!0,get:function(){return a.getEnv}}),Object.defineProperty(t,"tokTypes",{enumerable:!0,get:function(){return function(){const e=n("./node_modules/@babel/parser/lib/index.js");return function(){return e},e}().tokTypes}}),Object.defineProperty(t,"traverse",{enumerable:!0,get:function(){return function(){const e=g(n("./node_modules/@babel/traverse/lib/index.js"));return function(){return e},e}().default}}),Object.defineProperty(t,"template",{enumerable:!0,get:function(){return function(){const e=g(n("./node_modules/@babel/template/lib/index.js"));return function(){return e},e}().default}}),Object.defineProperty(t,"createConfigItem",{enumerable:!0,get:function(){return u.createConfigItem}}),Object.defineProperty(t,"loadPartialConfig",{enumerable:!0,get:function(){return c.loadPartialConfig}}),Object.defineProperty(t,"loadPartialConfigSync",{enumerable:!0,get:function(){return c.loadPartialConfigSync}}),Object.defineProperty(t,"loadPartialConfigAsync",{enumerable:!0,get:function(){return c.loadPartialConfigAsync}}),Object.defineProperty(t,"loadOptions",{enumerable:!0,get:function(){return c.loadOptions}}),Object.defineProperty(t,"loadOptionsSync",{enumerable:!0,get:function(){return c.loadOptionsSync}}),Object.defineProperty(t,"loadOptionsAsync",{enumerable:!0,get:function(){return c.loadOptionsAsync}}),Object.defineProperty(t,"transform",{enumerable:!0,get:function(){return d.transform}}),Object.defineProperty(t,"transformSync",{enumerable:!0,get:function(){return d.transformSync}}),Object.defineProperty(t,"transformAsync",{enumerable:!0,get:function(){return d.transformAsync}}),Object.defineProperty(t,"transformFile",{enumerable:!0,get:function(){return p.transformFile}}),Object.defineProperty(t,"transformFileSync",{enumerable:!0,get:function(){return p.transformFileSync}}),Object.defineProperty(t,"transformFileAsync",{enumerable:!0,get:function(){return p.transformFileAsync}}),Object.defineProperty(t,"transformFromAst",{enumerable:!0,get:function(){return f.transformFromAst}}),Object.defineProperty(t,"transformFromAstSync",{enumerable:!0,get:function(){return f.transformFromAstSync}}),Object.defineProperty(t,"transformFromAstAsync",{enumerable:!0,get:function(){return f.transformFromAstAsync}}),Object.defineProperty(t,"parse",{enumerable:!0,get:function(){return h.parse}}),Object.defineProperty(t,"parseSync",{enumerable:!0,get:function(){return h.parseSync}}),Object.defineProperty(t,"parseAsync",{enumerable:!0,get:function(){return h.parseAsync}}),t.types=t.OptionManager=t.DEFAULT_EXTENSIONS=void 0;var r=g(n("./node_modules/@babel/core/lib/transformation/file/file.js")),o=g(n("./node_modules/@babel/core/lib/tools/build-external-helpers.js")),i=n("./node_modules/@babel/core/lib/config/files/index-browser.js"),s=n("./node_modules/@babel/core/package.json"),a=n("./node_modules/@babel/core/lib/config/helpers/environment.js");function l(){const e=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=m();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("./node_modules/@babel/types/lib/index.js"));return l=function(){return e},e}Object.defineProperty(t,"types",{enumerable:!0,get:function(){return l()}});var u=n("./node_modules/@babel/core/lib/config/item.js"),c=n("./node_modules/@babel/core/lib/config/index.js"),d=n("./node_modules/@babel/core/lib/transform.js"),p=n("./node_modules/@babel/core/lib/transform-file-browser.js"),f=n("./node_modules/@babel/core/lib/transform-ast.js"),h=n("./node_modules/@babel/core/lib/parse.js");function m(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return m=function(){return e},e}function g(e){return e&&e.__esModule?e:{default:e}}const y=Object.freeze([".js",".jsx",".es6",".es",".mjs"]);t.DEFAULT_EXTENSIONS=y;t.OptionManager=class{init(e){return(0,c.loadOptions)(e)}}},"./node_modules/@babel/core/lib/parse.js":function(e,t,n){"use strict";function r(){const e=a(n("./node_modules/gensync/index.js"));return r=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.parseAsync=t.parseSync=t.parse=void 0;var o=a(n("./node_modules/@babel/core/lib/config/index.js")),i=a(n("./node_modules/@babel/core/lib/parser/index.js")),s=a(n("./node_modules/@babel/core/lib/transformation/normalize-opts.js"));function a(e){return e&&e.__esModule?e:{default:e}}const l=(0,r().default)((function*(e,t){const n=yield*(0,o.default)(t);return null===n?null:yield*(0,i.default)(n.passes,(0,s.default)(n),e)}));t.parse=function(e,t,n){if("function"===typeof t&&(n=t,t=void 0),void 0===n)return l.sync(e,t);l.errback(e,t,n)};const u=l.sync;t.parseSync=u;const c=l.async;t.parseAsync=c},"./node_modules/@babel/core/lib/parser/index.js":function(e,t,n){"use strict";function r(){const e=n("./node_modules/@babel/parser/lib/index.js");return r=function(){return e},e}function o(){const e=n("./node_modules/@babel/code-frame/lib/index.js");return o=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function*(e,{parserOpts:t,highlightCode:n=!0,filename:i="unknown"},a){try{const n=[];for(const o of e)for(const e of o){const{parserOverride:o}=e;if(o){const e=o(a,t,r().parse);void 0!==e&&n.push(e)}}if(0===n.length)return(0,r().parse)(a,t);if(1===n.length){if(yield*[],"function"===typeof n[0].then)throw new Error("You appear to be using an async parser plugin, which your current version of Babel does not support. If you're using a published plugin, you may need to upgrade your @babel/core version.");return n[0]}throw new Error("More than one plugin attempted to override parsing.")}catch(l){"BABEL_PARSER_SOURCETYPE_MODULE_REQUIRED"===l.code&&(l.message+="\nConsider renaming the file to '.mjs', or setting sourceType:module or sourceType:unambiguous in your Babel config for this file.");const{loc:e,missingPlugin:t}=l;if(e){const r=(0,o().codeFrameColumns)(a,{start:{line:e.line,column:e.column+1}},{highlightCode:n});l.message=t?i+": "+(0,s.default)(t[0],e,r):`${i}: ${l.message}\n\n`+r,l.code="BABEL_PARSE_ERROR"}throw l}};var i,s=(i=n("./node_modules/@babel/core/lib/parser/util/missing-plugin-helper.js"))&&i.__esModule?i:{default:i}},"./node_modules/@babel/core/lib/parser/util/missing-plugin-helper.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){let i=`Support for the experimental syntax '${e}' isn't currently enabled (${t.line}:${t.column+1}):\n\n`+n;const s=r[e];if(s){const{syntax:e,transform:t}=s;if(e){const n=o(e);if(t){const e=o(t),r=t.name.startsWith("@babel/plugin")?"plugins":"presets";i+=`\n\nAdd ${e} to the '${r}' section of your Babel config to enable transformation.\nIf you want to leave it as-is, add ${n} to the 'plugins' section to enable parsing.`}else i+=`\n\nAdd ${n} to the 'plugins' section of your Babel config to enable parsing.`}}return i};const r={classProperties:{syntax:{name:"@babel/plugin-syntax-class-properties",url:"https://git.io/vb4yQ"},transform:{name:"@babel/plugin-proposal-class-properties",url:"https://git.io/vb4SL"}},classPrivateProperties:{syntax:{name:"@babel/plugin-syntax-class-properties",url:"https://git.io/vb4yQ"},transform:{name:"@babel/plugin-proposal-class-properties",url:"https://git.io/vb4SL"}},classPrivateMethods:{syntax:{name:"@babel/plugin-syntax-class-properties",url:"https://git.io/vb4yQ"},transform:{name:"@babel/plugin-proposal-private-methods",url:"https://git.io/JvpRG"}},classStaticBlock:{syntax:{name:"@babel/plugin-syntax-class-static-block",url:"https://git.io/JTLB6"},transform:{name:"@babel/plugin-proposal-class-static-block",url:"https://git.io/JTLBP"}},decimal:{syntax:{name:"@babel/plugin-syntax-decimal",url:"https://git.io/JfKOH"}},decorators:{syntax:{name:"@babel/plugin-syntax-decorators",url:"https://git.io/vb4y9"},transform:{name:"@babel/plugin-proposal-decorators",url:"https://git.io/vb4ST"}},doExpressions:{syntax:{name:"@babel/plugin-syntax-do-expressions",url:"https://git.io/vb4yh"},transform:{name:"@babel/plugin-proposal-do-expressions",url:"https://git.io/vb4S3"}},dynamicImport:{syntax:{name:"@babel/plugin-syntax-dynamic-import",url:"https://git.io/vb4Sv"}},exportDefaultFrom:{syntax:{name:"@babel/plugin-syntax-export-default-from",url:"https://git.io/vb4SO"},transform:{name:"@babel/plugin-proposal-export-default-from",url:"https://git.io/vb4yH"}},exportNamespaceFrom:{syntax:{name:"@babel/plugin-syntax-export-namespace-from",url:"https://git.io/vb4Sf"},transform:{name:"@babel/plugin-proposal-export-namespace-from",url:"https://git.io/vb4SG"}},flow:{syntax:{name:"@babel/plugin-syntax-flow",url:"https://git.io/vb4yb"},transform:{name:"@babel/preset-flow",url:"https://git.io/JfeDn"}},functionBind:{syntax:{name:"@babel/plugin-syntax-function-bind",url:"https://git.io/vb4y7"},transform:{name:"@babel/plugin-proposal-function-bind",url:"https://git.io/vb4St"}},functionSent:{syntax:{name:"@babel/plugin-syntax-function-sent",url:"https://git.io/vb4yN"},transform:{name:"@babel/plugin-proposal-function-sent",url:"https://git.io/vb4SZ"}},importMeta:{syntax:{name:"@babel/plugin-syntax-import-meta",url:"https://git.io/vbKK6"}},jsx:{syntax:{name:"@babel/plugin-syntax-jsx",url:"https://git.io/vb4yA"},transform:{name:"@babel/preset-react",url:"https://git.io/JfeDR"}},importAssertions:{syntax:{name:"@babel/plugin-syntax-import-assertions",url:"https://git.io/JUbkv"}},moduleStringNames:{syntax:{name:"@babel/plugin-syntax-module-string-names",url:"https://git.io/JTL8G"}},numericSeparator:{syntax:{name:"@babel/plugin-syntax-numeric-separator",url:"https://git.io/vb4Sq"},transform:{name:"@babel/plugin-proposal-numeric-separator",url:"https://git.io/vb4yS"}},optionalChaining:{syntax:{name:"@babel/plugin-syntax-optional-chaining",url:"https://git.io/vb4Sc"},transform:{name:"@babel/plugin-proposal-optional-chaining",url:"https://git.io/vb4Sk"}},pipelineOperator:{syntax:{name:"@babel/plugin-syntax-pipeline-operator",url:"https://git.io/vb4yj"},transform:{name:"@babel/plugin-proposal-pipeline-operator",url:"https://git.io/vb4SU"}},privateIn:{syntax:{name:"@babel/plugin-syntax-private-property-in-object",url:"https://git.io/JfK3q"},transform:{name:"@babel/plugin-proposal-private-property-in-object",url:"https://git.io/JfK3O"}},recordAndTuple:{syntax:{name:"@babel/plugin-syntax-record-and-tuple",url:"https://git.io/JvKp3"}},throwExpressions:{syntax:{name:"@babel/plugin-syntax-throw-expressions",url:"https://git.io/vb4SJ"},transform:{name:"@babel/plugin-proposal-throw-expressions",url:"https://git.io/vb4yF"}},typescript:{syntax:{name:"@babel/plugin-syntax-typescript",url:"https://git.io/vb4SC"},transform:{name:"@babel/preset-typescript",url:"https://git.io/JfeDz"}},asyncGenerators:{syntax:{name:"@babel/plugin-syntax-async-generators",url:"https://git.io/vb4SY"},transform:{name:"@babel/plugin-proposal-async-generator-functions",url:"https://git.io/vb4yp"}},logicalAssignment:{syntax:{name:"@babel/plugin-syntax-logical-assignment-operators",url:"https://git.io/vAlBp"},transform:{name:"@babel/plugin-proposal-logical-assignment-operators",url:"https://git.io/vAlRe"}},nullishCoalescingOperator:{syntax:{name:"@babel/plugin-syntax-nullish-coalescing-operator",url:"https://git.io/vb4yx"},transform:{name:"@babel/plugin-proposal-nullish-coalescing-operator",url:"https://git.io/vb4Se"}},objectRestSpread:{syntax:{name:"@babel/plugin-syntax-object-rest-spread",url:"https://git.io/vb4y5"},transform:{name:"@babel/plugin-proposal-object-rest-spread",url:"https://git.io/vb4Ss"}},optionalCatchBinding:{syntax:{name:"@babel/plugin-syntax-optional-catch-binding",url:"https://git.io/vb4Sn"},transform:{name:"@babel/plugin-proposal-optional-catch-binding",url:"https://git.io/vb4SI"}}};r.privateIn.syntax=r.privateIn.transform;const o=({name:e,url:t})=>`${e} (${t})`},"./node_modules/@babel/core/lib/tools/build-external-helpers.js":function(e,t,n){"use strict";function r(){const e=c(n("./node_modules/@babel/helpers/lib/index.js"));return r=function(){return e},e}function o(){const e=l(n("./node_modules/@babel/generator/lib/index.js"));return o=function(){return e},e}function i(){const e=l(n("./node_modules/@babel/template/lib/index.js"));return i=function(){return e},e}function s(){const e=c(n("./node_modules/@babel/types/lib/index.js"));return s=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t="global"){let n;const r={global:d,module:p,umd:f,var:h}[t];if(!r)throw new Error("Unsupported output type "+t);n=r(e);return(0,o().default)(n).code};var a=l(n("./node_modules/@babel/core/lib/transformation/file/file.js"));function l(e){return e&&e.__esModule?e:{default:e}}function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function c(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}return n.default=e,t&&t.set(e,n),n}function d(e){const t=s().identifier("babelHelpers"),n=[],r=s().functionExpression(null,[s().identifier("global")],s().blockStatement(n)),o=s().program([s().expressionStatement(s().callExpression(r,[s().conditionalExpression(s().binaryExpression("===",s().unaryExpression("typeof",s().identifier("global")),s().stringLiteral("undefined")),s().identifier("self"),s().identifier("global"))]))]);return n.push(s().variableDeclaration("var",[s().variableDeclarator(t,s().assignmentExpression("=",s().memberExpression(s().identifier("global"),t),s().objectExpression([])))])),m(n,t,e),o}function p(e){const t=[],n=m(t,null,e);return t.unshift(s().exportNamedDeclaration(null,Object.keys(n).map(e=>s().exportSpecifier(s().cloneNode(n[e]),s().identifier(e))))),s().program(t,[],"module")}function f(e){const t=s().identifier("babelHelpers"),n=[];return n.push(s().variableDeclaration("var",[s().variableDeclarator(t,s().identifier("global"))])),m(n,t,e),s().program([(r={FACTORY_PARAMETERS:s().identifier("global"),BROWSER_ARGUMENTS:s().assignmentExpression("=",s().memberExpression(s().identifier("root"),t),s().objectExpression([])),COMMON_ARGUMENTS:s().identifier("exports"),AMD_ARGUMENTS:s().arrayExpression([s().stringLiteral("exports")]),FACTORY_BODY:n,UMD_ROOT:s().identifier("this")},i().default`
    (function (root, factory) {
      if (typeof define === "function" && define.amd) {
        define(AMD_ARGUMENTS, factory);
      } else if (typeof exports === "object") {
        factory(COMMON_ARGUMENTS);
      } else {
        factory(BROWSER_ARGUMENTS);
      }
    })(UMD_ROOT, function (FACTORY_PARAMETERS) {
      FACTORY_BODY
    });
  `(r))]);var r}function h(e){const t=s().identifier("babelHelpers"),n=[];n.push(s().variableDeclaration("var",[s().variableDeclarator(t,s().objectExpression([]))]));const r=s().program(n);return m(n,t,e),n.push(s().expressionStatement(t)),r}function m(e,t,n){const o=e=>t?s().memberExpression(t,s().identifier(e)):s().identifier("_"+e),i={};return r().list.forEach((function(t){if(n&&n.indexOf(t)<0)return;const s=i[t]=o(t);r().ensure(t,a.default);const{nodes:l}=r().get(t,o,s);e.push(...l)})),i}},"./node_modules/@babel/core/lib/transform-ast.js":function(e,t,n){"use strict";function r(){const e=s(n("./node_modules/gensync/index.js"));return r=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.transformFromAstAsync=t.transformFromAstSync=t.transformFromAst=void 0;var o=s(n("./node_modules/@babel/core/lib/config/index.js")),i=n("./node_modules/@babel/core/lib/transformation/index.js");function s(e){return e&&e.__esModule?e:{default:e}}const a=(0,r().default)((function*(e,t,n){const r=yield*(0,o.default)(n);if(null===r)return null;if(!e)throw new Error("No AST given");return yield*(0,i.run)(r,t,e)}));t.transformFromAst=function(e,t,n,r){if("function"===typeof n&&(r=n,n=void 0),void 0===r)return a.sync(e,t,n);a.errback(e,t,n,r)};const l=a.sync;t.transformFromAstSync=l;const u=a.async;t.transformFromAstAsync=u},"./node_modules/@babel/core/lib/transform-file-browser.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.transformFileSync=function(){throw new Error("Transforming files is not supported in browsers")},t.transformFileAsync=function(){return Promise.reject(new Error("Transforming files is not supported in browsers"))},t.transformFile=void 0;t.transformFile=function(e,t,n){"function"===typeof t&&(n=t),n(new Error("Transforming files is not supported in browsers"),null)}},"./node_modules/@babel/core/lib/transform.js":function(e,t,n){"use strict";function r(){const e=s(n("./node_modules/gensync/index.js"));return r=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.transformAsync=t.transformSync=t.transform=void 0;var o=s(n("./node_modules/@babel/core/lib/config/index.js")),i=n("./node_modules/@babel/core/lib/transformation/index.js");function s(e){return e&&e.__esModule?e:{default:e}}const a=(0,r().default)((function*(e,t){const n=yield*(0,o.default)(t);return null===n?null:yield*(0,i.run)(n,e)}));t.transform=function(e,t,n){if("function"===typeof t&&(n=t,t=void 0),void 0===n)return a.sync(e,t);a.errback(e,t,n)};const l=a.sync;t.transformSync=l;const u=a.async;t.transformAsync=u},"./node_modules/@babel/core/lib/transformation/block-hoist-plugin.js":function(e,t,n){"use strict";function r(){const e=i(n("./node_modules/lodash/sortBy.js"));return r=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){if(!s){const e=o.default.sync({babelrc:!1,configFile:!1,plugins:[a]});if(s=e?e.passes[0][0]:void 0,!s)throw new Error("Assertion failure")}return s};var o=i(n("./node_modules/@babel/core/lib/config/index.js"));function i(e){return e&&e.__esModule?e:{default:e}}let s;const a={name:"internal.blockHoist",visitor:{Block:{exit({node:e}){let t=!1;for(let n=0;n<e.body.length;n++){const r=e.body[n];if(null!=(null==r?void 0:r._blockHoist)){t=!0;break}}t&&(e.body=(0,r().default)(e.body,(function(e){let t=null==e?void 0:e._blockHoist;return null==t&&(t=1),!0===t&&(t=2),-1*t})))}}}}},"./node_modules/@babel/core/lib/transformation/file/file.js":function(e,t,n){"use strict";function r(){const e=c(n("./node_modules/@babel/helpers/lib/index.js"));return r=function(){return e},e}function o(){const e=c(n("./node_modules/@babel/traverse/lib/index.js"));return o=function(){return e},e}function i(){const e=n("./node_modules/@babel/code-frame/lib/index.js");return i=function(){return e},e}function s(){const e=c(n("./node_modules/@babel/types/lib/index.js"));return s=function(){return e},e}function a(){const e=n("./node_modules/@babel/helper-module-transforms/lib/index.js");return a=function(){return e},e}function l(){const e=(t=n("./node_modules/semver/semver.js"))&&t.__esModule?t:{default:t};var t;return l=function(){return e},e}function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function c(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}return n.default=e,t&&t.set(e,n),n}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;const d={enter(e,t){const n=e.node.loc;n&&(t.loc=n,e.stop())}};class p{constructor(e,{code:t,ast:n,inputMap:r}){this._map=new Map,this.opts=void 0,this.declarations={},this.path=null,this.ast={},this.scope=void 0,this.metadata={},this.code="",this.inputMap=null,this.hub={file:this,getCode:()=>this.code,getScope:()=>this.scope,addHelper:this.addHelper.bind(this),buildError:this.buildCodeFrameError.bind(this)},this.opts=e,this.code=t,this.ast=n,this.inputMap=r,this.path=o().NodePath.get({hub:this.hub,parentPath:null,parent:this.ast,container:this.ast,key:"program"}).setContext(),this.scope=this.path.scope}get shebang(){const{interpreter:e}=this.path.node;return e?e.value:""}set shebang(e){e?this.path.get("interpreter").replaceWith(s().interpreterDirective(e)):this.path.get("interpreter").remove()}set(e,t){if("helpersNamespace"===e)throw new Error("Babel 7.0.0-beta.56 has dropped support for the 'helpersNamespace' utility.If you are using @babel/plugin-external-helpers you will need to use a newer version than the one you currently have installed. If you have your own implementation, you'll want to explore using 'helperGenerator' alongside 'file.availableHelper()'.");this._map.set(e,t)}get(e){return this._map.get(e)}has(e){return this._map.has(e)}getModuleName(){return(0,a().getModuleName)(this.opts,this.opts)}addImport(){throw new Error("This API has been removed. If you're looking for this functionality in Babel 7, you should import the '@babel/helper-module-imports' module and use the functions exposed  from that module, such as 'addNamed' or 'addDefault'.")}availableHelper(e,t){let n;try{n=r().minVersion(e)}catch(o){if("BABEL_HELPER_UNKNOWN"!==o.code)throw o;return!1}return"string"!==typeof t||(l().default.valid(t)&&(t="^"+t),!l().default.intersects("<"+n,t)&&!l().default.intersects(">=8.0.0",t))}addHelper(e){const t=this.declarations[e];if(t)return s().cloneNode(t);const n=this.get("helperGenerator");if(n){const t=n(e);if(t)return t}r().ensure(e,p);const o=this.declarations[e]=this.scope.generateUidIdentifier(e),i={};for(const s of r().getDependencies(e))i[s]=this.addHelper(s);const{nodes:a,globals:l}=r().get(e,e=>i[e],o,Object.keys(this.scope.getAllBindings()));return l.forEach(e=>{this.path.scope.hasBinding(e,!0)&&this.path.scope.rename(e)}),a.forEach(e=>{e._compact=!0}),this.path.unshiftContainer("body",a),this.path.get("body").forEach(e=>{-1!==a.indexOf(e.node)&&e.isVariableDeclaration()&&this.scope.registerDeclaration(e)}),o}addTemplateObject(){throw new Error("This function has been moved into the template literal transform itself.")}buildCodeFrameError(e,t,n=SyntaxError){let r=e&&(e.loc||e._loc);if(!r&&e){const n={loc:null};(0,o().default)(e,d,this.scope,n),r=n.loc;let i="This is an error on an internal node. Probably an internal error.";r&&(i+=" Location has been estimated."),t+=` (${i})`}if(r){const{highlightCode:e=!0}=this.opts;t+="\n"+(0,i().codeFrameColumns)(this.code,{start:{line:r.start.line,column:r.start.column+1},end:r.end&&r.start.line===r.end.line?{line:r.end.line,column:r.end.column+1}:void 0},{highlightCode:e})}return new n(t)}}t.default=p},"./node_modules/@babel/core/lib/transformation/file/generate.js":function(e,t,n){"use strict";function r(){const e=s(n("./node_modules/convert-source-map/index.js"));return r=function(){return e},e}function o(){const e=s(n("./node_modules/@babel/generator/lib/index.js"));return o=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{opts:n,ast:s,code:a,inputMap:l}=t,u=[];for(const r of e)for(const e of r){const{generatorOverride:t}=e;if(t){const e=t(s,n.generatorOpts,a,o().default);void 0!==e&&u.push(e)}}let c;if(0===u.length)c=(0,o().default)(s,n.generatorOpts,a);else{if(1!==u.length)throw new Error("More than one plugin attempted to override codegen.");if(c=u[0],"function"===typeof c.then)throw new Error("You appear to be using an async codegen plugin, which your current version of Babel does not support. If you're using a published plugin, you may need to upgrade your @babel/core version.")}let{code:d,map:p}=c;p&&l&&(p=(0,i.default)(l.toObject(),p));"inline"!==n.sourceMaps&&"both"!==n.sourceMaps||(d+="\n"+r().default.fromObject(p).toComment());"inline"===n.sourceMaps&&(p=null);return{outputCode:d,outputMap:p}};var i=s(n("./node_modules/@babel/core/lib/transformation/file/merge-map.js"));function s(e){return e&&e.__esModule?e:{default:e}}},"./node_modules/@babel/core/lib/transformation/file/merge-map.js":function(e,t,n){"use strict";function r(){const e=(t=n("./node_modules/@babel/core/node_modules/source-map/source-map.js"))&&t.__esModule?t:{default:t};var t;return r=function(){return e},e}function o(e){return`${e.line}/${e.columnStart}`}function i(e){const t=new(r().default.SourceMapConsumer)(Object.assign({},e,{sourceRoot:null})),n=new Map,o=new Map;let i=null;return t.computeColumnSpans(),t.eachMapping(e=>{if(null===e.originalLine)return;let r=n.get(e.source);r||(r={path:e.source,content:t.sourceContentFor(e.source,!0)},n.set(e.source,r));let s=o.get(r);s||(s={source:r,mappings:[]},o.set(r,s));const a={line:e.originalLine,columnStart:e.originalColumn,columnEnd:1/0,name:e.name};i&&i.source===r&&i.mapping.line===e.originalLine&&(i.mapping.columnEnd=e.originalColumn),i={source:r,mapping:a},s.mappings.push({original:a,generated:t.allGeneratedPositionsFor({source:e.source,line:e.originalLine,column:e.originalColumn}).map(e=>({line:e.line,columnStart:e.column,columnEnd:e.lastColumn+1}))})},null,r().default.SourceMapConsumer.ORIGINAL_ORDER),{file:e.file,sourceRoot:e.sourceRoot,sources:Array.from(o.values())}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const n=i(e),s=i(t),a=new(r().default.SourceMapGenerator);for(const{source:r}of n.sources)"string"===typeof r.content&&a.setSourceContent(r.path,r.content);if(1===s.sources.length){const e=s.sources[0],t=new Map;!function(e,t){for(const{source:n,mappings:r}of e.sources)for(const{original:e,generated:o}of r)for(const r of o)t(r,e,n)}(n,(n,r,i)=>{!function(e,t,n){const r=function({mappings:e},{line:t,columnStart:n,columnEnd:r}){return function(e,t){const n=function(e,t){let n=0,r=e.length;for(;n<r;){const o=Math.floor((n+r)/2),i=e[o],s=t(i);if(0===s){n=o;break}s>=0?r=o:n=o+1}let o=n;if(o<e.length){for(;o>=0&&t(e[o])>=0;)o--;return o+1}return o}(e,t),r=[];for(let o=n;o<e.length&&0===t(e[o]);o++)r.push(e[o]);return r}(e,({original:e})=>t>e.line?-1:t<e.line?1:n>=e.columnEnd?-1:r<=e.columnStart?1:0)}(e,t);for(const{generated:o}of r)for(const e of o)n(e)}(e,n,e=>{const n=o(e);t.has(n)||(t.set(n,e),a.addMapping({source:i.path,original:{line:r.line,column:r.columnStart},generated:{line:e.line,column:e.columnStart},name:r.name}))})});for(const n of t.values()){if(n.columnEnd===1/0)continue;const e={line:n.line,columnStart:n.columnEnd},r=o(e);t.has(r)||a.addMapping({generated:{line:e.line,column:e.columnStart}})}}const l=a.toJSON();"string"===typeof n.sourceRoot&&(l.sourceRoot=n.sourceRoot);return l}},"./node_modules/@babel/core/lib/transformation/index.js":function(e,t,n){"use strict";function r(){const e=u(n("./node_modules/@babel/traverse/lib/index.js"));return r=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.run=function*(e,t,n){const u=yield*(0,a.default)(e.passes,(0,s.default)(e),t,n),d=u.opts;try{yield*function*(e,t){for(const n of t){const t=[],s=[],a=[];for(const r of n.concat([(0,i.default)()])){const n=new o.default(e,r.key,r.options);t.push([r,n]),s.push(n),a.push(r.visitor)}for(const[n,r]of t){const t=n.pre;if(t){const n=t.call(r,e);if(yield*[],c(n))throw new Error("You appear to be using an plugin with an async .pre, which your current version of Babel does not support. If you're using a published plugin, you may need to upgrade your @babel/core version.")}}const l=r().default.visitors.merge(a,s,e.opts.wrapPluginVisitorMethod);(0,r().default)(e.ast,l,e.scope);for(const[n,r]of t){const t=n.post;if(t){const n=t.call(r,e);if(yield*[],c(n))throw new Error("You appear to be using an plugin with an async .post, which your current version of Babel does not support. If you're using a published plugin, you may need to upgrade your @babel/core version.")}}}}(u,e.passes)}catch(g){var p;throw g.message=`${null!=(p=d.filename)?p:"unknown"}: ${g.message}`,g.code||(g.code="BABEL_TRANSFORM_ERROR"),g}let f,h;try{!1!==d.code&&({outputCode:f,outputMap:h}=(0,l.default)(e.passes,u))}catch(g){var m;throw g.message=`${null!=(m=d.filename)?m:"unknown"}: ${g.message}`,g.code||(g.code="BABEL_GENERATE_ERROR"),g}return{metadata:u.metadata,options:d,ast:!0===d.ast?u.ast:null,code:void 0===f?null:f,map:void 0===h?null:h,sourceType:u.ast.program.sourceType}};var o=u(n("./node_modules/@babel/core/lib/transformation/plugin-pass.js")),i=u(n("./node_modules/@babel/core/lib/transformation/block-hoist-plugin.js")),s=u(n("./node_modules/@babel/core/lib/transformation/normalize-opts.js")),a=u(n("./node_modules/@babel/core/lib/transformation/normalize-file.js")),l=u(n("./node_modules/@babel/core/lib/transformation/file/generate.js"));function u(e){return e&&e.__esModule?e:{default:e}}function c(e){return!!e&&("object"===typeof e||"function"===typeof e)&&!!e.then&&"function"===typeof e.then}},"./node_modules/@babel/core/lib/transformation/normalize-file.js":function(e,t,n){"use strict";function r(){const e=p(n("./node_modules/node-libs-browser/mock/empty.js"));return r=function(){return e},e}function o(){const e=p(n("./node_modules/path-browserify/index.js"));return o=function(){return e},e}function i(){const e=p(n("./node_modules/@babel/core/node_modules/debug/src/browser.js"));return i=function(){return e},e}function s(){const e=p(n("./node_modules/lodash/cloneDeep.js"));return s=function(){return e},e}function a(){const e=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=d();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("./node_modules/@babel/types/lib/index.js"));return a=function(){return e},e}function l(){const e=p(n("./node_modules/convert-source-map/index.js"));return l=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function*(e,t,n,i){if(n=""+(n||""),i){if("Program"===i.type)i=a().file(i,[],[]);else if("File"!==i.type)throw new Error("AST root must be a Program or File node");const{cloneInputAst:e}=t;e&&(i=(0,s().default)(i))}else i=yield*(0,c.default)(e,t,n);let d=null;if(!1!==t.inputSourceMap){if("object"===typeof t.inputSourceMap&&(d=l().default.fromObject(t.inputSourceMap)),!d){const e=y(h,i);if(e)try{d=l().default.fromComment(e)}catch(p){f("discarding unknown inline input sourcemap",p)}}if(!d){const e=y(m,i);if("string"===typeof t.filename&&e)try{const n=m.exec(e),i=r().default.readFileSync(o().default.resolve(o().default.dirname(t.filename),n[1]));i.length>1e6?f("skip merging input map > 1 MB"):d=l().default.fromJSON(i)}catch(p){f("discarding unknown file input sourcemap",p)}else e&&f("discarding un-loadable file input sourcemap")}}return new u.default(t,{code:n,ast:i,inputMap:d})};var u=p(n("./node_modules/@babel/core/lib/transformation/file/file.js")),c=p(n("./node_modules/@babel/core/lib/parser/index.js"));function d(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return d=function(){return e},e}function p(e){return e&&e.__esModule?e:{default:e}}const f=(0,i().default)("babel:transform:file");const h=/^[@#]\s+sourceMappingURL=data:(?:application|text)\/json;(?:charset[:=]\S+?;)?base64,(?:.*)$/,m=/^[@#][ \t]+sourceMappingURL=([^\s'"`]+)[ \t]*$/;function g(e,t,n){return t&&(t=t.filter(({value:t})=>!e.test(t)||(n=t,!1))),[t,n]}function y(e,t){let n=null;return a().traverseFast(t,t=>{[t.leadingComments,n]=g(e,t.leadingComments,n),[t.innerComments,n]=g(e,t.innerComments,n),[t.trailingComments,n]=g(e,t.trailingComments,n)}),n}},"./node_modules/@babel/core/lib/transformation/normalize-opts.js":function(e,t,n){"use strict";function r(){const e=(t=n("./node_modules/path-browserify/index.js"))&&t.__esModule?t:{default:t};var t;return r=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){const{filename:t,cwd:n,filenameRelative:o=("string"===typeof t?r().default.relative(n,t):"unknown"),sourceType:i="module",inputSourceMap:s,sourceMaps:a=!!s,moduleRoot:l,sourceRoot:u=l,sourceFileName:c=r().default.basename(o),comments:d=!0,compact:p="auto"}=e.options,f=e.options,h=Object.assign({},f,{parserOpts:Object.assign({sourceType:".mjs"===r().default.extname(o)?"module":i,sourceFileName:t,plugins:[]},f.parserOpts),generatorOpts:Object.assign({filename:t,auxiliaryCommentBefore:f.auxiliaryCommentBefore,auxiliaryCommentAfter:f.auxiliaryCommentAfter,retainLines:f.retainLines,comments:d,shouldPrintComment:f.shouldPrintComment,compact:p,minified:f.minified,sourceMaps:a,sourceRoot:u,sourceFileName:c},f.generatorOpts)});for(const r of e.passes)for(const e of r)e.manipulateOptions&&e.manipulateOptions(h,h.parserOpts);return h}},"./node_modules/@babel/core/lib/transformation/plugin-pass.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=class{constructor(e,t,n){this._map=new Map,this.key=void 0,this.file=void 0,this.opts=void 0,this.cwd=void 0,this.filename=void 0,this.key=t,this.file=e,this.opts=n||{},this.cwd=e.opts.cwd,this.filename=e.opts.filename}set(e,t){this._map.set(e,t)}get(e){return this._map.get(e)}availableHelper(e,t){return this.file.availableHelper(e,t)}addHelper(e){return this.file.addHelper(e)}addImport(){return this.file.addImport()}getModuleName(){return this.file.getModuleName()}buildCodeFrameError(e,t,n){return this.file.buildCodeFrameError(e,t,n)}}},"./node_modules/@babel/core/node_modules/debug/src/browser.js":function(e,t,n){(function(r){t.formatArgs=function(t){if(t[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+t[0]+(this.useColors?"%c ":" ")+"+"+e.exports.humanize(this.diff),!this.useColors)return;const n="color: "+this.color;t.splice(1,0,n,"color: inherit");let r=0,o=0;t[0].replace(/%[a-zA-Z%]/g,e=>{"%%"!==e&&(r++,"%c"===e&&(o=r))}),t.splice(o,0,n)},t.save=function(e){try{e?t.storage.setItem("debug",e):t.storage.removeItem("debug")}catch(n){}},t.load=function(){let e;try{e=t.storage.getItem("debug")}catch(n){}!e&&"undefined"!==typeof r&&"env"in r&&(e=Object({NODE_ENV:"production",PUBLIC_URL:"/miniapp-docs/0.0.5/",DOCZ_BASE:"/miniapp-docs/0.0.5/",npm_package_devDependencies__qunhe_baozheng_docz_theme:"^0.0.105"}).DEBUG);return e},t.useColors=function(){if("undefined"!==typeof window&&window.process&&("renderer"===window.process.type||window.process.__nwjs))return!0;if("undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;return"undefined"!==typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!==typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage=function(){try{return localStorage}catch(e){}}(),t.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],t.log=console.debug||console.log||(()=>{}),e.exports=n("./node_modules/@babel/core/node_modules/debug/src/common.js")(t);const{formatters:o}=e.exports;o.j=function(e){try{return JSON.stringify(e)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}}}).call(this,n("./node_modules/process/browser.js"))},"./node_modules/@babel/core/node_modules/debug/src/common.js":function(e,t,n){e.exports=function(e){function t(e){let n;function i(...e){if(!i.enabled)return;const r=i,o=Number(new Date),s=o-(n||o);r.diff=s,r.prev=n,r.curr=o,n=o,e[0]=t.coerce(e[0]),"string"!==typeof e[0]&&e.unshift("%O");let a=0;e[0]=e[0].replace(/%([a-zA-Z%])/g,(n,o)=>{if("%%"===n)return n;a++;const i=t.formatters[o];if("function"===typeof i){const t=e[a];n=i.call(r,t),e.splice(a,1),a--}return n}),t.formatArgs.call(r,e);(r.log||t.log).apply(r,e)}return i.namespace=e,i.enabled=t.enabled(e),i.useColors=t.useColors(),i.color=t.selectColor(e),i.destroy=r,i.extend=o,"function"===typeof t.init&&t.init(i),t.instances.push(i),i}function r(){const e=t.instances.indexOf(this);return-1!==e&&(t.instances.splice(e,1),!0)}function o(e,n){const r=t(this.namespace+("undefined"===typeof n?":":n)+e);return r.log=this.log,r}function i(e){return e.toString().substring(2,e.toString().length-2).replace(/\.\*\?$/,"*")}return t.debug=t,t.default=t,t.coerce=function(e){if(e instanceof Error)return e.stack||e.message;return e},t.disable=function(){const e=[...t.names.map(i),...t.skips.map(i).map(e=>"-"+e)].join(",");return t.enable(""),e},t.enable=function(e){let n;t.save(e),t.names=[],t.skips=[];const r=("string"===typeof e?e:"").split(/[\s,]+/),o=r.length;for(n=0;n<o;n++)r[n]&&("-"===(e=r[n].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")));for(n=0;n<t.instances.length;n++){const e=t.instances[n];e.enabled=t.enabled(e.namespace)}},t.enabled=function(e){if("*"===e[e.length-1])return!0;let n,r;for(n=0,r=t.skips.length;n<r;n++)if(t.skips[n].test(e))return!1;for(n=0,r=t.names.length;n<r;n++)if(t.names[n].test(e))return!0;return!1},t.humanize=n("./node_modules/ms/index.js"),Object.keys(e).forEach(n=>{t[n]=e[n]}),t.instances=[],t.names=[],t.skips=[],t.formatters={},t.selectColor=function(e){let n=0;for(let t=0;t<e.length;t++)n=(n<<5)-n+e.charCodeAt(t),n|=0;return t.colors[Math.abs(n)%t.colors.length]},t.enable(t.load()),t}},"./node_modules/@babel/core/node_modules/source-map/lib/array-set.js":function(e,t,n){var r=n("./node_modules/@babel/core/node_modules/source-map/lib/util.js"),o=Object.prototype.hasOwnProperty,i="undefined"!==typeof Map;function s(){this._array=[],this._set=i?new Map:Object.create(null)}s.fromArray=function(e,t){for(var n=new s,r=0,o=e.length;r<o;r++)n.add(e[r],t);return n},s.prototype.size=function(){return i?this._set.size:Object.getOwnPropertyNames(this._set).length},s.prototype.add=function(e,t){var n=i?e:r.toSetString(e),s=i?this.has(e):o.call(this._set,n),a=this._array.length;s&&!t||this._array.push(e),s||(i?this._set.set(e,a):this._set[n]=a)},s.prototype.has=function(e){if(i)return this._set.has(e);var t=r.toSetString(e);return o.call(this._set,t)},s.prototype.indexOf=function(e){if(i){var t=this._set.get(e);if(t>=0)return t}else{var n=r.toSetString(e);if(o.call(this._set,n))return this._set[n]}throw new Error('"'+e+'" is not in the set.')},s.prototype.at=function(e){if(e>=0&&e<this._array.length)return this._array[e];throw new Error("No element indexed by "+e)},s.prototype.toArray=function(){return this._array.slice()},t.ArraySet=s},"./node_modules/@babel/core/node_modules/source-map/lib/base64-vlq.js":function(e,t,n){var r=n("./node_modules/@babel/core/node_modules/source-map/lib/base64.js");t.encode=function(e){var t,n="",o=function(e){return e<0?1+(-e<<1):0+(e<<1)}(e);do{t=31&o,(o>>>=5)>0&&(t|=32),n+=r.encode(t)}while(o>0);return n},t.decode=function(e,t,n){var o,i,s,a,l=e.length,u=0,c=0;do{if(t>=l)throw new Error("Expected more digits in base 64 VLQ value.");if(-1===(i=r.decode(e.charCodeAt(t++))))throw new Error("Invalid base64 digit: "+e.charAt(t-1));o=!!(32&i),u+=(i&=31)<<c,c+=5}while(o);n.value=(a=(s=u)>>1,1===(1&s)?-a:a),n.rest=t}},"./node_modules/@babel/core/node_modules/source-map/lib/base64.js":function(e,t){var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");t.encode=function(e){if(0<=e&&e<n.length)return n[e];throw new TypeError("Must be between 0 and 63: "+e)},t.decode=function(e){return 65<=e&&e<=90?e-65:97<=e&&e<=122?e-97+26:48<=e&&e<=57?e-48+52:43==e?62:47==e?63:-1}},"./node_modules/@babel/core/node_modules/source-map/lib/binary-search.js":function(e,t){t.GREATEST_LOWER_BOUND=1,t.LEAST_UPPER_BOUND=2,t.search=function(e,n,r,o){if(0===n.length)return-1;var i=function e(n,r,o,i,s,a){var l=Math.floor((r-n)/2)+n,u=s(o,i[l],!0);return 0===u?l:u>0?r-l>1?e(l,r,o,i,s,a):a==t.LEAST_UPPER_BOUND?r<i.length?r:-1:l:l-n>1?e(n,l,o,i,s,a):a==t.LEAST_UPPER_BOUND?l:n<0?-1:n}(-1,n.length,e,n,r,o||t.GREATEST_LOWER_BOUND);if(i<0)return-1;for(;i-1>=0&&0===r(n[i],n[i-1],!0);)--i;return i}},"./node_modules/@babel/core/node_modules/source-map/lib/mapping-list.js":function(e,t,n){var r=n("./node_modules/@babel/core/node_modules/source-map/lib/util.js");function o(){this._array=[],this._sorted=!0,this._last={generatedLine:-1,generatedColumn:0}}o.prototype.unsortedForEach=function(e,t){this._array.forEach(e,t)},o.prototype.add=function(e){var t,n,o,i,s,a;t=this._last,n=e,o=t.generatedLine,i=n.generatedLine,s=t.generatedColumn,a=n.generatedColumn,i>o||i==o&&a>=s||r.compareByGeneratedPositionsInflated(t,n)<=0?(this._last=e,this._array.push(e)):(this._sorted=!1,this._array.push(e))},o.prototype.toArray=function(){return this._sorted||(this._array.sort(r.compareByGeneratedPositionsInflated),this._sorted=!0),this._array},t.MappingList=o},"./node_modules/@babel/core/node_modules/source-map/lib/quick-sort.js":function(e,t){function n(e,t,n){var r=e[t];e[t]=e[n],e[n]=r}function r(e,t,o,i){if(o<i){var s=o-1;n(e,(c=o,d=i,Math.round(c+Math.random()*(d-c))),i);for(var a=e[i],l=o;l<i;l++)t(e[l],a)<=0&&n(e,s+=1,l);n(e,s+1,l);var u=s+1;r(e,t,o,u-1),r(e,t,u+1,i)}var c,d}t.quickSort=function(e,t){r(e,t,0,e.length-1)}},"./node_modules/@babel/core/node_modules/source-map/lib/source-map-consumer.js":function(e,t,n){var r=n("./node_modules/@babel/core/node_modules/source-map/lib/util.js"),o=n("./node_modules/@babel/core/node_modules/source-map/lib/binary-search.js"),i=n("./node_modules/@babel/core/node_modules/source-map/lib/array-set.js").ArraySet,s=n("./node_modules/@babel/core/node_modules/source-map/lib/base64-vlq.js"),a=n("./node_modules/@babel/core/node_modules/source-map/lib/quick-sort.js").quickSort;function l(e){var t=e;return"string"===typeof e&&(t=JSON.parse(e.replace(/^\)\]\}'/,""))),null!=t.sections?new d(t):new u(t)}function u(e){var t=e;"string"===typeof e&&(t=JSON.parse(e.replace(/^\)\]\}'/,"")));var n=r.getArg(t,"version"),o=r.getArg(t,"sources"),s=r.getArg(t,"names",[]),a=r.getArg(t,"sourceRoot",null),l=r.getArg(t,"sourcesContent",null),u=r.getArg(t,"mappings"),c=r.getArg(t,"file",null);if(n!=this._version)throw new Error("Unsupported version: "+n);o=o.map(String).map(r.normalize).map((function(e){return a&&r.isAbsolute(a)&&r.isAbsolute(e)?r.relative(a,e):e})),this._names=i.fromArray(s.map(String),!0),this._sources=i.fromArray(o,!0),this.sourceRoot=a,this.sourcesContent=l,this._mappings=u,this.file=c}function c(){this.generatedLine=0,this.generatedColumn=0,this.source=null,this.originalLine=null,this.originalColumn=null,this.name=null}function d(e){var t=e;"string"===typeof e&&(t=JSON.parse(e.replace(/^\)\]\}'/,"")));var n=r.getArg(t,"version"),o=r.getArg(t,"sections");if(n!=this._version)throw new Error("Unsupported version: "+n);this._sources=new i,this._names=new i;var s={line:-1,column:0};this._sections=o.map((function(e){if(e.url)throw new Error("Support for url field in sections not implemented.");var t=r.getArg(e,"offset"),n=r.getArg(t,"line"),o=r.getArg(t,"column");if(n<s.line||n===s.line&&o<s.column)throw new Error("Section offsets must be ordered and non-overlapping.");return s=t,{generatedOffset:{generatedLine:n+1,generatedColumn:o+1},consumer:new l(r.getArg(e,"map"))}}))}l.fromSourceMap=function(e){return u.fromSourceMap(e)},l.prototype._version=3,l.prototype.__generatedMappings=null,Object.defineProperty(l.prototype,"_generatedMappings",{get:function(){return this.__generatedMappings||this._parseMappings(this._mappings,this.sourceRoot),this.__generatedMappings}}),l.prototype.__originalMappings=null,Object.defineProperty(l.prototype,"_originalMappings",{get:function(){return this.__originalMappings||this._parseMappings(this._mappings,this.sourceRoot),this.__originalMappings}}),l.prototype._charIsMappingSeparator=function(e,t){var n=e.charAt(t);return";"===n||","===n},l.prototype._parseMappings=function(e,t){throw new Error("Subclasses must implement _parseMappings")},l.GENERATED_ORDER=1,l.ORIGINAL_ORDER=2,l.GREATEST_LOWER_BOUND=1,l.LEAST_UPPER_BOUND=2,l.prototype.eachMapping=function(e,t,n){var o,i=t||null;switch(n||l.GENERATED_ORDER){case l.GENERATED_ORDER:o=this._generatedMappings;break;case l.ORIGINAL_ORDER:o=this._originalMappings;break;default:throw new Error("Unknown order of iteration.")}var s=this.sourceRoot;o.map((function(e){var t=null===e.source?null:this._sources.at(e.source);return null!=t&&null!=s&&(t=r.join(s,t)),{source:t,generatedLine:e.generatedLine,generatedColumn:e.generatedColumn,originalLine:e.originalLine,originalColumn:e.originalColumn,name:null===e.name?null:this._names.at(e.name)}}),this).forEach(e,i)},l.prototype.allGeneratedPositionsFor=function(e){var t=r.getArg(e,"line"),n={source:r.getArg(e,"source"),originalLine:t,originalColumn:r.getArg(e,"column",0)};if(null!=this.sourceRoot&&(n.source=r.relative(this.sourceRoot,n.source)),!this._sources.has(n.source))return[];n.source=this._sources.indexOf(n.source);var i=[],s=this._findMapping(n,this._originalMappings,"originalLine","originalColumn",r.compareByOriginalPositions,o.LEAST_UPPER_BOUND);if(s>=0){var a=this._originalMappings[s];if(void 0===e.column)for(var l=a.originalLine;a&&a.originalLine===l;)i.push({line:r.getArg(a,"generatedLine",null),column:r.getArg(a,"generatedColumn",null),lastColumn:r.getArg(a,"lastGeneratedColumn",null)}),a=this._originalMappings[++s];else for(var u=a.originalColumn;a&&a.originalLine===t&&a.originalColumn==u;)i.push({line:r.getArg(a,"generatedLine",null),column:r.getArg(a,"generatedColumn",null),lastColumn:r.getArg(a,"lastGeneratedColumn",null)}),a=this._originalMappings[++s]}return i},t.SourceMapConsumer=l,u.prototype=Object.create(l.prototype),u.prototype.consumer=l,u.fromSourceMap=function(e){var t=Object.create(u.prototype),n=t._names=i.fromArray(e._names.toArray(),!0),o=t._sources=i.fromArray(e._sources.toArray(),!0);t.sourceRoot=e._sourceRoot,t.sourcesContent=e._generateSourcesContent(t._sources.toArray(),t.sourceRoot),t.file=e._file;for(var s=e._mappings.toArray().slice(),l=t.__generatedMappings=[],d=t.__originalMappings=[],p=0,f=s.length;p<f;p++){var h=s[p],m=new c;m.generatedLine=h.generatedLine,m.generatedColumn=h.generatedColumn,h.source&&(m.source=o.indexOf(h.source),m.originalLine=h.originalLine,m.originalColumn=h.originalColumn,h.name&&(m.name=n.indexOf(h.name)),d.push(m)),l.push(m)}return a(t.__originalMappings,r.compareByOriginalPositions),t},u.prototype._version=3,Object.defineProperty(u.prototype,"sources",{get:function(){return this._sources.toArray().map((function(e){return null!=this.sourceRoot?r.join(this.sourceRoot,e):e}),this)}}),u.prototype._parseMappings=function(e,t){for(var n,o,i,l,u,d=1,p=0,f=0,h=0,m=0,g=0,y=e.length,b=0,v={},_={},x=[],E=[];b<y;)if(";"===e.charAt(b))d++,b++,p=0;else if(","===e.charAt(b))b++;else{for((n=new c).generatedLine=d,l=b;l<y&&!this._charIsMappingSeparator(e,l);l++);if(i=v[o=e.slice(b,l)])b+=o.length;else{for(i=[];b<l;)s.decode(e,b,_),u=_.value,b=_.rest,i.push(u);if(2===i.length)throw new Error("Found a source, but no line and column");if(3===i.length)throw new Error("Found a source and line, but no column");v[o]=i}n.generatedColumn=p+i[0],p=n.generatedColumn,i.length>1&&(n.source=m+i[1],m+=i[1],n.originalLine=f+i[2],f=n.originalLine,n.originalLine+=1,n.originalColumn=h+i[3],h=n.originalColumn,i.length>4&&(n.name=g+i[4],g+=i[4])),E.push(n),"number"===typeof n.originalLine&&x.push(n)}a(E,r.compareByGeneratedPositionsDeflated),this.__generatedMappings=E,a(x,r.compareByOriginalPositions),this.__originalMappings=x},u.prototype._findMapping=function(e,t,n,r,i,s){if(e[n]<=0)throw new TypeError("Line must be greater than or equal to 1, got "+e[n]);if(e[r]<0)throw new TypeError("Column must be greater than or equal to 0, got "+e[r]);return o.search(e,t,i,s)},u.prototype.computeColumnSpans=function(){for(var e=0;e<this._generatedMappings.length;++e){var t=this._generatedMappings[e];if(e+1<this._generatedMappings.length){var n=this._generatedMappings[e+1];if(t.generatedLine===n.generatedLine){t.lastGeneratedColumn=n.generatedColumn-1;continue}}t.lastGeneratedColumn=1/0}},u.prototype.originalPositionFor=function(e){var t={generatedLine:r.getArg(e,"line"),generatedColumn:r.getArg(e,"column")},n=this._findMapping(t,this._generatedMappings,"generatedLine","generatedColumn",r.compareByGeneratedPositionsDeflated,r.getArg(e,"bias",l.GREATEST_LOWER_BOUND));if(n>=0){var o=this._generatedMappings[n];if(o.generatedLine===t.generatedLine){var i=r.getArg(o,"source",null);null!==i&&(i=this._sources.at(i),null!=this.sourceRoot&&(i=r.join(this.sourceRoot,i)));var s=r.getArg(o,"name",null);return null!==s&&(s=this._names.at(s)),{source:i,line:r.getArg(o,"originalLine",null),column:r.getArg(o,"originalColumn",null),name:s}}}return{source:null,line:null,column:null,name:null}},u.prototype.hasContentsOfAllSources=function(){return!!this.sourcesContent&&(this.sourcesContent.length>=this._sources.size()&&!this.sourcesContent.some((function(e){return null==e})))},u.prototype.sourceContentFor=function(e,t){if(!this.sourcesContent)return null;if(null!=this.sourceRoot&&(e=r.relative(this.sourceRoot,e)),this._sources.has(e))return this.sourcesContent[this._sources.indexOf(e)];var n;if(null!=this.sourceRoot&&(n=r.urlParse(this.sourceRoot))){var o=e.replace(/^file:\/\//,"");if("file"==n.scheme&&this._sources.has(o))return this.sourcesContent[this._sources.indexOf(o)];if((!n.path||"/"==n.path)&&this._sources.has("/"+e))return this.sourcesContent[this._sources.indexOf("/"+e)]}if(t)return null;throw new Error('"'+e+'" is not in the SourceMap.')},u.prototype.generatedPositionFor=function(e){var t=r.getArg(e,"source");if(null!=this.sourceRoot&&(t=r.relative(this.sourceRoot,t)),!this._sources.has(t))return{line:null,column:null,lastColumn:null};var n={source:t=this._sources.indexOf(t),originalLine:r.getArg(e,"line"),originalColumn:r.getArg(e,"column")},o=this._findMapping(n,this._originalMappings,"originalLine","originalColumn",r.compareByOriginalPositions,r.getArg(e,"bias",l.GREATEST_LOWER_BOUND));if(o>=0){var i=this._originalMappings[o];if(i.source===n.source)return{line:r.getArg(i,"generatedLine",null),column:r.getArg(i,"generatedColumn",null),lastColumn:r.getArg(i,"lastGeneratedColumn",null)}}return{line:null,column:null,lastColumn:null}},t.BasicSourceMapConsumer=u,d.prototype=Object.create(l.prototype),d.prototype.constructor=l,d.prototype._version=3,Object.defineProperty(d.prototype,"sources",{get:function(){for(var e=[],t=0;t<this._sections.length;t++)for(var n=0;n<this._sections[t].consumer.sources.length;n++)e.push(this._sections[t].consumer.sources[n]);return e}}),d.prototype.originalPositionFor=function(e){var t={generatedLine:r.getArg(e,"line"),generatedColumn:r.getArg(e,"column")},n=o.search(t,this._sections,(function(e,t){var n=e.generatedLine-t.generatedOffset.generatedLine;return n||e.generatedColumn-t.generatedOffset.generatedColumn})),i=this._sections[n];return i?i.consumer.originalPositionFor({line:t.generatedLine-(i.generatedOffset.generatedLine-1),column:t.generatedColumn-(i.generatedOffset.generatedLine===t.generatedLine?i.generatedOffset.generatedColumn-1:0),bias:e.bias}):{source:null,line:null,column:null,name:null}},d.prototype.hasContentsOfAllSources=function(){return this._sections.every((function(e){return e.consumer.hasContentsOfAllSources()}))},d.prototype.sourceContentFor=function(e,t){for(var n=0;n<this._sections.length;n++){var r=this._sections[n].consumer.sourceContentFor(e,!0);if(r)return r}if(t)return null;throw new Error('"'+e+'" is not in the SourceMap.')},d.prototype.generatedPositionFor=function(e){for(var t=0;t<this._sections.length;t++){var n=this._sections[t];if(-1!==n.consumer.sources.indexOf(r.getArg(e,"source"))){var o=n.consumer.generatedPositionFor(e);if(o)return{line:o.line+(n.generatedOffset.generatedLine-1),column:o.column+(n.generatedOffset.generatedLine===o.line?n.generatedOffset.generatedColumn-1:0)}}}return{line:null,column:null}},d.prototype._parseMappings=function(e,t){this.__generatedMappings=[],this.__originalMappings=[];for(var n=0;n<this._sections.length;n++)for(var o=this._sections[n],i=o.consumer._generatedMappings,s=0;s<i.length;s++){var l=i[s],u=o.consumer._sources.at(l.source);null!==o.consumer.sourceRoot&&(u=r.join(o.consumer.sourceRoot,u)),this._sources.add(u),u=this._sources.indexOf(u);var c=o.consumer._names.at(l.name);this._names.add(c),c=this._names.indexOf(c);var d={source:u,generatedLine:l.generatedLine+(o.generatedOffset.generatedLine-1),generatedColumn:l.generatedColumn+(o.generatedOffset.generatedLine===l.generatedLine?o.generatedOffset.generatedColumn-1:0),originalLine:l.originalLine,originalColumn:l.originalColumn,name:c};this.__generatedMappings.push(d),"number"===typeof d.originalLine&&this.__originalMappings.push(d)}a(this.__generatedMappings,r.compareByGeneratedPositionsDeflated),a(this.__originalMappings,r.compareByOriginalPositions)},t.IndexedSourceMapConsumer=d},"./node_modules/@babel/core/node_modules/source-map/lib/source-map-generator.js":function(e,t,n){var r=n("./node_modules/@babel/core/node_modules/source-map/lib/base64-vlq.js"),o=n("./node_modules/@babel/core/node_modules/source-map/lib/util.js"),i=n("./node_modules/@babel/core/node_modules/source-map/lib/array-set.js").ArraySet,s=n("./node_modules/@babel/core/node_modules/source-map/lib/mapping-list.js").MappingList;function a(e){e||(e={}),this._file=o.getArg(e,"file",null),this._sourceRoot=o.getArg(e,"sourceRoot",null),this._skipValidation=o.getArg(e,"skipValidation",!1),this._sources=new i,this._names=new i,this._mappings=new s,this._sourcesContents=null}a.prototype._version=3,a.fromSourceMap=function(e){var t=e.sourceRoot,n=new a({file:e.file,sourceRoot:t});return e.eachMapping((function(e){var r={generated:{line:e.generatedLine,column:e.generatedColumn}};null!=e.source&&(r.source=e.source,null!=t&&(r.source=o.relative(t,r.source)),r.original={line:e.originalLine,column:e.originalColumn},null!=e.name&&(r.name=e.name)),n.addMapping(r)})),e.sources.forEach((function(t){var r=e.sourceContentFor(t);null!=r&&n.setSourceContent(t,r)})),n},a.prototype.addMapping=function(e){var t=o.getArg(e,"generated"),n=o.getArg(e,"original",null),r=o.getArg(e,"source",null),i=o.getArg(e,"name",null);this._skipValidation||this._validateMapping(t,n,r,i),null!=r&&(r=String(r),this._sources.has(r)||this._sources.add(r)),null!=i&&(i=String(i),this._names.has(i)||this._names.add(i)),this._mappings.add({generatedLine:t.line,generatedColumn:t.column,originalLine:null!=n&&n.line,originalColumn:null!=n&&n.column,source:r,name:i})},a.prototype.setSourceContent=function(e,t){var n=e;null!=this._sourceRoot&&(n=o.relative(this._sourceRoot,n)),null!=t?(this._sourcesContents||(this._sourcesContents=Object.create(null)),this._sourcesContents[o.toSetString(n)]=t):this._sourcesContents&&(delete this._sourcesContents[o.toSetString(n)],0===Object.keys(this._sourcesContents).length&&(this._sourcesContents=null))},a.prototype.applySourceMap=function(e,t,n){var r=t;if(null==t){if(null==e.file)throw new Error('SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map\'s "file" property. Both were omitted.');r=e.file}var s=this._sourceRoot;null!=s&&(r=o.relative(s,r));var a=new i,l=new i;this._mappings.unsortedForEach((function(t){if(t.source===r&&null!=t.originalLine){var i=e.originalPositionFor({line:t.originalLine,column:t.originalColumn});null!=i.source&&(t.source=i.source,null!=n&&(t.source=o.join(n,t.source)),null!=s&&(t.source=o.relative(s,t.source)),t.originalLine=i.line,t.originalColumn=i.column,null!=i.name&&(t.name=i.name))}var u=t.source;null==u||a.has(u)||a.add(u);var c=t.name;null==c||l.has(c)||l.add(c)}),this),this._sources=a,this._names=l,e.sources.forEach((function(t){var r=e.sourceContentFor(t);null!=r&&(null!=n&&(t=o.join(n,t)),null!=s&&(t=o.relative(s,t)),this.setSourceContent(t,r))}),this)},a.prototype._validateMapping=function(e,t,n,r){if(t&&"number"!==typeof t.line&&"number"!==typeof t.column)throw new Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");if((!(e&&"line"in e&&"column"in e&&e.line>0&&e.column>=0)||t||n||r)&&!(e&&"line"in e&&"column"in e&&t&&"line"in t&&"column"in t&&e.line>0&&e.column>=0&&t.line>0&&t.column>=0&&n))throw new Error("Invalid mapping: "+JSON.stringify({generated:e,source:n,original:t,name:r}))},a.prototype._serializeMappings=function(){for(var e,t,n,i,s=0,a=1,l=0,u=0,c=0,d=0,p="",f=this._mappings.toArray(),h=0,m=f.length;h<m;h++){if(e="",(t=f[h]).generatedLine!==a)for(s=0;t.generatedLine!==a;)e+=";",a++;else if(h>0){if(!o.compareByGeneratedPositionsInflated(t,f[h-1]))continue;e+=","}e+=r.encode(t.generatedColumn-s),s=t.generatedColumn,null!=t.source&&(i=this._sources.indexOf(t.source),e+=r.encode(i-d),d=i,e+=r.encode(t.originalLine-1-u),u=t.originalLine-1,e+=r.encode(t.originalColumn-l),l=t.originalColumn,null!=t.name&&(n=this._names.indexOf(t.name),e+=r.encode(n-c),c=n)),p+=e}return p},a.prototype._generateSourcesContent=function(e,t){return e.map((function(e){if(!this._sourcesContents)return null;null!=t&&(e=o.relative(t,e));var n=o.toSetString(e);return Object.prototype.hasOwnProperty.call(this._sourcesContents,n)?this._sourcesContents[n]:null}),this)},a.prototype.toJSON=function(){var e={version:this._version,sources:this._sources.toArray(),names:this._names.toArray(),mappings:this._serializeMappings()};return null!=this._file&&(e.file=this._file),null!=this._sourceRoot&&(e.sourceRoot=this._sourceRoot),this._sourcesContents&&(e.sourcesContent=this._generateSourcesContent(e.sources,e.sourceRoot)),e},a.prototype.toString=function(){return JSON.stringify(this.toJSON())},t.SourceMapGenerator=a},"./node_modules/@babel/core/node_modules/source-map/lib/source-node.js":function(e,t,n){var r=n("./node_modules/@babel/core/node_modules/source-map/lib/source-map-generator.js").SourceMapGenerator,o=n("./node_modules/@babel/core/node_modules/source-map/lib/util.js"),i=/(\r?\n)/,s="$$$isSourceNode$$$";function a(e,t,n,r,o){this.children=[],this.sourceContents={},this.line=null==e?null:e,this.column=null==t?null:t,this.source=null==n?null:n,this.name=null==o?null:o,this[s]=!0,null!=r&&this.add(r)}a.fromStringWithSourceMap=function(e,t,n){var r=new a,s=e.split(i),l=0,u=function(){return e()+(e()||"");function e(){return l<s.length?s[l++]:void 0}},c=1,d=0,p=null;return t.eachMapping((function(e){if(null!==p){if(!(c<e.generatedLine)){var t=(n=s[l]).substr(0,e.generatedColumn-d);return s[l]=n.substr(e.generatedColumn-d),d=e.generatedColumn,f(p,t),void(p=e)}f(p,u()),c++,d=0}for(;c<e.generatedLine;)r.add(u()),c++;if(d<e.generatedColumn){var n=s[l];r.add(n.substr(0,e.generatedColumn)),s[l]=n.substr(e.generatedColumn),d=e.generatedColumn}p=e}),this),l<s.length&&(p&&f(p,u()),r.add(s.splice(l).join(""))),t.sources.forEach((function(e){var i=t.sourceContentFor(e);null!=i&&(null!=n&&(e=o.join(n,e)),r.setSourceContent(e,i))})),r;function f(e,t){if(null===e||void 0===e.source)r.add(t);else{var i=n?o.join(n,e.source):e.source;r.add(new a(e.originalLine,e.originalColumn,i,t,e.name))}}},a.prototype.add=function(e){if(Array.isArray(e))e.forEach((function(e){this.add(e)}),this);else{if(!e[s]&&"string"!==typeof e)throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+e);e&&this.children.push(e)}return this},a.prototype.prepend=function(e){if(Array.isArray(e))for(var t=e.length-1;t>=0;t--)this.prepend(e[t]);else{if(!e[s]&&"string"!==typeof e)throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+e);this.children.unshift(e)}return this},a.prototype.walk=function(e){for(var t,n=0,r=this.children.length;n<r;n++)(t=this.children[n])[s]?t.walk(e):""!==t&&e(t,{source:this.source,line:this.line,column:this.column,name:this.name})},a.prototype.join=function(e){var t,n,r=this.children.length;if(r>0){for(t=[],n=0;n<r-1;n++)t.push(this.children[n]),t.push(e);t.push(this.children[n]),this.children=t}return this},a.prototype.replaceRight=function(e,t){var n=this.children[this.children.length-1];return n[s]?n.replaceRight(e,t):"string"===typeof n?this.children[this.children.length-1]=n.replace(e,t):this.children.push("".replace(e,t)),this},a.prototype.setSourceContent=function(e,t){this.sourceContents[o.toSetString(e)]=t},a.prototype.walkSourceContents=function(e){for(var t=0,n=this.children.length;t<n;t++)this.children[t][s]&&this.children[t].walkSourceContents(e);var r=Object.keys(this.sourceContents);for(t=0,n=r.length;t<n;t++)e(o.fromSetString(r[t]),this.sourceContents[r[t]])},a.prototype.toString=function(){var e="";return this.walk((function(t){e+=t})),e},a.prototype.toStringWithSourceMap=function(e){var t={code:"",line:1,column:0},n=new r(e),o=!1,i=null,s=null,a=null,l=null;return this.walk((function(e,r){t.code+=e,null!==r.source&&null!==r.line&&null!==r.column?(i===r.source&&s===r.line&&a===r.column&&l===r.name||n.addMapping({source:r.source,original:{line:r.line,column:r.column},generated:{line:t.line,column:t.column},name:r.name}),i=r.source,s=r.line,a=r.column,l=r.name,o=!0):o&&(n.addMapping({generated:{line:t.line,column:t.column}}),i=null,o=!1);for(var u=0,c=e.length;u<c;u++)10===e.charCodeAt(u)?(t.line++,t.column=0,u+1===c?(i=null,o=!1):o&&n.addMapping({source:r.source,original:{line:r.line,column:r.column},generated:{line:t.line,column:t.column},name:r.name})):t.column++})),this.walkSourceContents((function(e,t){n.setSourceContent(e,t)})),{code:t.code,map:n}},t.SourceNode=a},"./node_modules/@babel/core/node_modules/source-map/lib/util.js":function(e,t){t.getArg=function(e,t,n){if(t in e)return e[t];if(3===arguments.length)return n;throw new Error('"'+t+'" is a required argument.')};var n=/^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.]*)(?::(\d+))?(\S*)$/,r=/^data:.+\,.+$/;function o(e){var t=e.match(n);return t?{scheme:t[1],auth:t[2],host:t[3],port:t[4],path:t[5]}:null}function i(e){var t="";return e.scheme&&(t+=e.scheme+":"),t+="//",e.auth&&(t+=e.auth+"@"),e.host&&(t+=e.host),e.port&&(t+=":"+e.port),e.path&&(t+=e.path),t}function s(e){var n=e,r=o(e);if(r){if(!r.path)return e;n=r.path}for(var s,a=t.isAbsolute(n),l=n.split(/\/+/),u=0,c=l.length-1;c>=0;c--)"."===(s=l[c])?l.splice(c,1):".."===s?u++:u>0&&(""===s?(l.splice(c+1,u),u=0):(l.splice(c,2),u--));return""===(n=l.join("/"))&&(n=a?"/":"."),r?(r.path=n,i(r)):n}t.urlParse=o,t.urlGenerate=i,t.normalize=s,t.join=function(e,t){""===e&&(e="."),""===t&&(t=".");var n=o(t),a=o(e);if(a&&(e=a.path||"/"),n&&!n.scheme)return a&&(n.scheme=a.scheme),i(n);if(n||t.match(r))return t;if(a&&!a.host&&!a.path)return a.host=t,i(a);var l="/"===t.charAt(0)?t:s(e.replace(/\/+$/,"")+"/"+t);return a?(a.path=l,i(a)):l},t.isAbsolute=function(e){return"/"===e.charAt(0)||!!e.match(n)},t.relative=function(e,t){""===e&&(e="."),e=e.replace(/\/$/,"");for(var n=0;0!==t.indexOf(e+"/");){var r=e.lastIndexOf("/");if(r<0)return t;if((e=e.slice(0,r)).match(/^([^\/]+:\/)?\/*$/))return t;++n}return Array(n+1).join("../")+t.substr(e.length+1)};var a=!("__proto__"in Object.create(null));function l(e){return e}function u(e){if(!e)return!1;var t=e.length;if(t<9)return!1;if(95!==e.charCodeAt(t-1)||95!==e.charCodeAt(t-2)||111!==e.charCodeAt(t-3)||116!==e.charCodeAt(t-4)||111!==e.charCodeAt(t-5)||114!==e.charCodeAt(t-6)||112!==e.charCodeAt(t-7)||95!==e.charCodeAt(t-8)||95!==e.charCodeAt(t-9))return!1;for(var n=t-10;n>=0;n--)if(36!==e.charCodeAt(n))return!1;return!0}function c(e,t){return e===t?0:e>t?1:-1}t.toSetString=a?l:function(e){return u(e)?"$"+e:e},t.fromSetString=a?l:function(e){return u(e)?e.slice(1):e},t.compareByOriginalPositions=function(e,t,n){var r=e.source-t.source;return 0!==r||0!==(r=e.originalLine-t.originalLine)||0!==(r=e.originalColumn-t.originalColumn)||n||0!==(r=e.generatedColumn-t.generatedColumn)||0!==(r=e.generatedLine-t.generatedLine)?r:e.name-t.name},t.compareByGeneratedPositionsDeflated=function(e,t,n){var r=e.generatedLine-t.generatedLine;return 0!==r||0!==(r=e.generatedColumn-t.generatedColumn)||n||0!==(r=e.source-t.source)||0!==(r=e.originalLine-t.originalLine)||0!==(r=e.originalColumn-t.originalColumn)?r:e.name-t.name},t.compareByGeneratedPositionsInflated=function(e,t){var n=e.generatedLine-t.generatedLine;return 0!==n||0!==(n=e.generatedColumn-t.generatedColumn)||0!==(n=c(e.source,t.source))||0!==(n=e.originalLine-t.originalLine)||0!==(n=e.originalColumn-t.originalColumn)?n:c(e.name,t.name)}},"./node_modules/@babel/core/node_modules/source-map/source-map.js":function(e,t,n){t.SourceMapGenerator=n("./node_modules/@babel/core/node_modules/source-map/lib/source-map-generator.js").SourceMapGenerator,t.SourceMapConsumer=n("./node_modules/@babel/core/node_modules/source-map/lib/source-map-consumer.js").SourceMapConsumer,t.SourceNode=n("./node_modules/@babel/core/node_modules/source-map/lib/source-node.js").SourceNode},"./node_modules/@babel/core/package.json":function(e){e.exports=JSON.parse('{"name":"@babel/core","version":"7.12.3","description":"Babel compiler core.","main":"lib/index.js","author":"Sebastian McKenzie <sebmck@gmail.com>","homepage":"https://babeljs.io/","license":"MIT","publishConfig":{"access":"public"},"repository":{"type":"git","url":"https://github.com/babel/babel.git","directory":"packages/babel-core"},"keywords":["6to5","babel","classes","const","es6","harmony","let","modules","transpile","transpiler","var","babel-core","compiler"],"engines":{"node":">=6.9.0"},"funding":{"type":"opencollective","url":"https://opencollective.com/babel"},"browser":{"./lib/config/files/index.js":"./lib/config/files/index-browser.js","./lib/transform-file.js":"./lib/transform-file-browser.js","./src/config/files/index.js":"./src/config/files/index-browser.js","./src/transform-file.js":"./src/transform-file-browser.js"},"dependencies":{"@babel/code-frame":"^7.10.4","@babel/generator":"^7.12.1","@babel/helper-module-transforms":"^7.12.1","@babel/helpers":"^7.12.1","@babel/parser":"^7.12.3","@babel/template":"^7.10.4","@babel/traverse":"^7.12.1","@babel/types":"^7.12.1","convert-source-map":"^1.7.0","debug":"^4.1.0","gensync":"^1.0.0-beta.1","json5":"^2.1.2","lodash":"^4.17.19","resolve":"^1.3.2","semver":"^5.4.1","source-map":"^0.5.0"},"devDependencies":{"@babel/helper-transform-fixture-test-runner":"^7.12.1"}}')},"./node_modules/@babel/generator/lib/buffer.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;const r=/^[ \t]+$/;t.default=class{constructor(e){this._map=null,this._buf=[],this._last="",this._queue=[],this._position={line:1,column:0},this._sourcePosition={identifierName:null,line:null,column:null,filename:null},this._disallowedPop=null,this._map=e}get(){this._flush();const e=this._map,t={code:this._buf.join("").trimRight(),map:null,rawMappings:null==e?void 0:e.getRawMappings()};return e&&Object.defineProperty(t,"map",{configurable:!0,enumerable:!0,get(){return this.map=e.get()},set(e){Object.defineProperty(this,"map",{value:e,writable:!0})}}),t}append(e){this._flush();const{line:t,column:n,filename:r,identifierName:o,force:i}=this._sourcePosition;this._append(e,t,n,o,r,i)}queue(e){if("\n"===e)for(;this._queue.length>0&&r.test(this._queue[0][0]);)this._queue.shift();const{line:t,column:n,filename:o,identifierName:i,force:s}=this._sourcePosition;this._queue.unshift([e,t,n,i,o,s])}_flush(){let e;for(;e=this._queue.pop();)this._append(...e)}_append(e,t,n,r,o,i){this._buf.push(e),this._last=e[e.length-1];let s=e.indexOf("\n"),a=0;for(0!==s&&this._mark(t,n,r,o,i);-1!==s;)this._position.line++,this._position.column=0,a=s+1,a<e.length&&this._mark(++t,0,r,o,i),s=e.indexOf("\n",a);this._position.column+=e.length-a}_mark(e,t,n,r,o){var i;null==(i=this._map)||i.mark(this._position.line,this._position.column,e,t,n,r,o)}removeTrailingNewline(){this._queue.length>0&&"\n"===this._queue[0][0]&&this._queue.shift()}removeLastSemicolon(){this._queue.length>0&&";"===this._queue[0][0]&&this._queue.shift()}endsWith(e){if(1===e.length){let t;if(this._queue.length>0){const e=this._queue[0][0];t=e[e.length-1]}else t=this._last;return t===e}const t=this._last+this._queue.reduce((e,t)=>t[0]+e,"");return e.length<=t.length&&t.slice(-e.length)===e}hasContent(){return this._queue.length>0||!!this._last}exactSource(e,t){this.source("start",e,!0),t(),this.source("end",e),this._disallowPop("start",e)}source(e,t,n){e&&!t||this._normalizePosition(e,t,this._sourcePosition,n)}withSource(e,t,n){if(!this._map)return n();const r=this._sourcePosition.line,o=this._sourcePosition.column,i=this._sourcePosition.filename,s=this._sourcePosition.identifierName;this.source(e,t),n(),this._sourcePosition.force&&this._sourcePosition.line===r&&this._sourcePosition.column===o&&this._sourcePosition.filename===i||this._disallowedPop&&this._disallowedPop.line===r&&this._disallowedPop.column===o&&this._disallowedPop.filename===i||(this._sourcePosition.line=r,this._sourcePosition.column=o,this._sourcePosition.filename=i,this._sourcePosition.identifierName=s,this._sourcePosition.force=!1,this._disallowedPop=null)}_disallowPop(e,t){e&&!t||(this._disallowedPop=this._normalizePosition(e,t))}_normalizePosition(e,t,n,r){const o=t?t[e]:null;void 0===n&&(n={identifierName:null,line:null,column:null,filename:null,force:!1});const i=n.line,s=n.column,a=n.filename;return n.identifierName="start"===e&&(null==t?void 0:t.identifierName)||null,n.line=null==o?void 0:o.line,n.column=null==o?void 0:o.column,n.filename=null==t?void 0:t.filename,(r||n.line!==i||n.column!==s||n.filename!==a)&&(n.force=r),n}getCurrentColumn(){const e=this._queue.reduce((e,t)=>t[0]+e,""),t=e.lastIndexOf("\n");return-1===t?this._position.column+e.length:e.length-1-t}getCurrentLine(){const e=this._queue.reduce((e,t)=>t[0]+e,"");let t=0;for(let n=0;n<e.length;n++)"\n"===e[n]&&t++;return this._position.line+t}}},"./node_modules/@babel/generator/lib/generators/base.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.File=function(e){e.program&&this.print(e.program.interpreter,e);this.print(e.program,e)},t.Program=function(e){this.printInnerComments(e,!1),this.printSequence(e.directives,e),e.directives&&e.directives.length&&this.newline();this.printSequence(e.body,e)},t.BlockStatement=function(e){var t;this.token("{"),this.printInnerComments(e);const n=null==(t=e.directives)?void 0:t.length;e.body.length||n?(this.newline(),this.printSequence(e.directives,e,{indent:!0}),n&&this.newline(),this.printSequence(e.body,e,{indent:!0}),this.removeTrailingNewline(),this.source("end",e.loc),this.endsWith("\n")||this.newline(),this.rightBrace()):(this.source("end",e.loc),this.token("}"))},t.Noop=function(){},t.Directive=function(e){this.print(e.value,e),this.semicolon()},t.DirectiveLiteral=function(e){const t=this.getPossibleRaw(e);if(null!=t)return void this.token(t);const{value:n}=e;if(o.test(n)){if(r.test(n))throw new Error("Malformed AST: it is not possible to print a directive containing both unescaped single and double quotes.");this.token(`'${n}'`)}else this.token(`"${n}"`)},t.InterpreterDirective=function(e){this.token(`#!${e.value}\n`)},t.Placeholder=function(e){this.token("%%"),this.print(e.name),this.token("%%"),"Statement"===e.expectedNode&&this.semicolon()};const r=/(?:^|[^\\])(?:\\\\)*'/,o=/(?:^|[^\\])(?:\\\\)*"/},"./node_modules/@babel/generator/lib/generators/classes.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ClassExpression=t.ClassDeclaration=function(e,t){this.format.decoratorsBeforeExport&&(r.isExportDefaultDeclaration(t)||r.isExportNamedDeclaration(t))||this.printJoin(e.decorators,e);e.declare&&(this.word("declare"),this.space());e.abstract&&(this.word("abstract"),this.space());this.word("class"),e.id&&(this.space(),this.print(e.id,e));this.print(e.typeParameters,e),e.superClass&&(this.space(),this.word("extends"),this.space(),this.print(e.superClass,e),this.print(e.superTypeParameters,e));e.implements&&(this.space(),this.word("implements"),this.space(),this.printList(e.implements,e));this.space(),this.print(e.body,e)},t.ClassBody=function(e){this.token("{"),this.printInnerComments(e),0===e.body.length?this.token("}"):(this.newline(),this.indent(),this.printSequence(e.body,e),this.dedent(),this.endsWith("\n")||this.newline(),this.rightBrace())},t.ClassProperty=function(e){this.printJoin(e.decorators,e),this.tsPrintClassMemberModifiers(e,!0),e.computed?(this.token("["),this.print(e.key,e),this.token("]")):(this._variance(e),this.print(e.key,e));e.optional&&this.token("?");e.definite&&this.token("!");this.print(e.typeAnnotation,e),e.value&&(this.space(),this.token("="),this.space(),this.print(e.value,e));this.semicolon()},t.ClassPrivateProperty=function(e){this.printJoin(e.decorators,e),e.static&&(this.word("static"),this.space());this.print(e.key,e),this.print(e.typeAnnotation,e),e.value&&(this.space(),this.token("="),this.space(),this.print(e.value,e));this.semicolon()},t.ClassMethod=function(e){this._classMethodHead(e),this.space(),this.print(e.body,e)},t.ClassPrivateMethod=function(e){this._classMethodHead(e),this.space(),this.print(e.body,e)},t._classMethodHead=function(e){this.printJoin(e.decorators,e),this.tsPrintClassMemberModifiers(e,!1),this._methodHead(e)},t.StaticBlock=function(e){this.word("static"),this.space(),this.token("{"),0===e.body.length?this.token("}"):(this.newline(),this.printSequence(e.body,e,{indent:!0}),this.rightBrace())};var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var s=r?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(n,i,s):n[i]=e[i]}n.default=e,t&&t.set(e,n);return n}(n("./node_modules/@babel/types/lib/index.js"));function o(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}},"./node_modules/@babel/generator/lib/generators/expressions.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.UnaryExpression=function(e){"void"===e.operator||"delete"===e.operator||"typeof"===e.operator||"throw"===e.operator?(this.word(e.operator),this.space()):this.token(e.operator);this.print(e.argument,e)},t.DoExpression=function(e){this.word("do"),this.space(),this.print(e.body,e)},t.ParenthesizedExpression=function(e){this.token("("),this.print(e.expression,e),this.token(")")},t.UpdateExpression=function(e){e.prefix?(this.token(e.operator),this.print(e.argument,e)):(this.startTerminatorless(!0),this.print(e.argument,e),this.endTerminatorless(),this.token(e.operator))},t.ConditionalExpression=function(e){this.print(e.test,e),this.space(),this.token("?"),this.space(),this.print(e.consequent,e),this.space(),this.token(":"),this.space(),this.print(e.alternate,e)},t.NewExpression=function(e,t){if(this.word("new"),this.space(),this.print(e.callee,e),this.format.minified&&0===e.arguments.length&&!e.optional&&!r.isCallExpression(t,{callee:e})&&!r.isMemberExpression(t)&&!r.isNewExpression(t))return;this.print(e.typeArguments,e),this.print(e.typeParameters,e),e.optional&&this.token("?.");this.token("("),this.printList(e.arguments,e),this.token(")")},t.SequenceExpression=function(e){this.printList(e.expressions,e)},t.ThisExpression=function(){this.word("this")},t.Super=function(){this.word("super")},t.Decorator=function(e){this.token("@"),this.print(e.expression,e),this.newline()},t.OptionalMemberExpression=function(e){if(this.print(e.object,e),!e.computed&&r.isMemberExpression(e.property))throw new TypeError("Got a MemberExpression for MemberExpression property");let t=e.computed;r.isLiteral(e.property)&&"number"===typeof e.property.value&&(t=!0);e.optional&&this.token("?.");t?(this.token("["),this.print(e.property,e),this.token("]")):(e.optional||this.token("."),this.print(e.property,e))},t.OptionalCallExpression=function(e){this.print(e.callee,e),this.print(e.typeArguments,e),this.print(e.typeParameters,e),e.optional&&this.token("?.");this.token("("),this.printList(e.arguments,e),this.token(")")},t.CallExpression=function(e){this.print(e.callee,e),this.print(e.typeArguments,e),this.print(e.typeParameters,e),this.token("("),this.printList(e.arguments,e),this.token(")")},t.Import=function(){this.word("import")},t.EmptyStatement=function(){this.semicolon(!0)},t.ExpressionStatement=function(e){this.print(e.expression,e),this.semicolon()},t.AssignmentPattern=function(e){this.print(e.left,e),e.left.optional&&this.token("?");this.print(e.left.typeAnnotation,e),this.space(),this.token("="),this.space(),this.print(e.right,e)},t.LogicalExpression=t.BinaryExpression=t.AssignmentExpression=function(e,t){const n=this.inForStatementInitCounter&&"in"===e.operator&&!o.needsParens(e,t);n&&this.token("(");this.print(e.left,e),this.space(),"in"===e.operator||"instanceof"===e.operator?this.word(e.operator):this.token(e.operator);this.space(),this.print(e.right,e),n&&this.token(")")},t.BindExpression=function(e){this.print(e.object,e),this.token("::"),this.print(e.callee,e)},t.MemberExpression=function(e){if(this.print(e.object,e),!e.computed&&r.isMemberExpression(e.property))throw new TypeError("Got a MemberExpression for MemberExpression property");let t=e.computed;r.isLiteral(e.property)&&"number"===typeof e.property.value&&(t=!0);t?(this.token("["),this.print(e.property,e),this.token("]")):(this.token("."),this.print(e.property,e))},t.MetaProperty=function(e){this.print(e.meta,e),this.token("."),this.print(e.property,e)},t.PrivateName=function(e){this.token("#"),this.print(e.id,e)},t.V8IntrinsicIdentifier=function(e){this.token("%"),this.word(e.name)},t.AwaitExpression=t.YieldExpression=void 0;var r=s(n("./node_modules/@babel/types/lib/index.js")),o=s(n("./node_modules/@babel/generator/lib/node/index.js"));function i(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function s(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var s=r?Object.getOwnPropertyDescriptor(e,o):null;s&&(s.get||s.set)?Object.defineProperty(n,o,s):n[o]=e[o]}return n.default=e,t&&t.set(e,n),n}function a(e){return function(t){if(this.word(e),t.delegate&&this.token("*"),t.argument){this.space();const e=this.startTerminatorless();this.print(t.argument,t),this.endTerminatorless(e)}}}const l=a("yield");t.YieldExpression=l;const u=a("await");t.AwaitExpression=u},"./node_modules/@babel/generator/lib/generators/flow.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AnyTypeAnnotation=function(){this.word("any")},t.ArrayTypeAnnotation=function(e){this.print(e.elementType,e),this.token("["),this.token("]")},t.BooleanTypeAnnotation=function(){this.word("boolean")},t.BooleanLiteralTypeAnnotation=function(e){this.word(e.value?"true":"false")},t.NullLiteralTypeAnnotation=function(){this.word("null")},t.DeclareClass=function(e,t){r.isDeclareExportDeclaration(t)||(this.word("declare"),this.space());this.word("class"),this.space(),this._interfaceish(e)},t.DeclareFunction=function(e,t){r.isDeclareExportDeclaration(t)||(this.word("declare"),this.space());this.word("function"),this.space(),this.print(e.id,e),this.print(e.id.typeAnnotation.typeAnnotation,e),e.predicate&&(this.space(),this.print(e.predicate,e));this.semicolon()},t.InferredPredicate=function(){this.token("%"),this.word("checks")},t.DeclaredPredicate=function(e){this.token("%"),this.word("checks"),this.token("("),this.print(e.value,e),this.token(")")},t.DeclareInterface=function(e){this.word("declare"),this.space(),this.InterfaceDeclaration(e)},t.DeclareModule=function(e){this.word("declare"),this.space(),this.word("module"),this.space(),this.print(e.id,e),this.space(),this.print(e.body,e)},t.DeclareModuleExports=function(e){this.word("declare"),this.space(),this.word("module"),this.token("."),this.word("exports"),this.print(e.typeAnnotation,e)},t.DeclareTypeAlias=function(e){this.word("declare"),this.space(),this.TypeAlias(e)},t.DeclareOpaqueType=function(e,t){r.isDeclareExportDeclaration(t)||(this.word("declare"),this.space());this.OpaqueType(e)},t.DeclareVariable=function(e,t){r.isDeclareExportDeclaration(t)||(this.word("declare"),this.space());this.word("var"),this.space(),this.print(e.id,e),this.print(e.id.typeAnnotation,e),this.semicolon()},t.DeclareExportDeclaration=function(e){this.word("declare"),this.space(),this.word("export"),this.space(),e.default&&(this.word("default"),this.space());c.apply(this,arguments)},t.DeclareExportAllDeclaration=function(){this.word("declare"),this.space(),o.ExportAllDeclaration.apply(this,arguments)},t.EnumDeclaration=function(e){const{id:t,body:n}=e;this.word("enum"),this.space(),this.print(t,e),this.print(n,e)},t.EnumBooleanBody=function(e){const{explicitType:t}=e;a(this,"boolean",t),l(this,e)},t.EnumNumberBody=function(e){const{explicitType:t}=e;a(this,"number",t),l(this,e)},t.EnumStringBody=function(e){const{explicitType:t}=e;a(this,"string",t),l(this,e)},t.EnumSymbolBody=function(e){a(this,"symbol",!0),l(this,e)},t.EnumDefaultedMember=function(e){const{id:t}=e;this.print(t,e),this.token(",")},t.EnumBooleanMember=function(e){u(this,e)},t.EnumNumberMember=function(e){u(this,e)},t.EnumStringMember=function(e){u(this,e)},t.ExistsTypeAnnotation=function(){this.token("*")},t.FunctionTypeAnnotation=function(e,t){this.print(e.typeParameters,e),this.token("("),this.printList(e.params,e),e.rest&&(e.params.length&&(this.token(","),this.space()),this.token("..."),this.print(e.rest,e));this.token(")"),"ObjectTypeCallProperty"===t.type||"DeclareFunction"===t.type||"ObjectTypeProperty"===t.type&&t.method?this.token(":"):(this.space(),this.token("=>"));this.space(),this.print(e.returnType,e)},t.FunctionTypeParam=function(e){this.print(e.name,e),e.optional&&this.token("?");e.name&&(this.token(":"),this.space());this.print(e.typeAnnotation,e)},t.GenericTypeAnnotation=t.ClassImplements=t.InterfaceExtends=function(e){this.print(e.id,e),this.print(e.typeParameters,e)},t._interfaceish=function(e){this.print(e.id,e),this.print(e.typeParameters,e),e.extends.length&&(this.space(),this.word("extends"),this.space(),this.printList(e.extends,e));e.mixins&&e.mixins.length&&(this.space(),this.word("mixins"),this.space(),this.printList(e.mixins,e));e.implements&&e.implements.length&&(this.space(),this.word("implements"),this.space(),this.printList(e.implements,e));this.space(),this.print(e.body,e)},t._variance=function(e){e.variance&&("plus"===e.variance.kind?this.token("+"):"minus"===e.variance.kind&&this.token("-"))},t.InterfaceDeclaration=function(e){this.word("interface"),this.space(),this._interfaceish(e)},t.InterfaceTypeAnnotation=function(e){this.word("interface"),e.extends&&e.extends.length&&(this.space(),this.word("extends"),this.space(),this.printList(e.extends,e));this.space(),this.print(e.body,e)},t.IntersectionTypeAnnotation=function(e){this.printJoin(e.types,e,{separator:d})},t.MixedTypeAnnotation=function(){this.word("mixed")},t.EmptyTypeAnnotation=function(){this.word("empty")},t.NullableTypeAnnotation=function(e){this.token("?"),this.print(e.typeAnnotation,e)},t.NumberTypeAnnotation=function(){this.word("number")},t.StringTypeAnnotation=function(){this.word("string")},t.ThisTypeAnnotation=function(){this.word("this")},t.TupleTypeAnnotation=function(e){this.token("["),this.printList(e.types,e),this.token("]")},t.TypeofTypeAnnotation=function(e){this.word("typeof"),this.space(),this.print(e.argument,e)},t.TypeAlias=function(e){this.word("type"),this.space(),this.print(e.id,e),this.print(e.typeParameters,e),this.space(),this.token("="),this.space(),this.print(e.right,e),this.semicolon()},t.TypeAnnotation=function(e){this.token(":"),this.space(),e.optional&&this.token("?");this.print(e.typeAnnotation,e)},t.TypeParameterDeclaration=t.TypeParameterInstantiation=function(e){this.token("<"),this.printList(e.params,e,{}),this.token(">")},t.TypeParameter=function(e){this._variance(e),this.word(e.name),e.bound&&this.print(e.bound,e);e.default&&(this.space(),this.token("="),this.space(),this.print(e.default,e))},t.OpaqueType=function(e){this.word("opaque"),this.space(),this.word("type"),this.space(),this.print(e.id,e),this.print(e.typeParameters,e),e.supertype&&(this.token(":"),this.space(),this.print(e.supertype,e));e.impltype&&(this.space(),this.token("="),this.space(),this.print(e.impltype,e));this.semicolon()},t.ObjectTypeAnnotation=function(e){e.exact?this.token("{|"):this.token("{");const t=e.properties.concat(e.callProperties||[],e.indexers||[],e.internalSlots||[]);t.length&&(this.space(),this.printJoin(t,e,{addNewlines(e){if(e&&!t[0])return 1},indent:!0,statement:!0,iterator:()=>{(1!==t.length||e.inexact)&&(this.token(","),this.space())}}),this.space());e.inexact&&(this.indent(),this.token("..."),t.length&&this.newline(),this.dedent());e.exact?this.token("|}"):this.token("}")},t.ObjectTypeInternalSlot=function(e){e.static&&(this.word("static"),this.space());this.token("["),this.token("["),this.print(e.id,e),this.token("]"),this.token("]"),e.optional&&this.token("?");e.method||(this.token(":"),this.space());this.print(e.value,e)},t.ObjectTypeCallProperty=function(e){e.static&&(this.word("static"),this.space());this.print(e.value,e)},t.ObjectTypeIndexer=function(e){e.static&&(this.word("static"),this.space());this._variance(e),this.token("["),e.id&&(this.print(e.id,e),this.token(":"),this.space());this.print(e.key,e),this.token("]"),this.token(":"),this.space(),this.print(e.value,e)},t.ObjectTypeProperty=function(e){e.proto&&(this.word("proto"),this.space());e.static&&(this.word("static"),this.space());"get"!==e.kind&&"set"!==e.kind||(this.word(e.kind),this.space());this._variance(e),this.print(e.key,e),e.optional&&this.token("?");e.method||(this.token(":"),this.space());this.print(e.value,e)},t.ObjectTypeSpreadProperty=function(e){this.token("..."),this.print(e.argument,e)},t.QualifiedTypeIdentifier=function(e){this.print(e.qualification,e),this.token("."),this.print(e.id,e)},t.SymbolTypeAnnotation=function(){this.word("symbol")},t.UnionTypeAnnotation=function(e){this.printJoin(e.types,e,{separator:p})},t.TypeCastExpression=function(e){this.token("("),this.print(e.expression,e),this.print(e.typeAnnotation,e),this.token(")")},t.Variance=function(e){"plus"===e.kind?this.token("+"):this.token("-")},t.VoidTypeAnnotation=function(){this.word("void")},Object.defineProperty(t,"NumberLiteralTypeAnnotation",{enumerable:!0,get:function(){return i.NumericLiteral}}),Object.defineProperty(t,"StringLiteralTypeAnnotation",{enumerable:!0,get:function(){return i.StringLiteral}});var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("./node_modules/@babel/types/lib/index.js")),o=n("./node_modules/@babel/generator/lib/generators/modules.js"),i=n("./node_modules/@babel/generator/lib/generators/types.js");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function a(e,t,n){n&&(e.space(),e.word("of"),e.space(),e.word(t)),e.space()}function l(e,t){const{members:n}=t;e.token("{"),e.indent(),e.newline();for(const r of n)e.print(r,t),e.newline();e.dedent(),e.token("}")}function u(e,t){const{id:n,init:r}=t;e.print(n,t),e.space(),e.token("="),e.space(),e.print(r,t),e.token(",")}function c(e){if(e.declaration){const t=e.declaration;this.print(t,e),r.isStatement(t)||this.semicolon()}else this.token("{"),e.specifiers.length&&(this.space(),this.printList(e.specifiers,e),this.space()),this.token("}"),e.source&&(this.space(),this.word("from"),this.space(),this.print(e.source,e)),this.semicolon()}function d(){this.space(),this.token("&"),this.space()}function p(){this.space(),this.token("|"),this.space()}},"./node_modules/@babel/generator/lib/generators/index.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("./node_modules/@babel/generator/lib/generators/template-literals.js");Object.keys(r).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===r[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}}))}));var o=n("./node_modules/@babel/generator/lib/generators/expressions.js");Object.keys(o).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===o[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}}))}));var i=n("./node_modules/@babel/generator/lib/generators/statements.js");Object.keys(i).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===i[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return i[e]}}))}));var s=n("./node_modules/@babel/generator/lib/generators/classes.js");Object.keys(s).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===s[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return s[e]}}))}));var a=n("./node_modules/@babel/generator/lib/generators/methods.js");Object.keys(a).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===a[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}}))}));var l=n("./node_modules/@babel/generator/lib/generators/modules.js");Object.keys(l).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===l[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return l[e]}}))}));var u=n("./node_modules/@babel/generator/lib/generators/types.js");Object.keys(u).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===u[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return u[e]}}))}));var c=n("./node_modules/@babel/generator/lib/generators/flow.js");Object.keys(c).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===c[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return c[e]}}))}));var d=n("./node_modules/@babel/generator/lib/generators/base.js");Object.keys(d).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===d[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return d[e]}}))}));var p=n("./node_modules/@babel/generator/lib/generators/jsx.js");Object.keys(p).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===p[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return p[e]}}))}));var f=n("./node_modules/@babel/generator/lib/generators/typescript.js");Object.keys(f).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===f[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return f[e]}}))}))},"./node_modules/@babel/generator/lib/generators/jsx.js":function(e,t,n){"use strict";function r(){this.space()}Object.defineProperty(t,"__esModule",{value:!0}),t.JSXAttribute=function(e){this.print(e.name,e),e.value&&(this.token("="),this.print(e.value,e))},t.JSXIdentifier=function(e){this.word(e.name)},t.JSXNamespacedName=function(e){this.print(e.namespace,e),this.token(":"),this.print(e.name,e)},t.JSXMemberExpression=function(e){this.print(e.object,e),this.token("."),this.print(e.property,e)},t.JSXSpreadAttribute=function(e){this.token("{"),this.token("..."),this.print(e.argument,e),this.token("}")},t.JSXExpressionContainer=function(e){this.token("{"),this.print(e.expression,e),this.token("}")},t.JSXSpreadChild=function(e){this.token("{"),this.token("..."),this.print(e.expression,e),this.token("}")},t.JSXText=function(e){const t=this.getPossibleRaw(e);null!=t?this.token(t):this.token(e.value)},t.JSXElement=function(e){const t=e.openingElement;if(this.print(t,e),t.selfClosing)return;this.indent();for(const n of e.children)this.print(n,e);this.dedent(),this.print(e.closingElement,e)},t.JSXOpeningElement=function(e){this.token("<"),this.print(e.name,e),this.print(e.typeParameters,e),e.attributes.length>0&&(this.space(),this.printJoin(e.attributes,e,{separator:r}));e.selfClosing?(this.space(),this.token("/>")):this.token(">")},t.JSXClosingElement=function(e){this.token("</"),this.print(e.name,e),this.token(">")},t.JSXEmptyExpression=function(e){this.printInnerComments(e)},t.JSXFragment=function(e){this.print(e.openingFragment,e),this.indent();for(const t of e.children)this.print(t,e);this.dedent(),this.print(e.closingFragment,e)},t.JSXOpeningFragment=function(){this.token("<"),this.token(">")},t.JSXClosingFragment=function(){this.token("</"),this.token(">")}},"./node_modules/@babel/generator/lib/generators/methods.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t._params=function(e){this.print(e.typeParameters,e),this.token("("),this._parameters(e.params,e),this.token(")"),this.print(e.returnType,e)},t._parameters=function(e,t){for(let n=0;n<e.length;n++)this._param(e[n],t),n<e.length-1&&(this.token(","),this.space())},t._param=function(e,t){this.printJoin(e.decorators,e),this.print(e,t),e.optional&&this.token("?");this.print(e.typeAnnotation,e)},t._methodHead=function(e){const t=e.kind,n=e.key;"get"!==t&&"set"!==t||(this.word(t),this.space());e.async&&(this._catchUp("start",n.loc),this.word("async"),this.space());"method"!==t&&"init"!==t||e.generator&&this.token("*");e.computed?(this.token("["),this.print(n,e),this.token("]")):this.print(n,e);e.optional&&this.token("?");this._params(e)},t._predicate=function(e){e.predicate&&(e.returnType||this.token(":"),this.space(),this.print(e.predicate,e))},t._functionHead=function(e){e.async&&(this.word("async"),this.space());this.word("function"),e.generator&&this.token("*");this.space(),e.id&&this.print(e.id,e);this._params(e),this._predicate(e)},t.FunctionDeclaration=t.FunctionExpression=function(e){this._functionHead(e),this.space(),this.print(e.body,e)},t.ArrowFunctionExpression=function(e){e.async&&(this.word("async"),this.space());const t=e.params[0];1===e.params.length&&r.isIdentifier(t)&&!function(e,t){return e.typeParameters||e.returnType||t.typeAnnotation||t.optional||t.trailingComments}(e,t)?(this.format.retainLines||e.async)&&e.loc&&e.body.loc&&e.loc.start.line<e.body.loc.start.line?(this.token("("),t.loc&&t.loc.start.line>e.loc.start.line?(this.indent(),this.print(t,e),this.dedent(),this._catchUp("start",e.body.loc)):this.print(t,e),this.token(")")):this.print(t,e):this._params(e);this._predicate(e),this.space(),this.token("=>"),this.space(),this.print(e.body,e)};var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var s=r?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(n,i,s):n[i]=e[i]}n.default=e,t&&t.set(e,n);return n}(n("./node_modules/@babel/types/lib/index.js"));function o(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}},"./node_modules/@babel/generator/lib/generators/modules.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ImportSpecifier=function(e){"type"!==e.importKind&&"typeof"!==e.importKind||(this.word(e.importKind),this.space());this.print(e.imported,e),e.local&&e.local.name!==e.imported.name&&(this.space(),this.word("as"),this.space(),this.print(e.local,e))},t.ImportDefaultSpecifier=function(e){this.print(e.local,e)},t.ExportDefaultSpecifier=function(e){this.print(e.exported,e)},t.ExportSpecifier=function(e){this.print(e.local,e),e.exported&&e.local.name!==e.exported.name&&(this.space(),this.word("as"),this.space(),this.print(e.exported,e))},t.ExportNamespaceSpecifier=function(e){this.token("*"),this.space(),this.word("as"),this.space(),this.print(e.exported,e)},t.ExportAllDeclaration=function(e){this.word("export"),this.space(),"type"===e.exportKind&&(this.word("type"),this.space());this.token("*"),this.space(),this.word("from"),this.space(),this.print(e.source,e),this.printAssertions(e),this.semicolon()},t.ExportNamedDeclaration=function(e){this.format.decoratorsBeforeExport&&r.isClassDeclaration(e.declaration)&&this.printJoin(e.declaration.decorators,e);this.word("export"),this.space(),i.apply(this,arguments)},t.ExportDefaultDeclaration=function(e){this.format.decoratorsBeforeExport&&r.isClassDeclaration(e.declaration)&&this.printJoin(e.declaration.decorators,e);this.word("export"),this.space(),this.word("default"),this.space(),i.apply(this,arguments)},t.ImportDeclaration=function(e){var t;this.word("import"),this.space(),("type"===e.importKind||"typeof"===e.importKind)&&(this.word(e.importKind),this.space());const n=e.specifiers.slice(0);if(null==n?void 0:n.length){for(;;){const t=n[0];if(!r.isImportDefaultSpecifier(t)&&!r.isImportNamespaceSpecifier(t))break;this.print(n.shift(),e),n.length&&(this.token(","),this.space())}n.length&&(this.token("{"),this.space(),this.printList(n,e),this.space(),this.token("}")),this.space(),this.word("from"),this.space()}this.print(e.source,e),this.printAssertions(e),(null==(t=e.attributes)?void 0:t.length)&&(this.space(),this.word("with"),this.space(),this.printList(e.attributes,e));this.semicolon()},t.ImportAttribute=function(e){this.print(e.key),this.token(":"),this.space(),this.print(e.value)},t.ImportNamespaceSpecifier=function(e){this.token("*"),this.space(),this.word("as"),this.space(),this.print(e.local,e)};var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var s=r?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(n,i,s):n[i]=e[i]}n.default=e,t&&t.set(e,n);return n}(n("./node_modules/@babel/types/lib/index.js"));function o(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}function i(e){if(e.declaration){const t=e.declaration;this.print(t,e),r.isStatement(t)||this.semicolon()}else{"type"===e.exportKind&&(this.word("type"),this.space());const t=e.specifiers.slice(0);let n=!1;for(;;){const o=t[0];if(!r.isExportDefaultSpecifier(o)&&!r.isExportNamespaceSpecifier(o))break;n=!0,this.print(t.shift(),e),t.length&&(this.token(","),this.space())}(t.length||!t.length&&!n)&&(this.token("{"),t.length&&(this.space(),this.printList(t,e),this.space()),this.token("}")),e.source&&(this.space(),this.word("from"),this.space(),this.print(e.source,e),this.printAssertions(e)),this.semicolon()}}},"./node_modules/@babel/generator/lib/generators/statements.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WithStatement=function(e){this.word("with"),this.space(),this.token("("),this.print(e.object,e),this.token(")"),this.printBlock(e)},t.IfStatement=function(e){this.word("if"),this.space(),this.token("("),this.print(e.test,e),this.token(")"),this.space();const t=e.alternate&&r.isIfStatement(function e(t){return r.isStatement(t.body)?e(t.body):t}(e.consequent));t&&(this.token("{"),this.newline(),this.indent());this.printAndIndentOnComments(e.consequent,e),t&&(this.dedent(),this.newline(),this.token("}"));e.alternate&&(this.endsWith("}")&&this.space(),this.word("else"),this.space(),this.printAndIndentOnComments(e.alternate,e))},t.ForStatement=function(e){this.word("for"),this.space(),this.token("("),this.inForStatementInitCounter++,this.print(e.init,e),this.inForStatementInitCounter--,this.token(";"),e.test&&(this.space(),this.print(e.test,e));this.token(";"),e.update&&(this.space(),this.print(e.update,e));this.token(")"),this.printBlock(e)},t.WhileStatement=function(e){this.word("while"),this.space(),this.token("("),this.print(e.test,e),this.token(")"),this.printBlock(e)},t.DoWhileStatement=function(e){this.word("do"),this.space(),this.print(e.body,e),this.space(),this.word("while"),this.space(),this.token("("),this.print(e.test,e),this.token(")"),this.semicolon()},t.LabeledStatement=function(e){this.print(e.label,e),this.token(":"),this.space(),this.print(e.body,e)},t.TryStatement=function(e){this.word("try"),this.space(),this.print(e.block,e),this.space(),e.handlers?this.print(e.handlers[0],e):this.print(e.handler,e);e.finalizer&&(this.space(),this.word("finally"),this.space(),this.print(e.finalizer,e))},t.CatchClause=function(e){this.word("catch"),this.space(),e.param&&(this.token("("),this.print(e.param,e),this.print(e.param.typeAnnotation,e),this.token(")"),this.space());this.print(e.body,e)},t.SwitchStatement=function(e){this.word("switch"),this.space(),this.token("("),this.print(e.discriminant,e),this.token(")"),this.space(),this.token("{"),this.printSequence(e.cases,e,{indent:!0,addNewlines(t,n){if(!t&&e.cases[e.cases.length-1]===n)return-1}}),this.token("}")},t.SwitchCase=function(e){e.test?(this.word("case"),this.space(),this.print(e.test,e),this.token(":")):(this.word("default"),this.token(":"));e.consequent.length&&(this.newline(),this.printSequence(e.consequent,e,{indent:!0}))},t.DebuggerStatement=function(){this.word("debugger"),this.semicolon()},t.VariableDeclaration=function(e,t){e.declare&&(this.word("declare"),this.space());this.word(e.kind),this.space();let n,o=!1;if(!r.isFor(t))for(const r of e.declarations)r.init&&(o=!0);o&&(n="const"===e.kind?h:f);if(this.printList(e.declarations,e,{separator:n}),r.isFor(t)&&(t.left===e||t.init===e))return;this.semicolon()},t.VariableDeclarator=function(e){this.print(e.id,e),e.definite&&this.token("!");this.print(e.id.typeAnnotation,e),e.init&&(this.space(),this.token("="),this.space(),this.print(e.init,e))},t.ThrowStatement=t.BreakStatement=t.ReturnStatement=t.ContinueStatement=t.ForOfStatement=t.ForInStatement=void 0;var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var s=r?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(n,i,s):n[i]=e[i]}n.default=e,t&&t.set(e,n);return n}(n("./node_modules/@babel/types/lib/index.js"));function o(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}const i=function(e){return function(t){this.word("for"),this.space(),"of"===e&&t.await&&(this.word("await"),this.space()),this.token("("),this.print(t.left,t),this.space(),this.word(e),this.space(),this.print(t.right,t),this.token(")"),this.printBlock(t)}},s=i("in");t.ForInStatement=s;const a=i("of");function l(e,t="label"){return function(n){this.word(e);const r=n[t];if(r){this.space();const e="label"==t,o=this.startTerminatorless(e);this.print(r,n),this.endTerminatorless(o)}this.semicolon()}}t.ForOfStatement=a;const u=l("continue");t.ContinueStatement=u;const c=l("return","argument");t.ReturnStatement=c;const d=l("break");t.BreakStatement=d;const p=l("throw","argument");function f(){if(this.token(","),this.newline(),this.endsWith("\n"))for(let e=0;e<4;e++)this.space(!0)}function h(){if(this.token(","),this.newline(),this.endsWith("\n"))for(let e=0;e<6;e++)this.space(!0)}t.ThrowStatement=p},"./node_modules/@babel/generator/lib/generators/template-literals.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TaggedTemplateExpression=function(e){this.print(e.tag,e),this.print(e.typeParameters,e),this.print(e.quasi,e)},t.TemplateElement=function(e,t){const n=t.quasis[0]===e,r=t.quasis[t.quasis.length-1]===e,o=(n?"`":"}")+e.value.raw+(r?"`":"${");this.token(o)},t.TemplateLiteral=function(e){const t=e.quasis;for(let n=0;n<t.length;n++)this.print(t[n],e),n+1<t.length&&this.print(e.expressions[n],e)}},"./node_modules/@babel/generator/lib/generators/types.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Identifier=function(e){this.exactSource(e.loc,()=>{this.word(e.name)})},t.ArgumentPlaceholder=function(){this.token("?")},t.SpreadElement=t.RestElement=function(e){this.token("..."),this.print(e.argument,e)},t.ObjectPattern=t.ObjectExpression=function(e){const t=e.properties;this.token("{"),this.printInnerComments(e),t.length&&(this.space(),this.printList(t,e,{indent:!0,statement:!0}),this.space());this.token("}")},t.ObjectMethod=function(e){this.printJoin(e.decorators,e),this._methodHead(e),this.space(),this.print(e.body,e)},t.ObjectProperty=function(e){if(this.printJoin(e.decorators,e),e.computed)this.token("["),this.print(e.key,e),this.token("]");else{if(o.isAssignmentPattern(e.value)&&o.isIdentifier(e.key)&&e.key.name===e.value.left.name)return void this.print(e.value,e);if(this.print(e.key,e),e.shorthand&&o.isIdentifier(e.key)&&o.isIdentifier(e.value)&&e.key.name===e.value.name)return}this.token(":"),this.space(),this.print(e.value,e)},t.ArrayPattern=t.ArrayExpression=function(e){const t=e.elements,n=t.length;this.token("["),this.printInnerComments(e);for(let r=0;r<t.length;r++){const o=t[r];o?(r>0&&this.space(),this.print(o,e),r<n-1&&this.token(",")):this.token(",")}this.token("]")},t.RecordExpression=function(e){const t=e.properties;let n,r;if("bar"===this.format.recordAndTupleSyntaxType)n="{|",r="|}";else{if("hash"!==this.format.recordAndTupleSyntaxType)throw new Error(`The "recordAndTupleSyntaxType" generator option must be "bar" or "hash" (${JSON.stringify(this.format.recordAndTupleSyntaxType)} received).`);n="#{",r="}"}this.token(n),this.printInnerComments(e),t.length&&(this.space(),this.printList(t,e,{indent:!0,statement:!0}),this.space());this.token(r)},t.TupleExpression=function(e){const t=e.elements,n=t.length;let r,o;if("bar"===this.format.recordAndTupleSyntaxType)r="[|",o="|]";else{if("hash"!==this.format.recordAndTupleSyntaxType)throw new Error(this.format.recordAndTupleSyntaxType+" is not a valid recordAndTuple syntax type");r="#[",o="]"}this.token(r),this.printInnerComments(e);for(let i=0;i<t.length;i++){const r=t[i];r&&(i>0&&this.space(),this.print(r,e),i<n-1&&this.token(","))}this.token(o)},t.RegExpLiteral=function(e){this.word(`/${e.pattern}/${e.flags}`)},t.BooleanLiteral=function(e){this.word(e.value?"true":"false")},t.NullLiteral=function(){this.word("null")},t.NumericLiteral=function(e){const t=this.getPossibleRaw(e),n=this.format.jsescOption,r=e.value+"";n.numbers?this.number((0,i.default)(e.value,n)):null==t?this.number(r):this.format.minified?this.number(t.length<r.length?t:r):this.number(t)},t.StringLiteral=function(e){const t=this.getPossibleRaw(e);if(!this.format.minified&&null!=t)return void this.token(t);const n=this.format.jsescOption;this.format.jsonCompatibleStrings&&(n.json=!0);const r=(0,i.default)(e.value,n);return this.token(r)},t.BigIntLiteral=function(e){const t=this.getPossibleRaw(e);if(!this.format.minified&&null!=t)return void this.token(t);this.token(e.value+"n")},t.DecimalLiteral=function(e){const t=this.getPossibleRaw(e);if(!this.format.minified&&null!=t)return void this.token(t);this.token(e.value+"m")},t.PipelineTopicExpression=function(e){this.print(e.expression,e)},t.PipelineBareFunction=function(e){this.print(e.callee,e)},t.PipelinePrimaryTopicReference=function(){this.token("#")};var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("./node_modules/@babel/types/lib/index.js")),i=(r=n("./node_modules/jsesc/jsesc.js"))&&r.__esModule?r:{default:r};function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}},"./node_modules/@babel/generator/lib/generators/typescript.js":function(e,t,n){"use strict";function r(e,t){!0!==t&&e.token(t)}Object.defineProperty(t,"__esModule",{value:!0}),t.TSTypeAnnotation=function(e){this.token(":"),this.space(),e.optional&&this.token("?");this.print(e.typeAnnotation,e)},t.TSTypeParameterDeclaration=t.TSTypeParameterInstantiation=function(e){this.token("<"),this.printList(e.params,e,{}),this.token(">")},t.TSTypeParameter=function(e){this.word(e.name),e.constraint&&(this.space(),this.word("extends"),this.space(),this.print(e.constraint,e));e.default&&(this.space(),this.token("="),this.space(),this.print(e.default,e))},t.TSParameterProperty=function(e){e.accessibility&&(this.word(e.accessibility),this.space());e.readonly&&(this.word("readonly"),this.space());this._param(e.parameter)},t.TSDeclareFunction=function(e){e.declare&&(this.word("declare"),this.space());this._functionHead(e),this.token(";")},t.TSDeclareMethod=function(e){this._classMethodHead(e),this.token(";")},t.TSQualifiedName=function(e){this.print(e.left,e),this.token("."),this.print(e.right,e)},t.TSCallSignatureDeclaration=function(e){this.tsPrintSignatureDeclarationBase(e),this.token(";")},t.TSConstructSignatureDeclaration=function(e){this.word("new"),this.space(),this.tsPrintSignatureDeclarationBase(e),this.token(";")},t.TSPropertySignature=function(e){const{readonly:t,initializer:n}=e;t&&(this.word("readonly"),this.space());this.tsPrintPropertyOrMethodName(e),this.print(e.typeAnnotation,e),n&&(this.space(),this.token("="),this.space(),this.print(n,e));this.token(";")},t.tsPrintPropertyOrMethodName=function(e){e.computed&&this.token("[");this.print(e.key,e),e.computed&&this.token("]");e.optional&&this.token("?")},t.TSMethodSignature=function(e){this.tsPrintPropertyOrMethodName(e),this.tsPrintSignatureDeclarationBase(e),this.token(";")},t.TSIndexSignature=function(e){const{readonly:t}=e;t&&(this.word("readonly"),this.space());this.token("["),this._parameters(e.parameters,e),this.token("]"),this.print(e.typeAnnotation,e),this.token(";")},t.TSAnyKeyword=function(){this.word("any")},t.TSBigIntKeyword=function(){this.word("bigint")},t.TSUnknownKeyword=function(){this.word("unknown")},t.TSNumberKeyword=function(){this.word("number")},t.TSObjectKeyword=function(){this.word("object")},t.TSBooleanKeyword=function(){this.word("boolean")},t.TSStringKeyword=function(){this.word("string")},t.TSSymbolKeyword=function(){this.word("symbol")},t.TSVoidKeyword=function(){this.word("void")},t.TSUndefinedKeyword=function(){this.word("undefined")},t.TSNullKeyword=function(){this.word("null")},t.TSNeverKeyword=function(){this.word("never")},t.TSIntrinsicKeyword=function(){this.word("intrinsic")},t.TSThisType=function(){this.word("this")},t.TSFunctionType=function(e){this.tsPrintFunctionOrConstructorType(e)},t.TSConstructorType=function(e){this.word("new"),this.space(),this.tsPrintFunctionOrConstructorType(e)},t.tsPrintFunctionOrConstructorType=function(e){const{typeParameters:t,parameters:n}=e;this.print(t,e),this.token("("),this._parameters(n,e),this.token(")"),this.space(),this.token("=>"),this.space(),this.print(e.typeAnnotation.typeAnnotation,e)},t.TSTypeReference=function(e){this.print(e.typeName,e),this.print(e.typeParameters,e)},t.TSTypePredicate=function(e){e.asserts&&(this.word("asserts"),this.space());this.print(e.parameterName),e.typeAnnotation&&(this.space(),this.word("is"),this.space(),this.print(e.typeAnnotation.typeAnnotation))},t.TSTypeQuery=function(e){this.word("typeof"),this.space(),this.print(e.exprName)},t.TSTypeLiteral=function(e){this.tsPrintTypeLiteralOrInterfaceBody(e.members,e)},t.tsPrintTypeLiteralOrInterfaceBody=function(e,t){this.tsPrintBraced(e,t)},t.tsPrintBraced=function(e,t){if(this.token("{"),e.length){this.indent(),this.newline();for(const n of e)this.print(n,t),this.newline();this.dedent(),this.rightBrace()}else this.token("}")},t.TSArrayType=function(e){this.print(e.elementType,e),this.token("[]")},t.TSTupleType=function(e){this.token("["),this.printList(e.elementTypes,e),this.token("]")},t.TSOptionalType=function(e){this.print(e.typeAnnotation,e),this.token("?")},t.TSRestType=function(e){this.token("..."),this.print(e.typeAnnotation,e)},t.TSNamedTupleMember=function(e){this.print(e.label,e),e.optional&&this.token("?");this.token(":"),this.space(),this.print(e.elementType,e)},t.TSUnionType=function(e){this.tsPrintUnionOrIntersectionType(e,"|")},t.TSIntersectionType=function(e){this.tsPrintUnionOrIntersectionType(e,"&")},t.tsPrintUnionOrIntersectionType=function(e,t){this.printJoin(e.types,e,{separator(){this.space(),this.token(t),this.space()}})},t.TSConditionalType=function(e){this.print(e.checkType),this.space(),this.word("extends"),this.space(),this.print(e.extendsType),this.space(),this.token("?"),this.space(),this.print(e.trueType),this.space(),this.token(":"),this.space(),this.print(e.falseType)},t.TSInferType=function(e){this.token("infer"),this.space(),this.print(e.typeParameter)},t.TSParenthesizedType=function(e){this.token("("),this.print(e.typeAnnotation,e),this.token(")")},t.TSTypeOperator=function(e){this.word(e.operator),this.space(),this.print(e.typeAnnotation,e)},t.TSIndexedAccessType=function(e){this.print(e.objectType,e),this.token("["),this.print(e.indexType,e),this.token("]")},t.TSMappedType=function(e){const{nameType:t,optional:n,readonly:o,typeParameter:i}=e;this.token("{"),this.space(),o&&(r(this,o),this.word("readonly"),this.space());this.token("["),this.word(i.name),this.space(),this.word("in"),this.space(),this.print(i.constraint,i),t&&(this.space(),this.word("as"),this.space(),this.print(t,e));this.token("]"),n&&(r(this,n),this.token("?"));this.token(":"),this.space(),this.print(e.typeAnnotation,e),this.space(),this.token("}")},t.TSLiteralType=function(e){this.print(e.literal,e)},t.TSExpressionWithTypeArguments=function(e){this.print(e.expression,e),this.print(e.typeParameters,e)},t.TSInterfaceDeclaration=function(e){const{declare:t,id:n,typeParameters:r,extends:o,body:i}=e;t&&(this.word("declare"),this.space());this.word("interface"),this.space(),this.print(n,e),this.print(r,e),o&&(this.space(),this.word("extends"),this.space(),this.printList(o,e));this.space(),this.print(i,e)},t.TSInterfaceBody=function(e){this.tsPrintTypeLiteralOrInterfaceBody(e.body,e)},t.TSTypeAliasDeclaration=function(e){const{declare:t,id:n,typeParameters:r,typeAnnotation:o}=e;t&&(this.word("declare"),this.space());this.word("type"),this.space(),this.print(n,e),this.print(r,e),this.space(),this.token("="),this.space(),this.print(o,e),this.token(";")},t.TSAsExpression=function(e){const{expression:t,typeAnnotation:n}=e;this.print(t,e),this.space(),this.word("as"),this.space(),this.print(n,e)},t.TSTypeAssertion=function(e){const{typeAnnotation:t,expression:n}=e;this.token("<"),this.print(t,e),this.token(">"),this.space(),this.print(n,e)},t.TSEnumDeclaration=function(e){const{declare:t,const:n,id:r,members:o}=e;t&&(this.word("declare"),this.space());n&&(this.word("const"),this.space());this.word("enum"),this.space(),this.print(r,e),this.space(),this.tsPrintBraced(o,e)},t.TSEnumMember=function(e){const{id:t,initializer:n}=e;this.print(t,e),n&&(this.space(),this.token("="),this.space(),this.print(n,e));this.token(",")},t.TSModuleDeclaration=function(e){const{declare:t,id:n}=e;t&&(this.word("declare"),this.space());e.global||(this.word("Identifier"===n.type?"namespace":"module"),this.space());if(this.print(n,e),!e.body)return void this.token(";");let r=e.body;for(;"TSModuleDeclaration"===r.type;)this.token("."),this.print(r.id,r),r=r.body;this.space(),this.print(r,e)},t.TSModuleBlock=function(e){this.tsPrintBraced(e.body,e)},t.TSImportType=function(e){const{argument:t,qualifier:n,typeParameters:r}=e;this.word("import"),this.token("("),this.print(t,e),this.token(")"),n&&(this.token("."),this.print(n,e));r&&this.print(r,e)},t.TSImportEqualsDeclaration=function(e){const{isExport:t,id:n,moduleReference:r}=e;t&&(this.word("export"),this.space());this.word("import"),this.space(),this.print(n,e),this.space(),this.token("="),this.space(),this.print(r,e),this.token(";")},t.TSExternalModuleReference=function(e){this.token("require("),this.print(e.expression,e),this.token(")")},t.TSNonNullExpression=function(e){this.print(e.expression,e),this.token("!")},t.TSExportAssignment=function(e){this.word("export"),this.space(),this.token("="),this.space(),this.print(e.expression,e),this.token(";")},t.TSNamespaceExportDeclaration=function(e){this.word("export"),this.space(),this.word("as"),this.space(),this.word("namespace"),this.space(),this.print(e.id,e)},t.tsPrintSignatureDeclarationBase=function(e){const{typeParameters:t,parameters:n}=e;this.print(t,e),this.token("("),this._parameters(n,e),this.token(")"),this.print(e.typeAnnotation,e)},t.tsPrintClassMemberModifiers=function(e,t){t&&e.declare&&(this.word("declare"),this.space());e.accessibility&&(this.word(e.accessibility),this.space());e.static&&(this.word("static"),this.space());e.abstract&&(this.word("abstract"),this.space());t&&e.readonly&&(this.word("readonly"),this.space())}},"./node_modules/@babel/generator/lib/index.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){return new s(e,t,n).generate()},t.CodeGenerator=void 0;var r=i(n("./node_modules/@babel/generator/lib/source-map.js")),o=i(n("./node_modules/@babel/generator/lib/printer.js"));function i(e){return e&&e.__esModule?e:{default:e}}class s extends o.default{constructor(e,t={},n){super(function(e,t){const n={auxiliaryCommentBefore:t.auxiliaryCommentBefore,auxiliaryCommentAfter:t.auxiliaryCommentAfter,shouldPrintComment:t.shouldPrintComment,retainLines:t.retainLines,retainFunctionParens:t.retainFunctionParens,comments:null==t.comments||t.comments,compact:t.compact,minified:t.minified,concise:t.concise,jsonCompatibleStrings:t.jsonCompatibleStrings,indent:{adjustMultilineComment:!0,style:"  ",base:0},decoratorsBeforeExport:!!t.decoratorsBeforeExport,jsescOption:Object.assign({quotes:"double",wrap:!0},t.jsescOption),recordAndTupleSyntaxType:t.recordAndTupleSyntaxType};n.minified?(n.compact=!0,n.shouldPrintComment=n.shouldPrintComment||(()=>n.comments)):n.shouldPrintComment=n.shouldPrintComment||(e=>n.comments||e.indexOf("@license")>=0||e.indexOf("@preserve")>=0);"auto"===n.compact&&(n.compact=e.length>5e5,n.compact&&console.error("[BABEL] Note: The code generator has deoptimised the styling of "+t.filename+" as it exceeds the max of 500KB."));n.compact&&(n.indent.adjustMultilineComment=!1);return n}(n,t),t.sourceMaps?new r.default(t,n):null),this.ast=void 0,this.ast=e}generate(){return super.generate(this.ast)}}t.CodeGenerator=class{constructor(e,t,n){this._generator=new s(e,t,n)}generate(){return this._generator.generate()}}},"./node_modules/@babel/generator/lib/node/index.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.needsWhitespace=f,t.needsWhitespaceBefore=function(e,t){return f(e,t,"before")},t.needsWhitespaceAfter=function(e,t){return f(e,t,"after")},t.needsParens=function(e,t,n){if(!t)return!1;if(i.isNewExpression(t)&&t.callee===e&&function e(t){if(i.isCallExpression(t))return!0;return i.isMemberExpression(t)&&e(t.object)}(e))return!0;return p(u,e,t,n)};var r=a(n("./node_modules/@babel/generator/lib/node/whitespace.js")),o=a(n("./node_modules/@babel/generator/lib/node/parentheses.js")),i=a(n("./node_modules/@babel/types/lib/index.js"));function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function a(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}return n.default=e,t&&t.set(e,n),n}function l(e){const t={};function n(e,n){const r=t[e];t[e]=r?function(e,t,o){const i=r(e,t,o);return null==i?n(e,t,o):i}:n}for(const r of Object.keys(e)){const t=i.FLIPPED_ALIAS_KEYS[r];if(t)for(const o of t)n(o,e[r]);else n(r,e[r])}return t}const u=l(o),c=l(r.nodes),d=l(r.list);function p(e,t,n,r){const o=e[t.type];return o?o(t,n,r):null}function f(e,t,n){if(!e)return 0;i.isExpressionStatement(e)&&(e=e.expression);let r=p(c,e,t);if(!r){const o=p(d,e,t);if(o)for(let t=0;t<o.length&&(r=f(o[t],e,n),!r);t++);}return"object"===typeof r&&null!==r&&r[n]||0}},"./node_modules/@babel/generator/lib/node/parentheses.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.NullableTypeAnnotation=function(e,t){return r.isArrayTypeAnnotation(t)},t.FunctionTypeAnnotation=function(e,t,n){return r.isUnionTypeAnnotation(t)||r.isIntersectionTypeAnnotation(t)||r.isArrayTypeAnnotation(t)||r.isTypeAnnotation(t)&&r.isArrowFunctionExpression(n[n.length-3])},t.UpdateExpression=function(e,t){return a(e,t)||s(e,t)},t.ObjectExpression=function(e,t,n){return c(n,{considerArrow:!0})},t.DoExpression=function(e,t,n){return c(n)},t.Binary=function(e,t){if("**"===e.operator&&r.isBinaryExpression(t,{operator:"**"}))return t.left===e;if(s(e,t))return!0;if(a(e,t)||r.isUnaryLike(t)||r.isAwaitExpression(t))return!0;if(r.isBinary(t)){const n=t.operator,o=i[n],s=e.operator,a=i[s];if(o===a&&t.right===e&&!r.isLogicalExpression(t)||o>a)return!0}},t.IntersectionTypeAnnotation=t.UnionTypeAnnotation=function(e,t){return r.isArrayTypeAnnotation(t)||r.isNullableTypeAnnotation(t)||r.isIntersectionTypeAnnotation(t)||r.isUnionTypeAnnotation(t)},t.TSAsExpression=function(){return!0},t.TSTypeAssertion=function(){return!0},t.TSIntersectionType=t.TSUnionType=function(e,t){return r.isTSArrayType(t)||r.isTSOptionalType(t)||r.isTSIntersectionType(t)||r.isTSUnionType(t)||r.isTSRestType(t)},t.TSInferType=function(e,t){return r.isTSArrayType(t)||r.isTSOptionalType(t)},t.BinaryExpression=function(e,t){return"in"===e.operator&&(r.isVariableDeclarator(t)||r.isFor(t))},t.SequenceExpression=function(e,t){if(r.isForStatement(t)||r.isThrowStatement(t)||r.isReturnStatement(t)||r.isIfStatement(t)&&t.test===e||r.isWhileStatement(t)&&t.test===e||r.isForInStatement(t)&&t.right===e||r.isSwitchStatement(t)&&t.discriminant===e||r.isExpressionStatement(t)&&t.expression===e)return!1;return!0},t.AwaitExpression=t.YieldExpression=function(e,t){return r.isBinary(t)||r.isUnaryLike(t)||a(e,t)||r.isAwaitExpression(t)&&r.isYieldExpression(e)||r.isConditionalExpression(t)&&e===t.test||s(e,t)},t.ClassExpression=function(e,t,n){return c(n,{considerDefaultExports:!0})},t.UnaryLike=l,t.FunctionExpression=function(e,t,n){return c(n,{considerDefaultExports:!0})},t.ArrowFunctionExpression=function(e,t){return r.isExportDeclaration(t)||u(e,t)},t.ConditionalExpression=u,t.OptionalCallExpression=t.OptionalMemberExpression=function(e,t){return r.isCallExpression(t,{callee:e})||r.isMemberExpression(t,{object:e})},t.AssignmentExpression=function(e,t,n){return!!r.isObjectPattern(e.left)||u(e,t)},t.LogicalExpression=function(e,t){switch(e.operator){case"||":return!!r.isLogicalExpression(t)&&("??"===t.operator||"&&"===t.operator);case"&&":return r.isLogicalExpression(t,{operator:"??"});case"??":return r.isLogicalExpression(t)&&"??"!==t.operator}};var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var s=r?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(n,i,s):n[i]=e[i]}n.default=e,t&&t.set(e,n);return n}(n("./node_modules/@babel/types/lib/index.js"));function o(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}const i={"||":0,"??":0,"&&":1,"|":2,"^":3,"&":4,"==":5,"===":5,"!=":5,"!==":5,"<":6,">":6,"<=":6,">=":6,in:6,instanceof:6,">>":7,"<<":7,">>>":7,"+":8,"-":8,"*":9,"/":9,"%":9,"**":10},s=(e,t)=>(r.isClassDeclaration(t)||r.isClassExpression(t))&&t.superClass===e,a=(e,t)=>(r.isMemberExpression(t)||r.isOptionalMemberExpression(t))&&t.object===e||(r.isCallExpression(t)||r.isOptionalCallExpression(t)||r.isNewExpression(t))&&t.callee===e||r.isTaggedTemplateExpression(t)&&t.tag===e||r.isTSNonNullExpression(t);function l(e,t){return a(e,t)||r.isBinaryExpression(t,{operator:"**",left:e})||s(e,t)}function u(e,t){return!!(r.isUnaryLike(t)||r.isBinary(t)||r.isConditionalExpression(t,{test:e})||r.isAwaitExpression(t)||r.isTSTypeAssertion(t)||r.isTSAsExpression(t))||l(e,t)}function c(e,{considerArrow:t=!1,considerDefaultExports:n=!1}={}){let o=e.length-1,i=e[o];o--;let s=e[o];for(;o>=0;){if(r.isExpressionStatement(s,{expression:i})||n&&r.isExportDefaultDeclaration(s,{declaration:i})||t&&r.isArrowFunctionExpression(s,{body:i}))return!0;if(!(a(i,s)&&!r.isNewExpression(s)||r.isSequenceExpression(s)&&s.expressions[0]===i||r.isConditional(s,{test:i})||r.isBinary(s,{left:i})||r.isAssignmentExpression(s,{left:i})))return!1;i=s,o--,s=e[o]}return!1}},"./node_modules/@babel/generator/lib/node/whitespace.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.list=t.nodes=void 0;var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var s=r?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(n,i,s):n[i]=e[i]}n.default=e,t&&t.set(e,n);return n}(n("./node_modules/@babel/types/lib/index.js"));function o(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}function i(e,t={}){return r.isMemberExpression(e)||r.isOptionalMemberExpression(e)?(i(e.object,t),e.computed&&i(e.property,t)):r.isBinary(e)||r.isAssignmentExpression(e)?(i(e.left,t),i(e.right,t)):r.isCallExpression(e)||r.isOptionalCallExpression(e)?(t.hasCall=!0,i(e.callee,t)):r.isFunction(e)?t.hasFunction=!0:r.isIdentifier(e)&&(t.hasHelper=t.hasHelper||s(e.callee)),t}function s(e){return r.isMemberExpression(e)?s(e.object)||s(e.property):r.isIdentifier(e)?"require"===e.name||"_"===e.name[0]:r.isCallExpression(e)?s(e.callee):!(!r.isBinary(e)&&!r.isAssignmentExpression(e))&&(r.isIdentifier(e.left)&&s(e.left)||s(e.right))}function a(e){return r.isLiteral(e)||r.isObjectExpression(e)||r.isArrayExpression(e)||r.isIdentifier(e)||r.isMemberExpression(e)}const l={AssignmentExpression(e){const t=i(e.right);if(t.hasCall&&t.hasHelper||t.hasFunction)return{before:t.hasFunction,after:!0}},SwitchCase:(e,t)=>({before:e.consequent.length||t.cases[0]===e,after:!e.consequent.length&&t.cases[t.cases.length-1]===e}),LogicalExpression(e){if(r.isFunction(e.left)||r.isFunction(e.right))return{after:!0}},Literal(e){if("use strict"===e.value)return{after:!0}},CallExpression(e){if(r.isFunction(e.callee)||s(e))return{before:!0,after:!0}},OptionalCallExpression(e){if(r.isFunction(e.callee))return{before:!0,after:!0}},VariableDeclaration(e){for(let t=0;t<e.declarations.length;t++){const n=e.declarations[t];let r=s(n.id)&&!a(n.init);if(!r){const e=i(n.init);r=s(n.init)&&e.hasCall||e.hasFunction}if(r)return{before:!0,after:!0}}},IfStatement(e){if(r.isBlockStatement(e.consequent))return{before:!0,after:!0}}};t.nodes=l,l.ObjectProperty=l.ObjectTypeProperty=l.ObjectMethod=function(e,t){if(t.properties[0]===e)return{before:!0}},l.ObjectTypeCallProperty=function(e,t){var n;if(t.callProperties[0]===e&&!(null==(n=t.properties)?void 0:n.length))return{before:!0}},l.ObjectTypeIndexer=function(e,t){var n,r;if(t.indexers[0]===e&&!(null==(n=t.properties)?void 0:n.length)&&!(null==(r=t.callProperties)?void 0:r.length))return{before:!0}},l.ObjectTypeInternalSlot=function(e,t){var n,r,o;if(t.internalSlots[0]===e&&!(null==(n=t.properties)?void 0:n.length)&&!(null==(r=t.callProperties)?void 0:r.length)&&!(null==(o=t.indexers)?void 0:o.length))return{before:!0}};const u={VariableDeclaration:e=>e.declarations.map(e=>e.init),ArrayExpression:e=>e.elements,ObjectExpression:e=>e.properties};t.list=u,[["Function",!0],["Class",!0],["Loop",!0],["LabeledStatement",!0],["SwitchStatement",!0],["TryStatement",!0]].forEach((function([e,t]){"boolean"===typeof t&&(t={after:t,before:t}),[e].concat(r.FLIPPED_ALIAS_KEYS[e]||[]).forEach((function(e){l[e]=function(){return t}}))}))},"./node_modules/@babel/generator/lib/printer.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=(r=n("./node_modules/@babel/generator/lib/buffer.js"))&&r.__esModule?r:{default:r},i=u(n("./node_modules/@babel/generator/lib/node/index.js")),s=u(n("./node_modules/@babel/types/lib/index.js")),a=u(n("./node_modules/@babel/generator/lib/generators/index.js"));function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function u(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}return n.default=e,t&&t.set(e,n),n}const c=/e/i,d=/\.0+$/,p=/^0[box]/,f=/^\s*[@#]__PURE__\s*$/;class h{constructor(e,t){this.inForStatementInitCounter=0,this._printStack=[],this._indent=0,this._insideAux=!1,this._printedCommentStarts={},this._parenPushNewlineState=null,this._noLineTerminator=!1,this._printAuxAfterOnNextUserNode=!1,this._printedComments=new WeakSet,this._endsWithInteger=!1,this._endsWithWord=!1,this.format=e||{},this._buf=new o.default(t)}generate(e){return this.print(e),this._maybeAddAuxComment(),this._buf.get()}indent(){this.format.compact||this.format.concise||this._indent++}dedent(){this.format.compact||this.format.concise||this._indent--}semicolon(e=!1){this._maybeAddAuxComment(),this._append(";",!e)}rightBrace(){this.format.minified&&this._buf.removeLastSemicolon(),this.token("}")}space(e=!1){this.format.compact||(this._buf.hasContent()&&!this.endsWith(" ")&&!this.endsWith("\n")||e)&&this._space()}word(e){(this._endsWithWord||this.endsWith("/")&&0===e.indexOf("/"))&&this._space(),this._maybeAddAuxComment(),this._append(e),this._endsWithWord=!0}number(e){this.word(e),this._endsWithInteger=Number.isInteger(+e)&&!p.test(e)&&!c.test(e)&&!d.test(e)&&"."!==e[e.length-1]}token(e){("--"===e&&this.endsWith("!")||"+"===e[0]&&this.endsWith("+")||"-"===e[0]&&this.endsWith("-")||"."===e[0]&&this._endsWithInteger)&&this._space(),this._maybeAddAuxComment(),this._append(e)}newline(e){if(!this.format.retainLines&&!this.format.compact)if(this.format.concise)this.space();else if(!this.endsWith("\n\n")&&("number"!==typeof e&&(e=1),e=Math.min(2,e),(this.endsWith("{\n")||this.endsWith(":\n"))&&e--,!(e<=0)))for(let t=0;t<e;t++)this._newline()}endsWith(e){return this._buf.endsWith(e)}removeTrailingNewline(){this._buf.removeTrailingNewline()}exactSource(e,t){this._catchUp("start",e),this._buf.exactSource(e,t)}source(e,t){this._catchUp(e,t),this._buf.source(e,t)}withSource(e,t,n){this._catchUp(e,t),this._buf.withSource(e,t,n)}_space(){this._append(" ",!0)}_newline(){this._append("\n",!0)}_append(e,t=!1){this._maybeAddParen(e),this._maybeIndent(e),t?this._buf.queue(e):this._buf.append(e),this._endsWithWord=!1,this._endsWithInteger=!1}_maybeIndent(e){this._indent&&this.endsWith("\n")&&"\n"!==e[0]&&this._buf.queue(this._getIndent())}_maybeAddParen(e){const t=this._parenPushNewlineState;if(!t)return;let n;for(n=0;n<e.length&&" "===e[n];n++)continue;if(n===e.length)return;const r=e[n];if("\n"!==r){if("/"!==r||n+1===e.length)return void(this._parenPushNewlineState=null);const t=e[n+1];if("*"===t){if(f.test(e.slice(n+2,e.length-2)))return}else if("/"!==t)return void(this._parenPushNewlineState=null)}this.token("("),this.indent(),t.printed=!0}_catchUp(e,t){if(!this.format.retainLines)return;const n=t?t[e]:null;if(null!=(null==n?void 0:n.line)){const e=n.line-this._buf.getCurrentLine();for(let t=0;t<e;t++)this._newline()}}_getIndent(){return this.format.indent.style.repeat(this._indent)}startTerminatorless(e=!1){return e?(this._noLineTerminator=!0,null):this._parenPushNewlineState={printed:!1}}endTerminatorless(e){this._noLineTerminator=!1,(null==e?void 0:e.printed)&&(this.dedent(),this.newline(),this.token(")"))}print(e,t){if(!e)return;const n=this.format.concise;e._compact&&(this.format.concise=!0);const r=this[e.type];if(!r)throw new ReferenceError(`unknown node of type ${JSON.stringify(e.type)} with constructor ${JSON.stringify(null==e?void 0:e.constructor.name)}`);this._printStack.push(e);const o=this._insideAux;this._insideAux=!e.loc,this._maybeAddAuxComment(this._insideAux&&!o);let a=i.needsParens(e,t,this._printStack);this.format.retainFunctionParens&&"FunctionExpression"===e.type&&e.extra&&e.extra.parenthesized&&(a=!0),a&&this.token("("),this._printLeadingComments(e);const l=s.isProgram(e)||s.isFile(e)?null:e.loc;this.withSource("start",l,()=>{r.call(this,e,t)}),this._printTrailingComments(e),a&&this.token(")"),this._printStack.pop(),this.format.concise=n,this._insideAux=o}_maybeAddAuxComment(e){e&&this._printAuxBeforeComment(),this._insideAux||this._printAuxAfterComment()}_printAuxBeforeComment(){if(this._printAuxAfterOnNextUserNode)return;this._printAuxAfterOnNextUserNode=!0;const e=this.format.auxiliaryCommentBefore;e&&this._printComment({type:"CommentBlock",value:e})}_printAuxAfterComment(){if(!this._printAuxAfterOnNextUserNode)return;this._printAuxAfterOnNextUserNode=!1;const e=this.format.auxiliaryCommentAfter;e&&this._printComment({type:"CommentBlock",value:e})}getPossibleRaw(e){const t=e.extra;if(t&&null!=t.raw&&null!=t.rawValue&&e.value===t.rawValue)return t.raw}printJoin(e,t,n={}){if(!(null==e?void 0:e.length))return;n.indent&&this.indent();const r={addNewlines:n.addNewlines};for(let o=0;o<e.length;o++){const i=e[o];i&&(n.statement&&this._printNewline(!0,i,t,r),this.print(i,t),n.iterator&&n.iterator(i,o),n.separator&&o<e.length-1&&n.separator.call(this),n.statement&&this._printNewline(!1,i,t,r))}n.indent&&this.dedent()}printAndIndentOnComments(e,t){const n=e.leadingComments&&e.leadingComments.length>0;n&&this.indent(),this.print(e,t),n&&this.dedent()}printBlock(e){const t=e.body;s.isEmptyStatement(t)||this.space(),this.print(t,e)}_printTrailingComments(e){this._printComments(this._getComments(!1,e))}_printLeadingComments(e){this._printComments(this._getComments(!0,e),!0)}printInnerComments(e,t=!0){var n;(null==(n=e.innerComments)?void 0:n.length)&&(t&&this.indent(),this._printComments(e.innerComments),t&&this.dedent())}printSequence(e,t,n={}){return n.statement=!0,this.printJoin(e,t,n)}printList(e,t,n={}){return null==n.separator&&(n.separator=m),this.printJoin(e,t,n)}_printNewline(e,t,n,r){if(this.format.retainLines||this.format.compact)return;if(this.format.concise)return void this.space();let o=0;if(this._buf.hasContent()){e||o++,r.addNewlines&&(o+=r.addNewlines(e,t)||0);(e?i.needsWhitespaceBefore:i.needsWhitespaceAfter)(t,n)&&o++}this.newline(o)}_getComments(e,t){return t&&(e?t.leadingComments:t.trailingComments)||[]}_printComment(e,t){if(!this.format.shouldPrintComment(e.value))return;if(e.ignore)return;if(this._printedComments.has(e))return;if(this._printedComments.add(e),null!=e.start){if(this._printedCommentStarts[e.start])return;this._printedCommentStarts[e.start]=!0}const n="CommentBlock"===e.type,r=n&&!t&&!this._noLineTerminator;r&&this._buf.hasContent()&&this.newline(1),this.endsWith("[")||this.endsWith("{")||this.space();let o=n||this._noLineTerminator?`/*${e.value}*/`:`//${e.value}\n`;if(n&&this.format.indent.adjustMultilineComment){var i;const t=null==(i=e.loc)?void 0:i.start.column;if(t){const e=new RegExp("\\n\\s{1,"+t+"}","g");o=o.replace(e,"\n")}const n=Math.max(this._getIndent().length,this.format.retainLines?0:this._buf.getCurrentColumn());o=o.replace(/\n(?!$)/g,"\n"+" ".repeat(n))}this.endsWith("/")&&this._space(),this.withSource("start",e.loc,()=>{this._append(o)}),r&&this.newline(1)}_printComments(e,t){if(null==e?void 0:e.length)if(t&&1===e.length&&f.test(e[0].value))this._printComment(e[0],this._buf.hasContent()&&!this.endsWith("\n"));else for(const n of e)this._printComment(n)}printAssertions(e){var t;(null==(t=e.assertions)?void 0:t.length)&&(this.space(),this.word("assert"),this.space(),this.token("{"),this.space(),this.printList(e.assertions,e),this.space(),this.token("}"))}}function m(){this.token(","),this.space()}t.default=h,Object.assign(h.prototype,a)},"./node_modules/@babel/generator/lib/source-map.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=(r=n("./node_modules/@babel/generator/node_modules/source-map/source-map.js"))&&r.__esModule?r:{default:r};t.default=class{constructor(e,t){this._cachedMap=null,this._code=t,this._opts=e,this._rawMappings=[]}get(){if(!this._cachedMap){const e=this._cachedMap=new o.default.SourceMapGenerator({sourceRoot:this._opts.sourceRoot}),t=this._code;"string"===typeof t?e.setSourceContent(this._opts.sourceFileName.replace(/\\/g,"/"),t):"object"===typeof t&&Object.keys(t).forEach(n=>{e.setSourceContent(n.replace(/\\/g,"/"),t[n])}),this._rawMappings.forEach(t=>e.addMapping(t),e)}return this._cachedMap.toJSON()}getRawMappings(){return this._rawMappings.slice()}mark(e,t,n,r,o,i,s){this._lastGenLine!==e&&null===n||(s||this._lastGenLine!==e||this._lastSourceLine!==n||this._lastSourceColumn!==r)&&(this._cachedMap=null,this._lastGenLine=e,this._lastSourceLine=n,this._lastSourceColumn=r,this._rawMappings.push({name:o||void 0,generated:{line:e,column:t},source:null==n?void 0:(i||this._opts.sourceFileName).replace(/\\/g,"/"),original:null==n?void 0:{line:n,column:r}}))}}},"./node_modules/@babel/generator/node_modules/source-map/lib/array-set.js":function(e,t,n){var r=n("./node_modules/@babel/generator/node_modules/source-map/lib/util.js"),o=Object.prototype.hasOwnProperty,i="undefined"!==typeof Map;function s(){this._array=[],this._set=i?new Map:Object.create(null)}s.fromArray=function(e,t){for(var n=new s,r=0,o=e.length;r<o;r++)n.add(e[r],t);return n},s.prototype.size=function(){return i?this._set.size:Object.getOwnPropertyNames(this._set).length},s.prototype.add=function(e,t){var n=i?e:r.toSetString(e),s=i?this.has(e):o.call(this._set,n),a=this._array.length;s&&!t||this._array.push(e),s||(i?this._set.set(e,a):this._set[n]=a)},s.prototype.has=function(e){if(i)return this._set.has(e);var t=r.toSetString(e);return o.call(this._set,t)},s.prototype.indexOf=function(e){if(i){var t=this._set.get(e);if(t>=0)return t}else{var n=r.toSetString(e);if(o.call(this._set,n))return this._set[n]}throw new Error('"'+e+'" is not in the set.')},s.prototype.at=function(e){if(e>=0&&e<this._array.length)return this._array[e];throw new Error("No element indexed by "+e)},s.prototype.toArray=function(){return this._array.slice()},t.ArraySet=s},"./node_modules/@babel/generator/node_modules/source-map/lib/base64-vlq.js":function(e,t,n){var r=n("./node_modules/@babel/generator/node_modules/source-map/lib/base64.js");t.encode=function(e){var t,n="",o=function(e){return e<0?1+(-e<<1):0+(e<<1)}(e);do{t=31&o,(o>>>=5)>0&&(t|=32),n+=r.encode(t)}while(o>0);return n},t.decode=function(e,t,n){var o,i,s,a,l=e.length,u=0,c=0;do{if(t>=l)throw new Error("Expected more digits in base 64 VLQ value.");if(-1===(i=r.decode(e.charCodeAt(t++))))throw new Error("Invalid base64 digit: "+e.charAt(t-1));o=!!(32&i),u+=(i&=31)<<c,c+=5}while(o);n.value=(a=(s=u)>>1,1===(1&s)?-a:a),n.rest=t}},"./node_modules/@babel/generator/node_modules/source-map/lib/base64.js":function(e,t){var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");t.encode=function(e){if(0<=e&&e<n.length)return n[e];throw new TypeError("Must be between 0 and 63: "+e)},t.decode=function(e){return 65<=e&&e<=90?e-65:97<=e&&e<=122?e-97+26:48<=e&&e<=57?e-48+52:43==e?62:47==e?63:-1}},"./node_modules/@babel/generator/node_modules/source-map/lib/binary-search.js":function(e,t){t.GREATEST_LOWER_BOUND=1,t.LEAST_UPPER_BOUND=2,t.search=function(e,n,r,o){if(0===n.length)return-1;var i=function e(n,r,o,i,s,a){var l=Math.floor((r-n)/2)+n,u=s(o,i[l],!0);return 0===u?l:u>0?r-l>1?e(l,r,o,i,s,a):a==t.LEAST_UPPER_BOUND?r<i.length?r:-1:l:l-n>1?e(n,l,o,i,s,a):a==t.LEAST_UPPER_BOUND?l:n<0?-1:n}(-1,n.length,e,n,r,o||t.GREATEST_LOWER_BOUND);if(i<0)return-1;for(;i-1>=0&&0===r(n[i],n[i-1],!0);)--i;return i}},"./node_modules/@babel/generator/node_modules/source-map/lib/mapping-list.js":function(e,t,n){var r=n("./node_modules/@babel/generator/node_modules/source-map/lib/util.js");function o(){this._array=[],this._sorted=!0,this._last={generatedLine:-1,generatedColumn:0}}o.prototype.unsortedForEach=function(e,t){this._array.forEach(e,t)},o.prototype.add=function(e){var t,n,o,i,s,a;t=this._last,n=e,o=t.generatedLine,i=n.generatedLine,s=t.generatedColumn,a=n.generatedColumn,i>o||i==o&&a>=s||r.compareByGeneratedPositionsInflated(t,n)<=0?(this._last=e,this._array.push(e)):(this._sorted=!1,this._array.push(e))},o.prototype.toArray=function(){return this._sorted||(this._array.sort(r.compareByGeneratedPositionsInflated),this._sorted=!0),this._array},t.MappingList=o},"./node_modules/@babel/generator/node_modules/source-map/lib/quick-sort.js":function(e,t){function n(e,t,n){var r=e[t];e[t]=e[n],e[n]=r}function r(e,t,o,i){if(o<i){var s=o-1;n(e,(c=o,d=i,Math.round(c+Math.random()*(d-c))),i);for(var a=e[i],l=o;l<i;l++)t(e[l],a)<=0&&n(e,s+=1,l);n(e,s+1,l);var u=s+1;r(e,t,o,u-1),r(e,t,u+1,i)}var c,d}t.quickSort=function(e,t){r(e,t,0,e.length-1)}},"./node_modules/@babel/generator/node_modules/source-map/lib/source-map-consumer.js":function(e,t,n){var r=n("./node_modules/@babel/generator/node_modules/source-map/lib/util.js"),o=n("./node_modules/@babel/generator/node_modules/source-map/lib/binary-search.js"),i=n("./node_modules/@babel/generator/node_modules/source-map/lib/array-set.js").ArraySet,s=n("./node_modules/@babel/generator/node_modules/source-map/lib/base64-vlq.js"),a=n("./node_modules/@babel/generator/node_modules/source-map/lib/quick-sort.js").quickSort;function l(e){var t=e;return"string"===typeof e&&(t=JSON.parse(e.replace(/^\)\]\}'/,""))),null!=t.sections?new d(t):new u(t)}function u(e){var t=e;"string"===typeof e&&(t=JSON.parse(e.replace(/^\)\]\}'/,"")));var n=r.getArg(t,"version"),o=r.getArg(t,"sources"),s=r.getArg(t,"names",[]),a=r.getArg(t,"sourceRoot",null),l=r.getArg(t,"sourcesContent",null),u=r.getArg(t,"mappings"),c=r.getArg(t,"file",null);if(n!=this._version)throw new Error("Unsupported version: "+n);o=o.map(String).map(r.normalize).map((function(e){return a&&r.isAbsolute(a)&&r.isAbsolute(e)?r.relative(a,e):e})),this._names=i.fromArray(s.map(String),!0),this._sources=i.fromArray(o,!0),this.sourceRoot=a,this.sourcesContent=l,this._mappings=u,this.file=c}function c(){this.generatedLine=0,this.generatedColumn=0,this.source=null,this.originalLine=null,this.originalColumn=null,this.name=null}function d(e){var t=e;"string"===typeof e&&(t=JSON.parse(e.replace(/^\)\]\}'/,"")));var n=r.getArg(t,"version"),o=r.getArg(t,"sections");if(n!=this._version)throw new Error("Unsupported version: "+n);this._sources=new i,this._names=new i;var s={line:-1,column:0};this._sections=o.map((function(e){if(e.url)throw new Error("Support for url field in sections not implemented.");var t=r.getArg(e,"offset"),n=r.getArg(t,"line"),o=r.getArg(t,"column");if(n<s.line||n===s.line&&o<s.column)throw new Error("Section offsets must be ordered and non-overlapping.");return s=t,{generatedOffset:{generatedLine:n+1,generatedColumn:o+1},consumer:new l(r.getArg(e,"map"))}}))}l.fromSourceMap=function(e){return u.fromSourceMap(e)},l.prototype._version=3,l.prototype.__generatedMappings=null,Object.defineProperty(l.prototype,"_generatedMappings",{get:function(){return this.__generatedMappings||this._parseMappings(this._mappings,this.sourceRoot),this.__generatedMappings}}),l.prototype.__originalMappings=null,Object.defineProperty(l.prototype,"_originalMappings",{get:function(){return this.__originalMappings||this._parseMappings(this._mappings,this.sourceRoot),this.__originalMappings}}),l.prototype._charIsMappingSeparator=function(e,t){var n=e.charAt(t);return";"===n||","===n},l.prototype._parseMappings=function(e,t){throw new Error("Subclasses must implement _parseMappings")},l.GENERATED_ORDER=1,l.ORIGINAL_ORDER=2,l.GREATEST_LOWER_BOUND=1,l.LEAST_UPPER_BOUND=2,l.prototype.eachMapping=function(e,t,n){var o,i=t||null;switch(n||l.GENERATED_ORDER){case l.GENERATED_ORDER:o=this._generatedMappings;break;case l.ORIGINAL_ORDER:o=this._originalMappings;break;default:throw new Error("Unknown order of iteration.")}var s=this.sourceRoot;o.map((function(e){var t=null===e.source?null:this._sources.at(e.source);return null!=t&&null!=s&&(t=r.join(s,t)),{source:t,generatedLine:e.generatedLine,generatedColumn:e.generatedColumn,originalLine:e.originalLine,originalColumn:e.originalColumn,name:null===e.name?null:this._names.at(e.name)}}),this).forEach(e,i)},l.prototype.allGeneratedPositionsFor=function(e){var t=r.getArg(e,"line"),n={source:r.getArg(e,"source"),originalLine:t,originalColumn:r.getArg(e,"column",0)};if(null!=this.sourceRoot&&(n.source=r.relative(this.sourceRoot,n.source)),!this._sources.has(n.source))return[];n.source=this._sources.indexOf(n.source);var i=[],s=this._findMapping(n,this._originalMappings,"originalLine","originalColumn",r.compareByOriginalPositions,o.LEAST_UPPER_BOUND);if(s>=0){var a=this._originalMappings[s];if(void 0===e.column)for(var l=a.originalLine;a&&a.originalLine===l;)i.push({line:r.getArg(a,"generatedLine",null),column:r.getArg(a,"generatedColumn",null),lastColumn:r.getArg(a,"lastGeneratedColumn",null)}),a=this._originalMappings[++s];else for(var u=a.originalColumn;a&&a.originalLine===t&&a.originalColumn==u;)i.push({line:r.getArg(a,"generatedLine",null),column:r.getArg(a,"generatedColumn",null),lastColumn:r.getArg(a,"lastGeneratedColumn",null)}),a=this._originalMappings[++s]}return i},t.SourceMapConsumer=l,u.prototype=Object.create(l.prototype),u.prototype.consumer=l,u.fromSourceMap=function(e){var t=Object.create(u.prototype),n=t._names=i.fromArray(e._names.toArray(),!0),o=t._sources=i.fromArray(e._sources.toArray(),!0);t.sourceRoot=e._sourceRoot,t.sourcesContent=e._generateSourcesContent(t._sources.toArray(),t.sourceRoot),t.file=e._file;for(var s=e._mappings.toArray().slice(),l=t.__generatedMappings=[],d=t.__originalMappings=[],p=0,f=s.length;p<f;p++){var h=s[p],m=new c;m.generatedLine=h.generatedLine,m.generatedColumn=h.generatedColumn,h.source&&(m.source=o.indexOf(h.source),m.originalLine=h.originalLine,m.originalColumn=h.originalColumn,h.name&&(m.name=n.indexOf(h.name)),d.push(m)),l.push(m)}return a(t.__originalMappings,r.compareByOriginalPositions),t},u.prototype._version=3,Object.defineProperty(u.prototype,"sources",{get:function(){return this._sources.toArray().map((function(e){return null!=this.sourceRoot?r.join(this.sourceRoot,e):e}),this)}}),u.prototype._parseMappings=function(e,t){for(var n,o,i,l,u,d=1,p=0,f=0,h=0,m=0,g=0,y=e.length,b=0,v={},_={},x=[],E=[];b<y;)if(";"===e.charAt(b))d++,b++,p=0;else if(","===e.charAt(b))b++;else{for((n=new c).generatedLine=d,l=b;l<y&&!this._charIsMappingSeparator(e,l);l++);if(i=v[o=e.slice(b,l)])b+=o.length;else{for(i=[];b<l;)s.decode(e,b,_),u=_.value,b=_.rest,i.push(u);if(2===i.length)throw new Error("Found a source, but no line and column");if(3===i.length)throw new Error("Found a source and line, but no column");v[o]=i}n.generatedColumn=p+i[0],p=n.generatedColumn,i.length>1&&(n.source=m+i[1],m+=i[1],n.originalLine=f+i[2],f=n.originalLine,n.originalLine+=1,n.originalColumn=h+i[3],h=n.originalColumn,i.length>4&&(n.name=g+i[4],g+=i[4])),E.push(n),"number"===typeof n.originalLine&&x.push(n)}a(E,r.compareByGeneratedPositionsDeflated),this.__generatedMappings=E,a(x,r.compareByOriginalPositions),this.__originalMappings=x},u.prototype._findMapping=function(e,t,n,r,i,s){if(e[n]<=0)throw new TypeError("Line must be greater than or equal to 1, got "+e[n]);if(e[r]<0)throw new TypeError("Column must be greater than or equal to 0, got "+e[r]);return o.search(e,t,i,s)},u.prototype.computeColumnSpans=function(){for(var e=0;e<this._generatedMappings.length;++e){var t=this._generatedMappings[e];if(e+1<this._generatedMappings.length){var n=this._generatedMappings[e+1];if(t.generatedLine===n.generatedLine){t.lastGeneratedColumn=n.generatedColumn-1;continue}}t.lastGeneratedColumn=1/0}},u.prototype.originalPositionFor=function(e){var t={generatedLine:r.getArg(e,"line"),generatedColumn:r.getArg(e,"column")},n=this._findMapping(t,this._generatedMappings,"generatedLine","generatedColumn",r.compareByGeneratedPositionsDeflated,r.getArg(e,"bias",l.GREATEST_LOWER_BOUND));if(n>=0){var o=this._generatedMappings[n];if(o.generatedLine===t.generatedLine){var i=r.getArg(o,"source",null);null!==i&&(i=this._sources.at(i),null!=this.sourceRoot&&(i=r.join(this.sourceRoot,i)));var s=r.getArg(o,"name",null);return null!==s&&(s=this._names.at(s)),{source:i,line:r.getArg(o,"originalLine",null),column:r.getArg(o,"originalColumn",null),name:s}}}return{source:null,line:null,column:null,name:null}},u.prototype.hasContentsOfAllSources=function(){return!!this.sourcesContent&&(this.sourcesContent.length>=this._sources.size()&&!this.sourcesContent.some((function(e){return null==e})))},u.prototype.sourceContentFor=function(e,t){if(!this.sourcesContent)return null;if(null!=this.sourceRoot&&(e=r.relative(this.sourceRoot,e)),this._sources.has(e))return this.sourcesContent[this._sources.indexOf(e)];var n;if(null!=this.sourceRoot&&(n=r.urlParse(this.sourceRoot))){var o=e.replace(/^file:\/\//,"");if("file"==n.scheme&&this._sources.has(o))return this.sourcesContent[this._sources.indexOf(o)];if((!n.path||"/"==n.path)&&this._sources.has("/"+e))return this.sourcesContent[this._sources.indexOf("/"+e)]}if(t)return null;throw new Error('"'+e+'" is not in the SourceMap.')},u.prototype.generatedPositionFor=function(e){var t=r.getArg(e,"source");if(null!=this.sourceRoot&&(t=r.relative(this.sourceRoot,t)),!this._sources.has(t))return{line:null,column:null,lastColumn:null};var n={source:t=this._sources.indexOf(t),originalLine:r.getArg(e,"line"),originalColumn:r.getArg(e,"column")},o=this._findMapping(n,this._originalMappings,"originalLine","originalColumn",r.compareByOriginalPositions,r.getArg(e,"bias",l.GREATEST_LOWER_BOUND));if(o>=0){var i=this._originalMappings[o];if(i.source===n.source)return{line:r.getArg(i,"generatedLine",null),column:r.getArg(i,"generatedColumn",null),lastColumn:r.getArg(i,"lastGeneratedColumn",null)}}return{line:null,column:null,lastColumn:null}},t.BasicSourceMapConsumer=u,d.prototype=Object.create(l.prototype),d.prototype.constructor=l,d.prototype._version=3,Object.defineProperty(d.prototype,"sources",{get:function(){for(var e=[],t=0;t<this._sections.length;t++)for(var n=0;n<this._sections[t].consumer.sources.length;n++)e.push(this._sections[t].consumer.sources[n]);return e}}),d.prototype.originalPositionFor=function(e){var t={generatedLine:r.getArg(e,"line"),generatedColumn:r.getArg(e,"column")},n=o.search(t,this._sections,(function(e,t){var n=e.generatedLine-t.generatedOffset.generatedLine;return n||e.generatedColumn-t.generatedOffset.generatedColumn})),i=this._sections[n];return i?i.consumer.originalPositionFor({line:t.generatedLine-(i.generatedOffset.generatedLine-1),column:t.generatedColumn-(i.generatedOffset.generatedLine===t.generatedLine?i.generatedOffset.generatedColumn-1:0),bias:e.bias}):{source:null,line:null,column:null,name:null}},d.prototype.hasContentsOfAllSources=function(){return this._sections.every((function(e){return e.consumer.hasContentsOfAllSources()}))},d.prototype.sourceContentFor=function(e,t){for(var n=0;n<this._sections.length;n++){var r=this._sections[n].consumer.sourceContentFor(e,!0);if(r)return r}if(t)return null;throw new Error('"'+e+'" is not in the SourceMap.')},d.prototype.generatedPositionFor=function(e){for(var t=0;t<this._sections.length;t++){var n=this._sections[t];if(-1!==n.consumer.sources.indexOf(r.getArg(e,"source"))){var o=n.consumer.generatedPositionFor(e);if(o)return{line:o.line+(n.generatedOffset.generatedLine-1),column:o.column+(n.generatedOffset.generatedLine===o.line?n.generatedOffset.generatedColumn-1:0)}}}return{line:null,column:null}},d.prototype._parseMappings=function(e,t){this.__generatedMappings=[],this.__originalMappings=[];for(var n=0;n<this._sections.length;n++)for(var o=this._sections[n],i=o.consumer._generatedMappings,s=0;s<i.length;s++){var l=i[s],u=o.consumer._sources.at(l.source);null!==o.consumer.sourceRoot&&(u=r.join(o.consumer.sourceRoot,u)),this._sources.add(u),u=this._sources.indexOf(u);var c=o.consumer._names.at(l.name);this._names.add(c),c=this._names.indexOf(c);var d={source:u,generatedLine:l.generatedLine+(o.generatedOffset.generatedLine-1),generatedColumn:l.generatedColumn+(o.generatedOffset.generatedLine===l.generatedLine?o.generatedOffset.generatedColumn-1:0),originalLine:l.originalLine,originalColumn:l.originalColumn,name:c};this.__generatedMappings.push(d),"number"===typeof d.originalLine&&this.__originalMappings.push(d)}a(this.__generatedMappings,r.compareByGeneratedPositionsDeflated),a(this.__originalMappings,r.compareByOriginalPositions)},t.IndexedSourceMapConsumer=d},"./node_modules/@babel/generator/node_modules/source-map/lib/source-map-generator.js":function(e,t,n){var r=n("./node_modules/@babel/generator/node_modules/source-map/lib/base64-vlq.js"),o=n("./node_modules/@babel/generator/node_modules/source-map/lib/util.js"),i=n("./node_modules/@babel/generator/node_modules/source-map/lib/array-set.js").ArraySet,s=n("./node_modules/@babel/generator/node_modules/source-map/lib/mapping-list.js").MappingList;function a(e){e||(e={}),this._file=o.getArg(e,"file",null),this._sourceRoot=o.getArg(e,"sourceRoot",null),this._skipValidation=o.getArg(e,"skipValidation",!1),this._sources=new i,this._names=new i,this._mappings=new s,this._sourcesContents=null}a.prototype._version=3,a.fromSourceMap=function(e){var t=e.sourceRoot,n=new a({file:e.file,sourceRoot:t});return e.eachMapping((function(e){var r={generated:{line:e.generatedLine,column:e.generatedColumn}};null!=e.source&&(r.source=e.source,null!=t&&(r.source=o.relative(t,r.source)),r.original={line:e.originalLine,column:e.originalColumn},null!=e.name&&(r.name=e.name)),n.addMapping(r)})),e.sources.forEach((function(t){var r=e.sourceContentFor(t);null!=r&&n.setSourceContent(t,r)})),n},a.prototype.addMapping=function(e){var t=o.getArg(e,"generated"),n=o.getArg(e,"original",null),r=o.getArg(e,"source",null),i=o.getArg(e,"name",null);this._skipValidation||this._validateMapping(t,n,r,i),null!=r&&(r=String(r),this._sources.has(r)||this._sources.add(r)),null!=i&&(i=String(i),this._names.has(i)||this._names.add(i)),this._mappings.add({generatedLine:t.line,generatedColumn:t.column,originalLine:null!=n&&n.line,originalColumn:null!=n&&n.column,source:r,name:i})},a.prototype.setSourceContent=function(e,t){var n=e;null!=this._sourceRoot&&(n=o.relative(this._sourceRoot,n)),null!=t?(this._sourcesContents||(this._sourcesContents=Object.create(null)),this._sourcesContents[o.toSetString(n)]=t):this._sourcesContents&&(delete this._sourcesContents[o.toSetString(n)],0===Object.keys(this._sourcesContents).length&&(this._sourcesContents=null))},a.prototype.applySourceMap=function(e,t,n){var r=t;if(null==t){if(null==e.file)throw new Error('SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map\'s "file" property. Both were omitted.');r=e.file}var s=this._sourceRoot;null!=s&&(r=o.relative(s,r));var a=new i,l=new i;this._mappings.unsortedForEach((function(t){if(t.source===r&&null!=t.originalLine){var i=e.originalPositionFor({line:t.originalLine,column:t.originalColumn});null!=i.source&&(t.source=i.source,null!=n&&(t.source=o.join(n,t.source)),null!=s&&(t.source=o.relative(s,t.source)),t.originalLine=i.line,t.originalColumn=i.column,null!=i.name&&(t.name=i.name))}var u=t.source;null==u||a.has(u)||a.add(u);var c=t.name;null==c||l.has(c)||l.add(c)}),this),this._sources=a,this._names=l,e.sources.forEach((function(t){var r=e.sourceContentFor(t);null!=r&&(null!=n&&(t=o.join(n,t)),null!=s&&(t=o.relative(s,t)),this.setSourceContent(t,r))}),this)},a.prototype._validateMapping=function(e,t,n,r){if(t&&"number"!==typeof t.line&&"number"!==typeof t.column)throw new Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");if((!(e&&"line"in e&&"column"in e&&e.line>0&&e.column>=0)||t||n||r)&&!(e&&"line"in e&&"column"in e&&t&&"line"in t&&"column"in t&&e.line>0&&e.column>=0&&t.line>0&&t.column>=0&&n))throw new Error("Invalid mapping: "+JSON.stringify({generated:e,source:n,original:t,name:r}))},a.prototype._serializeMappings=function(){for(var e,t,n,i,s=0,a=1,l=0,u=0,c=0,d=0,p="",f=this._mappings.toArray(),h=0,m=f.length;h<m;h++){if(e="",(t=f[h]).generatedLine!==a)for(s=0;t.generatedLine!==a;)e+=";",a++;else if(h>0){if(!o.compareByGeneratedPositionsInflated(t,f[h-1]))continue;e+=","}e+=r.encode(t.generatedColumn-s),s=t.generatedColumn,null!=t.source&&(i=this._sources.indexOf(t.source),e+=r.encode(i-d),d=i,e+=r.encode(t.originalLine-1-u),u=t.originalLine-1,e+=r.encode(t.originalColumn-l),l=t.originalColumn,null!=t.name&&(n=this._names.indexOf(t.name),e+=r.encode(n-c),c=n)),p+=e}return p},a.prototype._generateSourcesContent=function(e,t){return e.map((function(e){if(!this._sourcesContents)return null;null!=t&&(e=o.relative(t,e));var n=o.toSetString(e);return Object.prototype.hasOwnProperty.call(this._sourcesContents,n)?this._sourcesContents[n]:null}),this)},a.prototype.toJSON=function(){var e={version:this._version,sources:this._sources.toArray(),names:this._names.toArray(),mappings:this._serializeMappings()};return null!=this._file&&(e.file=this._file),null!=this._sourceRoot&&(e.sourceRoot=this._sourceRoot),this._sourcesContents&&(e.sourcesContent=this._generateSourcesContent(e.sources,e.sourceRoot)),e},a.prototype.toString=function(){return JSON.stringify(this.toJSON())},t.SourceMapGenerator=a},"./node_modules/@babel/generator/node_modules/source-map/lib/source-node.js":function(e,t,n){var r=n("./node_modules/@babel/generator/node_modules/source-map/lib/source-map-generator.js").SourceMapGenerator,o=n("./node_modules/@babel/generator/node_modules/source-map/lib/util.js"),i=/(\r?\n)/,s="$$$isSourceNode$$$";function a(e,t,n,r,o){this.children=[],this.sourceContents={},this.line=null==e?null:e,this.column=null==t?null:t,this.source=null==n?null:n,this.name=null==o?null:o,this[s]=!0,null!=r&&this.add(r)}a.fromStringWithSourceMap=function(e,t,n){var r=new a,s=e.split(i),l=0,u=function(){return e()+(e()||"");function e(){return l<s.length?s[l++]:void 0}},c=1,d=0,p=null;return t.eachMapping((function(e){if(null!==p){if(!(c<e.generatedLine)){var t=(n=s[l]).substr(0,e.generatedColumn-d);return s[l]=n.substr(e.generatedColumn-d),d=e.generatedColumn,f(p,t),void(p=e)}f(p,u()),c++,d=0}for(;c<e.generatedLine;)r.add(u()),c++;if(d<e.generatedColumn){var n=s[l];r.add(n.substr(0,e.generatedColumn)),s[l]=n.substr(e.generatedColumn),d=e.generatedColumn}p=e}),this),l<s.length&&(p&&f(p,u()),r.add(s.splice(l).join(""))),t.sources.forEach((function(e){var i=t.sourceContentFor(e);null!=i&&(null!=n&&(e=o.join(n,e)),r.setSourceContent(e,i))})),r;function f(e,t){if(null===e||void 0===e.source)r.add(t);else{var i=n?o.join(n,e.source):e.source;r.add(new a(e.originalLine,e.originalColumn,i,t,e.name))}}},a.prototype.add=function(e){if(Array.isArray(e))e.forEach((function(e){this.add(e)}),this);else{if(!e[s]&&"string"!==typeof e)throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+e);e&&this.children.push(e)}return this},a.prototype.prepend=function(e){if(Array.isArray(e))for(var t=e.length-1;t>=0;t--)this.prepend(e[t]);else{if(!e[s]&&"string"!==typeof e)throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+e);this.children.unshift(e)}return this},a.prototype.walk=function(e){for(var t,n=0,r=this.children.length;n<r;n++)(t=this.children[n])[s]?t.walk(e):""!==t&&e(t,{source:this.source,line:this.line,column:this.column,name:this.name})},a.prototype.join=function(e){var t,n,r=this.children.length;if(r>0){for(t=[],n=0;n<r-1;n++)t.push(this.children[n]),t.push(e);t.push(this.children[n]),this.children=t}return this},a.prototype.replaceRight=function(e,t){var n=this.children[this.children.length-1];return n[s]?n.replaceRight(e,t):"string"===typeof n?this.children[this.children.length-1]=n.replace(e,t):this.children.push("".replace(e,t)),this},a.prototype.setSourceContent=function(e,t){this.sourceContents[o.toSetString(e)]=t},a.prototype.walkSourceContents=function(e){for(var t=0,n=this.children.length;t<n;t++)this.children[t][s]&&this.children[t].walkSourceContents(e);var r=Object.keys(this.sourceContents);for(t=0,n=r.length;t<n;t++)e(o.fromSetString(r[t]),this.sourceContents[r[t]])},a.prototype.toString=function(){var e="";return this.walk((function(t){e+=t})),e},a.prototype.toStringWithSourceMap=function(e){var t={code:"",line:1,column:0},n=new r(e),o=!1,i=null,s=null,a=null,l=null;return this.walk((function(e,r){t.code+=e,null!==r.source&&null!==r.line&&null!==r.column?(i===r.source&&s===r.line&&a===r.column&&l===r.name||n.addMapping({source:r.source,original:{line:r.line,column:r.column},generated:{line:t.line,column:t.column},name:r.name}),i=r.source,s=r.line,a=r.column,l=r.name,o=!0):o&&(n.addMapping({generated:{line:t.line,column:t.column}}),i=null,o=!1);for(var u=0,c=e.length;u<c;u++)10===e.charCodeAt(u)?(t.line++,t.column=0,u+1===c?(i=null,o=!1):o&&n.addMapping({source:r.source,original:{line:r.line,column:r.column},generated:{line:t.line,column:t.column},name:r.name})):t.column++})),this.walkSourceContents((function(e,t){n.setSourceContent(e,t)})),{code:t.code,map:n}},t.SourceNode=a},"./node_modules/@babel/generator/node_modules/source-map/lib/util.js":function(e,t){t.getArg=function(e,t,n){if(t in e)return e[t];if(3===arguments.length)return n;throw new Error('"'+t+'" is a required argument.')};var n=/^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.]*)(?::(\d+))?(\S*)$/,r=/^data:.+\,.+$/;function o(e){var t=e.match(n);return t?{scheme:t[1],auth:t[2],host:t[3],port:t[4],path:t[5]}:null}function i(e){var t="";return e.scheme&&(t+=e.scheme+":"),t+="//",e.auth&&(t+=e.auth+"@"),e.host&&(t+=e.host),e.port&&(t+=":"+e.port),e.path&&(t+=e.path),t}function s(e){var n=e,r=o(e);if(r){if(!r.path)return e;n=r.path}for(var s,a=t.isAbsolute(n),l=n.split(/\/+/),u=0,c=l.length-1;c>=0;c--)"."===(s=l[c])?l.splice(c,1):".."===s?u++:u>0&&(""===s?(l.splice(c+1,u),u=0):(l.splice(c,2),u--));return""===(n=l.join("/"))&&(n=a?"/":"."),r?(r.path=n,i(r)):n}t.urlParse=o,t.urlGenerate=i,t.normalize=s,t.join=function(e,t){""===e&&(e="."),""===t&&(t=".");var n=o(t),a=o(e);if(a&&(e=a.path||"/"),n&&!n.scheme)return a&&(n.scheme=a.scheme),i(n);if(n||t.match(r))return t;if(a&&!a.host&&!a.path)return a.host=t,i(a);var l="/"===t.charAt(0)?t:s(e.replace(/\/+$/,"")+"/"+t);return a?(a.path=l,i(a)):l},t.isAbsolute=function(e){return"/"===e.charAt(0)||!!e.match(n)},t.relative=function(e,t){""===e&&(e="."),e=e.replace(/\/$/,"");for(var n=0;0!==t.indexOf(e+"/");){var r=e.lastIndexOf("/");if(r<0)return t;if((e=e.slice(0,r)).match(/^([^\/]+:\/)?\/*$/))return t;++n}return Array(n+1).join("../")+t.substr(e.length+1)};var a=!("__proto__"in Object.create(null));function l(e){return e}function u(e){if(!e)return!1;var t=e.length;if(t<9)return!1;if(95!==e.charCodeAt(t-1)||95!==e.charCodeAt(t-2)||111!==e.charCodeAt(t-3)||116!==e.charCodeAt(t-4)||111!==e.charCodeAt(t-5)||114!==e.charCodeAt(t-6)||112!==e.charCodeAt(t-7)||95!==e.charCodeAt(t-8)||95!==e.charCodeAt(t-9))return!1;for(var n=t-10;n>=0;n--)if(36!==e.charCodeAt(n))return!1;return!0}function c(e,t){return e===t?0:e>t?1:-1}t.toSetString=a?l:function(e){return u(e)?"$"+e:e},t.fromSetString=a?l:function(e){return u(e)?e.slice(1):e},t.compareByOriginalPositions=function(e,t,n){var r=e.source-t.source;return 0!==r||0!==(r=e.originalLine-t.originalLine)||0!==(r=e.originalColumn-t.originalColumn)||n||0!==(r=e.generatedColumn-t.generatedColumn)||0!==(r=e.generatedLine-t.generatedLine)?r:e.name-t.name},t.compareByGeneratedPositionsDeflated=function(e,t,n){var r=e.generatedLine-t.generatedLine;return 0!==r||0!==(r=e.generatedColumn-t.generatedColumn)||n||0!==(r=e.source-t.source)||0!==(r=e.originalLine-t.originalLine)||0!==(r=e.originalColumn-t.originalColumn)?r:e.name-t.name},t.compareByGeneratedPositionsInflated=function(e,t){var n=e.generatedLine-t.generatedLine;return 0!==n||0!==(n=e.generatedColumn-t.generatedColumn)||0!==(n=c(e.source,t.source))||0!==(n=e.originalLine-t.originalLine)||0!==(n=e.originalColumn-t.originalColumn)?n:c(e.name,t.name)}},"./node_modules/@babel/generator/node_modules/source-map/source-map.js":function(e,t,n){t.SourceMapGenerator=n("./node_modules/@babel/generator/node_modules/source-map/lib/source-map-generator.js").SourceMapGenerator,t.SourceMapConsumer=n("./node_modules/@babel/generator/node_modules/source-map/lib/source-map-consumer.js").SourceMapConsumer,t.SourceNode=n("./node_modules/@babel/generator/node_modules/source-map/lib/source-node.js").SourceNode},"./node_modules/@babel/helper-function-name/lib/index.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function({node:e,parent:t,scope:n,id:o},s=!1){if(e.id)return;if(!i.isObjectProperty(t)&&!i.isObjectMethod(t,{kind:"method"})||t.computed&&!i.isLiteral(t.key)){if(i.isVariableDeclarator(t)){if(o=t.id,i.isIdentifier(o)&&!s){const t=n.parent.getBinding(o.name);if(t&&t.constant&&n.getBinding(o.name)===t)return e.id=i.cloneNode(o),void(e.id[i.NOT_LOCAL_BINDING]=!0)}}else if(i.isAssignmentExpression(t,{operator:"="}))o=t.left;else if(!o)return}else o=t.key;let a;o&&i.isLiteral(o)?a=function(e){if(i.isNullLiteral(e))return"null";if(i.isRegExpLiteral(e))return`_${e.pattern}_${e.flags}`;if(i.isTemplateLiteral(e))return e.quasis.map(e=>e.value.raw).join("");if(void 0!==e.value)return e.value+"";return""}(o):o&&i.isIdentifier(o)&&(a=o.name);if(void 0===a)return;a=i.toBindingIdentifierName(a),(o=i.identifier(a))[i.NOT_LOCAL_BINDING]=!0;return function(e,t,n,o){if(e.selfReference){if(!o.hasBinding(n.name)||o.hasGlobal(n.name)){if(!i.isFunction(t))return;let e=l;t.generator&&(e=u);const s=e({FUNCTION:t,FUNCTION_ID:n,FUNCTION_KEY:o.generateUidIdentifier(n.name)}).expression,a=s.callee.body.body[0].params;for(let n=0,i=(0,r.default)(t);n<i;n++)a.push(o.generateUidIdentifier("x"));return s}o.rename(n.name)}t.id=n,o.getProgramParent().references[n.name]=!0}(function(e,t,n){const r={selfAssignment:!1,selfReference:!1,outerDeclar:n.getBindingIdentifier(t),references:[],name:t},o=n.getOwnBinding(t);o?"param"===o.kind&&(r.selfReference=!0):(r.outerDeclar||n.hasGlobal(t))&&n.traverse(e,c,r);return r}(e,a,n),e,o,n)||e};var r=a(n("./node_modules/@babel/helper-get-function-arity/lib/index.js")),o=a(n("./node_modules/@babel/template/lib/index.js")),i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("./node_modules/@babel/types/lib/index.js"));function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function a(e){return e&&e.__esModule?e:{default:e}}const l=(0,o.default)("\n  (function (FUNCTION_KEY) {\n    function FUNCTION_ID() {\n      return FUNCTION_KEY.apply(this, arguments);\n    }\n\n    FUNCTION_ID.toString = function () {\n      return FUNCTION_KEY.toString();\n    }\n\n    return FUNCTION_ID;\n  })(FUNCTION)\n"),u=(0,o.default)("\n  (function (FUNCTION_KEY) {\n    function* FUNCTION_ID() {\n      return yield* FUNCTION_KEY.apply(this, arguments);\n    }\n\n    FUNCTION_ID.toString = function () {\n      return FUNCTION_KEY.toString();\n    };\n\n    return FUNCTION_ID;\n  })(FUNCTION)\n"),c={"ReferencedIdentifier|BindingIdentifier"(e,t){if(e.node.name!==t.name)return;e.scope.getBindingIdentifier(t.name)===t.outerDeclar&&(t.selfReference=!0,e.stop())}}},"./node_modules/@babel/helper-get-function-arity/lib/index.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){const t=e.params;for(let n=0;n<t.length;n++){const e=t[n];if(r.isAssignmentPattern(e)||r.isRestElement(e))return n}return t.length};var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var s=r?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(n,i,s):n[i]=e[i]}n.default=e,t&&t.set(e,n);return n}(n("./node_modules/@babel/types/lib/index.js"));function o(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}},"./node_modules/@babel/helper-member-expression-to-functions/lib/index.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){e.traverse(t,Object.assign({},a,n,{memoiser:new i}))};var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var s=r?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(n,i,s):n[i]=e[i]}n.default=e,t&&t.set(e,n);return n}(n("./node_modules/@babel/types/lib/index.js"));function o(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}class i{constructor(){this._map=new WeakMap}has(e){return this._map.has(e)}get(e){if(!this.has(e))return;const t=this._map.get(e),{value:n}=t;return t.count--,0===t.count?r.assignmentExpression("=",n,e):n}set(e,t,n){return this._map.set(e,{count:n,value:t})}}function s(e,t){const{node:n}=e;if(e.isOptionalMemberExpression())return r.memberExpression(t,n.property,n.computed);if(e.isOptionalCallExpression()){const o=e.get("callee");if(e.node.optional&&o.isOptionalMemberExpression()){const{object:i}=o.node,s=e.scope.maybeGenerateMemoised(i)||i;return o.get("object").replaceWith(r.assignmentExpression("=",s,i)),r.callExpression(r.memberExpression(t,r.identifier("call")),[s,...n.arguments])}return r.callExpression(t,n.arguments)}return e.node}const a={memoise(){},handle(e){const{node:t,parent:n,parentPath:o,scope:i}=e;if(e.isOptionalMemberExpression()){if(function(e){for(;e&&!e.isProgram();){const{parentPath:t,container:n,listKey:r}=e,o=t.node;if(r){if(n!==o[r])return!0}else if(n!==o)return!0;e=t}return!1}(e))return;const a=e.find(({node:t,parent:n,parentPath:r})=>r.isOptionalMemberExpression()?n.optional||n.object!==t:!r.isOptionalCallExpression()||(t!==e.node&&n.optional||n.callee!==t));if(i.path.isPattern())return void a.replaceWith(r.callExpression(r.arrowFunctionExpression([],a.node),[]));const l=a.parentPath;if(l.isUpdateExpression({argument:t})||l.isAssignmentExpression({left:t}))throw e.buildCodeFrameError("can't handle assignment");const u=l.isUnaryExpression({operator:"delete"});if(u&&a.isOptionalMemberExpression()&&a.get("property").isPrivateName())throw e.buildCodeFrameError("can't delete a private class element");let c=e;for(;;)if(c.isOptionalMemberExpression()){if(c.node.optional)break;c=c.get("object")}else{if(!c.isOptionalCallExpression())throw new Error("Internal error: unexpected "+c.node.type);if(c.node.optional)break;c=c.get("callee")}const d=c.isOptionalMemberExpression()?"object":"callee",p=c.node[d],f=i.maybeGenerateMemoised(p),h=null!=f?f:p,m=o.isOptionalCallExpression({callee:t}),g=o.isCallExpression({callee:t});c.replaceWith(s(c,h)),m?n.optional?o.replaceWith(this.optionalCall(e,n.arguments)):o.replaceWith(this.call(e,n.arguments)):g?e.replaceWith(this.boundGet(e)):e.replaceWith(this.get(e));let y,b=e.node;for(let t=e;t!==a;){const{parentPath:e}=t;if(e===a&&m&&n.optional){b=e.node;break}b=s(e,b),t=e}const v=a.parentPath;if(r.isMemberExpression(b)&&v.isOptionalCallExpression({callee:a.node,optional:!0})){const{object:t}=b;y=e.scope.maybeGenerateMemoised(t),y&&(b.object=r.assignmentExpression("=",y,t))}let _=a;if(u&&(_=v,b=v.node),_.replaceWith(r.conditionalExpression(r.logicalExpression("||",r.binaryExpression("===",f?r.assignmentExpression("=",r.cloneNode(h),r.cloneNode(p)):r.cloneNode(h),r.nullLiteral()),r.binaryExpression("===",r.cloneNode(h),i.buildUndefinedNode())),u?r.booleanLiteral(!0):i.buildUndefinedNode(),b)),y){const e=v.node;v.replaceWith(r.optionalCallExpression(r.optionalMemberExpression(e.callee,r.identifier("call"),!1,!0),[r.cloneNode(y),...e.arguments],!1))}}else if(o.isUpdateExpression({argument:t})){if(this.simpleSet)return void e.replaceWith(this.simpleSet(e));const{operator:i,prefix:s}=n;this.memoise(e,2);const a=r.binaryExpression(i[0],r.unaryExpression("+",this.get(e)),r.numericLiteral(1));if(s)o.replaceWith(this.set(e,a));else{const{scope:n}=e,i=n.generateUidIdentifierBasedOnNode(t);n.push({id:i}),a.left=r.assignmentExpression("=",r.cloneNode(i),a.left),o.replaceWith(r.sequenceExpression([this.set(e,a),r.cloneNode(i)]))}}else if(o.isAssignmentExpression({left:t})){if(this.simpleSet)return void e.replaceWith(this.simpleSet(e));const{operator:t,right:i}=n;if("="===t)o.replaceWith(this.set(e,i));else{const n=t.slice(0,-1);r.LOGICAL_OPERATORS.includes(n)?(this.memoise(e,1),o.replaceWith(r.logicalExpression(n,this.get(e),this.set(e,i)))):(this.memoise(e,2),o.replaceWith(this.set(e,r.binaryExpression(n,this.get(e),i))))}}else{if(!o.isCallExpression({callee:t}))return o.isOptionalCallExpression({callee:t})?i.path.isPattern()?void o.replaceWith(r.callExpression(r.arrowFunctionExpression([],o.node),[])):void o.replaceWith(this.optionalCall(e,n.arguments)):void(o.isForXStatement({left:t})||o.isObjectProperty({value:t})&&o.parentPath.isObjectPattern()||o.isAssignmentPattern({left:t})&&o.parentPath.isObjectProperty({value:n})&&o.parentPath.parentPath.isObjectPattern()||o.isArrayPattern()||o.isAssignmentPattern({left:t})&&o.parentPath.isArrayPattern()||o.isRestElement()?e.replaceWith(this.destructureSet(e)):e.replaceWith(this.get(e)));o.replaceWith(this.call(e,n.arguments))}}}},"./node_modules/@babel/helper-module-imports/lib/import-builder.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=(r=n("./node_modules/assert/assert.js"))&&r.__esModule?r:{default:r},i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("./node_modules/@babel/types/lib/index.js"));function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}t.default=class{constructor(e,t,n){this._statements=[],this._resultName=null,this._scope=null,this._hub=null,this._scope=t,this._hub=n,this._importedSource=e}done(){return{statements:this._statements,resultName:this._resultName}}import(){return this._statements.push(i.importDeclaration([],i.stringLiteral(this._importedSource))),this}require(){return this._statements.push(i.expressionStatement(i.callExpression(i.identifier("require"),[i.stringLiteral(this._importedSource)]))),this}namespace(e="namespace"){e=this._scope.generateUidIdentifier(e);const t=this._statements[this._statements.length-1];return(0,o.default)("ImportDeclaration"===t.type),(0,o.default)(0===t.specifiers.length),t.specifiers=[i.importNamespaceSpecifier(e)],this._resultName=i.cloneNode(e),this}default(e){e=this._scope.generateUidIdentifier(e);const t=this._statements[this._statements.length-1];return(0,o.default)("ImportDeclaration"===t.type),(0,o.default)(0===t.specifiers.length),t.specifiers=[i.importDefaultSpecifier(e)],this._resultName=i.cloneNode(e),this}named(e,t){if("default"===t)return this.default(e);e=this._scope.generateUidIdentifier(e);const n=this._statements[this._statements.length-1];return(0,o.default)("ImportDeclaration"===n.type),(0,o.default)(0===n.specifiers.length),n.specifiers=[i.importSpecifier(e,i.identifier(t))],this._resultName=i.cloneNode(e),this}var(e){e=this._scope.generateUidIdentifier(e);let t=this._statements[this._statements.length-1];return"ExpressionStatement"!==t.type&&((0,o.default)(this._resultName),t=i.expressionStatement(this._resultName),this._statements.push(t)),this._statements[this._statements.length-1]=i.variableDeclaration("var",[i.variableDeclarator(e,t.expression)]),this._resultName=i.cloneNode(e),this}defaultInterop(){return this._interop(this._hub.addHelper("interopRequireDefault"))}wildcardInterop(){return this._interop(this._hub.addHelper("interopRequireWildcard"))}_interop(e){const t=this._statements[this._statements.length-1];return"ExpressionStatement"===t.type?t.expression=i.callExpression(e,[t.expression]):"VariableDeclaration"===t.type?((0,o.default)(1===t.declarations.length),t.declarations[0].init=i.callExpression(e,[t.declarations[0].init])):o.default.fail("Unexpected type."),this}prop(e){const t=this._statements[this._statements.length-1];return"ExpressionStatement"===t.type?t.expression=i.memberExpression(t.expression,i.identifier(e)):"VariableDeclaration"===t.type?((0,o.default)(1===t.declarations.length),t.declarations[0].init=i.memberExpression(t.declarations[0].init,i.identifier(e))):o.default.fail("Unexpected type:"+t.type),this}read(e){this._resultName=i.memberExpression(this._resultName,i.identifier(e))}}},"./node_modules/@babel/helper-module-imports/lib/import-injector.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n("./node_modules/assert/assert.js")),o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=a();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("./node_modules/@babel/types/lib/index.js")),i=l(n("./node_modules/@babel/helper-module-imports/lib/import-builder.js")),s=l(n("./node_modules/@babel/helper-module-imports/lib/is-module.js"));function a(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return a=function(){return e},e}function l(e){return e&&e.__esModule?e:{default:e}}t.default=class{constructor(e,t,n){this._defaultOpts={importedSource:null,importedType:"commonjs",importedInterop:"babel",importingInterop:"babel",ensureLiveReference:!1,ensureNoContext:!1};const r=e.find(e=>e.isProgram());this._programPath=r,this._programScope=r.scope,this._hub=r.hub,this._defaultOpts=this._applyDefaults(t,n,!0)}addDefault(e,t){return this.addNamed("default",e,t)}addNamed(e,t,n){return(0,r.default)("string"===typeof e),this._generateImport(this._applyDefaults(t,n),e)}addNamespace(e,t){return this._generateImport(this._applyDefaults(e,t),null)}addSideEffect(e,t){return this._generateImport(this._applyDefaults(e,t),!1)}_applyDefaults(e,t,n=!1){const o=[];"string"===typeof e?(o.push({importedSource:e}),o.push(t)):((0,r.default)(!t,"Unexpected secondary arguments."),o.push(e));const i=Object.assign({},this._defaultOpts);for(const r of o)r&&(Object.keys(i).forEach(e=>{void 0!==r[e]&&(i[e]=r[e])}),n||(void 0!==r.nameHint&&(i.nameHint=r.nameHint),void 0!==r.blockHoist&&(i.blockHoist=r.blockHoist)));return i}_generateImport(e,t){const n="default"===t,r=!!t&&!n,a=null===t,{importedSource:l,importedType:u,importedInterop:c,importingInterop:d,ensureLiveReference:p,ensureNoContext:f,nameHint:h,blockHoist:m}=e;let g=h||t;const y=(0,s.default)(this._programPath),b=y&&"node"===d,v=y&&"babel"===d,_=new i.default(l,this._programScope,this._hub);if("es6"===u){if(!b&&!v)throw new Error("Cannot import an ES6 module from CommonJS");_.import(),a?_.namespace(h||l):(n||r)&&_.named(g,t)}else{if("commonjs"!==u)throw new Error(`Unexpected interopType "${u}"`);if("babel"===c)if(b){g="default"!==g?g:l;const e=l+"$es6Default";_.import(),a?_.default(e).var(g||l).wildcardInterop():n?p?_.default(e).var(g||l).defaultInterop().read("default"):_.default(e).var(g).defaultInterop().prop(t):r&&_.default(e).read(t)}else v?(_.import(),a?_.namespace(g||l):(n||r)&&_.named(g,t)):(_.require(),a?_.var(g||l).wildcardInterop():(n||r)&&p?n?(g="default"!==g?g:l,_.var(g).read(t),_.defaultInterop()):_.var(l).read(t):n?_.var(g).defaultInterop().prop(t):r&&_.var(g).prop(t));else if("compiled"===c)b?(_.import(),a?_.default(g||l):(n||r)&&_.default(l).read(g)):v?(_.import(),a?_.namespace(g||l):(n||r)&&_.named(g,t)):(_.require(),a?_.var(g||l):(n||r)&&(p?_.var(l).read(g):_.prop(t).var(g)));else{if("uncompiled"!==c)throw new Error(`Unknown importedInterop "${c}".`);if(n&&p)throw new Error("No live reference for commonjs default");b?(_.import(),a?_.default(g||l):n?_.default(g):r&&_.default(l).read(g)):v?(_.import(),a?_.default(g||l):n?_.default(g):r&&_.named(g,t)):(_.require(),a?_.var(g||l):n?_.var(g):r&&(p?_.var(l).read(g):_.var(g).prop(t)))}}const{statements:x,resultName:E}=_.done();return this._insertStatements(x,m),(n||r)&&f&&"Identifier"!==E.type?o.sequenceExpression([o.numericLiteral(0),E]):E}_insertStatements(e,t=3){e.forEach(e=>{e._blockHoist=t});const n=this._programPath.get("body").find(e=>{const t=e.node._blockHoist;return Number.isFinite(t)&&t<4});n?n.insertBefore(e):this._programPath.unshiftContainer("body",e)}}},"./node_modules/@babel/helper-module-imports/lib/index.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.addDefault=function(e,t,n){return new r.default(e).addDefault(t,n)},t.addNamed=function(e,t,n,o){return new r.default(e).addNamed(t,n,o)},t.addNamespace=function(e,t,n){return new r.default(e).addNamespace(t,n)},t.addSideEffect=function(e,t,n){return new r.default(e).addSideEffect(t,n)},Object.defineProperty(t,"ImportInjector",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"isModule",{enumerable:!0,get:function(){return o.default}});var r=i(n("./node_modules/@babel/helper-module-imports/lib/import-injector.js")),o=i(n("./node_modules/@babel/helper-module-imports/lib/is-module.js"));function i(e){return e&&e.__esModule?e:{default:e}}},"./node_modules/@babel/helper-module-imports/lib/is-module.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){const{sourceType:t}=e.node;if("module"!==t&&"script"!==t)throw e.buildCodeFrameError(`Unknown sourceType "${t}", cannot transform.`);return"module"===e.node.sourceType}},"./node_modules/@babel/helper-module-transforms/lib/get-module-name.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n,r,o;const{filename:i,filenameRelative:s=i,sourceRoot:a=(null!=(n=t.moduleRoot)?n:e.moduleRoot)}=e,{moduleId:l=e.moduleId,moduleIds:u=(null!=(r=e.moduleIds)?r:!!l),getModuleId:c=e.getModuleId,moduleRoot:d=(null!=(o=e.moduleRoot)?o:a)}=t;if(!u)return null;if(null!=l&&!c)return l;let p=null!=d?d+"/":"";if(s){const e=null!=a?new RegExp("^"+a+"/?"):"";p+=s.replace(e,"").replace(/\.(\w*?)$/,"")}return p=p.replace(/\\/g,"/"),c&&c(p)||p}},"./node_modules/@babel/helper-module-transforms/lib/index.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.rewriteModuleStatementsAndPrepareHeader=function(e,{exportName:t,strict:n,allowTopLevelThis:d,strictMode:p,loose:f,noInterop:h,lazy:m,esNamespaceOnly:y}){(0,r.default)((0,a.isModule)(e),"Cannot process module statements in a script"),e.node.sourceType="script";const v=(0,c.default)(e,t,{noInterop:h,loose:f,lazy:m,esNamespaceOnly:y});d||(0,l.default)(e);if((0,u.default)(e,v),!1!==p){e.node.directives.some(e=>"use strict"===e.value.value)||e.unshiftContainer("directives",o.directive(o.directiveLiteral("use strict")))}const _=[];(0,c.hasExports)(v)&&!n&&_.push(function(e,t=!1){return(t?i.default.statement`
        EXPORTS.__esModule = true;
      `:i.default.statement`
        Object.defineProperty(EXPORTS, "__esModule", {
          value: true,
        });
      `)({EXPORTS:e.exportName})}(v,f));const x=function(e,t){const n=Object.create(null);for(const o of t.local.values())for(const e of o.names)n[e]=!0;let r=!1;for(const o of t.source.values()){for(const e of o.reexports.keys())n[e]=!0;for(const e of o.reexportNamespace)n[e]=!0;r=r||o.reexportAll}if(!r||0===Object.keys(n).length)return null;const i=e.scope.generateUidIdentifier("exportNames");return delete n.default,{name:i.name,statement:o.variableDeclaration("var",[o.variableDeclarator(i,o.valueToNode(n))])}}(e,v);x&&(v.exportNameListName=x.name,_.push(x.statement));return _.push(...function(e,t,n=!1){const r=[],i=[];for(const[s,a]of t.local)"import"===a.kind||("hoisted"===a.kind?r.push(b(t,a.names,o.identifier(s))):i.push(...a.names));for(const o of t.source.values()){n||r.push(...g(t,o,n));for(const e of o.reexportNamespace)i.push(e)}return r.push(...(0,s.default)(i,100).map(n=>b(t,n,e.scope.buildUndefinedNode()))),r}(e,v,f)),{meta:v,headers:_}},t.ensureStatementsHoisted=function(e){e.forEach(e=>{e._blockHoist=3})},t.wrapInterop=function(e,t,n){if("none"===n)return null;let r;if("default"===n)r="interopRequireDefault";else{if("namespace"!==n)throw new Error("Unknown interop: "+n);r="interopRequireWildcard"}return o.callExpression(e.hub.addHelper(r),[t])},t.buildNamespaceInitStatements=function(e,t,n=!1){const r=[];let s=o.identifier(t.name);t.lazy&&(s=o.callExpression(s,[]));for(const a of t.importsNamespace)a!==t.name&&r.push(i.default.statement`var NAME = SOURCE;`({NAME:a,SOURCE:o.cloneNode(s)}));n&&r.push(...g(e,t,n));for(const a of t.reexportNamespace)r.push((t.lazy?i.default.statement`
            Object.defineProperty(EXPORTS, "NAME", {
              enumerable: true,
              get: function() {
                return NAMESPACE;
              }
            });
          `:i.default.statement`EXPORTS.NAME = NAMESPACE;`)({EXPORTS:e.exportName,NAME:a,NAMESPACE:o.cloneNode(s)}));if(t.reexportAll){const a=function(e,t,n){return(n?i.default.statement`
        Object.keys(NAMESPACE).forEach(function(key) {
          if (key === "default" || key === "__esModule") return;
          VERIFY_NAME_LIST;
          if (key in EXPORTS && EXPORTS[key] === NAMESPACE[key]) return;

          EXPORTS[key] = NAMESPACE[key];
        });
      `:i.default.statement`
        Object.keys(NAMESPACE).forEach(function(key) {
          if (key === "default" || key === "__esModule") return;
          VERIFY_NAME_LIST;
          if (key in EXPORTS && EXPORTS[key] === NAMESPACE[key]) return;

          Object.defineProperty(EXPORTS, key, {
            enumerable: true,
            get: function() {
              return NAMESPACE[key];
            },
          });
        });
    `)({NAMESPACE:t,EXPORTS:e.exportName,VERIFY_NAME_LIST:e.exportNameListName?i.default`
            if (Object.prototype.hasOwnProperty.call(EXPORTS_LIST, key)) return;
          `({EXPORTS_LIST:e.exportNameListName}):null})}(e,o.cloneNode(s),n);a.loc=t.reexportAll.loc,r.push(a)}return r},Object.defineProperty(t,"isModule",{enumerable:!0,get:function(){return a.isModule}}),Object.defineProperty(t,"rewriteThis",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"hasExports",{enumerable:!0,get:function(){return c.hasExports}}),Object.defineProperty(t,"isSideEffectImport",{enumerable:!0,get:function(){return c.isSideEffectImport}}),Object.defineProperty(t,"getModuleName",{enumerable:!0,get:function(){return d.default}});var r=h(n("./node_modules/assert/assert.js")),o=f(n("./node_modules/@babel/types/lib/index.js")),i=h(n("./node_modules/@babel/template/lib/index.js")),s=h(n("./node_modules/lodash/chunk.js")),a=n("./node_modules/@babel/helper-module-imports/lib/index.js"),l=h(n("./node_modules/@babel/helper-module-transforms/lib/rewrite-this.js")),u=h(n("./node_modules/@babel/helper-module-transforms/lib/rewrite-live-references.js")),c=f(n("./node_modules/@babel/helper-module-transforms/lib/normalize-and-load-metadata.js")),d=h(n("./node_modules/@babel/helper-module-transforms/lib/get-module-name.js"));function p(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return p=function(){return e},e}function f(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=p();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}return n.default=e,t&&t.set(e,n),n}function h(e){return e&&e.__esModule?e:{default:e}}const m={loose:i.default.statement`EXPORTS.EXPORT_NAME = NAMESPACE_IMPORT;`,looseComputed:i.default.statement`EXPORTS["EXPORT_NAME"] = NAMESPACE_IMPORT;`,spec:i.default`
    Object.defineProperty(EXPORTS, "EXPORT_NAME", {
      enumerable: true,
      get: function() {
        return NAMESPACE_IMPORT;
      },
    });
    `},g=(e,t,n)=>{const r=t.lazy?o.callExpression(o.identifier(t.name),[]):o.identifier(t.name),{stringSpecifiers:i}=e;return Array.from(t.reexports,([t,s])=>{let a;a=i.has(s)?o.memberExpression(o.cloneNode(r),o.stringLiteral(s),!0):a=o.memberExpression(o.cloneNode(r),o.identifier(s));const l={EXPORTS:e.exportName,EXPORT_NAME:t,NAMESPACE_IMPORT:a};return n?i.has(t)?m.looseComputed(l):m.loose(l):m.spec(l)})};const y={computed:i.default.expression`EXPORTS["NAME"] = VALUE`,default:i.default.expression`EXPORTS.NAME = VALUE`};function b(e,t,n){const{stringSpecifiers:r,exportName:i}=e;return o.expressionStatement(t.reduce((e,t)=>{const n={EXPORTS:i,NAME:t,VALUE:e};return r.has(t)?y.computed(n):y.default(n)},n))}},"./node_modules/@babel/helper-module-transforms/lib/normalize-and-load-metadata.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.hasExports=function(e){return e.hasExports},t.isSideEffectImport=a,t.default=function(e,t,{noInterop:n=!1,loose:r=!1,lazy:i=!1,esNamespaceOnly:u=!1}={}){t||(t=e.scope.generateUidIdentifier("exports").name);const c=new Set;!function(e){e.get("body").forEach(e=>{e.isExportDefaultDeclaration()&&(0,s.default)(e)})}(e);const{local:d,source:p,hasExports:f}=function(e,{loose:t,lazy:n},r){const i=function(e,t,n){const r=new Map;e.get("body").forEach(e=>{let n;if(e.isImportDeclaration())n="import";else{if(e.isExportDefaultDeclaration()&&(e=e.get("declaration")),e.isExportNamedDeclaration())if(e.node.declaration)e=e.get("declaration");else if(t&&e.node.source&&e.get("source").isStringLiteral())return void e.node.specifiers.forEach(e=>{r.set(e.local.name,"block")});if(e.isFunctionDeclaration())n="hoisted";else if(e.isClassDeclaration())n="block";else if(e.isVariableDeclaration({kind:"var"}))n="var";else{if(!e.isVariableDeclaration())return;n="block"}}Object.keys(e.getOuterBindingIdentifiers()).forEach(e=>{r.set(e,n)})});const o=new Map,i=e=>{const t=e.node.name;let n=o.get(t);if(!n){const i=r.get(t);if(void 0===i)throw e.buildCodeFrameError(`Exporting local "${t}", which is not declared.`);n={names:[],kind:i},o.set(t,n)}return n};return e.get("body").forEach(e=>{if(!e.isExportNamedDeclaration()||!t&&e.node.source){if(e.isExportDefaultDeclaration()){const t=e.get("declaration");if(!t.isFunctionDeclaration()&&!t.isClassDeclaration())throw t.buildCodeFrameError("Unexpected default expression export.");i(t.get("id")).names.push("default")}}else if(e.node.declaration){const t=e.get("declaration"),n=t.getOuterBindingIdentifierPaths();Object.keys(n).forEach(e=>{if("__esModule"===e)throw t.buildCodeFrameError('Illegal export "__esModule".');i(n[e]).names.push(e)})}else e.get("specifiers").forEach(e=>{const t=e.get("local"),r=e.get("exported"),o=i(t),s=l(r,n);if("__esModule"===s)throw r.buildCodeFrameError('Illegal export "__esModule".');o.names.push(s)})}),o}(e,t,r),s=new Map,u=t=>{const n=t.value;let r=s.get(n);return r||(r={name:e.scope.generateUidIdentifier((0,o.basename)(n,(0,o.extname)(n))).name,interop:"none",loc:null,imports:new Map,importsNamespace:new Set,reexports:new Map,reexportNamespace:new Set,reexportAll:null,lazy:!1},s.set(n,r)),r};let c=!1;e.get("body").forEach(e=>{if(e.isImportDeclaration()){const t=u(e.node.source);t.loc||(t.loc=e.node.loc),e.get("specifiers").forEach(e=>{if(e.isImportDefaultSpecifier()){const n=e.get("local").node.name;t.imports.set(n,"default");const r=i.get(n);r&&(i.delete(n),r.names.forEach(e=>{t.reexports.set(e,"default")}))}else if(e.isImportNamespaceSpecifier()){const n=e.get("local").node.name;t.importsNamespace.add(n);const r=i.get(n);r&&(i.delete(n),r.names.forEach(e=>{t.reexportNamespace.add(e)}))}else if(e.isImportSpecifier()){const n=l(e.get("imported"),r),o=e.get("local").node.name;t.imports.set(o,n);const s=i.get(o);s&&(i.delete(o),s.names.forEach(e=>{t.reexports.set(e,n)}))}})}else if(e.isExportAllDeclaration()){c=!0;const t=u(e.node.source);t.loc||(t.loc=e.node.loc),t.reexportAll={loc:e.node.loc}}else if(e.isExportNamedDeclaration()&&e.node.source){c=!0;const t=u(e.node.source);t.loc||(t.loc=e.node.loc),e.get("specifiers").forEach(e=>{if(!e.isExportSpecifier())throw e.buildCodeFrameError("Unexpected export specifier type");const n=l(e.get("local"),r),o=l(e.get("exported"),r);if(t.reexports.set(o,n),"__esModule"===o)throw o.buildCodeFrameError('Illegal export "__esModule".')})}else(e.isExportNamedDeclaration()||e.isExportDefaultDeclaration())&&(c=!0)});for(const o of s.values()){let e=!1,t=!1;o.importsNamespace.size>0&&(e=!0,t=!0),o.reexportAll&&(t=!0);for(const n of o.imports.values())"default"===n?e=!0:t=!0;for(const n of o.reexports.values())"default"===n?e=!0:t=!0;e&&t?o.interop="namespace":e&&(o.interop="default")}for(const[o,l]of s)if(!1!==n&&!a(l)&&!l.reexportAll)if(!0===n)l.lazy=!/\./.test(o);else if(Array.isArray(n))l.lazy=-1!==n.indexOf(o);else{if("function"!==typeof n)throw new Error(".lazy must be a boolean, string array, or function");l.lazy=n(o)}return{hasExports:c,local:i,source:s}}(e,{loose:r,lazy:i},c);!function(e){e.get("body").forEach(e=>{if(e.isImportDeclaration())e.remove();else if(e.isExportNamedDeclaration())e.node.declaration?(e.node.declaration._blockHoist=e.node._blockHoist,e.replaceWith(e.node.declaration)):e.remove();else if(e.isExportDefaultDeclaration()){const t=e.get("declaration");if(!t.isFunctionDeclaration()&&!t.isClassDeclaration())throw t.buildCodeFrameError("Unexpected default expression export.");t._blockHoist=e.node._blockHoist,e.replaceWith(t)}else e.isExportAllDeclaration()&&e.remove()})}(e);for(const[,o]of p)o.importsNamespace.size>0&&(o.name=o.importsNamespace.values().next().value),n?o.interop="none":u&&"namespace"===o.interop&&(o.interop="default");return{exportName:t,exportNameListName:null,hasExports:f,local:d,source:p,stringSpecifiers:c}};var r,o=n("./node_modules/path-browserify/index.js"),i=n("./node_modules/@babel/helper-validator-identifier/lib/index.js"),s=(r=n("./node_modules/@babel/helper-split-export-declaration/lib/index.js"))&&r.__esModule?r:{default:r};function a(e){return 0===e.imports.size&&0===e.importsNamespace.size&&0===e.reexports.size&&0===e.reexportNamespace.size&&!e.reexportAll}function l(e,t){if(e.isIdentifier())return e.node.name;if(e.isStringLiteral()){const n=e.node.value;return(0,i.isIdentifierName)(n)||t.add(n),n}throw new Error("Expected export specifier to be either Identifier or StringLiteral, got "+e.node.type)}},"./node_modules/@babel/helper-module-transforms/lib/rewrite-live-references.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const n=new Map,r=new Map,i=t=>{e.requeue(t)};for(const[o,s]of t.source){for(const[e,t]of s.imports)n.set(e,[o,t,null]);for(const e of s.importsNamespace)n.set(e,[o,null,e])}for(const[o,s]of t.local){let e=r.get(o);e||(e=[],r.set(o,e)),e.push(...s.names)}e.traverse(u,{metadata:t,requeueInParent:i,scope:e.scope,exported:r}),(0,s.default)(e,new Set([...Array.from(n.keys()),...Array.from(r.keys())])),e.traverse(p,{seen:new WeakSet,metadata:t,requeueInParent:i,scope:e.scope,imported:n,exported:r,buildImportReference:([e,n,r],i)=>{const s=t.source.get(e);if(r)return s.lazy&&(i=o.callExpression(i,[])),i;let a=o.identifier(s.name);s.lazy&&(a=o.callExpression(a,[]));const l=t.stringSpecifiers.has(n);return o.memberExpression(a,l?o.stringLiteral(n):o.identifier(n),l)}})};var r=l(n("./node_modules/assert/assert.js")),o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=a();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("./node_modules/@babel/types/lib/index.js")),i=l(n("./node_modules/@babel/template/lib/index.js")),s=l(n("./node_modules/@babel/helper-simple-access/lib/index.js"));function a(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return a=function(){return e},e}function l(e){return e&&e.__esModule?e:{default:e}}const u={Scope(e){e.skip()},ClassDeclaration(e){const{requeueInParent:t,exported:n,metadata:r}=this,{id:i}=e.node;if(!i)throw new Error("Expected class to have a name");const s=i.name,a=n.get(s)||[];if(a.length>0){const n=o.expressionStatement(c(r,a,o.identifier(s)));n._blockHoist=e.node._blockHoist,t(e.insertAfter(n)[0])}},VariableDeclaration(e){const{requeueInParent:t,exported:n,metadata:r}=this;Object.keys(e.getOuterBindingIdentifiers()).forEach(i=>{const s=n.get(i)||[];if(s.length>0){const n=o.expressionStatement(c(r,s,o.identifier(i)));n._blockHoist=e.node._blockHoist,t(e.insertAfter(n)[0])}})}},c=(e,t,n)=>(t||[]).reduce((t,n)=>{const{stringSpecifiers:r}=e,i=r.has(n);return o.assignmentExpression("=",o.memberExpression(o.identifier(e.exportName),i?o.stringLiteral(n):o.identifier(n),i),t)},n),d=e=>i.default.expression.ast`
    (function() {
      throw new Error('"' + '${e}' + '" is read-only.');
    })()
  `,p={ReferencedIdentifier(e){const{seen:t,buildImportReference:n,scope:r,imported:i,requeueInParent:s}=this;if(t.has(e.node))return;t.add(e.node);const a=e.node.name,l=e.scope.getBinding(a);if(r.getBinding(a)!==l)return;const u=i.get(a);if(u){const t=n(u,e.node);if(t.loc=e.node.loc,(e.parentPath.isCallExpression({callee:e.node})||e.parentPath.isOptionalCallExpression({callee:e.node})||e.parentPath.isTaggedTemplateExpression({tag:e.node}))&&o.isMemberExpression(t))e.replaceWith(o.sequenceExpression([o.numericLiteral(0),t]));else if(e.isJSXIdentifier()&&o.isMemberExpression(t)){const{object:n,property:r}=t;e.replaceWith(o.JSXMemberExpression(o.JSXIdentifier(n.name),o.JSXIdentifier(r.name)))}else e.replaceWith(t);s(e),e.skip()}},AssignmentExpression:{exit(e){const{scope:t,seen:n,imported:i,exported:s,requeueInParent:a,buildImportReference:l}=this;if(n.has(e.node))return;n.add(e.node);const u=e.get("left");if(!u.isMemberExpression())if(u.isIdentifier()){const n=u.node.name;if(t.getBinding(n)!==e.scope.getBinding(n))return;const p=s.get(n),f=i.get(n);if((null==p?void 0:p.length)>0||f){(0,r.default)("="===e.node.operator,"Path was not simplified");const t=e.node;f&&(t.left=l(f,t.left),t.right=o.sequenceExpression([t.right,d(n)])),e.replaceWith(c(this.metadata,p,t)),a(e)}}else{const n=u.getOuterBindingIdentifiers(),r=Object.keys(n).filter(n=>t.getBinding(n)===e.scope.getBinding(n)),l=r.find(e=>i.has(e));l&&(e.node.right=o.sequenceExpression([e.node.right,d(l)]));const p=[];if(r.forEach(e=>{const t=s.get(e)||[];t.length>0&&p.push(c(this.metadata,t,o.identifier(e)))}),p.length>0){let t=o.sequenceExpression(p);e.parentPath.isExpressionStatement()&&(t=o.expressionStatement(t),t._blockHoist=e.parentPath.node._blockHoist);a(e.insertAfter(t)[0])}}}},"ForOfStatement|ForInStatement"(e){const{scope:t,node:n}=e,{left:r}=n,{exported:i,scope:s}=this;if(!o.isVariableDeclaration(r)){let n=!1;const a=e.get("body"),l=a.scope;for(const e of Object.keys(o.getOuterBindingIdentifiers(r)))i.get(e)&&s.getBinding(e)===t.getBinding(e)&&(n=!0,l.hasOwnBinding(e)&&l.rename(e));if(!n)return;const u=t.generateUidIdentifierBasedOnNode(r);a.unshiftContainer("body",o.expressionStatement(o.assignmentExpression("=",r,u))),e.get("left").replaceWith(o.variableDeclaration("let",[o.variableDeclarator(o.cloneNode(u))])),t.registerDeclaration(e.get("left"))}}}},"./node_modules/@babel/helper-module-transforms/lib/rewrite-this.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){(0,i.default)(e.node,Object.assign({},l,{noScope:!0}))};var r,o=n("./node_modules/@babel/helper-replace-supers/lib/index.js"),i=(r=n("./node_modules/@babel/traverse/lib/index.js"))&&r.__esModule?r:{default:r},s=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=a();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("./node_modules/@babel/types/lib/index.js"));function a(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return a=function(){return e},e}const l=i.default.visitors.merge([o.environmentVisitor,{ThisExpression(e){e.replaceWith(s.unaryExpression("void",s.numericLiteral(0),!0))}}])},"./node_modules/@babel/helper-optimise-call-expression/lib/index.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n,o){return 1===n.length&&r.isSpreadElement(n[0])&&r.isIdentifier(n[0].argument,{name:"arguments"})?r.callExpression(r.memberExpression(e,r.identifier("apply")),[t,n[0].argument]):o?r.optionalCallExpression(r.optionalMemberExpression(e,r.identifier("call"),!1,!0),[t,...n],!1):r.callExpression(r.memberExpression(e,r.identifier("call")),[t,...n])};var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var s=r?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(n,i,s):n[i]=e[i]}n.default=e,t&&t.set(e,n);return n}(n("./node_modules/@babel/types/lib/index.js"));function o(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}},"./node_modules/@babel/helper-plugin-utils/lib/index.js":function(e,t,n){"use strict";function r(e,t){return Object.prototype.hasOwnProperty.call(e,t)}Object.defineProperty(t,"__esModule",{value:!0}),t.declare=function(e){return(t,n,o)=>(t.assertVersion||(t=Object.assign(function(e){let t=null;"string"===typeof e.version&&/^7\./.test(e.version)&&(t=Object.getPrototypeOf(e),!t||r(t,"version")&&r(t,"transform")&&r(t,"template")&&r(t,"types")||(t=null));return Object.assign({},t,e)}(t),{assertVersion(e){!function(e,t){if("number"===typeof e){if(!Number.isInteger(e))throw new Error("Expected string or integer value.");e=`^${e}.0.0-0`}if("string"!==typeof e)throw new Error("Expected string or integer value.");const n=Error.stackTraceLimit;"number"===typeof n&&n<25&&(Error.stackTraceLimit=25);let r;r="7."===t.slice(0,2)?new Error(`Requires Babel "^7.0.0-beta.41", but was loaded with "${t}". You'll need to update your @babel/core version.`):new Error(`Requires Babel "${e}", but was loaded with "${t}". If you are sure you have a compatible version of @babel/core, it is likely that something in your build process is loading the wrong version. Inspect the stack trace of this error to look for the first entry that doesn't mention "@babel/core" or "babel-core" to see what is calling Babel.`);"number"===typeof n&&(Error.stackTraceLimit=n);throw Object.assign(r,{code:"BABEL_VERSION_UNSUPPORTED",version:t,range:e})}(e,t.version)}})),e(t,n||{},o))}},"./node_modules/@babel/helper-replace-supers/lib/index.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.skipAllButComputedKey=c,t.default=t.environmentVisitor=void 0;var r=l(n("./node_modules/@babel/traverse/lib/index.js")),o=l(n("./node_modules/@babel/helper-member-expression-to-functions/lib/index.js")),i=l(n("./node_modules/@babel/helper-optimise-call-expression/lib/index.js")),s=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=a();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("./node_modules/@babel/types/lib/index.js"));function a(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return a=function(){return e},e}function l(e){return e&&e.__esModule?e:{default:e}}function u(e,t,n,r){e=s.cloneNode(e);const o=t||r?e:s.memberExpression(e,s.identifier("prototype"));return s.callExpression(n.addHelper("getPrototypeOf"),[o])}function c(e){if(!e.node.computed)return void e.skip();const t=s.VISITOR_KEYS[e.type];for(const n of t)"key"!==n&&e.skipKey(n)}const d={[(s.StaticBlock?"StaticBlock|":"")+"ClassPrivateProperty|TypeAnnotation"](e){e.skip()},Function(e){e.isMethod()||e.isArrowFunctionExpression()||e.skip()},"Method|ClassProperty"(e){c(e)}};t.environmentVisitor=d;const p=r.default.visitors.merge([d,{Super(e,t){const{node:n,parentPath:r}=e;r.isMemberExpression({object:n})&&t.handle(r)}}]),f={memoise(e,t){const{scope:n,node:r}=e,{computed:o,property:i}=r;if(!o)return;const s=n.maybeGenerateMemoised(i);s&&this.memoiser.set(i,s,t)},prop(e){const{computed:t,property:n}=e.node;return this.memoiser.has(n)?s.cloneNode(this.memoiser.get(n)):t?s.cloneNode(n):s.stringLiteral(n.name)},get(e){return this._get(e,this._getThisRefs())},_get(e,t){const n=u(this.getObjectRef(),this.isStatic,this.file,this.isPrivateMethod);return s.callExpression(this.file.addHelper("get"),[t.memo?s.sequenceExpression([t.memo,n]):n,this.prop(e),t.this])},_getThisRefs(){if(!this.isDerivedConstructor)return{this:s.thisExpression()};const e=this.scope.generateDeclaredUidIdentifier("thisSuper");return{memo:s.assignmentExpression("=",e,s.thisExpression()),this:s.cloneNode(e)}},set(e,t){const n=this._getThisRefs(),r=u(this.getObjectRef(),this.isStatic,this.file,this.isPrivateMethod);return s.callExpression(this.file.addHelper("set"),[n.memo?s.sequenceExpression([n.memo,r]):r,this.prop(e),t,n.this,s.booleanLiteral(e.isInStrictMode())])},destructureSet(e){throw e.buildCodeFrameError("Destructuring to a super field is not supported yet.")},call(e,t){const n=this._getThisRefs();return(0,i.default)(this._get(e,n),s.cloneNode(n.this),t,!1)},optionalCall(e,t){const n=this._getThisRefs();return(0,i.default)(this._get(e,n),s.cloneNode(n.this),t,!0)}},h=Object.assign({},f,{prop(e){const{property:t}=e.node;return this.memoiser.has(t)?s.cloneNode(this.memoiser.get(t)):s.cloneNode(t)},get(e){const{isStatic:t,superRef:n}=this,{computed:r}=e.node,o=this.prop(e);let i;return i=t?n?s.cloneNode(n):s.memberExpression(s.identifier("Function"),s.identifier("prototype")):n?s.memberExpression(s.cloneNode(n),s.identifier("prototype")):s.memberExpression(s.identifier("Object"),s.identifier("prototype")),s.memberExpression(i,o,r)},set(e,t){const{computed:n}=e.node,r=this.prop(e);return s.assignmentExpression("=",s.memberExpression(s.thisExpression(),r,n),t)},destructureSet(e){const{computed:t}=e.node,n=this.prop(e);return s.memberExpression(s.thisExpression(),n,t)},call(e,t){return(0,i.default)(this.get(e),s.thisExpression(),t,!1)},optionalCall(e,t){return(0,i.default)(this.get(e),s.thisExpression(),t,!0)}});t.default=class{constructor(e){const t=e.methodPath;this.methodPath=t,this.isDerivedConstructor=t.isClassMethod({kind:"constructor"})&&!!e.superRef,this.isStatic=t.isObjectMethod()||t.node.static,this.isPrivateMethod=t.isPrivate()&&t.isMethod(),this.file=e.file,this.superRef=e.superRef,this.isLoose=e.isLoose,this.opts=e}getObjectRef(){return s.cloneNode(this.opts.objectRef||this.opts.getObjectRef())}replace(){const e=this.isLoose?h:f;(0,o.default)(this.methodPath,p,Object.assign({file:this.file,scope:this.methodPath.scope,isDerivedConstructor:this.isDerivedConstructor,isStatic:this.isStatic,isPrivateMethod:this.isPrivateMethod,getObjectRef:this.getObjectRef.bind(this),superRef:this.superRef},e))}}},"./node_modules/@babel/helper-simple-access/lib/index.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){e.traverse(i,{scope:e.scope,bindingNames:t,seen:new WeakSet})};var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var s=r?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(n,i,s):n[i]=e[i]}n.default=e,t&&t.set(e,n);return n}(n("./node_modules/@babel/types/lib/index.js"));function o(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}const i={UpdateExpression:{exit(e){const{scope:t,bindingNames:n}=this,o=e.get("argument");if(!o.isIdentifier())return;const i=o.node.name;if(n.has(i)&&t.getBinding(i)===e.scope.getBinding(i))if(e.parentPath.isExpressionStatement()&&!e.isCompletionRecord()){const t="++"==e.node.operator?"+=":"-=";e.replaceWith(r.assignmentExpression(t,o.node,r.numericLiteral(1)))}else if(e.node.prefix)e.replaceWith(r.assignmentExpression("=",r.identifier(i),r.binaryExpression(e.node.operator[0],r.unaryExpression("+",o.node),r.numericLiteral(1))));else{const t=e.scope.generateUidIdentifierBasedOnNode(o.node,"old"),n=t.name;e.scope.push({id:t});const i=r.binaryExpression(e.node.operator[0],r.identifier(n),r.numericLiteral(1));e.replaceWith(r.sequenceExpression([r.assignmentExpression("=",r.identifier(n),r.unaryExpression("+",o.node)),r.assignmentExpression("=",r.cloneNode(o.node),i),r.identifier(n)]))}}},AssignmentExpression:{exit(e){const{scope:t,seen:n,bindingNames:o}=this;if("="===e.node.operator)return;if(n.has(e.node))return;n.add(e.node);const i=e.get("left");if(!i.isIdentifier())return;const s=i.node.name;o.has(s)&&t.getBinding(s)===e.scope.getBinding(s)&&(e.node.right=r.binaryExpression(e.node.operator.slice(0,-1),r.cloneNode(e.node.left),e.node.right),e.node.operator="=")}}}},"./node_modules/@babel/helper-split-export-declaration/lib/index.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!e.isExportDeclaration())throw new Error("Only export declarations can be split.");const t=e.isExportDefaultDeclaration(),n=e.get("declaration"),o=n.isClassDeclaration();if(t){const t=n.isFunctionDeclaration()||o,i=n.isScope()?n.scope.parent:n.scope;let s=n.node.id,a=!1;s||(a=!0,s=i.generateUidIdentifier("default"),(t||n.isFunctionExpression()||n.isClassExpression())&&(n.node.id=r.cloneNode(s)));const l=t?n:r.variableDeclaration("var",[r.variableDeclarator(r.cloneNode(s),n.node)]),u=r.exportNamedDeclaration(null,[r.exportSpecifier(r.cloneNode(s),r.identifier("default"))]);return e.insertAfter(u),e.replaceWith(l),a&&i.registerDeclaration(e),e}if(e.get("specifiers").length>0)throw new Error("It doesn't make sense to split exported specifiers.");const i=n.getOuterBindingIdentifiers(),s=Object.keys(i).map(e=>r.exportSpecifier(r.identifier(e),r.identifier(e))),a=r.exportNamedDeclaration(null,s);return e.insertAfter(a),e.replaceWith(n.node),e};var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var s=r?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(n,i,s):n[i]=e[i]}n.default=e,t&&t.set(e,n);return n}(n("./node_modules/@babel/types/lib/index.js"));function o(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}},"./node_modules/@babel/helper-validator-identifier/lib/identifier.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isIdentifierStart=c,t.isIdentifierChar=d,t.isIdentifierName=function(e){let t=!0;for(let n=0,r=Array.from(e);n<r.length;n++){const e=r[n].codePointAt(0);if(t){if(!c(e))return!1;t=!1}else if(!d(e))return!1}return!t};let r="\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u037f\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u052f\u0531-\u0556\u0559\u0560-\u0588\u05d0-\u05ea\u05ef-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u0860-\u086a\u08a0-\u08b4\u08b6-\u08c7\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u09fc\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0af9\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c39\u0c3d\u0c58-\u0c5a\u0c60\u0c61\u0c80\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d04-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d54-\u0d56\u0d5f-\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e86-\u0e8a\u0e8c-\u0ea3\u0ea5\u0ea7-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f5\u13f8-\u13fd\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f8\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1878\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191e\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19b0-\u19c9\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1c80-\u1c88\u1c90-\u1cba\u1cbd-\u1cbf\u1ce9-\u1cec\u1cee-\u1cf3\u1cf5\u1cf6\u1cfa\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2118-\u211d\u2124\u2126\u2128\u212a-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309b-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312f\u3131-\u318e\u31a0-\u31bf\u31f0-\u31ff\u3400-\u4dbf\u4e00-\u9ffc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua69d\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua7bf\ua7c2-\ua7ca\ua7f5-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua8fd\ua8fe\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\ua9e0-\ua9e4\ua9e6-\ua9ef\ua9fa-\ua9fe\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa7e-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uab30-\uab5a\uab5c-\uab69\uab70-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc",o="\u200c\u200d\xb7\u0300-\u036f\u0387\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u0669\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7\u06e8\u06ea-\u06ed\u06f0-\u06f9\u0711\u0730-\u074a\u07a6-\u07b0\u07c0-\u07c9\u07eb-\u07f3\u07fd\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u08d3-\u08e1\u08e3-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962\u0963\u0966-\u096f\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09cb-\u09cd\u09d7\u09e2\u09e3\u09e6-\u09ef\u09fe\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a66-\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2\u0ae3\u0ae6-\u0aef\u0afa-\u0aff\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b55-\u0b57\u0b62\u0b63\u0b66-\u0b6f\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0be6-\u0bef\u0c00-\u0c04\u0c3e-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0c66-\u0c6f\u0c81-\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0ce6-\u0cef\u0d00-\u0d03\u0d3b\u0d3c\u0d3e-\u0d44\u0d46-\u0d48\u0d4a-\u0d4d\u0d57\u0d62\u0d63\u0d66-\u0d6f\u0d81-\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0de6-\u0def\u0df2\u0df3\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0e50-\u0e59\u0eb1\u0eb4-\u0ebc\u0ec8-\u0ecd\u0ed0-\u0ed9\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f3e\u0f3f\u0f71-\u0f84\u0f86\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102b-\u103e\u1040-\u1049\u1056-\u1059\u105e-\u1060\u1062-\u1064\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f-\u109d\u135d-\u135f\u1369-\u1371\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b4-\u17d3\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u18a9\u1920-\u192b\u1930-\u193b\u1946-\u194f\u19d0-\u19da\u1a17-\u1a1b\u1a55-\u1a5e\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1ab0-\u1abd\u1abf\u1ac0\u1b00-\u1b04\u1b34-\u1b44\u1b50-\u1b59\u1b6b-\u1b73\u1b80-\u1b82\u1ba1-\u1bad\u1bb0-\u1bb9\u1be6-\u1bf3\u1c24-\u1c37\u1c40-\u1c49\u1c50-\u1c59\u1cd0-\u1cd2\u1cd4-\u1ce8\u1ced\u1cf4\u1cf7-\u1cf9\u1dc0-\u1df9\u1dfb-\u1dff\u203f\u2040\u2054\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua620-\ua629\ua66f\ua674-\ua67d\ua69e\ua69f\ua6f0\ua6f1\ua802\ua806\ua80b\ua823-\ua827\ua82c\ua880\ua881\ua8b4-\ua8c5\ua8d0-\ua8d9\ua8e0-\ua8f1\ua8ff-\ua909\ua926-\ua92d\ua947-\ua953\ua980-\ua983\ua9b3-\ua9c0\ua9d0-\ua9d9\ua9e5\ua9f0-\ua9f9\uaa29-\uaa36\uaa43\uaa4c\uaa4d\uaa50-\uaa59\uaa7b-\uaa7d\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uaaeb-\uaaef\uaaf5\uaaf6\uabe3-\uabea\uabec\uabed\uabf0-\uabf9\ufb1e\ufe00-\ufe0f\ufe20-\ufe2f\ufe33\ufe34\ufe4d-\ufe4f\uff10-\uff19\uff3f";const i=new RegExp("["+r+"]"),s=new RegExp("["+r+o+"]");r=o=null;const a=[0,11,2,25,2,18,2,1,2,14,3,13,35,122,70,52,268,28,4,48,48,31,14,29,6,37,11,29,3,35,5,7,2,4,43,157,19,35,5,35,5,39,9,51,157,310,10,21,11,7,153,5,3,0,2,43,2,1,4,0,3,22,11,22,10,30,66,18,2,1,11,21,11,25,71,55,7,1,65,0,16,3,2,2,2,28,43,28,4,28,36,7,2,27,28,53,11,21,11,18,14,17,111,72,56,50,14,50,14,35,349,41,7,1,79,28,11,0,9,21,107,20,28,22,13,52,76,44,33,24,27,35,30,0,3,0,9,34,4,0,13,47,15,3,22,0,2,0,36,17,2,24,85,6,2,0,2,3,2,14,2,9,8,46,39,7,3,1,3,21,2,6,2,1,2,4,4,0,19,0,13,4,159,52,19,3,21,2,31,47,21,1,2,0,185,46,42,3,37,47,21,0,60,42,14,0,72,26,230,43,117,63,32,7,3,0,3,7,2,1,2,23,16,0,2,0,95,7,3,38,17,0,2,0,29,0,11,39,8,0,22,0,12,45,20,0,35,56,264,8,2,36,18,0,50,29,113,6,2,1,2,37,22,0,26,5,2,1,2,31,15,0,328,18,190,0,80,921,103,110,18,195,2749,1070,4050,582,8634,568,8,30,114,29,19,47,17,3,32,20,6,18,689,63,129,74,6,0,67,12,65,1,2,0,29,6135,9,1237,43,8,8952,286,50,2,18,3,9,395,2309,106,6,12,4,8,8,9,5991,84,2,70,2,1,3,0,3,1,3,3,2,11,2,0,2,6,2,64,2,3,3,7,2,6,2,27,2,3,2,4,2,0,4,6,2,339,3,24,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,7,2357,44,11,6,17,0,370,43,1301,196,60,67,8,0,1205,3,2,26,2,1,2,0,3,0,2,9,2,3,2,0,2,0,7,0,5,0,2,0,2,0,2,2,2,1,2,0,3,0,2,0,2,0,2,0,2,0,2,1,2,0,3,3,2,6,2,3,2,3,2,0,2,9,2,16,6,2,2,4,2,16,4421,42717,35,4148,12,221,3,5761,15,7472,3104,541,1507,4938],l=[509,0,227,0,150,4,294,9,1368,2,2,1,6,3,41,2,5,0,166,1,574,3,9,9,370,1,154,10,176,2,54,14,32,9,16,3,46,10,54,9,7,2,37,13,2,9,6,1,45,0,13,2,49,13,9,3,2,11,83,11,7,0,161,11,6,9,7,3,56,1,2,6,3,1,3,2,10,0,11,1,3,6,4,4,193,17,10,9,5,0,82,19,13,9,214,6,3,8,28,1,83,16,16,9,82,12,9,9,84,14,5,9,243,14,166,9,71,5,2,1,3,3,2,0,2,1,13,9,120,6,3,6,4,0,29,9,41,6,2,3,9,0,10,10,47,15,406,7,2,7,17,9,57,21,2,13,123,5,4,0,2,1,2,6,2,0,9,9,49,4,2,1,2,4,9,9,330,3,19306,9,135,4,60,6,26,9,1014,0,2,54,8,3,82,0,12,1,19628,1,5319,4,4,5,9,7,3,6,31,3,149,2,1418,49,513,54,5,49,9,0,15,0,23,4,2,14,1361,6,2,16,3,6,2,1,2,4,262,6,10,9,419,13,1495,6,110,6,6,9,4759,9,787719,239];function u(e,t){let n=65536;for(let r=0,o=t.length;r<o;r+=2){if(n+=t[r],n>e)return!1;if(n+=t[r+1],n>=e)return!0}return!1}function c(e){return e<65?36===e:e<=90||(e<97?95===e:e<=122||(e<=65535?e>=170&&i.test(String.fromCharCode(e)):u(e,a)))}function d(e){return e<48?36===e:e<58||!(e<65)&&(e<=90||(e<97?95===e:e<=122||(e<=65535?e>=170&&s.test(String.fromCharCode(e)):u(e,a)||u(e,l))))}},"./node_modules/@babel/helper-validator-identifier/lib/index.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isIdentifierName",{enumerable:!0,get:function(){return r.isIdentifierName}}),Object.defineProperty(t,"isIdentifierChar",{enumerable:!0,get:function(){return r.isIdentifierChar}}),Object.defineProperty(t,"isIdentifierStart",{enumerable:!0,get:function(){return r.isIdentifierStart}}),Object.defineProperty(t,"isReservedWord",{enumerable:!0,get:function(){return o.isReservedWord}}),Object.defineProperty(t,"isStrictBindOnlyReservedWord",{enumerable:!0,get:function(){return o.isStrictBindOnlyReservedWord}}),Object.defineProperty(t,"isStrictBindReservedWord",{enumerable:!0,get:function(){return o.isStrictBindReservedWord}}),Object.defineProperty(t,"isStrictReservedWord",{enumerable:!0,get:function(){return o.isStrictReservedWord}}),Object.defineProperty(t,"isKeyword",{enumerable:!0,get:function(){return o.isKeyword}});var r=n("./node_modules/@babel/helper-validator-identifier/lib/identifier.js"),o=n("./node_modules/@babel/helper-validator-identifier/lib/keyword.js")},"./node_modules/@babel/helper-validator-identifier/lib/keyword.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isReservedWord=l,t.isStrictReservedWord=u,t.isStrictBindOnlyReservedWord=c,t.isStrictBindReservedWord=function(e,t){return u(e,t)||c(e)},t.isKeyword=function(e){return i.has(e)};const r=["implements","interface","let","package","private","protected","public","static","yield"],o=["eval","arguments"],i=new Set(["break","case","catch","continue","debugger","default","do","else","finally","for","function","if","return","switch","throw","try","var","const","while","with","new","this","super","class","extends","export","import","null","true","false","in","instanceof","typeof","void","delete"]),s=new Set(r),a=new Set(o);function l(e,t){return t&&"await"===e||"enum"===e}function u(e,t){return l(e,t)||s.has(e)}function c(e){return a.has(e)}},"./node_modules/@babel/helpers/lib/helpers.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=(r=n("./node_modules/@babel/template/lib/index.js"))&&r.__esModule?r:{default:r};const i=Object.create(null);var s=i;t.default=s;const a=e=>t=>({minVersion:e,ast:()=>o.default.program.ast(t)});i.typeof=a("7.0.0-beta.0")`
  export default function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) { return typeof obj; };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype
          ? "symbol"
          : typeof obj;
      };
    }

    return _typeof(obj);
  }
`,i.jsx=a("7.0.0-beta.0")`
  var REACT_ELEMENT_TYPE;

  export default function _createRawReactElement(type, props, key, children) {
    if (!REACT_ELEMENT_TYPE) {
      REACT_ELEMENT_TYPE = (
        typeof Symbol === "function" && Symbol["for"] && Symbol["for"]("react.element")
      ) || 0xeac7;
    }

    var defaultProps = type && type.defaultProps;
    var childrenLength = arguments.length - 3;

    if (!props && childrenLength !== 0) {
      // If we're going to assign props.children, we create a new object now
      // to avoid mutating defaultProps.
      props = {
        children: void 0,
      };
    }

    if (childrenLength === 1) {
      props.children = children;
    } else if (childrenLength > 1) {
      var childArray = new Array(childrenLength);
      for (var i = 0; i < childrenLength; i++) {
        childArray[i] = arguments[i + 3];
      }
      props.children = childArray;
    }

    if (props && defaultProps) {
      for (var propName in defaultProps) {
        if (props[propName] === void 0) {
          props[propName] = defaultProps[propName];
        }
      }
    } else if (!props) {
      props = defaultProps || {};
    }

    return {
      $$typeof: REACT_ELEMENT_TYPE,
      type: type,
      key: key === undefined ? null : '' + key,
      ref: null,
      props: props,
      _owner: null,
    };
  }
`,i.asyncIterator=a("7.0.0-beta.0")`
  export default function _asyncIterator(iterable) {
    var method
    if (typeof Symbol !== "undefined") {
      if (Symbol.asyncIterator) {
        method = iterable[Symbol.asyncIterator]
        if (method != null) return method.call(iterable);
      }
      if (Symbol.iterator) {
        method = iterable[Symbol.iterator]
        if (method != null) return method.call(iterable);
      }
    }
    throw new TypeError("Object is not async iterable");
  }
`,i.AwaitValue=a("7.0.0-beta.0")`
  export default function _AwaitValue(value) {
    this.wrapped = value;
  }
`,i.AsyncGenerator=a("7.0.0-beta.0")`
  import AwaitValue from "AwaitValue";

  export default function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null,
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg)
        var value = result.value;
        var wrappedAwait = value instanceof AwaitValue;

        Promise.resolve(wrappedAwait ? value.wrapped : value).then(
          function (arg) {
            if (wrappedAwait) {
              resume(key === "return" ? "return" : "next", arg);
              return
            }

            settle(result.done ? "return" : "normal", arg);
          },
          function (err) { resume("throw", err); });
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({ value: value, done: true });
          break;
        case "throw":
          front.reject(value);
          break;
        default:
          front.resolve({ value: value, done: false });
          break;
      }

      front = front.next;
      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    // Hide "return" method if generator return is not supported
    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () { return this; };
  }

  AsyncGenerator.prototype.next = function (arg) { return this._invoke("next", arg); };
  AsyncGenerator.prototype.throw = function (arg) { return this._invoke("throw", arg); };
  AsyncGenerator.prototype.return = function (arg) { return this._invoke("return", arg); };
`,i.wrapAsyncGenerator=a("7.0.0-beta.0")`
  import AsyncGenerator from "AsyncGenerator";

  export default function _wrapAsyncGenerator(fn) {
    return function () {
      return new AsyncGenerator(fn.apply(this, arguments));
    };
  }
`,i.awaitAsyncGenerator=a("7.0.0-beta.0")`
  import AwaitValue from "AwaitValue";

  export default function _awaitAsyncGenerator(value) {
    return new AwaitValue(value);
  }
`,i.asyncGeneratorDelegate=a("7.0.0-beta.0")`
  export default function _asyncGeneratorDelegate(inner, awaitWrap) {
    var iter = {}, waiting = false;

    function pump(key, value) {
      waiting = true;
      value = new Promise(function (resolve) { resolve(inner[key](value)); });
      return { done: false, value: awaitWrap(value) };
    };

    if (typeof Symbol === "function" && Symbol.iterator) {
      iter[Symbol.iterator] = function () { return this; };
    }

    iter.next = function (value) {
      if (waiting) {
        waiting = false;
        return value;
      }
      return pump("next", value);
    };

    if (typeof inner.throw === "function") {
      iter.throw = function (value) {
        if (waiting) {
          waiting = false;
          throw value;
        }
        return pump("throw", value);
      };
    }

    if (typeof inner.return === "function") {
      iter.return = function (value) {
        if (waiting) {
          waiting = false;
          return value;
        }
        return pump("return", value);
      };
    }

    return iter;
  }
`,i.asyncToGenerator=a("7.0.0-beta.0")`
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  export default function _asyncToGenerator(fn) {
    return function () {
      var self = this, args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }
`,i.classCallCheck=a("7.0.0-beta.0")`
  export default function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
`,i.createClass=a("7.0.0-beta.0")`
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i ++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  export default function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }
`,i.defineEnumerableProperties=a("7.0.0-beta.0")`
  export default function _defineEnumerableProperties(obj, descs) {
    for (var key in descs) {
      var desc = descs[key];
      desc.configurable = desc.enumerable = true;
      if ("value" in desc) desc.writable = true;
      Object.defineProperty(obj, key, desc);
    }

    // Symbols are not enumerated over by for-in loops. If native
    // Symbols are available, fetch all of the descs object's own
    // symbol properties and define them on our target object too.
    if (Object.getOwnPropertySymbols) {
      var objectSymbols = Object.getOwnPropertySymbols(descs);
      for (var i = 0; i < objectSymbols.length; i++) {
        var sym = objectSymbols[i];
        var desc = descs[sym];
        desc.configurable = desc.enumerable = true;
        if ("value" in desc) desc.writable = true;
        Object.defineProperty(obj, sym, desc);
      }
    }
    return obj;
  }
`,i.defaults=a("7.0.0-beta.0")`
  export default function _defaults(obj, defaults) {
    var keys = Object.getOwnPropertyNames(defaults);
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var value = Object.getOwnPropertyDescriptor(defaults, key);
      if (value && value.configurable && obj[key] === undefined) {
        Object.defineProperty(obj, key, value);
      }
    }
    return obj;
  }
`,i.defineProperty=a("7.0.0-beta.0")`
  export default function _defineProperty(obj, key, value) {
    // Shortcircuit the slow defineProperty path when possible.
    // We are trying to avoid issues where setters defined on the
    // prototype cause side effects under the fast path of simple
    // assignment. By checking for existence of the property with
    // the in operator, we can optimize most of this overhead away.
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
`,i.extends=a("7.0.0-beta.0")`
  export default function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };

    return _extends.apply(this, arguments);
  }
`,i.objectSpread=a("7.0.0-beta.0")`
  import defineProperty from "defineProperty";

  export default function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = (arguments[i] != null) ? Object(arguments[i]) : {};
      var ownKeys = Object.keys(source);
      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }
      ownKeys.forEach(function(key) {
        defineProperty(target, key, source[key]);
      });
    }
    return target;
  }
`,i.objectSpread2=a("7.5.0")`
  import defineProperty from "defineProperty";

  // This function is different to "Reflect.ownKeys". The enumerableOnly
  // filters on symbol properties only. Returned string properties are always
  // enumerable. It is good to use in objectSpread.

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }
    return keys;
  }

  export default function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = (arguments[i] != null) ? arguments[i] : {};
      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(
            target,
            key,
            Object.getOwnPropertyDescriptor(source, key)
          );
        });
      }
    }
    return target;
  }
`,i.inherits=a("7.0.0-beta.0")`
  import setPrototypeOf from "setPrototypeOf";

  export default function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) setPrototypeOf(subClass, superClass);
  }
`,i.inheritsLoose=a("7.0.0-beta.0")`
  export default function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }
`,i.getPrototypeOf=a("7.0.0-beta.0")`
  export default function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function _getPrototypeOf(o) {
          return o.__proto__ || Object.getPrototypeOf(o);
        };
    return _getPrototypeOf(o);
  }
`,i.setPrototypeOf=a("7.0.0-beta.0")`
  export default function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }
`,i.isNativeReflectConstruct=a("7.9.0")`
  export default function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;

    // core-js@3
    if (Reflect.construct.sham) return false;

    // Proxy can't be polyfilled. Every browser implemented
    // proxies before or at the same time as Reflect.construct,
    // so if they support Proxy they also support Reflect.construct.
    if (typeof Proxy === "function") return true;

    // Since Reflect.construct can't be properly polyfilled, some
    // implementations (e.g. core-js@2) don't set the correct internal slots.
    // Those polyfills don't allow us to subclass built-ins, so we need to
    // use our fallback implementation.
    try {
      // If the internal slots aren't set, this throws an error similar to
      //   TypeError: this is not a Date object.
      Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
      return true;
    } catch (e) {
      return false;
    }
  }
`,i.construct=a("7.0.0-beta.0")`
  import setPrototypeOf from "setPrototypeOf";
  import isNativeReflectConstruct from "isNativeReflectConstruct";

  export default function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      // NOTE: If Parent !== Class, the correct __proto__ is set *after*
      //       calling the constructor.
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }
    // Avoid issues with Class being present but undefined when it wasn't
    // present in the original call.
    return _construct.apply(null, arguments);
  }
`,i.isNativeFunction=a("7.0.0-beta.0")`
  export default function _isNativeFunction(fn) {
    // Note: This function returns "true" for core-js functions.
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }
`,i.wrapNativeSuper=a("7.0.0-beta.0")`
  import getPrototypeOf from "getPrototypeOf";
  import setPrototypeOf from "setPrototypeOf";
  import isNativeFunction from "isNativeFunction";
  import construct from "construct";

  export default function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !isNativeFunction(Class)) return Class;
      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }
      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);
        _cache.set(Class, Wrapper);
      }
      function Wrapper() {
        return construct(Class, arguments, getPrototypeOf(this).constructor)
      }
      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true,
        }
      });

      return setPrototypeOf(Wrapper, Class);
    }

    return _wrapNativeSuper(Class)
  }
`,i.instanceof=a("7.0.0-beta.0")`
  export default function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
      return !!right[Symbol.hasInstance](left);
    } else {
      return left instanceof right;
    }
  }
`,i.interopRequireDefault=a("7.0.0-beta.0")`
  export default function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
`,i.interopRequireWildcard=a("7.0.0-beta.0")`
  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;

    var cache = new WeakMap();
    _getRequireWildcardCache = function () { return cache; };
    return cache;
  }

  export default function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }

    if (obj === null || (typeof obj !== "object" && typeof obj !== "function")) {
      return { default: obj }
    }

    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }

    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor
          ? Object.getOwnPropertyDescriptor(obj, key)
          : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    newObj.default = obj;
    if (cache) {
      cache.set(obj, newObj);
    }
    return newObj;
  }
`,i.newArrowCheck=a("7.0.0-beta.0")`
  export default function _newArrowCheck(innerThis, boundThis) {
    if (innerThis !== boundThis) {
      throw new TypeError("Cannot instantiate an arrow function");
    }
  }
`,i.objectDestructuringEmpty=a("7.0.0-beta.0")`
  export default function _objectDestructuringEmpty(obj) {
    if (obj == null) throw new TypeError("Cannot destructure undefined");
  }
`,i.objectWithoutPropertiesLoose=a("7.0.0-beta.0")`
  export default function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};

    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }
`,i.objectWithoutProperties=a("7.0.0-beta.0")`
  import objectWithoutPropertiesLoose from "objectWithoutPropertiesLoose";

  export default function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = objectWithoutPropertiesLoose(source, excluded);
    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }
`,i.assertThisInitialized=a("7.0.0-beta.0")`
  export default function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
`,i.possibleConstructorReturn=a("7.0.0-beta.0")`
  import assertThisInitialized from "assertThisInitialized";

  export default function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }
    return assertThisInitialized(self);
  }
`,i.createSuper=a("7.9.0")`
  import getPrototypeOf from "getPrototypeOf";
  import isNativeReflectConstruct from "isNativeReflectConstruct";
  import possibleConstructorReturn from "possibleConstructorReturn";

  export default function _createSuper(Derived) {
    var hasNativeReflectConstruct = isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = getPrototypeOf(Derived), result;
      if (hasNativeReflectConstruct) {
        // NOTE: This doesn't work if this.__proto__.constructor has been modified.
        var NewTarget = getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return possibleConstructorReturn(this, result);
    }
  }
 `,i.superPropBase=a("7.0.0-beta.0")`
  import getPrototypeOf from "getPrototypeOf";

  export default function _superPropBase(object, property) {
    // Yes, this throws if object is null to being with, that's on purpose.
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = getPrototypeOf(object);
      if (object === null) break;
    }
    return object;
  }
`,i.get=a("7.0.0-beta.0")`
  import superPropBase from "superPropBase";

  export default function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = superPropBase(target, property);

        if (!base) return;

        var desc = Object.getOwnPropertyDescriptor(base, property);
        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }
    return _get(target, property, receiver || target);
  }
`,i.set=a("7.0.0-beta.0")`
  import superPropBase from "superPropBase";
  import defineProperty from "defineProperty";

  function set(target, property, value, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.set) {
      set = Reflect.set;
    } else {
      set = function set(target, property, value, receiver) {
        var base = superPropBase(target, property);
        var desc;

        if (base) {
          desc = Object.getOwnPropertyDescriptor(base, property);
          if (desc.set) {
            desc.set.call(receiver, value);
            return true;
          } else if (!desc.writable) {
            // Both getter and non-writable fall into this.
            return false;
          }
        }

        // Without a super that defines the property, spec boils down to
        // "define on receiver" for some reason.
        desc = Object.getOwnPropertyDescriptor(receiver, property);
        if (desc) {
          if (!desc.writable) {
            // Setter, getter, and non-writable fall into this.
            return false;
          }

          desc.value = value;
          Object.defineProperty(receiver, property, desc);
        } else {
          // Avoid setters that may be defined on Sub's prototype, but not on
          // the instance.
          defineProperty(receiver, property, value);
        }

        return true;
      };
    }

    return set(target, property, value, receiver);
  }

  export default function _set(target, property, value, receiver, isStrict) {
    var s = set(target, property, value, receiver || target);
    if (!s && isStrict) {
      throw new Error('failed to set property');
    }

    return value;
  }
`,i.taggedTemplateLiteral=a("7.0.0-beta.0")`
  export default function _taggedTemplateLiteral(strings, raw) {
    if (!raw) { raw = strings.slice(0); }
    return Object.freeze(Object.defineProperties(strings, {
        raw: { value: Object.freeze(raw) }
    }));
  }
`,i.taggedTemplateLiteralLoose=a("7.0.0-beta.0")`
  export default function _taggedTemplateLiteralLoose(strings, raw) {
    if (!raw) { raw = strings.slice(0); }
    strings.raw = raw;
    return strings;
  }
`,i.readOnlyError=a("7.0.0-beta.0")`
  export default function _readOnlyError(name) {
    throw new TypeError("\\"" + name + "\\" is read-only");
  }
`,i.classNameTDZError=a("7.0.0-beta.0")`
  export default function _classNameTDZError(name) {
    throw new Error("Class \\"" + name + "\\" cannot be referenced in computed property keys.");
  }
`,i.temporalUndefined=a("7.0.0-beta.0")`
  // This function isn't mean to be called, but to be used as a reference.
  // We can't use a normal object because it isn't hoisted.
  export default function _temporalUndefined() {}
`,i.tdz=a("7.5.5")`
  export default function _tdzError(name) {
    throw new ReferenceError(name + " is not defined - temporal dead zone");
  }
`,i.temporalRef=a("7.0.0-beta.0")`
  import undef from "temporalUndefined";
  import err from "tdz";

  export default function _temporalRef(val, name) {
    return val === undef ? err(name) : val;
  }
`,i.slicedToArray=a("7.0.0-beta.0")`
  import arrayWithHoles from "arrayWithHoles";
  import iterableToArrayLimit from "iterableToArrayLimit";
  import unsupportedIterableToArray from "unsupportedIterableToArray";
  import nonIterableRest from "nonIterableRest";

  export default function _slicedToArray(arr, i) {
    return (
      arrayWithHoles(arr) ||
      iterableToArrayLimit(arr, i) ||
      unsupportedIterableToArray(arr, i) ||
      nonIterableRest()
    );
  }
`,i.slicedToArrayLoose=a("7.0.0-beta.0")`
  import arrayWithHoles from "arrayWithHoles";
  import iterableToArrayLimitLoose from "iterableToArrayLimitLoose";
  import unsupportedIterableToArray from "unsupportedIterableToArray";
  import nonIterableRest from "nonIterableRest";

  export default function _slicedToArrayLoose(arr, i) {
    return (
      arrayWithHoles(arr) ||
      iterableToArrayLimitLoose(arr, i) ||
      unsupportedIterableToArray(arr, i) ||
      nonIterableRest()
    );
  }
`,i.toArray=a("7.0.0-beta.0")`
  import arrayWithHoles from "arrayWithHoles";
  import iterableToArray from "iterableToArray";
  import unsupportedIterableToArray from "unsupportedIterableToArray";
  import nonIterableRest from "nonIterableRest";

  export default function _toArray(arr) {
    return (
      arrayWithHoles(arr) ||
      iterableToArray(arr) ||
      unsupportedIterableToArray(arr) ||
      nonIterableRest()
    );
  }
`,i.toConsumableArray=a("7.0.0-beta.0")`
  import arrayWithoutHoles from "arrayWithoutHoles";
  import iterableToArray from "iterableToArray";
  import unsupportedIterableToArray from "unsupportedIterableToArray";
  import nonIterableSpread from "nonIterableSpread";

  export default function _toConsumableArray(arr) {
    return (
      arrayWithoutHoles(arr) ||
      iterableToArray(arr) ||
      unsupportedIterableToArray(arr) ||
      nonIterableSpread()
    );
  }
`,i.arrayWithoutHoles=a("7.0.0-beta.0")`
  import arrayLikeToArray from "arrayLikeToArray";

  export default function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return arrayLikeToArray(arr);
  }
`,i.arrayWithHoles=a("7.0.0-beta.0")`
  export default function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
`,i.maybeArrayLike=a("7.9.0")`
  import arrayLikeToArray from "arrayLikeToArray";

  export default function _maybeArrayLike(next, arr, i) {
    if (arr && !Array.isArray(arr) && typeof arr.length === "number") {
      var len = arr.length;
      return arrayLikeToArray(arr, i !== void 0 && i < len ? i : len);
    }
    return next(arr, i);
  }
`,i.iterableToArray=a("7.0.0-beta.0")`
  export default function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }
`,i.iterableToArrayLimit=a("7.0.0-beta.0")`
  export default function _iterableToArrayLimit(arr, i) {
    // this is an expanded form of \`for...of\` that properly supports abrupt completions of
    // iterators etc. variable names have been minimised to reduce the size of this massive
    // helper. sometimes spec compliance is annoying :(
    //
    // _n = _iteratorNormalCompletion
    // _d = _didIteratorError
    // _e = _iteratorError
    // _i = _iterator
    // _s = _step

    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;

    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
`,i.iterableToArrayLimitLoose=a("7.0.0-beta.0")`
  export default function _iterableToArrayLimitLoose(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;

    var _arr = [];
    for (var _iterator = arr[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
      _arr.push(_step.value);
      if (i && _arr.length === i) break;
    }
    return _arr;
  }
`,i.unsupportedIterableToArray=a("7.9.0")`
  import arrayLikeToArray from "arrayLikeToArray";

  export default function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return arrayLikeToArray(o, minLen);
  }
`,i.arrayLikeToArray=a("7.9.0")`
  export default function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
`,i.nonIterableSpread=a("7.0.0-beta.0")`
  export default function _nonIterableSpread() {
    throw new TypeError(
      "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }
`,i.nonIterableRest=a("7.0.0-beta.0")`
  export default function _nonIterableRest() {
    throw new TypeError(
      "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }
`,i.createForOfIteratorHelper=a("7.9.0")`
  import unsupportedIterableToArray from "unsupportedIterableToArray";

  // s: start (create the iterator)
  // n: next
  // e: error (called whenever something throws)
  // f: finish (always called at the end)

  export default function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
      // Fallback for engines without symbol support
      if (
        Array.isArray(o) ||
        (it = unsupportedIterableToArray(o)) ||
        (allowArrayLike && o && typeof o.length === "number")
      ) {
        if (it) o = it;
        var i = 0;
        var F = function(){};
        return {
          s: F,
          n: function() {
            if (i >= o.length) return { done: true };
            return { done: false, value: o[i++] };
          },
          e: function(e) { throw e; },
          f: F,
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true, didErr = false, err;

    return {
      s: function() {
        it = o[Symbol.iterator]();
      },
      n: function() {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function(e) {
        didErr = true;
        err = e;
      },
      f: function() {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }
`,i.createForOfIteratorHelperLoose=a("7.9.0")`
  import unsupportedIterableToArray from "unsupportedIterableToArray";

  export default function _createForOfIteratorHelperLoose(o, allowArrayLike) {
    var it;

    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
      // Fallback for engines without symbol support
      if (
        Array.isArray(o) ||
        (it = unsupportedIterableToArray(o)) ||
        (allowArrayLike && o && typeof o.length === "number")
      ) {
        if (it) o = it;
        var i = 0;
        return function() {
          if (i >= o.length) return { done: true };
          return { done: false, value: o[i++] };
        }
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    it = o[Symbol.iterator]();
    return it.next.bind(it);
  }
`,i.skipFirstGeneratorNext=a("7.0.0-beta.0")`
  export default function _skipFirstGeneratorNext(fn) {
    return function () {
      var it = fn.apply(this, arguments);
      it.next();
      return it;
    }
  }
`,i.toPrimitive=a("7.1.5")`
  export default function _toPrimitive(
    input,
    hint /*: "default" | "string" | "number" | void */
  ) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
`,i.toPropertyKey=a("7.1.5")`
  import toPrimitive from "toPrimitive";

  export default function _toPropertyKey(arg) {
    var key = toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }
`,i.initializerWarningHelper=a("7.0.0-beta.0")`
    export default function _initializerWarningHelper(descriptor, context){
        throw new Error(
          'Decorating class property failed. Please ensure that ' +
          'proposal-class-properties is enabled and runs after the decorators transform.'
        );
    }
`,i.initializerDefineProperty=a("7.0.0-beta.0")`
    export default function _initializerDefineProperty(target, property, descriptor, context){
        if (!descriptor) return;

        Object.defineProperty(target, property, {
            enumerable: descriptor.enumerable,
            configurable: descriptor.configurable,
            writable: descriptor.writable,
            value: descriptor.initializer ? descriptor.initializer.call(context) : void 0,
        });
    }
`,i.applyDecoratedDescriptor=a("7.0.0-beta.0")`
    export default function _applyDecoratedDescriptor(target, property, decorators, descriptor, context){
        var desc = {};
        Object.keys(descriptor).forEach(function(key){
            desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;
        if ('value' in desc || desc.initializer){
            desc.writable = true;
        }

        desc = decorators.slice().reverse().reduce(function(desc, decorator){
            return decorator(target, property, desc) || desc;
        }, desc);

        if (context && desc.initializer !== void 0){
            desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
            desc.initializer = undefined;
        }

        if (desc.initializer === void 0){
            Object.defineProperty(target, property, desc);
            desc = null;
        }

        return desc;
    }
`,i.classPrivateFieldLooseKey=a("7.0.0-beta.0")`
  var id = 0;
  export default function _classPrivateFieldKey(name) {
    return "__private_" + (id++) + "_" + name;
  }
`,i.classPrivateFieldLooseBase=a("7.0.0-beta.0")`
  export default function _classPrivateFieldBase(receiver, privateKey) {
    if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
      throw new TypeError("attempted to use private field on non-instance");
    }
    return receiver;
  }
`,i.classPrivateFieldGet=a("7.0.0-beta.0")`
  export default function _classPrivateFieldGet(receiver, privateMap) {
    var descriptor = privateMap.get(receiver);
    if (!descriptor) {
      throw new TypeError("attempted to get private field on non-instance");
    }
    if (descriptor.get) {
      return descriptor.get.call(receiver);
    }
    return descriptor.value;
  }
`,i.classPrivateFieldSet=a("7.0.0-beta.0")`
  export default function _classPrivateFieldSet(receiver, privateMap, value) {
    var descriptor = privateMap.get(receiver);
    if (!descriptor) {
      throw new TypeError("attempted to set private field on non-instance");
    }
    if (descriptor.set) {
      descriptor.set.call(receiver, value);
    } else {
      if (!descriptor.writable) {
        // This should only throw in strict mode, but class bodies are
        // always strict and private fields can only be used inside
        // class bodies.
        throw new TypeError("attempted to set read only private field");
      }

      descriptor.value = value;
    }

    return value;
  }
`,i.classPrivateFieldDestructureSet=a("7.4.4")`
  export default function _classPrivateFieldDestructureSet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
      throw new TypeError("attempted to set private field on non-instance");
    }
    var descriptor = privateMap.get(receiver);
    if (descriptor.set) {
      if (!("__destrObj" in descriptor)) {
        descriptor.__destrObj = {
          set value(v) {
            descriptor.set.call(receiver, v)
          },
        };
      }
      return descriptor.__destrObj;
    } else {
      if (!descriptor.writable) {
        // This should only throw in strict mode, but class bodies are
        // always strict and private fields can only be used inside
        // class bodies.
        throw new TypeError("attempted to set read only private field");
      }

      return descriptor;
    }
  }
`,i.classStaticPrivateFieldSpecGet=a("7.0.2")`
  export default function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) {
    if (receiver !== classConstructor) {
      throw new TypeError("Private static access of wrong provenance");
    }
    if (descriptor.get) {
      return descriptor.get.call(receiver);
    }
    return descriptor.value;
  }
`,i.classStaticPrivateFieldSpecSet=a("7.0.2")`
  export default function _classStaticPrivateFieldSpecSet(receiver, classConstructor, descriptor, value) {
    if (receiver !== classConstructor) {
      throw new TypeError("Private static access of wrong provenance");
    }
    if (descriptor.set) {
      descriptor.set.call(receiver, value);
    } else {
      if (!descriptor.writable) {
        // This should only throw in strict mode, but class bodies are
        // always strict and private fields can only be used inside
        // class bodies.
        throw new TypeError("attempted to set read only private field");
      }
      descriptor.value = value;
    }

    return value;
  }
`,i.classStaticPrivateMethodGet=a("7.3.2")`
  export default function _classStaticPrivateMethodGet(receiver, classConstructor, method) {
    if (receiver !== classConstructor) {
      throw new TypeError("Private static access of wrong provenance");
    }
    return method;
  }
`,i.classStaticPrivateMethodSet=a("7.3.2")`
  export default function _classStaticPrivateMethodSet() {
    throw new TypeError("attempted to set read only static private field");
  }
`,i.decorate=a("7.1.5")`
  import toArray from "toArray";
  import toPropertyKey from "toPropertyKey";

  // These comments are stripped by @babel/template
  /*::
  type PropertyDescriptor =
    | {
        value: any,
        writable: boolean,
        configurable: boolean,
        enumerable: boolean,
      }
    | {
        get?: () => any,
        set?: (v: any) => void,
        configurable: boolean,
        enumerable: boolean,
      };

  type FieldDescriptor ={
    writable: boolean,
    configurable: boolean,
    enumerable: boolean,
  };

  type Placement = "static" | "prototype" | "own";
  type Key = string | symbol; // PrivateName is not supported yet.

  type ElementDescriptor =
    | {
        kind: "method",
        key: Key,
        placement: Placement,
        descriptor: PropertyDescriptor
      }
    | {
        kind: "field",
        key: Key,
        placement: Placement,
        descriptor: FieldDescriptor,
        initializer?: () => any,
      };

  // This is exposed to the user code
  type ElementObjectInput = ElementDescriptor & {
    [@@toStringTag]?: "Descriptor"
  };

  // This is exposed to the user code
  type ElementObjectOutput = ElementDescriptor & {
    [@@toStringTag]?: "Descriptor"
    extras?: ElementDescriptor[],
    finisher?: ClassFinisher,
  };

  // This is exposed to the user code
  type ClassObject = {
    [@@toStringTag]?: "Descriptor",
    kind: "class",
    elements: ElementDescriptor[],
  };

  type ElementDecorator = (descriptor: ElementObjectInput) => ?ElementObjectOutput;
  type ClassDecorator = (descriptor: ClassObject) => ?ClassObject;
  type ClassFinisher = <A, B>(cl: Class<A>) => Class<B>;

  // Only used by Babel in the transform output, not part of the spec.
  type ElementDefinition =
    | {
        kind: "method",
        value: any,
        key: Key,
        static?: boolean,
        decorators?: ElementDecorator[],
      }
    | {
        kind: "field",
        value: () => any,
        key: Key,
        static?: boolean,
        decorators?: ElementDecorator[],
    };

  declare function ClassFactory<C>(initialize: (instance: C) => void): {
    F: Class<C>,
    d: ElementDefinition[]
  }

  */

  /*::
  // Various combinations with/without extras and with one or many finishers

  type ElementFinisherExtras = {
    element: ElementDescriptor,
    finisher?: ClassFinisher,
    extras?: ElementDescriptor[],
  };

  type ElementFinishersExtras = {
    element: ElementDescriptor,
    finishers: ClassFinisher[],
    extras: ElementDescriptor[],
  };

  type ElementsFinisher = {
    elements: ElementDescriptor[],
    finisher?: ClassFinisher,
  };

  type ElementsFinishers = {
    elements: ElementDescriptor[],
    finishers: ClassFinisher[],
  };

  */

  /*::

  type Placements = {
    static: Key[],
    prototype: Key[],
    own: Key[],
  };

  */

  // ClassDefinitionEvaluation (Steps 26-*)
  export default function _decorate(
    decorators /*: ClassDecorator[] */,
    factory /*: ClassFactory */,
    superClass /*: ?Class<*> */,
    mixins /*: ?Array<Function> */,
  ) /*: Class<*> */ {
    var api = _getDecoratorsApi();
    if (mixins) {
      for (var i = 0; i < mixins.length; i++) {
        api = mixins[i](api);
      }
    }

    var r = factory(function initialize(O) {
      api.initializeInstanceElements(O, decorated.elements);
    }, superClass);
    var decorated = api.decorateClass(
      _coalesceClassElements(r.d.map(_createElementDescriptor)),
      decorators,
    );

    api.initializeClassElements(r.F, decorated.elements);

    return api.runClassFinishers(r.F, decorated.finishers);
  }

  function _getDecoratorsApi() {
    _getDecoratorsApi = function() {
      return api;
    };

    var api = {
      elementsDefinitionOrder: [["method"], ["field"]],

      // InitializeInstanceElements
      initializeInstanceElements: function(
        /*::<C>*/ O /*: C */,
        elements /*: ElementDescriptor[] */,
      ) {
        ["method", "field"].forEach(function(kind) {
          elements.forEach(function(element /*: ElementDescriptor */) {
            if (element.kind === kind && element.placement === "own") {
              this.defineClassElement(O, element);
            }
          }, this);
        }, this);
      },

      // InitializeClassElements
      initializeClassElements: function(
        /*::<C>*/ F /*: Class<C> */,
        elements /*: ElementDescriptor[] */,
      ) {
        var proto = F.prototype;

        ["method", "field"].forEach(function(kind) {
          elements.forEach(function(element /*: ElementDescriptor */) {
            var placement = element.placement;
            if (
              element.kind === kind &&
              (placement === "static" || placement === "prototype")
            ) {
              var receiver = placement === "static" ? F : proto;
              this.defineClassElement(receiver, element);
            }
          }, this);
        }, this);
      },

      // DefineClassElement
      defineClassElement: function(
        /*::<C>*/ receiver /*: C | Class<C> */,
        element /*: ElementDescriptor */,
      ) {
        var descriptor /*: PropertyDescriptor */ = element.descriptor;
        if (element.kind === "field") {
          var initializer = element.initializer;
          descriptor = {
            enumerable: descriptor.enumerable,
            writable: descriptor.writable,
            configurable: descriptor.configurable,
            value: initializer === void 0 ? void 0 : initializer.call(receiver),
          };
        }
        Object.defineProperty(receiver, element.key, descriptor);
      },

      // DecorateClass
      decorateClass: function(
        elements /*: ElementDescriptor[] */,
        decorators /*: ClassDecorator[] */,
      ) /*: ElementsFinishers */ {
        var newElements /*: ElementDescriptor[] */ = [];
        var finishers /*: ClassFinisher[] */ = [];
        var placements /*: Placements */ = {
          static: [],
          prototype: [],
          own: [],
        };

        elements.forEach(function(element /*: ElementDescriptor */) {
          this.addElementPlacement(element, placements);
        }, this);

        elements.forEach(function(element /*: ElementDescriptor */) {
          if (!_hasDecorators(element)) return newElements.push(element);

          var elementFinishersExtras /*: ElementFinishersExtras */ = this.decorateElement(
            element,
            placements,
          );
          newElements.push(elementFinishersExtras.element);
          newElements.push.apply(newElements, elementFinishersExtras.extras);
          finishers.push.apply(finishers, elementFinishersExtras.finishers);
        }, this);

        if (!decorators) {
          return { elements: newElements, finishers: finishers };
        }

        var result /*: ElementsFinishers */ = this.decorateConstructor(
          newElements,
          decorators,
        );
        finishers.push.apply(finishers, result.finishers);
        result.finishers = finishers;

        return result;
      },

      // AddElementPlacement
      addElementPlacement: function(
        element /*: ElementDescriptor */,
        placements /*: Placements */,
        silent /*: boolean */,
      ) {
        var keys = placements[element.placement];
        if (!silent && keys.indexOf(element.key) !== -1) {
          throw new TypeError("Duplicated element (" + element.key + ")");
        }
        keys.push(element.key);
      },

      // DecorateElement
      decorateElement: function(
        element /*: ElementDescriptor */,
        placements /*: Placements */,
      ) /*: ElementFinishersExtras */ {
        var extras /*: ElementDescriptor[] */ = [];
        var finishers /*: ClassFinisher[] */ = [];

        for (
          var decorators = element.decorators, i = decorators.length - 1;
          i >= 0;
          i--
        ) {
          // (inlined) RemoveElementPlacement
          var keys = placements[element.placement];
          keys.splice(keys.indexOf(element.key), 1);

          var elementObject /*: ElementObjectInput */ = this.fromElementDescriptor(
            element,
          );
          var elementFinisherExtras /*: ElementFinisherExtras */ = this.toElementFinisherExtras(
            (0, decorators[i])(elementObject) /*: ElementObjectOutput */ ||
              elementObject,
          );

          element = elementFinisherExtras.element;
          this.addElementPlacement(element, placements);

          if (elementFinisherExtras.finisher) {
            finishers.push(elementFinisherExtras.finisher);
          }

          var newExtras /*: ElementDescriptor[] | void */ =
            elementFinisherExtras.extras;
          if (newExtras) {
            for (var j = 0; j < newExtras.length; j++) {
              this.addElementPlacement(newExtras[j], placements);
            }
            extras.push.apply(extras, newExtras);
          }
        }

        return { element: element, finishers: finishers, extras: extras };
      },

      // DecorateConstructor
      decorateConstructor: function(
        elements /*: ElementDescriptor[] */,
        decorators /*: ClassDecorator[] */,
      ) /*: ElementsFinishers */ {
        var finishers /*: ClassFinisher[] */ = [];

        for (var i = decorators.length - 1; i >= 0; i--) {
          var obj /*: ClassObject */ = this.fromClassDescriptor(elements);
          var elementsAndFinisher /*: ElementsFinisher */ = this.toClassDescriptor(
            (0, decorators[i])(obj) /*: ClassObject */ || obj,
          );

          if (elementsAndFinisher.finisher !== undefined) {
            finishers.push(elementsAndFinisher.finisher);
          }

          if (elementsAndFinisher.elements !== undefined) {
            elements = elementsAndFinisher.elements;

            for (var j = 0; j < elements.length - 1; j++) {
              for (var k = j + 1; k < elements.length; k++) {
                if (
                  elements[j].key === elements[k].key &&
                  elements[j].placement === elements[k].placement
                ) {
                  throw new TypeError(
                    "Duplicated element (" + elements[j].key + ")",
                  );
                }
              }
            }
          }
        }

        return { elements: elements, finishers: finishers };
      },

      // FromElementDescriptor
      fromElementDescriptor: function(
        element /*: ElementDescriptor */,
      ) /*: ElementObject */ {
        var obj /*: ElementObject */ = {
          kind: element.kind,
          key: element.key,
          placement: element.placement,
          descriptor: element.descriptor,
        };

        var desc = {
          value: "Descriptor",
          configurable: true,
        };
        Object.defineProperty(obj, Symbol.toStringTag, desc);

        if (element.kind === "field") obj.initializer = element.initializer;

        return obj;
      },

      // ToElementDescriptors
      toElementDescriptors: function(
        elementObjects /*: ElementObject[] */,
      ) /*: ElementDescriptor[] */ {
        if (elementObjects === undefined) return;
        return toArray(elementObjects).map(function(elementObject) {
          var element = this.toElementDescriptor(elementObject);
          this.disallowProperty(elementObject, "finisher", "An element descriptor");
          this.disallowProperty(elementObject, "extras", "An element descriptor");
          return element;
        }, this);
      },

      // ToElementDescriptor
      toElementDescriptor: function(
        elementObject /*: ElementObject */,
      ) /*: ElementDescriptor */ {
        var kind = String(elementObject.kind);
        if (kind !== "method" && kind !== "field") {
          throw new TypeError(
            'An element descriptor\\'s .kind property must be either "method" or' +
              ' "field", but a decorator created an element descriptor with' +
              ' .kind "' +
              kind +
              '"',
          );
        }

        var key = toPropertyKey(elementObject.key);

        var placement = String(elementObject.placement);
        if (
          placement !== "static" &&
          placement !== "prototype" &&
          placement !== "own"
        ) {
          throw new TypeError(
            'An element descriptor\\'s .placement property must be one of "static",' +
              ' "prototype" or "own", but a decorator created an element descriptor' +
              ' with .placement "' +
              placement +
              '"',
          );
        }

        var descriptor /*: PropertyDescriptor */ = elementObject.descriptor;

        this.disallowProperty(elementObject, "elements", "An element descriptor");

        var element /*: ElementDescriptor */ = {
          kind: kind,
          key: key,
          placement: placement,
          descriptor: Object.assign({}, descriptor),
        };

        if (kind !== "field") {
          this.disallowProperty(elementObject, "initializer", "A method descriptor");
        } else {
          this.disallowProperty(
            descriptor,
            "get",
            "The property descriptor of a field descriptor",
          );
          this.disallowProperty(
            descriptor,
            "set",
            "The property descriptor of a field descriptor",
          );
          this.disallowProperty(
            descriptor,
            "value",
            "The property descriptor of a field descriptor",
          );

          element.initializer = elementObject.initializer;
        }

        return element;
      },

      toElementFinisherExtras: function(
        elementObject /*: ElementObject */,
      ) /*: ElementFinisherExtras */ {
        var element /*: ElementDescriptor */ = this.toElementDescriptor(
          elementObject,
        );
        var finisher /*: ClassFinisher */ = _optionalCallableProperty(
          elementObject,
          "finisher",
        );
        var extras /*: ElementDescriptors[] */ = this.toElementDescriptors(
          elementObject.extras,
        );

        return { element: element, finisher: finisher, extras: extras };
      },

      // FromClassDescriptor
      fromClassDescriptor: function(
        elements /*: ElementDescriptor[] */,
      ) /*: ClassObject */ {
        var obj = {
          kind: "class",
          elements: elements.map(this.fromElementDescriptor, this),
        };

        var desc = { value: "Descriptor", configurable: true };
        Object.defineProperty(obj, Symbol.toStringTag, desc);

        return obj;
      },

      // ToClassDescriptor
      toClassDescriptor: function(
        obj /*: ClassObject */,
      ) /*: ElementsFinisher */ {
        var kind = String(obj.kind);
        if (kind !== "class") {
          throw new TypeError(
            'A class descriptor\\'s .kind property must be "class", but a decorator' +
              ' created a class descriptor with .kind "' +
              kind +
              '"',
          );
        }

        this.disallowProperty(obj, "key", "A class descriptor");
        this.disallowProperty(obj, "placement", "A class descriptor");
        this.disallowProperty(obj, "descriptor", "A class descriptor");
        this.disallowProperty(obj, "initializer", "A class descriptor");
        this.disallowProperty(obj, "extras", "A class descriptor");

        var finisher = _optionalCallableProperty(obj, "finisher");
        var elements = this.toElementDescriptors(obj.elements);

        return { elements: elements, finisher: finisher };
      },

      // RunClassFinishers
      runClassFinishers: function(
        constructor /*: Class<*> */,
        finishers /*: ClassFinisher[] */,
      ) /*: Class<*> */ {
        for (var i = 0; i < finishers.length; i++) {
          var newConstructor /*: ?Class<*> */ = (0, finishers[i])(constructor);
          if (newConstructor !== undefined) {
            // NOTE: This should check if IsConstructor(newConstructor) is false.
            if (typeof newConstructor !== "function") {
              throw new TypeError("Finishers must return a constructor.");
            }
            constructor = newConstructor;
          }
        }
        return constructor;
      },

      disallowProperty: function(obj, name, objectType) {
        if (obj[name] !== undefined) {
          throw new TypeError(objectType + " can't have a ." + name + " property.");
        }
      }
    };

    return api;
  }

  // ClassElementEvaluation
  function _createElementDescriptor(
    def /*: ElementDefinition */,
  ) /*: ElementDescriptor */ {
    var key = toPropertyKey(def.key);

    var descriptor /*: PropertyDescriptor */;
    if (def.kind === "method") {
      descriptor = {
        value: def.value,
        writable: true,
        configurable: true,
        enumerable: false,
      };
    } else if (def.kind === "get") {
      descriptor = { get: def.value, configurable: true, enumerable: false };
    } else if (def.kind === "set") {
      descriptor = { set: def.value, configurable: true, enumerable: false };
    } else if (def.kind === "field") {
      descriptor = { configurable: true, writable: true, enumerable: true };
    }

    var element /*: ElementDescriptor */ = {
      kind: def.kind === "field" ? "field" : "method",
      key: key,
      placement: def.static
        ? "static"
        : def.kind === "field"
        ? "own"
        : "prototype",
      descriptor: descriptor,
    };
    if (def.decorators) element.decorators = def.decorators;
    if (def.kind === "field") element.initializer = def.value;

    return element;
  }

  // CoalesceGetterSetter
  function _coalesceGetterSetter(
    element /*: ElementDescriptor */,
    other /*: ElementDescriptor */,
  ) {
    if (element.descriptor.get !== undefined) {
      other.descriptor.get = element.descriptor.get;
    } else {
      other.descriptor.set = element.descriptor.set;
    }
  }

  // CoalesceClassElements
  function _coalesceClassElements(
    elements /*: ElementDescriptor[] */,
  ) /*: ElementDescriptor[] */ {
    var newElements /*: ElementDescriptor[] */ = [];

    var isSameElement = function(
      other /*: ElementDescriptor */,
    ) /*: boolean */ {
      return (
        other.kind === "method" &&
        other.key === element.key &&
        other.placement === element.placement
      );
    };

    for (var i = 0; i < elements.length; i++) {
      var element /*: ElementDescriptor */ = elements[i];
      var other /*: ElementDescriptor */;

      if (
        element.kind === "method" &&
        (other = newElements.find(isSameElement))
      ) {
        if (
          _isDataDescriptor(element.descriptor) ||
          _isDataDescriptor(other.descriptor)
        ) {
          if (_hasDecorators(element) || _hasDecorators(other)) {
            throw new ReferenceError(
              "Duplicated methods (" + element.key + ") can't be decorated.",
            );
          }
          other.descriptor = element.descriptor;
        } else {
          if (_hasDecorators(element)) {
            if (_hasDecorators(other)) {
              throw new ReferenceError(
                "Decorators can't be placed on different accessors with for " +
                  "the same property (" +
                  element.key +
                  ").",
              );
            }
            other.decorators = element.decorators;
          }
          _coalesceGetterSetter(element, other);
        }
      } else {
        newElements.push(element);
      }
    }

    return newElements;
  }

  function _hasDecorators(element /*: ElementDescriptor */) /*: boolean */ {
    return element.decorators && element.decorators.length;
  }

  function _isDataDescriptor(desc /*: PropertyDescriptor */) /*: boolean */ {
    return (
      desc !== undefined &&
      !(desc.value === undefined && desc.writable === undefined)
    );
  }

  function _optionalCallableProperty /*::<T>*/(
    obj /*: T */,
    name /*: $Keys<T> */,
  ) /*: ?Function */ {
    var value = obj[name];
    if (value !== undefined && typeof value !== "function") {
      throw new TypeError("Expected '" + name + "' to be a function");
    }
    return value;
  }

`,i.classPrivateMethodGet=a("7.1.6")`
  export default function _classPrivateMethodGet(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) {
      throw new TypeError("attempted to get private field on non-instance");
    }
    return fn;
  }
`,i.classPrivateMethodSet=a("7.1.6")`
  export default function _classPrivateMethodSet() {
    throw new TypeError("attempted to reassign private method");
  }
`,i.wrapRegExp=a("7.2.6")`
  import wrapNativeSuper from "wrapNativeSuper";
  import getPrototypeOf from "getPrototypeOf";
  import possibleConstructorReturn from "possibleConstructorReturn";
  import inherits from "inherits";

  export default function _wrapRegExp(re, groups) {
    _wrapRegExp = function(re, groups) {
      return new BabelRegExp(re, undefined, groups);
    };

    var _RegExp = wrapNativeSuper(RegExp);
    var _super = RegExp.prototype;
    var _groups = new WeakMap();

    function BabelRegExp(re, flags, groups) {
      var _this = _RegExp.call(this, re, flags);
      // if the regex is recreated with 'g' flag
      _groups.set(_this, groups || _groups.get(re));
      return _this;
    }
    inherits(BabelRegExp, _RegExp);

    BabelRegExp.prototype.exec = function(str) {
      var result = _super.exec.call(this, str);
      if (result) result.groups = buildGroups(result, this);
      return result;
    };
    BabelRegExp.prototype[Symbol.replace] = function(str, substitution) {
      if (typeof substitution === "string") {
        var groups = _groups.get(this);
        return _super[Symbol.replace].call(
          this,
          str,
          substitution.replace(/\\$<([^>]+)>/g, function(_, name) {
            return "$" + groups[name];
          })
        );
      } else if (typeof substitution === "function") {
        var _this = this;
        return _super[Symbol.replace].call(
          this,
          str,
          function() {
            var args = [];
            args.push.apply(args, arguments);
            if (typeof args[args.length - 1] !== "object") {
              // Modern engines already pass result.groups as the last arg.
              args.push(buildGroups(args, _this));
            }
            return substitution.apply(this, args);
          }
        );
      } else {
        return _super[Symbol.replace].call(this, str, substitution);
      }
    }

    function buildGroups(result, re) {
      // NOTE: This function should return undefined if there are no groups,
      // but in that case Babel doesn't add the wrapper anyway.

      var g = _groups.get(re);
      return Object.keys(g).reduce(function(groups, name) {
        groups[name] = result[g[name]];
        return groups;
      }, Object.create(null));
    }

    return _wrapRegExp.apply(this, arguments);
  }
    (function (root, factory) {
      if (typeof define === "function" && define.amd) {
        define(AMD_ARGUMENTS, factory);
      } else if (typeof exports === "object") {
        factory(COMMON_ARGUMENTS);
      } else {
        factory(BROWSER_ARGUMENTS);
      }
    })(UMD_ROOT, function (FACTORY_PARAMETERS) {
      FACTORY_BODY
    });
    (function (root, factory) {
      if (typeof define === "function" && define.amd) {
        define(AMD_ARGUMENTS, factory);
      } else if (typeof exports === "object") {
        factory(COMMON_ARGUMENTS);
      } else {
        factory(BROWSER_ARGUMENTS);
      }
    })(UMD_ROOT, function (FACTORY_PARAMETERS) {
      FACTORY_BODY
    });
//# sourceMappingURL=vendors.99f939aec90b7ad94625.js.map