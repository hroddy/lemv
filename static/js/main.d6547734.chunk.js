(this.webpackJsonplemv=this.webpackJsonplemv||[]).push([[0],{112:function(e,t,n){"use strict";function a(e){return e.charAt(0).toUpperCase()+e.slice(1)}function r(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}n.r(t),n.d(t,"capitalizeFirstLetter",(function(){return a})),n.d(t,"validateEmail",(function(){return r}))},116:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(29),c=n.n(i),s=(n(69),n(12)),o=n(174),l=(n(99),n(78)),j=n.p+"static/media/hero-1.68106b99.png",u=n.p+"static/media/hero-2.bf9a5e84.png",d=n.p+"static/media/hero-3.9708ca82.png",h=n(2),m=function(){return Object(h.jsxs)(l.Carousel,{autoPlay:!0,infiniteLoop:!0,interval:3e3,animationHandler:"fade",renderThumbs:function(){},children:[Object(h.jsx)("div",{children:Object(h.jsx)("img",{alt:"vegetabes on a table",src:j})}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{alt:"hands prepare a pizza with tomatoes",src:u})}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{alt:"hands touching lettuce in a garden",src:d})})]})},b=n(176),O=n(175);var x=function(e){return Object(h.jsxs)("section",{children:[Object(h.jsx)(m,{updateCurrentPage:e.updateCurrentPage}),Object(h.jsxs)(O.a,{children:[Object(h.jsx)(b.a,{component:"h2",variant:"h2",my:3,align:"center",justify:"center",children:"This is fake text"}),Object(h.jsx)(b.a,{variant:"body-1",my:3,align:"center",justify:"center",children:"This is fake text This is fake text This is fake text This is fake text"})]})]})},f=n(4),g=n(173),p=n(170),v=n(178),y=n(177),w=n(171),C=n.p+"static/media/lemv-logo-2.9a07aee9.png",k=Object(p.a)((function(e){return{logoClass:Object(f.a)({width:200,height:200},e.breakpoints.down("xs"),{height:100,width:100})}}));var P=function(e){var t=e.updateCurrentPage,n=k();return Object(h.jsx)(o.a,{sx:{flexGrow:1},children:Object(h.jsx)(y.a,{position:"fixed",children:Object(h.jsxs)(g.a,{container:!0,spacing:6,direction:"row",justifyContent:"center",alignItems:"center",children:[Object(h.jsx)(g.a,{item:!0,children:Object(h.jsx)(w.a,{href:"#how",onClick:function(){return t("How")},color:"primary",children:"How"})}),Object(h.jsx)(g.a,{item:!0,children:Object(h.jsx)(w.a,{href:"#benefits",onClick:function(){return t("Benefits")},color:"primary",children:"Benefits"})}),Object(h.jsx)(g.a,{item:!0,mb:1,children:Object(h.jsx)(v.a,{href:"#Home",onClick:function(){return t("Home")},children:Object(h.jsx)("img",{src:C,className:n.logoClass,alt:"Livermore Eat More Vegetables"})})}),Object(h.jsx)(g.a,{item:!0,children:Object(h.jsx)(w.a,{href:"#who",onClick:function(){return t("Who")},color:"primary",children:"Who"})}),Object(h.jsx)(g.a,{item:!0,children:Object(h.jsx)(w.a,{href:"#other",onClick:function(){return t("Other")},color:"primary",children:"Other"})})]})})})};var S=function(){return Object(h.jsx)(O.a,{children:Object(h.jsx)(b.a,{variant:"h2",children:"How"})})};var H=function(){return Object(h.jsx)(O.a,{children:Object(h.jsx)(b.a,{variant:"h2",children:"Benefits"})})};var B=function(){return Object(h.jsx)(O.a,{children:Object(h.jsx)(b.a,{variant:"h2",children:"Who"})})};var z=function(){return Object(h.jsx)(O.a,{children:Object(h.jsx)(b.a,{variant:"h2",children:"Other"})})},T=n(169),W=n(112).validateEmail,E=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)(""),c=Object(s.a)(i,2),o=c[0],l=c[1],j=Object(a.useState)(""),u=Object(s.a)(j,2),d=u[0],m=u[1],x=Object(a.useState)(""),f=Object(s.a)(x,2),p=f[0],v=f[1],y=function(e){"email"===e.target.name&&(W(e.target.value)?(r(e.target.value),v("")):v("This is not a valid email."));"name"===e.target.name&&(e.target.value.length>=1?(l(e.target.value),v("")):v("You must include a name.")),"message"===e.target.name&&(e.target.value.length>=1?(m(e.target.value),v("")):v("You must include a message."))};return Object(h.jsxs)(O.a,{children:[Object(h.jsx)(b.a,{id:"contact",component:"h2",variant:"h2",align:"center",fontStyle:"italic",gutterBottom:!0,children:"Contact"}),Object(h.jsx)(g.a,{container:!0,spacing:1,direction:"column",justifyContent:"center",alignItems:"center",my:3,children:Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log("Message submitted to hannah.roddy@gmail.com from ".concat(n,"!"));var t={name:o,email:n,message:d};console.log(t)},children:[Object(h.jsx)(g.a,{item:!0,sm:12,mb:3,children:Object(h.jsx)(T.a,{name:"name",id:"outlined-basic",label:"Name",variant:"outlined",onBlur:y})}),Object(h.jsx)(g.a,{item:!0,sm:12,my:3,children:Object(h.jsx)(T.a,{name:"email",id:"outlined-basic",label:"Email",variant:"outlined",onBlur:y})}),Object(h.jsx)(g.a,{item:!0,md:12,my:3,children:Object(h.jsx)(T.a,{name:"message",id:"outlined-multiline-static",multiline:!0,rows:7,label:"Message",variant:"outlined",onBlur:y})}),p&&Object(h.jsx)("p",{children:p}),Object(h.jsx)(g.a,{item:!0,sm:12,my:2,align:"center",children:Object(h.jsx)(w.a,{variant:"contained",color:"primary",href:"mailto:hannah.roddy@gmail.com",type:"submit",children:"Send message"})})]})})]})},I=function(e){var t=e.updateCurrentPage;return Object(h.jsx)(O.a,{children:Object(h.jsx)(g.a,{container:!0,spacing:1,direction:"row",justifyContent:"center",alignItems:"center",children:Object(h.jsxs)(g.a,{item:!0,xs:12,children:[Object(h.jsx)(b.a,{id:"broken",component:"h2",variant:"h2",fontStyle:"italic",my:3,align:"center",color:"primary",children:"Whoops, this page is broken!"}),Object(h.jsx)(g.a,{item:!0,xs:12,my:7,align:"center",children:Object(h.jsx)(w.a,{variant:"outlined",color:"primary",onClick:function(){return t("Home")},children:"Go home"})})]})})})},M=n(82),F=n.n(M),L=function(){return Object(h.jsx)("div",{style:{position:"fixed",width:"100vw",bottom:0,zIndex:10},children:Object(h.jsx)(o.a,{component:"footer",children:Object(h.jsxs)(y.a,{children:[Object(h.jsx)(F.a,{sx:{width:12}}),Object(h.jsxs)(b.a,{sx:{fontSize:12},align:"left",justify:"center",color:"tertiary",children:["Made by Hannah Roddy, ",(new Date).getFullYear()]})]})})})},A=n(16),D=n(83),Y=Object(D.a)({palette:{primary:{main:"#495057"},secondary:{main:"#ffffff"},tertiary:{main:"#FFD289"},tonalOffset:.2}});var G=function(){var e=Object(a.useState)("Home"),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(h.jsx)(A.c,{theme:Y,children:Object(h.jsxs)("div",{children:[Object(h.jsx)(P,{updateCurrentPage:r}),Object(h.jsx)(o.a,{children:function(){switch(n){case"Home":return Object(h.jsx)(x,{updateCurrentPage:r});case"How":return Object(h.jsx)(S,{updateCurrentPage:r});case"Benefits":return Object(h.jsx)(H,{updateCurrentPage:r});case"Who":return Object(h.jsx)(B,{updateCurrentPage:r});case"Other":return Object(h.jsx)(z,{updateCurrentPage:r});case"Contact":return Object(h.jsx)(E,{updateCurrentPage:r});default:return Object(h.jsx)(I,{updateCurrentPage:r})}}()}),Object(h.jsx)(L,{})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(G,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},69:function(e,t,n){}},[[116,1,2]]]);
//# sourceMappingURL=main.d6547734.chunk.js.map