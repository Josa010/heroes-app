(this["webpackJsonpheroes-app"]=this["webpackJsonpheroes-app"]||[]).push([[0],{29:function(e,a,r){},35:function(e,a,r){},36:function(e,a,r){},50:function(e,a,r){"use strict";r.r(a);var t=r(1),c=r(21),s=r.n(c),n=r(10),i=Object(t.createContext)(),o=r(4),l="[auth] login",h="[auth] logout",j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case l:return Object(o.a)(Object(o.a)({},a.payload),{},{logged:!0});case h:return{logged:!1};default:return e}},b=r(8),d=r(2),u=r(0),m=function(e){var a=e.history,r=Object(t.useContext)(i).dispatch;return Object(u.jsxs)("div",{className:"container mt-5 text-primary",children:[Object(u.jsx)("h1",{children:"Login"}),Object(u.jsx)("hr",{}),Object(u.jsx)("button",{className:"btn btn-primary",onClick:function(){var e=localStorage.getItem("lastPath")||"/";r({type:l,payload:{name:"Josa"}}),a.replace(e)},children:"Login"})]})},p=[{id:"dc-batman",superhero:"Batman",publisher:"DC Comics",alter_ego:"Bruce Wayne",first_appearance:"Detective Comics #27",characters:"Bruce Wayne"},{id:"dc-superman",superhero:"Superman",publisher:"DC Comics",alter_ego:"Kal-El",first_appearance:"Action Comics #1",characters:"Kal-El"},{id:"dc-flash",superhero:"Flash",publisher:"DC Comics",alter_ego:"Jay Garrick",first_appearance:"Flash Comics #1",characters:"Jay Garrick, Barry Allen, Wally West, Bart Allen"},{id:"dc-green",superhero:"Green Lantern",publisher:"DC Comics",alter_ego:"Alan Scott",first_appearance:"All-American Comics #16",characters:"Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz"},{id:"dc-arrow",superhero:"Green Arrow",publisher:"DC Comics",alter_ego:"Oliver Queen",first_appearance:"More Fun Comics #73",characters:"Oliver Queen"},{id:"dc-wonder",superhero:"Wonder Woman",publisher:"DC Comics",alter_ego:"Princess Diana",first_appearance:"All Star Comics #8",characters:"Princess Diana"},{id:"dc-martian",superhero:"Martian Manhunter",publisher:"DC Comics",alter_ego:"J'onn J'onzz",first_appearance:"Detective Comics #225",characters:"Martian Manhunter"},{id:"dc-robin",superhero:"Robin/Nightwing",publisher:"DC Comics",alter_ego:"Dick Grayson",first_appearance:"Detective Comics #38",characters:"Dick Grayson"},{id:"dc-blue",superhero:"Blue Beetle",publisher:"DC Comics",alter_ego:"Dan Garret",first_appearance:"Mystery Men Comics #1",characters:"Dan Garret, Ted Kord, Jaime Reyes"},{id:"dc-black",superhero:"Black Canary",publisher:"DC Comics",alter_ego:"Dinah Drake",first_appearance:"Flash Comics #86",characters:"Dinah Drake, Dinah Lance"},{id:"marvel-spider",superhero:"Spider Man",publisher:"Marvel Comics",alter_ego:"Peter Parker",first_appearance:"Amazing Fantasy #15",characters:"Peter Parker"},{id:"marvel-captain",superhero:"Captain America",publisher:"Marvel Comics",alter_ego:"Steve Rogers",first_appearance:"Captain America Comics #1",characters:"Steve Rogers"},{id:"marvel-iron",superhero:"Iron Man",publisher:"Marvel Comics",alter_ego:"Tony Stark",first_appearance:"Tales of Suspense #39",characters:"Tony Stark"},{id:"marvel-thor",superhero:"Thor",publisher:"Marvel Comics",alter_ego:"Thor Odinson",first_appearance:"Journey into Myster #83",characters:"Thor Odinson"},{id:"marvel-hulk",superhero:"Hulk",publisher:"Marvel Comics",alter_ego:"Bruce Banner",first_appearance:"The Incredible Hulk #1",characters:"Bruce Banner"},{id:"marvel-wolverine",superhero:"Wolverine",publisher:"Marvel Comics",alter_ego:"James Howlett",first_appearance:"The Incredible Hulk #180",characters:"James Howlett"},{id:"marvel-daredevil",superhero:"Daredevil",publisher:"Marvel Comics",alter_ego:"Matthew Michael Murdock",first_appearance:"Daredevil #1",characters:"Matthew Michael Murdock"},{id:"marvel-hawkeye",superhero:"Hawkeye",publisher:"Marvel Comics",alter_ego:"Clinton Francis Barton",first_appearance:"Tales of Suspense #57",characters:"Clinton Francis Barton"},{id:"marvel-cyclops",superhero:"Cyclops",publisher:"Marvel Comics",alter_ego:"Scott Summers",first_appearance:"X-Men #1",characters:"Scott Summers"},{id:"marvel-silver",superhero:"Silver Surfer",publisher:"Marvel Comics",alter_ego:"Norrin Radd",first_appearance:"The Fantastic Four #48",characters:"Norrin Radd"}],v=(r(29),function(e){var a=e.id,r=e.superhero,t=e.publisher,c=e.alter_ego,s=e.first_appearance,n=e.characters;return Object(u.jsxs)(b.b,{to:"./hero/".concat(a),className:"my-card",children:[Object(u.jsx)("img",{src:"./assets/heroes/".concat(a,".jpg"),className:"img img-responsive ",alt:r}),Object(u.jsx)("div",{className:"profile-name",children:r}),Object(u.jsx)("div",{className:"profile-position",children:c}),Object(u.jsx)("div",{className:"profile-overview",children:Object(u.jsx)("div",{className:"profile-overview",children:Object(u.jsx)("div",{className:"row",children:Object(u.jsxs)("div",{className:"col-ms-4",children:[Object(u.jsx)("h3",{children:t}),Object(u.jsxs)("p",{children:["Primera aparici\xf3n: ",Object(u.jsx)("br",{}),s]}),c!==n&&Object(u.jsx)("p",{children:n})]})})})})]})}),O=function(e){var a=e.publisher,r=Object(t.useMemo)((function(){return function(e){if(!["DC Comics","Marvel Comics"].includes(e))throw new Error('Publisher "'.concat(e,'" no es correcto'));return p.filter((function(a){return a.publisher===e}))}(a)}),[a]);return Object(u.jsx)("div",{className:"row row-cols-1 row-cols-lg-4 g-2 g-lg-3 animate__animated animate__fadeIn",children:r.map((function(e){return Object(u.jsx)(v,Object(o.a)({},e),e.id)}))})},x=(r(35),function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"dc-img-container mt-4",children:Object(u.jsx)("img",{src:"../assets/DC_Comics_logo.png",alt:"Logo de DC"})}),Object(u.jsx)("hr",{}),Object(u.jsx)(O,{publisher:"DC Comics"})]})}),g=function(e){var a=e.history,r=Object(d.i)().heroeId,c=Object(t.useMemo)((function(){return e=r,p.find((function(a){return a.id===e}));var e}),[r]);if(!c)return Object(u.jsx)(d.a,{to:"/"});var s=c.superhero,n=c.publisher,i=c.alter_ego,o=c.first_appearance,l=c.characters;return Object(u.jsxs)("div",{className:"row mt-5 text-white",children:[Object(u.jsx)("div",{className:"col-6 col-lg-4",children:Object(u.jsx)("img",{src:"../assets/heroes/".concat(r,".jpg"),alt:s,className:"img-thumbnail img-fluid animate__animated animate__fadeInLeft"})}),Object(u.jsxs)("div",{className:"col-6 col-lg-8 animate__animated animate__fadeIn",children:[Object(u.jsxs)("h3",{children:[s," "]}),Object(u.jsxs)("ul",{className:"list-group list-group-flush ",children:[Object(u.jsxs)("li",{className:"list-group-item bg-transparent text-white",children:[Object(u.jsx)("b",{children:"Alter ego:"})," ",i," "]}),Object(u.jsxs)("li",{className:"list-group-item bg-transparent text-white",children:[Object(u.jsx)("b",{children:"Publisher:"})," ",n," "]}),Object(u.jsxs)("li",{className:"list-group-item bg-transparent text-white",children:[Object(u.jsx)("b",{children:"First apperance:"})," ",o," "]})]}),Object(u.jsx)("h5",{children:"characters"}),Object(u.jsx)("p",{children:l}),Object(u.jsx)("button",{className:"btn btn-outline-info",onClick:function(){a.length<=2?("Marvel Comics"===c.publisher&&a.push("/"),"DC Comics"===c.publisher&&a.push("/dc")):a.goBack()},children:"Return"})]})]})},f=(r(36),function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"marvel-img-container mt-4",children:Object(u.jsx)("img",{src:"../assets/Marvel_Logo.svg",alt:"Logo de Marvel"})}),Object(u.jsx)("hr",{}),Object(u.jsx)(O,{publisher:"Marvel Comics"})]})}),C=r(23),_=r.n(C),N=r(12),y=function(e){var a=e.history,r=Object(d.h)(),c=_.a.parse(r.search).q,s=void 0===c?"":c,i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=Object(t.useState)(e),r=Object(n.a)(a,2),c=r[0],s=r[1];return[c,function(e){var a=e.target;s(Object(o.a)(Object(o.a)({},c),{},Object(N.a)({},a.name,a.value)))},function(){s(e)}]}({searchText:s}),l=Object(n.a)(i,2),h=l[0],j=l[1],b=h.searchText,m=Object(t.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return""===e?[]:(e=e.toLocaleLowerCase(),p.filter((function(a){return a.superhero.toLocaleLowerCase().includes(e)})))}(s)}),[s]);return Object(u.jsxs)("div",{className:"text-white",children:[Object(u.jsxs)("div",{className:"my-5",children:[Object(u.jsx)("h1",{children:"Search"}),Object(u.jsx)("hr",{})]}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)("div",{className:"col-12 col-xl-5",children:[Object(u.jsx)("h4",{className:"mb-4",children:"Search Form"}),Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a.push("?q=".concat(b))},children:[Object(u.jsx)("input",{type:"text",placeholder:"Find your hero",className:"form-control",name:"searchText",autoComplete:"off",value:b,onChange:j}),Object(u.jsx)("div",{className:"d-grid mt-2 mb-5",children:Object(u.jsx)("button",{type:"submit",className:"btn btn-block btn-outline-primary",children:"Search"})})]})]}),Object(u.jsxs)("div",{className:"col-12 col-xl-7",children:[Object(u.jsx)("h4",{className:"mb-2 text-center",children:"Result"}),""===s&&Object(u.jsx)("div",{className:"alert alert-info",children:"Search a hero"}),""!==s&&0===m.length&&Object(u.jsxs)("div",{className:"alert alert-danger",children:["There is no a hero with ",s," "]}),Object(u.jsx)("div",{className:"animate__animated animate__fadeInLeft text-center",children:m.map((function(e){return Object(u.jsx)(v,Object(o.a)({},e),e.id)}))})]})]})]})},M=function(){var e=Object(t.useContext)(i),a=e.user.name,r=e.dispatch,c=Object(d.g)();return Object(u.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark ps-2",children:Object(u.jsxs)("div",{className:"container-fluid",children:[Object(u.jsx)(b.b,{className:"navbar-brand",to:"/",children:"Asociaciones"}),Object(u.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(u.jsx)("span",{className:"navbar-toggler-icon"})}),Object(u.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(u.jsxs)("div",{className:"navbar-nav",children:[Object(u.jsx)(b.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/marvel",children:"Marvel"}),Object(u.jsx)(b.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/dc",children:"DC"}),Object(u.jsx)(b.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/search",children:"Search"})]}),Object(u.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(u.jsx)("span",{className:"nav-item nav-link text-info",children:a}),Object(u.jsx)("button",{className:"nav-item nav-link btn",onClick:function(){c.replace("/login"),r({type:h})},children:"Logout"})]})]})]})})},S=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(M,{}),Object(u.jsx)("div",{className:"container mt-2",children:Object(u.jsxs)(d.d,{children:[Object(u.jsx)(d.b,{exact:!0,path:"/marvel",component:f}),Object(u.jsx)(d.b,{exact:!0,path:"/hero/:heroeId",component:g}),Object(u.jsx)(d.b,{exact:!0,path:"/dc/",component:x}),Object(u.jsx)(d.b,{exact:!0,path:"/search/",component:y}),Object(u.jsx)(d.a,{to:"/marvel"})]})})]})},k=r(13),w=function(e){var a=e.isAuthenticated,r=e.component,t=Object(k.a)(e,["isAuthenticated","component"]);return localStorage.setItem("lastPath",t.location.pathname),Object(u.jsx)(d.b,Object(o.a)(Object(o.a)({},t),{},{component:function(e){return a?Object(u.jsx)(r,Object(o.a)({},e)):Object(u.jsx)(d.a,{to:"/login"})}}))},D=function(e){var a=e.isAuthenticated,r=e.component,t=Object(k.a)(e,["isAuthenticated","component"]);return Object(u.jsx)(d.b,Object(o.a)(Object(o.a)({},t),{},{component:function(e){return a?Object(u.jsx)(d.a,{to:"/"}):Object(u.jsx)(r,Object(o.a)({},e))}}))},A=function(){var e=Object(t.useContext)(i).user;return Object(u.jsx)(b.a,{children:Object(u.jsx)("div",{children:Object(u.jsxs)(d.d,{children:[Object(u.jsx)(D,{exact:!0,path:"/login",component:m,isAuthenticated:e.logged}),Object(u.jsx)(w,{path:"/",component:S,isAuthenticated:e.logged})]})})})},B=function(){return JSON.parse(localStorage.getItem("user"))||{logged:!1}},J=function(){var e=Object(t.useReducer)(j,{},B),a=Object(n.a)(e,2),r=a[0],c=a[1];return Object(t.useEffect)((function(){localStorage.setItem("user",JSON.stringify(r))}),[r]),Object(u.jsxs)(i.Provider,{value:{user:r,dispatch:c},children:[Object(u.jsx)(A,{}),";"]})};s.a.render(Object(u.jsx)(J,{}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.43cf434e.chunk.js.map