!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports,require("js-sha256")):"function"==typeof define&&define.amd?define(["exports","js-sha256"],r):(t=t||self,function(){var e=t.mksign,n=t.mksign={};r(n,t.sha256),n.noConflict=function(){return t.mksign=e,n}}())}(this,function(t,r){"use strict";r=r&&r.hasOwnProperty("default")?r.default:r;var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(t,r){return t(r={exports:{}},r.exports),r.exports}var o=n(function(t){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)}),i=n(function(t){var r=t.exports={version:"2.6.9"};"number"==typeof __e&&(__e=r)}),u=(i.version,function(t,r,e){if(function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!")}(t),void 0===r)return t;switch(e){case 1:return function(e){return t.call(r,e)};case 2:return function(e,n){return t.call(r,e,n)};case 3:return function(e,n,o){return t.call(r,e,n,o)}}return function(){return t.apply(r,arguments)}}),c=function(t){return"object"==typeof t?null!==t:"function"==typeof t},a=function(t){if(!c(t))throw TypeError(t+" is not an object!");return t},f=function(t){try{return!!t()}catch(t){return!0}},l=!f(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}),s=o.document,p=c(s)&&c(s.createElement),y=function(t){return p?s.createElement(t):{}},v=!l&&!f(function(){return 7!=Object.defineProperty(y("div"),"a",{get:function(){return 7}}).a}),h=Object.defineProperty,b={f:l?Object.defineProperty:function(t,r,e){if(a(t),r=function(t,r){if(!c(t))return t;var e,n;if(r&&"function"==typeof(e=t.toString)&&!c(n=e.call(t)))return n;if("function"==typeof(e=t.valueOf)&&!c(n=e.call(t)))return n;if(!r&&"function"==typeof(e=t.toString)&&!c(n=e.call(t)))return n;throw TypeError("Can't convert object to primitive value")}(r,!0),a(e),v)try{return h(t,r,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[r]=e.value),t}},d=function(t,r){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:r}},j=l?function(t,r,e){return b.f(t,r,d(1,e))}:function(t,r,e){return t[r]=e,t},g={}.hasOwnProperty,O=function(t,r){return g.call(t,r)},w=function(t,r,e){var n,c,a,f=t&w.F,l=t&w.G,s=t&w.S,p=t&w.P,y=t&w.B,v=t&w.W,h=l?i:i[r]||(i[r]={}),b=h.prototype,d=l?o:s?o[r]:(o[r]||{}).prototype;for(n in l&&(e=r),e)(c=!f&&d&&void 0!==d[n])&&O(h,n)||(a=c?d[n]:e[n],h[n]=l&&"function"!=typeof d[n]?e[n]:y&&c?u(a,o):v&&d[n]==a?function(t){var r=function(r,e,n){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(r);case 2:return new t(r,e)}return new t(r,e,n)}return t.apply(this,arguments)};return r.prototype=t.prototype,r}(a):p&&"function"==typeof a?u(Function.call,a):a,p&&((h.virtual||(h.virtual={}))[n]=a,t&w.R&&b&&!b[n]&&j(b,n,a)))};w.F=1,w.G=2,w.S=4,w.P=8,w.B=16,w.W=32,w.U=64,w.R=128;var S,m,_=w,A={}.toString,T=function(t){return A.call(t).slice(8,-1)},P=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==T(t)?t.split(""):Object(t)},E=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t},M=function(t){return P(E(t))},k=Math.ceil,L=Math.floor,x=function(t){return isNaN(t=+t)?0:(t>0?L:k)(t)},F=Math.min,I=Math.max,D=Math.min,C=n(function(t){var r=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,e){return r[t]||(r[t]=void 0!==e?e:{})})("versions",[]).push({version:i.version,mode:"pure",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})}),G=0,R=Math.random(),N=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++G+R).toString(36))},V=C("keys"),B=function(t){return V[t]||(V[t]=N(t))},U=(S=!1,function(t,r,e){var n,o,i=M(t),u=(n=i.length)>0?F(x(n),9007199254740991):0,c=function(t,r){return(t=x(t))<0?I(t+r,0):D(t,r)}(e,u);if(S&&r!=r){for(;u>c;)if((o=i[c++])!=o)return!0}else for(;u>c;c++)if((S||c in i)&&i[c]===r)return S||c||0;return!S&&-1}),W=B("IE_PROTO"),$="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),q=Object.keys||function(t){return function(t,r){var e,n=M(t),o=0,i=[];for(e in n)e!=W&&O(n,e)&&i.push(e);for(;r.length>o;)O(n,e=r[o++])&&(~U(i,e)||i.push(e));return i}(t,$)},H={f:{}.propertyIsEnumerable}.f,z=(m=!0,function(t){for(var r,e=M(t),n=q(e),o=n.length,i=0,u=[];o>i;)r=n[i++],l&&!H.call(e,r)||u.push(m?[r,e[r]]:e[r]);return u});_(_.S,"Object",{entries:function(t){return z(t)}});var J=i.Object.entries;var K=function(t){var r=typeof t;return null!=t&&("object"==r||"function"==r)},Q=Object.prototype;var X=function(t){var r=t&&t.constructor;return t===("function"==typeof r&&r.prototype||Q)};var Y=function(t,r){return function(e){return t(r(e))}}(Object.keys,Object),Z=Object.prototype.hasOwnProperty;var tt=function(t){if(!X(t))return Y(t);var r=[];for(var e in Object(t))Z.call(t,e)&&"constructor"!=e&&r.push(e);return r},rt="object"==typeof e&&e&&e.Object===Object&&e,et="object"==typeof self&&self&&self.Object===Object&&self,nt=rt||et||Function("return this")(),ot=nt.Symbol,it=Object.prototype,ut=it.hasOwnProperty,ct=it.toString,at=ot?ot.toStringTag:void 0;var ft=function(t){var r=ut.call(t,at),e=t[at];try{t[at]=void 0;var n=!0}catch(t){}var o=ct.call(t);return n&&(r?t[at]=e:delete t[at]),o},lt=Object.prototype.toString;var st=function(t){return lt.call(t)},pt="[object Null]",yt="[object Undefined]",vt=ot?ot.toStringTag:void 0;var ht=function(t){return null==t?void 0===t?yt:pt:vt&&vt in Object(t)?ft(t):st(t)},bt="[object AsyncFunction]",dt="[object Function]",jt="[object GeneratorFunction]",gt="[object Proxy]";var Ot,wt=function(t){if(!K(t))return!1;var r=ht(t);return r==dt||r==jt||r==bt||r==gt},St=nt["__core-js_shared__"],mt=(Ot=/[^.]+$/.exec(St&&St.keys&&St.keys.IE_PROTO||""))?"Symbol(src)_1."+Ot:"";var _t=function(t){return!!mt&&mt in t},At=Function.prototype.toString;var Tt=function(t){if(null!=t){try{return At.call(t)}catch(t){}try{return t+""}catch(t){}}return""},Pt=/^\[object .+?Constructor\]$/,Et=Function.prototype,Mt=Object.prototype,kt=Et.toString,Lt=Mt.hasOwnProperty,xt=RegExp("^"+kt.call(Lt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Ft=function(t){return!(!K(t)||_t(t))&&(wt(t)?xt:Pt).test(Tt(t))};var It=function(t,r){return null==t?void 0:t[r]};var Dt=function(t,r){var e=It(t,r);return Ft(e)?e:void 0},Ct=Dt(nt,"DataView"),Gt=Dt(nt,"Map"),Rt=Dt(nt,"Promise"),Nt=Dt(nt,"Set"),Vt=Dt(nt,"WeakMap"),Bt=Tt(Ct),Ut=Tt(Gt),Wt=Tt(Rt),$t=Tt(Nt),qt=Tt(Vt),Ht=ht;(Ct&&"[object DataView]"!=Ht(new Ct(new ArrayBuffer(1)))||Gt&&"[object Map]"!=Ht(new Gt)||Rt&&"[object Promise]"!=Ht(Rt.resolve())||Nt&&"[object Set]"!=Ht(new Nt)||Vt&&"[object WeakMap]"!=Ht(new Vt))&&(Ht=function(t){var r=ht(t),e="[object Object]"==r?t.constructor:void 0,n=e?Tt(e):"";if(n)switch(n){case Bt:return"[object DataView]";case Ut:return"[object Map]";case Wt:return"[object Promise]";case $t:return"[object Set]";case qt:return"[object WeakMap]"}return r});var zt=Ht;var Jt=function(t){return null!=t&&"object"==typeof t},Kt="[object Arguments]";var Qt=function(t){return Jt(t)&&ht(t)==Kt},Xt=Object.prototype,Yt=Xt.hasOwnProperty,Zt=Xt.propertyIsEnumerable,tr=Qt(function(){return arguments}())?Qt:function(t){return Jt(t)&&Yt.call(t,"callee")&&!Zt.call(t,"callee")},rr=Array.isArray,er=9007199254740991;var nr=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=er};var or=function(t){return null!=t&&nr(t.length)&&!wt(t)};var ir=function(){return!1},ur=n(function(t,r){var e=r&&!r.nodeType&&r,n=e&&t&&!t.nodeType&&t,o=n&&n.exports===e?nt.Buffer:void 0,i=(o?o.isBuffer:void 0)||ir;t.exports=i}),cr={};cr["[object Float32Array]"]=cr["[object Float64Array]"]=cr["[object Int8Array]"]=cr["[object Int16Array]"]=cr["[object Int32Array]"]=cr["[object Uint8Array]"]=cr["[object Uint8ClampedArray]"]=cr["[object Uint16Array]"]=cr["[object Uint32Array]"]=!0,cr["[object Arguments]"]=cr["[object Array]"]=cr["[object ArrayBuffer]"]=cr["[object Boolean]"]=cr["[object DataView]"]=cr["[object Date]"]=cr["[object Error]"]=cr["[object Function]"]=cr["[object Map]"]=cr["[object Number]"]=cr["[object Object]"]=cr["[object RegExp]"]=cr["[object Set]"]=cr["[object String]"]=cr["[object WeakMap]"]=!1;var ar=function(t){return Jt(t)&&nr(t.length)&&!!cr[ht(t)]};var fr=function(t){return function(r){return t(r)}},lr=n(function(t,r){var e=r&&!r.nodeType&&r,n=e&&t&&!t.nodeType&&t,o=n&&n.exports===e&&rt.process,i=function(){try{var t=n&&n.require&&n.require("util").types;return t||o&&o.binding&&o.binding("util")}catch(t){}}();t.exports=i}),sr=lr&&lr.isTypedArray,pr=sr?fr(sr):ar,yr="[object Map]",vr="[object Set]",hr=Object.prototype.hasOwnProperty;var br=function(t){if(null==t)return!0;if(or(t)&&(rr(t)||"string"==typeof t||"function"==typeof t.splice||ur(t)||pr(t)||tr(t)))return!t.length;var r=zt(t);if(r==yr||r==vr)return!t.size;if(X(t))return!tt(t).length;for(var e in t)if(hr.call(t,e))return!1;return!0};function dr(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};if(!K(t)||br(t))throw new Error("params is not Object or no value in sort function!");return J(t).sort(function(t,r){return"".concat(t)>"".concat(r)?1:-1})}var jr,gr,Or,wr,Sr=function(t){return Object(E(t))};jr="keys",gr=function(){return function(t){return q(Sr(t))}},Or=(i.Object||{})[jr]||Object[jr],(wr={})[jr]=gr(Or),_(_.S+_.F*f(function(){Or(1)}),"Object",wr);var mr=i.Object.keys;function _r(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};if(!K(t)||br(t))throw new Error("params is not Object or no value in filterNull function!");var r={};return mr(t).forEach(function(e){var n=t[e];(0===n||n)&&(r[e]=n)}),r}var Ar=Array.isArray||function(t){return"Array"==T(t)};_(_.S,"Array",{isArray:Ar});var Tr=i.Array.isArray;var Pr=function(t){if(Tr(t))return t},Er=function(t,r){return{value:r,done:!!t}},Mr={},kr=j,Lr=l?Object.defineProperties:function(t,r){a(t);for(var e,n=q(r),o=n.length,i=0;o>i;)b.f(t,e=n[i++],r[e]);return t},xr=o.document,Fr=xr&&xr.documentElement,Ir=B("IE_PROTO"),Dr=function(){},Cr=function(){var t,r=y("iframe"),e=$.length;for(r.style.display="none",Fr.appendChild(r),r.src="javascript:",(t=r.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),Cr=t.F;e--;)delete Cr.prototype[$[e]];return Cr()},Gr=Object.create||function(t,r){var e;return null!==t?(Dr.prototype=a(t),e=new Dr,Dr.prototype=null,e[Ir]=t):e=Cr(),void 0===r?e:Lr(e,r)},Rr=n(function(t){var r=C("wks"),e=o.Symbol,n="function"==typeof e;(t.exports=function(t){return r[t]||(r[t]=n&&e[t]||(n?e:N)("Symbol."+t))}).store=r}),Nr=b.f,Vr=Rr("toStringTag"),Br=function(t,r,e){t&&!O(t=e?t:t.prototype,Vr)&&Nr(t,Vr,{configurable:!0,value:r})},Ur={};j(Ur,Rr("iterator"),function(){return this});var Wr=function(t,r,e){t.prototype=Gr(Ur,{next:d(1,e)}),Br(t,r+" Iterator")},$r=B("IE_PROTO"),qr=Object.prototype,Hr=Object.getPrototypeOf||function(t){return t=Sr(t),O(t,$r)?t[$r]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?qr:null},zr=Rr("iterator"),Jr=!([].keys&&"next"in[].keys()),Kr=function(){return this},Qr=function(t,r,e,n,o,i,u){Wr(e,r,n);var c,a,f,l=function(t){if(!Jr&&t in v)return v[t];switch(t){case"keys":case"values":return function(){return new e(this,t)}}return function(){return new e(this,t)}},s=r+" Iterator",p="values"==o,y=!1,v=t.prototype,h=v[zr]||v["@@iterator"]||o&&v[o],b=h||l(o),d=o?p?l("entries"):b:void 0,g="Array"==r&&v.entries||h;if(g&&(f=Hr(g.call(new t)))!==Object.prototype&&f.next&&Br(f,s,!0),p&&h&&"values"!==h.name&&(y=!0,b=function(){return h.call(this)}),u&&(Jr||y||!v[zr])&&j(v,zr,b),Mr[r]=b,Mr[s]=Kr,o)if(c={values:p?b:l("values"),keys:i?b:l("keys"),entries:d},u)for(a in c)a in v||kr(v,a,c[a]);else _(_.P+_.F*(Jr||y),r,c);return c};Qr(Array,"Array",function(t,r){this._t=M(t),this._i=0,this._k=r},function(){var t=this._t,r=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,Er(1)):Er(0,"keys"==r?e:"values"==r?t[e]:[e,t[e]])},"values");Mr.Arguments=Mr.Array;for(var Xr=Rr("toStringTag"),Yr="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),Zr=0;Zr<Yr.length;Zr++){var te=Yr[Zr],re=o[te],ee=re&&re.prototype;ee&&!ee[Xr]&&j(ee,Xr,te),Mr[te]=Mr.Array}var ne,oe=(ne=!0,function(t,r){var e,n,o=String(E(t)),i=x(r),u=o.length;return i<0||i>=u?ne?"":void 0:(e=o.charCodeAt(i))<55296||e>56319||i+1===u||(n=o.charCodeAt(i+1))<56320||n>57343?ne?o.charAt(i):e:ne?o.slice(i,i+2):n-56320+(e-55296<<10)+65536});Qr(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,r=this._t,e=this._i;return e>=r.length?{value:void 0,done:!0}:(t=oe(r,e),this._i+=t.length,{value:t,done:!1})});var ie=Rr("toStringTag"),ue="Arguments"==T(function(){return arguments}()),ce=Rr("iterator"),ae=i.getIteratorMethod=function(t){if(null!=t)return t[ce]||t["@@iterator"]||Mr[function(t){var r,e,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,r){try{return t[r]}catch(t){}}(r=Object(t),ie))?e:ue?T(r):"Object"==(n=T(r))&&"function"==typeof r.callee?"Arguments":n}(t)]},fe=i.getIterator=function(t){var r=ae(t);if("function"!=typeof r)throw TypeError(t+" is not iterable!");return a(r.call(t))};var le=function(t,r){var e=[],n=!0,o=!1,i=void 0;try{for(var u,c=fe(t);!(n=(u=c.next()).done)&&(e.push(u.value),!r||e.length!==r);n=!0);}catch(t){o=!0,i=t}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return e};var se=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")};var pe=function(t,r){return Pr(t)||le(t,r)||se()};function ye(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[[]],r=[],e=[];return t.forEach(function(t){var n=pe(t,2),o=n[0],i=n[1];if(0!==i&&!i)throw new Error("param.".concat(o," have not value! pls check!!"));0===o||o?e.push("".concat(o,"=").concat(i)):r.push(i)}),"".concat(e.join("&")).concat(r.join(""))}function ve(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[],e=dr(_r(t));if(!rr(r))throw new Error("The second argument is not Array or no value in defaultGetSignData function!");return r.forEach(function(t){if(K(t)){if(!K(t)||br(t))throw new Error("The second argument's is not object or no value in defaultGetSignData function!");J(t).forEach(function(t){var r=pe(t,2),n=r[0],o=r[1];e.push([n,o])})}else{if(0!==t&&!t)throw new Error("The second argument's no value in defaultGetSignData function!");e.push(["",t])}}),ye(e)}t.defaultGetSignData=ve,t.defaultSign=function(){var t=ve(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},1<arguments.length&&void 0!==arguments[1]?arguments[1]:[]);return r(t)},t.filterNull=_r,t.getFilterData=function(){return dr(_r(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}))},t.getSignStr=ye,t.sort=dr,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=mksign.common.js.map