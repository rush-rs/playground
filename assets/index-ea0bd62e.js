import{a4 as be,a5 as st,a6 as y,a7 as it,S as Ke,i as Xe,d as Qe,G as h,P as D,j as c,F as q,v as f,a8 as at,a9 as ut,U as Ze,aa as ct,ab as ft,ac as pt,ad as dt,ae as mt,af as _t,A as X,Z as me,f as E,O as g,m as O,Q as L,$ as _e,u as $,t as A,r as Oe,q as B,a0 as I,o as Be,h as Y,ag as Ye,ah as ie,a1 as Ie}from"./vendor-82065986.js";import{D as bt,S as We,B as xe,I as Le,C as et,T as gt,a as ht,A as $t,O as tt}from"./vendor_mui-79176280.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerpolicy&&(l.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?l.credentials="include":r.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function t(r){if(r.ep)return;r.ep=!0;const l=n(r);fetch(r.href,l)}})();const Ae="#2c313a",Se="#353a42",Fe="#282c34",wt="#3b3f4c",kt="#21252b",ge="#abb2bf",vt="#c678dd",Pe="#d19a66",Ee="#61afef",yt="#56b6c2",Tt="#e86671",nt="#5c6370",At="#848b98",St=be.theme({"*":{fontFamily:"JetBrains Mono NL, monospace"},"&":{color:ge,backgroundColor:Fe,height:"100%"},".cm-scroller":{overflow:"auto"},".cm-content":{caretColor:Ee},".cm-cursor, .cm-dropCursor":{borderLeftColor:Ee},"&.cm-focused .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection":{backgroundColor:wt},".cm-panels":{backgroundColor:kt,color:ge},".cm-panels.cm-panels-top":{borderBottom:"2px solid black"},".cm-panels.cm-panels-bottom":{borderTop:"2px solid black"},".cm-searchMatch":{backgroundColor:"#72a1ff59",outline:"1px solid #457dff"},".cm-searchMatch.cm-searchMatch-selected":{backgroundColor:"#6199ff2f"},".cm-activeLine":{backgroundColor:Ae},".cm-selectionMatch":{backgroundColor:"#aafe661a"},"&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket":{backgroundColor:"#bad0f847",outline:"1px solid #515a6b"},".cm-gutters":{backgroundColor:Fe,color:nt,border:"none"},".cm-activeLineGutter":{backgroundColor:Ae},".cm-foldPlaceholder":{backgroundColor:"transparent",border:"none",color:"#ddd"},".cm-tooltip":{border:"none",backgroundColor:Se},".cm-tooltip .cm-tooltip-arrow:before":{borderTopColor:"transparent",borderBottomColor:"transparent"},".cm-tooltip .cm-tooltip-arrow:after":{borderTopColor:Se,borderBottomColor:Se},".cm-tooltip-autocomplete":{"& > ul > li[aria-selected]":{backgroundColor:Ae,color:ge}}},{dark:!0}),Ct=st.define([{tag:y.keyword,color:vt},{tag:[y.variableName,y.operator],color:ge},{tag:[y.bool,y.null,y.typeName,y.number],color:Pe},{tag:[y.function(y.variableName),y.function(y.propertyName)],color:Ee},{tag:[y.propertyName,y.standard(y.function(y.variableName))],color:yt},{tag:[y.local(y.variableName),y.standard(y.variableName)],color:Tt},{tag:y.comment,color:nt},{tag:y.character,color:Pe},{tag:[y.bracket,y.separator],color:At}]),It=[St,it(Ct)];let S;const z=new Array(128).fill(void 0);z.push(void 0,null,!0,!1);function ot(o){return z[o]}let se=z.length;function Lt(o){o<132||(z[o]=se,se=o)}function Et(o){const e=ot(o);return Lt(o),e}let Q=0,re=null;function he(){return(re===null||re.byteLength===0)&&(re=new Uint8Array(S.memory.buffer)),re}const $e=new TextEncoder("utf-8"),Ot=typeof $e.encodeInto=="function"?function(o,e){return $e.encodeInto(o,e)}:function(o,e){const n=$e.encode(o);return e.set(n),{read:o.length,written:n.length}};function we(o,e,n){if(n===void 0){const s=$e.encode(o),a=e(s.length);return he().subarray(a,a+s.length).set(s),Q=s.length,a}let t=o.length,r=e(t);const l=he();let i=0;for(;i<t;i++){const s=o.charCodeAt(i);if(s>127)break;l[r+i]=s}if(i!==t){i!==0&&(o=o.slice(i)),r=n(r,t,t=i+o.length*3);const s=he().subarray(r+i,r+t),a=Ot(o,s);i+=a.written}return Q=i,r}let le=null;function Z(){return(le===null||le.byteLength===0)&&(le=new Int32Array(S.memory.buffer)),le}const rt=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});rt.decode();function Me(o,e){return rt.decode(he().subarray(o,o+e))}function Bt(o){try{const t=S.__wbindgen_add_to_stack_pointer(-16),r=we(o,S.__wbindgen_malloc,S.__wbindgen_realloc),l=Q;S.analyze(t,r,l);var e=Z()[t/4+0],n=Z()[t/4+1];return Me(e,n)}finally{S.__wbindgen_add_to_stack_pointer(16),S.__wbindgen_free(e,n)}}function Mt(o,e){try{const r=S.__wbindgen_add_to_stack_pointer(-16),l=we(o,S.__wbindgen_malloc,S.__wbindgen_realloc),i=Q,s=we(e,S.__wbindgen_malloc,S.__wbindgen_realloc),a=Q;S.run(r,l,i,s,a);var n=Z()[r/4+0],t=Z()[r/4+1];return Me(n,t)}finally{S.__wbindgen_add_to_stack_pointer(16),S.__wbindgen_free(n,t)}}function Nt(o){se===z.length&&z.push(z.length+1);const e=se;return se=z[e],z[e]=o,e}async function Rt(o,e){if(typeof Response=="function"&&o instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(o,e)}catch(t){if(o.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",t);else throw t}const n=await o.arrayBuffer();return await WebAssembly.instantiate(n,e)}else{const n=await WebAssembly.instantiate(o,e);return n instanceof WebAssembly.Instance?{instance:n,module:o}:n}}function Wt(){const o={};return o.wbg={},o.wbg.__wbg_new_abda76e883ba8a5f=function(){const e=new Error;return Nt(e)},o.wbg.__wbg_stack_658279fe44541cf6=function(e,n){const t=ot(n).stack,r=we(t,S.__wbindgen_malloc,S.__wbindgen_realloc),l=Q;Z()[e/4+1]=l,Z()[e/4+0]=r},o.wbg.__wbg_error_f851667af71bcfc6=function(e,n){try{console.error(Me(e,n))}finally{S.__wbindgen_free(e,n)}},o.wbg.__wbindgen_object_drop_ref=function(e){Et(e)},o}function Ft(o,e){return S=o.exports,lt.__wbindgen_wasm_module=e,le=null,re=null,S}async function lt(o){typeof o>"u"&&(o=new URL("/assets/rush_backend_bg-3f7a2b66.wasm",self.location));const e=Wt();(typeof o=="string"||typeof Request=="function"&&o instanceof Request||typeof URL=="function"&&o instanceof URL)&&(o=fetch(o));const{instance:n,module:t}=await Rt(await o,e);return Ft(n,t)}class Pt{constructor(){lt()}lint(e){let n=Bt(e);return JSON.parse(n)}run(e,n){let t=Mt(e,n);return JSON.parse(t)}}function Dt(o){let e;return{c(){e=h("div"),D(e,"class","editor svelte-9vsa7j")},m(n,t){c(n,e,t),o[2](e)},p:q,i:q,o:q,d(n){n&&f(e),o[2](null)}}}function jt(o,e,n){let{code:t=""}=e;function r(_){l===void 0||l.state.doc.toString()===_||l.dispatch(l.state.update({changes:{from:0,to:l.state.doc.length,insert:_}}))}let l,i;const s=at();let a,u;const m=ut(async()=>{let _=[],k=u.lint(t);for(let d of k)_.push(Object.create({from:d.span.start.charIdx,to:d.span.end.charIdx,severity:d.level,source:"rush analyzer",message:d.message}));return _});Ze(()=>{u=new Pt;let _=ct.create({extensions:[ft,pt.of([dt]),mt(),m,_t(),It,be.updateListener.of(k=>{k.docChanged&&(a&&clearTimeout(a),a=setTimeout(()=>{s("update",t)},500))}),be.updateListener.of(k=>{k.docChanged&&n(1,t=l.state.doc.toString())})]});l=new be({state:_,parent:i})});function w(_){X[_?"unshift":"push"](()=>{i=_,n(0,i)})}return o.$$set=_=>{"code"in _&&n(1,t=_.code)},o.$$.update=()=>{o.$$.dirty&2&&r(t)},[i,t,w]}class Ut extends Ke{constructor(e){super(),Xe(this,e,jt,Dt,Qe,{code:1})}}function Ht(){return new Worker("/assets/rush.worker-f038dc07.js")}const zt=`// Welcome to the playground of the rush programming language.
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
`,Vt=`// Calculates a digit of the Fibonacci sequence.
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

`,qt=`fn main() {
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
`,Gt=`// This script approximates some digits of Pi.
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
`,Jt=`// This script approximates some digits of E.
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
`,Kt=`// This script approximates some digits of Apéry's theorem.
// The final output is an integer which approximates to Apéry * 10000000
fn main() {
    let mut res = 1f;

    for i = 2; i < 30000; i += 1 {
        res += (1f / (i ** 3) as float);
    }

    let FAC = 10000000f;
    exit((res * FAC) as int)
}
`;function De(o,e,n){const t=o.slice();return t[27]=e[n],t}function je(o,e,n){const t=o.slice();return t[30]=e[n],t}function Xt(o){let e;return{c(){e=I("Using The Playground")},m(n,t){c(n,e,t)},d(n){n&&f(e)}}}function Qt(o){let e,n,t,r,l,i,s,a,u,m,w,_,k;return{c(){e=h("p"),e.innerHTML=`The <a class="highlight svelte-gu7ukm" href="https://github.com/rush-rs/rush-playground" target="_blank" rel="noreferrer">rush playground</a>
                allows everyone to use the
                <a class="highlight svelte-gu7ukm" href="https://rush-lang.de" target="_blank" rel="noreferrer">rush</a> programming language without the need for an installation.`,n=g(),t=h("p"),t.innerHTML=`All changes made to the current script are saved locally. Therefore, you can reload
                the page without hesitation. If you do want to erase your current changes, use the <code class="highlight svelte-gu7ukm">load</code> button in the top right corner.`,r=g(),l=h("p"),l.innerHTML=`This button can also be used to switch to other code templates. For this, the
                desired template is to be selected using the drop down menu at the top. After the
                selection has been made, the <code class="highlight svelte-gu7ukm">load</code> button is to be pressed.`,i=g(),s=h("p"),s.innerHTML=`To run the current code using a rush interpreter, use the <i class="material-icons icon svelte-gu7ukm">play_arrow</i>
                button in the top right corder. If the script does not stop when expected, it can be
                terminated using the
                <i class="material-icons icon svelte-gu7ukm">cancel</i> button.`,a=g(),u=h("p"),u.textContent=`There are multiple backends for rush. While the first two backends can execute rush
                code, the remaining backends can only compile rush. If a compiler backend is used,
                the output of the current script can be seen on the right.`,m=g(),w=h("h4"),w.textContent="Keybindings",_=g(),k=h("ul"),k.innerHTML=`<li><code class="highlight svelte-gu7ukm">CTRL + S</code>: force save the current code</li> 
                <li><code class="highlight svelte-gu7ukm">F8</code>: run / compile the current code</li> 
                <li><code class="highlight svelte-gu7ukm">F9</code>: terminate current interpreter</li>`,D(w,"class","svelte-gu7ukm"),D(k,"class","svelte-gu7ukm")},m(d,b){c(d,e,b),c(d,n,b),c(d,t,b),c(d,r,b),c(d,l,b),c(d,i,b),c(d,s,b),c(d,a,b),c(d,u,b),c(d,m,b),c(d,w,b),c(d,_,b),c(d,k,b)},p:q,d(d){d&&f(e),d&&f(n),d&&f(t),d&&f(r),d&&f(l),d&&f(i),d&&f(s),d&&f(a),d&&f(u),d&&f(m),d&&f(w),d&&f(_),d&&f(k)}}}function Zt(o){let e;return{c(){e=I("Close")},m(n,t){c(n,e,t)},d(n){n&&f(e)}}}function Yt(o){let e,n;return e=new et({props:{$$slots:{default:[Zt]},$$scope:{ctx:o}}}),{c(){E(e.$$.fragment)},m(t,r){O(e,t,r),n=!0},p(t,r){const l={};r[1]&4&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){A(e.$$.fragment,t),n=!1},d(t){B(e,t)}}}function xt(o){let e,n;return e=new xe({props:{$$slots:{default:[Yt]},$$scope:{ctx:o}}}),e.$on("click",o[16]),{c(){E(e.$$.fragment)},m(t,r){O(e,t,r),n=!0},p(t,r){const l={};r[1]&4&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){A(e.$$.fragment,t),n=!1},d(t){B(e,t)}}}function en(o){let e,n,t,r,l,i;return e=new gt({props:{id:"help-title",$$slots:{default:[Xt]},$$scope:{ctx:o}}}),t=new ht({props:{id:"help-content",$$slots:{default:[Qt]},$$scope:{ctx:o}}}),l=new $t({props:{$$slots:{default:[xt]},$$scope:{ctx:o}}}),{c(){E(e.$$.fragment),n=g(),E(t.$$.fragment),r=g(),E(l.$$.fragment)},m(s,a){O(e,s,a),c(s,n,a),O(t,s,a),c(s,r,a),O(l,s,a),i=!0},p(s,a){const u={};a[1]&4&&(u.$$scope={dirty:a,ctx:s}),e.$set(u);const m={};a[1]&4&&(m.$$scope={dirty:a,ctx:s}),t.$set(m);const w={};a[0]&256|a[1]&4&&(w.$$scope={dirty:a,ctx:s}),l.$set(w)},i(s){i||($(e.$$.fragment,s),$(t.$$.fragment,s),$(l.$$.fragment,s),i=!0)},o(s){A(e.$$.fragment,s),A(t.$$.fragment,s),A(l.$$.fragment,s),i=!1},d(s){B(e,s),s&&f(n),B(t,s),s&&f(r),B(l,s)}}}function tn(o){let e=o[9][o[30]][1]+"",n;return{c(){n=I(e)},m(t,r){c(t,n,r)},p:q,d(t){t&&f(n)}}}function Ue(o){let e,n;return e=new tt({props:{value:o[30],$$slots:{default:[tn]},$$scope:{ctx:o}}}),{c(){E(e.$$.fragment)},m(t,r){O(e,t,r),n=!0},p(t,r){const l={};r[1]&4&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){A(e.$$.fragment,t),n=!1},d(t){B(e,t)}}}function nn(o){let e,n,t=Object.keys(o[9]),r=[];for(let i=0;i<t.length;i+=1)r[i]=Ue(je(o,t,i));const l=i=>A(r[i],1,1,()=>{r[i]=null});return{c(){for(let i=0;i<r.length;i+=1)r[i].c();e=Y()},m(i,s){for(let a=0;a<r.length;a+=1)r[a].m(i,s);c(i,e,s),n=!0},p(i,s){if(s[0]&512){t=Object.keys(i[9]);let a;for(a=0;a<t.length;a+=1){const u=je(i,t,a);r[a]?(r[a].p(u,s),$(r[a],1)):(r[a]=Ue(u),r[a].c(),$(r[a],1),r[a].m(e.parentNode,e))}for(Be(),a=t.length;a<r.length;a+=1)l(a);Oe()}},i(i){if(!n){for(let s=0;s<t.length;s+=1)$(r[s]);n=!0}},o(i){r=r.filter(Boolean);for(let s=0;s<r.length;s+=1)A(r[s]);n=!1},d(i){Ye(r,i),i&&f(e)}}}function on(o){let e;return{c(){e=I("Load")},m(n,t){c(n,e,t)},d(n){n&&f(e)}}}function rn(o){let e,n;return e=new et({props:{$$slots:{default:[on]},$$scope:{ctx:o}}}),{c(){E(e.$$.fragment)},m(t,r){O(e,t,r),n=!0},p(t,r){const l={};r[1]&4&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){A(e.$$.fragment,t),n=!1},d(t){B(e,t)}}}function ln(o){let e;return{c(){e=I("help")},m(n,t){c(n,e,t)},d(n){n&&f(e)}}}function sn(o){let e=o[10][o[27]]+"",n;return{c(){n=I(e)},m(t,r){c(t,n,r)},p:q,d(t){t&&f(n)}}}function He(o){let e,n;return e=new tt({props:{value:o[27],$$slots:{default:[sn]},$$scope:{ctx:o}}}),{c(){E(e.$$.fragment)},m(t,r){O(e,t,r),n=!0},p(t,r){const l={};r[1]&4&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){A(e.$$.fragment,t),n=!1},d(t){B(e,t)}}}function an(o){let e,n,t=Object.keys(o[10]),r=[];for(let i=0;i<t.length;i+=1)r[i]=He(De(o,t,i));const l=i=>A(r[i],1,1,()=>{r[i]=null});return{c(){for(let i=0;i<r.length;i+=1)r[i].c();e=Y()},m(i,s){for(let a=0;a<r.length;a+=1)r[a].m(i,s);c(i,e,s),n=!0},p(i,s){if(s[0]&1024){t=Object.keys(i[10]);let a;for(a=0;a<t.length;a+=1){const u=De(i,t,a);r[a]?(r[a].p(u,s),$(r[a],1)):(r[a]=He(u),r[a].c(),$(r[a],1),r[a].m(e.parentNode,e))}for(Be(),a=t.length;a<r.length;a+=1)l(a);Oe()}},i(i){if(!n){for(let s=0;s<t.length;s+=1)$(r[s]);n=!0}},o(i){r=r.filter(Boolean);for(let s=0;s<r.length;s+=1)A(r[s]);n=!1},d(i){Ye(r,i),i&&f(e)}}}function ze(o){let e,n,t,r;return e=new Le({props:{class:"material-icons",disabled:o[5],$$slots:{default:[un]},$$scope:{ctx:o}}}),e.$on("click",o[11]),t=new Le({props:{class:"material-icons",disabled:!o[5],$$slots:{default:[cn]},$$scope:{ctx:o}}}),t.$on("click",o[13]),{c(){E(e.$$.fragment),n=g(),E(t.$$.fragment)},m(l,i){O(e,l,i),c(l,n,i),O(t,l,i),r=!0},p(l,i){const s={};i[0]&32&&(s.disabled=l[5]),i[1]&4&&(s.$$scope={dirty:i,ctx:l}),e.$set(s);const a={};i[0]&32&&(a.disabled=!l[5]),i[1]&4&&(a.$$scope={dirty:i,ctx:l}),t.$set(a)},i(l){r||($(e.$$.fragment,l),$(t.$$.fragment,l),r=!0)},o(l){A(e.$$.fragment,l),A(t.$$.fragment,l),r=!1},d(l){B(e,l),l&&f(n),B(t,l)}}}function un(o){let e;return{c(){e=I("play_arrow")},m(n,t){c(n,e,t)},d(n){n&&f(e)}}}function cn(o){let e;return{c(){e=I("cancel")},m(n,t){c(n,e,t)},d(n){n&&f(e)}}}function fn(o){let e;return{c(){e=I("Press the play button in order to start program execution")},m(n,t){c(n,e,t)},p:q,d(n){n&&f(e)}}}function pn(o){let e,n,t=o[2].diagnostics&&Ve(o);function r(s,a){if(s[2].error)return bn;if(s[2].output!==void 0)return _n}let l=r(o),i=l&&l(o);return{c(){t&&t.c(),e=g(),i&&i.c(),n=Y()},m(s,a){t&&t.m(s,a),c(s,e,a),i&&i.m(s,a),c(s,n,a)},p(s,a){s[2].diagnostics?t?t.p(s,a):(t=Ve(s),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null),l===(l=r(s))&&i?i.p(s,a):(i&&i.d(1),i=l&&l(s),i&&(i.c(),i.m(n.parentNode,n)))},d(s){t&&t.d(s),s&&f(e),i&&i.d(s),s&&f(n)}}}function dn(o){let e;function n(l,i){return l[6].runtimeError?$n:l[6].code!==null?hn:gn}let t=n(o),r=t(o);return{c(){r.c(),e=Y()},m(l,i){r.m(l,i),c(l,e,i)},p(l,i){t===(t=n(l))&&r?r.p(l,i):(r.d(1),r=t(l),r&&(r.c(),r.m(e.parentNode,e)))},d(l){r.d(l),l&&f(e)}}}function mn(o){let e;return{c(){e=I("Backend is running...")},m(n,t){c(n,e,t)},p:q,d(n){n&&f(e)}}}function Ve(o){let e,n=o[2].diagnostics+"",t,r,l,i,s,a;return{c(){e=new ie(!1),t=g(),r=h("br"),l=g(),i=h("br"),s=g(),a=h("br"),e.a=t},m(u,m){e.m(n,u,m),c(u,t,m),c(u,r,m),c(u,l,m),c(u,i,m),c(u,s,m),c(u,a,m)},p(u,m){m[0]&4&&n!==(n=u[2].diagnostics+"")&&e.p(n)},d(u){u&&e.d(),u&&f(t),u&&f(r),u&&f(l),u&&f(i),u&&f(s),u&&f(a)}}}function _n(o){let e,n=o[2].output+"",t;return{c(){e=new ie(!1),t=Y(),e.a=t},m(r,l){e.m(n,r,l),c(r,t,l)},p(r,l){l[0]&4&&n!==(n=r[2].output+"")&&e.p(n)},d(r){r&&f(t),r&&e.d()}}}function bn(o){let e,n,t,r,l=o[2].error+"",i,s;return{c(){e=I(`Compilation failed:
                        `),n=h("br"),t=g(),r=new ie(!1),i=g(),s=h("br"),r.a=i},m(a,u){c(a,e,u),c(a,n,u),c(a,t,u),r.m(l,a,u),c(a,i,u),c(a,s,u)},p(a,u){u[0]&4&&l!==(l=a[2].error+"")&&r.p(l)},d(a){a&&f(e),a&&f(n),a&&f(t),a&&r.d(),a&&f(i),a&&f(s)}}}function gn(o){let e,n,t,r,l=o[6].diagnostics+"",i;return{c(){e=I(`Compilation failed:
                        `),n=h("br"),t=g(),r=new ie(!1),i=Y(),r.a=i},m(s,a){c(s,e,a),c(s,n,a),c(s,t,a),r.m(l,s,a),c(s,i,a)},p(s,a){a[0]&64&&l!==(l=s[6].diagnostics+"")&&r.p(l)},d(s){s&&f(e),s&&f(n),s&&f(t),s&&f(i),s&&r.d()}}}function hn(o){let e,n=o[6].code+"",t,r=o[6].diagnostics!==""&&qe(o);return{c(){r&&r.c(),e=I(`

                        Program stopped with code `),t=I(n)},m(l,i){r&&r.m(l,i),c(l,e,i),c(l,t,i)},p(l,i){l[6].diagnostics!==""?r?r.p(l,i):(r=qe(l),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null),i[0]&64&&n!==(n=l[6].code+"")&&Ie(t,n)},d(l){r&&r.d(l),l&&f(e),l&&f(t)}}}function $n(o){let e,n,t,r=o[6].runtimeError.kind+"",l,i,s=o[6].runtimeError.message+"",a;return{c(){e=I(`Interpreter crashed:
                        `),n=h("br"),t=g(),l=I(r),i=I(": "),a=I(s)},m(u,m){c(u,e,m),c(u,n,m),c(u,t,m),c(u,l,m),c(u,i,m),c(u,a,m)},p(u,m){m[0]&64&&r!==(r=u[6].runtimeError.kind+"")&&Ie(l,r),m[0]&64&&s!==(s=u[6].runtimeError.message+"")&&Ie(a,s)},d(u){u&&f(e),u&&f(n),u&&f(t),u&&f(l),u&&f(i),u&&f(a)}}}function qe(o){let e,n=o[6].diagnostics+"",t,r,l,i;return{c(){e=new ie(!1),t=g(),r=h("br"),l=g(),i=h("br"),e.a=t},m(s,a){e.m(n,s,a),c(s,t,a),c(s,r,a),c(s,l,a),c(s,i,a)},p(s,a){a[0]&64&&n!==(n=s[6].diagnostics+"")&&e.p(n)},d(s){s&&e.d(),s&&f(t),s&&f(r),s&&f(l),s&&f(i)}}}function wn(o){let e,n,t,r,l,i,s,a,u,m,w,_,k,d,b,G,x,W,ae,j,ee,H,F,te,ue,ne=["vmInterpreter","tree"].includes(o[1]),ce,J,K;function T(p){o[17](p)}let P={"aria-labelledby":"help-title","aria-describedby":"help-content",$$slots:{default:[en]},$$scope:{ctx:o}};o[8]!==void 0&&(P.open=o[8]),n=new bt({props:P}),X.push(()=>me(n,"open",T,o[8]));function M(p){o[18](p)}let R={};o[0]!==void 0&&(R.code=o[0]),s=new Ut({props:R}),X.push(()=>me(s,"code",M,o[0])),s.$on("update",o[12]);function V(p){o[20](p)}let oe={label:"Select Template",$$slots:{default:[nn]},$$scope:{ctx:o}};o[4]!==void 0&&(oe.value=o[4]),b=new We({props:oe}),X.push(()=>me(b,"value",V,o[4])),W=new xe({props:{variant:"raised",disabled:(o[4]===o[3]||o[5])&&o[9][o[4]][0]===o[0],$$slots:{default:[rn]},$$scope:{ctx:o}}}),W.$on("click",o[14]),j=new Le({props:{size:"button",class:"material-icons",$$slots:{default:[ln]},$$scope:{ctx:o}}}),j.$on("click",o[21]);function fe(p){o[22](p)}let N={label:"Select Backend",$$slots:{default:[an]},$$scope:{ctx:o}};o[1]!==void 0&&(N.value=o[1]),F=new We({props:N}),X.push(()=>me(F,"value",fe,o[1])),F.$on("SMUISelect:change",o[23]);let C=ne&&ze(o);function pe(p,v){return p[5]?mn:p[6]?dn:p[2]?pn:fn}let de=pe(o),U=de(o);return{c(){e=h("main"),E(n.$$.fragment),r=g(),l=h("div"),i=h("div"),E(s.$$.fragment),u=g(),m=h("div"),w=g(),_=h("div"),k=h("div"),d=h("div"),E(b.$$.fragment),x=g(),E(W.$$.fragment),ae=g(),E(j.$$.fragment),ee=g(),H=h("div"),E(F.$$.fragment),ue=g(),C&&C.c(),ce=g(),J=h("div"),U.c(),D(i,"class","main__editor svelte-gu7ukm"),D(m,"class","main__resizer svelte-gu7ukm"),D(d,"class","main__output__nav__top svelte-gu7ukm"),D(H,"class","main__output__nav__bottom svelte-gu7ukm"),D(k,"class","main__output__nav svelte-gu7ukm"),D(J,"class","main__output__terminal svelte-gu7ukm"),D(_,"class","main__output svelte-gu7ukm"),D(l,"class","main svelte-gu7ukm")},m(p,v){c(p,e,v),O(n,e,null),L(e,r),L(e,l),L(l,i),O(s,i,null),L(l,u),L(l,m),o[19](m),L(l,w),L(l,_),L(_,k),L(k,d),O(b,d,null),L(d,x),O(W,d,null),L(d,ae),O(j,d,null),L(k,ee),L(k,H),O(F,H,null),L(H,ue),C&&C.m(H,null),L(_,ce),L(_,J),U.m(J,null),K=!0},p(p,v){const ke={};v[0]&256|v[1]&4&&(ke.$$scope={dirty:v,ctx:p}),!t&&v[0]&256&&(t=!0,ke.open=p[8],_e(()=>t=!1)),n.$set(ke);const Ne={};!a&&v[0]&1&&(a=!0,Ne.code=p[0],_e(()=>a=!1)),s.$set(Ne);const ve={};v[1]&4&&(ve.$$scope={dirty:v,ctx:p}),!G&&v[0]&16&&(G=!0,ve.value=p[4],_e(()=>G=!1)),b.$set(ve);const ye={};v[0]&57&&(ye.disabled=(p[4]===p[3]||p[5])&&p[9][p[4]][0]===p[0]),v[1]&4&&(ye.$$scope={dirty:v,ctx:p}),W.$set(ye);const Re={};v[1]&4&&(Re.$$scope={dirty:v,ctx:p}),j.$set(Re);const Te={};v[1]&4&&(Te.$$scope={dirty:v,ctx:p}),!te&&v[0]&2&&(te=!0,Te.value=p[1],_e(()=>te=!1)),F.$set(Te),v[0]&2&&(ne=["vmInterpreter","tree"].includes(p[1])),ne?C?(C.p(p,v),v[0]&2&&$(C,1)):(C=ze(p),C.c(),$(C,1),C.m(H,null)):C&&(Be(),A(C,1,1,()=>{C=null}),Oe()),de===(de=pe(p))&&U?U.p(p,v):(U.d(1),U=de(p),U&&(U.c(),U.m(J,null)))},i(p){K||($(n.$$.fragment,p),$(s.$$.fragment,p),$(b.$$.fragment,p),$(W.$$.fragment,p),$(j.$$.fragment,p),$(F.$$.fragment,p),$(C),K=!0)},o(p){A(n.$$.fragment,p),A(s.$$.fragment,p),A(b.$$.fragment,p),A(W.$$.fragment,p),A(j.$$.fragment,p),A(F.$$.fragment,p),A(C),K=!1},d(p){p&&f(e),B(n),B(s),o[19](null),B(b),B(W),B(j),B(F),C&&C.d(),U.d()}}}function Ce(o){window.localStorage.setItem("rush-playground-code",o)}function Ge(o){window.localStorage.setItem("rush-playground-backend",o)}function Je(o){window.localStorage.setItem("rush-playground-script",o)}function kn(o,e,n){const t={Welcome:[zt,"Welcome"],Fibonacci:[Vt,"Fibonacci"],Pow:[qt,"Calculate Powers"],ApproxPi:[Gt,"Approximate Pi"],ApproxE:[Jt,"Approximate E"],ApproxApery:[Kt,"Approximate Apéry"]},r={vmInterpreter:"VM interpreter",tree:"tree interpreter",vmCompiler:"VM compiler",wasmText:"Wasm text",wasmBinary:"Wasm binary",riscv:"RISC-V",x64:"x86_64",transpiler:"C transpiler"};let l=Object.keys(r)[0],i,s="",a=!1,u="",m=Object.keys(t)[0][0],w=!1,_,k=null,d=null,b=!1;function G(){n(5,w=!0),k=ae(s,l,!["vmInterpreter","tree"].includes(l))}function x(){n(5,w=!0),a&&(n(5,w=!1),["vmInterpreter","tree"].includes(l)||G())}function W(){n(5,w=!1),k==null||k.terminate(),n(6,_=void 0)}function ae(T,P,M){let R=new Ht;return R.onmessage=function(V){V.data[0]==="ready"&&(M?R.postMessage(["compile",T,P]):R.postMessage(["run",T,P])),V.data[0]==="finished"&&(n(5,w=!1),R.terminate(),M?(n(6,_=void 0),n(2,i=JSON.parse(V.data[1]))):(n(2,i=void 0),n(6,_=JSON.parse(V.data[1]))))},R}async function j(){n(3,u=m);let T=window.localStorage.getItem("rush-playground-script");T===null?Je(m):(n(3,u=T),n(4,m=T));let P=window.localStorage.getItem("rush-playground-backend");P===null?Ge(l):n(1,l=P);let M=window.localStorage.getItem("rush-playground-code");return M===null?(n(0,s=t[m][0]),Ce(s),s):M}function ee(){n(0,s=t[m][0]),u!==m&&(Je(m),n(3,u=m))}Ze(async()=>{n(0,s=await j()),n(15,a=!0);let T=0,P=0;const M=d.previousElementSibling,R=d.nextElementSibling;document.addEventListener("keydown",N=>{N.ctrlKey&&N.key==="s"?(N.preventDefault(),Ce(s)):N.key==="F8"&&!w?G():N.key==="F9"&&w?W():N.key==="F10"&&(N.preventDefault(),w||ee())});const V=function(N){T=N.clientX,P=M.getBoundingClientRect().width,document.addEventListener("mousemove",oe),document.addEventListener("mouseup",fe)},oe=function(N){const C=N.clientX-T,pe=(P+C)*100/d.parentNode.getBoundingClientRect().width;M.style.width=`${pe}%`,M.style.userSelect="none",M.style.pointerEvents="none",R.style.userSelect="none",R.style.pointerEvents="none"},fe=function(){M.style.removeProperty("user-select"),M.style.removeProperty("pointer-events"),R.style.removeProperty("user-select"),R.style.removeProperty("pointer-events"),document.removeEventListener("mousemove",oe),document.removeEventListener("mouseup",fe)};d.addEventListener("mousedown",V)});const H=()=>n(8,b=!1);function F(T){b=T,n(8,b)}function te(T){s=T,n(0,s)}function ue(T){X[T?"unshift":"push"](()=>{d=T,n(7,d)})}function ne(T){m=T,n(4,m)}const ce=()=>n(8,b=!0);function J(T){l=T,n(1,l)}const K=()=>{x(),Ge(l)};return o.$$.update=()=>{o.$$.dirty[0]&32769&&a&&Ce(s)},[s,l,i,u,m,w,_,d,b,t,r,G,x,W,ee,a,H,F,te,ue,ne,ce,J,K]}class vn extends Ke{constructor(e){super(),Xe(this,e,kn,wn,Qe,{},null,[-1,-1])}}new vn({target:document.getElementById("app")});
