(this["webpackJsonpreact-concepts"]=this["webpackJsonpreact-concepts"]||[]).push([[0],{34:function(e,t,n){},35:function(e,t,n){},37:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(8),j=n.n(s),r=(n(34),n(11)),l=(n(35),n(5)),i=n(2),o=function(){return Object(i.jsx)("img",{src:"https://assets.prestashop2.com/sites/default/files/styles/blog_750x320/public/blog/2019/10/banner_error_404.jpg?itok=eAS4swln"})},b=n(6);n(37);var u=function(){var e=a.a.useState(!1),t=Object(b.a)(e,2),n=t[0],c=t[1],s=function(){return c(!n)};return Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{className:n?"main-container":"",onClick:function(){return c(!1)}}),Object(i.jsx)("nav",{className:"navbar",onClick:function(e){return e.stopPropagation()},children:Object(i.jsxs)("div",{className:"nav-container",children:[Object(i.jsx)(r.b,{exact:!0,to:"/",className:"nav-logo",children:"Top Nav"}),Object(i.jsxs)("ul",{className:n?"nav-menu active":"nav-menu",children:[Object(i.jsx)("li",{children:Object(i.jsx)(r.b,{to:"/",className:"nav-links",onClick:n?s:null,children:"Home"})}),Object(i.jsx)("li",{children:Object(i.jsx)(r.b,{to:"/about",className:"nav-links",onClick:n?s:null,children:"About"})}),Object(i.jsx)("li",{children:Object(i.jsx)(r.b,{to:"/blog",className:"nav-links",onClick:n?s:null,children:"Blog"})}),Object(i.jsx)("li",{children:Object(i.jsx)(r.b,{to:"/contact",className:"nav-links",onClick:n?s:null,children:"Contact"})})]}),Object(i.jsx)("div",{className:"nav-icon",onClick:s,children:Object(i.jsx)("i",{className:n?"fa fa-times":"fa fa-bars"})})]})})]})};var x=function(){return Object(i.jsx)("div",{children:"About Content will come soon...."})};var O=function(){return Object(i.jsx)("div",{children:"Blog content will come soon"})};var d=function(){return Object(i.jsx)("div",{children:"Contact content will come soon...."})},m=n(15),h=a.a.createContext(),p=function(e){var t=Object(c.useState)(!1),n=Object(b.a)(t,2),a=n[0],s=n[1];return Object(i.jsx)(h.Provider,{value:{name:a,updateName:function(e){return s(e)}},children:e.children})};var v=function(){var e=Object(c.useState)(""),t=Object(b.a)(e,2),n=t[0],a=t[1],s=Object(c.useContext)(h).updateName;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{children:"Component which updates context value"}),Object(i.jsx)(m.b,{for:"name",children:"Name"}),Object(i.jsx)(m.a,{className:"name",onChange:function(e){return function(e){e.preventDefault(),a(e.target.value),s(e.target.value)}(e)},value:n})]})};var f=function(){var e=Object(c.useContext)(h).name;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{children:"Component which uses context value"}),Object(i.jsxs)("b",{children:["Name from context ",e]})]})};var g=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{children:"Context API demo"}),Object(i.jsx)("p",{children:"The context API example implemented using functional components."}),Object(i.jsx)("p",{children:"Context provider and consumer implemented in functional components. "}),Object(i.jsxs)("ol",{children:[Object(i.jsx)("li",{children:"Edit name"}),Object(i.jsx)("li",{children:"Observe context value updating in contextUse component"})]}),Object(i.jsx)("hr",{}),Object(i.jsx)(f,{}),Object(i.jsx)("hr",{}),Object(i.jsx)(v,{})]})},N=(n(41),a.a.createContext()),C=function(e){var t=Object(c.useState)(!1),n=Object(b.a)(t,2),a=n[0],s=n[1];return Object(i.jsx)(N.Provider,{value:{showPrompt:a,updatePrompt:function(e){return s(e)}},children:e.children})};var k=function(){var e=Object(c.useState)(""),t=Object(b.a)(e,2),n=t[0],a=t[1],s=Object(c.useContext)(N).updatePrompt;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{children:"React-route-dom Prompt demo"}),Object(i.jsxs)("ol",{children:[Object(i.jsx)("li",{children:"Edit name"}),Object(i.jsx)("li",{children:"Click on any nav option "})]}),Object(i.jsx)(m.b,{for:"name",children:"Name"}),Object(i.jsx)(m.a,{className:"name",onChange:function(e){return function(e){e.preventDefault(),a(e.target.value),s(e.target.value.length>0)}(e)},value:n})]})};n(42);var P=function(){var e=[{label:"tab1",component:Object(i.jsx)(k,{})},{label:"tab2",component:Object(i.jsx)(g,{})},{label:"tab3",component:Object(i.jsx)("p",{children:"tab3 content"})}],t=[{label:"tab1",component:Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("span",{children:["React-Router-Prompt",Object(i.jsx)("i",{class:"fa-sharp fa-solid fa-circle-exclamation tab-icon"})]})})},{label:"tab2",component:Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("span",{children:["Context API Demo ",Object(i.jsx)("i",{class:"fa-sharp fa-solid fa-code"})]})," "]})},{label:"tab3",component:Object(i.jsx)("p",{children:"Tab3"})}],n=Object(c.useState)(t[0].label),a=Object(b.a)(n,2),s=a[0],j=a[1];return Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:"tab-container",children:[Object(i.jsx)("div",{className:"tabs",children:t.map((function(e){return Object(i.jsx)("h3",{onClick:function(t){return function(e,t){e.preventDefault(),j(t)}(t,e.label)},className:e.label===s?"active":"",children:e.component})}))}),Object(i.jsx)("div",{className:"tab-content",children:e.map((function(e){return Object(i.jsx)("div",{className:e.label===s?"active":"",children:e.component})}))})]})})};var w=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(C,{children:Object(i.jsxs)(p,{children:[Object(i.jsx)(u,{}),Object(i.jsxs)(l.c,{children:[Object(i.jsx)(l.a,{exact:!0,path:"/",element:Object(i.jsx)(P,{})}),Object(i.jsx)(l.a,{path:"/about",element:Object(i.jsx)(x,{})}),Object(i.jsx)(l.a,{path:"/blog",element:Object(i.jsx)(O,{})}),Object(i.jsx)(l.a,{path:"/contact",element:Object(i.jsx)(d,{})}),Object(i.jsx)(l.a,{path:"/prompt",element:Object(i.jsx)(d,{})}),Object(i.jsx)(l.a,{element:Object(i.jsx)(o,{})})]})]})})})};j.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(r.a,{children:Object(i.jsx)(w,{})})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.173dea48.chunk.js.map