(this["webpackJsonppublic-apps"]=this["webpackJsonppublic-apps"]||[]).push([[7],{62:function(t,e,a){"use strict";var s=a(64),c=a.n(s);c.a.defaults.xsrfCookieName="csrftoken",c.a.defaults.xsrfHeaderName="X-CSRFToken",c.a.defaults.headers.common["X-Requested-With"]="XMLHttpRequest",c.a.interceptors.request.use((function(t){return t}),(function(t){return console.error(t),Promise.reject(t)}));var i=function(t){return new Promise((function(e,a){c.a.get("".concat("https://www.karomap.com/backend","/").concat(t)).then((function(t){e(t.data)}),(function(t){a(t)}))}))},n={getBlogs:function(){return i("post/?limit=0&offset=0&type=blogs")},getDetailPost:function(t){return i("post/".concat(t,"/"))},getCategoryBlogs:function(){return i("category/")}};e.a=n},96:function(t,e,a){"use strict";a.r(e);var s=a(63),c=a(8),i=a(9),n=a(23),l=a(11),r=a(10),o=a(0),d=a.n(o),h=a(62),j=a(58),m=a(57),u=a(1);var p=function(t){var e=t.data,a=Object(o.useState)(!0),s=Object(j.a)(a,2),c=s[0],i=s[1];return Object(o.useEffect)((function(){var t=setTimeout((function(){i(!1)}),600);return function(){return clearTimeout(t)}})),Object(u.jsx)("div",{className:"hero-container",style:{backgroundImage:"url(".concat(e.featured_image,")")},children:c?Object(u.jsxs)("div",{className:"container title-heading p-justify-center",children:[Object(u.jsx)(m.a,{width:"100%",height:"30px",className:"p-mb-2 p-mt-2"}),Object(u.jsx)(m.a,{width:"100%",className:"p-mb-2 p-mt-2"}),Object(u.jsx)(m.a,{width:"100%",className:"p-mb-2 p-mt-2"})]}):Object(u.jsxs)("div",{className:"container title-heading p-text-center",children:[Object(u.jsx)("h1",{children:e.title}),Object(u.jsxs)("span",{className:"meta",children:[Object(u.jsx)("i",{className:"pi pi-calendar p-mr-2"})," ",new Date(e.created_at).toDateString()]})]})})},b=a(15),g=function(t){Object(l.a)(a,t);var e=Object(r.a)(a);function a(){var t;Object(c.a)(this,a);for(var s=arguments.length,i=new Array(s),n=0;n<s;n++)i[n]=arguments[n];return(t=e.call.apply(e,[this].concat(i))).state={data:{title:"",body:"",featured_image:"",author:{username:""}},tags:[],latest:[],loading:!0},t}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(t){t!==this.props&&(this.updateData(),this.setLoading(),this.updateLatest())}},{key:"updateData",value:function(){var t=this.props.data;this.setState({data:t,tags:t.tags})}},{key:"updateLatest",value:function(){var t=this.props.latest;this.setState({latest:t})}},{key:"setLoading",value:function(){var t=this;setTimeout((function(){t.setState({loading:!1})}),700)}},{key:"render",value:function(){var t=this;return Object(u.jsx)("div",{className:"main-container",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"content-container p-grid",children:[Object(u.jsxs)("div",{className:"left-content p-col p-lg-8",children:[this.state.loading?Object(u.jsxs)("div",{className:"heading p-mb-4",children:[Object(u.jsx)(m.a,{width:"75%",height:"30px",className:"p-mb-2 p-mt-2"}),Object(u.jsx)(m.a,{width:"50%",height:"10px"})]}):Object(u.jsxs)("div",{className:"heading p-mb-4",children:[Object(u.jsx)("h1",{children:this.state.data.title}),Object(u.jsxs)("div",{className:"meta",children:[Object(u.jsx)("i",{className:"pi pi-user p-mr-2"})," ",this.state.data.author.username," |"," ",Object(u.jsx)("i",{className:"pi pi-tags"}),Object(u.jsx)("ul",{children:this.state.tags.map((function(t,e){return Object(u.jsxs)("li",{className:"tags",children:[t.title,","]},e)}))})]})]}),Object(u.jsx)("div",{className:"featured-image",children:this.state.loading?Object(u.jsx)(m.a,{width:"100%",height:"100%"}):Object(u.jsx)("img",{className:"p-shadow-3",src:this.state.data.featured_image,alt:this.state.data.title})}),this.state.loading?Object(u.jsxs)("div",{children:[Object(u.jsx)(m.a,{width:"100%",className:"p-mt-2"}),Object(u.jsx)(m.a,{width:"100%",className:"p-mt-2"}),Object(u.jsx)(m.a,{width:"100%",className:"p-mt-2"})]}):Object(u.jsx)("p",{className:"p-text-justify",dangerouslySetInnerHTML:{__html:this.state.data.body}})]}),Object(u.jsxs)("div",{className:"right-content p-col p-lg-4",children:[Object(u.jsx)("h5",{children:"Recent Blogs"}),Object(u.jsx)("div",{className:"custom-skeleton p-pt-4",children:Object(u.jsx)("ul",{className:"p-m-0 p-p-0",children:this.state.latest.slice(0,5).map((function(e,a){return t.state.loading?Object(u.jsx)("li",{className:"p-mb-3",children:Object(u.jsxs)("div",{className:"p-d-flex",children:[Object(u.jsx)(m.a,{shape:"circle",size:"4rem",className:"p-mr-2"}),Object(u.jsxs)("div",{style:{flex:"1"},children:[Object(u.jsx)(m.a,{width:"100%",className:"p-mb-2"}),Object(u.jsx)(m.a,{width:"75%"})]})]})},a):Object(u.jsx)("li",{className:"p-mb-3",children:Object(u.jsxs)("div",{className:"p-grid blogs",children:[Object(u.jsx)("div",{className:"p-col-3",children:Object(u.jsx)("div",{className:"thumbnail-blog p-shadow-3",children:Object(u.jsx)("img",{src:e.featured_image,alt:e.title})})}),Object(u.jsx)("div",{className:"p-col-9",children:Object(u.jsxs)("div",{className:"heading-blogs",style:{flex:"1"},children:[Object(u.jsx)("h1",{children:Object(u.jsx)(b.b,{to:e.slug,children:e.title})}),Object(u.jsx)("div",{className:"body",dangerouslySetInnerHTML:{__html:e.body}})]})})]})},a)}))})})]})]})})})}}]),a}(d.a.Component),O=function(t){Object(l.a)(a,t);var e=Object(r.a)(a);function a(t){var i;return Object(c.a)(this,a),(i=e.call(this,t)).params=void 0,i.state={blog:{},latest:[]},i.scrollNavigation=function(){var t=document.documentElement,e=(window.pageYOffset||t.scrollTop)-(t.clientTop||0),a=document.getElementById("topnav");e>80?null===a||void 0===a||a.classList.add("nav-sticky"):null===a||void 0===a||a.classList.remove("nav-sticky")},i.getLatest=function(){h.a.getBlogs().then((function(t){i.setState({latest:Object(s.a)(t)})})).catch((function(t){console.error(t)}))},i.scrollNavigation=i.scrollNavigation.bind(Object(n.a)(i)),i}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.getData(),this.getLatest(),window.addEventListener("scroll",this.scrollNavigation,!0)}},{key:"componentDidUpdate",value:function(t){t.history.location.pathname!==this.params.match.url&&this.getData()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollNavigation,!0)}},{key:"getData",value:function(){var t=this;this.params=this.props;var e=this.params.match.params.slug;this.params.match&&e&&h.a.getDetailPost(e).then((function(e){t.setState({blog:e})}))}},{key:"render",value:function(){return Object(u.jsxs)(d.a.Fragment,{children:[Object(u.jsx)(p,{data:this.state.blog}),Object(u.jsx)(g,{data:this.state.blog,latest:this.state.latest})]})}}]),a}(o.Component);e.default=O}}]);
//# sourceMappingURL=7.2d5fd49f.chunk.js.map