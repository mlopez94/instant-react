(this["webpackJsonpinstant-react"]=this["webpackJsonpinstant-react"]||[]).push([[0],[,,,,,,function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/0.ce0f9167.PNG"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/1.dfb2826c.PNG"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/2.0064286b.PNG"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/3.1bf643bb.PNG"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/4.869ea088.PNG"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/5.46777b57.PNG"},,,,,,function(e,t,a){},,function(e,t,a){var c={"./all/0.PNG":6,"./all/1.PNG":7,"./all/2.PNG":8,"./all/3.PNG":9,"./all/4.PNG":10,"./all/5.PNG":11};function s(e){var t=i(e);return a(t)}function i(e){if(!a.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}s.keys=function(){return Object.keys(c)},s.resolve=i,e.exports=s,s.id=19},function(e,t,a){var c={"./0.PNG":6,"./1.PNG":7,"./2.PNG":8,"./3.PNG":9,"./4.PNG":10,"./5.PNG":11};function s(e){var t=i(e);return a(t)}function i(e){if(!a.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}s.keys=function(){return Object.keys(c)},s.resolve=i,e.exports=s,s.id=20},function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),i=a(12),n=a.n(i),r=(a(17),a(2));function l(e){return e.charAt(0).toUpperCase()+e.slice(1)}var o=a(0);var d=function(e){var t=e.categories,a=e.setCurrentCategory,c=e.currentCategory,s=e.contactSelected,i=e.setContactSelected;return Object(o.jsxs)("header",{className:"flex-row px-1",children:[Object(o.jsx)("h2",{children:Object(o.jsxs)("a",{"data-testid":"link",href:"/",children:[Object(o.jsxs)("span",{role:"img","aria-label":"camera",children:[" ","\ud83d\udc68\u200d\ud83d\udcbb"]})," ","Matt Lopez"]})}),Object(o.jsx)("nav",{children:Object(o.jsx)("ul",{className:"flex-row",children:t.map((function(e){return Object(o.jsx)("li",{className:"mx-1 ".concat(c.name===e.name&&!s&&"navActive"),children:Object(o.jsx)("span",{onClick:function(){a(e),i(!1)},children:l(e.name)})},e.name)}))})})]})},m=a.p+"static/media/cover-image.ff9429a7.jpeg",j=a.p+"static/media/happy-coder.df70b441.png";var u=function(){return Object(o.jsxs)("section",{className:"my-5",children:[Object(o.jsx)("h1",{id:"about",className:"whoAmi",children:"Hi. My name is Matt Lopez. I am a full stack web developer."}),Object(o.jsxs)("div",{className:"flex-row",children:[Object(o.jsx)("img",{src:m,className:"my-2",style:{width:"25%"},alt:"cover"}),Object(o.jsx)("img",{src:j,className:"my-2",style:{width:"25%"},alt:"cover"})]}),Object(o.jsx)("div",{className:"my-2 whoAmi",children:Object(o.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex condimentum molestie. Mauris condimentum lectus ut ornare dignissim. Mauris faucibus urna mi, ac feugiat metus aliquam maximus. Proin aliquam justo nec diam vulputate vestibulum. Aenean sollicitudin nulla at nisi ornare, nec suscipit massa eleifend. Morbi tristique justo vel turpis sollicitudin, et tristique velit convallis. In hac habitasse platea dictumst. Phasellus mattis nunc sed orci consequat laoreet. Praesent id nisl nibh. Curabitur imperdiet ultricies mollis. In hac habitasse platea dictumst."})})]})},b=a(3),h=function(e){var t=e.onClose,c=e.currentPhoto,s=c.name,i=c.description,n=c.category,r=c.index,l=c.repoLink,d=c.siteLink;return Object(o.jsx)("div",{className:"modalBackdrop",children:Object(o.jsxs)("div",{className:"modalContainer",children:[Object(o.jsxs)("h3",{className:"modalTitle",children:[s," "]}),Object(o.jsx)("img",{src:a(19)("./".concat(n,"/").concat(r,".PNG")).default,alt:"current category"}),Object(o.jsx)("p",{children:i}),Object(o.jsx)("button",{type:"button",onClick:t,children:"Close"}),Object(o.jsx)("a",{href:l,className:"link fab fa-github",children:"github"}),Object(o.jsx)("a",{href:d,className:"link fas fa-laptop-code",children:"Site"})]})})},p=function(e){e.category;var t=Object(c.useState)(!1),s=Object(r.a)(t,2),i=s[0],n=s[1],l=Object(c.useState)(),d=Object(r.a)(l,2),m=d[0],j=d[1],u=Object(c.useState)([{name:"Budget Tracker",category:"all",description:"AS AN avid traveler I WANT to be able to track my withdrawals and deposits with or without a data/internet connection SO THAT my account balance is accurate when I am traveling",repoLink:"https://github.com/mlopez94/save-dat-money",siteLink:"https://immense-coast-36352.herokuapp.com/"},{name:"nosql-nocry",category:"all",description:"AS A social media startup WANT an API for my social network that uses a NoSQL database SO THAT my website can handle large amounts of unstructured data",repoLink:"https://github.com/mlopez94/nosql-nocry",siteLink:"https://github.com/mlopez94/nosql-nocry"},{name:"The Tech Blog",category:"all",description:"AS A developer who writes about tech I WANT a CMS-style blog site SO THAT I can publish articles, blog posts, and my thoughts and opinions",repoLink:"https://github.com/mlopez94/lopeml-14",siteLink:"https://murmuring-cliffs-54748.herokuapp.com/"},{name:"Travilon",category:"all",description:"To make travel planning easier by encorporating air-travel recommendations, weather for your destination, and personalized travel itinerary",repoLink:"https://github.com/mlopez94/rp1",siteLink:"https://mlopez94.github.io/rp1/"},{name:"Weather Dashboard",category:"all",description:"This app displays the weather for a city entered in the input field followed by a five day foreceast",repoLink:"https://github.com/mlopez94/weather-dashboard",siteLink:"https://github.com/mlopez94/weather-dashboard"},{name:"Who Am I?",category:"all",description:"A Node.js application that takes information from the input on cmd line and dynamically creates cards for each team member",repoLink:"https://github.com/mlopez94/who-am-i",siteLink:"https://www.youtube.com/watch?v=XjSM_1EjsJ0"}]),p=Object(r.a)(u,1)[0].filter((function(e){return"all"===e.category})),O=function(e,t){j(Object(b.a)(Object(b.a)({},e),{},{index:t})),n(!i)};return Object(o.jsxs)("div",{children:[i&&Object(o.jsx)(h,{onClose:O,currentPhoto:m}),Object(o.jsx)("div",{className:"flex-row",children:p.map((function(e,t){return Object(o.jsx)("img",{src:a(20)("./".concat(t,".PNG")).default,alt:e.name,className:"img-thumbnail mx-1",onClick:function(){return O(e,t)}},e.name)}))})]})};var O=function(e){var t=e.currentCategory,a=t.name,c=t.description;return Object(o.jsxs)("section",{children:[Object(o.jsx)("h1",{"data-testid":"h1tag",children:l(a)}),Object(o.jsx)("p",{children:c}),Object(o.jsx)(p,{category:a})]})},f=a(4),x=a.p+"static/media/contact-me.1a8c31a9.jpg";var v=function(){var e=Object(c.useState)({name:"",email:"",message:""}),t=Object(r.a)(e,2),a=t[0],s=t[1],i=Object(c.useState)(""),n=Object(r.a)(i,2),l=n[0],d=n[1],m=a.name,j=a.email,u=a.message;function h(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);console.log(t),d(t?"":"Your email is invalid.")}else e.target.value.length?d(""):d("".concat(e.target.name," is required."));l||s(Object(b.a)(Object(b.a)({},a),{},Object(f.a)({},e.target.name,e.target.value)))}return Object(o.jsxs)("section",{children:[Object(o.jsx)("img",{src:x,className:"my-2",style:{width:"25%"},alt:"contact-me"}),Object(o.jsx)("div",{children:Object(o.jsxs)("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),console.log(a)},children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(o.jsx)("input",{type:"text",defaultValue:m,onBlur:h,name:"name"})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(o.jsx)("input",{type:"email",defaultValue:j,onBlur:h,name:"email"})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(o.jsx)("textarea",{name:"message",defaultValue:u,onBlur:h,rows:"5"})]}),l&&Object(o.jsx)("div",{children:Object(o.jsx)("p",{className:"error-text",children:l})}),Object(o.jsx)("button",{type:"submit",children:"Submit"})]})})]})};var g=function(){return Object(o.jsx)("div",{id:"footer",className:"flex-row px-1 footer-row",children:Object(o.jsxs)("p",{children:[Object(o.jsx)("a",{href:"https://github.com/mlopez94",className:"fab fa-github",alt:"github",children:"Github"})," | ",Object(o.jsx)("a",{href:"https://https://stackoverflow.com/",className:"fab fa-stack-overflow",alt:"stack",children:"Stack Overflow"})," | ",Object(o.jsx)("a",{href:"https://https://stackoverflow.com/",className:"fab fa-twitter",alt:"twitter",children:"Twitter"})]})})},N=a.p+"static/media/mlopez_resume9-2019.db536d3a.pdf";var y=function(){return Object(o.jsxs)("section",{className:"resSection",children:[Object(o.jsx)("h1",{className:"skillsGraph",children:"My Skills"}),Object(o.jsx)("a",{href:N,download:!0,className:"skillsGraph",children:"Resume"}),Object(o.jsx)("p",{children:"HTML"}),Object(o.jsx)("div",{className:"container2",children:Object(o.jsx)("div",{className:"skills html",children:"90%"})}),Object(o.jsx)("p",{children:"CSS"}),Object(o.jsx)("div",{className:"container2",children:Object(o.jsx)("div",{className:"skills css",children:"80%"})}),Object(o.jsx)("p",{children:"JavaScript"}),Object(o.jsx)("div",{className:"container2",children:Object(o.jsx)("div",{className:"skills js",children:"65%"})}),Object(o.jsx)("p",{children:"React"}),Object(o.jsx)("div",{className:"container2",children:Object(o.jsx)("div",{className:"skills react",children:"75%"})}),Object(o.jsx)("p",{children:"SQL"}),Object(o.jsx)("div",{className:"container2",children:Object(o.jsx)("div",{className:"skills sql",children:"85%"})}),Object(o.jsx)("p",{children:"Node.js"}),Object(o.jsx)("div",{className:"container2",children:Object(o.jsx)("div",{className:"skills node",children:"90%"})}),Object(o.jsx)("p",{children:"MongoDB"}),Object(o.jsx)("div",{className:"container2",children:Object(o.jsx)("div",{className:"skills mongo",children:"80%"})}),Object(o.jsx)("p",{children:"Git"}),Object(o.jsx)("div",{className:"container2",children:Object(o.jsx)("div",{className:"skills git",children:"90%"})})]})};var k=function(){var e=Object(c.useState)([{name:"portfolio",description:"Projects that I have completed"},{name:"resume",description:"Resume of past work"},{name:"about",description:"about me fool"},{name:"contact",description:"contact me"}]),t=Object(r.a)(e,2),a=t[0],s=t[1],i=Object(c.useState)(a[2]),n=Object(r.a)(i,2),l=n[0],m=n[1],j=Object(c.useState)(!1),b=Object(r.a)(j,2),h=b[0],p=b[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)(d,{categories:a,setCurrentCategory:m,currentCategory:l,contactSelected:h,setContactSelected:p,setCategories:s}),Object(o.jsxs)("main",{children:["portfolio"===l.name&&Object(o.jsx)(O,{currentCategory:l}),"about"===l.name&&Object(o.jsx)(u,{}),"contact"===l.name&&Object(o.jsx)(v,{}),"resume"===l.name&&Object(o.jsx)(y,{})]}),Object(o.jsx)(g,{})]})},w=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,22)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,n=t.getTTFB;a(e),c(e),s(e),i(e),n(e)}))};n.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(k,{})}),document.getElementById("root")),w()}],[[21,1,2]]]);
//# sourceMappingURL=main.f9706b38.chunk.js.map