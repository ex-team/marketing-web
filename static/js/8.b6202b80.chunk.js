(this["webpackJsonppublic-apps"]=this["webpackJsonppublic-apps"]||[]).push([[8],{61:function(e,t,s){"use strict";var a=s(64),c=s.n(a);c.a.defaults.xsrfCookieName="csrftoken",c.a.defaults.xsrfHeaderName="X-CSRFToken",c.a.defaults.headers.common["X-Requested-With"]="XMLHttpRequest",c.a.interceptors.request.use((function(e){return e}),(function(e){return console.error(e),Promise.reject(e)}));var n=function(e){return new Promise((function(t,s){c.a.get("".concat("https://www.karomap.com/backend/","/").concat(e)).then((function(e){t(e.data)}),(function(e){s(e)}))}))},i={getBlogs:function(){return n("post/?limit=0&offset=0&type=blogs")},getDetailPost:function(e){return n("post/".concat(e,"/"))},getCategoryBlogs:function(){return n("category/")}};t.a=i},97:function(e,t,s){"use strict";s.r(t);var a=s(62),c=s(8),n=s(9),i=s(23),o=s(11),r=s(10),l=s(0),d=s.n(l),h=s(17),u=s(61),j=s(58),b=s(57),p=s(1);var g=function(e){var t=Object(l.useState)(!0),s=Object(j.a)(t,2),a=s[0],c=s[1];return Object(l.useEffect)((function(){var e=setTimeout((function(){c(!1)}),600);return function(){return clearTimeout(e)}})),Object(p.jsx)("div",{className:"hero-container",style:{backgroundImage:"url(".concat(e.data.banner,")")},children:a?Object(p.jsxs)("div",{className:"container title-heading p-justify-center",children:[Object(p.jsx)(b.a,{width:"100%",height:"30px",className:"p-mb-2 p-mt-2"}),Object(p.jsx)(b.a,{width:"100%",className:"p-mb-2 p-mt-2"}),Object(p.jsx)(b.a,{width:"100%",className:"p-mb-2 p-mt-2"})]}):Object(p.jsxs)("div",{className:"container title-heading p-text-center",children:[Object(p.jsx)("h1",{children:e.data.heading}),Object(p.jsx)("p",{children:e.data.subheading})]})})},m=s(73),v=s(93),O=s(92),x=s(15),f=s(4),N=function(e){Object(o.a)(s,e);var t=Object(r.a)(s);function s(){var e;Object(c.a)(this,s);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={results:[],basicFirst:0,basicRows:9,pageNumber:0,searchKey:"",sortKey:"",loading:!0,sortOptions:[]},e.onPageChange=function(t){e.setState({basicFirst:t.first,pageNumber:t.page}),window.scrollTo({top:0,behavior:"smooth"})},e.getSearch=function(t){var s=t.target.value;if(e.setState({searchKey:s}),""!==s){var c=Object(a.a)(e.props.data).filter((function(e){return Object.values(e).join(" ").toLowerCase().includes(s.toLowerCase())}));e.setState({results:c})}else e.setState({results:e.props.data})},e.onSortCategory=function(t){var s=t.value;if(e.setState({sortKey:s}),"all"!==s){var c=Object(a.a)(e.props.data).filter((function(e){return e.categories.map((function(e){return e})),e}));e.setState({results:c})}else e.setState({results:e.props.data})},e}return Object(n.a)(s,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e){e!==this.props&&(this.updateData(),this.updateCategory(),this.setLoading())}},{key:"updateData",value:function(){var e=Object(a.a)(this.props.data).slice(this.state.pageNumber*this.state.basicRows,this.state.pageNumber*this.state.basicRows+this.state.basicRows);this.setState({results:e})}},{key:"updateCategory",value:function(){var e=this.props.categories.map((function(e){return{id:e.id,label:e.title,value:e.slug}}));this.setState({sortOptions:[].concat(Object(a.a)(e),[{id:0,label:"All Category",value:"all"}])})}},{key:"setLoading",value:function(){var e=this;setTimeout((function(){e.setState({loading:!1})}),700)}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this;return Object(p.jsx)("div",{className:"main-container",children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsxs)("div",{className:"filter-section p-grid",children:[Object(p.jsx)("div",{className:"category p-col p-xl-4",children:Object(p.jsx)(m.a,{options:this.state.sortOptions,value:this.state.sortKey,placeholder:"Select category",onChange:this.onSortCategory})}),Object(p.jsx)("div",{className:"search-container p-col p-xl-4 p-xl-offset-4",children:Object(p.jsx)("div",{className:"search",children:Object(p.jsxs)("span",{className:"p-input-icon-right",children:[Object(p.jsx)("i",{className:"pi pi-search"}),Object(p.jsx)(v.a,{placeholder:"Search",id:"search",value:this.state.searchKey,onChange:this.getSearch})]})})})]}),Object(p.jsxs)("div",{className:"content-section p-pt-4",children:[this.state.loading?Object(p.jsxs)("div",{className:"p-grid",children:[Object(p.jsxs)("div",{className:"p-col p-md-6 p-xl-4 blog-box",children:[Object(p.jsx)("div",{className:"blog-cover",children:Object(p.jsx)(b.a,{width:"100%",height:"100%"})}),Object(p.jsxs)("div",{className:"blog-heading",children:[Object(p.jsx)(b.a,{width:"75%",height:"30px",className:"p-mb-2 p-mt-2"}),Object(p.jsx)(b.a,{width:"100%"})]})]}),Object(p.jsxs)("div",{className:"p-col p-md-6 p-xl-4 blog-box",children:[Object(p.jsx)("div",{className:"blog-cover",children:Object(p.jsx)(b.a,{width:"100%",height:"100%"})}),Object(p.jsxs)("div",{className:"blog-heading",children:[Object(p.jsx)(b.a,{width:"75%",height:"30px",className:"p-mb-2 p-mt-2"}),Object(p.jsx)(b.a,{width:"100%"})]})]}),Object(p.jsxs)("div",{className:"p-col p-md-6 p-xl-4 blog-box",children:[Object(p.jsx)("div",{className:"blog-cover",children:Object(p.jsx)(b.a,{width:"100%",height:"100%"})}),Object(p.jsxs)("div",{className:"blog-heading",children:[Object(p.jsx)(b.a,{width:"75%",height:"30px",className:"p-mb-2 p-mt-2"}),Object(p.jsx)(b.a,{width:"100%"})]})]})]}):Object(p.jsx)("div",{className:"p-grid",children:this.state.results.map((function(t,s){return Object(p.jsxs)("div",{className:"p-col p-md-6 p-xl-4 blog-box",children:[Object(p.jsxs)("div",{className:"blog-cover p-shadow-3",children:[Object(p.jsx)("ul",{children:t.categories.map((function(e,t){return Object(p.jsx)("li",{children:Object(p.jsx)("div",{className:"btn-label-category p-shadow-3",children:Object(p.jsx)("span",{className:"label-category",children:e.title})})},t)}))}),Object(p.jsx)(x.b,{to:"".concat(e.props.match.url,"/").concat(t.slug),children:Object(p.jsx)("img",{src:t.featured_image,alt:t.title})})]}),Object(p.jsxs)("div",{className:"blog-heading",children:[Object(p.jsx)("h1",{children:Object(p.jsx)(x.b,{to:"".concat(e.props.match.url,"/").concat(t.slug),children:t.title})}),Object(p.jsxs)("span",{className:"meta",children:[Object(p.jsx)("i",{className:"pi pi-user p-mr-2"})," ",null!=t.author.username?t.author.username:"Unknown"," |"," ",new Date(t.created_at).toDateString()]}),Object(p.jsx)("div",{className:"description",children:Object(p.jsx)("div",{className:"body",dangerouslySetInnerHTML:{__html:t.body}})})]})]},s)}))}),Object(p.jsx)("div",{className:"paginator-container",children:Object(p.jsx)(O.a,{first:this.state.basicFirst,rows:this.state.basicRows,totalRecords:this.props.totalRecords,onPageChange:this.onPageChange})})]})]})})}}]),s}(d.a.Component),w=Object(f.f)(N),y=function(e){Object(o.a)(s,e);var t=Object(r.a)(s);function s(e){var n;return Object(c.a)(this,s),(n=t.call(this,e)).state={pages:h.f[2],blogs:[],categories:[],totalRecords:0},n.getPostAPI=function(){u.a.getCategoryBlogs().then((function(e){n.setState({categories:Object(a.a)(e)})})).catch((function(e){console.error(e)})),u.a.getBlogs().then((function(e){n.setState({blogs:Object(a.a)(e),totalRecords:e.length})})).catch((function(e){console.error(e)}))},n.scrollNavigation=function(){var e=document.documentElement,t=(window.pageYOffset||e.scrollTop)-(e.clientTop||0),s=document.getElementById("topnav");t>80?null===s||void 0===s||s.classList.add("nav-sticky"):null===s||void 0===s||s.classList.remove("nav-sticky")},n.scrollNavigation=n.scrollNavigation.bind(Object(i.a)(n)),n}return Object(n.a)(s,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.scrollNavigation,!0),this.getPostAPI()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollNavigation,!0)}},{key:"render",value:function(){return Object(p.jsxs)(d.a.Fragment,{children:[Object(p.jsx)(g,{data:this.state.pages}),Object(p.jsx)(w,{data:this.state.blogs,categories:this.state.categories,totalRecords:this.state.blogs.length})]})}}]),s}(l.Component);t.default=y}}]);
//# sourceMappingURL=8.b6202b80.chunk.js.map