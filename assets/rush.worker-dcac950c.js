(function(){"use strict";let _;const a=new Array(128).fill(void 0);a.push(void 0,null,!0,!1);function c(t){return a[t]}let y=a.length;function R(t){t<132||(a[t]=y,y=t)}function O(t){const n=c(t);return R(t),n}function i(t){y===a.length&&a.push(a.length+1);const n=y;return y=a[n],a[n]=t,n}const x=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});x.decode();let m=null;function M(){return(m===null||m.byteLength===0)&&(m=new Uint8Array(_.memory.buffer)),m}function p(t,n){return x.decode(M().subarray(t,t+n))}let g=0;const j=new TextEncoder("utf-8"),F=typeof j.encodeInto=="function"?function(t,n){return j.encodeInto(t,n)}:function(t,n){const e=j.encode(t);return n.set(e),{read:t.length,written:e.length}};function w(t,n,e){if(e===void 0){const f=j.encode(t),l=n(f.length);return M().subarray(l,l+f.length).set(f),g=f.length,l}let r=t.length,o=n(r);const u=M();let s=0;for(;s<r;s++){const f=t.charCodeAt(s);if(f>127)break;u[o+s]=f}if(s!==r){s!==0&&(t=t.slice(s)),o=e(o,r,r=s+t.length*3);const f=M().subarray(o+s,o+r),l=F(t,f);s+=l.written}return g=s,o}function W(t){return t==null}let h=null;function b(){return(h===null||h.byteLength===0)&&(h=new Int32Array(_.memory.buffer)),h}let A=null;function E(){return(A===null||A.byteLength===0)&&(A=new Float64Array(_.memory.buffer)),A}function S(t){const n=typeof t;if(n=="number"||n=="boolean"||t==null)return`${t}`;if(n=="string")return`"${t}"`;if(n=="symbol"){const o=t.description;return o==null?"Symbol":`Symbol(${o})`}if(n=="function"){const o=t.name;return typeof o=="string"&&o.length>0?`Function(${o})`:"Function"}if(Array.isArray(t)){const o=t.length;let u="[";o>0&&(u+=S(t[0]));for(let s=1;s<o;s++)u+=", "+S(t[s]);return u+="]",u}const e=/\[object ([^\]]+)\]/.exec(toString.call(t));let r;if(e.length>1)r=e[1];else return toString.call(t);if(r=="Object")try{return"Object("+JSON.stringify(t)+")"}catch{return"Object"}return t instanceof Error?`${t.name}: ${t.message}
${t.stack}`:r}function L(t,n){try{const o=_.__wbindgen_add_to_stack_pointer(-16),u=w(t,_.__wbindgen_malloc,_.__wbindgen_realloc),s=g,f=w(n,_.__wbindgen_malloc,_.__wbindgen_realloc),l=g;_.compile(o,u,s,f,l);var e=b()[o/4+0],r=b()[o/4+1];return p(e,r)}finally{_.__wbindgen_add_to_stack_pointer(16),_.__wbindgen_free(e,r)}}function T(t,n){try{const o=_.__wbindgen_add_to_stack_pointer(-16),u=w(t,_.__wbindgen_malloc,_.__wbindgen_realloc),s=g,f=w(n,_.__wbindgen_malloc,_.__wbindgen_realloc),l=g;_.run(o,u,s,f,l);var e=b()[o/4+0],r=b()[o/4+1];return p(e,r)}finally{_.__wbindgen_add_to_stack_pointer(16),_.__wbindgen_free(e,r)}}function d(t,n){try{return t.apply(this,n)}catch(e){_.__wbindgen_exn_store(i(e))}}class k{static __wrap(n){const e=Object.create(k.prototype);return e.ptr=n,e}__destroy_into_raw(){const n=this.ptr;return this.ptr=0,n}free(){const n=this.__destroy_into_raw();_.__wbg_wasmerruntimeerror_free(n)}static __wbgd_downcast_token(){const n=_.wasmerruntimeerror___wbgd_downcast_token();return O(n)}}async function U(t,n){if(typeof Response=="function"&&t instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(t,n)}catch(r){if(t.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",r);else throw r}const e=await t.arrayBuffer();return await WebAssembly.instantiate(e,n)}else{const e=await WebAssembly.instantiate(t,n);return e instanceof WebAssembly.Instance?{instance:e,module:t}:e}}function $(){const t={};return t.wbg={},t.wbg.__wbindgen_object_drop_ref=function(n){O(n)},t.wbg.__wbindgen_object_clone_ref=function(n){const e=c(n);return i(e)},t.wbg.__wbindgen_number_new=function(n){return i(n)},t.wbg.__wbindgen_string_new=function(n,e){const r=p(n,e);return i(r)},t.wbg.__wbindgen_is_undefined=function(n){return c(n)===void 0},t.wbg.__wbindgen_typeof=function(n){const e=typeof c(n);return i(e)},t.wbg.__wbindgen_string_get=function(n,e){const r=c(e),o=typeof r=="string"?r:void 0;var u=W(o)?0:w(o,_.__wbindgen_malloc,_.__wbindgen_realloc),s=g;b()[n/4+1]=s,b()[n/4+0]=u},t.wbg.__wbg_new_abda76e883ba8a5f=function(){const n=new Error;return i(n)},t.wbg.__wbg_stack_658279fe44541cf6=function(n,e){const r=c(e).stack,o=w(r,_.__wbindgen_malloc,_.__wbindgen_realloc),u=g;b()[n/4+1]=u,b()[n/4+0]=o},t.wbg.__wbg_error_f851667af71bcfc6=function(n,e){try{console.error(p(n,e))}finally{_.__wbindgen_free(n,e)}},t.wbg.__wbg_wasmerruntimeerror_new=function(n){const e=k.__wrap(n);return i(e)},t.wbg.__wbg_instanceof_Global_cb7cd1c1e42fca1b=function(n){let e;try{e=c(n)instanceof WebAssembly.Global}catch{e=!1}return e},t.wbg.__wbindgen_is_object=function(n){const e=c(n);return typeof e=="object"&&e!==null},t.wbg.__wbindgen_is_function=function(n){return typeof c(n)=="function"},t.wbg.__wbindgen_number_get=function(n,e){const r=c(e),o=typeof r=="number"?r:void 0;E()[n/8+1]=W(o)?0:o,b()[n/4+0]=!W(o)},t.wbg.__wbg_static_accessor_SYMBOL_45d4d15e3c4aeb33=function(){return i(Symbol)},t.wbg.__wbindgen_is_symbol=function(n){return typeof c(n)=="symbol"},t.wbg.__wbindgen_jsval_eq=function(n,e){return c(n)===c(e)},t.wbg.__wbg_get_27fe3dac1c4d0224=function(n,e){const r=c(n)[e>>>0];return i(r)},t.wbg.__wbg_length_e498fbc24f9c1d4f=function(n){return c(n).length},t.wbg.__wbg_get_baf4855f9a986186=function(){return d(function(n,e){const r=Reflect.get(c(n),c(e));return i(r)},arguments)},t.wbg.__wbg_call_95d1ea488d03e4e8=function(){return d(function(n,e){const r=c(n).call(c(e));return i(r)},arguments)},t.wbg.__wbg_new_f9876326328f45ed=function(){const n=new Object;return i(n)},t.wbg.__wbg_instanceof_Function_17551b1809ea1825=function(n){let e;try{e=c(n)instanceof Function}catch{e=!1}return e},t.wbg.__wbg_bind_73b3f819cbc666e0=function(n,e,r){const o=c(n).bind(c(e),c(r));return i(o)},t.wbg.__wbg_constructor_0c9828c8a7cf1dc6=function(n){const e=c(n).constructor;return i(e)},t.wbg.__wbg_buffer_cf65c07de34b9a08=function(n){const e=c(n).buffer;return i(e)},t.wbg.__wbg_newwithbyteoffsetandlength_9fb2f11355ecadf5=function(n,e,r){const o=new Uint8Array(c(n),e>>>0,r>>>0);return i(o)},t.wbg.__wbg_new_64f7331ea86b0949=function(){return d(function(n,e){const r=new WebAssembly.Instance(c(n),c(e));return i(r)},arguments)},t.wbg.__wbg_exports_ff0a0a2b2c092053=function(n){const e=c(n).exports;return i(e)},t.wbg.__wbg_new_3086807366ac3008=function(){return d(function(n){const e=new WebAssembly.Module(c(n));return i(e)},arguments)},t.wbg.__wbg_exports_ebe6dd251e00d3b0=function(n){const e=WebAssembly.Module.exports(c(n));return i(e)},t.wbg.__wbg_instanceof_Table_27c4cc013dcdbf38=function(n){let e;try{e=c(n)instanceof WebAssembly.Table}catch{e=!1}return e},t.wbg.__wbg_get_83118383573df91c=function(){return d(function(n,e){const r=c(n).get(e>>>0);return i(r)},arguments)},t.wbg.__wbg_instanceof_Memory_25684ccf3e250ca1=function(n){let e;try{e=c(n)instanceof WebAssembly.Memory}catch{e=!1}return e},t.wbg.__wbg_getPrototypeOf_d643a5523614ccc5=function(){return d(function(n){const e=Reflect.getPrototypeOf(c(n));return i(e)},arguments)},t.wbg.__wbg_set_6aa458a4ebdb65cb=function(){return d(function(n,e,r){return Reflect.set(c(n),c(e),c(r))},arguments)},t.wbg.__wbindgen_debug_string=function(n,e){const r=S(c(e)),o=w(r,_.__wbindgen_malloc,_.__wbindgen_realloc),u=g;b()[n/4+1]=u,b()[n/4+0]=o},t.wbg.__wbindgen_throw=function(n,e){throw new Error(p(n,e))},t.wbg.__wbindgen_rethrow=function(n){throw O(n)},t.wbg.__wbindgen_memory=function(){const n=_.memory;return i(n)},t.wbg.__wbindgen_function_table=function(){const n=_.__wbindgen_export_2;return i(n)},t}function N(t,n){return _=t.exports,I.__wbindgen_wasm_module=n,A=null,h=null,m=null,_}async function I(t){typeof t>"u"&&(t=new URL("/assets/rush_backend_bg-f28fbd06.wasm",self.location));const n=$();(typeof t=="string"||typeof Request=="function"&&t instanceof Request||typeof URL=="function"&&t instanceof URL)&&(t=fetch(t));const{instance:e,module:r}=await U(await t,n);return N(e,r)}q();async function q(){await I(),postMessage(["ready"]),onmessage=function(t){if(t.data[0]==="run"){let n=T(t.data[1],t.data[2]);postMessage(["finished",n])}else if(t.data[0]==="compile"){let n=L(t.data[1],t.data[2]);postMessage(["finished",n])}}}})();
