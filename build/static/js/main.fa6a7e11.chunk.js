(this["webpackJsonpmy-dictionary-project"]=this["webpackJsonpmy-dictionary-project"]||[]).push([[0],{20:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var c=t(2),i=t.n(c),s=t(14),r=t.n(s),j=(t(20),t(5),t(4)),a=t(15),o=t.n(a),l=t(0);function d(e){return Object(l.jsxs)("div",{className:"Phonetic",children:[Object(l.jsx)("a",{href:e.phonetic.audio,target:"_blank",children:"Listen"}),Object(l.jsx)("br",{}),e.phonetic.text]})}function u(e){return e.synonyms?Object(l.jsx)("ul",{className:"Synonyms",children:e.synonyms.map((function(e,n){return Object(l.jsx)("li",{children:e},n)}))}):null}function b(e){return console.log(e.meaning),Object(l.jsxs)("div",{className:"Meaning",children:[Object(l.jsx)("h3",{children:e.meaning.partOfSpeech}),e.meaning.definitions.map((function(e,n){return Object(l.jsx)("div",{children:Object(l.jsxs)("p",{children:[Object(l.jsx)("strong",{children:"Definition:"}),e.definition,Object(l.jsx)("br",{}),Object(l.jsx)("strong",{children:"Example:"}),Object(l.jsx)("em",{children:e.example}),Object(l.jsx)("br",{}),Object(l.jsx)(u,{synonyms:e.synonyms})]})},n)}))]})}function h(e){return console.log(e.results),e.results?Object(l.jsxs)("div",{className:"Results",children:[Object(l.jsx)("h2",{children:e.results.word}),e.results.phonetics.map((function(e,n){return Object(l.jsx)("div",{children:Object(l.jsx)(d,{phonetic:e})},n)})),e.results.meanings.map((function(e,n){return Object(l.jsx)("div",{children:Object(l.jsx)(b,{meaning:e})},n)}))]}):null}function O(){var e=Object(c.useState)(""),n=Object(j.a)(e,2),t=n[0],i=n[1],s=Object(c.useState)(null),r=Object(j.a)(s,2),a=r[0],d=r[1];function u(e){console.log(e.data[0]),d(e.data[0])}return Object(l.jsxs)("div",{className:"Dictionary",children:[Object(l.jsx)("form",{onSubmit:function(e){e.preventDefault();var n="https://api.dictionaryapi.dev/api/v2/entries/en_US/".concat(t);o.a.get(n).then(u)},children:Object(l.jsx)("input",{type:"search",onChange:function(e){i(e.target.value)}})}),Object(l.jsx)(h,{results:a})]})}function x(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("header",{className:"App-header",children:"MyDictionary App"}),Object(l.jsx)("h1",{children:"What are you looking for?"}),Object(l.jsx)("main",{children:Object(l.jsx)(O,{})}),Object(l.jsx)("footer",{children:"Coded by Monika"})]})})}var p=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,41)).then((function(n){var t=n.getCLS,c=n.getFID,i=n.getFCP,s=n.getLCP,r=n.getTTFB;t(e),c(e),i(e),s(e),r(e)}))};r.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(x,{})}),document.getElementById("root")),p()},5:function(e,n,t){}},[[40,1,2]]]);
//# sourceMappingURL=main.fa6a7e11.chunk.js.map