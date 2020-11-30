(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{40:function(e,t,c){},72:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(1),o=c.n(r),s=c(18),a=c.n(s),l=(c(40),c(11)),i=function(){return Object(n.jsxs)("div",{className:"flex justify-between p-7 items-center font-light",children:[Object(n.jsx)(l.b,{to:"/",className:"text-3xl",children:"Post Center"}),Object(n.jsxs)("ul",{className:"flex text-lg",children:[Object(n.jsx)(l.b,{to:"/",className:"border-b border-white hover:border-black",children:Object(n.jsx)("li",{children:"Home"})}),Object(n.jsx)(l.b,{to:"/post",className:"ml-5 border-b border-white hover:border-black",children:Object(n.jsx)("li",{children:"Post"})}),Object(n.jsx)(l.b,{to:"/about",className:"ml-5 border-b border-white hover:border-black",children:Object(n.jsx)("li",{children:"About"})})]})]})},b=c(8),d=c(10),j=c.n(d),u=c(13),h=c(14),x=function(e){var t=e.postInfo,c=e.onChangeEdits,r=e.onClickSendEdit;return Object(n.jsxs)("form",{className:"flex flex-col mt-5",children:[Object(n.jsx)("input",{type:"text",id:"title",placeholder:"".concat(t.title," (unchanged)"),onChange:c,className:"border-2 rounded-xl border-gray-400 focus:border-gray-500 focus:outline-none p-5 mb-5"}),Object(n.jsx)("textarea",{type:"text",id:"body",placeholder:"".concat(t.body," (unchanged)"),onChange:c,className:"border-2 rounded-xl border-gray-400 focus:border-gray-500 focus:outline-none p-5"}),Object(n.jsx)("button",{onClick:r,className:"border-2 rounded-full border-gray-400 cursor-pointer hover:border-gray-500 focus:outline-none transform active:scale-95 self-end mr-20 mt-10 px-10 py-2",children:"Update"})]})},p=c(21),m=c.n(p),f={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",textAlign:"center"}};m.a.setAppElement("#root");var O=function(e){var t=e.postInfo,c=e.onClickDelete,o=Object(r.useState)(!1),s=Object(b.a)(o,2),a=s[0],l=s[1],i=Object(r.useState)({title:t.title,body:t.body}),d=Object(b.a)(i,2),p=d[0],O=d[1],g=Object(r.useState)({title:t.title,body:t.body}),y=Object(b.a)(g,2),N=y[0],v=y[1],k=Object(r.useState)(!1),C=Object(b.a)(k,2),w=C[0],S=C[1];return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"flex items-center justify-between border-b border-grey-500",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{className:"text-xl mt-5",children:p.title}),Object(n.jsx)("h2",{className:"text-sm",children:t.postDate.slice(0,10)}),Object(n.jsx)("p",{className:"mt-4 px-6 pb-4 leading-6",children:p.body})]},t._id),Object(n.jsxs)("div",{className:"flex flex-col items-center justify-evenly ",children:[Object(n.jsx)("a",{onClick:function(){return c(t._id)},className:"cursor-pointer mb-5 border-b border-white hover:border-black",children:"X"}),Object(n.jsx)("button",{onClick:function(){l(!a)},className:"border-b border-white hover:border-black",children:"Edit"})]})]}),a?Object(n.jsx)(x,{postInfo:t,onChangeEdits:function(e){v(Object(h.a)(Object(h.a)({},N),{},Object(u.a)({},e.target.id,e.target.value)))},onClickSendEdit:function(e){e.preventDefault(),j.a.patch("https://post-center-backend.herokuapp.com/post/update/".concat(t._id),N).then((function(e){O({title:N.title,body:N.body}),S(!0),l(!1)})).catch((function(e){return console.log(e)}))}}):null,Object(n.jsxs)(m.a,{isOpen:w,contentLabel:"Minimal Modal Example",style:f,children:[Object(n.jsx)("h1",{className:"mb-5",children:"Post has been updated!"}),Object(n.jsx)("a",{onClick:function(){return S(!1)},className:"border-b border-white hover:border-black cursor-pointer",children:"OK"})]})]})};var g=function(){var e=Object(r.useState)([]),t=Object(b.a)(e,2),c=t[0],o=t[1];Object(r.useEffect)((function(){j.a.get("https://post-center-backend.herokuapp.com/posts").then((function(e){o(e.data.reverse())}))}),[]);var s=function(e){j.a.delete("https://post-center-backend.herokuapp.com/post/".concat(e)).then((function(e){console.log(e)})).catch((function(e){console.log(e)})),o(c.filter((function(t){return t._id!==e})))};return Object(n.jsxs)("div",{className:"container mx-auto px-2 bg-white h-screen",children:[Object(n.jsx)("h1",{className:"text-2xl font-",children:"Recent Posts"}),c.map((function(e){return Object(n.jsx)(O,{postInfo:e,onClickDelete:s},e._id)}))]})},y=function(){var e=Object(r.useState)({}),t=Object(b.a)(e,2),c=t[0],o=t[1],s=Object(r.useState)(!1),a=Object(b.a)(s,2),l=a[0],i=a[1],d=Object(r.useState)(!1),x=Object(b.a)(d,2),p=x[0],m=x[1],f=function(e){o(Object(h.a)(Object(h.a)({},c),{},Object(u.a)({},e.target.id,e.target.value)))};return Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault(),j.a.post("https://post-center-backend.herokuapp.com/post",c).then((function(e){m(!0),setTimeout((function(){m(!1)}),3e3)})).catch((function(e){i(!0),setTimeout((function(){i(!1)}),3e3)}))},className:"flex flex-col",children:[Object(n.jsx)("input",{type:"text",id:"title",onChange:f,required:!0,className:"border-2 rounded-xl border-gray-400 focus:border-gray-500 focus:outline-none p-5 mb-5",placeholder:"Title"}),Object(n.jsx)("textarea",{type:"text",id:"body",onChange:f,required:!0,className:"border-2 rounded-xl border-gray-400 focus:border-gray-500 focus:outline-none p-5",placeholder:"Tell your story here..."}),Object(n.jsx)("button",{className:"border-2 rounded-full border-gray-400 cursor-pointer hover:border-gray-500 focus:outline-none transform active:scale-95 self-end mr-20 mt-10 px-10 py-2",children:"Post!"}),p?Object(n.jsx)("p",{className:"self-center",children:"Thanks for your submission!"}):null,l?Object(n.jsx)("p",{className:"self-center",children:"That didn't work try again!"}):null]})},N=function(){return Object(n.jsxs)("div",{className:"container mx-auto px-2 bg-white h-screen",children:[Object(n.jsx)("h1",{className:"text-3xl mb-5",children:"About"}),Object(n.jsx)("p",{className:"mt-4 px-6 pb-4 leading-6",children:"Hello! Post Center is a project focusing on practicing both working in the frontend and backend. Here is a list of technologies, frameworks, and libraries used for this project:"}),Object(n.jsx)("h2",{className:"text-2xl mt-5",children:"Frontend"}),Object(n.jsxs)("ul",{className:"list-disc mx-8",children:[Object(n.jsx)("li",{children:"React"}),Object(n.jsx)("li",{children:"React-Router-DOM"}),Object(n.jsx)("li",{children:"Axios"}),Object(n.jsx)("li",{children:"Tailwindcss"})]}),Object(n.jsx)("h2",{className:"text-2xl mt-5",children:"Backend"}),Object(n.jsxs)("ul",{className:"list-disc mx-8",children:[Object(n.jsx)("li",{children:"NodeJS"}),Object(n.jsx)("li",{children:"Express"}),Object(n.jsx)("li",{children:"MongoDB"}),Object(n.jsx)("li",{children:"Mongoose"}),Object(n.jsx)("li",{children:"Dotenv"})]})]})},v=c(2);var k=function(){return Object(n.jsx)(l.a,{children:Object(n.jsxs)("div",{className:"container mx-auto px-2 bg-white h-screen",children:[Object(n.jsx)(i,{}),Object(n.jsx)(v.a,{exact:!0,path:"/",component:g}),Object(n.jsx)(v.a,{exact:!0,path:"/post",component:y}),Object(n.jsx)(v.a,{exact:!0,path:"/about",component:N})]})})},C=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,73)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),o(e),s(e)}))};a.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(k,{})}),document.getElementById("root")),C()}},[[72,1,2]]]);
//# sourceMappingURL=main.0e298f8f.chunk.js.map