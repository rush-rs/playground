import{a4 as be,a5 as at,a6 as v,a7 as ut,S as Qe,i as Ye,d as Ze,G as g,P as z,j as c,F as q,v as f,a8 as ct,a9 as ft,U as xe,aa as dt,ab as pt,ac as mt,ad as _t,ae as bt,af as ht,A as X,Z as me,f as E,O as b,m as L,Q as A,$ as _e,u as h,t as y,r as Oe,q as O,a0 as T,o as Me,h as Z,ag as et,ah as ie,a1 as Ae}from"./vendor-82065986.js";import{D as gt,S as Fe,B as tt,I as Ee,C as nt,T as wt,a as $t,A as vt,O as ot}from"./vendor_mui-79176280.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=t(o);fetch(o.href,s)}})();const Se="#2c313a",Ce="#353a42",We="#282c34",kt="#3b3f4c",yt="#21252b",he="#abb2bf",It="#c678dd",je="#d19a66",Le="#61afef",St="#56b6c2",Ct="#e86671",rt="#5c6370",Tt="#848b98",At=be.theme({"*":{fontFamily:"JetBrains Mono NL, monospace"},"&":{color:he,backgroundColor:We,height:"100%"},".cm-scroller":{overflow:"auto"},".cm-content":{caretColor:Le},".cm-cursor, .cm-dropCursor":{borderLeftColor:Le},"&.cm-focused .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection":{backgroundColor:kt},".cm-panels":{backgroundColor:yt,color:he},".cm-panels.cm-panels-top":{borderBottom:"2px solid black"},".cm-panels.cm-panels-bottom":{borderTop:"2px solid black"},".cm-searchMatch":{backgroundColor:"#72a1ff59",outline:"1px solid #457dff"},".cm-searchMatch.cm-searchMatch-selected":{backgroundColor:"#6199ff2f"},".cm-activeLine":{backgroundColor:Se},".cm-selectionMatch":{backgroundColor:"#aafe661a"},"&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket":{backgroundColor:"#bad0f847",outline:"1px solid #515a6b"},".cm-gutters":{backgroundColor:We,color:rt,border:"none"},".cm-activeLineGutter":{backgroundColor:Se},".cm-foldPlaceholder":{backgroundColor:"transparent",border:"none",color:"#ddd"},".cm-tooltip":{border:"none",backgroundColor:Ce},".cm-tooltip .cm-tooltip-arrow:before":{borderTopColor:"transparent",borderBottomColor:"transparent"},".cm-tooltip .cm-tooltip-arrow:after":{borderTopColor:Ce,borderBottomColor:Ce},".cm-tooltip-autocomplete":{"& > ul > li[aria-selected]":{backgroundColor:Se,color:he}}},{dark:!0}),Et=at.define([{tag:v.keyword,color:It},{tag:[v.variableName,v.operator],color:he},{tag:[v.bool,v.null,v.typeName,v.number],color:je},{tag:[v.function(v.variableName),v.function(v.propertyName)],color:Le},{tag:[v.propertyName,v.standard(v.function(v.variableName))],color:St},{tag:[v.local(v.variableName),v.standard(v.variableName)],color:Ct},{tag:v.comment,color:rt},{tag:v.character,color:je},{tag:[v.bracket,v.separator],color:Tt}]),Lt=[At,ut(Et)];let S;const U=new Array(128).fill(void 0);U.push(void 0,null,!0,!1);function st(r){return U[r]}let le=U.length;function Ot(r){r<132||(U[r]=le,le=r)}function Mt(r){const e=st(r);return Ot(r),e}let Q=0,re=null;function ge(){return(re===null||re.byteLength===0)&&(re=new Uint8Array(S.memory.buffer)),re}const we=new TextEncoder("utf-8"),Bt=typeof we.encodeInto=="function"?function(r,e){return we.encodeInto(r,e)}:function(r,e){const t=we.encode(r);return e.set(t),{read:r.length,written:t.length}};function $e(r,e,t){if(t===void 0){const l=we.encode(r),a=e(l.length);return ge().subarray(a,a+l.length).set(l),Q=l.length,a}let n=r.length,o=e(n);const s=ge();let i=0;for(;i<n;i++){const l=r.charCodeAt(i);if(l>127)break;s[o+i]=l}if(i!==n){i!==0&&(r=r.slice(i)),o=t(o,n,n=i+r.length*3);const l=ge().subarray(o+i,o+n),a=Bt(r,l);i+=a.written}return Q=i,o}let se=null;function Y(){return(se===null||se.byteLength===0)&&(se=new Int32Array(S.memory.buffer)),se}const lt=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});lt.decode();function Be(r,e){return lt.decode(ge().subarray(r,r+e))}function Nt(r,e){try{const o=S.__wbindgen_add_to_stack_pointer(-16),s=$e(r,S.__wbindgen_malloc,S.__wbindgen_realloc),i=Q,l=$e(e,S.__wbindgen_malloc,S.__wbindgen_realloc),a=Q;S.run(o,s,i,l,a);var t=Y()[o/4+0],n=Y()[o/4+1];return Be(t,n)}finally{S.__wbindgen_add_to_stack_pointer(16),S.__wbindgen_free(t,n)}}function Rt(r){try{const n=S.__wbindgen_add_to_stack_pointer(-16),o=$e(r,S.__wbindgen_malloc,S.__wbindgen_realloc),s=Q;S.analyze(n,o,s);var e=Y()[n/4+0],t=Y()[n/4+1];return Be(e,t)}finally{S.__wbindgen_add_to_stack_pointer(16),S.__wbindgen_free(e,t)}}function Ft(r){le===U.length&&U.push(U.length+1);const e=le;return le=U[e],U[e]=r,e}async function Wt(r,e){if(typeof Response=="function"&&r instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(r,e)}catch(n){if(r.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",n);else throw n}const t=await r.arrayBuffer();return await WebAssembly.instantiate(t,e)}else{const t=await WebAssembly.instantiate(r,e);return t instanceof WebAssembly.Instance?{instance:t,module:r}:t}}function jt(){const r={};return r.wbg={},r.wbg.__wbg_new_abda76e883ba8a5f=function(){const e=new Error;return Ft(e)},r.wbg.__wbg_stack_658279fe44541cf6=function(e,t){const n=st(t).stack,o=$e(n,S.__wbindgen_malloc,S.__wbindgen_realloc),s=Q;Y()[e/4+1]=s,Y()[e/4+0]=o},r.wbg.__wbg_error_f851667af71bcfc6=function(e,t){try{console.error(Be(e,t))}finally{S.__wbindgen_free(e,t)}},r.wbg.__wbindgen_object_drop_ref=function(e){Mt(e)},r}function zt(r,e){return S=r.exports,it.__wbindgen_wasm_module=e,se=null,re=null,S}async function it(r){typeof r>"u"&&(r=new URL("/assets/rush_backend_bg-c5356ea3.wasm",self.location));const e=jt();(typeof r=="string"||typeof Request=="function"&&r instanceof Request||typeof URL=="function"&&r instanceof URL)&&(r=fetch(r));const{instance:t,module:n}=await Wt(await r,e);return zt(t,n)}class Dt{constructor(){it()}lint(e){let t=Rt(e);return JSON.parse(t)}run(e,t){let n=Nt(e,t);return JSON.parse(n)}}function Ht(r){let e;return{c(){e=g("div"),z(e,"class","editor svelte-9vsa7j")},m(t,n){c(t,e,n),r[2](e)},p:q,i:q,o:q,d(t){t&&f(e),r[2](null)}}}function Pt(r,e,t){let{code:n=""}=e;function o(p){s===void 0||s.state.doc.toString()===p||s.dispatch(s.state.update({changes:{from:0,to:s.state.doc.length,insert:p}}))}let s,i;const l=ct();let a,u;const m=ft(async()=>{let p=[],_=u.lint(n);for(let I of _)p.push(Object.create({from:I.span.start.charIdx,to:I.span.end.charIdx,severity:I.level,source:"rush analyzer",message:I.message}));return p});xe(()=>{u=new Dt;let p=dt.create({extensions:[pt,mt.of([_t]),bt(),m,ht(),Lt,be.updateListener.of(_=>{_.docChanged&&(a&&clearTimeout(a),a=setTimeout(()=>{l("update",n)},500))}),be.updateListener.of(_=>{_.docChanged&&t(1,n=s.state.doc.toString())})]});s=new be({state:p,parent:i})});function w(p){X[p?"unshift":"push"](()=>{i=p,t(0,i)})}return r.$$set=p=>{"code"in p&&t(1,n=p.code)},r.$$.update=()=>{r.$$.dirty&2&&o(n)},[i,n,w]}class Ut extends Qe{constructor(e){super(),Ye(this,e,Pt,Ht,Ze,{code:1})}}function Vt(){return new Worker("/assets/rush.worker-591d0810.js")}const qt=`// Welcome to the rush programming language.
// This playground is part of the rush research project.
// This website uses a VM (https://github.com/rush-rs/rush/crates/rush-interpreter-vm) to run rush code.
// If there are questions regarding this playground, use the ? button in the top right corner.

/// Functions ///
// In rush, a function can be declared using the \`fn\` keyword.
// Every function can take an arbitrary amount of parameters and optionally returns a value.
// The function below takes two parameters: a int and a float.
// It adds the parameters togeher and returns the result as an integer
fn add(bar: int, baz: float) -> int {
    bar + baz as int
    // Often, you do not need an explicit \`return\` statement since the last expression in a block returns its value.
    // return 0
}

// Each rush program requires a \`main\` function.
// It cannot have any parameters or return any value.
fn main() {
    /// Variables & Types ///
    // All variables in rush have a type in order to make developing rush programs easier and safer.
    // You can declare variables in rush using the \`let\` keyword.
    // Unlike in some other languages, variables always need an initializer, meaning there cannot be uninitialized variables in rush.
    let mut int = 42;   // i64 integers
    let float = 3.1415; // IEEE floating point numbers
    let float2 = 1f;    // Alternative float syntax
    let bool = true;    // \`true\` and \`false\`
    let char = 'a';     // Any ASCII character
    let int_ptr = &int; // Saves the memory address of \`int\`
                        // Only the types \`()\` and \`!\` cannot be referenced

    *int_ptr += 1;      // when used in assignments, pointers need to be dereferenced

    // Explicit type annotations are redundant but can be used like this.
    let some_value: float = 3.1;

    // After variables have been declared, you can re-assign a new value to them.
    // However, these variables need to me mutable. Therefore, annotate these variables with \`mut\`.
    let mut zero = 0;
    zero = 0;
    zero += 1; // All infix operators (except \`||\` and \`&&\`) can be used in assignments as well

    // As you can see below, types like int and float can be added together, just like you would expect.
    // However, floats, bools ,and chars must be converted to ints before the can be added to another int.
    // Conversions like this are called \`casts\` and exist to ensure maximum type safety.
    let one_hundred_fourty_nine = int
        + float as int
        + float2 as int
        + bool as int
        + char as int
        + some_value as int
        + zero;

    /// Infix Operations ///
    // Rush supports all commonly-seen infix operators for basic arithmetic and logic.

    // Addition
    1 + 2;
    2.0 + 1.0;
    'a' + 'b';

    // Subtraction
    3 - 2;
    1.2 - 0.1;
    'a' - 'b';

    // Multiplication
    2 * 3;
    0.5 * 0.5;

    // Division
    4 / 2;
    12.89 / 6.0;

    // Integer-only Operators
    5 % 2;
    2 ** 3; // rush also supports the \`pow\` operator for integers
    2 << 1;
    4 >> 1;
    5 | 3;
    5 & 3;
    3 ^ 5;

    // Logical infix operators behave just like how the would in most other languages.
    true || false; // If the lhs is \`true\`, the rhs is omitted and \`true\` is returned.
    false && true; // If the lhs is \`false\`, the rhs is omitted and \`false\` is returned.

    // Comparison Operators
    1 < 2;
    1.1 < 1.9;
    'a' < 'b';
    1 <= 1;
    1.1 <= 1.1;
    'a' <= 'a'; // Compares the ASCII values of the two chars

    2 > 1;
    1.9 > 1.8;
    'c' > 'a';
    2 >= 2;
    1.9 >= 1.9;
    'a' >= 'a';

    5 == 4;
    1.9 == 3.14;
    'a' == 'b';

    3 != 2;
    1.89 != 1.9;
    'a' != 'z';

    /// Control Flow ///
    // In rush, ther is an \`if\` expression for control flow.
    // Note that this is an expression, therefore its result is a value just like any other.
    let true_ = true;
    let false_ = false;

    // \`else\` blocks are optional if the result of the \`if\` expression is not used as a value.
    if false_ {
        // do nothing
    }

    // The result of \`if\` expressions is a normal value and can therefore be used in assignments.
    // For type safety, the types of the \`if\` and \`else\` blocks must be identical.
    let ten = if true_ {
        10
    } else {
        0 // this will never happen
    };

    /// Loops ///
    // The rush programming language implements three different forms of loop.

    // Basic Loop
    let mut count = 0;
    loop {
        // Do something, for example increment a counter
        count += 1;

        if true_ {
            break; // \`break\` terminates the most inner loop
        }
    }

    // While Loop
    // Uses any float expression as its condition.
    // Before each iteration, the condition is validated to be \`true\`.
    // If the condition is \`false\`, the next iteration is omitted and the loop terminates.
    while count < 20 {
        count += 1;
    }

    // For Loop
    // Just like the \`while\` loop, the \`for\` loop has a condition expression in the middle.
    // In the beginning, the initialization expression is executed once to initialize the induction variable.
    // In this case, the induction variable is \`i\` with a initial value of 0.
    // Before each iteration, the condition is checked, meaning that \`i\` is should be less than 30.
    // After each iteration, the update expression is executed.
    // It is often used to increment or decrement the induction variable.
    for i = 0; i < 30; i += 1 {
        if false_ {
            // do something
        }
    }

    // Functions can be called by using parentheses after its name.
    // The parantheses will than contain the function call arguments in the order they were declared as parameters.
    let added = add(2, 3.0);

    // Expected exit-code: 184
    // The \`exit\` function can be used to terminate a program prematurely.
    exit(one_hundred_fourty_nine + ten + count + added)
}
`,Jt=`fn main() {
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

`,Gt=`fn main() {
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
`,Kt=`let ITERATIONS = 4000000;

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
`,Xt=`fn main() {
  let mut e = 1f;
  let mut f = 1f;

  for i = 2; i < 100_000; i += 1 {
    e += 1f / f;
    f *= i as float;
  }

  let result = (e * 1000000000000000f) as int;
  exit(result)
}
`,Qt=`fn main() {
    let mut res = 1f;

    for i = 2; i < 30000; i += 1 {
        res += (1f / (i ** 3) as float);
    }

    let FAC = 10000000f;
    exit((res * FAC) as int)
}
`;function ze(r,e,t){const n=r.slice();return n[27]=e[t],n}function De(r,e,t){const n=r.slice();return n[30]=e[t],n}function Yt(r){let e;return{c(){e=T("Using The Playground")},m(t,n){c(t,e,n)},d(t){t&&f(e)}}}function Zt(r){let e,t,n,o,s,i,l,a,u,m,w;return{c(){e=g("p"),e.innerHTML=`The <a class="highlight svelte-gu7ukm" href="https://github.com/rush-rs/rush-playground" target="_blank" rel="noreferrer">rush playground</a>
                allows everyone to use the
                <a class="highlight svelte-gu7ukm" href="https://github.com/rush-rs/rush" target="_blank" rel="noreferrer">rush</a> programming language regardless of whether they have installed rush or not.`,t=b(),n=g("p"),n.innerHTML=`All changes made to the current script are saved locally, meaning on your device.
                Therefore, you can reload the page while working without hesitation. If you do want
                to erase your current changes, use the <code class="highlight svelte-gu7ukm">load</code> button in
                the top right corner.`,o=b(),s=g("p"),s.innerHTML=`This button can also be used to switch to other code templates. For this, the
                desired template is to be selected using the drop down menu. After the selection has
                been made, the <code class="highlight svelte-gu7ukm">load</code> button is to be pressed.`,i=b(),l=g("p"),l.innerHTML=`To run the current code using the <a class="highlight svelte-gu7ukm" href="https://github.com/rush-rs/rush/tree/main/crates/rush-interpreter-vm" target="_blank" rel="noreferrer">VM</a>, use the <i class="material-icons icon svelte-gu7ukm">play_arrow</i> button in the top right
                corder. If the script does not stop when expected, it can be terminated using the
                <i class="material-icons icon svelte-gu7ukm">cancel</i> button.`,a=b(),u=g("h4"),u.textContent="Keybindings",m=b(),w=g("ul"),w.innerHTML=`<li><code class="highlight svelte-gu7ukm">CTRL + S</code>: force save the current code</li> 
                <li><code class="highlight svelte-gu7ukm">F8</code>: run the current code</li> 
                <li><code class="highlight svelte-gu7ukm">F9</code>: terminate current execution</li>`,z(u,"class","svelte-gu7ukm"),z(w,"class","svelte-gu7ukm")},m(p,_){c(p,e,_),c(p,t,_),c(p,n,_),c(p,o,_),c(p,s,_),c(p,i,_),c(p,l,_),c(p,a,_),c(p,u,_),c(p,m,_),c(p,w,_)},p:q,d(p){p&&f(e),p&&f(t),p&&f(n),p&&f(o),p&&f(s),p&&f(i),p&&f(l),p&&f(a),p&&f(u),p&&f(m),p&&f(w)}}}function xt(r){let e;return{c(){e=T("Close")},m(t,n){c(t,e,n)},d(t){t&&f(e)}}}function en(r){let e,t;return e=new nt({props:{$$slots:{default:[xt]},$$scope:{ctx:r}}}),{c(){E(e.$$.fragment)},m(n,o){L(e,n,o),t=!0},p(n,o){const s={};o[1]&4&&(s.$$scope={dirty:o,ctx:n}),e.$set(s)},i(n){t||(h(e.$$.fragment,n),t=!0)},o(n){y(e.$$.fragment,n),t=!1},d(n){O(e,n)}}}function tn(r){let e,t;return e=new tt({props:{$$slots:{default:[en]},$$scope:{ctx:r}}}),e.$on("click",r[16]),{c(){E(e.$$.fragment)},m(n,o){L(e,n,o),t=!0},p(n,o){const s={};o[1]&4&&(s.$$scope={dirty:o,ctx:n}),e.$set(s)},i(n){t||(h(e.$$.fragment,n),t=!0)},o(n){y(e.$$.fragment,n),t=!1},d(n){O(e,n)}}}function nn(r){let e,t,n,o,s,i;return e=new wt({props:{id:"help-title",$$slots:{default:[Yt]},$$scope:{ctx:r}}}),n=new $t({props:{id:"help-content",$$slots:{default:[Zt]},$$scope:{ctx:r}}}),s=new vt({props:{$$slots:{default:[tn]},$$scope:{ctx:r}}}),{c(){E(e.$$.fragment),t=b(),E(n.$$.fragment),o=b(),E(s.$$.fragment)},m(l,a){L(e,l,a),c(l,t,a),L(n,l,a),c(l,o,a),L(s,l,a),i=!0},p(l,a){const u={};a[1]&4&&(u.$$scope={dirty:a,ctx:l}),e.$set(u);const m={};a[1]&4&&(m.$$scope={dirty:a,ctx:l}),n.$set(m);const w={};a[0]&256|a[1]&4&&(w.$$scope={dirty:a,ctx:l}),s.$set(w)},i(l){i||(h(e.$$.fragment,l),h(n.$$.fragment,l),h(s.$$.fragment,l),i=!0)},o(l){y(e.$$.fragment,l),y(n.$$.fragment,l),y(s.$$.fragment,l),i=!1},d(l){O(e,l),l&&f(t),O(n,l),l&&f(o),O(s,l)}}}function on(r){let e=r[30]+"",t;return{c(){t=T(e)},m(n,o){c(n,t,o)},p:q,d(n){n&&f(t)}}}function He(r){let e,t;return e=new ot({props:{value:r[30],$$slots:{default:[on]},$$scope:{ctx:r}}}),{c(){E(e.$$.fragment)},m(n,o){L(e,n,o),t=!0},p(n,o){const s={};o[1]&4&&(s.$$scope={dirty:o,ctx:n}),e.$set(s)},i(n){t||(h(e.$$.fragment,n),t=!0)},o(n){y(e.$$.fragment,n),t=!1},d(n){O(e,n)}}}function rn(r){let e,t,n=Object.keys(r[9]),o=[];for(let i=0;i<n.length;i+=1)o[i]=He(De(r,n,i));const s=i=>y(o[i],1,1,()=>{o[i]=null});return{c(){for(let i=0;i<o.length;i+=1)o[i].c();e=Z()},m(i,l){for(let a=0;a<o.length;a+=1)o[a].m(i,l);c(i,e,l),t=!0},p(i,l){if(l[0]&512){n=Object.keys(i[9]);let a;for(a=0;a<n.length;a+=1){const u=De(i,n,a);o[a]?(o[a].p(u,l),h(o[a],1)):(o[a]=He(u),o[a].c(),h(o[a],1),o[a].m(e.parentNode,e))}for(Me(),a=n.length;a<o.length;a+=1)s(a);Oe()}},i(i){if(!t){for(let l=0;l<n.length;l+=1)h(o[l]);t=!0}},o(i){o=o.filter(Boolean);for(let l=0;l<o.length;l+=1)y(o[l]);t=!1},d(i){et(o,i),i&&f(e)}}}function sn(r){let e;return{c(){e=T("Load")},m(t,n){c(t,e,n)},d(t){t&&f(e)}}}function ln(r){let e,t;return e=new nt({props:{$$slots:{default:[sn]},$$scope:{ctx:r}}}),{c(){E(e.$$.fragment)},m(n,o){L(e,n,o),t=!0},p(n,o){const s={};o[1]&4&&(s.$$scope={dirty:o,ctx:n}),e.$set(s)},i(n){t||(h(e.$$.fragment,n),t=!0)},o(n){y(e.$$.fragment,n),t=!1},d(n){O(e,n)}}}function an(r){let e;return{c(){e=T("help")},m(t,n){c(t,e,n)},d(t){t&&f(e)}}}function un(r){let e=r[10][r[27]]+"",t;return{c(){t=T(e)},m(n,o){c(n,t,o)},p:q,d(n){n&&f(t)}}}function Pe(r){let e,t;return e=new ot({props:{value:r[27],$$slots:{default:[un]},$$scope:{ctx:r}}}),{c(){E(e.$$.fragment)},m(n,o){L(e,n,o),t=!0},p(n,o){const s={};o[1]&4&&(s.$$scope={dirty:o,ctx:n}),e.$set(s)},i(n){t||(h(e.$$.fragment,n),t=!0)},o(n){y(e.$$.fragment,n),t=!1},d(n){O(e,n)}}}function cn(r){let e,t,n=Object.keys(r[10]),o=[];for(let i=0;i<n.length;i+=1)o[i]=Pe(ze(r,n,i));const s=i=>y(o[i],1,1,()=>{o[i]=null});return{c(){for(let i=0;i<o.length;i+=1)o[i].c();e=Z()},m(i,l){for(let a=0;a<o.length;a+=1)o[a].m(i,l);c(i,e,l),t=!0},p(i,l){if(l[0]&1024){n=Object.keys(i[10]);let a;for(a=0;a<n.length;a+=1){const u=ze(i,n,a);o[a]?(o[a].p(u,l),h(o[a],1)):(o[a]=Pe(u),o[a].c(),h(o[a],1),o[a].m(e.parentNode,e))}for(Me(),a=n.length;a<o.length;a+=1)s(a);Oe()}},i(i){if(!t){for(let l=0;l<n.length;l+=1)h(o[l]);t=!0}},o(i){o=o.filter(Boolean);for(let l=0;l<o.length;l+=1)y(o[l]);t=!1},d(i){et(o,i),i&&f(e)}}}function Ue(r){let e,t,n,o;return e=new Ee({props:{class:"material-icons",disabled:r[5],$$slots:{default:[fn]},$$scope:{ctx:r}}}),e.$on("click",r[11]),n=new Ee({props:{class:"material-icons",disabled:!r[5],$$slots:{default:[dn]},$$scope:{ctx:r}}}),n.$on("click",r[13]),{c(){E(e.$$.fragment),t=b(),E(n.$$.fragment)},m(s,i){L(e,s,i),c(s,t,i),L(n,s,i),o=!0},p(s,i){const l={};i[0]&32&&(l.disabled=s[5]),i[1]&4&&(l.$$scope={dirty:i,ctx:s}),e.$set(l);const a={};i[0]&32&&(a.disabled=!s[5]),i[1]&4&&(a.$$scope={dirty:i,ctx:s}),n.$set(a)},i(s){o||(h(e.$$.fragment,s),h(n.$$.fragment,s),o=!0)},o(s){y(e.$$.fragment,s),y(n.$$.fragment,s),o=!1},d(s){O(e,s),s&&f(t),O(n,s)}}}function fn(r){let e;return{c(){e=T("play_arrow")},m(t,n){c(t,e,n)},d(t){t&&f(e)}}}function dn(r){let e;return{c(){e=T("cancel")},m(t,n){c(t,e,n)},d(t){t&&f(e)}}}function pn(r){let e;return{c(){e=T("Press the play button in order to start program execution")},m(t,n){c(t,e,n)},p:q,d(t){t&&f(e)}}}function mn(r){let e,t,n,o=r[2].diagnostics&&Ve(r),s=r[2].error&&qe(r),i=r[2].output!==void 0&&Je(r);return{c(){o&&o.c(),e=b(),s&&s.c(),t=b(),i&&i.c(),n=Z()},m(l,a){o&&o.m(l,a),c(l,e,a),s&&s.m(l,a),c(l,t,a),i&&i.m(l,a),c(l,n,a)},p(l,a){l[2].diagnostics?o?o.p(l,a):(o=Ve(l),o.c(),o.m(e.parentNode,e)):o&&(o.d(1),o=null),l[2].error?s?s.p(l,a):(s=qe(l),s.c(),s.m(t.parentNode,t)):s&&(s.d(1),s=null),l[2].output!==void 0?i?i.p(l,a):(i=Je(l),i.c(),i.m(n.parentNode,n)):i&&(i.d(1),i=null)},d(l){o&&o.d(l),l&&f(e),s&&s.d(l),l&&f(t),i&&i.d(l),l&&f(n)}}}function _n(r){let e;function t(s,i){return s[6].runtimeError?wn:s[6].code!==null?gn:hn}let n=t(r),o=n(r);return{c(){o.c(),e=Z()},m(s,i){o.m(s,i),c(s,e,i)},p(s,i){n===(n=t(s))&&o?o.p(s,i):(o.d(1),o=n(s),o&&(o.c(),o.m(e.parentNode,e)))},d(s){o.d(s),s&&f(e)}}}function bn(r){let e;return{c(){e=T("Backend is running...")},m(t,n){c(t,e,n)},p:q,d(t){t&&f(e)}}}function Ve(r){let e,t=r[2].diagnostics+"",n,o,s,i,l,a;return{c(){e=new ie(!1),n=b(),o=g("br"),s=b(),i=g("br"),l=b(),a=g("br"),e.a=n},m(u,m){e.m(t,u,m),c(u,n,m),c(u,o,m),c(u,s,m),c(u,i,m),c(u,l,m),c(u,a,m)},p(u,m){m[0]&4&&t!==(t=u[2].diagnostics+"")&&e.p(t)},d(u){u&&e.d(),u&&f(n),u&&f(o),u&&f(s),u&&f(i),u&&f(l),u&&f(a)}}}function qe(r){let e,t,n=r[2].error+"",o,s;return{c(){e=T(`Compilation failed:
                        `),t=new ie(!1),o=b(),s=g("br"),t.a=o},m(i,l){c(i,e,l),t.m(n,i,l),c(i,o,l),c(i,s,l)},p(i,l){l[0]&4&&n!==(n=i[2].error+"")&&t.p(n)},d(i){i&&f(e),i&&t.d(),i&&f(o),i&&f(s)}}}function Je(r){let e,t=r[2].output+"",n;return{c(){e=new ie(!1),n=Z(),e.a=n},m(o,s){e.m(t,o,s),c(o,n,s)},p(o,s){s[0]&4&&t!==(t=o[2].output+"")&&e.p(t)},d(o){o&&f(n),o&&e.d()}}}function hn(r){let e,t,n,o,s=r[6].diagnostics+"",i;return{c(){e=T(`Compilation failed:
                        `),t=g("br"),n=b(),o=new ie(!1),i=Z(),o.a=i},m(l,a){c(l,e,a),c(l,t,a),c(l,n,a),o.m(s,l,a),c(l,i,a)},p(l,a){a[0]&64&&s!==(s=l[6].diagnostics+"")&&o.p(s)},d(l){l&&f(e),l&&f(t),l&&f(n),l&&f(i),l&&o.d()}}}function gn(r){let e,t=r[6].code+"",n,o=r[6].diagnostics!==""&&Ge(r);return{c(){o&&o.c(),e=T(`

                        Program stopped with code `),n=T(t)},m(s,i){o&&o.m(s,i),c(s,e,i),c(s,n,i)},p(s,i){s[6].diagnostics!==""?o?o.p(s,i):(o=Ge(s),o.c(),o.m(e.parentNode,e)):o&&(o.d(1),o=null),i[0]&64&&t!==(t=s[6].code+"")&&Ae(n,t)},d(s){o&&o.d(s),s&&f(e),s&&f(n)}}}function wn(r){let e,t,n,o=r[6].runtimeError.kind+"",s,i,l=r[6].runtimeError.message+"",a;return{c(){e=T(`Interpreter crashed:
                        `),t=g("br"),n=b(),s=T(o),i=T(": "),a=T(l)},m(u,m){c(u,e,m),c(u,t,m),c(u,n,m),c(u,s,m),c(u,i,m),c(u,a,m)},p(u,m){m[0]&64&&o!==(o=u[6].runtimeError.kind+"")&&Ae(s,o),m[0]&64&&l!==(l=u[6].runtimeError.message+"")&&Ae(a,l)},d(u){u&&f(e),u&&f(t),u&&f(n),u&&f(s),u&&f(i),u&&f(a)}}}function Ge(r){let e,t=r[6].diagnostics+"",n,o,s,i;return{c(){e=new ie(!1),n=b(),o=g("br"),s=b(),i=g("br"),e.a=n},m(l,a){e.m(t,l,a),c(l,n,a),c(l,o,a),c(l,s,a),c(l,i,a)},p(l,a){a[0]&64&&t!==(t=l[6].diagnostics+"")&&e.p(t)},d(l){l&&e.d(),l&&f(n),l&&f(o),l&&f(s),l&&f(i)}}}function $n(r){let e,t,n,o,s,i,l,a,u,m,w,p,_,I,M,J,x,F,ae,D,ee,P,W,te,ue,ne=["vmInterpreter","tree"].includes(r[1]),ce,G,K;function k(d){r[17](d)}let j={"aria-labelledby":"help-title","aria-describedby":"help-content",$$slots:{default:[nn]},$$scope:{ctx:r}};r[8]!==void 0&&(j.open=r[8]),t=new gt({props:j}),X.push(()=>me(t,"open",k,r[8]));function B(d){r[18](d)}let R={};r[0]!==void 0&&(R.code=r[0]),l=new Ut({props:R}),X.push(()=>me(l,"code",B,r[0])),l.$on("update",r[12]);function V(d){r[20](d)}let oe={label:"Select Template",$$slots:{default:[rn]},$$scope:{ctx:r}};r[4]!==void 0&&(oe.value=r[4]),M=new Fe({props:oe}),X.push(()=>me(M,"value",V,r[4])),F=new tt({props:{variant:"raised",disabled:(r[4]===r[3]||r[5])&&r[9][r[4]]===r[0],$$slots:{default:[ln]},$$scope:{ctx:r}}}),F.$on("click",r[14]),D=new Ee({props:{size:"button",class:"material-icons",$$slots:{default:[an]},$$scope:{ctx:r}}}),D.$on("click",r[21]);function fe(d){r[22](d)}let N={label:"Select Backend",$$slots:{default:[cn]},$$scope:{ctx:r}};r[1]!==void 0&&(N.value=r[1]),W=new Fe({props:N}),X.push(()=>me(W,"value",fe,r[1])),W.$on("SMUISelect:change",r[23]);let C=ne&&Ue(r);function de(d,$){return d[5]?bn:d[6]?_n:d[2]?mn:pn}let pe=de(r),H=pe(r);return{c(){e=g("main"),E(t.$$.fragment),o=b(),s=g("div"),i=g("div"),E(l.$$.fragment),u=b(),m=g("div"),w=b(),p=g("div"),_=g("div"),I=g("div"),E(M.$$.fragment),x=b(),E(F.$$.fragment),ae=b(),E(D.$$.fragment),ee=b(),P=g("div"),E(W.$$.fragment),ue=b(),C&&C.c(),ce=b(),G=g("div"),H.c(),z(i,"class","main__editor svelte-gu7ukm"),z(m,"class","main__resizer svelte-gu7ukm"),z(I,"class","main__output__nav__top svelte-gu7ukm"),z(P,"class","main__output__nav__bottom svelte-gu7ukm"),z(_,"class","main__output__nav svelte-gu7ukm"),z(G,"class","main__output__terminal svelte-gu7ukm"),z(p,"class","main__output svelte-gu7ukm"),z(s,"class","main svelte-gu7ukm")},m(d,$){c(d,e,$),L(t,e,null),A(e,o),A(e,s),A(s,i),L(l,i,null),A(s,u),A(s,m),r[19](m),A(s,w),A(s,p),A(p,_),A(_,I),L(M,I,null),A(I,x),L(F,I,null),A(I,ae),L(D,I,null),A(_,ee),A(_,P),L(W,P,null),A(P,ue),C&&C.m(P,null),A(p,ce),A(p,G),H.m(G,null),K=!0},p(d,$){const ve={};$[0]&256|$[1]&4&&(ve.$$scope={dirty:$,ctx:d}),!n&&$[0]&256&&(n=!0,ve.open=d[8],_e(()=>n=!1)),t.$set(ve);const Ne={};!a&&$[0]&1&&(a=!0,Ne.code=d[0],_e(()=>a=!1)),l.$set(Ne);const ke={};$[1]&4&&(ke.$$scope={dirty:$,ctx:d}),!J&&$[0]&16&&(J=!0,ke.value=d[4],_e(()=>J=!1)),M.$set(ke);const ye={};$[0]&57&&(ye.disabled=(d[4]===d[3]||d[5])&&d[9][d[4]]===d[0]),$[1]&4&&(ye.$$scope={dirty:$,ctx:d}),F.$set(ye);const Re={};$[1]&4&&(Re.$$scope={dirty:$,ctx:d}),D.$set(Re);const Ie={};$[1]&4&&(Ie.$$scope={dirty:$,ctx:d}),!te&&$[0]&2&&(te=!0,Ie.value=d[1],_e(()=>te=!1)),W.$set(Ie),$[0]&2&&(ne=["vmInterpreter","tree"].includes(d[1])),ne?C?(C.p(d,$),$[0]&2&&h(C,1)):(C=Ue(d),C.c(),h(C,1),C.m(P,null)):C&&(Me(),y(C,1,1,()=>{C=null}),Oe()),pe===(pe=de(d))&&H?H.p(d,$):(H.d(1),H=pe(d),H&&(H.c(),H.m(G,null)))},i(d){K||(h(t.$$.fragment,d),h(l.$$.fragment,d),h(M.$$.fragment,d),h(F.$$.fragment,d),h(D.$$.fragment,d),h(W.$$.fragment,d),h(C),K=!0)},o(d){y(t.$$.fragment,d),y(l.$$.fragment,d),y(M.$$.fragment,d),y(F.$$.fragment,d),y(D.$$.fragment,d),y(W.$$.fragment,d),y(C),K=!1},d(d){d&&f(e),O(t),O(l),r[19](null),O(M),O(F),O(D),O(W),C&&C.d(),H.d()}}}function Te(r){window.localStorage.setItem("rush-playground-code",r)}function Ke(r){window.localStorage.setItem("rush-playground-backend",r)}function Xe(r){window.localStorage.setItem("rush-playground-script",r)}function vn(r,e,t){const n={Welcome:qt,Fibonacci:Jt,Pow:Gt,ApproxPi:Kt,ApproxE:Xt,ApproxApery:Qt},o={vmInterpreter:"VM interpreter",tree:"tree interpreter",vmCompiler:"VM compiler",wasm:"WASM",riscv:"RISC-V",x64:"x86_64",transpiler:"C transpiler"};let s=Object.keys(o)[0],i,l="",a=!1,u="",m=Object.keys(n)[0],w=!1,p,_=null,I=null,M=!1;function J(){t(5,w=!0),_=ae(l,s,!["vmInterpreter","tree"].includes(s))}function x(){t(5,w=!0),a&&(t(5,w=!1),["vmInterpreter","tree"].includes(s)||J())}function F(){t(5,w=!1),_==null||_.terminate(),t(6,p=void 0)}function ae(k,j,B){let R=new Vt;return R.onmessage=function(V){V.data[0]==="ready"&&(B?R.postMessage(["compile",k,j]):R.postMessage(["run",k,j])),V.data[0]==="finished"&&(t(5,w=!1),R.terminate(),B?(t(6,p=void 0),t(2,i=JSON.parse(V.data[1]))):(t(2,i=void 0),t(6,p=JSON.parse(V.data[1]))))},R}async function D(){t(3,u=m);let k=window.localStorage.getItem("rush-playground-script");k===null?Xe(m):(t(3,u=k),t(4,m=k));let j=window.localStorage.getItem("rush-playground-backend");j===null?Ke(s):t(1,s=j);let B=window.localStorage.getItem("rush-playground-code");return B===null?(t(0,l=n[m]),Te(l),l):B}function ee(){t(0,l=n[m]),u!==m&&(Xe(m),t(3,u=m))}xe(async()=>{t(0,l=await D()),t(15,a=!0);let k=0,j=0;const B=I.previousElementSibling,R=I.nextElementSibling;document.addEventListener("keydown",N=>{N.ctrlKey&&N.key==="s"?(N.preventDefault(),Te(l)):N.key==="F8"&&!w?J():N.key==="F9"&&w?F():N.key==="F10"&&(N.preventDefault(),w||ee())});const V=function(N){k=N.clientX,j=B.getBoundingClientRect().width,document.addEventListener("mousemove",oe),document.addEventListener("mouseup",fe)},oe=function(N){const C=N.clientX-k,de=(j+C)*100/I.parentNode.getBoundingClientRect().width;B.style.width=`${de}%`,B.style.userSelect="none",B.style.pointerEvents="none",R.style.userSelect="none",R.style.pointerEvents="none"},fe=function(){B.style.removeProperty("user-select"),B.style.removeProperty("pointer-events"),R.style.removeProperty("user-select"),R.style.removeProperty("pointer-events"),document.removeEventListener("mousemove",oe),document.removeEventListener("mouseup",fe)};I.addEventListener("mousedown",V)});const P=()=>t(8,M=!1);function W(k){M=k,t(8,M)}function te(k){l=k,t(0,l)}function ue(k){X[k?"unshift":"push"](()=>{I=k,t(7,I)})}function ne(k){m=k,t(4,m)}const ce=()=>t(8,M=!0);function G(k){s=k,t(1,s)}const K=()=>{x(),Ke(s)};return r.$$.update=()=>{r.$$.dirty[0]&32769&&a&&Te(l)},[l,s,i,u,m,w,p,I,M,n,o,J,x,F,ee,a,P,W,te,ue,ne,ce,G,K]}class kn extends Qe{constructor(e){super(),Ye(this,e,vn,$n,Ze,{},null,[-1,-1])}}new kn({target:document.getElementById("app")});
