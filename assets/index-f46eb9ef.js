import{a4 as Ae,a5 as gt,a6 as L,a7 as wt,S as lt,i as it,d as ct,G as v,P,j as a,F as Q,v as u,a8 as ht,a9 as $t,U as at,aa as yt,ab as kt,ac as vt,ad as At,ae as St,af as Tt,A as te,Z as fe,f as E,O as A,m as I,Q as B,$ as _e,t as T,r as He,u as h,q as O,a0 as M,o as ze,h as ie,ag as ut,ah as ge,a1 as Ne}from"./vendor-82065986.js";import{D as Ct,S as Xe,B as ft,I as je,C as _t,T as Lt,a as Et,A as It,F as Ot,b as Mt,O as pt}from"./vendor_mui-e78229ce.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const Be="#2c313a",Fe="#353a42",Qe="#282c34",Bt="#3b3f4c",Ft="#21252b",Se="#abb2bf",Rt="#c678dd",Ye="#d19a66",Pe="#61afef",Wt="#56b6c2",Nt="#e86671",dt="#5c6370",jt="#848b98",Pt=Ae.theme({"*":{fontFamily:"JetBrains Mono NL, monospace"},"&":{color:Se,backgroundColor:Qe,height:"100%"},".cm-scroller":{overflow:"auto"},".cm-content":{caretColor:Pe},".cm-cursor, .cm-dropCursor":{borderLeftColor:Pe},"&.cm-focused .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection":{backgroundColor:Bt},".cm-panels":{backgroundColor:Ft,color:Se},".cm-panels.cm-panels-top":{borderBottom:"2px solid black"},".cm-panels.cm-panels-bottom":{borderTop:"2px solid black"},".cm-searchMatch":{backgroundColor:"#72a1ff59",outline:"1px solid #457dff"},".cm-searchMatch.cm-searchMatch-selected":{backgroundColor:"#6199ff2f"},".cm-activeLine":{backgroundColor:Be},".cm-selectionMatch":{backgroundColor:"#aafe661a"},"&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket":{backgroundColor:"#bad0f847",outline:"1px solid #515a6b"},".cm-gutters":{backgroundColor:Qe,color:dt,border:"none"},".cm-activeLineGutter":{backgroundColor:Be},".cm-foldPlaceholder":{backgroundColor:"transparent",border:"none",color:"#ddd"},".cm-tooltip":{border:"none",backgroundColor:Fe},".cm-tooltip .cm-tooltip-arrow:before":{borderTopColor:"transparent",borderBottomColor:"transparent"},".cm-tooltip .cm-tooltip-arrow:after":{borderTopColor:Fe,borderBottomColor:Fe},".cm-tooltip-autocomplete":{"& > ul > li[aria-selected]":{backgroundColor:Be,color:Se}}},{dark:!0}),Dt=gt.define([{tag:L.keyword,color:Rt},{tag:[L.variableName,L.operator],color:Se},{tag:[L.bool,L.null,L.typeName,L.number],color:Ye},{tag:[L.function(L.variableName),L.function(L.propertyName)],color:Pe},{tag:[L.propertyName,L.standard(L.function(L.variableName))],color:Wt},{tag:[L.local(L.variableName),L.standard(L.variableName)],color:Nt},{tag:L.comment,color:dt},{tag:L.character,color:Ye},{tag:[L.bracket,L.separator],color:jt}]),Ut=[Pt,wt(Dt)];let b;const X=new Array(128).fill(void 0);X.push(void 0,null,!0,!1);function d(o){return X[o]}let be=X.length;function Ht(o){o<132||(X[o]=be,be=o)}function De(o){const e=d(o);return Ht(o),e}const mt=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});mt.decode();let pe=null;function Te(){return(pe===null||pe.byteLength===0)&&(pe=new Uint8Array(b.memory.buffer)),pe}function se(o,e){return mt.decode(Te().subarray(o,o+e))}function k(o){be===X.length&&X.push(X.length+1);const e=be;return be=X[e],X[e]=o,e}function Re(o){return o==null}let de=null;function zt(){return(de===null||de.byteLength===0)&&(de=new Float64Array(b.memory.buffer)),de}let me=null;function z(){return(me===null||me.byteLength===0)&&(me=new Int32Array(b.memory.buffer)),me}let Z=0;const Ce=new TextEncoder("utf-8"),Gt=typeof Ce.encodeInto=="function"?function(o,e){return Ce.encodeInto(o,e)}:function(o,e){const t=Ce.encode(o);return e.set(t),{read:o.length,written:t.length}};function le(o,e,t){if(t===void 0){const i=Ce.encode(o),c=e(i.length);return Te().subarray(c,c+i.length).set(i),Z=i.length,c}let n=o.length,r=e(n);const s=Te();let l=0;for(;l<n;l++){const i=o.charCodeAt(l);if(i>127)break;s[r+l]=i}if(l!==n){l!==0&&(o=o.slice(l)),r=t(r,n,n=l+o.length*3);const i=Te().subarray(r+l,r+n),c=Gt(o,i);l+=c.written}return Z=l,r}function Ue(o){const e=typeof o;if(e=="number"||e=="boolean"||o==null)return`${o}`;if(e=="string")return`"${o}"`;if(e=="symbol"){const r=o.description;return r==null?"Symbol":`Symbol(${r})`}if(e=="function"){const r=o.name;return typeof r=="string"&&r.length>0?`Function(${r})`:"Function"}if(Array.isArray(o)){const r=o.length;let s="[";r>0&&(s+=Ue(o[0]));for(let l=1;l<r;l++)s+=", "+Ue(o[l]);return s+="]",s}const t=/\[object ([^\]]+)\]/.exec(toString.call(o));let n;if(t.length>1)n=t[1];else return toString.call(o);if(n=="Object")try{return"Object("+JSON.stringify(o)+")"}catch{return"Object"}return o instanceof Error?`${o.name}: ${o.message}
${o.stack}`:n}function Vt(o){try{const n=b.__wbindgen_add_to_stack_pointer(-16),r=le(o,b.__wbindgen_malloc,b.__wbindgen_realloc),s=Z;b.analyze(n,r,s);var e=z()[n/4+0],t=z()[n/4+1];return se(e,t)}finally{b.__wbindgen_add_to_stack_pointer(16),b.__wbindgen_free(e,t)}}function qt(o,e){try{const r=b.__wbindgen_add_to_stack_pointer(-16),s=le(o,b.__wbindgen_malloc,b.__wbindgen_realloc),l=Z,i=le(e,b.__wbindgen_malloc,b.__wbindgen_realloc),c=Z;b.run(r,s,l,i,c);var t=z()[r/4+0],n=z()[r/4+1];return se(t,n)}finally{b.__wbindgen_add_to_stack_pointer(16),b.__wbindgen_free(t,n)}}function ee(o,e){try{return o.apply(this,e)}catch(t){b.__wbindgen_exn_store(k(t))}}class Ge{static __wrap(e){const t=Object.create(Ge.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();b.__wbg_wasmerruntimeerror_free(e)}static __wbgd_downcast_token(){const e=b.wasmerruntimeerror___wbgd_downcast_token();return De(e)}}async function Jt(o,e){if(typeof Response=="function"&&o instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(o,e)}catch(n){if(o.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",n);else throw n}const t=await o.arrayBuffer();return await WebAssembly.instantiate(t,e)}else{const t=await WebAssembly.instantiate(o,e);return t instanceof WebAssembly.Instance?{instance:t,module:o}:t}}function Kt(){const o={};return o.wbg={},o.wbg.__wbindgen_object_drop_ref=function(e){De(e)},o.wbg.__wbindgen_string_new=function(e,t){const n=se(e,t);return k(n)},o.wbg.__wbindgen_is_undefined=function(e){return d(e)===void 0},o.wbg.__wbindgen_object_clone_ref=function(e){const t=d(e);return k(t)},o.wbg.__wbindgen_error_new=function(e,t){const n=new Error(se(e,t));return k(n)},o.wbg.__wbindgen_number_new=function(e){return k(e)},o.wbg.__wbg_new_abda76e883ba8a5f=function(){const e=new Error;return k(e)},o.wbg.__wbg_stack_658279fe44541cf6=function(e,t){const n=d(t).stack,r=le(n,b.__wbindgen_malloc,b.__wbindgen_realloc),s=Z;z()[e/4+1]=s,z()[e/4+0]=r},o.wbg.__wbg_error_f851667af71bcfc6=function(e,t){try{console.error(se(e,t))}finally{b.__wbindgen_free(e,t)}},o.wbg.__wbindgen_number_get=function(e,t){const n=d(t),r=typeof n=="number"?n:void 0;zt()[e/8+1]=Re(r)?0:r,z()[e/4+0]=!Re(r)},o.wbg.__wbindgen_string_get=function(e,t){const n=d(t),r=typeof n=="string"?n:void 0;var s=Re(r)?0:le(r,b.__wbindgen_malloc,b.__wbindgen_realloc),l=Z;z()[e/4+1]=l,z()[e/4+0]=s},o.wbg.__wbindgen_is_function=function(e){return typeof d(e)=="function"},o.wbg.__wbg_wasmerruntimeerror_new=function(e){const t=Ge.__wrap(e);return k(t)},o.wbg.__wbindgen_is_object=function(e){const t=d(e);return typeof t=="object"&&t!==null},o.wbg.__wbg_instanceof_Global_1e3859c91f12d27b=function(e){let t;try{t=d(e)instanceof WebAssembly.Global}catch{t=!1}return t},o.wbg.__wbg_static_accessor_SYMBOL_45d4d15e3c4aeb33=function(){return k(Symbol)},o.wbg.__wbindgen_is_symbol=function(e){return typeof d(e)=="symbol"},o.wbg.__wbindgen_jsval_eq=function(e,t){return d(e)===d(t)},o.wbg.__wbg_get_27fe3dac1c4d0224=function(e,t){const n=d(e)[t>>>0];return k(n)},o.wbg.__wbg_length_e498fbc24f9c1d4f=function(e){return d(e).length},o.wbg.__wbg_get_baf4855f9a986186=function(){return ee(function(e,t){const n=Reflect.get(d(e),d(t));return k(n)},arguments)},o.wbg.__wbg_call_95d1ea488d03e4e8=function(){return ee(function(e,t){const n=d(e).call(d(t));return k(n)},arguments)},o.wbg.__wbg_new_f9876326328f45ed=function(){const e=new Object;return k(e)},o.wbg.__wbg_instanceof_Function_17551b1809ea1825=function(e){let t;try{t=d(e)instanceof Function}catch{t=!1}return t},o.wbg.__wbg_bind_73b3f819cbc666e0=function(e,t,n){const r=d(e).bind(d(t),d(n));return k(r)},o.wbg.__wbg_constructor_0c9828c8a7cf1dc6=function(e){const t=d(e).constructor;return k(t)},o.wbg.__wbg_buffer_cf65c07de34b9a08=function(e){const t=d(e).buffer;return k(t)},o.wbg.__wbg_newwithbyteoffsetandlength_9fb2f11355ecadf5=function(e,t,n){const r=new Uint8Array(d(e),t>>>0,n>>>0);return k(r)},o.wbg.__wbg_new_64f7331ea86b0949=function(){return ee(function(e,t){const n=new WebAssembly.Instance(d(e),d(t));return k(n)},arguments)},o.wbg.__wbg_exports_ff0a0a2b2c092053=function(e){const t=d(e).exports;return k(t)},o.wbg.__wbg_new_3086807366ac3008=function(){return ee(function(e){const t=new WebAssembly.Module(d(e));return k(t)},arguments)},o.wbg.__wbg_exports_ebe6dd251e00d3b0=function(e){const t=WebAssembly.Module.exports(d(e));return k(t)},o.wbg.__wbg_imports_801913c621270d0f=function(e){const t=WebAssembly.Module.imports(d(e));return k(t)},o.wbg.__wbg_instanceof_Table_27c4cc013dcdbf38=function(e){let t;try{t=d(e)instanceof WebAssembly.Table}catch{t=!1}return t},o.wbg.__wbg_get_83118383573df91c=function(){return ee(function(e,t){const n=d(e).get(t>>>0);return k(n)},arguments)},o.wbg.__wbg_instanceof_Memory_25684ccf3e250ca1=function(e){let t;try{t=d(e)instanceof WebAssembly.Memory}catch{t=!1}return t},o.wbg.__wbg_getPrototypeOf_d643a5523614ccc5=function(){return ee(function(e){const t=Reflect.getPrototypeOf(d(e));return k(t)},arguments)},o.wbg.__wbg_set_6aa458a4ebdb65cb=function(){return ee(function(e,t,n){return Reflect.set(d(e),d(t),d(n))},arguments)},o.wbg.__wbindgen_debug_string=function(e,t){const n=Ue(d(t)),r=le(n,b.__wbindgen_malloc,b.__wbindgen_realloc),s=Z;z()[e/4+1]=s,z()[e/4+0]=r},o.wbg.__wbindgen_throw=function(e,t){throw new Error(se(e,t))},o.wbg.__wbindgen_rethrow=function(e){throw De(e)},o.wbg.__wbindgen_memory=function(){const e=b.memory;return k(e)},o.wbg.__wbindgen_function_table=function(){const e=b.__wbindgen_export_2;return k(e)},o}function Xt(o,e){return b=o.exports,bt.__wbindgen_wasm_module=e,de=null,me=null,pe=null,b}async function bt(o){typeof o>"u"&&(o=new URL("/assets/rush_backend_bg-0bfac94d.wasm",self.location));const e=Kt();(typeof o=="string"||typeof Request=="function"&&o instanceof Request||typeof URL=="function"&&o instanceof URL)&&(o=fetch(o));const{instance:t,module:n}=await Jt(await o,e);return Xt(t,n)}class Qt{constructor(){bt()}lint(e){let t=Vt(e);return JSON.parse(t)}run(e,t){let n=qt(e,t);return JSON.parse(n)}}function Yt(o){let e;return{c(){e=v("div"),P(e,"class","editor svelte-9vsa7j")},m(t,n){a(t,e,n),o[2](e)},p:Q,i:Q,o:Q,d(t){t&&u(e),o[2](null)}}}function Zt(o,e,t){let{code:n=""}=e;function r(m){s===void 0||s.state.doc.toString()===m||s.dispatch(s.state.update({changes:{from:0,to:s.state.doc.length,insert:m}}))}let s,l;const i=ht();let c,_;const w=$t(async()=>{let m=[],C=_.lint(n);for(let p of C)m.push(Object.create({from:p.span.start.charIdx,to:p.span.end.charIdx,severity:p.level,source:"rush analyzer",message:p.message}));return m});at(()=>{_=new Qt;let m=yt.create({extensions:[kt,vt.of([At]),St(),w,Tt(),Ut,Ae.updateListener.of(C=>{C.docChanged&&(c&&clearTimeout(c),c=setTimeout(()=>{i("update",n)},500))}),Ae.updateListener.of(C=>{C.docChanged&&t(1,n=s.state.doc.toString())})]});s=new Ae({state:m,parent:l})});function $(m){te[m?"unshift":"push"](()=>{l=m,t(0,l)})}return o.$$set=m=>{"code"in m&&t(1,n=m.code)},o.$$.update=()=>{o.$$.dirty&2&&r(n)},[l,n,$]}class xt extends lt{constructor(e){super(),it(this,e,Zt,Yt,ct,{code:1})}}function en(){return new Worker("/assets/rush.worker-de1cb8eb.js")}const tn=`// Welcome to the playground of the rush programming language.
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
    exit(fib(10));
}

fn fib(n: int) -> int {
    if n < 2 {
        n
    } else {
        fib(n - 2) + fib(n - 1)
    }
}

`,on=`fn main() {
    exit(pow(2, 4)); // 2 ** 4 = 16
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
  exit(result);
}
`,ln=`// This script approximates some digits of Apéry's theorem.
// The final output is an integer which approximates to Apéry * 10000000
fn main() {
    let mut res = 1f;

    for i = 2; i < 30000; i += 1 {
        res += (1f / (i ** 3) as float);
    }

    let FAC = 10000000f;
    exit((res * FAC) as int);
}
`;function Ze(o,e,t){const n=o.slice();return n[29]=e[t],n}function xe(o,e,t){const n=o.slice();return n[32]=e[t],n}function cn(o){let e;return{c(){e=M("Using The Playground")},m(t,n){a(t,e,n)},d(t){t&&u(e)}}}function an(o){let e,t,n,r,s,l,i,c,_,w,$,m,C;return{c(){e=v("p"),e.innerHTML=`The <a class="highlight svelte-pnnys6" href="https://github.com/rush-rs/rush-playground" target="_blank" rel="noreferrer">rush playground</a>
                allows everyone to use the
                <a class="highlight svelte-pnnys6" href="https://rush-lang.de" target="_blank" rel="noreferrer">rush</a> programming language without the need for an installation.`,t=A(),n=v("p"),n.innerHTML=`All changes made to the current script are saved locally. Therefore, you can reload
                the page without hesitation. If you do want to erase your current changes, use the <code class="highlight svelte-pnnys6">load</code> button in the top right corner.`,r=A(),s=v("p"),s.innerHTML=`This button can also be used to switch to other code templates. For this, the
                desired template is to be selected using the drop down menu at the top. After the
                selection has been made, the <code class="highlight svelte-pnnys6">load</code> button is to be pressed.`,l=A(),i=v("p"),i.innerHTML=`To run the current code using a rush interpreter, use the <i class="material-icons icon svelte-pnnys6">play_arrow</i>
                button in the top right corder. If the script does not stop when expected, it can be
                terminated using the
                <i class="material-icons icon svelte-pnnys6">cancel</i> button.`,c=A(),_=v("p"),_.textContent=`There are multiple backends for rush. While the first two backends can execute rush
                code, the remaining backends can only compile rush. If a compiler backend is used,
                the output of the current script can be seen on the right.`,w=A(),$=v("h4"),$.textContent="Keybindings",m=A(),C=v("ul"),C.innerHTML=`<li><code class="highlight svelte-pnnys6">CTRL + S</code>: force save the current code</li> 
                <li><code class="highlight svelte-pnnys6">F8</code>: run / compile the current code</li> 
                <li><code class="highlight svelte-pnnys6">F9</code>: terminate current interpreter</li>`,P($,"class","svelte-pnnys6"),P(C,"class","svelte-pnnys6")},m(p,g){a(p,e,g),a(p,t,g),a(p,n,g),a(p,r,g),a(p,s,g),a(p,l,g),a(p,i,g),a(p,c,g),a(p,_,g),a(p,w,g),a(p,$,g),a(p,m,g),a(p,C,g)},p:Q,d(p){p&&u(e),p&&u(t),p&&u(n),p&&u(r),p&&u(s),p&&u(l),p&&u(i),p&&u(c),p&&u(_),p&&u(w),p&&u($),p&&u(m),p&&u(C)}}}function un(o){let e;return{c(){e=M("Close")},m(t,n){a(t,e,n)},d(t){t&&u(e)}}}function fn(o){let e,t;return e=new _t({props:{$$slots:{default:[un]},$$scope:{ctx:o}}}),{c(){E(e.$$.fragment)},m(n,r){I(e,n,r),t=!0},p(n,r){const s={};r[1]&16&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(h(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){O(e,n)}}}function _n(o){let e,t;return e=new ft({props:{$$slots:{default:[fn]},$$scope:{ctx:o}}}),e.$on("click",o[17]),{c(){E(e.$$.fragment)},m(n,r){I(e,n,r),t=!0},p(n,r){const s={};r[1]&16&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(h(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){O(e,n)}}}function pn(o){let e,t,n,r,s,l;return e=new Lt({props:{id:"help-title",$$slots:{default:[cn]},$$scope:{ctx:o}}}),n=new Et({props:{id:"help-content",$$slots:{default:[an]},$$scope:{ctx:o}}}),s=new It({props:{$$slots:{default:[_n]},$$scope:{ctx:o}}}),{c(){E(e.$$.fragment),t=A(),E(n.$$.fragment),r=A(),E(s.$$.fragment)},m(i,c){I(e,i,c),a(i,t,c),I(n,i,c),a(i,r,c),I(s,i,c),l=!0},p(i,c){const _={};c[1]&16&&(_.$$scope={dirty:c,ctx:i}),e.$set(_);const w={};c[1]&16&&(w.$$scope={dirty:c,ctx:i}),n.$set(w);const $={};c[0]&512|c[1]&16&&($.$$scope={dirty:c,ctx:i}),s.$set($)},i(i){l||(h(e.$$.fragment,i),h(n.$$.fragment,i),h(s.$$.fragment,i),l=!0)},o(i){T(e.$$.fragment,i),T(n.$$.fragment,i),T(s.$$.fragment,i),l=!1},d(i){O(e,i),i&&u(t),O(n,i),i&&u(r),O(s,i)}}}function dn(o){let e=o[10][o[32]][1]+"",t;return{c(){t=M(e)},m(n,r){a(n,t,r)},p:Q,d(n){n&&u(t)}}}function et(o){let e,t;return e=new pt({props:{value:o[32],$$slots:{default:[dn]},$$scope:{ctx:o}}}),{c(){E(e.$$.fragment)},m(n,r){I(e,n,r),t=!0},p(n,r){const s={};r[1]&16&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(h(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){O(e,n)}}}function mn(o){let e,t,n=Object.keys(o[10]),r=[];for(let l=0;l<n.length;l+=1)r[l]=et(xe(o,n,l));const s=l=>T(r[l],1,1,()=>{r[l]=null});return{c(){for(let l=0;l<r.length;l+=1)r[l].c();e=ie()},m(l,i){for(let c=0;c<r.length;c+=1)r[c].m(l,i);a(l,e,i),t=!0},p(l,i){if(i[0]&1024){n=Object.keys(l[10]);let c;for(c=0;c<n.length;c+=1){const _=xe(l,n,c);r[c]?(r[c].p(_,i),h(r[c],1)):(r[c]=et(_),r[c].c(),h(r[c],1),r[c].m(e.parentNode,e))}for(ze(),c=n.length;c<r.length;c+=1)s(c);He()}},i(l){if(!t){for(let i=0;i<n.length;i+=1)h(r[i]);t=!0}},o(l){r=r.filter(Boolean);for(let i=0;i<r.length;i+=1)T(r[i]);t=!1},d(l){ut(r,l),l&&u(e)}}}function bn(o){let e;return{c(){e=M("Load")},m(t,n){a(t,e,n)},d(t){t&&u(e)}}}function gn(o){let e,t;return e=new _t({props:{$$slots:{default:[bn]},$$scope:{ctx:o}}}),{c(){E(e.$$.fragment)},m(n,r){I(e,n,r),t=!0},p(n,r){const s={};r[1]&16&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(h(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){O(e,n)}}}function wn(o){let e;return{c(){e=M("help")},m(t,n){a(t,e,n)},d(t){t&&u(e)}}}function hn(o){let e=o[11][o[29]]+"",t;return{c(){t=M(e)},m(n,r){a(n,t,r)},p:Q,d(n){n&&u(t)}}}function tt(o){let e,t;return e=new pt({props:{value:o[29],$$slots:{default:[hn]},$$scope:{ctx:o}}}),{c(){E(e.$$.fragment)},m(n,r){I(e,n,r),t=!0},p(n,r){const s={};r[1]&16&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(h(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){O(e,n)}}}function $n(o){let e,t,n=Object.keys(o[11]),r=[];for(let l=0;l<n.length;l+=1)r[l]=tt(Ze(o,n,l));const s=l=>T(r[l],1,1,()=>{r[l]=null});return{c(){for(let l=0;l<r.length;l+=1)r[l].c();e=ie()},m(l,i){for(let c=0;c<r.length;c+=1)r[c].m(l,i);a(l,e,i),t=!0},p(l,i){if(i[0]&2048){n=Object.keys(l[11]);let c;for(c=0;c<n.length;c+=1){const _=Ze(l,n,c);r[c]?(r[c].p(_,i),h(r[c],1)):(r[c]=tt(_),r[c].c(),h(r[c],1),r[c].m(e.parentNode,e))}for(ze(),c=n.length;c<r.length;c+=1)s(c);He()}},i(l){if(!t){for(let i=0;i<n.length;i+=1)h(r[i]);t=!0}},o(l){r=r.filter(Boolean);for(let i=0;i<r.length;i+=1)T(r[i]);t=!1},d(l){ut(r,l),l&&u(e)}}}function yn(o){let e,t;return e=new Ot({props:{$$slots:{label:[An],default:[vn]},$$scope:{ctx:o}}}),{c(){E(e.$$.fragment)},m(n,r){I(e,n,r),t=!0},p(n,r){const s={};r[0]&8|r[1]&16&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(h(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){O(e,n)}}}function kn(o){let e,t,n,r;return e=new je({props:{class:"material-icons",disabled:o[6],$$slots:{default:[Sn]},$$scope:{ctx:o}}}),e.$on("click",o[12]),n=new je({props:{class:"material-icons",disabled:!o[6],$$slots:{default:[Tn]},$$scope:{ctx:o}}}),n.$on("click",o[14]),{c(){E(e.$$.fragment),t=A(),E(n.$$.fragment)},m(s,l){I(e,s,l),a(s,t,l),I(n,s,l),r=!0},p(s,l){const i={};l[0]&64&&(i.disabled=s[6]),l[1]&16&&(i.$$scope={dirty:l,ctx:s}),e.$set(i);const c={};l[0]&64&&(c.disabled=!s[6]),l[1]&16&&(c.$$scope={dirty:l,ctx:s}),n.$set(c)},i(s){r||(h(e.$$.fragment,s),h(n.$$.fragment,s),r=!0)},o(s){T(e.$$.fragment,s),T(n.$$.fragment,s),r=!1},d(s){O(e,s),s&&u(t),O(n,s)}}}function vn(o){let e,t,n;function r(l){o[25](l)}let s={};return o[3]!==void 0&&(s.checked=o[3]),e=new Mt({props:s}),te.push(()=>fe(e,"checked",r,o[3])),{c(){E(e.$$.fragment)},m(l,i){I(e,l,i),n=!0},p(l,i){const c={};!t&&i[0]&8&&(t=!0,c.checked=l[3],_e(()=>t=!1)),e.$set(c)},i(l){n||(h(e.$$.fragment,l),n=!0)},o(l){T(e.$$.fragment,l),n=!1},d(l){O(e,l)}}}function An(o){let e;return{c(){e=v("span"),e.textContent="Show Diagnostics",P(e,"slot","label")},m(t,n){a(t,e,n)},p:Q,d(t){t&&u(e)}}}function Sn(o){let e;return{c(){e=M("play_arrow")},m(t,n){a(t,e,n)},d(t){t&&u(e)}}}function Tn(o){let e;return{c(){e=M("cancel")},m(t,n){a(t,e,n)},d(t){t&&u(e)}}}function Cn(o){let e;return{c(){e=M("Press the play button in order to start program execution")},m(t,n){a(t,e,n)},p:Q,d(t){t&&u(e)}}}function Ln(o){let e,t,n=o[2].diagnostics&&(o[3]||o[2].output===void 0)&&nt(o);function r(i,c){if(i[2].error)return Mn;if(i[2].output!==void 0)return On}let s=r(o),l=s&&s(o);return{c(){n&&n.c(),e=A(),l&&l.c(),t=ie()},m(i,c){n&&n.m(i,c),a(i,e,c),l&&l.m(i,c),a(i,t,c)},p(i,c){i[2].diagnostics&&(i[3]||i[2].output===void 0)?n?n.p(i,c):(n=nt(i),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null),s===(s=r(i))&&l?l.p(i,c):(l&&l.d(1),l=s&&s(i),l&&(l.c(),l.m(t.parentNode,t)))},d(i){n&&n.d(i),i&&u(e),l&&l.d(i),i&&u(t)}}}function En(o){let e;function t(s,l){return s[7].runtimeError?Rn:s[7].code!==null?Fn:Bn}let n=t(o),r=n(o);return{c(){r.c(),e=ie()},m(s,l){r.m(s,l),a(s,e,l)},p(s,l){n===(n=t(s))&&r?r.p(s,l):(r.d(1),r=n(s),r&&(r.c(),r.m(e.parentNode,e)))},d(s){r.d(s),s&&u(e)}}}function In(o){let e;return{c(){e=M("Backend is running...")},m(t,n){a(t,e,n)},p:Q,d(t){t&&u(e)}}}function nt(o){let e,t=o[2].diagnostics+"",n,r;return{c(){e=new ge(!1),n=A(),r=v("div"),e.a=n,P(r,"class","main__output__terminal__sep svelte-pnnys6")},m(s,l){e.m(t,s,l),a(s,n,l),a(s,r,l)},p(s,l){l[0]&4&&t!==(t=s[2].diagnostics+"")&&e.p(t)},d(s){s&&e.d(),s&&u(n),s&&u(r)}}}function On(o){let e,t=o[2].output+"",n;return{c(){e=new ge(!1),n=ie(),e.a=n},m(r,s){e.m(t,r,s),a(r,n,s)},p(r,s){s[0]&4&&t!==(t=r[2].output+"")&&e.p(t)},d(r){r&&u(n),r&&e.d()}}}function Mn(o){let e,t,n,r,s=o[2].error+"",l,i;return{c(){e=M(`Compilation failed:
                        `),t=v("br"),n=A(),r=new ge(!1),l=A(),i=v("br"),r.a=l},m(c,_){a(c,e,_),a(c,t,_),a(c,n,_),r.m(s,c,_),a(c,l,_),a(c,i,_)},p(c,_){_[0]&4&&s!==(s=c[2].error+"")&&r.p(s)},d(c){c&&u(e),c&&u(t),c&&u(n),c&&r.d(),c&&u(l),c&&u(i)}}}function Bn(o){let e,t,n,r,s=o[7].diagnostics+"",l;return{c(){e=M(`Compilation failed:
                        `),t=v("br"),n=A(),r=new ge(!1),l=ie(),r.a=l},m(i,c){a(i,e,c),a(i,t,c),a(i,n,c),r.m(s,i,c),a(i,l,c)},p(i,c){c[0]&128&&s!==(s=i[7].diagnostics+"")&&r.p(s)},d(i){i&&u(e),i&&u(t),i&&u(n),i&&u(l),i&&r.d()}}}function Fn(o){let e,t=o[7].code+"",n,r=o[7].diagnostics!==""&&ot(o);return{c(){r&&r.c(),e=M(`

                        Program stopped with code `),n=M(t)},m(s,l){r&&r.m(s,l),a(s,e,l),a(s,n,l)},p(s,l){s[7].diagnostics!==""?r?r.p(s,l):(r=ot(s),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null),l[0]&128&&t!==(t=s[7].code+"")&&Ne(n,t)},d(s){r&&r.d(s),s&&u(e),s&&u(n)}}}function Rn(o){let e,t,n,r=o[7].runtimeError.kind+"",s,l,i=o[7].runtimeError.message+"",c;return{c(){e=M(`Interpreter crashed:
                        `),t=v("br"),n=A(),s=M(r),l=M(": "),c=M(i)},m(_,w){a(_,e,w),a(_,t,w),a(_,n,w),a(_,s,w),a(_,l,w),a(_,c,w)},p(_,w){w[0]&128&&r!==(r=_[7].runtimeError.kind+"")&&Ne(s,r),w[0]&128&&i!==(i=_[7].runtimeError.message+"")&&Ne(c,i)},d(_){_&&u(e),_&&u(t),_&&u(n),_&&u(s),_&&u(l),_&&u(c)}}}function ot(o){let e,t=o[7].diagnostics+"",n,r,s,l;return{c(){e=new ge(!1),n=A(),r=v("br"),s=A(),l=v("br"),e.a=n},m(i,c){e.m(t,i,c),a(i,n,c),a(i,r,c),a(i,s,c),a(i,l,c)},p(i,c){c[0]&128&&t!==(t=i[7].diagnostics+"")&&e.p(t)},d(i){i&&e.d(),i&&u(n),i&&u(r),i&&u(s),i&&u(l)}}}function Wn(o){let e,t,n,r,s,l,i,c,_,w,$,m,C,p,g,K,ne,D,ce,G,we,V,U,ae,he,oe,F,N,$e,x,re;function S(f){o[18](f)}let H={"aria-labelledby":"help-title","aria-describedby":"help-content",$$slots:{default:[pn]},$$scope:{ctx:o}};o[9]!==void 0&&(H.open=o[9]),t=new Ct({props:H}),te.push(()=>fe(t,"open",S,o[9]));function R(f){o[19](f)}let j={};o[0]!==void 0&&(j.code=o[0]),i=new xt({props:j}),te.push(()=>fe(i,"code",R,o[0])),i.$on("update",o[13]);function Y(f){o[21](f)}let ue={label:"Select Template",$$slots:{default:[mn]},$$scope:{ctx:o}};o[5]!==void 0&&(ue.value=o[5]),g=new Xe({props:ue}),te.push(()=>fe(g,"value",Y,o[5])),D=new ft({props:{variant:"raised",disabled:(o[5]===o[4]||o[6])&&o[10][o[5]][0]===o[0],$$slots:{default:[gn]},$$scope:{ctx:o}}}),D.$on("click",o[15]),G=new je({props:{size:"button",class:"material-icons",$$slots:{default:[wn]},$$scope:{ctx:o}}}),G.$on("click",o[22]);function ye(f){o[23](f)}let W={label:"Select Backend",$$slots:{default:[$n]},$$scope:{ctx:o}};o[1]!==void 0&&(W.value=o[1]),U=new Xe({props:W}),te.push(()=>fe(U,"value",ye,o[1])),U.$on("SMUISelect:change",o[24]);const ke=[kn,yn],q=[];function Ve(f,y){return y[0]&2&&(oe=null),oe==null&&(oe=!!["vmInterpreter","tree","wasmRun"].includes(f[1])),oe?0:1}F=Ve(o,[-1,-1]),N=q[F]=ke[F](o);function qe(f,y){return f[6]?In:f[7]?En:f[2]?Ln:Cn}let ve=qe(o),J=ve(o);return{c(){e=v("main"),E(t.$$.fragment),r=A(),s=v("div"),l=v("div"),E(i.$$.fragment),_=A(),w=v("div"),$=A(),m=v("div"),C=v("div"),p=v("div"),E(g.$$.fragment),ne=A(),E(D.$$.fragment),ce=A(),E(G.$$.fragment),we=A(),V=v("div"),E(U.$$.fragment),he=A(),N.c(),$e=A(),x=v("div"),J.c(),P(l,"class","main__editor svelte-pnnys6"),P(w,"class","main__resizer svelte-pnnys6"),P(p,"class","main__output__nav__top svelte-pnnys6"),P(V,"class","main__output__nav__bottom svelte-pnnys6"),P(C,"class","main__output__nav svelte-pnnys6"),P(x,"class","main__output__terminal svelte-pnnys6"),P(m,"class","main__output svelte-pnnys6"),P(s,"class","main svelte-pnnys6")},m(f,y){a(f,e,y),I(t,e,null),B(e,r),B(e,s),B(s,l),I(i,l,null),B(s,_),B(s,w),o[20](w),B(s,$),B(s,m),B(m,C),B(C,p),I(g,p,null),B(p,ne),I(D,p,null),B(p,ce),I(G,p,null),B(C,we),B(C,V),I(U,V,null),B(V,he),q[F].m(V,null),B(m,$e),B(m,x),J.m(x,null),re=!0},p(f,y){const Le={};y[0]&512|y[1]&16&&(Le.$$scope={dirty:y,ctx:f}),!n&&y[0]&512&&(n=!0,Le.open=f[9],_e(()=>n=!1)),t.$set(Le);const Je={};!c&&y[0]&1&&(c=!0,Je.code=f[0],_e(()=>c=!1)),i.$set(Je);const Ee={};y[1]&16&&(Ee.$$scope={dirty:y,ctx:f}),!K&&y[0]&32&&(K=!0,Ee.value=f[5],_e(()=>K=!1)),g.$set(Ee);const Ie={};y[0]&113&&(Ie.disabled=(f[5]===f[4]||f[6])&&f[10][f[5]][0]===f[0]),y[1]&16&&(Ie.$$scope={dirty:y,ctx:f}),D.$set(Ie);const Ke={};y[1]&16&&(Ke.$$scope={dirty:y,ctx:f}),G.$set(Ke);const Oe={};y[1]&16&&(Oe.$$scope={dirty:y,ctx:f}),!ae&&y[0]&2&&(ae=!0,Oe.value=f[1],_e(()=>ae=!1)),U.$set(Oe);let Me=F;F=Ve(f,y),F===Me?q[F].p(f,y):(ze(),T(q[Me],1,1,()=>{q[Me]=null}),He(),N=q[F],N?N.p(f,y):(N=q[F]=ke[F](f),N.c()),h(N,1),N.m(V,null)),ve===(ve=qe(f))&&J?J.p(f,y):(J.d(1),J=ve(f),J&&(J.c(),J.m(x,null)))},i(f){re||(h(t.$$.fragment,f),h(i.$$.fragment,f),h(g.$$.fragment,f),h(D.$$.fragment,f),h(G.$$.fragment,f),h(U.$$.fragment,f),h(N),re=!0)},o(f){T(t.$$.fragment,f),T(i.$$.fragment,f),T(g.$$.fragment,f),T(D.$$.fragment,f),T(G.$$.fragment,f),T(U.$$.fragment,f),T(N),re=!1},d(f){f&&u(e),O(t),O(i),o[20](null),O(g),O(D),O(G),O(U),q[F].d(),J.d()}}}function We(o){window.localStorage.setItem("rush-playground-code",o)}function rt(o){window.localStorage.setItem("rush-playground-backend",o)}function st(o){window.localStorage.setItem("rush-playground-script",o)}function Nn(o,e,t){const n={Welcome:[tn,"Welcome"],Fibonacci:[nn,"Fibonacci"],Pow:[on,"Calculate Powers"],ApproxPi:[rn,"Approximate Pi"],ApproxE:[sn,"Approximate E"],ApproxApery:[ln,"Approximate Apéry"]},r={tree:"run tree-walking",vmInterpreter:"run VM",wasmRun:"run Wasm",vmCompiler:"compile VM",wasmBinary:"compile Wasm binary",wasmText:"compile Wasm text",riscv:"compile RISC-V",x64:"compile x86_64",transpiler:"transpile C"};let s=Object.keys(r)[0],l,i=!0,c="",_=!1,w="",$=Object.keys(n)[0][0],m=!1,C,p=null,g=null,K=!1;function ne(){t(6,m=!0),p=G(c,s,!["vmInterpreter","tree","wasmRun"].includes(s))}function D(){t(6,m=!0),_&&(t(6,m=!1),["vmInterpreter","tree","wasmRun"].includes(s)||ne())}function ce(){t(6,m=!1),p==null||p.terminate(),t(7,C=void 0)}function G(S,H,R){let j=new en;return j.onmessage=function(Y){Y.data[0]==="ready"&&(R?j.postMessage(["compile",S,H]):j.postMessage(["run",S,H])),Y.data[0]==="finished"&&(t(6,m=!1),j.terminate(),R?(t(7,C=void 0),t(2,l=JSON.parse(Y.data[1]))):(t(2,l=void 0),t(7,C=JSON.parse(Y.data[1]))))},j}async function we(){t(4,w=$);let S=window.localStorage.getItem("rush-playground-script");S===null?st($):(t(4,w=S),t(5,$=S));let H=window.localStorage.getItem("rush-playground-backend");H===null?rt(s):t(1,s=H);let R=window.localStorage.getItem("rush-playground-code");return R===null?(t(0,c=n[$][0]),We(c),c):R}function V(){t(0,c=n[$][0]),w!==$&&(st($),t(4,w=$))}at(async()=>{t(0,c=await we()),t(16,_=!0);let S=0,H=0;const R=g.previousElementSibling,j=g.nextElementSibling;document.addEventListener("keydown",W=>{W.ctrlKey&&W.key==="s"?(W.preventDefault(),We(c)):W.key==="F8"&&!m?ne():W.key==="F9"&&m?ce():W.key==="F10"&&(W.preventDefault(),m||V())});const Y=function(W){S=W.clientX,H=R.getBoundingClientRect().width,document.addEventListener("mousemove",ue),document.addEventListener("mouseup",ye)},ue=function(W){const ke=W.clientX-S,q=(H+ke)*100/g.parentNode.getBoundingClientRect().width;R.style.width=`${q}%`,R.style.userSelect="none",R.style.pointerEvents="none",j.style.userSelect="none",j.style.pointerEvents="none"},ye=function(){R.style.removeProperty("user-select"),R.style.removeProperty("pointer-events"),j.style.removeProperty("user-select"),j.style.removeProperty("pointer-events"),document.removeEventListener("mousemove",ue),document.removeEventListener("mouseup",ye)};g.addEventListener("mousedown",Y)});const U=()=>t(9,K=!1);function ae(S){K=S,t(9,K)}function he(S){c=S,t(0,c)}function oe(S){te[S?"unshift":"push"](()=>{g=S,t(8,g)})}function F(S){$=S,t(5,$)}const N=()=>t(9,K=!0);function $e(S){s=S,t(1,s)}const x=()=>{D(),rt(s)};function re(S){i=S,t(3,i)}return o.$$.update=()=>{o.$$.dirty[0]&65537&&_&&We(c)},[c,s,l,i,w,$,m,C,g,K,n,r,ne,D,ce,V,_,U,ae,he,oe,F,N,$e,x,re]}class jn extends lt{constructor(e){super(),it(this,e,Nn,Wn,ct,{},null,[-1,-1])}}new jn({target:document.getElementById("app")});
