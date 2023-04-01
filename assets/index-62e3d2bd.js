import{a4 as Ae,a5 as gt,a6 as C,a7 as wt,S as lt,i as it,d as ct,G as k,P as z,j as a,F as X,v as u,a8 as ht,a9 as $t,U as at,aa as yt,ab as kt,ac as vt,ad as At,ae as St,af as Tt,A as te,Z as ue,f as L,O as v,m as I,Q as B,$ as fe,t as T,r as Ue,u as h,q as O,a0 as E,o as He,h as le,ag as ut,ah as ge,a1 as We}from"./vendor-82065986.js";import{D as jt,S as Ke,B as ft,I as Ne,C as _t,T as Ct,a as Lt,A as It,F as Ot,b as Et,O as pt}from"./vendor_mui-e78229ce.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const Be="#2c313a",Me="#353a42",Xe="#282c34",Bt="#3b3f4c",Mt="#21252b",Se="#abb2bf",Ft="#c678dd",Qe="#d19a66",ze="#61afef",Rt="#56b6c2",Wt="#e86671",dt="#5c6370",Nt="#848b98",zt=Ae.theme({"*":{fontFamily:"JetBrains Mono NL, monospace"},"&":{color:Se,backgroundColor:Xe,height:"100%"},".cm-scroller":{overflow:"auto"},".cm-content":{caretColor:ze},".cm-cursor, .cm-dropCursor":{borderLeftColor:ze},"&.cm-focused .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection":{backgroundColor:Bt},".cm-panels":{backgroundColor:Mt,color:Se},".cm-panels.cm-panels-top":{borderBottom:"2px solid black"},".cm-panels.cm-panels-bottom":{borderTop:"2px solid black"},".cm-searchMatch":{backgroundColor:"#72a1ff59",outline:"1px solid #457dff"},".cm-searchMatch.cm-searchMatch-selected":{backgroundColor:"#6199ff2f"},".cm-activeLine":{backgroundColor:Be},".cm-selectionMatch":{backgroundColor:"#aafe661a"},"&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket":{backgroundColor:"#bad0f847",outline:"1px solid #515a6b"},".cm-gutters":{backgroundColor:Xe,color:dt,border:"none"},".cm-activeLineGutter":{backgroundColor:Be},".cm-foldPlaceholder":{backgroundColor:"transparent",border:"none",color:"#ddd"},".cm-tooltip":{border:"none",backgroundColor:Me},".cm-tooltip .cm-tooltip-arrow:before":{borderTopColor:"transparent",borderBottomColor:"transparent"},".cm-tooltip .cm-tooltip-arrow:after":{borderTopColor:Me,borderBottomColor:Me},".cm-tooltip-autocomplete":{"& > ul > li[aria-selected]":{backgroundColor:Be,color:Se}}},{dark:!0}),Pt=gt.define([{tag:C.keyword,color:Ft},{tag:[C.variableName,C.operator],color:Se},{tag:[C.bool,C.null,C.typeName,C.number],color:Qe},{tag:[C.function(C.variableName),C.function(C.propertyName)],color:ze},{tag:[C.propertyName,C.standard(C.function(C.variableName))],color:Rt},{tag:[C.local(C.variableName),C.standard(C.variableName)],color:Wt},{tag:C.comment,color:dt},{tag:C.character,color:Qe},{tag:[C.bracket,C.separator],color:Nt}]),Dt=[zt,wt(Pt)];let m;const K=new Array(128).fill(void 0);K.push(void 0,null,!0,!1);function d(o){return K[o]}let be=K.length;function Ut(o){o<132||(K[o]=be,be=o)}function Pe(o){const e=d(o);return Ut(o),e}function S(o){be===K.length&&K.push(K.length+1);const e=be;return be=K[e],K[e]=o,e}const bt=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});bt.decode();let _e=null;function Te(){return(_e===null||_e.byteLength===0)&&(_e=new Uint8Array(m.memory.buffer)),_e}function me(o,e){return bt.decode(Te().subarray(o,o+e))}let Y=0;const je=new TextEncoder("utf-8"),Ht=typeof je.encodeInto=="function"?function(o,e){return je.encodeInto(o,e)}:function(o,e){const t=je.encode(o);return e.set(t),{read:o.length,written:t.length}};function se(o,e,t){if(t===void 0){const i=je.encode(o),c=e(i.length);return Te().subarray(c,c+i.length).set(i),Y=i.length,c}let n=o.length,r=e(n);const s=Te();let l=0;for(;l<n;l++){const i=o.charCodeAt(l);if(i>127)break;s[r+l]=i}if(l!==n){l!==0&&(o=o.slice(l)),r=t(r,n,n=l+o.length*3);const i=Te().subarray(r+l,r+n),c=Ht(o,i);l+=c.written}return Y=l,r}function Fe(o){return o==null}let pe=null;function H(){return(pe===null||pe.byteLength===0)&&(pe=new Int32Array(m.memory.buffer)),pe}let de=null;function xt(){return(de===null||de.byteLength===0)&&(de=new Float64Array(m.memory.buffer)),de}function De(o){const e=typeof o;if(e=="number"||e=="boolean"||o==null)return`${o}`;if(e=="string")return`"${o}"`;if(e=="symbol"){const r=o.description;return r==null?"Symbol":`Symbol(${r})`}if(e=="function"){const r=o.name;return typeof r=="string"&&r.length>0?`Function(${r})`:"Function"}if(Array.isArray(o)){const r=o.length;let s="[";r>0&&(s+=De(o[0]));for(let l=1;l<r;l++)s+=", "+De(o[l]);return s+="]",s}const t=/\[object ([^\]]+)\]/.exec(toString.call(o));let n;if(t.length>1)n=t[1];else return toString.call(o);if(n=="Object")try{return"Object("+JSON.stringify(o)+")"}catch{return"Object"}return o instanceof Error?`${o.name}: ${o.message}
${o.stack}`:n}function Gt(o){try{const n=m.__wbindgen_add_to_stack_pointer(-16),r=se(o,m.__wbindgen_malloc,m.__wbindgen_realloc),s=Y;m.analyze(n,r,s);var e=H()[n/4+0],t=H()[n/4+1];return me(e,t)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_free(e,t)}}function Vt(o,e){try{const r=m.__wbindgen_add_to_stack_pointer(-16),s=se(o,m.__wbindgen_malloc,m.__wbindgen_realloc),l=Y,i=se(e,m.__wbindgen_malloc,m.__wbindgen_realloc),c=Y;m.run(r,s,l,i,c);var t=H()[r/4+0],n=H()[r/4+1];return me(t,n)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_free(t,n)}}function ee(o,e){try{return o.apply(this,e)}catch(t){m.__wbindgen_exn_store(S(t))}}class xe{static __wrap(e){const t=Object.create(xe.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();m.__wbg_wasmerruntimeerror_free(e)}static __wbgd_downcast_token(){const e=m.wasmerruntimeerror___wbgd_downcast_token();return Pe(e)}}async function qt(o,e){if(typeof Response=="function"&&o instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(o,e)}catch(n){if(o.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",n);else throw n}const t=await o.arrayBuffer();return await WebAssembly.instantiate(t,e)}else{const t=await WebAssembly.instantiate(o,e);return t instanceof WebAssembly.Instance?{instance:t,module:o}:t}}function Jt(){const o={};return o.wbg={},o.wbg.__wbindgen_object_drop_ref=function(e){Pe(e)},o.wbg.__wbindgen_object_clone_ref=function(e){const t=d(e);return S(t)},o.wbg.__wbindgen_number_new=function(e){return S(e)},o.wbg.__wbindgen_string_new=function(e,t){const n=me(e,t);return S(n)},o.wbg.__wbindgen_is_undefined=function(e){return d(e)===void 0},o.wbg.__wbindgen_typeof=function(e){const t=typeof d(e);return S(t)},o.wbg.__wbindgen_string_get=function(e,t){const n=d(t),r=typeof n=="string"?n:void 0;var s=Fe(r)?0:se(r,m.__wbindgen_malloc,m.__wbindgen_realloc),l=Y;H()[e/4+1]=l,H()[e/4+0]=s},o.wbg.__wbg_new_abda76e883ba8a5f=function(){const e=new Error;return S(e)},o.wbg.__wbg_stack_658279fe44541cf6=function(e,t){const n=d(t).stack,r=se(n,m.__wbindgen_malloc,m.__wbindgen_realloc),s=Y;H()[e/4+1]=s,H()[e/4+0]=r},o.wbg.__wbg_error_f851667af71bcfc6=function(e,t){try{console.error(me(e,t))}finally{m.__wbindgen_free(e,t)}},o.wbg.__wbg_wasmerruntimeerror_new=function(e){const t=xe.__wrap(e);return S(t)},o.wbg.__wbg_instanceof_Global_cb7cd1c1e42fca1b=function(e){let t;try{t=d(e)instanceof WebAssembly.Global}catch{t=!1}return t},o.wbg.__wbindgen_is_object=function(e){const t=d(e);return typeof t=="object"&&t!==null},o.wbg.__wbindgen_is_function=function(e){return typeof d(e)=="function"},o.wbg.__wbindgen_number_get=function(e,t){const n=d(t),r=typeof n=="number"?n:void 0;xt()[e/8+1]=Fe(r)?0:r,H()[e/4+0]=!Fe(r)},o.wbg.__wbg_static_accessor_SYMBOL_45d4d15e3c4aeb33=function(){return S(Symbol)},o.wbg.__wbindgen_is_symbol=function(e){return typeof d(e)=="symbol"},o.wbg.__wbindgen_jsval_eq=function(e,t){return d(e)===d(t)},o.wbg.__wbg_get_27fe3dac1c4d0224=function(e,t){const n=d(e)[t>>>0];return S(n)},o.wbg.__wbg_length_e498fbc24f9c1d4f=function(e){return d(e).length},o.wbg.__wbg_get_baf4855f9a986186=function(){return ee(function(e,t){const n=Reflect.get(d(e),d(t));return S(n)},arguments)},o.wbg.__wbg_call_95d1ea488d03e4e8=function(){return ee(function(e,t){const n=d(e).call(d(t));return S(n)},arguments)},o.wbg.__wbg_new_f9876326328f45ed=function(){const e=new Object;return S(e)},o.wbg.__wbg_instanceof_Function_17551b1809ea1825=function(e){let t;try{t=d(e)instanceof Function}catch{t=!1}return t},o.wbg.__wbg_bind_73b3f819cbc666e0=function(e,t,n){const r=d(e).bind(d(t),d(n));return S(r)},o.wbg.__wbg_constructor_0c9828c8a7cf1dc6=function(e){const t=d(e).constructor;return S(t)},o.wbg.__wbg_buffer_cf65c07de34b9a08=function(e){const t=d(e).buffer;return S(t)},o.wbg.__wbg_newwithbyteoffsetandlength_9fb2f11355ecadf5=function(e,t,n){const r=new Uint8Array(d(e),t>>>0,n>>>0);return S(r)},o.wbg.__wbg_new_64f7331ea86b0949=function(){return ee(function(e,t){const n=new WebAssembly.Instance(d(e),d(t));return S(n)},arguments)},o.wbg.__wbg_exports_ff0a0a2b2c092053=function(e){const t=d(e).exports;return S(t)},o.wbg.__wbg_new_3086807366ac3008=function(){return ee(function(e){const t=new WebAssembly.Module(d(e));return S(t)},arguments)},o.wbg.__wbg_exports_ebe6dd251e00d3b0=function(e){const t=WebAssembly.Module.exports(d(e));return S(t)},o.wbg.__wbg_instanceof_Table_27c4cc013dcdbf38=function(e){let t;try{t=d(e)instanceof WebAssembly.Table}catch{t=!1}return t},o.wbg.__wbg_get_83118383573df91c=function(){return ee(function(e,t){const n=d(e).get(t>>>0);return S(n)},arguments)},o.wbg.__wbg_instanceof_Memory_25684ccf3e250ca1=function(e){let t;try{t=d(e)instanceof WebAssembly.Memory}catch{t=!1}return t},o.wbg.__wbg_getPrototypeOf_d643a5523614ccc5=function(){return ee(function(e){const t=Reflect.getPrototypeOf(d(e));return S(t)},arguments)},o.wbg.__wbg_set_6aa458a4ebdb65cb=function(){return ee(function(e,t,n){return Reflect.set(d(e),d(t),d(n))},arguments)},o.wbg.__wbindgen_debug_string=function(e,t){const n=De(d(t)),r=se(n,m.__wbindgen_malloc,m.__wbindgen_realloc),s=Y;H()[e/4+1]=s,H()[e/4+0]=r},o.wbg.__wbindgen_throw=function(e,t){throw new Error(me(e,t))},o.wbg.__wbindgen_rethrow=function(e){throw Pe(e)},o.wbg.__wbindgen_memory=function(){const e=m.memory;return S(e)},o.wbg.__wbindgen_function_table=function(){const e=m.__wbindgen_export_2;return S(e)},o}function Kt(o,e){return m=o.exports,mt.__wbindgen_wasm_module=e,de=null,pe=null,_e=null,m}async function mt(o){typeof o>"u"&&(o=new URL("/assets/rush_backend_bg-f28fbd06.wasm",self.location));const e=Jt();(typeof o=="string"||typeof Request=="function"&&o instanceof Request||typeof URL=="function"&&o instanceof URL)&&(o=fetch(o));const{instance:t,module:n}=await qt(await o,e);return Kt(t,n)}class Xt{constructor(){mt()}lint(e){let t=Gt(e);return JSON.parse(t)}run(e,t){let n=Vt(e,t);return JSON.parse(n)}}function Qt(o){let e;return{c(){e=k("div"),z(e,"class","editor svelte-9vsa7j")},m(t,n){a(t,e,n),o[2](e)},p:X,i:X,o:X,d(t){t&&u(e),o[2](null)}}}function Yt(o,e,t){let{code:n=""}=e;function r(b){s===void 0||s.state.doc.toString()===b||s.dispatch(s.state.update({changes:{from:0,to:s.state.doc.length,insert:b}}))}let s,l;const i=ht();let c,_;const w=$t(async()=>{let b=[],j=_.lint(n);for(let p of j)b.push(Object.create({from:p.span.start.charIdx,to:p.span.end.charIdx,severity:p.level,source:"rush analyzer",message:p.message}));return b});at(()=>{_=new Xt;let b=yt.create({extensions:[kt,vt.of([At]),St(),w,Tt(),Dt,Ae.updateListener.of(j=>{j.docChanged&&(c&&clearTimeout(c),c=setTimeout(()=>{i("update",n)},500))}),Ae.updateListener.of(j=>{j.docChanged&&t(1,n=s.state.doc.toString())})]});s=new Ae({state:b,parent:l})});function $(b){te[b?"unshift":"push"](()=>{l=b,t(0,l)})}return o.$$set=b=>{"code"in b&&t(1,n=b.code)},o.$$.update=()=>{o.$$.dirty&2&&r(n)},[l,n,$]}class Zt extends lt{constructor(e){super(),it(this,e,Yt,Qt,ct,{code:1})}}function en(){return new Worker("/assets/rush.worker-dcac950c.js")}const tn=`// Welcome to the playground of the rush programming language.
// For more information, please visit \`https://rush-lang.de\`
let mut A_GLOBAL_VARIABLE = 41;
let FOUR = 4;
let TWO = 2;

// Every rush program needs to contain one main function.
fn main(/* It cannot take any parameters */) /* Nor can it return a value. */ {
    A_GLOBAL_VARIABLE += 1;

    let result =
    types()
    - infix_expressions()
    + prefix_expressions(5)
    - pointers() as  int
    - control_flow()
    - A_GLOBAL_VARIABLE
    - FOUR ** 2
    - TWO ** 3
    - 100000000 / 100000000 ;


   exit(result);
}

fn infix_expressions() -> int /* This function returns an integer */ {
    // Logical operators are evaluated lazily
    let result_0 = false && exit(99);
    let result_1 = true || exit(99);
    // Due to this, the \`exit\` function was not called these two times

    let character = 'z';
    let number = (character - 'a') as int; // This results in 25.
    number + 1;  // This is a statement and therefore does not return.
    // return 0; // Functions can also return values explicitly.
    number + 17 + result_0 as int + result_1 as int // The value of \`number\` + 1 is returned implicitly (no semicolon)
}

fn prefix_expressions(input: int) -> int {
    let output = input as float / 3f;
    -output as int // Floats are rounded down when using \`as\`
}

fn pointers() -> float {
    let mut a_float = 3.14159265;   // The source variable needs to be mutable
    let pointer_to_a = &a_float;    // A pointer is created by using the \`&\` operator
    *pointer_to_a += 2f;            // When assigning to the variable behind a pointer,
                                    // the \`*\` (deref) operator is used.
    *pointer_to_a                   // This returns the value stored in \`a_float\`
}

fn control_flow() -> int {
    let mut counter_0 = 0;
    loop {                          // Unconditional loop
        if counter_0 == 10 {
            break;
        }
        counter_0 += 1;
    }

    let mut counter_1 = 0;
    while counter_1 < 10 {          // While loop
        counter_1 +=1;
    }

    let mut counter_2 = 0;
    for i = 0; i < 10; i += 1 {     // For loop
        counter_2 += 1;
    }

    counter_0 + counter_1 - counter_2
}

fn types() -> int {
    let integer = 42;
    let float_0 = 3.1415;
    let float_1 = 2f;
    let float_2 = float_0 + float_1;
    let bool = true | false;
    let char = 'x';

    integer
        + float_2 as int
        + bool as int
        + char as int
}
`,nn=`// Calculates a digit of the Fibonacci sequence.
fn main() {
    // fib(10) = 55
    exit(fib_rec(10))
}

fn fib_rec(n: int) -> int {
    if n < 2 {
        n
    } else {
        fib_rec(n - 2) + fib_rec(n - 1)
    }
}

`,on=`fn main() {
    exit(pow(2, 4)) // 2 ** 4 = 16
}

fn pow(mut base: int, mut exp: int) -> int {
    if exp == 0 {
        return 1;
    }
    if exp < 0 {
        return 0;
    }

    let mut acc = 1;

    while exp > 1 {
        if (exp & 1) == 1 {
            acc *= base
        }
        exp /= 2;
        base *= base;
    }

    acc * base
}
`,rn=`// This script approximates some digits of Pi.
// The final output is an integer which approximates to PI * 1000000
let ITERATIONS = 4000000;

fn main() {
    let mut k = 3f;
    let mut s = 1f;

    for i = 0; i < ITERATIONS; i+= 1 {
        s = s-((1f / k) * ((-1) ** i) as float);
        k += 2f;
    }

    let result = ((4f * s) * 1000000f);
    exit(result as int);
}
`,sn=`// This script approximates some digits of E.
// The final output is an integer which approximates to E * 1000000000000000
fn main() {
  let mut e = 1f;
  let mut f = 1f;

  for i = 2; i < 100_000; i += 1 {
    e += 1f / f;
    f *= i as float;
  }

  let result = (e * 1000000000000000f) as int;
  exit(result)
}
`,ln=`// This script approximates some digits of Apéry's theorem.
// The final output is an integer which approximates to Apéry * 10000000
fn main() {
    let mut res = 1f;

    for i = 2; i < 30000; i += 1 {
        res += (1f / (i ** 3) as float);
    }

    let FAC = 10000000f;
    exit((res * FAC) as int)
}
`;function Ye(o,e,t){const n=o.slice();return n[29]=e[t],n}function Ze(o,e,t){const n=o.slice();return n[32]=e[t],n}function cn(o){let e;return{c(){e=E("Using The Playground")},m(t,n){a(t,e,n)},d(t){t&&u(e)}}}function an(o){let e,t,n,r,s,l,i,c,_,w,$,b,j;return{c(){e=k("p"),e.innerHTML=`The <a class="highlight svelte-jzatbx" href="https://github.com/rush-rs/rush-playground" target="_blank" rel="noreferrer">rush playground</a>
                allows everyone to use the
                <a class="highlight svelte-jzatbx" href="https://rush-lang.de" target="_blank" rel="noreferrer">rush</a> programming language without the need for an installation.`,t=v(),n=k("p"),n.innerHTML=`All changes made to the current script are saved locally. Therefore, you can reload
                the page without hesitation. If you do want to erase your current changes, use the <code class="highlight svelte-jzatbx">load</code> button in the top right corner.`,r=v(),s=k("p"),s.innerHTML=`This button can also be used to switch to other code templates. For this, the
                desired template is to be selected using the drop down menu at the top. After the
                selection has been made, the <code class="highlight svelte-jzatbx">load</code> button is to be pressed.`,l=v(),i=k("p"),i.innerHTML=`To run the current code using a rush interpreter, use the <i class="material-icons icon svelte-jzatbx">play_arrow</i>
                button in the top right corder. If the script does not stop when expected, it can be
                terminated using the
                <i class="material-icons icon svelte-jzatbx">cancel</i> button.`,c=v(),_=k("p"),_.textContent=`There are multiple backends for rush. While the first two backends can execute rush
                code, the remaining backends can only compile rush. If a compiler backend is used,
                the output of the current script can be seen on the right.`,w=v(),$=k("h4"),$.textContent="Keybindings",b=v(),j=k("ul"),j.innerHTML=`<li><code class="highlight svelte-jzatbx">CTRL + S</code>: force save the current code</li> 
                <li><code class="highlight svelte-jzatbx">F8</code>: run / compile the current code</li> 
                <li><code class="highlight svelte-jzatbx">F9</code>: terminate current interpreter</li>`,z($,"class","svelte-jzatbx"),z(j,"class","svelte-jzatbx")},m(p,g){a(p,e,g),a(p,t,g),a(p,n,g),a(p,r,g),a(p,s,g),a(p,l,g),a(p,i,g),a(p,c,g),a(p,_,g),a(p,w,g),a(p,$,g),a(p,b,g),a(p,j,g)},p:X,d(p){p&&u(e),p&&u(t),p&&u(n),p&&u(r),p&&u(s),p&&u(l),p&&u(i),p&&u(c),p&&u(_),p&&u(w),p&&u($),p&&u(b),p&&u(j)}}}function un(o){let e;return{c(){e=E("Close")},m(t,n){a(t,e,n)},d(t){t&&u(e)}}}function fn(o){let e,t;return e=new _t({props:{$$slots:{default:[un]},$$scope:{ctx:o}}}),{c(){L(e.$$.fragment)},m(n,r){I(e,n,r),t=!0},p(n,r){const s={};r[1]&16&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(h(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){O(e,n)}}}function _n(o){let e,t;return e=new ft({props:{$$slots:{default:[fn]},$$scope:{ctx:o}}}),e.$on("click",o[17]),{c(){L(e.$$.fragment)},m(n,r){I(e,n,r),t=!0},p(n,r){const s={};r[1]&16&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(h(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){O(e,n)}}}function pn(o){let e,t,n,r,s,l;return e=new Ct({props:{id:"help-title",$$slots:{default:[cn]},$$scope:{ctx:o}}}),n=new Lt({props:{id:"help-content",$$slots:{default:[an]},$$scope:{ctx:o}}}),s=new It({props:{$$slots:{default:[_n]},$$scope:{ctx:o}}}),{c(){L(e.$$.fragment),t=v(),L(n.$$.fragment),r=v(),L(s.$$.fragment)},m(i,c){I(e,i,c),a(i,t,c),I(n,i,c),a(i,r,c),I(s,i,c),l=!0},p(i,c){const _={};c[1]&16&&(_.$$scope={dirty:c,ctx:i}),e.$set(_);const w={};c[1]&16&&(w.$$scope={dirty:c,ctx:i}),n.$set(w);const $={};c[0]&512|c[1]&16&&($.$$scope={dirty:c,ctx:i}),s.$set($)},i(i){l||(h(e.$$.fragment,i),h(n.$$.fragment,i),h(s.$$.fragment,i),l=!0)},o(i){T(e.$$.fragment,i),T(n.$$.fragment,i),T(s.$$.fragment,i),l=!1},d(i){O(e,i),i&&u(t),O(n,i),i&&u(r),O(s,i)}}}function dn(o){let e=o[10][o[32]][1]+"",t;return{c(){t=E(e)},m(n,r){a(n,t,r)},p:X,d(n){n&&u(t)}}}function et(o){let e,t;return e=new pt({props:{value:o[32],$$slots:{default:[dn]},$$scope:{ctx:o}}}),{c(){L(e.$$.fragment)},m(n,r){I(e,n,r),t=!0},p(n,r){const s={};r[1]&16&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(h(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){O(e,n)}}}function bn(o){let e,t,n=Object.keys(o[10]),r=[];for(let l=0;l<n.length;l+=1)r[l]=et(Ze(o,n,l));const s=l=>T(r[l],1,1,()=>{r[l]=null});return{c(){for(let l=0;l<r.length;l+=1)r[l].c();e=le()},m(l,i){for(let c=0;c<r.length;c+=1)r[c].m(l,i);a(l,e,i),t=!0},p(l,i){if(i[0]&1024){n=Object.keys(l[10]);let c;for(c=0;c<n.length;c+=1){const _=Ze(l,n,c);r[c]?(r[c].p(_,i),h(r[c],1)):(r[c]=et(_),r[c].c(),h(r[c],1),r[c].m(e.parentNode,e))}for(He(),c=n.length;c<r.length;c+=1)s(c);Ue()}},i(l){if(!t){for(let i=0;i<n.length;i+=1)h(r[i]);t=!0}},o(l){r=r.filter(Boolean);for(let i=0;i<r.length;i+=1)T(r[i]);t=!1},d(l){ut(r,l),l&&u(e)}}}function mn(o){let e;return{c(){e=E("Load")},m(t,n){a(t,e,n)},d(t){t&&u(e)}}}function gn(o){let e,t;return e=new _t({props:{$$slots:{default:[mn]},$$scope:{ctx:o}}}),{c(){L(e.$$.fragment)},m(n,r){I(e,n,r),t=!0},p(n,r){const s={};r[1]&16&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(h(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){O(e,n)}}}function wn(o){let e;return{c(){e=E("help")},m(t,n){a(t,e,n)},d(t){t&&u(e)}}}function hn(o){let e=o[11][o[29]]+"",t;return{c(){t=E(e)},m(n,r){a(n,t,r)},p:X,d(n){n&&u(t)}}}function tt(o){let e,t;return e=new pt({props:{value:o[29],$$slots:{default:[hn]},$$scope:{ctx:o}}}),{c(){L(e.$$.fragment)},m(n,r){I(e,n,r),t=!0},p(n,r){const s={};r[1]&16&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(h(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){O(e,n)}}}function $n(o){let e,t,n=Object.keys(o[11]),r=[];for(let l=0;l<n.length;l+=1)r[l]=tt(Ye(o,n,l));const s=l=>T(r[l],1,1,()=>{r[l]=null});return{c(){for(let l=0;l<r.length;l+=1)r[l].c();e=le()},m(l,i){for(let c=0;c<r.length;c+=1)r[c].m(l,i);a(l,e,i),t=!0},p(l,i){if(i[0]&2048){n=Object.keys(l[11]);let c;for(c=0;c<n.length;c+=1){const _=Ye(l,n,c);r[c]?(r[c].p(_,i),h(r[c],1)):(r[c]=tt(_),r[c].c(),h(r[c],1),r[c].m(e.parentNode,e))}for(He(),c=n.length;c<r.length;c+=1)s(c);Ue()}},i(l){if(!t){for(let i=0;i<n.length;i+=1)h(r[i]);t=!0}},o(l){r=r.filter(Boolean);for(let i=0;i<r.length;i+=1)T(r[i]);t=!1},d(l){ut(r,l),l&&u(e)}}}function yn(o){let e,t;return e=new Ot({props:{$$slots:{label:[An],default:[vn]},$$scope:{ctx:o}}}),{c(){L(e.$$.fragment)},m(n,r){I(e,n,r),t=!0},p(n,r){const s={};r[0]&8|r[1]&16&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(h(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){O(e,n)}}}function kn(o){let e,t,n,r;return e=new Ne({props:{class:"material-icons",disabled:o[6],$$slots:{default:[Sn]},$$scope:{ctx:o}}}),e.$on("click",o[12]),n=new Ne({props:{class:"material-icons",disabled:!o[6],$$slots:{default:[Tn]},$$scope:{ctx:o}}}),n.$on("click",o[14]),{c(){L(e.$$.fragment),t=v(),L(n.$$.fragment)},m(s,l){I(e,s,l),a(s,t,l),I(n,s,l),r=!0},p(s,l){const i={};l[0]&64&&(i.disabled=s[6]),l[1]&16&&(i.$$scope={dirty:l,ctx:s}),e.$set(i);const c={};l[0]&64&&(c.disabled=!s[6]),l[1]&16&&(c.$$scope={dirty:l,ctx:s}),n.$set(c)},i(s){r||(h(e.$$.fragment,s),h(n.$$.fragment,s),r=!0)},o(s){T(e.$$.fragment,s),T(n.$$.fragment,s),r=!1},d(s){O(e,s),s&&u(t),O(n,s)}}}function vn(o){let e,t,n;function r(l){o[25](l)}let s={};return o[3]!==void 0&&(s.checked=o[3]),e=new Et({props:s}),te.push(()=>ue(e,"checked",r,o[3])),{c(){L(e.$$.fragment)},m(l,i){I(e,l,i),n=!0},p(l,i){const c={};!t&&i[0]&8&&(t=!0,c.checked=l[3],fe(()=>t=!1)),e.$set(c)},i(l){n||(h(e.$$.fragment,l),n=!0)},o(l){T(e.$$.fragment,l),n=!1},d(l){O(e,l)}}}function An(o){let e;return{c(){e=k("span"),e.textContent="Show Diagnostics",z(e,"slot","label")},m(t,n){a(t,e,n)},p:X,d(t){t&&u(e)}}}function Sn(o){let e;return{c(){e=E("play_arrow")},m(t,n){a(t,e,n)},d(t){t&&u(e)}}}function Tn(o){let e;return{c(){e=E("cancel")},m(t,n){a(t,e,n)},d(t){t&&u(e)}}}function jn(o){let e;return{c(){e=E("Press the play button in order to start program execution")},m(t,n){a(t,e,n)},p:X,d(t){t&&u(e)}}}function Cn(o){let e,t,n=o[2].diagnostics&&(o[3]||o[2].output===void 0)&&nt(o);function r(i,c){if(i[2].error)return En;if(i[2].output!==void 0)return On}let s=r(o),l=s&&s(o);return{c(){n&&n.c(),e=v(),l&&l.c(),t=le()},m(i,c){n&&n.m(i,c),a(i,e,c),l&&l.m(i,c),a(i,t,c)},p(i,c){i[2].diagnostics&&(i[3]||i[2].output===void 0)?n?n.p(i,c):(n=nt(i),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null),s===(s=r(i))&&l?l.p(i,c):(l&&l.d(1),l=s&&s(i),l&&(l.c(),l.m(t.parentNode,t)))},d(i){n&&n.d(i),i&&u(e),l&&l.d(i),i&&u(t)}}}function Ln(o){let e;function t(s,l){return s[7].runtimeError?Fn:s[7].code!==null?Mn:Bn}let n=t(o),r=n(o);return{c(){r.c(),e=le()},m(s,l){r.m(s,l),a(s,e,l)},p(s,l){n===(n=t(s))&&r?r.p(s,l):(r.d(1),r=n(s),r&&(r.c(),r.m(e.parentNode,e)))},d(s){r.d(s),s&&u(e)}}}function In(o){let e;return{c(){e=E("Backend is running...")},m(t,n){a(t,e,n)},p:X,d(t){t&&u(e)}}}function nt(o){let e,t=o[2].diagnostics+"",n,r;return{c(){e=new ge(!1),n=v(),r=k("div"),e.a=n,z(r,"class","main__output__terminal__sep svelte-jzatbx")},m(s,l){e.m(t,s,l),a(s,n,l),a(s,r,l)},p(s,l){l[0]&4&&t!==(t=s[2].diagnostics+"")&&e.p(t)},d(s){s&&e.d(),s&&u(n),s&&u(r)}}}function On(o){let e,t=o[2].output+"",n;return{c(){e=new ge(!1),n=le(),e.a=n},m(r,s){e.m(t,r,s),a(r,n,s)},p(r,s){s[0]&4&&t!==(t=r[2].output+"")&&e.p(t)},d(r){r&&u(n),r&&e.d()}}}function En(o){let e,t,n,r,s=o[2].error+"",l,i;return{c(){e=E(`Compilation failed:
                        `),t=k("br"),n=v(),r=new ge(!1),l=v(),i=k("br"),r.a=l},m(c,_){a(c,e,_),a(c,t,_),a(c,n,_),r.m(s,c,_),a(c,l,_),a(c,i,_)},p(c,_){_[0]&4&&s!==(s=c[2].error+"")&&r.p(s)},d(c){c&&u(e),c&&u(t),c&&u(n),c&&r.d(),c&&u(l),c&&u(i)}}}function Bn(o){let e,t,n,r,s=o[7].diagnostics+"",l;return{c(){e=E(`Compilation failed:
                        `),t=k("br"),n=v(),r=new ge(!1),l=le(),r.a=l},m(i,c){a(i,e,c),a(i,t,c),a(i,n,c),r.m(s,i,c),a(i,l,c)},p(i,c){c[0]&128&&s!==(s=i[7].diagnostics+"")&&r.p(s)},d(i){i&&u(e),i&&u(t),i&&u(n),i&&u(l),i&&r.d()}}}function Mn(o){let e,t=o[7].code+"",n,r=o[7].diagnostics!==""&&ot(o);return{c(){r&&r.c(),e=E(`

                        Program stopped with code `),n=E(t)},m(s,l){r&&r.m(s,l),a(s,e,l),a(s,n,l)},p(s,l){s[7].diagnostics!==""?r?r.p(s,l):(r=ot(s),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null),l[0]&128&&t!==(t=s[7].code+"")&&We(n,t)},d(s){r&&r.d(s),s&&u(e),s&&u(n)}}}function Fn(o){let e,t,n,r=o[7].runtimeError.kind+"",s,l,i=o[7].runtimeError.message+"",c;return{c(){e=E(`Interpreter crashed:
                        `),t=k("br"),n=v(),s=E(r),l=E(": "),c=E(i)},m(_,w){a(_,e,w),a(_,t,w),a(_,n,w),a(_,s,w),a(_,l,w),a(_,c,w)},p(_,w){w[0]&128&&r!==(r=_[7].runtimeError.kind+"")&&We(s,r),w[0]&128&&i!==(i=_[7].runtimeError.message+"")&&We(c,i)},d(_){_&&u(e),_&&u(t),_&&u(n),_&&u(s),_&&u(l),_&&u(c)}}}function ot(o){let e,t=o[7].diagnostics+"",n,r,s,l;return{c(){e=new ge(!1),n=v(),r=k("br"),s=v(),l=k("br"),e.a=n},m(i,c){e.m(t,i,c),a(i,n,c),a(i,r,c),a(i,s,c),a(i,l,c)},p(i,c){c[0]&128&&t!==(t=i[7].diagnostics+"")&&e.p(t)},d(i){i&&e.d(),i&&u(n),i&&u(r),i&&u(s),i&&u(l)}}}function Rn(o){let e,t,n,r,s,l,i,c,_,w,$,b,j,p,g,J,ne,P,ie,x,we,G,D,ce,he,oe,M,W,$e,Z,re;function A(f){o[18](f)}let U={"aria-labelledby":"help-title","aria-describedby":"help-content",$$slots:{default:[pn]},$$scope:{ctx:o}};o[9]!==void 0&&(U.open=o[9]),t=new jt({props:U}),te.push(()=>ue(t,"open",A,o[9]));function F(f){o[19](f)}let N={};o[0]!==void 0&&(N.code=o[0]),i=new Zt({props:N}),te.push(()=>ue(i,"code",F,o[0])),i.$on("update",o[13]);function Q(f){o[21](f)}let ae={label:"Select Template",$$slots:{default:[bn]},$$scope:{ctx:o}};o[5]!==void 0&&(ae.value=o[5]),g=new Ke({props:ae}),te.push(()=>ue(g,"value",Q,o[5])),P=new ft({props:{variant:"raised",disabled:(o[5]===o[4]||o[6])&&o[10][o[5]][0]===o[0],$$slots:{default:[gn]},$$scope:{ctx:o}}}),P.$on("click",o[15]),x=new Ne({props:{size:"button",class:"material-icons",$$slots:{default:[wn]},$$scope:{ctx:o}}}),x.$on("click",o[22]);function ye(f){o[23](f)}let R={label:"Select Backend",$$slots:{default:[$n]},$$scope:{ctx:o}};o[1]!==void 0&&(R.value=o[1]),D=new Ke({props:R}),te.push(()=>ue(D,"value",ye,o[1])),D.$on("SMUISelect:change",o[24]);const ke=[kn,yn],V=[];function Ge(f,y){return y[0]&2&&(oe=null),oe==null&&(oe=!!["vmInterpreter","tree","wasmRun"].includes(f[1])),oe?0:1}M=Ge(o,[-1,-1]),W=V[M]=ke[M](o);function Ve(f,y){return f[6]?In:f[7]?Ln:f[2]?Cn:jn}let ve=Ve(o),q=ve(o);return{c(){e=k("main"),L(t.$$.fragment),r=v(),s=k("div"),l=k("div"),L(i.$$.fragment),_=v(),w=k("div"),$=v(),b=k("div"),j=k("div"),p=k("div"),L(g.$$.fragment),ne=v(),L(P.$$.fragment),ie=v(),L(x.$$.fragment),we=v(),G=k("div"),L(D.$$.fragment),he=v(),W.c(),$e=v(),Z=k("div"),q.c(),z(l,"class","main__editor svelte-jzatbx"),z(w,"class","main__resizer svelte-jzatbx"),z(p,"class","main__output__nav__top svelte-jzatbx"),z(G,"class","main__output__nav__bottom svelte-jzatbx"),z(j,"class","main__output__nav svelte-jzatbx"),z(Z,"class","main__output__terminal svelte-jzatbx"),z(b,"class","main__output svelte-jzatbx"),z(s,"class","main svelte-jzatbx")},m(f,y){a(f,e,y),I(t,e,null),B(e,r),B(e,s),B(s,l),I(i,l,null),B(s,_),B(s,w),o[20](w),B(s,$),B(s,b),B(b,j),B(j,p),I(g,p,null),B(p,ne),I(P,p,null),B(p,ie),I(x,p,null),B(j,we),B(j,G),I(D,G,null),B(G,he),V[M].m(G,null),B(b,$e),B(b,Z),q.m(Z,null),re=!0},p(f,y){const Ce={};y[0]&512|y[1]&16&&(Ce.$$scope={dirty:y,ctx:f}),!n&&y[0]&512&&(n=!0,Ce.open=f[9],fe(()=>n=!1)),t.$set(Ce);const qe={};!c&&y[0]&1&&(c=!0,qe.code=f[0],fe(()=>c=!1)),i.$set(qe);const Le={};y[1]&16&&(Le.$$scope={dirty:y,ctx:f}),!J&&y[0]&32&&(J=!0,Le.value=f[5],fe(()=>J=!1)),g.$set(Le);const Ie={};y[0]&113&&(Ie.disabled=(f[5]===f[4]||f[6])&&f[10][f[5]][0]===f[0]),y[1]&16&&(Ie.$$scope={dirty:y,ctx:f}),P.$set(Ie);const Je={};y[1]&16&&(Je.$$scope={dirty:y,ctx:f}),x.$set(Je);const Oe={};y[1]&16&&(Oe.$$scope={dirty:y,ctx:f}),!ce&&y[0]&2&&(ce=!0,Oe.value=f[1],fe(()=>ce=!1)),D.$set(Oe);let Ee=M;M=Ge(f,y),M===Ee?V[M].p(f,y):(He(),T(V[Ee],1,1,()=>{V[Ee]=null}),Ue(),W=V[M],W?W.p(f,y):(W=V[M]=ke[M](f),W.c()),h(W,1),W.m(G,null)),ve===(ve=Ve(f))&&q?q.p(f,y):(q.d(1),q=ve(f),q&&(q.c(),q.m(Z,null)))},i(f){re||(h(t.$$.fragment,f),h(i.$$.fragment,f),h(g.$$.fragment,f),h(P.$$.fragment,f),h(x.$$.fragment,f),h(D.$$.fragment,f),h(W),re=!0)},o(f){T(t.$$.fragment,f),T(i.$$.fragment,f),T(g.$$.fragment,f),T(P.$$.fragment,f),T(x.$$.fragment,f),T(D.$$.fragment,f),T(W),re=!1},d(f){f&&u(e),O(t),O(i),o[20](null),O(g),O(P),O(x),O(D),V[M].d(),q.d()}}}function Re(o){window.localStorage.setItem("rush-playground-code",o)}function rt(o){window.localStorage.setItem("rush-playground-backend",o)}function st(o){window.localStorage.setItem("rush-playground-script",o)}function Wn(o,e,t){const n={Welcome:[tn,"Welcome"],Fibonacci:[nn,"Fibonacci"],Pow:[on,"Calculate Powers"],ApproxPi:[rn,"Approximate Pi"],ApproxE:[sn,"Approximate E"],ApproxApery:[ln,"Approximate Apéry"]},r={vmInterpreter:"VM interpreter",tree:"tree interpreter",vmCompiler:"VM compiler",wasmRun:"Wasm",wasmText:"Wasm text",wasmBinary:"Wasm binary",riscv:"RISC-V",x64:"x86_64",transpiler:"C transpiler"};let s=Object.keys(r)[0],l,i=!0,c="",_=!1,w="",$=Object.keys(n)[0][0],b=!1,j,p=null,g=null,J=!1;function ne(){t(6,b=!0),p=x(c,s,!["vmInterpreter","tree","wasmRun"].includes(s))}function P(){t(6,b=!0),_&&(t(6,b=!1),["vmInterpreter","tree","wasmRun"].includes(s)||ne())}function ie(){t(6,b=!1),p==null||p.terminate(),t(7,j=void 0)}function x(A,U,F){let N=new en;return N.onmessage=function(Q){Q.data[0]==="ready"&&(F?N.postMessage(["compile",A,U]):N.postMessage(["run",A,U])),Q.data[0]==="finished"&&(t(6,b=!1),N.terminate(),F?(t(7,j=void 0),t(2,l=JSON.parse(Q.data[1]))):(t(2,l=void 0),t(7,j=JSON.parse(Q.data[1]))))},N}async function we(){t(4,w=$);let A=window.localStorage.getItem("rush-playground-script");A===null?st($):(t(4,w=A),t(5,$=A));let U=window.localStorage.getItem("rush-playground-backend");U===null?rt(s):t(1,s=U);let F=window.localStorage.getItem("rush-playground-code");return F===null?(t(0,c=n[$][0]),Re(c),c):F}function G(){t(0,c=n[$][0]),w!==$&&(st($),t(4,w=$))}at(async()=>{t(0,c=await we()),t(16,_=!0);let A=0,U=0;const F=g.previousElementSibling,N=g.nextElementSibling;document.addEventListener("keydown",R=>{R.ctrlKey&&R.key==="s"?(R.preventDefault(),Re(c)):R.key==="F8"&&!b?ne():R.key==="F9"&&b?ie():R.key==="F10"&&(R.preventDefault(),b||G())});const Q=function(R){A=R.clientX,U=F.getBoundingClientRect().width,document.addEventListener("mousemove",ae),document.addEventListener("mouseup",ye)},ae=function(R){const ke=R.clientX-A,V=(U+ke)*100/g.parentNode.getBoundingClientRect().width;F.style.width=`${V}%`,F.style.userSelect="none",F.style.pointerEvents="none",N.style.userSelect="none",N.style.pointerEvents="none"},ye=function(){F.style.removeProperty("user-select"),F.style.removeProperty("pointer-events"),N.style.removeProperty("user-select"),N.style.removeProperty("pointer-events"),document.removeEventListener("mousemove",ae),document.removeEventListener("mouseup",ye)};g.addEventListener("mousedown",Q)});const D=()=>t(9,J=!1);function ce(A){J=A,t(9,J)}function he(A){c=A,t(0,c)}function oe(A){te[A?"unshift":"push"](()=>{g=A,t(8,g)})}function M(A){$=A,t(5,$)}const W=()=>t(9,J=!0);function $e(A){s=A,t(1,s)}const Z=()=>{P(),rt(s)};function re(A){i=A,t(3,i)}return o.$$.update=()=>{o.$$.dirty[0]&65537&&_&&Re(c)},[c,s,l,i,w,$,b,j,g,J,n,r,ne,P,ie,G,_,D,ce,he,oe,M,W,$e,Z,re]}class Nn extends lt{constructor(e){super(),it(this,e,Wn,Rn,ct,{},null,[-1,-1])}}new Nn({target:document.getElementById("app")});
