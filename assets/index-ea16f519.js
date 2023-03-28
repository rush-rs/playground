import{a4 as be,a5 as at,a6 as k,a7 as ut,S as Qe,i as Ze,d as Ye,G as h,P as D,j as c,F as q,v as f,a8 as ct,a9 as ft,U as xe,aa as pt,ab as dt,ac as mt,ad as _t,ae as bt,af as gt,A as X,Z as me,f as I,O as b,m as E,Q as L,$ as _e,u as g,t as y,r as Oe,q as O,a0 as C,o as Be,h as Y,ag as et,ah as ie,a1 as Le}from"./vendor-82065986.js";import{D as ht,S as Fe,B as tt,I as Ie,C as nt,T as $t,a as wt,A as kt,O as ot}from"./vendor_mui-79176280.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerpolicy&&(l.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?l.credentials="include":o.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();const Te="#2c313a",Se="#353a42",We="#282c34",vt="#3b3f4c",yt="#21252b",ge="#abb2bf",At="#c678dd",Pe="#d19a66",Ee="#61afef",Tt="#56b6c2",St="#e86671",rt="#5c6370",Ct="#848b98",Lt=be.theme({"*":{fontFamily:"JetBrains Mono NL, monospace"},"&":{color:ge,backgroundColor:We,height:"100%"},".cm-scroller":{overflow:"auto"},".cm-content":{caretColor:Ee},".cm-cursor, .cm-dropCursor":{borderLeftColor:Ee},"&.cm-focused .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection":{backgroundColor:vt},".cm-panels":{backgroundColor:yt,color:ge},".cm-panels.cm-panels-top":{borderBottom:"2px solid black"},".cm-panels.cm-panels-bottom":{borderTop:"2px solid black"},".cm-searchMatch":{backgroundColor:"#72a1ff59",outline:"1px solid #457dff"},".cm-searchMatch.cm-searchMatch-selected":{backgroundColor:"#6199ff2f"},".cm-activeLine":{backgroundColor:Te},".cm-selectionMatch":{backgroundColor:"#aafe661a"},"&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket":{backgroundColor:"#bad0f847",outline:"1px solid #515a6b"},".cm-gutters":{backgroundColor:We,color:rt,border:"none"},".cm-activeLineGutter":{backgroundColor:Te},".cm-foldPlaceholder":{backgroundColor:"transparent",border:"none",color:"#ddd"},".cm-tooltip":{border:"none",backgroundColor:Se},".cm-tooltip .cm-tooltip-arrow:before":{borderTopColor:"transparent",borderBottomColor:"transparent"},".cm-tooltip .cm-tooltip-arrow:after":{borderTopColor:Se,borderBottomColor:Se},".cm-tooltip-autocomplete":{"& > ul > li[aria-selected]":{backgroundColor:Te,color:ge}}},{dark:!0}),It=at.define([{tag:k.keyword,color:At},{tag:[k.variableName,k.operator],color:ge},{tag:[k.bool,k.null,k.typeName,k.number],color:Pe},{tag:[k.function(k.variableName),k.function(k.propertyName)],color:Ee},{tag:[k.propertyName,k.standard(k.function(k.variableName))],color:Tt},{tag:[k.local(k.variableName),k.standard(k.variableName)],color:St},{tag:k.comment,color:rt},{tag:k.character,color:Pe},{tag:[k.bracket,k.separator],color:Ct}]),Et=[Lt,ut(It)];let T;const z=new Array(128).fill(void 0);z.push(void 0,null,!0,!1);function lt(r){return z[r]}let se=z.length;function Ot(r){r<132||(z[r]=se,se=r)}function Bt(r){const e=lt(r);return Ot(r),e}let Q=0,re=null;function he(){return(re===null||re.byteLength===0)&&(re=new Uint8Array(T.memory.buffer)),re}const $e=new TextEncoder("utf-8"),Mt=typeof $e.encodeInto=="function"?function(r,e){return $e.encodeInto(r,e)}:function(r,e){const t=$e.encode(r);return e.set(t),{read:r.length,written:t.length}};function we(r,e,t){if(t===void 0){const s=$e.encode(r),a=e(s.length);return he().subarray(a,a+s.length).set(s),Q=s.length,a}let n=r.length,o=e(n);const l=he();let i=0;for(;i<n;i++){const s=r.charCodeAt(i);if(s>127)break;l[o+i]=s}if(i!==n){i!==0&&(r=r.slice(i)),o=t(o,n,n=i+r.length*3);const s=he().subarray(o+i,o+n),a=Mt(r,s);i+=a.written}return Q=i,o}let le=null;function Z(){return(le===null||le.byteLength===0)&&(le=new Int32Array(T.memory.buffer)),le}const st=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});st.decode();function Me(r,e){return st.decode(he().subarray(r,r+e))}function Nt(r,e){try{const o=T.__wbindgen_add_to_stack_pointer(-16),l=we(r,T.__wbindgen_malloc,T.__wbindgen_realloc),i=Q,s=we(e,T.__wbindgen_malloc,T.__wbindgen_realloc),a=Q;T.run(o,l,i,s,a);var t=Z()[o/4+0],n=Z()[o/4+1];return Me(t,n)}finally{T.__wbindgen_add_to_stack_pointer(16),T.__wbindgen_free(t,n)}}function Rt(r){try{const n=T.__wbindgen_add_to_stack_pointer(-16),o=we(r,T.__wbindgen_malloc,T.__wbindgen_realloc),l=Q;T.analyze(n,o,l);var e=Z()[n/4+0],t=Z()[n/4+1];return Me(e,t)}finally{T.__wbindgen_add_to_stack_pointer(16),T.__wbindgen_free(e,t)}}function Ft(r){se===z.length&&z.push(z.length+1);const e=se;return se=z[e],z[e]=r,e}async function Wt(r,e){if(typeof Response=="function"&&r instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(r,e)}catch(n){if(r.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",n);else throw n}const t=await r.arrayBuffer();return await WebAssembly.instantiate(t,e)}else{const t=await WebAssembly.instantiate(r,e);return t instanceof WebAssembly.Instance?{instance:t,module:r}:t}}function Pt(){const r={};return r.wbg={},r.wbg.__wbg_new_abda76e883ba8a5f=function(){const e=new Error;return Ft(e)},r.wbg.__wbg_stack_658279fe44541cf6=function(e,t){const n=lt(t).stack,o=we(n,T.__wbindgen_malloc,T.__wbindgen_realloc),l=Q;Z()[e/4+1]=l,Z()[e/4+0]=o},r.wbg.__wbg_error_f851667af71bcfc6=function(e,t){try{console.error(Me(e,t))}finally{T.__wbindgen_free(e,t)}},r.wbg.__wbindgen_object_drop_ref=function(e){Bt(e)},r}function Dt(r,e){return T=r.exports,it.__wbindgen_wasm_module=e,le=null,re=null,T}async function it(r){typeof r>"u"&&(r=new URL("/assets/rush_backend_bg-b2cb71b3.wasm",self.location));const e=Pt();(typeof r=="string"||typeof Request=="function"&&r instanceof Request||typeof URL=="function"&&r instanceof URL)&&(r=fetch(r));const{instance:t,module:n}=await Wt(await r,e);return Dt(t,n)}class jt{constructor(){it()}lint(e){let t=Rt(e);return JSON.parse(t)}run(e,t){let n=Nt(e,t);return JSON.parse(n)}}function Ut(r){let e;return{c(){e=h("div"),D(e,"class","editor svelte-9vsa7j")},m(t,n){c(t,e,n),r[2](e)},p:q,i:q,o:q,d(t){t&&f(e),r[2](null)}}}function Ht(r,e,t){let{code:n=""}=e;function o(d){l===void 0||l.state.doc.toString()===d||l.dispatch(l.state.update({changes:{from:0,to:l.state.doc.length,insert:d}}))}let l,i;const s=ct();let a,u;const m=ft(async()=>{let d=[],_=u.lint(n);for(let A of _)d.push(Object.create({from:A.span.start.charIdx,to:A.span.end.charIdx,severity:A.level,source:"rush analyzer",message:A.message}));return d});xe(()=>{u=new jt;let d=pt.create({extensions:[dt,mt.of([_t]),bt(),m,gt(),Et,be.updateListener.of(_=>{_.docChanged&&(a&&clearTimeout(a),a=setTimeout(()=>{s("update",n)},500))}),be.updateListener.of(_=>{_.docChanged&&t(1,n=l.state.doc.toString())})]});l=new be({state:d,parent:i})});function $(d){X[d?"unshift":"push"](()=>{i=d,t(0,i)})}return r.$$set=d=>{"code"in d&&t(1,n=d.code)},r.$$.update=()=>{r.$$.dirty&2&&o(n)},[i,n,$]}class zt extends Qe{constructor(e){super(),Ze(this,e,Ht,Ut,Ye,{code:1})}}function Vt(){return new Worker("/assets/rush.worker-adb9f710.js")}const qt=`// Welcome to the playground of the rush programming language.
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
`,Gt=`// Calculates a digit of the Fibonacci sequence.
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

`,Jt=`fn main() {
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
`,Kt=`// This script approximates some digits of Pi.
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
`,Xt=`// This script approximates some digits of E.
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
`,Qt=`// This script approximates some digits of Apéry's theorem.
// The final output is an integer which approximates to Apéry * 10000000
fn main() {
    let mut res = 1f;

    for i = 2; i < 30000; i += 1 {
        res += (1f / (i ** 3) as float);
    }

    let FAC = 10000000f;
    exit((res * FAC) as int)
}
`;function De(r,e,t){const n=r.slice();return n[27]=e[t],n}function je(r,e,t){const n=r.slice();return n[30]=e[t],n}function Zt(r){let e;return{c(){e=C("Using The Playground")},m(t,n){c(t,e,n)},d(t){t&&f(e)}}}function Yt(r){let e,t,n,o,l,i,s,a,u,m,$;return{c(){e=h("p"),e.innerHTML=`The <a class="highlight svelte-gu7ukm" href="https://github.com/rush-rs/rush-playground" target="_blank" rel="noreferrer">rush playground</a>
                allows everyone to use the
                <a class="highlight svelte-gu7ukm" href="https://github.com/rush-rs/rush" target="_blank" rel="noreferrer">rush</a> programming language regardless of whether they have installed rush or not.`,t=b(),n=h("p"),n.innerHTML=`All changes made to the current script are saved locally, meaning on your device.
                Therefore, you can reload the page while working without hesitation. If you do want
                to erase your current changes, use the <code class="highlight svelte-gu7ukm">load</code> button in
                the top right corner.`,o=b(),l=h("p"),l.innerHTML=`This button can also be used to switch to other code templates. For this, the
                desired template is to be selected using the drop down menu. After the selection has
                been made, the <code class="highlight svelte-gu7ukm">load</code> button is to be pressed.`,i=b(),s=h("p"),s.innerHTML=`To run the current code using the <a class="highlight svelte-gu7ukm" href="https://github.com/rush-rs/rush/tree/main/crates/rush-interpreter-vm" target="_blank" rel="noreferrer">VM</a>, use the <i class="material-icons icon svelte-gu7ukm">play_arrow</i> button in the top right
                corder. If the script does not stop when expected, it can be terminated using the
                <i class="material-icons icon svelte-gu7ukm">cancel</i> button.`,a=b(),u=h("h4"),u.textContent="Keybindings",m=b(),$=h("ul"),$.innerHTML=`<li><code class="highlight svelte-gu7ukm">CTRL + S</code>: force save the current code</li> 
                <li><code class="highlight svelte-gu7ukm">F8</code>: run the current code</li> 
                <li><code class="highlight svelte-gu7ukm">F9</code>: terminate current execution</li>`,D(u,"class","svelte-gu7ukm"),D($,"class","svelte-gu7ukm")},m(d,_){c(d,e,_),c(d,t,_),c(d,n,_),c(d,o,_),c(d,l,_),c(d,i,_),c(d,s,_),c(d,a,_),c(d,u,_),c(d,m,_),c(d,$,_)},p:q,d(d){d&&f(e),d&&f(t),d&&f(n),d&&f(o),d&&f(l),d&&f(i),d&&f(s),d&&f(a),d&&f(u),d&&f(m),d&&f($)}}}function xt(r){let e;return{c(){e=C("Close")},m(t,n){c(t,e,n)},d(t){t&&f(e)}}}function en(r){let e,t;return e=new nt({props:{$$slots:{default:[xt]},$$scope:{ctx:r}}}),{c(){I(e.$$.fragment)},m(n,o){E(e,n,o),t=!0},p(n,o){const l={};o[1]&4&&(l.$$scope={dirty:o,ctx:n}),e.$set(l)},i(n){t||(g(e.$$.fragment,n),t=!0)},o(n){y(e.$$.fragment,n),t=!1},d(n){O(e,n)}}}function tn(r){let e,t;return e=new tt({props:{$$slots:{default:[en]},$$scope:{ctx:r}}}),e.$on("click",r[16]),{c(){I(e.$$.fragment)},m(n,o){E(e,n,o),t=!0},p(n,o){const l={};o[1]&4&&(l.$$scope={dirty:o,ctx:n}),e.$set(l)},i(n){t||(g(e.$$.fragment,n),t=!0)},o(n){y(e.$$.fragment,n),t=!1},d(n){O(e,n)}}}function nn(r){let e,t,n,o,l,i;return e=new $t({props:{id:"help-title",$$slots:{default:[Zt]},$$scope:{ctx:r}}}),n=new wt({props:{id:"help-content",$$slots:{default:[Yt]},$$scope:{ctx:r}}}),l=new kt({props:{$$slots:{default:[tn]},$$scope:{ctx:r}}}),{c(){I(e.$$.fragment),t=b(),I(n.$$.fragment),o=b(),I(l.$$.fragment)},m(s,a){E(e,s,a),c(s,t,a),E(n,s,a),c(s,o,a),E(l,s,a),i=!0},p(s,a){const u={};a[1]&4&&(u.$$scope={dirty:a,ctx:s}),e.$set(u);const m={};a[1]&4&&(m.$$scope={dirty:a,ctx:s}),n.$set(m);const $={};a[0]&256|a[1]&4&&($.$$scope={dirty:a,ctx:s}),l.$set($)},i(s){i||(g(e.$$.fragment,s),g(n.$$.fragment,s),g(l.$$.fragment,s),i=!0)},o(s){y(e.$$.fragment,s),y(n.$$.fragment,s),y(l.$$.fragment,s),i=!1},d(s){O(e,s),s&&f(t),O(n,s),s&&f(o),O(l,s)}}}function on(r){let e=r[9][r[30]][1]+"",t;return{c(){t=C(e)},m(n,o){c(n,t,o)},p:q,d(n){n&&f(t)}}}function Ue(r){let e,t;return e=new ot({props:{value:r[30],$$slots:{default:[on]},$$scope:{ctx:r}}}),{c(){I(e.$$.fragment)},m(n,o){E(e,n,o),t=!0},p(n,o){const l={};o[1]&4&&(l.$$scope={dirty:o,ctx:n}),e.$set(l)},i(n){t||(g(e.$$.fragment,n),t=!0)},o(n){y(e.$$.fragment,n),t=!1},d(n){O(e,n)}}}function rn(r){let e,t,n=Object.keys(r[9]),o=[];for(let i=0;i<n.length;i+=1)o[i]=Ue(je(r,n,i));const l=i=>y(o[i],1,1,()=>{o[i]=null});return{c(){for(let i=0;i<o.length;i+=1)o[i].c();e=Y()},m(i,s){for(let a=0;a<o.length;a+=1)o[a].m(i,s);c(i,e,s),t=!0},p(i,s){if(s[0]&512){n=Object.keys(i[9]);let a;for(a=0;a<n.length;a+=1){const u=je(i,n,a);o[a]?(o[a].p(u,s),g(o[a],1)):(o[a]=Ue(u),o[a].c(),g(o[a],1),o[a].m(e.parentNode,e))}for(Be(),a=n.length;a<o.length;a+=1)l(a);Oe()}},i(i){if(!t){for(let s=0;s<n.length;s+=1)g(o[s]);t=!0}},o(i){o=o.filter(Boolean);for(let s=0;s<o.length;s+=1)y(o[s]);t=!1},d(i){et(o,i),i&&f(e)}}}function ln(r){let e;return{c(){e=C("Load")},m(t,n){c(t,e,n)},d(t){t&&f(e)}}}function sn(r){let e,t;return e=new nt({props:{$$slots:{default:[ln]},$$scope:{ctx:r}}}),{c(){I(e.$$.fragment)},m(n,o){E(e,n,o),t=!0},p(n,o){const l={};o[1]&4&&(l.$$scope={dirty:o,ctx:n}),e.$set(l)},i(n){t||(g(e.$$.fragment,n),t=!0)},o(n){y(e.$$.fragment,n),t=!1},d(n){O(e,n)}}}function an(r){let e;return{c(){e=C("help")},m(t,n){c(t,e,n)},d(t){t&&f(e)}}}function un(r){let e=r[10][r[27]]+"",t;return{c(){t=C(e)},m(n,o){c(n,t,o)},p:q,d(n){n&&f(t)}}}function He(r){let e,t;return e=new ot({props:{value:r[27],$$slots:{default:[un]},$$scope:{ctx:r}}}),{c(){I(e.$$.fragment)},m(n,o){E(e,n,o),t=!0},p(n,o){const l={};o[1]&4&&(l.$$scope={dirty:o,ctx:n}),e.$set(l)},i(n){t||(g(e.$$.fragment,n),t=!0)},o(n){y(e.$$.fragment,n),t=!1},d(n){O(e,n)}}}function cn(r){let e,t,n=Object.keys(r[10]),o=[];for(let i=0;i<n.length;i+=1)o[i]=He(De(r,n,i));const l=i=>y(o[i],1,1,()=>{o[i]=null});return{c(){for(let i=0;i<o.length;i+=1)o[i].c();e=Y()},m(i,s){for(let a=0;a<o.length;a+=1)o[a].m(i,s);c(i,e,s),t=!0},p(i,s){if(s[0]&1024){n=Object.keys(i[10]);let a;for(a=0;a<n.length;a+=1){const u=De(i,n,a);o[a]?(o[a].p(u,s),g(o[a],1)):(o[a]=He(u),o[a].c(),g(o[a],1),o[a].m(e.parentNode,e))}for(Be(),a=n.length;a<o.length;a+=1)l(a);Oe()}},i(i){if(!t){for(let s=0;s<n.length;s+=1)g(o[s]);t=!0}},o(i){o=o.filter(Boolean);for(let s=0;s<o.length;s+=1)y(o[s]);t=!1},d(i){et(o,i),i&&f(e)}}}function ze(r){let e,t,n,o;return e=new Ie({props:{class:"material-icons",disabled:r[5],$$slots:{default:[fn]},$$scope:{ctx:r}}}),e.$on("click",r[11]),n=new Ie({props:{class:"material-icons",disabled:!r[5],$$slots:{default:[pn]},$$scope:{ctx:r}}}),n.$on("click",r[13]),{c(){I(e.$$.fragment),t=b(),I(n.$$.fragment)},m(l,i){E(e,l,i),c(l,t,i),E(n,l,i),o=!0},p(l,i){const s={};i[0]&32&&(s.disabled=l[5]),i[1]&4&&(s.$$scope={dirty:i,ctx:l}),e.$set(s);const a={};i[0]&32&&(a.disabled=!l[5]),i[1]&4&&(a.$$scope={dirty:i,ctx:l}),n.$set(a)},i(l){o||(g(e.$$.fragment,l),g(n.$$.fragment,l),o=!0)},o(l){y(e.$$.fragment,l),y(n.$$.fragment,l),o=!1},d(l){O(e,l),l&&f(t),O(n,l)}}}function fn(r){let e;return{c(){e=C("play_arrow")},m(t,n){c(t,e,n)},d(t){t&&f(e)}}}function pn(r){let e;return{c(){e=C("cancel")},m(t,n){c(t,e,n)},d(t){t&&f(e)}}}function dn(r){let e;return{c(){e=C("Press the play button in order to start program execution")},m(t,n){c(t,e,n)},p:q,d(t){t&&f(e)}}}function mn(r){let e,t,n,o=r[2].diagnostics&&Ve(r),l=r[2].error&&qe(r),i=r[2].output!==void 0&&Ge(r);return{c(){o&&o.c(),e=b(),l&&l.c(),t=b(),i&&i.c(),n=Y()},m(s,a){o&&o.m(s,a),c(s,e,a),l&&l.m(s,a),c(s,t,a),i&&i.m(s,a),c(s,n,a)},p(s,a){s[2].diagnostics?o?o.p(s,a):(o=Ve(s),o.c(),o.m(e.parentNode,e)):o&&(o.d(1),o=null),s[2].error?l?l.p(s,a):(l=qe(s),l.c(),l.m(t.parentNode,t)):l&&(l.d(1),l=null),s[2].output!==void 0?i?i.p(s,a):(i=Ge(s),i.c(),i.m(n.parentNode,n)):i&&(i.d(1),i=null)},d(s){o&&o.d(s),s&&f(e),l&&l.d(s),s&&f(t),i&&i.d(s),s&&f(n)}}}function _n(r){let e;function t(l,i){return l[6].runtimeError?$n:l[6].code!==null?hn:gn}let n=t(r),o=n(r);return{c(){o.c(),e=Y()},m(l,i){o.m(l,i),c(l,e,i)},p(l,i){n===(n=t(l))&&o?o.p(l,i):(o.d(1),o=n(l),o&&(o.c(),o.m(e.parentNode,e)))},d(l){o.d(l),l&&f(e)}}}function bn(r){let e;return{c(){e=C("Backend is running...")},m(t,n){c(t,e,n)},p:q,d(t){t&&f(e)}}}function Ve(r){let e,t=r[2].diagnostics+"",n,o,l,i,s,a;return{c(){e=new ie(!1),n=b(),o=h("br"),l=b(),i=h("br"),s=b(),a=h("br"),e.a=n},m(u,m){e.m(t,u,m),c(u,n,m),c(u,o,m),c(u,l,m),c(u,i,m),c(u,s,m),c(u,a,m)},p(u,m){m[0]&4&&t!==(t=u[2].diagnostics+"")&&e.p(t)},d(u){u&&e.d(),u&&f(n),u&&f(o),u&&f(l),u&&f(i),u&&f(s),u&&f(a)}}}function qe(r){let e,t,n=r[2].error+"",o,l;return{c(){e=C(`Compilation failed:
                        `),t=new ie(!1),o=b(),l=h("br"),t.a=o},m(i,s){c(i,e,s),t.m(n,i,s),c(i,o,s),c(i,l,s)},p(i,s){s[0]&4&&n!==(n=i[2].error+"")&&t.p(n)},d(i){i&&f(e),i&&t.d(),i&&f(o),i&&f(l)}}}function Ge(r){let e,t=r[2].output+"",n;return{c(){e=new ie(!1),n=Y(),e.a=n},m(o,l){e.m(t,o,l),c(o,n,l)},p(o,l){l[0]&4&&t!==(t=o[2].output+"")&&e.p(t)},d(o){o&&f(n),o&&e.d()}}}function gn(r){let e,t,n,o,l=r[6].diagnostics+"",i;return{c(){e=C(`Compilation failed:
                        `),t=h("br"),n=b(),o=new ie(!1),i=Y(),o.a=i},m(s,a){c(s,e,a),c(s,t,a),c(s,n,a),o.m(l,s,a),c(s,i,a)},p(s,a){a[0]&64&&l!==(l=s[6].diagnostics+"")&&o.p(l)},d(s){s&&f(e),s&&f(t),s&&f(n),s&&f(i),s&&o.d()}}}function hn(r){let e,t=r[6].code+"",n,o=r[6].diagnostics!==""&&Je(r);return{c(){o&&o.c(),e=C(`

                        Program stopped with code `),n=C(t)},m(l,i){o&&o.m(l,i),c(l,e,i),c(l,n,i)},p(l,i){l[6].diagnostics!==""?o?o.p(l,i):(o=Je(l),o.c(),o.m(e.parentNode,e)):o&&(o.d(1),o=null),i[0]&64&&t!==(t=l[6].code+"")&&Le(n,t)},d(l){o&&o.d(l),l&&f(e),l&&f(n)}}}function $n(r){let e,t,n,o=r[6].runtimeError.kind+"",l,i,s=r[6].runtimeError.message+"",a;return{c(){e=C(`Interpreter crashed:
                        `),t=h("br"),n=b(),l=C(o),i=C(": "),a=C(s)},m(u,m){c(u,e,m),c(u,t,m),c(u,n,m),c(u,l,m),c(u,i,m),c(u,a,m)},p(u,m){m[0]&64&&o!==(o=u[6].runtimeError.kind+"")&&Le(l,o),m[0]&64&&s!==(s=u[6].runtimeError.message+"")&&Le(a,s)},d(u){u&&f(e),u&&f(t),u&&f(n),u&&f(l),u&&f(i),u&&f(a)}}}function Je(r){let e,t=r[6].diagnostics+"",n,o,l,i;return{c(){e=new ie(!1),n=b(),o=h("br"),l=b(),i=h("br"),e.a=n},m(s,a){e.m(t,s,a),c(s,n,a),c(s,o,a),c(s,l,a),c(s,i,a)},p(s,a){a[0]&64&&t!==(t=s[6].diagnostics+"")&&e.p(t)},d(s){s&&e.d(),s&&f(n),s&&f(o),s&&f(l),s&&f(i)}}}function wn(r){let e,t,n,o,l,i,s,a,u,m,$,d,_,A,B,G,x,F,ae,j,ee,H,W,te,ue,ne=["vmInterpreter","tree"].includes(r[1]),ce,J,K;function v(p){r[17](p)}let P={"aria-labelledby":"help-title","aria-describedby":"help-content",$$slots:{default:[nn]},$$scope:{ctx:r}};r[8]!==void 0&&(P.open=r[8]),t=new ht({props:P}),X.push(()=>me(t,"open",v,r[8]));function M(p){r[18](p)}let R={};r[0]!==void 0&&(R.code=r[0]),s=new zt({props:R}),X.push(()=>me(s,"code",M,r[0])),s.$on("update",r[12]);function V(p){r[20](p)}let oe={label:"Select Template",$$slots:{default:[rn]},$$scope:{ctx:r}};r[4]!==void 0&&(oe.value=r[4]),B=new Fe({props:oe}),X.push(()=>me(B,"value",V,r[4])),F=new tt({props:{variant:"raised",disabled:(r[4]===r[3]||r[5])&&r[9][r[4]][0]===r[0],$$slots:{default:[sn]},$$scope:{ctx:r}}}),F.$on("click",r[14]),j=new Ie({props:{size:"button",class:"material-icons",$$slots:{default:[an]},$$scope:{ctx:r}}}),j.$on("click",r[21]);function fe(p){r[22](p)}let N={label:"Select Backend",$$slots:{default:[cn]},$$scope:{ctx:r}};r[1]!==void 0&&(N.value=r[1]),W=new Fe({props:N}),X.push(()=>me(W,"value",fe,r[1])),W.$on("SMUISelect:change",r[23]);let S=ne&&ze(r);function pe(p,w){return p[5]?bn:p[6]?_n:p[2]?mn:dn}let de=pe(r),U=de(r);return{c(){e=h("main"),I(t.$$.fragment),o=b(),l=h("div"),i=h("div"),I(s.$$.fragment),u=b(),m=h("div"),$=b(),d=h("div"),_=h("div"),A=h("div"),I(B.$$.fragment),x=b(),I(F.$$.fragment),ae=b(),I(j.$$.fragment),ee=b(),H=h("div"),I(W.$$.fragment),ue=b(),S&&S.c(),ce=b(),J=h("div"),U.c(),D(i,"class","main__editor svelte-gu7ukm"),D(m,"class","main__resizer svelte-gu7ukm"),D(A,"class","main__output__nav__top svelte-gu7ukm"),D(H,"class","main__output__nav__bottom svelte-gu7ukm"),D(_,"class","main__output__nav svelte-gu7ukm"),D(J,"class","main__output__terminal svelte-gu7ukm"),D(d,"class","main__output svelte-gu7ukm"),D(l,"class","main svelte-gu7ukm")},m(p,w){c(p,e,w),E(t,e,null),L(e,o),L(e,l),L(l,i),E(s,i,null),L(l,u),L(l,m),r[19](m),L(l,$),L(l,d),L(d,_),L(_,A),E(B,A,null),L(A,x),E(F,A,null),L(A,ae),E(j,A,null),L(_,ee),L(_,H),E(W,H,null),L(H,ue),S&&S.m(H,null),L(d,ce),L(d,J),U.m(J,null),K=!0},p(p,w){const ke={};w[0]&256|w[1]&4&&(ke.$$scope={dirty:w,ctx:p}),!n&&w[0]&256&&(n=!0,ke.open=p[8],_e(()=>n=!1)),t.$set(ke);const Ne={};!a&&w[0]&1&&(a=!0,Ne.code=p[0],_e(()=>a=!1)),s.$set(Ne);const ve={};w[1]&4&&(ve.$$scope={dirty:w,ctx:p}),!G&&w[0]&16&&(G=!0,ve.value=p[4],_e(()=>G=!1)),B.$set(ve);const ye={};w[0]&57&&(ye.disabled=(p[4]===p[3]||p[5])&&p[9][p[4]][0]===p[0]),w[1]&4&&(ye.$$scope={dirty:w,ctx:p}),F.$set(ye);const Re={};w[1]&4&&(Re.$$scope={dirty:w,ctx:p}),j.$set(Re);const Ae={};w[1]&4&&(Ae.$$scope={dirty:w,ctx:p}),!te&&w[0]&2&&(te=!0,Ae.value=p[1],_e(()=>te=!1)),W.$set(Ae),w[0]&2&&(ne=["vmInterpreter","tree"].includes(p[1])),ne?S?(S.p(p,w),w[0]&2&&g(S,1)):(S=ze(p),S.c(),g(S,1),S.m(H,null)):S&&(Be(),y(S,1,1,()=>{S=null}),Oe()),de===(de=pe(p))&&U?U.p(p,w):(U.d(1),U=de(p),U&&(U.c(),U.m(J,null)))},i(p){K||(g(t.$$.fragment,p),g(s.$$.fragment,p),g(B.$$.fragment,p),g(F.$$.fragment,p),g(j.$$.fragment,p),g(W.$$.fragment,p),g(S),K=!0)},o(p){y(t.$$.fragment,p),y(s.$$.fragment,p),y(B.$$.fragment,p),y(F.$$.fragment,p),y(j.$$.fragment,p),y(W.$$.fragment,p),y(S),K=!1},d(p){p&&f(e),O(t),O(s),r[19](null),O(B),O(F),O(j),O(W),S&&S.d(),U.d()}}}function Ce(r){window.localStorage.setItem("rush-playground-code",r)}function Ke(r){window.localStorage.setItem("rush-playground-backend",r)}function Xe(r){window.localStorage.setItem("rush-playground-script",r)}function kn(r,e,t){const n={Welcome:[qt,"Welcome"],Fibonacci:[Gt,"Fibonacci"],Pow:[Jt,"Calculate Powers"],ApproxPi:[Kt,"Approximate Pi"],ApproxE:[Xt,"Approximate E"],ApproxApery:[Qt,"Approximate Apéry"]},o={vmInterpreter:"VM interpreter",tree:"tree interpreter",vmCompiler:"VM compiler",riscv:"RISC-V",x64:"x86_64",transpiler:"C transpiler"};let l=Object.keys(o)[0],i,s="",a=!1,u="",m=Object.keys(n)[0][0],$=!1,d,_=null,A=null,B=!1;function G(){t(5,$=!0),_=ae(s,l,!["vmInterpreter","tree"].includes(l))}function x(){t(5,$=!0),a&&(t(5,$=!1),["vmInterpreter","tree"].includes(l)||G())}function F(){t(5,$=!1),_==null||_.terminate(),t(6,d=void 0)}function ae(v,P,M){let R=new Vt;return R.onmessage=function(V){V.data[0]==="ready"&&(M?R.postMessage(["compile",v,P]):R.postMessage(["run",v,P])),V.data[0]==="finished"&&(t(5,$=!1),R.terminate(),M?(t(6,d=void 0),t(2,i=JSON.parse(V.data[1]))):(t(2,i=void 0),t(6,d=JSON.parse(V.data[1]))))},R}async function j(){t(3,u=m);let v=window.localStorage.getItem("rush-playground-script");v===null?Xe(m):(t(3,u=v),t(4,m=v));let P=window.localStorage.getItem("rush-playground-backend");P===null?Ke(l):t(1,l=P);let M=window.localStorage.getItem("rush-playground-code");return M===null?(t(0,s=n[m][0]),Ce(s),s):M}function ee(){t(0,s=n[m][0]),u!==m&&(Xe(m),t(3,u=m))}xe(async()=>{t(0,s=await j()),t(15,a=!0);let v=0,P=0;const M=A.previousElementSibling,R=A.nextElementSibling;document.addEventListener("keydown",N=>{N.ctrlKey&&N.key==="s"?(N.preventDefault(),Ce(s)):N.key==="F8"&&!$?G():N.key==="F9"&&$?F():N.key==="F10"&&(N.preventDefault(),$||ee())});const V=function(N){v=N.clientX,P=M.getBoundingClientRect().width,document.addEventListener("mousemove",oe),document.addEventListener("mouseup",fe)},oe=function(N){const S=N.clientX-v,pe=(P+S)*100/A.parentNode.getBoundingClientRect().width;M.style.width=`${pe}%`,M.style.userSelect="none",M.style.pointerEvents="none",R.style.userSelect="none",R.style.pointerEvents="none"},fe=function(){M.style.removeProperty("user-select"),M.style.removeProperty("pointer-events"),R.style.removeProperty("user-select"),R.style.removeProperty("pointer-events"),document.removeEventListener("mousemove",oe),document.removeEventListener("mouseup",fe)};A.addEventListener("mousedown",V)});const H=()=>t(8,B=!1);function W(v){B=v,t(8,B)}function te(v){s=v,t(0,s)}function ue(v){X[v?"unshift":"push"](()=>{A=v,t(7,A)})}function ne(v){m=v,t(4,m)}const ce=()=>t(8,B=!0);function J(v){l=v,t(1,l)}const K=()=>{x(),Ke(l)};return r.$$.update=()=>{r.$$.dirty[0]&32769&&a&&Ce(s)},[s,l,i,u,m,$,d,A,B,n,o,G,x,F,ee,a,H,W,te,ue,ne,ce,J,K]}class vn extends Qe{constructor(e){super(),Ze(this,e,kn,wn,Ye,{},null,[-1,-1])}}new vn({target:document.getElementById("app")});
