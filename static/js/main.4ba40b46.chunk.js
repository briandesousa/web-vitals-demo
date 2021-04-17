(this["webpackJsonpweb-vitals-demo"]=this["webpackJsonpweb-vitals-demo"]||[]).push([[0],{23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(8),r=a(17),s=a.n(r),i=(a(23),a(24),a(2)),o=a(7),l=(a(25),a(0));var d=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),a=t[0],n=t[1];return Object(c.useEffect)((function(){var e=setTimeout((function(){return n(!0)}),4e3);return function(){return clearTimeout(e)}}),[a]),Object(l.jsx)("section",{children:Object(l.jsx)("div",{className:"welcome-content",children:Object(l.jsxs)("div",{className:"welcome-text",children:[Object(l.jsx)("div",{className:"loading-indicator ".concat(a?"hidden":""),children:"Loading..."}),Object(l.jsxs)("div",{className:"".concat(a?"":"hidden"),children:[Object(l.jsx)("h2",{children:"Welcome backyard dweller!"}),Object(l.jsx)("p",{children:"Is your backyard in disarray?"}),Object(l.jsx)("p",{children:"Do you peek over your neighbor's fence and think 'I wish I had that'?"}),Object(l.jsx)("p",{children:"Are you tired of looking out your back window at the same old turf paradise?"}),Object(l.jsx)("p",{children:"You have arrived at the right place. We here at Northern Getaway Backyward Solutions want to turn your vomit-inducing embarrassment of a backyard into the ultimate pandemic-era getaway."}),Object(l.jsxs)("p",{children:["We will work with you to develop a masterful architectural plan to turn your dreams into reality. Then we will start to clear out the cob",Object(l.jsx)("strong",{children:"web"}),"s and re",Object(l.jsx)("strong",{children:"vital"}),"ize your backyard space."]}),Object(l.jsx)("p",{children:"The best part is that we will only take a modest cut of all that cash you have managed to save up throughout the pandemic."}),Object(l.jsxs)("p",{children:["Check out ",Object(l.jsx)("a",{href:"/#/ourwork",children:"our work"})," to see it and believe it!"]})]})]})})})};function j(e){var t=Object(c.useState)(!1),a=Object(o.a)(t,2),n=a[0],r=a[1],s={objectFit:"contain",margin:"5px",display:n?e.display:"none",width:e.width,height:e.height};return Object(c.useEffect)((function(){var t=setTimeout((function(){return r(!0)}),e.renderDelay);return function(){return clearTimeout(t)}}),[e.renderDelay]),Object(l.jsx)("img",{src:"".concat(e.src),alt:e.altText,style:s})}j.defaultProps={renderDelay:5e3,display:"inline-block",width:"",height:"",altText:""};var h=j;var b=function(){return Object(l.jsxs)("section",{children:[Object(l.jsx)("h2",{children:"Our Work"}),Object(l.jsx)("p",{children:"Check out our latest creations."}),Object(l.jsx)(h,{src:"images/backyard1.jpg",alt:"stairs leading down to pool",width:"30%",renderDelay:"3000"}),Object(l.jsx)(h,{src:"images/backyard2.jpg",alt:"garden with bushes",width:"30%",renderDelay:"2500"}),Object(l.jsx)(h,{src:"images/backyard3.jpg",alt:"pool chairs and garden",width:"30%",renderDelay:"2000"}),Object(l.jsx)(h,{src:"images/backyard4.jpg",alt:"picnic area lit up at night",width:"30%",renderDelay:"1500"}),Object(l.jsx)(h,{src:"images/backyard5.jpg",alt:"path leading to lake",width:"30%",renderDelay:"1000"}),Object(l.jsx)(h,{src:"images/backyard6.jpg",alt:"planters in side yard",width:"30%",renderDelay:"500"})]})};a(27);var u=function(){return Object(l.jsxs)("section",{children:[Object(l.jsx)("h2",{children:"Get an Estimate"}),Object(l.jsx)("p",{children:"Do you want some work done on your backyard? Get an estimate here."}),Object(l.jsxs)("form",{name:"estimate",className:"estimate-form",children:[Object(l.jsxs)("div",{className:"form-row",children:[Object(l.jsx)("label",{children:"Estimate Type"}),Object(l.jsxs)("select",{name:"estimate-type",children:[Object(l.jsx)("option",{value:"backyard-only",children:"Back Yard Only 3"}),Object(l.jsx)("option",{value:"backyard-and-frontyard",children:"Back and Front Yar"}),Object(l.jsx)("option",{value:"frontyard-only",children:"Front Yard Only"}),Object(l.jsx)("option",{value:"other",children:"Other"})]})]}),Object(l.jsxs)("div",{className:"form-row",children:[Object(l.jsx)("label",{children:"Email Address"}),Object(l.jsx)("input",{type:"text",onClick:function(){console.time("onClick event handler");for(var e=0,t=Math.pow(12,7);t>=0;t--)e+=Math.atan(t)*Math.tan(t);console.log("result was ".concat(e)),console.timeEnd("onClick event handler")}})]}),Object(l.jsxs)("div",{className:"form-row",children:[Object(l.jsx)("label",{children:"Project Description"}),Object(l.jsx)("textarea",{})]}),Object(l.jsx)("div",{className:"form-row",children:Object(l.jsx)("button",{type:"submit",children:"Request Estimate"})})]})]})};a(28);var m=function(){return Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)(n.b,{to:"/",activeClassName:"activeNavItem",isActive:function(e,t){return!!t&&"/"===t.pathname},children:"Home"})}),Object(l.jsx)("li",{children:Object(l.jsx)(n.b,{to:"/ourwork",activeClassName:"activeNavItem",children:"Our Work"})}),Object(l.jsx)("li",{children:Object(l.jsx)(n.b,{to:"/getestimate",activeClassName:"activeNavItem",children:"Get Estimate"})})]})},O=a.p+"static/media/header-background.4052223f.png",x=a(11);a(34);var p=function(){var e=Object(c.useState)(localStorage.getItem("latestCLS")||"(measured after next full reload)"),t=Object(o.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)("(tap anywhere to measure)"),s=Object(o.a)(r,2),i=s[0],d=s[1],j=Object(c.useState)("(tap anywhere to measure)"),h=Object(o.a)(j,2),b=h[0],u=h[1];return Object(c.useEffect)((function(){window.addEventListener("load",(function(){Object(x.getCLS)((function(e){localStorage.setItem("latestCLS",e.value),n(e.value)})),Object(x.getFID)((function(e){d(e.value)})),Object(x.getLCP)((function(e){u(e.value)}))}),{once:!0})}),[]),Object(l.jsxs)("div",{className:"web-vitals-bar",children:[Object(l.jsx)("span",{className:"heading",children:"Latest Web Vitals "}),Object(l.jsxs)("span",{className:"web-vital",children:["LCP: ",b]}),Object(l.jsxs)("span",{className:"web-vital",children:["FID: ",i]}),Object(l.jsxs)("span",{className:"web-vital",children:["CLS: ",a]})]})};var v=function(){var e={branch:"main",tags:[],commit:{shortHash:"4c54d56",hash:"4c54d562ee3dc53535590c64ca94de6174d806b9",date:"2021-04-17T02:37:54-04:00",message:"impelment Get Estimate page with form to demonstrate FID"}},t="https://github.com/briandesousa/web-vitals-demo/commit/".concat(e.commit.shortHash);return console.info("[Version Info] ".concat(t," committed on ").concat(e.commit.date)),Object(l.jsxs)("main",{children:[Object(l.jsx)(p,{}),Object(l.jsx)("header",{style:{backgroundImage:"url(".concat(O,")")},children:Object(l.jsx)("div",{className:"wrapper",children:Object(l.jsx)("h1",{children:"Northern Getaway Backyard Solutions"})})}),Object(l.jsx)("nav",{children:Object(l.jsx)("div",{className:"wrapper",children:Object(l.jsx)(m,{})})}),Object(l.jsx)("section",{id:"main",children:Object(l.jsxs)(i.c,{children:[Object(l.jsx)(i.a,{path:"/",component:d,exact:!0}),Object(l.jsx)(i.a,{path:"/ourwork",component:b}),Object(l.jsx)(i.a,{path:"/getestimate",component:u})]})})]})},y=function(e){e&&e instanceof Function&&Promise.resolve().then(a.bind(null,11)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))};s.a.render(Object(l.jsx)(n.a,{basename:"/",children:Object(l.jsx)(v,{})}),document.getElementById("root")),y(console.log)}},[[35,1,2]]]);
//# sourceMappingURL=main.4ba40b46.chunk.js.map