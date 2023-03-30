import{a4 as he,a5 as ut,a6 as A,a7 as ft,S as Ze,i as Ye,d as et,G as w,P as N,j as c,F as x,v as u,a8 as pt,a9 as dt,U as tt,aa as _t,ab as mt,ac as bt,ad as gt,ae as ht,af as $t,A as X,Z as se,f as S,O as k,m as L,Q as j,$ as ie,t as y,r as ze,u as g,q as I,a0 as E,o as Fe,h as ne,ag as nt,ah as fe,a1 as je}from"./vendor-82065986.js";import{D as wt,S as Pe,B as ot,I as Oe,C as rt,T as kt,a as vt,A as yt,F as Tt,b as At,O as lt}from"./vendor_mui-e78229ce.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerpolicy&&(l.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?l.credentials="include":r.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function t(r){if(r.ep)return;r.ep=!0;const l=n(r);fetch(r.href,l)}})();const Le="#2c313a",Ie="#353a42",Ue="#282c34",Ct="#3b3f4c",St="#21252b",$e="#abb2bf",Lt="#c678dd",He="#d19a66",Be="#61afef",It="#56b6c2",Et="#e86671",st="#5c6370",jt="#848b98",Ot=he.theme({"*":{fontFamily:"JetBrains Mono NL, monospace"},"&":{color:$e,backgroundColor:Ue,height:"100%"},".cm-scroller":{overflow:"auto"},".cm-content":{caretColor:Be},".cm-cursor, .cm-dropCursor":{borderLeftColor:Be},"&.cm-focused .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection":{backgroundColor:Ct},".cm-panels":{backgroundColor:St,color:$e},".cm-panels.cm-panels-top":{borderBottom:"2px solid black"},".cm-panels.cm-panels-bottom":{borderTop:"2px solid black"},".cm-searchMatch":{backgroundColor:"#72a1ff59",outline:"1px solid #457dff"},".cm-searchMatch.cm-searchMatch-selected":{backgroundColor:"#6199ff2f"},".cm-activeLine":{backgroundColor:Le},".cm-selectionMatch":{backgroundColor:"#aafe661a"},"&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket":{backgroundColor:"#bad0f847",outline:"1px solid #515a6b"},".cm-gutters":{backgroundColor:Ue,color:st,border:"none"},".cm-activeLineGutter":{backgroundColor:Le},".cm-foldPlaceholder":{backgroundColor:"transparent",border:"none",color:"#ddd"},".cm-tooltip":{border:"none",backgroundColor:Ie},".cm-tooltip .cm-tooltip-arrow:before":{borderTopColor:"transparent",borderBottomColor:"transparent"},".cm-tooltip .cm-tooltip-arrow:after":{borderTopColor:Ie,borderBottomColor:Ie},".cm-tooltip-autocomplete":{"& > ul > li[aria-selected]":{backgroundColor:Le,color:$e}}},{dark:!0}),Bt=ut.define([{tag:A.keyword,color:Lt},{tag:[A.variableName,A.operator],color:$e},{tag:[A.bool,A.null,A.typeName,A.number],color:He},{tag:[A.function(A.variableName),A.function(A.propertyName)],color:Be},{tag:[A.propertyName,A.standard(A.function(A.variableName))],color:It},{tag:[A.local(A.variableName),A.standard(A.variableName)],color:Et},{tag:A.comment,color:st},{tag:A.character,color:He},{tag:[A.bracket,A.separator],color:jt}]),zt=[Ot,ft(Bt)];let C;const G=new Array(128).fill(void 0);G.push(void 0,null,!0,!1);function it(o){return G[o]}let ue=G.length;function Ft(o){o<132||(G[o]=ue,ue=o)}function Mt(o){const e=it(o);return Ft(o),e}let ee=0,ae=null;function we(){return(ae===null||ae.byteLength===0)&&(ae=new Uint8Array(C.memory.buffer)),ae}const ke=new TextEncoder("utf-8"),Nt=typeof ke.encodeInto=="function"?function(o,e){return ke.encodeInto(o,e)}:function(o,e){const n=ke.encode(o);return e.set(n),{read:o.length,written:n.length}};function ve(o,e,n){if(n===void 0){const i=ke.encode(o),a=e(i.length);return we().subarray(a,a+i.length).set(i),ee=i.length,a}let t=o.length,r=e(t);const l=we();let s=0;for(;s<t;s++){const i=o.charCodeAt(s);if(i>127)break;l[r+s]=i}if(s!==t){s!==0&&(o=o.slice(s)),r=n(r,t,t=s+o.length*3);const i=we().subarray(r+s,r+t),a=Nt(o,i);s+=a.written}return ee=s,r}let ce=null;function te(){return(ce===null||ce.byteLength===0)&&(ce=new Int32Array(C.memory.buffer)),ce}const at=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});at.decode();function Me(o,e){return at.decode(we().subarray(o,o+e))}function Rt(o){try{const t=C.__wbindgen_add_to_stack_pointer(-16),r=ve(o,C.__wbindgen_malloc,C.__wbindgen_realloc),l=ee;C.analyze(t,r,l);var e=te()[t/4+0],n=te()[t/4+1];return Me(e,n)}finally{C.__wbindgen_add_to_stack_pointer(16),C.__wbindgen_free(e,n)}}function Wt(o,e){try{const r=C.__wbindgen_add_to_stack_pointer(-16),l=ve(o,C.__wbindgen_malloc,C.__wbindgen_realloc),s=ee,i=ve(e,C.__wbindgen_malloc,C.__wbindgen_realloc),a=ee;C.run(r,l,s,i,a);var n=te()[r/4+0],t=te()[r/4+1];return Me(n,t)}finally{C.__wbindgen_add_to_stack_pointer(16),C.__wbindgen_free(n,t)}}function Dt(o){ue===G.length&&G.push(G.length+1);const e=ue;return ue=G[e],G[e]=o,e}async function Pt(o,e){if(typeof Response=="function"&&o instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(o,e)}catch(t){if(o.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",t);else throw t}const n=await o.arrayBuffer();return await WebAssembly.instantiate(n,e)}else{const n=await WebAssembly.instantiate(o,e);return n instanceof WebAssembly.Instance?{instance:n,module:o}:n}}function Ut(){const o={};return o.wbg={},o.wbg.__wbg_new_abda76e883ba8a5f=function(){const e=new Error;return Dt(e)},o.wbg.__wbg_stack_658279fe44541cf6=function(e,n){const t=it(n).stack,r=ve(t,C.__wbindgen_malloc,C.__wbindgen_realloc),l=ee;te()[e/4+1]=l,te()[e/4+0]=r},o.wbg.__wbg_error_f851667af71bcfc6=function(e,n){try{console.error(Me(e,n))}finally{C.__wbindgen_free(e,n)}},o.wbg.__wbindgen_object_drop_ref=function(e){Mt(e)},o}function Ht(o,e){return C=o.exports,ct.__wbindgen_wasm_module=e,ce=null,ae=null,C}async function ct(o){typeof o>"u"&&(o=new URL("/assets/rush_backend_bg-3f7a2b66.wasm",self.location));const e=Ut();(typeof o=="string"||typeof Request=="function"&&o instanceof Request||typeof URL=="function"&&o instanceof URL)&&(o=fetch(o));const{instance:n,module:t}=await Pt(await o,e);return Ht(n,t)}class Vt{constructor(){ct()}lint(e){let n=Rt(e);return JSON.parse(n)}run(e,n){let t=Wt(e,n);return JSON.parse(t)}}function qt(o){let e;return{c(){e=w("div"),N(e,"class","editor svelte-9vsa7j")},m(n,t){c(n,e,t),o[2](e)},p:x,i:x,o:x,d(n){n&&u(e),o[2](null)}}}function Gt(o,e,n){let{code:t=""}=e;function r(_){l===void 0||l.state.doc.toString()===_||l.dispatch(l.state.update({changes:{from:0,to:l.state.doc.length,insert:_}}))}let l,s;const i=pt();let a,p;const b=dt(async()=>{let _=[],T=p.lint(t);for(let d of T)_.push(Object.create({from:d.span.start.charIdx,to:d.span.end.charIdx,severity:d.level,source:"rush analyzer",message:d.message}));return _});tt(()=>{p=new Vt;let _=_t.create({extensions:[mt,bt.of([gt]),ht(),b,$t(),zt,he.updateListener.of(T=>{T.docChanged&&(a&&clearTimeout(a),a=setTimeout(()=>{i("update",t)},500))}),he.updateListener.of(T=>{T.docChanged&&n(1,t=l.state.doc.toString())})]});l=new he({state:_,parent:s})});function h(_){X[_?"unshift":"push"](()=>{s=_,n(0,s)})}return o.$$set=_=>{"code"in _&&n(1,t=_.code)},o.$$.update=()=>{o.$$.dirty&2&&r(t)},[s,t,h]}class xt extends Ze{constructor(e){super(),Ye(this,e,Gt,qt,et,{code:1})}}function Jt(){return new Worker("/assets/rush.worker-f038dc07.js")}const Kt=`// Welcome to the playground of the rush programming language.
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
`,Xt=`// Calculates a digit of the Fibonacci sequence.
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

`,Qt=`fn main() {
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
`,Zt=`// This script approximates some digits of Pi.
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
`,Yt=`// This script approximates some digits of E.
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
`,en=`// This script approximates some digits of Apéry's theorem.
// The final output is an integer which approximates to Apéry * 10000000
fn main() {
    let mut res = 1f;

    for i = 2; i < 30000; i += 1 {
        res += (1f / (i ** 3) as float);
    }

    let FAC = 10000000f;
    exit((res * FAC) as int)
}
`;function Ve(o,e,n){const t=o.slice();return t[29]=e[n],t}function qe(o,e,n){const t=o.slice();return t[32]=e[n],t}function tn(o){let e;return{c(){e=E("Using The Playground")},m(n,t){c(n,e,t)},d(n){n&&u(e)}}}function nn(o){let e,n,t,r,l,s,i,a,p,b,h,_,T;return{c(){e=w("p"),e.innerHTML=`The <a class="highlight svelte-jzatbx" href="https://github.com/rush-rs/rush-playground" target="_blank" rel="noreferrer">rush playground</a>
                allows everyone to use the
                <a class="highlight svelte-jzatbx" href="https://rush-lang.de" target="_blank" rel="noreferrer">rush</a> programming language without the need for an installation.`,n=k(),t=w("p"),t.innerHTML=`All changes made to the current script are saved locally. Therefore, you can reload
                the page without hesitation. If you do want to erase your current changes, use the <code class="highlight svelte-jzatbx">load</code> button in the top right corner.`,r=k(),l=w("p"),l.innerHTML=`This button can also be used to switch to other code templates. For this, the
                desired template is to be selected using the drop down menu at the top. After the
                selection has been made, the <code class="highlight svelte-jzatbx">load</code> button is to be pressed.`,s=k(),i=w("p"),i.innerHTML=`To run the current code using a rush interpreter, use the <i class="material-icons icon svelte-jzatbx">play_arrow</i>
                button in the top right corder. If the script does not stop when expected, it can be
                terminated using the
                <i class="material-icons icon svelte-jzatbx">cancel</i> button.`,a=k(),p=w("p"),p.textContent=`There are multiple backends for rush. While the first two backends can execute rush
                code, the remaining backends can only compile rush. If a compiler backend is used,
                the output of the current script can be seen on the right.`,b=k(),h=w("h4"),h.textContent="Keybindings",_=k(),T=w("ul"),T.innerHTML=`<li><code class="highlight svelte-jzatbx">CTRL + S</code>: force save the current code</li> 
                <li><code class="highlight svelte-jzatbx">F8</code>: run / compile the current code</li> 
                <li><code class="highlight svelte-jzatbx">F9</code>: terminate current interpreter</li>`,N(h,"class","svelte-jzatbx"),N(T,"class","svelte-jzatbx")},m(d,m){c(d,e,m),c(d,n,m),c(d,t,m),c(d,r,m),c(d,l,m),c(d,s,m),c(d,i,m),c(d,a,m),c(d,p,m),c(d,b,m),c(d,h,m),c(d,_,m),c(d,T,m)},p:x,d(d){d&&u(e),d&&u(n),d&&u(t),d&&u(r),d&&u(l),d&&u(s),d&&u(i),d&&u(a),d&&u(p),d&&u(b),d&&u(h),d&&u(_),d&&u(T)}}}function on(o){let e;return{c(){e=E("Close")},m(n,t){c(n,e,t)},d(n){n&&u(e)}}}function rn(o){let e,n;return e=new rt({props:{$$slots:{default:[on]},$$scope:{ctx:o}}}),{c(){S(e.$$.fragment)},m(t,r){L(e,t,r),n=!0},p(t,r){const l={};r[1]&16&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){y(e.$$.fragment,t),n=!1},d(t){I(e,t)}}}function ln(o){let e,n;return e=new ot({props:{$$slots:{default:[rn]},$$scope:{ctx:o}}}),e.$on("click",o[17]),{c(){S(e.$$.fragment)},m(t,r){L(e,t,r),n=!0},p(t,r){const l={};r[1]&16&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){y(e.$$.fragment,t),n=!1},d(t){I(e,t)}}}function sn(o){let e,n,t,r,l,s;return e=new kt({props:{id:"help-title",$$slots:{default:[tn]},$$scope:{ctx:o}}}),t=new vt({props:{id:"help-content",$$slots:{default:[nn]},$$scope:{ctx:o}}}),l=new yt({props:{$$slots:{default:[ln]},$$scope:{ctx:o}}}),{c(){S(e.$$.fragment),n=k(),S(t.$$.fragment),r=k(),S(l.$$.fragment)},m(i,a){L(e,i,a),c(i,n,a),L(t,i,a),c(i,r,a),L(l,i,a),s=!0},p(i,a){const p={};a[1]&16&&(p.$$scope={dirty:a,ctx:i}),e.$set(p);const b={};a[1]&16&&(b.$$scope={dirty:a,ctx:i}),t.$set(b);const h={};a[0]&512|a[1]&16&&(h.$$scope={dirty:a,ctx:i}),l.$set(h)},i(i){s||(g(e.$$.fragment,i),g(t.$$.fragment,i),g(l.$$.fragment,i),s=!0)},o(i){y(e.$$.fragment,i),y(t.$$.fragment,i),y(l.$$.fragment,i),s=!1},d(i){I(e,i),i&&u(n),I(t,i),i&&u(r),I(l,i)}}}function an(o){let e=o[10][o[32]][1]+"",n;return{c(){n=E(e)},m(t,r){c(t,n,r)},p:x,d(t){t&&u(n)}}}function Ge(o){let e,n;return e=new lt({props:{value:o[32],$$slots:{default:[an]},$$scope:{ctx:o}}}),{c(){S(e.$$.fragment)},m(t,r){L(e,t,r),n=!0},p(t,r){const l={};r[1]&16&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){y(e.$$.fragment,t),n=!1},d(t){I(e,t)}}}function cn(o){let e,n,t=Object.keys(o[10]),r=[];for(let s=0;s<t.length;s+=1)r[s]=Ge(qe(o,t,s));const l=s=>y(r[s],1,1,()=>{r[s]=null});return{c(){for(let s=0;s<r.length;s+=1)r[s].c();e=ne()},m(s,i){for(let a=0;a<r.length;a+=1)r[a].m(s,i);c(s,e,i),n=!0},p(s,i){if(i[0]&1024){t=Object.keys(s[10]);let a;for(a=0;a<t.length;a+=1){const p=qe(s,t,a);r[a]?(r[a].p(p,i),g(r[a],1)):(r[a]=Ge(p),r[a].c(),g(r[a],1),r[a].m(e.parentNode,e))}for(Fe(),a=t.length;a<r.length;a+=1)l(a);ze()}},i(s){if(!n){for(let i=0;i<t.length;i+=1)g(r[i]);n=!0}},o(s){r=r.filter(Boolean);for(let i=0;i<r.length;i+=1)y(r[i]);n=!1},d(s){nt(r,s),s&&u(e)}}}function un(o){let e;return{c(){e=E("Load")},m(n,t){c(n,e,t)},d(n){n&&u(e)}}}function fn(o){let e,n;return e=new rt({props:{$$slots:{default:[un]},$$scope:{ctx:o}}}),{c(){S(e.$$.fragment)},m(t,r){L(e,t,r),n=!0},p(t,r){const l={};r[1]&16&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){y(e.$$.fragment,t),n=!1},d(t){I(e,t)}}}function pn(o){let e;return{c(){e=E("help")},m(n,t){c(n,e,t)},d(n){n&&u(e)}}}function dn(o){let e=o[11][o[29]]+"",n;return{c(){n=E(e)},m(t,r){c(t,n,r)},p:x,d(t){t&&u(n)}}}function xe(o){let e,n;return e=new lt({props:{value:o[29],$$slots:{default:[dn]},$$scope:{ctx:o}}}),{c(){S(e.$$.fragment)},m(t,r){L(e,t,r),n=!0},p(t,r){const l={};r[1]&16&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){y(e.$$.fragment,t),n=!1},d(t){I(e,t)}}}function _n(o){let e,n,t=Object.keys(o[11]),r=[];for(let s=0;s<t.length;s+=1)r[s]=xe(Ve(o,t,s));const l=s=>y(r[s],1,1,()=>{r[s]=null});return{c(){for(let s=0;s<r.length;s+=1)r[s].c();e=ne()},m(s,i){for(let a=0;a<r.length;a+=1)r[a].m(s,i);c(s,e,i),n=!0},p(s,i){if(i[0]&2048){t=Object.keys(s[11]);let a;for(a=0;a<t.length;a+=1){const p=Ve(s,t,a);r[a]?(r[a].p(p,i),g(r[a],1)):(r[a]=xe(p),r[a].c(),g(r[a],1),r[a].m(e.parentNode,e))}for(Fe(),a=t.length;a<r.length;a+=1)l(a);ze()}},i(s){if(!n){for(let i=0;i<t.length;i+=1)g(r[i]);n=!0}},o(s){r=r.filter(Boolean);for(let i=0;i<r.length;i+=1)y(r[i]);n=!1},d(s){nt(r,s),s&&u(e)}}}function mn(o){let e,n;return e=new Tt({props:{$$slots:{label:[hn],default:[gn]},$$scope:{ctx:o}}}),{c(){S(e.$$.fragment)},m(t,r){L(e,t,r),n=!0},p(t,r){const l={};r[0]&8|r[1]&16&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){y(e.$$.fragment,t),n=!1},d(t){I(e,t)}}}function bn(o){let e,n,t,r;return e=new Oe({props:{class:"material-icons",disabled:o[6],$$slots:{default:[$n]},$$scope:{ctx:o}}}),e.$on("click",o[12]),t=new Oe({props:{class:"material-icons",disabled:!o[6],$$slots:{default:[wn]},$$scope:{ctx:o}}}),t.$on("click",o[14]),{c(){S(e.$$.fragment),n=k(),S(t.$$.fragment)},m(l,s){L(e,l,s),c(l,n,s),L(t,l,s),r=!0},p(l,s){const i={};s[0]&64&&(i.disabled=l[6]),s[1]&16&&(i.$$scope={dirty:s,ctx:l}),e.$set(i);const a={};s[0]&64&&(a.disabled=!l[6]),s[1]&16&&(a.$$scope={dirty:s,ctx:l}),t.$set(a)},i(l){r||(g(e.$$.fragment,l),g(t.$$.fragment,l),r=!0)},o(l){y(e.$$.fragment,l),y(t.$$.fragment,l),r=!1},d(l){I(e,l),l&&u(n),I(t,l)}}}function gn(o){let e,n,t;function r(s){o[25](s)}let l={};return o[3]!==void 0&&(l.checked=o[3]),e=new At({props:l}),X.push(()=>se(e,"checked",r,o[3])),{c(){S(e.$$.fragment)},m(s,i){L(e,s,i),t=!0},p(s,i){const a={};!n&&i[0]&8&&(n=!0,a.checked=s[3],ie(()=>n=!1)),e.$set(a)},i(s){t||(g(e.$$.fragment,s),t=!0)},o(s){y(e.$$.fragment,s),t=!1},d(s){I(e,s)}}}function hn(o){let e;return{c(){e=w("span"),e.textContent="Show Diagnostics",N(e,"slot","label")},m(n,t){c(n,e,t)},p:x,d(n){n&&u(e)}}}function $n(o){let e;return{c(){e=E("play_arrow")},m(n,t){c(n,e,t)},d(n){n&&u(e)}}}function wn(o){let e;return{c(){e=E("cancel")},m(n,t){c(n,e,t)},d(n){n&&u(e)}}}function kn(o){let e;return{c(){e=E("Press the play button in order to start program execution")},m(n,t){c(n,e,t)},p:x,d(n){n&&u(e)}}}function vn(o){let e,n,t=o[2].diagnostics&&(o[3]||o[2].output===void 0)&&Je(o);function r(i,a){if(i[2].error)return Cn;if(i[2].output!==void 0)return An}let l=r(o),s=l&&l(o);return{c(){t&&t.c(),e=k(),s&&s.c(),n=ne()},m(i,a){t&&t.m(i,a),c(i,e,a),s&&s.m(i,a),c(i,n,a)},p(i,a){i[2].diagnostics&&(i[3]||i[2].output===void 0)?t?t.p(i,a):(t=Je(i),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null),l===(l=r(i))&&s?s.p(i,a):(s&&s.d(1),s=l&&l(i),s&&(s.c(),s.m(n.parentNode,n)))},d(i){t&&t.d(i),i&&u(e),s&&s.d(i),i&&u(n)}}}function yn(o){let e;function n(l,s){return l[7].runtimeError?In:l[7].code!==null?Ln:Sn}let t=n(o),r=t(o);return{c(){r.c(),e=ne()},m(l,s){r.m(l,s),c(l,e,s)},p(l,s){t===(t=n(l))&&r?r.p(l,s):(r.d(1),r=t(l),r&&(r.c(),r.m(e.parentNode,e)))},d(l){r.d(l),l&&u(e)}}}function Tn(o){let e;return{c(){e=E("Backend is running...")},m(n,t){c(n,e,t)},p:x,d(n){n&&u(e)}}}function Je(o){let e,n=o[2].diagnostics+"",t,r;return{c(){e=new fe(!1),t=k(),r=w("div"),e.a=t,N(r,"class","main__output__terminal__sep svelte-jzatbx")},m(l,s){e.m(n,l,s),c(l,t,s),c(l,r,s)},p(l,s){s[0]&4&&n!==(n=l[2].diagnostics+"")&&e.p(n)},d(l){l&&e.d(),l&&u(t),l&&u(r)}}}function An(o){let e,n=o[2].output+"",t;return{c(){e=new fe(!1),t=ne(),e.a=t},m(r,l){e.m(n,r,l),c(r,t,l)},p(r,l){l[0]&4&&n!==(n=r[2].output+"")&&e.p(n)},d(r){r&&u(t),r&&e.d()}}}function Cn(o){let e,n,t,r,l=o[2].error+"",s,i;return{c(){e=E(`Compilation failed:
                        `),n=w("br"),t=k(),r=new fe(!1),s=k(),i=w("br"),r.a=s},m(a,p){c(a,e,p),c(a,n,p),c(a,t,p),r.m(l,a,p),c(a,s,p),c(a,i,p)},p(a,p){p[0]&4&&l!==(l=a[2].error+"")&&r.p(l)},d(a){a&&u(e),a&&u(n),a&&u(t),a&&r.d(),a&&u(s),a&&u(i)}}}function Sn(o){let e,n,t,r,l=o[7].diagnostics+"",s;return{c(){e=E(`Compilation failed:
                        `),n=w("br"),t=k(),r=new fe(!1),s=ne(),r.a=s},m(i,a){c(i,e,a),c(i,n,a),c(i,t,a),r.m(l,i,a),c(i,s,a)},p(i,a){a[0]&128&&l!==(l=i[7].diagnostics+"")&&r.p(l)},d(i){i&&u(e),i&&u(n),i&&u(t),i&&u(s),i&&r.d()}}}function Ln(o){let e,n=o[7].code+"",t,r=o[7].diagnostics!==""&&Ke(o);return{c(){r&&r.c(),e=E(`

                        Program stopped with code `),t=E(n)},m(l,s){r&&r.m(l,s),c(l,e,s),c(l,t,s)},p(l,s){l[7].diagnostics!==""?r?r.p(l,s):(r=Ke(l),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null),s[0]&128&&n!==(n=l[7].code+"")&&je(t,n)},d(l){r&&r.d(l),l&&u(e),l&&u(t)}}}function In(o){let e,n,t,r=o[7].runtimeError.kind+"",l,s,i=o[7].runtimeError.message+"",a;return{c(){e=E(`Interpreter crashed:
                        `),n=w("br"),t=k(),l=E(r),s=E(": "),a=E(i)},m(p,b){c(p,e,b),c(p,n,b),c(p,t,b),c(p,l,b),c(p,s,b),c(p,a,b)},p(p,b){b[0]&128&&r!==(r=p[7].runtimeError.kind+"")&&je(l,r),b[0]&128&&i!==(i=p[7].runtimeError.message+"")&&je(a,i)},d(p){p&&u(e),p&&u(n),p&&u(t),p&&u(l),p&&u(s),p&&u(a)}}}function Ke(o){let e,n=o[7].diagnostics+"",t,r,l,s;return{c(){e=new fe(!1),t=k(),r=w("br"),l=k(),s=w("br"),e.a=t},m(i,a){e.m(n,i,a),c(i,t,a),c(i,r,a),c(i,l,a),c(i,s,a)},p(i,a){a[0]&128&&n!==(n=i[7].diagnostics+"")&&e.p(n)},d(i){i&&e.d(),i&&u(t),i&&u(r),i&&u(l),i&&u(s)}}}function En(o){let e,n,t,r,l,s,i,a,p,b,h,_,T,d,m,q,Q,R,oe,P,pe,U,W,re,de,Z,O,F,_e,K,Y;function v(f){o[18](f)}let D={"aria-labelledby":"help-title","aria-describedby":"help-content",$$slots:{default:[sn]},$$scope:{ctx:o}};o[9]!==void 0&&(D.open=o[9]),n=new wt({props:D}),X.push(()=>se(n,"open",v,o[9]));function B(f){o[19](f)}let M={};o[0]!==void 0&&(M.code=o[0]),i=new xt({props:M}),X.push(()=>se(i,"code",B,o[0])),i.$on("update",o[13]);function J(f){o[21](f)}let le={label:"Select Template",$$slots:{default:[cn]},$$scope:{ctx:o}};o[5]!==void 0&&(le.value=o[5]),m=new Pe({props:le}),X.push(()=>se(m,"value",J,o[5])),R=new ot({props:{variant:"raised",disabled:(o[5]===o[4]||o[6])&&o[10][o[5]][0]===o[0],$$slots:{default:[fn]},$$scope:{ctx:o}}}),R.$on("click",o[15]),P=new Oe({props:{size:"button",class:"material-icons",$$slots:{default:[pn]},$$scope:{ctx:o}}}),P.$on("click",o[22]);function me(f){o[23](f)}let z={label:"Select Backend",$$slots:{default:[_n]},$$scope:{ctx:o}};o[1]!==void 0&&(z.value=o[1]),W=new Pe({props:z}),X.push(()=>se(W,"value",me,o[1])),W.$on("SMUISelect:change",o[24]);const be=[bn,mn],H=[];function Ne(f,$){return $[0]&2&&(Z=null),Z==null&&(Z=!!["vmInterpreter","tree"].includes(f[1])),Z?0:1}O=Ne(o,[-1,-1]),F=H[O]=be[O](o);function Re(f,$){return f[6]?Tn:f[7]?yn:f[2]?vn:kn}let ge=Re(o),V=ge(o);return{c(){e=w("main"),S(n.$$.fragment),r=k(),l=w("div"),s=w("div"),S(i.$$.fragment),p=k(),b=w("div"),h=k(),_=w("div"),T=w("div"),d=w("div"),S(m.$$.fragment),Q=k(),S(R.$$.fragment),oe=k(),S(P.$$.fragment),pe=k(),U=w("div"),S(W.$$.fragment),de=k(),F.c(),_e=k(),K=w("div"),V.c(),N(s,"class","main__editor svelte-jzatbx"),N(b,"class","main__resizer svelte-jzatbx"),N(d,"class","main__output__nav__top svelte-jzatbx"),N(U,"class","main__output__nav__bottom svelte-jzatbx"),N(T,"class","main__output__nav svelte-jzatbx"),N(K,"class","main__output__terminal svelte-jzatbx"),N(_,"class","main__output svelte-jzatbx"),N(l,"class","main svelte-jzatbx")},m(f,$){c(f,e,$),L(n,e,null),j(e,r),j(e,l),j(l,s),L(i,s,null),j(l,p),j(l,b),o[20](b),j(l,h),j(l,_),j(_,T),j(T,d),L(m,d,null),j(d,Q),L(R,d,null),j(d,oe),L(P,d,null),j(T,pe),j(T,U),L(W,U,null),j(U,de),H[O].m(U,null),j(_,_e),j(_,K),V.m(K,null),Y=!0},p(f,$){const ye={};$[0]&512|$[1]&16&&(ye.$$scope={dirty:$,ctx:f}),!t&&$[0]&512&&(t=!0,ye.open=f[9],ie(()=>t=!1)),n.$set(ye);const We={};!a&&$[0]&1&&(a=!0,We.code=f[0],ie(()=>a=!1)),i.$set(We);const Te={};$[1]&16&&(Te.$$scope={dirty:$,ctx:f}),!q&&$[0]&32&&(q=!0,Te.value=f[5],ie(()=>q=!1)),m.$set(Te);const Ae={};$[0]&113&&(Ae.disabled=(f[5]===f[4]||f[6])&&f[10][f[5]][0]===f[0]),$[1]&16&&(Ae.$$scope={dirty:$,ctx:f}),R.$set(Ae);const De={};$[1]&16&&(De.$$scope={dirty:$,ctx:f}),P.$set(De);const Ce={};$[1]&16&&(Ce.$$scope={dirty:$,ctx:f}),!re&&$[0]&2&&(re=!0,Ce.value=f[1],ie(()=>re=!1)),W.$set(Ce);let Se=O;O=Ne(f,$),O===Se?H[O].p(f,$):(Fe(),y(H[Se],1,1,()=>{H[Se]=null}),ze(),F=H[O],F?F.p(f,$):(F=H[O]=be[O](f),F.c()),g(F,1),F.m(U,null)),ge===(ge=Re(f))&&V?V.p(f,$):(V.d(1),V=ge(f),V&&(V.c(),V.m(K,null)))},i(f){Y||(g(n.$$.fragment,f),g(i.$$.fragment,f),g(m.$$.fragment,f),g(R.$$.fragment,f),g(P.$$.fragment,f),g(W.$$.fragment,f),g(F),Y=!0)},o(f){y(n.$$.fragment,f),y(i.$$.fragment,f),y(m.$$.fragment,f),y(R.$$.fragment,f),y(P.$$.fragment,f),y(W.$$.fragment,f),y(F),Y=!1},d(f){f&&u(e),I(n),I(i),o[20](null),I(m),I(R),I(P),I(W),H[O].d(),V.d()}}}function Ee(o){window.localStorage.setItem("rush-playground-code",o)}function Xe(o){window.localStorage.setItem("rush-playground-backend",o)}function Qe(o){window.localStorage.setItem("rush-playground-script",o)}function jn(o,e,n){const t={Welcome:[Kt,"Welcome"],Fibonacci:[Xt,"Fibonacci"],Pow:[Qt,"Calculate Powers"],ApproxPi:[Zt,"Approximate Pi"],ApproxE:[Yt,"Approximate E"],ApproxApery:[en,"Approximate Apéry"]},r={vmInterpreter:"VM interpreter",tree:"tree interpreter",vmCompiler:"VM compiler",wasmText:"Wasm text",wasmBinary:"Wasm binary",riscv:"RISC-V",x64:"x86_64",transpiler:"C transpiler"};let l=Object.keys(r)[0],s,i=!0,a="",p=!1,b="",h=Object.keys(t)[0][0],_=!1,T,d=null,m=null,q=!1;function Q(){n(6,_=!0),d=P(a,l,!["vmInterpreter","tree"].includes(l))}function R(){n(6,_=!0),p&&(n(6,_=!1),["vmInterpreter","tree"].includes(l)||Q())}function oe(){n(6,_=!1),d==null||d.terminate(),n(7,T=void 0)}function P(v,D,B){let M=new Jt;return M.onmessage=function(J){J.data[0]==="ready"&&(B?M.postMessage(["compile",v,D]):M.postMessage(["run",v,D])),J.data[0]==="finished"&&(n(6,_=!1),M.terminate(),B?(n(7,T=void 0),n(2,s=JSON.parse(J.data[1]))):(n(2,s=void 0),n(7,T=JSON.parse(J.data[1]))))},M}async function pe(){n(4,b=h);let v=window.localStorage.getItem("rush-playground-script");v===null?Qe(h):(n(4,b=v),n(5,h=v));let D=window.localStorage.getItem("rush-playground-backend");D===null?Xe(l):n(1,l=D);let B=window.localStorage.getItem("rush-playground-code");return B===null?(n(0,a=t[h][0]),Ee(a),a):B}function U(){n(0,a=t[h][0]),b!==h&&(Qe(h),n(4,b=h))}tt(async()=>{n(0,a=await pe()),n(16,p=!0);let v=0,D=0;const B=m.previousElementSibling,M=m.nextElementSibling;document.addEventListener("keydown",z=>{z.ctrlKey&&z.key==="s"?(z.preventDefault(),Ee(a)):z.key==="F8"&&!_?Q():z.key==="F9"&&_?oe():z.key==="F10"&&(z.preventDefault(),_||U())});const J=function(z){v=z.clientX,D=B.getBoundingClientRect().width,document.addEventListener("mousemove",le),document.addEventListener("mouseup",me)},le=function(z){const be=z.clientX-v,H=(D+be)*100/m.parentNode.getBoundingClientRect().width;B.style.width=`${H}%`,B.style.userSelect="none",B.style.pointerEvents="none",M.style.userSelect="none",M.style.pointerEvents="none"},me=function(){B.style.removeProperty("user-select"),B.style.removeProperty("pointer-events"),M.style.removeProperty("user-select"),M.style.removeProperty("pointer-events"),document.removeEventListener("mousemove",le),document.removeEventListener("mouseup",me)};m.addEventListener("mousedown",J)});const W=()=>n(9,q=!1);function re(v){q=v,n(9,q)}function de(v){a=v,n(0,a)}function Z(v){X[v?"unshift":"push"](()=>{m=v,n(8,m)})}function O(v){h=v,n(5,h)}const F=()=>n(9,q=!0);function _e(v){l=v,n(1,l)}const K=()=>{R(),Xe(l)};function Y(v){i=v,n(3,i)}return o.$$.update=()=>{o.$$.dirty[0]&65537&&p&&Ee(a)},[a,l,s,i,b,h,_,T,m,q,t,r,Q,R,oe,U,p,W,re,de,Z,O,F,_e,K,Y]}class On extends Ze{constructor(e){super(),Ye(this,e,jn,En,et,{},null,[-1,-1])}}new On({target:document.getElementById("app")});
