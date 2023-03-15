import{a4 as se,a5 as qe,a6 as _,a7 as Ve,S as Ne,i as Fe,d as Re,G as k,P as F,j as d,F as P,v as p,a8 as Je,a9 as Ge,U as We,aa as Ke,ab as Xe,ac as Qe,ad as Ye,ae as Ze,af as et,A as K,Z as he,f as E,O as S,m as L,Q as I,$ as _e,u as C,t as T,q as O,a0 as A,h as ze,o as tt,r as nt,ag as ot,a1 as ye}from"./vendor-4b9f9204.js";import{D as rt,I as ge,S as st,B as De,C as je,T as at,a as it,A as lt,O as ct}from"./vendor_mui-6467238f.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const be="#2c313a",we="#353a42",Ee="#282c34",ut="#3b3f4c",ft="#21252b",ae="#abb2bf",dt="#c678dd",Le="#d19a66",ve="#61afef",pt="#56b6c2",mt="#e86671",He="#5c6370",ht="#848b98",_t=se.theme({"*":{fontFamily:"JetBrains Mono NL, monospace"},"&":{color:ae,backgroundColor:Ee,height:"100%"},".cm-scroller":{overflow:"auto"},".cm-content":{caretColor:ve},".cm-cursor, .cm-dropCursor":{borderLeftColor:ve},"&.cm-focused .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection":{backgroundColor:ut},".cm-panels":{backgroundColor:ft,color:ae},".cm-panels.cm-panels-top":{borderBottom:"2px solid black"},".cm-panels.cm-panels-bottom":{borderTop:"2px solid black"},".cm-searchMatch":{backgroundColor:"#72a1ff59",outline:"1px solid #457dff"},".cm-searchMatch.cm-searchMatch-selected":{backgroundColor:"#6199ff2f"},".cm-activeLine":{backgroundColor:be},".cm-selectionMatch":{backgroundColor:"#aafe661a"},"&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket":{backgroundColor:"#bad0f847",outline:"1px solid #515a6b"},".cm-gutters":{backgroundColor:Ee,color:He,border:"none"},".cm-activeLineGutter":{backgroundColor:be},".cm-foldPlaceholder":{backgroundColor:"transparent",border:"none",color:"#ddd"},".cm-tooltip":{border:"none",backgroundColor:we},".cm-tooltip .cm-tooltip-arrow:before":{borderTopColor:"transparent",borderBottomColor:"transparent"},".cm-tooltip .cm-tooltip-arrow:after":{borderTopColor:we,borderBottomColor:we},".cm-tooltip-autocomplete":{"& > ul > li[aria-selected]":{backgroundColor:be,color:ae}}},{dark:!0}),gt=qe.define([{tag:_.keyword,color:dt},{tag:[_.variableName,_.operator],color:ae},{tag:[_.bool,_.null,_.typeName,_.number],color:Le},{tag:[_.function(_.variableName),_.function(_.propertyName)],color:ve},{tag:[_.propertyName,_.standard(_.function(_.variableName))],color:pt},{tag:[_.local(_.variableName),_.standard(_.variableName)],color:mt},{tag:_.comment,color:He},{tag:_.character,color:Le},{tag:[_.bracket,_.separator],color:ht}]),bt=[_t,Ve(gt)];let y;const H=new Array(128).fill(void 0);H.push(void 0,null,!0,!1);function Pe(n){return H[n]}let X=H.length;function wt(n){n<132||(H[n]=X,X=n)}function $t(n){const e=Pe(n);return wt(n),e}let Q=0,J=null;function ie(){return(J===null||J.byteLength===0)&&(J=new Uint8Array(y.memory.buffer)),J}const le=new TextEncoder("utf-8"),yt=typeof le.encodeInto=="function"?function(n,e){return le.encodeInto(n,e)}:function(n,e){const t=le.encode(n);return e.set(t),{read:n.length,written:t.length}};function ke(n,e,t){if(t===void 0){const a=le.encode(n),l=e(a.length);return ie().subarray(l,l+a.length).set(a),Q=a.length,l}let o=n.length,r=e(o);const s=ie();let i=0;for(;i<o;i++){const a=n.charCodeAt(i);if(a>127)break;s[r+i]=a}if(i!==o){i!==0&&(n=n.slice(i)),r=t(r,o,o=i+n.length*3);const a=ie().subarray(r+i,r+o),l=yt(n,a);i+=l.written}return Q=i,r}let G=null;function U(){return(G===null||G.byteLength===0)&&(G=new Int32Array(y.memory.buffer)),G}const xe=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});xe.decode();function Ce(n,e){return xe.decode(ie().subarray(n,n+e))}function vt(n){try{const o=y.__wbindgen_add_to_stack_pointer(-16),r=ke(n,y.__wbindgen_malloc,y.__wbindgen_realloc),s=Q;y.analyze(o,r,s);var e=U()[o/4+0],t=U()[o/4+1];return Ce(e,t)}finally{y.__wbindgen_add_to_stack_pointer(16),y.__wbindgen_free(e,t)}}function kt(n){try{const o=y.__wbindgen_add_to_stack_pointer(-16),r=ke(n,y.__wbindgen_malloc,y.__wbindgen_realloc),s=Q;y.run(o,r,s);var e=U()[o/4+0],t=U()[o/4+1];return Ce(e,t)}finally{y.__wbindgen_add_to_stack_pointer(16),y.__wbindgen_free(e,t)}}function Ct(n){X===H.length&&H.push(H.length+1);const e=X;return X=H[e],H[e]=n,e}async function It(n,e){if(typeof Response=="function"&&n instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(n,e)}catch(o){if(n.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",o);else throw o}const t=await n.arrayBuffer();return await WebAssembly.instantiate(t,e)}else{const t=await WebAssembly.instantiate(n,e);return t instanceof WebAssembly.Instance?{instance:t,module:n}:t}}function St(){const n={};return n.wbg={},n.wbg.__wbg_new_abda76e883ba8a5f=function(){const e=new Error;return Ct(e)},n.wbg.__wbg_stack_658279fe44541cf6=function(e,t){const o=Pe(t).stack,r=ke(o,y.__wbindgen_malloc,y.__wbindgen_realloc),s=Q;U()[e/4+1]=s,U()[e/4+0]=r},n.wbg.__wbg_error_f851667af71bcfc6=function(e,t){try{console.error(Ce(e,t))}finally{y.__wbindgen_free(e,t)}},n.wbg.__wbindgen_object_drop_ref=function(e){$t(e)},n}function Tt(n,e){return y=n.exports,Ue.__wbindgen_wasm_module=e,G=null,J=null,y}async function Ue(n){typeof n>"u"&&(n=new URL("/assets/rush_backend_bg-ed319a42.wasm",self.location));const e=St();(typeof n=="string"||typeof Request=="function"&&n instanceof Request||typeof URL=="function"&&n instanceof URL)&&(n=fetch(n));const{instance:t,module:o}=await It(await n,e);return Tt(t,o)}class At{constructor(){Ue()}lint(e){let t=vt(e);return JSON.parse(t)}run(e){let t=kt(e);return JSON.parse(t)}}function Et(n){let e;return{c(){e=k("div"),F(e,"class","editor svelte-9vsa7j")},m(t,o){d(t,e,o),n[2](e)},p:P,i:P,o:P,d(t){t&&p(e),n[2](null)}}}function Lt(n,e,t){let{code:o=""}=e;function r(c){s===void 0||s.state.doc.toString()===c||s.dispatch(s.state.update({changes:{from:0,to:s.state.doc.length,insert:c}}))}let s,i;const a=Je();let l,f;const m=Ge(async()=>{let c=[],h=f.lint(o);for(let v of h)c.push(Object.create({from:v.span.start.charIdx,to:v.span.end.charIdx,severity:v.level,source:"rush analyzer",message:v.message}));return c});We(()=>{f=new At;let c=Ke.create({extensions:[Xe,Qe.of([Ye]),Ze(),m,et(),bt,se.updateListener.of(h=>{h.docChanged&&(l&&clearTimeout(l),l=setTimeout(()=>{a("update",o)},500))}),se.updateListener.of(h=>{h.docChanged&&t(1,o=s.state.doc.toString())})]});s=new se({state:c,parent:i})});function w(c){K[c?"unshift":"push"](()=>{i=c,t(0,i)})}return n.$$set=c=>{"code"in c&&t(1,o=c.code)},n.$$.update=()=>{n.$$.dirty&2&&r(o)},[i,o,w]}class Ot extends Ne{constructor(e){super(),Fe(this,e,Lt,Et,Re,{code:1})}}function Mt(){return new Worker("/assets/rush.worker-75b153ee.js")}const Bt=`// Welcome to the rush programming language.
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
`,Nt=`fn main() {
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

`,Ft=`fn main() {
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
`,Rt=`let ITERATIONS = 4000000;

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
`,Wt=`fn main() {
  let mut e = 1f;
  let mut f = 1f;

  for i = 2; i < 100_000; i += 1 {
    e += 1f / f;
    f *= i as float;
  }

  let result = (e * 1000000000000000f) as int;
  exit(result)
}
`,zt=`fn main() {
    let mut res = 1f;

    for i = 2; i < 30000; i += 1 {
        res += (1f / (i ** 3) as float);
    }

    let FAC = 10000000f;
    exit((res * FAC) as int)
}
`;function Oe(n,e,t){const o=n.slice();return o[21]=e[t],o}function Dt(n){let e;return{c(){e=A("Using The Playground")},m(t,o){d(t,e,o)},d(t){t&&p(e)}}}function jt(n){let e,t,o,r,s,i,a,l,f,m,w;return{c(){e=k("p"),e.innerHTML=`The <a class="highlight svelte-1u189wf" href="https://github.com/rush-rs/rush-playground" target="_blank" rel="noreferrer">rush playground</a>
                allows everyone to use the
                <a class="highlight svelte-1u189wf" href="https://github.com/rush-rs/rush" target="_blank" rel="noreferrer">rush</a> programming language regardless of whether they have installed rush or not.`,t=S(),o=k("p"),o.innerHTML=`All changes made to the current script are saved locally, meaning on your device.
                Therefore, you can reload the page while working without hesitation. If you do want
                to erase your current changes, use the <code class="highlight svelte-1u189wf">load</code> button in
                the top right corner.`,r=S(),s=k("p"),s.innerHTML=`This button can also be used to switch to other code templates. For this, the
                desired template is to be selected using the drop down menu. After the selection has
                been made, the <code class="highlight svelte-1u189wf">load</code> button is to be pressed.`,i=S(),a=k("p"),a.innerHTML=`To run the current code using the <a class="highlight svelte-1u189wf" href="https://github.com/rush-rs/rush/tree/main/crates/rush-interpreter-vm" target="_blank" rel="noreferrer">VM</a>, use the <i class="material-icons icon svelte-1u189wf">play_arrow</i> button in the top right
                corder. If the script does not stop when expected, it can be terminated using the
                <i class="material-icons icon svelte-1u189wf">cancel</i> button.`,l=S(),f=k("h4"),f.textContent="Keybindings",m=S(),w=k("ul"),w.innerHTML=`<li><code class="highlight svelte-1u189wf">CTRL + S</code>: force save the current code</li> 
                <li><code class="highlight svelte-1u189wf">F8</code>: run the current code</li> 
                <li><code class="highlight svelte-1u189wf">F9</code>: terminate current execution</li>`,F(f,"class","svelte-1u189wf"),F(w,"class","svelte-1u189wf")},m(c,h){d(c,e,h),d(c,t,h),d(c,o,h),d(c,r,h),d(c,s,h),d(c,i,h),d(c,a,h),d(c,l,h),d(c,f,h),d(c,m,h),d(c,w,h)},p:P,d(c){c&&p(e),c&&p(t),c&&p(o),c&&p(r),c&&p(s),c&&p(i),c&&p(a),c&&p(l),c&&p(f),c&&p(m),c&&p(w)}}}function Ht(n){let e;return{c(){e=A("Close")},m(t,o){d(t,e,o)},d(t){t&&p(e)}}}function Pt(n){let e,t;return e=new je({props:{$$slots:{default:[Ht]},$$scope:{ctx:n}}}),{c(){E(e.$$.fragment)},m(o,r){L(e,o,r),t=!0},p(o,r){const s={};r&16777216&&(s.$$scope={dirty:r,ctx:o}),e.$set(s)},i(o){t||(C(e.$$.fragment,o),t=!0)},o(o){T(e.$$.fragment,o),t=!1},d(o){O(e,o)}}}function xt(n){let e,t;return e=new De({props:{$$slots:{default:[Pt]},$$scope:{ctx:n}}}),e.$on("click",n[12]),{c(){E(e.$$.fragment)},m(o,r){L(e,o,r),t=!0},p(o,r){const s={};r&16777216&&(s.$$scope={dirty:r,ctx:o}),e.$set(s)},i(o){t||(C(e.$$.fragment,o),t=!0)},o(o){T(e.$$.fragment,o),t=!1},d(o){O(e,o)}}}function Ut(n){let e,t,o,r,s,i;return e=new at({props:{id:"help-title",$$slots:{default:[Dt]},$$scope:{ctx:n}}}),o=new it({props:{id:"help-content",$$slots:{default:[jt]},$$scope:{ctx:n}}}),s=new lt({props:{$$slots:{default:[xt]},$$scope:{ctx:n}}}),{c(){E(e.$$.fragment),t=S(),E(o.$$.fragment),r=S(),E(s.$$.fragment)},m(a,l){L(e,a,l),d(a,t,l),L(o,a,l),d(a,r,l),L(s,a,l),i=!0},p(a,l){const f={};l&16777216&&(f.$$scope={dirty:l,ctx:a}),e.$set(f);const m={};l&16777216&&(m.$$scope={dirty:l,ctx:a}),o.$set(m);const w={};l&16777280&&(w.$$scope={dirty:l,ctx:a}),s.$set(w)},i(a){i||(C(e.$$.fragment,a),C(o.$$.fragment,a),C(s.$$.fragment,a),i=!0)},o(a){T(e.$$.fragment,a),T(o.$$.fragment,a),T(s.$$.fragment,a),i=!1},d(a){O(e,a),a&&p(t),O(o,a),a&&p(r),O(s,a)}}}function qt(n){let e;return{c(){e=A("play_arrow")},m(t,o){d(t,e,o)},d(t){t&&p(e)}}}function Vt(n){let e;return{c(){e=A("cancel")},m(t,o){d(t,e,o)},d(t){t&&p(e)}}}function Jt(n){let e=n[21]+"",t;return{c(){t=A(e)},m(o,r){d(o,t,r)},p:P,d(o){o&&p(t)}}}function Me(n){let e,t;return e=new ct({props:{value:n[21],$$slots:{default:[Jt]},$$scope:{ctx:n}}}),{c(){E(e.$$.fragment)},m(o,r){L(e,o,r),t=!0},p(o,r){const s={};r&16777216&&(s.$$scope={dirty:r,ctx:o}),e.$set(s)},i(o){t||(C(e.$$.fragment,o),t=!0)},o(o){T(e.$$.fragment,o),t=!1},d(o){O(e,o)}}}function Gt(n){let e,t,o=Object.keys(n[7]),r=[];for(let i=0;i<o.length;i+=1)r[i]=Me(Oe(n,o,i));const s=i=>T(r[i],1,1,()=>{r[i]=null});return{c(){for(let i=0;i<r.length;i+=1)r[i].c();e=ze()},m(i,a){for(let l=0;l<r.length;l+=1)r[l].m(i,a);d(i,e,a),t=!0},p(i,a){if(a&128){o=Object.keys(i[7]);let l;for(l=0;l<o.length;l+=1){const f=Oe(i,o,l);r[l]?(r[l].p(f,a),C(r[l],1)):(r[l]=Me(f),r[l].c(),C(r[l],1),r[l].m(e.parentNode,e))}for(tt(),l=o.length;l<r.length;l+=1)s(l);nt()}},i(i){if(!t){for(let a=0;a<o.length;a+=1)C(r[a]);t=!0}},o(i){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)T(r[a]);t=!1},d(i){ot(r,i),i&&p(e)}}}function Kt(n){let e;return{c(){e=A("Load")},m(t,o){d(t,e,o)},d(t){t&&p(e)}}}function Xt(n){let e,t;return e=new je({props:{$$slots:{default:[Kt]},$$scope:{ctx:n}}}),{c(){E(e.$$.fragment)},m(o,r){L(e,o,r),t=!0},p(o,r){const s={};r&16777216&&(s.$$scope={dirty:r,ctx:o}),e.$set(s)},i(o){t||(C(e.$$.fragment,o),t=!0)},o(o){T(e.$$.fragment,o),t=!1},d(o){O(e,o)}}}function Qt(n){let e;return{c(){e=A("help")},m(t,o){d(t,e,o)},d(t){t&&p(e)}}}function Yt(n){let e;return{c(){e=A("Press the play button in order to start program execution")},m(t,o){d(t,e,o)},p:P,d(t){t&&p(e)}}}function Zt(n){let e;function t(s,i){return s[4].runtimeError?on:s[4].code!==null?nn:tn}let o=t(n),r=o(n);return{c(){r.c(),e=ze()},m(s,i){r.m(s,i),d(s,e,i)},p(s,i){o===(o=t(s))&&r?r.p(s,i):(r.d(1),r=o(s),r&&(r.c(),r.m(e.parentNode,e)))},d(s){r.d(s),s&&p(e)}}}function en(n){let e;return{c(){e=A("VM is running...")},m(t,o){d(t,e,o)},p:P,d(t){t&&p(e)}}}function tn(n){let e;return{c(){e=A("Compilation failed")},m(t,o){d(t,e,o)},p:P,d(t){t&&p(e)}}}function nn(n){let e,t=n[4].code+"",o;return{c(){e=A("Program stopped with code "),o=A(t)},m(r,s){d(r,e,s),d(r,o,s)},p(r,s){s&16&&t!==(t=r[4].code+"")&&ye(o,t)},d(r){r&&p(e),r&&p(o)}}}function on(n){let e,t,o,r=n[4].runtimeError.kind+"",s,i,a=n[4].runtimeError.message+"",l;return{c(){e=A(`VM crashed:
                        `),t=k("br"),o=S(),s=A(r),i=A(": "),l=A(a)},m(f,m){d(f,e,m),d(f,t,m),d(f,o,m),d(f,s,m),d(f,i,m),d(f,l,m)},p(f,m){m&16&&r!==(r=f[4].runtimeError.kind+"")&&ye(s,r),m&16&&a!==(a=f[4].runtimeError.message+"")&&ye(l,a)},d(f){f&&p(e),f&&p(t),f&&p(o),f&&p(s),f&&p(i),f&&p(l)}}}function rn(n){let e,t,o,r,s,i,a,l,f,m,w,c,h,v,R,Y,N,Z,W,q,ee,z,te,g,$,M,D,x;function ne(u){n[13](u)}let V={"aria-labelledby":"help-title","aria-describedby":"help-content",$$slots:{default:[Ut]},$$scope:{ctx:n}};n[6]!==void 0&&(V.open=n[6]),t=new rt({props:V}),K.push(()=>he(t,"open",ne,n[6]));function B(u){n[14](u)}let oe={};n[0]!==void 0&&(oe.code=n[0]),a=new Ot({props:oe}),K.push(()=>he(a,"code",B,n[0])),R=new ge({props:{class:"material-icons",disabled:n[3],$$slots:{default:[qt]},$$scope:{ctx:n}}}),R.$on("click",n[8]),N=new ge({props:{class:"material-icons",disabled:!n[3],$$slots:{default:[Vt]},$$scope:{ctx:n}}}),N.$on("click",n[9]);function ce(u){n[16](u)}let Ie={label:"Select Template",$$slots:{default:[Gt]},$$scope:{ctx:n}};n[2]!==void 0&&(Ie.value=n[2]),W=new st({props:Ie}),K.push(()=>he(W,"value",ce,n[2])),z=new De({props:{variant:"raised",disabled:(n[2]===n[1]||n[3])&&n[7][n[2]]===n[0],$$slots:{default:[Xt]},$$scope:{ctx:n}}}),z.$on("click",n[10]),$=new ge({props:{size:"button",class:"material-icons",$$slots:{default:[Qt]},$$scope:{ctx:n}}}),$.$on("click",n[17]);function Se(u,b){return u[3]?en:u[4]?Zt:Yt}let re=Se(n),j=re(n);return{c(){e=k("main"),E(t.$$.fragment),r=S(),s=k("div"),i=k("div"),E(a.$$.fragment),f=S(),m=k("div"),w=S(),c=k("div"),h=k("div"),v=k("div"),E(R.$$.fragment),Y=S(),E(N.$$.fragment),Z=S(),E(W.$$.fragment),ee=S(),E(z.$$.fragment),te=S(),g=k("div"),E($.$$.fragment),M=S(),D=k("div"),j.c(),F(i,"class","main__editor svelte-1u189wf"),F(m,"class","main__resizer svelte-1u189wf"),F(v,"class","main__output__nav__left svelte-1u189wf"),F(g,"class","main__output__nav__right svelte-1u189wf"),F(h,"class","main__output__nav svelte-1u189wf"),F(D,"class","main__output__terminal svelte-1u189wf"),F(c,"class","main__output svelte-1u189wf"),F(s,"class","main svelte-1u189wf")},m(u,b){d(u,e,b),L(t,e,null),I(e,r),I(e,s),I(s,i),L(a,i,null),I(s,f),I(s,m),n[15](m),I(s,w),I(s,c),I(c,h),I(h,v),L(R,v,null),I(v,Y),L(N,v,null),I(v,Z),L(W,v,null),I(v,ee),L(z,v,null),I(h,te),I(h,g),L($,g,null),I(c,M),I(c,D),j.m(D,null),x=!0},p(u,[b]){const ue={};b&16777280&&(ue.$$scope={dirty:b,ctx:u}),!o&&b&64&&(o=!0,ue.open=u[6],_e(()=>o=!1)),t.$set(ue);const Te={};!l&&b&1&&(l=!0,Te.code=u[0],_e(()=>l=!1)),a.$set(Te);const fe={};b&8&&(fe.disabled=u[3]),b&16777216&&(fe.$$scope={dirty:b,ctx:u}),R.$set(fe);const de={};b&8&&(de.disabled=!u[3]),b&16777216&&(de.$$scope={dirty:b,ctx:u}),N.$set(de);const pe={};b&16777216&&(pe.$$scope={dirty:b,ctx:u}),!q&&b&4&&(q=!0,pe.value=u[2],_e(()=>q=!1)),W.$set(pe);const me={};b&15&&(me.disabled=(u[2]===u[1]||u[3])&&u[7][u[2]]===u[0]),b&16777216&&(me.$$scope={dirty:b,ctx:u}),z.$set(me);const Ae={};b&16777216&&(Ae.$$scope={dirty:b,ctx:u}),$.$set(Ae),re===(re=Se(u))&&j?j.p(u,b):(j.d(1),j=re(u),j&&(j.c(),j.m(D,null)))},i(u){x||(C(t.$$.fragment,u),C(a.$$.fragment,u),C(R.$$.fragment,u),C(N.$$.fragment,u),C(W.$$.fragment,u),C(z.$$.fragment,u),C($.$$.fragment,u),x=!0)},o(u){T(t.$$.fragment,u),T(a.$$.fragment,u),T(R.$$.fragment,u),T(N.$$.fragment,u),T(W.$$.fragment,u),T(z.$$.fragment,u),T($.$$.fragment,u),x=!1},d(u){u&&p(e),O(t),O(a),n[15](null),O(R),O(N),O(W),O(z),O($),j.d()}}}function $e(n){window.localStorage.setItem("rush-playground-code",n)}function Be(n){window.localStorage.setItem("rush-playground-script",n)}function sn(n,e,t){const o={Welcome:Bt,Fibonacci:Nt,Pow:Ft,ApproxPi:Rt,ApproxE:Wt,ApproxApery:zt};let r="",s=!1,i="",a=Object.keys(o)[0],l=!1,f,m=null,w=null,c=!1;function h(){t(3,l=!0),m=R(r)}function v(){t(3,l=!1),m==null||m.terminate(),t(4,f=void 0)}function R(g){let $=new Mt;return $.onmessage=function(M){M.data[0]==="ready"&&$.postMessage(["run",g]),M.data[0]==="finished"&&(t(3,l=!1),$.terminate(),t(4,f=JSON.parse(M.data[1])))},$}async function Y(){t(1,i=a);let g=window.localStorage.getItem("rush-playground-script");g===null?Be(a):(t(1,i=g),t(2,a=g));let $=window.localStorage.getItem("rush-playground-code");return $===null?(t(0,r=o[a]),$e(r),r):$}function N(){t(0,r=o[a]),i!==a&&(Be(a),t(1,i=a))}We(async()=>{t(0,r=await Y()),t(11,s=!0);let g=0,$=0;const M=w.previousElementSibling,D=w.nextElementSibling;document.addEventListener("keydown",B=>{B.ctrlKey&&B.key==="s"?(B.preventDefault(),$e(r)):B.key==="F8"&&!l?h():B.key==="F9"&&l?v():B.key==="F10"&&(B.preventDefault(),l||N())});const x=function(B){g=B.clientX,$=M.getBoundingClientRect().width,document.addEventListener("mousemove",ne),document.addEventListener("mouseup",V)},ne=function(B){const oe=B.clientX-g,ce=($+oe)*100/w.parentNode.getBoundingClientRect().width;M.style.width=`${ce}%`,M.style.userSelect="none",M.style.pointerEvents="none",D.style.userSelect="none",D.style.pointerEvents="none"},V=function(){M.style.removeProperty("user-select"),M.style.removeProperty("pointer-events"),D.style.removeProperty("user-select"),D.style.removeProperty("pointer-events"),document.removeEventListener("mousemove",ne),document.removeEventListener("mouseup",V)};w.addEventListener("mousedown",x)});const Z=()=>t(6,c=!1);function W(g){c=g,t(6,c)}function q(g){r=g,t(0,r)}function ee(g){K[g?"unshift":"push"](()=>{w=g,t(5,w)})}function z(g){a=g,t(2,a)}const te=()=>t(6,c=!0);return n.$$.update=()=>{n.$$.dirty&2049&&s&&$e(r)},[r,i,a,l,f,w,c,o,h,v,N,s,Z,W,q,ee,z,te]}class an extends Ne{constructor(e){super(),Fe(this,e,sn,rn,Re,{})}}new an({target:document.getElementById("app")});
