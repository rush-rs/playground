import{a4 as oe,a5 as Ve,a6 as _,a7 as Je,S as Ne,i as Fe,d as We,G as k,P as F,j as d,F as U,v as p,a8 as xe,a9 as Ge,U as ze,aa as Ke,ab as Xe,ac as Qe,ad as Ye,ae as Ze,af as et,A as x,Z as he,f as E,O as S,m as A,Q as I,$ as _e,u as C,t as L,q as M,a0 as T,h as De,o as tt,r as nt,ag as ot,a1 as ye}from"./vendor-4b9f9204.js";import{D as rt,I as ge,S as st,B as Re,C as je,T as at,a as it,A as lt,O as ct}from"./vendor_mui-6467238f.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const be="#2c313a",we="#353a42",Ee="#282c34",ut="#3b3f4c",ft="#21252b",re="#abb2bf",dt="#c678dd",Ae="#d19a66",ve="#61afef",pt="#56b6c2",mt="#e86671",He="#5c6370",ht="#848b98",_t=oe.theme({"*":{fontFamily:"JetBrains Mono NL, monospace"},"&":{color:re,backgroundColor:Ee,height:"100%"},".cm-scroller":{overflow:"auto"},".cm-content":{caretColor:ve},".cm-cursor, .cm-dropCursor":{borderLeftColor:ve},"&.cm-focused .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection":{backgroundColor:ut},".cm-panels":{backgroundColor:ft,color:re},".cm-panels.cm-panels-top":{borderBottom:"2px solid black"},".cm-panels.cm-panels-bottom":{borderTop:"2px solid black"},".cm-searchMatch":{backgroundColor:"#72a1ff59",outline:"1px solid #457dff"},".cm-searchMatch.cm-searchMatch-selected":{backgroundColor:"#6199ff2f"},".cm-activeLine":{backgroundColor:be},".cm-selectionMatch":{backgroundColor:"#aafe661a"},"&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket":{backgroundColor:"#bad0f847",outline:"1px solid #515a6b"},".cm-gutters":{backgroundColor:Ee,color:He,border:"none"},".cm-activeLineGutter":{backgroundColor:be},".cm-foldPlaceholder":{backgroundColor:"transparent",border:"none",color:"#ddd"},".cm-tooltip":{border:"none",backgroundColor:we},".cm-tooltip .cm-tooltip-arrow:before":{borderTopColor:"transparent",borderBottomColor:"transparent"},".cm-tooltip .cm-tooltip-arrow:after":{borderTopColor:we,borderBottomColor:we},".cm-tooltip-autocomplete":{"& > ul > li[aria-selected]":{backgroundColor:be,color:re}}},{dark:!0}),gt=Ve.define([{tag:_.keyword,color:dt},{tag:[_.variableName,_.operator],color:re},{tag:[_.bool,_.null,_.typeName,_.number],color:Ae},{tag:[_.function(_.variableName),_.function(_.propertyName)],color:ve},{tag:[_.propertyName,_.standard(_.function(_.variableName))],color:pt},{tag:[_.local(_.variableName),_.standard(_.variableName)],color:mt},{tag:_.comment,color:He},{tag:_.character,color:Ae},{tag:[_.bracket,_.separator],color:ht}]),bt=[_t,Je(gt)];let y;const H=new Array(32).fill(void 0);H.push(void 0,null,!0,!1);function Ue(n){return H[n]}let G=H.length;function wt(n){n<36||(H[n]=G,G=n)}function $t(n){const e=Ue(n);return wt(n),e}let K=0,se=new Uint8Array;function ae(){return se.byteLength===0&&(se=new Uint8Array(y.memory.buffer)),se}const ie=new TextEncoder("utf-8"),yt=typeof ie.encodeInto=="function"?function(n,e){return ie.encodeInto(n,e)}:function(n,e){const t=ie.encode(n);return e.set(t),{read:n.length,written:t.length}};function ke(n,e,t){if(t===void 0){const a=ie.encode(n),l=e(a.length);return ae().subarray(l,l+a.length).set(a),K=a.length,l}let o=n.length,r=e(o);const s=ae();let i=0;for(;i<o;i++){const a=n.charCodeAt(i);if(a>127)break;s[r+i]=a}if(i!==o){i!==0&&(n=n.slice(i)),r=t(r,o,o=i+n.length*3);const a=ae().subarray(r+i,r+o),l=yt(n,a);i+=l.written}return K=i,r}let le=new Int32Array;function q(){return le.byteLength===0&&(le=new Int32Array(y.memory.buffer)),le}const Pe=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});Pe.decode();function Ce(n,e){return Pe.decode(ae().subarray(n,n+e))}function vt(n){try{const o=y.__wbindgen_add_to_stack_pointer(-16),r=ke(n,y.__wbindgen_malloc,y.__wbindgen_realloc),s=K;y.analyze(o,r,s);var e=q()[o/4+0],t=q()[o/4+1];return Ce(e,t)}finally{y.__wbindgen_add_to_stack_pointer(16),y.__wbindgen_free(e,t)}}function kt(n){try{const o=y.__wbindgen_add_to_stack_pointer(-16),r=ke(n,y.__wbindgen_malloc,y.__wbindgen_realloc),s=K;y.run(o,r,s);var e=q()[o/4+0],t=q()[o/4+1];return Ce(e,t)}finally{y.__wbindgen_add_to_stack_pointer(16),y.__wbindgen_free(e,t)}}function Ct(n){G===H.length&&H.push(H.length+1);const e=G;return G=H[e],H[e]=n,e}async function It(n,e){if(typeof Response=="function"&&n instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(n,e)}catch(o){if(n.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",o);else throw o}const t=await n.arrayBuffer();return await WebAssembly.instantiate(t,e)}else{const t=await WebAssembly.instantiate(n,e);return t instanceof WebAssembly.Instance?{instance:t,module:n}:t}}function St(){const n={};return n.wbg={},n.wbg.__wbg_new_abda76e883ba8a5f=function(){const e=new Error;return Ct(e)},n.wbg.__wbg_stack_658279fe44541cf6=function(e,t){const o=Ue(t).stack,r=ke(o,y.__wbindgen_malloc,y.__wbindgen_realloc),s=K;q()[e/4+1]=s,q()[e/4+0]=r},n.wbg.__wbg_error_f851667af71bcfc6=function(e,t){try{console.error(Ce(e,t))}finally{y.__wbindgen_free(e,t)}},n.wbg.__wbindgen_object_drop_ref=function(e){$t(e)},n}function Lt(n,e){return y=n.exports,qe.__wbindgen_wasm_module=e,le=new Int32Array,se=new Uint8Array,y}async function qe(n){typeof n>"u"&&(n=new URL("/assets/rush_backend_bg-96178e02.wasm",self.location));const e=St();(typeof n=="string"||typeof Request=="function"&&n instanceof Request||typeof URL=="function"&&n instanceof URL)&&(n=fetch(n));const{instance:t,module:o}=await It(await n,e);return Lt(t,o)}class Tt{constructor(){qe()}lint(e){let t=vt(e);return JSON.parse(t)}run(e){let t=kt(e);return JSON.parse(t)}}function Et(n){let e;return{c(){e=k("div"),F(e,"class","editor svelte-9vsa7j")},m(t,o){d(t,e,o),n[2](e)},p:U,i:U,o:U,d(t){t&&p(e),n[2](null)}}}function At(n,e,t){let{code:o=""}=e;function r(c){s===void 0||s.state.doc.toString()===c||s.dispatch(s.state.update({changes:{from:0,to:s.state.doc.length,insert:c}}))}let s,i;const a=xe();let l,f;const m=Ge(async()=>{let c=[],h=f.lint(o);for(let v of h)c.push(Object.create({from:v.span.start.charIdx,to:v.span.end.charIdx,severity:v.level,source:"rush analyzer",message:v.message}));return c});ze(()=>{f=new Tt;let c=Ke.create({extensions:[Xe,Qe.of([Ye]),Ze(),m,et(),bt,oe.updateListener.of(h=>{h.docChanged&&(l&&clearTimeout(l),l=setTimeout(()=>{a("update",o)},500))}),oe.updateListener.of(h=>{h.docChanged&&t(1,o=s.state.doc.toString())})]});s=new oe({state:c,parent:i})});function w(c){x[c?"unshift":"push"](()=>{i=c,t(0,i)})}return n.$$set=c=>{"code"in c&&t(1,o=c.code)},n.$$.update=()=>{n.$$.dirty&2&&r(o)},[i,o,w]}class Mt extends Ne{constructor(e){super(),Fe(this,e,At,Et,We,{code:1})}}function Ot(){return new Worker("/assets/rush.worker-f841fc9c.js")}const Bt=`// Welcome to the rush programming language.
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
`;function Me(n,e,t){const o=n.slice();return o[21]=e[t],o}function Wt(n){let e;return{c(){e=T("Using The Playground")},m(t,o){d(t,e,o)},d(t){t&&p(e)}}}function zt(n){let e,t,o,r,s,i,a,l,f,m,w;return{c(){e=k("p"),e.innerHTML=`The <a class="highlight svelte-1u189wf" href="https://github.com/rush-rs/rush-playground" target="_blank" rel="noreferrer">rush playground</a>
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
                <li><code class="highlight svelte-1u189wf">F9</code>: terminate current execution</li>`,F(f,"class","svelte-1u189wf"),F(w,"class","svelte-1u189wf")},m(c,h){d(c,e,h),d(c,t,h),d(c,o,h),d(c,r,h),d(c,s,h),d(c,i,h),d(c,a,h),d(c,l,h),d(c,f,h),d(c,m,h),d(c,w,h)},p:U,d(c){c&&p(e),c&&p(t),c&&p(o),c&&p(r),c&&p(s),c&&p(i),c&&p(a),c&&p(l),c&&p(f),c&&p(m),c&&p(w)}}}function Dt(n){let e;return{c(){e=T("Close")},m(t,o){d(t,e,o)},d(t){t&&p(e)}}}function Rt(n){let e,t;return e=new je({props:{$$slots:{default:[Dt]},$$scope:{ctx:n}}}),{c(){E(e.$$.fragment)},m(o,r){A(e,o,r),t=!0},p(o,r){const s={};r&16777216&&(s.$$scope={dirty:r,ctx:o}),e.$set(s)},i(o){t||(C(e.$$.fragment,o),t=!0)},o(o){L(e.$$.fragment,o),t=!1},d(o){M(e,o)}}}function jt(n){let e,t;return e=new Re({props:{$$slots:{default:[Rt]},$$scope:{ctx:n}}}),e.$on("click",n[12]),{c(){E(e.$$.fragment)},m(o,r){A(e,o,r),t=!0},p(o,r){const s={};r&16777216&&(s.$$scope={dirty:r,ctx:o}),e.$set(s)},i(o){t||(C(e.$$.fragment,o),t=!0)},o(o){L(e.$$.fragment,o),t=!1},d(o){M(e,o)}}}function Ht(n){let e,t,o,r,s,i;return e=new at({props:{id:"help-title",$$slots:{default:[Wt]},$$scope:{ctx:n}}}),o=new it({props:{id:"help-content",$$slots:{default:[zt]},$$scope:{ctx:n}}}),s=new lt({props:{$$slots:{default:[jt]},$$scope:{ctx:n}}}),{c(){E(e.$$.fragment),t=S(),E(o.$$.fragment),r=S(),E(s.$$.fragment)},m(a,l){A(e,a,l),d(a,t,l),A(o,a,l),d(a,r,l),A(s,a,l),i=!0},p(a,l){const f={};l&16777216&&(f.$$scope={dirty:l,ctx:a}),e.$set(f);const m={};l&16777216&&(m.$$scope={dirty:l,ctx:a}),o.$set(m);const w={};l&16777280&&(w.$$scope={dirty:l,ctx:a}),s.$set(w)},i(a){i||(C(e.$$.fragment,a),C(o.$$.fragment,a),C(s.$$.fragment,a),i=!0)},o(a){L(e.$$.fragment,a),L(o.$$.fragment,a),L(s.$$.fragment,a),i=!1},d(a){M(e,a),a&&p(t),M(o,a),a&&p(r),M(s,a)}}}function Ut(n){let e;return{c(){e=T("play_arrow")},m(t,o){d(t,e,o)},d(t){t&&p(e)}}}function Pt(n){let e;return{c(){e=T("cancel")},m(t,o){d(t,e,o)},d(t){t&&p(e)}}}function qt(n){let e=n[21]+"",t;return{c(){t=T(e)},m(o,r){d(o,t,r)},p:U,d(o){o&&p(t)}}}function Oe(n){let e,t;return e=new ct({props:{value:n[21],$$slots:{default:[qt]},$$scope:{ctx:n}}}),{c(){E(e.$$.fragment)},m(o,r){A(e,o,r),t=!0},p(o,r){const s={};r&16777216&&(s.$$scope={dirty:r,ctx:o}),e.$set(s)},i(o){t||(C(e.$$.fragment,o),t=!0)},o(o){L(e.$$.fragment,o),t=!1},d(o){M(e,o)}}}function Vt(n){let e,t,o=Object.keys(n[7]),r=[];for(let i=0;i<o.length;i+=1)r[i]=Oe(Me(n,o,i));const s=i=>L(r[i],1,1,()=>{r[i]=null});return{c(){for(let i=0;i<r.length;i+=1)r[i].c();e=De()},m(i,a){for(let l=0;l<r.length;l+=1)r[l].m(i,a);d(i,e,a),t=!0},p(i,a){if(a&128){o=Object.keys(i[7]);let l;for(l=0;l<o.length;l+=1){const f=Me(i,o,l);r[l]?(r[l].p(f,a),C(r[l],1)):(r[l]=Oe(f),r[l].c(),C(r[l],1),r[l].m(e.parentNode,e))}for(tt(),l=o.length;l<r.length;l+=1)s(l);nt()}},i(i){if(!t){for(let a=0;a<o.length;a+=1)C(r[a]);t=!0}},o(i){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)L(r[a]);t=!1},d(i){ot(r,i),i&&p(e)}}}function Jt(n){let e;return{c(){e=T("Load")},m(t,o){d(t,e,o)},d(t){t&&p(e)}}}function xt(n){let e,t;return e=new je({props:{$$slots:{default:[Jt]},$$scope:{ctx:n}}}),{c(){E(e.$$.fragment)},m(o,r){A(e,o,r),t=!0},p(o,r){const s={};r&16777216&&(s.$$scope={dirty:r,ctx:o}),e.$set(s)},i(o){t||(C(e.$$.fragment,o),t=!0)},o(o){L(e.$$.fragment,o),t=!1},d(o){M(e,o)}}}function Gt(n){let e;return{c(){e=T("help")},m(t,o){d(t,e,o)},d(t){t&&p(e)}}}function Kt(n){let e;return{c(){e=T("Press the play button in order to start program execution")},m(t,o){d(t,e,o)},p:U,d(t){t&&p(e)}}}function Xt(n){let e;function t(s,i){return s[4].runtimeError?en:s[4].code!==null?Zt:Yt}let o=t(n),r=o(n);return{c(){r.c(),e=De()},m(s,i){r.m(s,i),d(s,e,i)},p(s,i){o===(o=t(s))&&r?r.p(s,i):(r.d(1),r=o(s),r&&(r.c(),r.m(e.parentNode,e)))},d(s){r.d(s),s&&p(e)}}}function Qt(n){let e;return{c(){e=T("VM is running...")},m(t,o){d(t,e,o)},p:U,d(t){t&&p(e)}}}function Yt(n){let e;return{c(){e=T("Compilation failed")},m(t,o){d(t,e,o)},p:U,d(t){t&&p(e)}}}function Zt(n){let e,t=n[4].code+"",o;return{c(){e=T("Program stopped with code "),o=T(t)},m(r,s){d(r,e,s),d(r,o,s)},p(r,s){s&16&&t!==(t=r[4].code+"")&&ye(o,t)},d(r){r&&p(e),r&&p(o)}}}function en(n){let e,t,o,r=n[4].runtimeError.kind+"",s,i,a=n[4].runtimeError.message+"",l;return{c(){e=T(`VM crashed:
                        `),t=k("br"),o=S(),s=T(r),i=T(": "),l=T(a)},m(f,m){d(f,e,m),d(f,t,m),d(f,o,m),d(f,s,m),d(f,i,m),d(f,l,m)},p(f,m){m&16&&r!==(r=f[4].runtimeError.kind+"")&&ye(s,r),m&16&&a!==(a=f[4].runtimeError.message+"")&&ye(l,a)},d(f){f&&p(e),f&&p(t),f&&p(o),f&&p(s),f&&p(i),f&&p(l)}}}function tn(n){let e,t,o,r,s,i,a,l,f,m,w,c,h,v,W,X,N,Q,z,V,Y,D,Z,g,$,O,R,P;function ee(u){n[13](u)}let J={"aria-labelledby":"help-title","aria-describedby":"help-content",$$slots:{default:[Ht]},$$scope:{ctx:n}};n[6]!==void 0&&(J.open=n[6]),t=new rt({props:J}),x.push(()=>he(t,"open",ee,n[6]));function B(u){n[14](u)}let te={};n[0]!==void 0&&(te.code=n[0]),a=new Mt({props:te}),x.push(()=>he(a,"code",B,n[0])),W=new ge({props:{class:"material-icons",disabled:n[3],$$slots:{default:[Ut]},$$scope:{ctx:n}}}),W.$on("click",n[8]),N=new ge({props:{class:"material-icons",disabled:!n[3],$$slots:{default:[Pt]},$$scope:{ctx:n}}}),N.$on("click",n[9]);function ce(u){n[16](u)}let Ie={label:"Select Template",$$slots:{default:[Vt]},$$scope:{ctx:n}};n[2]!==void 0&&(Ie.value=n[2]),z=new st({props:Ie}),x.push(()=>he(z,"value",ce,n[2])),D=new Re({props:{variant:"raised",disabled:(n[2]===n[1]||n[3])&&n[7][n[2]]===n[0],$$slots:{default:[xt]},$$scope:{ctx:n}}}),D.$on("click",n[10]),$=new ge({props:{size:"button",class:"material-icons",$$slots:{default:[Gt]},$$scope:{ctx:n}}}),$.$on("click",n[17]);function Se(u,b){return u[3]?Qt:u[4]?Xt:Kt}let ne=Se(n),j=ne(n);return{c(){e=k("main"),E(t.$$.fragment),r=S(),s=k("div"),i=k("div"),E(a.$$.fragment),f=S(),m=k("div"),w=S(),c=k("div"),h=k("div"),v=k("div"),E(W.$$.fragment),X=S(),E(N.$$.fragment),Q=S(),E(z.$$.fragment),Y=S(),E(D.$$.fragment),Z=S(),g=k("div"),E($.$$.fragment),O=S(),R=k("div"),j.c(),F(i,"class","main__editor svelte-1u189wf"),F(m,"class","main__resizer svelte-1u189wf"),F(v,"class","main__output__nav__left svelte-1u189wf"),F(g,"class","main__output__nav__right svelte-1u189wf"),F(h,"class","main__output__nav svelte-1u189wf"),F(R,"class","main__output__terminal svelte-1u189wf"),F(c,"class","main__output svelte-1u189wf"),F(s,"class","main svelte-1u189wf")},m(u,b){d(u,e,b),A(t,e,null),I(e,r),I(e,s),I(s,i),A(a,i,null),I(s,f),I(s,m),n[15](m),I(s,w),I(s,c),I(c,h),I(h,v),A(W,v,null),I(v,X),A(N,v,null),I(v,Q),A(z,v,null),I(v,Y),A(D,v,null),I(h,Z),I(h,g),A($,g,null),I(c,O),I(c,R),j.m(R,null),P=!0},p(u,[b]){const ue={};b&16777280&&(ue.$$scope={dirty:b,ctx:u}),!o&&b&64&&(o=!0,ue.open=u[6],_e(()=>o=!1)),t.$set(ue);const Le={};!l&&b&1&&(l=!0,Le.code=u[0],_e(()=>l=!1)),a.$set(Le);const fe={};b&8&&(fe.disabled=u[3]),b&16777216&&(fe.$$scope={dirty:b,ctx:u}),W.$set(fe);const de={};b&8&&(de.disabled=!u[3]),b&16777216&&(de.$$scope={dirty:b,ctx:u}),N.$set(de);const pe={};b&16777216&&(pe.$$scope={dirty:b,ctx:u}),!V&&b&4&&(V=!0,pe.value=u[2],_e(()=>V=!1)),z.$set(pe);const me={};b&15&&(me.disabled=(u[2]===u[1]||u[3])&&u[7][u[2]]===u[0]),b&16777216&&(me.$$scope={dirty:b,ctx:u}),D.$set(me);const Te={};b&16777216&&(Te.$$scope={dirty:b,ctx:u}),$.$set(Te),ne===(ne=Se(u))&&j?j.p(u,b):(j.d(1),j=ne(u),j&&(j.c(),j.m(R,null)))},i(u){P||(C(t.$$.fragment,u),C(a.$$.fragment,u),C(W.$$.fragment,u),C(N.$$.fragment,u),C(z.$$.fragment,u),C(D.$$.fragment,u),C($.$$.fragment,u),P=!0)},o(u){L(t.$$.fragment,u),L(a.$$.fragment,u),L(W.$$.fragment,u),L(N.$$.fragment,u),L(z.$$.fragment,u),L(D.$$.fragment,u),L($.$$.fragment,u),P=!1},d(u){u&&p(e),M(t),M(a),n[15](null),M(W),M(N),M(z),M(D),M($),j.d()}}}function $e(n){window.localStorage.setItem("rush-playground-code",n)}function Be(n){window.localStorage.setItem("rush-playground-script",n)}function nn(n,e,t){const o={Welcome:Bt,Fibonacci:Nt,Pow:Ft};let r="",s=!1,i="",a=Object.keys(o)[0],l=!1,f,m=null,w=null,c=!1;function h(){t(3,l=!0),m=W(r)}function v(){t(3,l=!1),m==null||m.terminate(),t(4,f=void 0)}function W(g){let $=new Ot;return $.onmessage=function(O){O.data[0]==="ready"&&$.postMessage(["run",g]),O.data[0]==="finished"&&(t(3,l=!1),$.terminate(),t(4,f=JSON.parse(O.data[1])))},$}async function X(){t(1,i=a);let g=window.localStorage.getItem("rush-playground-script");g===null?Be(a):(t(1,i=g),t(2,a=g));let $=window.localStorage.getItem("rush-playground-code");return $===null?(t(0,r=o[a]),$e(r),r):$}function N(){t(0,r=o[a]),i!==a&&(Be(a),t(1,i=a))}ze(async()=>{t(0,r=await X()),t(11,s=!0);let g=0,$=0;const O=w.previousElementSibling,R=w.nextElementSibling;document.addEventListener("keydown",B=>{B.ctrlKey&&B.key==="s"?(B.preventDefault(),$e(r)):B.key==="F8"&&!l?h():B.key==="F9"&&l?v():B.key==="F10"&&(B.preventDefault(),l||N())});const P=function(B){g=B.clientX,$=O.getBoundingClientRect().width,document.addEventListener("mousemove",ee),document.addEventListener("mouseup",J)},ee=function(B){const te=B.clientX-g,ce=($+te)*100/w.parentNode.getBoundingClientRect().width;O.style.width=`${ce}%`,O.style.userSelect="none",O.style.pointerEvents="none",R.style.userSelect="none",R.style.pointerEvents="none"},J=function(){O.style.removeProperty("user-select"),O.style.removeProperty("pointer-events"),R.style.removeProperty("user-select"),R.style.removeProperty("pointer-events"),document.removeEventListener("mousemove",ee),document.removeEventListener("mouseup",J)};w.addEventListener("mousedown",P)});const Q=()=>t(6,c=!1);function z(g){c=g,t(6,c)}function V(g){r=g,t(0,r)}function Y(g){x[g?"unshift":"push"](()=>{w=g,t(5,w)})}function D(g){a=g,t(2,a)}const Z=()=>t(6,c=!0);return n.$$.update=()=>{n.$$.dirty&2049&&s&&$e(r)},[r,i,a,l,f,w,c,o,h,v,N,s,Q,z,V,Y,D,Z]}class on extends Ne{constructor(e){super(),Fe(this,e,nn,tn,We,{})}}new on({target:document.getElementById("app")});
