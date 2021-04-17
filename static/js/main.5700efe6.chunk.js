(this["webpackJsonpweb-vitals-demo"]=this["webpackJsonpweb-vitals-demo"]||[]).push([[0],{23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},27:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(8),r=a(17),s=a.n(r),i=(a(23),a(24),a(2)),o=a(7),l=(a(25),a(0));var d=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),a=t[0],n=t[1];return Object(c.useEffect)((function(){var e=setTimeout((function(){return n(!0)}),4e3);return function(){return clearTimeout(e)}}),[a]),Object(l.jsx)("section",{children:Object(l.jsxs)("div",{className:"welcome-content",children:[Object(l.jsxs)("div",{className:"welcome-images",children:[Object(l.jsx)("img",{src:"images/backyard1.jpg"}),Object(l.jsx)("img",{src:"images/backyard2.jpg"})]}),Object(l.jsxs)("div",{className:"welcome-text",children:[Object(l.jsx)("h2",{children:"Welcome backyard dweller!"}),Object(l.jsx)("div",{className:"loading-indicator ".concat(a?"hidden":""),children:"Loading..."}),Object(l.jsxs)("div",{className:"".concat(a?"":"hidden"),children:[Object(l.jsx)("p",{children:"Is your backyard in disarray?"}),Object(l.jsx)("p",{children:"Do you peek over your neighbor's fence and think 'I wish I had that'?"}),Object(l.jsx)("p",{children:"Are you tired of looking out your back window at the same old turf paradise?"}),Object(l.jsx)("p",{children:"You have arrived at the right place. We here at Northern Getaway Backyward Solutions want to turn your vomit-inducing embarrassment of a backyard into the ultimate pandemic-era getaway."}),Object(l.jsxs)("p",{children:["We will work with you to develop a masterful architectural plan to turn your dreams into reality. Then we will start to clear out the cob",Object(l.jsx)("strong",{children:"web"}),"s and re",Object(l.jsx)("strong",{children:"vital"}),"ize your backyard space."]}),Object(l.jsx)("p",{children:"The best part is that we will only take a modest cut of all that cash you have managed to save up throughout the pandemic."}),Object(l.jsxs)("p",{children:["Check out ",Object(l.jsx)("a",{href:"/#/ourwork",children:"our work"})," to see it and believe it!"]})]})]})]})})};function j(e){var t=Object(c.useState)(!1),a=Object(o.a)(t,2),n=a[0],r=a[1],s={objectFit:"contain",margin:"5px",display:n?e.display:"none",width:e.width,height:e.height};return Object(c.useEffect)((function(){var t=setTimeout((function(){return r(!0)}),e.renderDelay);return function(){return clearTimeout(t)}}),[e.renderDelay]),Object(l.jsx)("img",{src:"".concat(e.src),alt:e.altText,style:s})}j.defaultProps={renderDelay:5e3,display:"inline-block",width:"",height:"",altText:""};var b=j;var h=function(){return Object(l.jsxs)("section",{children:[Object(l.jsx)("h2",{children:"Our Work"}),Object(l.jsx)("p",{children:"Check out our latest creations."}),Object(l.jsx)(b,{src:"images/backyard1.jpg",alt:"stairs leading down to pool",width:"30%",renderDelay:"3000"}),Object(l.jsx)(b,{src:"images/backyard2.jpg",alt:"garden with bushes",width:"30%",renderDelay:"2500"}),Object(l.jsx)(b,{src:"images/backyard3.jpg",alt:"pool chairs and garden",width:"30%",renderDelay:"2000"}),Object(l.jsx)(b,{src:"images/backyard4.jpg",alt:"picnic area lit up at night",width:"30%",renderDelay:"1500"}),Object(l.jsx)(b,{src:"images/backyard5.jpg",alt:"path leading to lake",width:"30%",renderDelay:"1000"}),Object(l.jsx)(b,{src:"images/backyard6.jpg",alt:"planters in side yard",width:"30%",renderDelay:"500"})]})};var u=function(){return Object(l.jsxs)("section",{children:[Object(l.jsx)("h2",{children:"Get an Estimate"}),Object(l.jsx)("p",{children:"Do you want some work done on your backyard? Get an estimate here."})]})};a(27);var m=function(){return Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)(n.b,{to:"/",activeClassName:"activeNavItem",isActive:function(e,t){return!!t&&"/"===t.pathname},children:"Home"})}),Object(l.jsx)("li",{children:Object(l.jsx)(n.b,{to:"/ourwork",activeClassName:"activeNavItem",children:"Our Work"})}),Object(l.jsx)("li",{children:Object(l.jsx)(n.b,{to:"/getestimate",activeClassName:"activeNavItem",children:"Get Estimate"})})]})},O=a.p+"static/media/header-background.4052223f.png",x=a(11);a(33);var p=function(){var e=Object(c.useState)(localStorage.getItem("latestCLS")||"(measured after next full reload)"),t=Object(o.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)("(tap anywhere to measure)"),s=Object(o.a)(r,2),i=s[0],d=s[1],j=Object(c.useState)("(tap anywhere to measure)"),b=Object(o.a)(j,2),h=b[0],u=b[1];return Object(c.useEffect)((function(){window.addEventListener("load",(function(){Object(x.getCLS)((function(e){localStorage.setItem("latestCLS",e.value),n(e.value)})),Object(x.getFID)((function(e){d(e.value)})),Object(x.getLCP)((function(e){u(e.value)}))}),{once:!0})}),[]),Object(l.jsxs)("div",{className:"web-vitals-bar",children:[Object(l.jsx)("span",{className:"heading",children:"Latest Web Vitals "}),Object(l.jsxs)("span",{className:"web-vital",children:["LCP: ",h]}),Object(l.jsxs)("span",{className:"web-vital",children:["FID: ",i]}),Object(l.jsxs)("span",{className:"web-vital",children:["CLS: ",a]})]})};var g=function(){var e={branch:"main",tags:[],commit:{shortHash:"5df25b0",hash:"5df25b098b1bad374da1ffa1fb873bf8676a7c41",date:"2021-04-16T21:02:07-04:00",message:"fix responsive layout issues on small screens"}},t="https://github.com/briandesousa/web-vitals-demo/commit/".concat(e.commit.shortHash);return console.info("[Version Info] ".concat(t," committed on ").concat(e.commit.date)),Object(l.jsxs)("main",{children:[Object(l.jsx)(p,{}),Object(l.jsx)("header",{style:{backgroundImage:"url(".concat(O,")")},children:Object(l.jsx)("div",{className:"wrapper",children:Object(l.jsx)("h1",{children:"Northern Getaway Backyard Solutions"})})}),Object(l.jsx)("nav",{children:Object(l.jsx)("div",{className:"wrapper",children:Object(l.jsx)(m,{})})}),Object(l.jsx)("section",{id:"main",children:Object(l.jsxs)(i.c,{children:[Object(l.jsx)(i.a,{path:"/",component:d,exact:!0}),Object(l.jsx)(i.a,{path:"/ourwork",component:h}),Object(l.jsx)(i.a,{path:"/getestimate",component:u})]})})]})},v=function(e){e&&e instanceof Function&&Promise.resolve().then(a.bind(null,11)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))};s.a.render(Object(l.jsx)(n.a,{basename:"/",children:Object(l.jsx)(g,{})}),document.getElementById("root")),v(console.log)}},[[34,1,2]]]);
//# sourceMappingURL=main.5700efe6.chunk.js.map