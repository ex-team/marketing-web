(this["webpackJsonppublic-apps"]=this["webpackJsonppublic-apps"]||[]).push([[8],{65:function(e,t,s){"use strict";s.r(t);var c=s(8),i=s(9),a=s(11),n=s(10),l=s(0),r=s.n(l),d=s(17),j=s(56),h=s(57),b=s(1);var o=function(e){var t=Object(l.useState)(e.dataAbouts),s=Object(j.a)(t,2),c=s[0],i=s[1],a=Object(l.useState)(!0),n=Object(j.a)(a,2),r=n[0],d=n[1];return Object(l.useEffect)((function(){var t=setTimeout((function(){i(e.dataAbouts),d(!1)}),600);return function(){return clearTimeout(t)}})),Object(b.jsx)("div",{className:"about-container",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("div",{className:"featured-apps ",children:Object(b.jsx)("div",{className:"p-grid p-justify-center"})}),Object(b.jsx)("div",{className:"about-description",children:r?Object(b.jsx)(h.a,{width:"100%",height:"50px"}):Object(b.jsx)("p",{className:"description",children:c.abouts})})]})})},m=s(32),p=s(16);var u=function(e){var t=Object(l.useState)(e.data),s=Object(j.a)(t,2),c=s[0],i=s[1],a=Object(l.useState)(!0),n=Object(j.a)(a,2),r=n[0],d=n[1];return Object(l.useEffect)((function(){var t=setTimeout((function(){i(e.data),d(!1)}),600);return function(){return clearTimeout(t)}})),Object(b.jsx)("div",{className:"blog-container",children:Object(b.jsxs)("div",{className:"container",children:[r?Object(b.jsxs)("div",{className:"heading-section",children:[Object(b.jsx)(h.a,{width:"30%",height:"30px",className:"p-mb-2 p-mt-2"}),Object(b.jsx)(h.a,{width:"50%"})]}):Object(b.jsxs)("div",{className:"heading-section",children:[Object(b.jsx)("h1",{children:e.heading}),Object(b.jsx)("p",{children:e.subheading})]}),Object(b.jsx)("div",{className:"content-section",children:Object(b.jsx)("div",{className:"p-grid",children:c.slice(0,6).map((function(e,t){return r?Object(b.jsxs)("div",{className:"p-col p-md-6 p-xl-4 blog-box",children:[Object(b.jsx)("div",{className:"blog-cover",children:Object(b.jsx)(h.a,{width:"100%",height:"100%"})}),Object(b.jsxs)("div",{className:"blog-heading",children:[Object(b.jsx)(h.a,{width:"100%",height:"30px",className:"p-mb-2 p-mt-2"}),Object(b.jsx)(h.a,{width:"75%"})]})]},t):Object(b.jsxs)("div",{className:"p-col p-md-6 p-xl-4 blog-box",children:[Object(b.jsx)("div",{className:"blog-cover p-shadow-4",children:Object(b.jsx)(p.b,{to:"/blogs/"+e.slug,children:Object(b.jsx)("img",{src:e.images,alt:e.title})})}),Object(b.jsxs)("div",{className:"blog-heading",children:[Object(b.jsx)("h1",{children:Object(b.jsx)(p.b,{to:"/blogs/"+e.slug,children:e.title})}),Object(b.jsx)("p",{children:e.description.length>120?e.description.slice(0,120)+"...":e.description})]})]},t)}))})}),Object(b.jsx)("div",{className:"more p-d-flex p-jc-center",children:Object(b.jsx)(p.b,{to:"/blogs",children:r?Object(b.jsx)(h.a,{width:"20%",height:"30px"}):Object(b.jsx)(m.a,{label:"Explore Blog"})})})]})})},O=s(60);var x=function(e){var t=e.data,s=Object(l.useState)(!0),c=Object(j.a)(s,2),i=c[0],a=c[1],n=new O.a("#industrySlider",{type:"slider",startAt:0,autoplay:15e3,perView:2,focusAt:0,bound:!0,gap:26,rewind:!0,breakpoints:{768:{perView:1},1120:{perView:1},1440:{perView:2}}});return Object(l.useEffect)((function(){n.mount();var e=setTimeout((function(){a(!1)}),600);return function(){return clearTimeout(e)}})),Object(b.jsx)("div",{className:"industry-container",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"content-section",children:Object(b.jsxs)("div",{className:"p-grid",children:[Object(b.jsxs)("div",{className:"p-col-12 p-md-6 p-lg-4 industry-description",children:[i?Object(b.jsxs)("div",{className:"heading-section",children:[Object(b.jsx)(h.a,{width:"50%",height:"30px",className:"p-mb-2 p-mt-2"}),Object(b.jsx)(h.a,{width:"100%"})]}):Object(b.jsxs)("div",{className:"heading-section",children:[Object(b.jsx)("h1",{children:e.heading}),Object(b.jsx)("p",{children:e.subheading})]}),Object(b.jsx)("ul",{children:t.map((function(e,t){return i?Object(b.jsx)("li",{children:Object(b.jsx)(h.a,{width:"50%"})},t):Object(b.jsxs)("li",{children:[Object(b.jsx)("i",{className:"pi pi-check-circle"}),e.title]},t)}))})]}),Object(b.jsx)("div",{className:"p-col-12 p-md-6 p-lg-8 industry-picture",children:Object(b.jsx)("div",{className:"slider-banner",children:Object(b.jsx)("div",{className:"glide-wrapper",children:Object(b.jsxs)("div",{className:"glide",id:"industrySlider",children:[Object(b.jsx)("div",{className:"glide__track","data-glide-el":"track",children:Object(b.jsx)("ul",{className:"glide__slides p-align-center",children:t.map((function(e,t){return i?Object(b.jsx)("li",{className:"glide__slide p-shadow-3",children:Object(b.jsxs)("div",{className:"content p-justify-center",children:[Object(b.jsxs)("div",{className:"heading-title centered",children:[Object(b.jsx)(h.a,{width:"50%",height:"30px",className:"p-mb-2 p-mt-2"}),Object(b.jsx)(h.a,{width:"100%"})]}),Object(b.jsx)(h.a,{width:"100%",height:"100%"})]})},t):Object(b.jsx)("li",{className:"glide__slide p-shadow-4",children:Object(b.jsxs)("div",{className:"content p-justify-center",children:[Object(b.jsxs)("div",{className:"heading-title centered",children:[Object(b.jsx)("h1",{children:e.title}),Object(b.jsx)("p",{children:e.description})]}),Object(b.jsx)("img",{className:"image-banner",src:e.images,alt:e.title})]})},t)}))})}),Object(b.jsxs)("div",{className:"glide__arrows container","data-glide-el":"controls",children:[Object(b.jsx)(m.a,{icon:"pi pi-chevron-left",className:"p-button-rounded p-button-info glide__arrow glide__arrow--left","data-glide-dir":"<"}),Object(b.jsx)(m.a,{icon:"pi pi-chevron-right",className:"p-button-rounded p-button-info glide__arrow glide__arrow--right","data-glide-dir":">"})]})]})})})})]})})})})};var g=function(e){var t=e.data,s=new O.a("#partnerSlider",{type:"carousel",startAt:0,autoplay:5e3,perView:6,breakpoints:{480:{perView:3},320:{perView:2}}});return Object(l.useEffect)((function(){s.mount()})),Object(b.jsx)("div",{className:"partner-container",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"justify-content-center",children:Object(b.jsx)("div",{className:"glide",id:"partnerSlider",children:Object(b.jsx)("div",{className:"glide__track","data-glide-el":"track",children:Object(b.jsx)("ul",{className:"glide__slides p-align-center",children:t.map((function(e,t){return Object(b.jsx)("li",{className:"glide__slide text-center",children:Object(b.jsx)("img",{className:"avatar avatar-client",src:e.images,alt:""})},t)}))})})})})})})};var v=function(e){var t=e.data,s=e.data[0],c=e.data[1],i=e.data[2],a=Object(l.useState)(!1),n=Object(j.a)(a,2),r=n[0],d=n[1],h=Object(l.useState)(""),o=Object(j.a)(h,2),p=o[0],u=o[1],O=Object(l.useState)(""),x=Object(j.a)(O,2),g=x[0],v=x[1],N=function(e,t){u(e),v(t),d(!0)};return Object(b.jsx)("div",{className:"sample-container",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"content-section",children:[Object(b.jsxs)("div",{className:"p-grid",children:[Object(b.jsx)("div",{className:"sample p-col-12 p-md-7",children:Object(b.jsxs)("div",{className:"video-embed p-shadow-4",children:[Object(b.jsx)("img",{src:s.thumbnail,alt:s.title}),Object(b.jsx)("div",{className:"play-btn",children:Object(b.jsx)(m.a,{icon:"pi pi-play",className:"p-button-rounded p-button-primary",onClick:function(){return N(s.url,s.title)}})})]})}),Object(b.jsx)("div",{className:"sample p-col-12 p-md-5",children:Object(b.jsxs)("div",{className:"video-embed p-shadow-4",children:[Object(b.jsx)("img",{src:c.thumbnail,alt:c.title}),Object(b.jsx)("div",{className:"play-btn",children:Object(b.jsx)(m.a,{icon:"pi pi-play",className:"p-button-rounded p-button-primary",onClick:function(){return N(c.url,c.title)}})})]})})]}),Object(b.jsxs)("div",{className:"p-grid",children:[Object(b.jsx)("div",{className:"sample p-col-12 p-md-6",children:Object(b.jsxs)("div",{className:"video-embed p-shadow-4",children:[Object(b.jsx)("img",{src:i.thumbnail,alt:i.title}),Object(b.jsx)("div",{className:"play-btn",children:Object(b.jsx)(m.a,{icon:"pi pi-play",className:"p-button-rounded p-button-primary",onClick:function(){return N(i.url,i.title)}})})]})}),Object(b.jsx)("div",{className:"sample p-col-12 p-md-6",children:Object(b.jsxs)("div",{className:"heading-section",children:[Object(b.jsx)("h1",{children:e.heading}),Object(b.jsx)("p",{children:e.subheading}),Object(b.jsx)("ul",{children:t.map((function(e,t){return Object(b.jsxs)("li",{children:[Object(b.jsx)("i",{className:"pi pi-check-circle"}),e.title]},t)}))}),Object(b.jsx)("div",{className:"more p-d-flex p-jc-left",children:Object(b.jsx)("a",{href:"https://wa.me/6289623498800/",target:"_blank",rel:"noopener noreferrer",children:Object(b.jsx)(m.a,{label:"Hubungi Kami"})})})]})})]}),Object(b.jsxs)("div",{className:r?"modal open":"modal",children:[Object(b.jsx)("iframe",{src:p,allow:"autoplay; encrypted-media",title:"video"}),Object(b.jsx)(m.a,{icon:"pi pi-times",className:"p-button-rounded p-button-danger",onClick:function(){return d(!1)}}),Object(b.jsx)("div",{className:"description p-justify-center p-text-center",children:Object(b.jsx)("h1",{children:g})})]})]})})})};var N=function(e){var t=e.data,s=new O.a("#bannerSlider",{type:"carousel",startAt:0,autoplay:1e4,perView:1,focusAt:"center",hoverpause:!0,keyboard:!0,gap:0});return Object(l.useEffect)((function(){s.mount()})),Object(b.jsx)("div",{className:"home-slider-container",children:Object(b.jsx)("div",{className:"slider-banner",children:Object(b.jsx)("div",{className:"glide-wrapper",children:Object(b.jsxs)("div",{className:"glide",id:"bannerSlider",children:[Object(b.jsx)("div",{className:"glide__track","data-glide-el":"track",children:Object(b.jsx)("ul",{className:"glide__slides p-align-center",children:t.map((function(e,t){return Object(b.jsx)("li",{className:"glide__slide text-center",children:Object(b.jsxs)("div",{className:"content p-justify-center",children:[Object(b.jsxs)("div",{className:"heading-title centered",children:[Object(b.jsx)("h1",{children:e.title}),Object(b.jsx)("p",{children:e.description}),""!==e.url&&Object(b.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",children:Object(b.jsx)(m.a,{label:e.btn_name})})]}),Object(b.jsx)("img",{className:"image-banner",src:e.images,alt:e.title})]})},t)}))})}),Object(b.jsxs)("div",{className:"glide__arrows","data-glide-el":"controls",children:[Object(b.jsx)("button",{className:"glide__arrow glide__arrow--left","data-glide-dir":"<",children:Object(b.jsx)("i",{className:"pi pi-chevron-left"})}),Object(b.jsx)("button",{className:"glide__arrow glide__arrow--right","data-glide-dir":">",children:Object(b.jsx)("i",{className:"pi pi-chevron-right"})})]})]})})})})};var f=function(e){var t=e.dataFeatures;return Object(b.jsx)("div",{className:"home-hero-container",style:{backgroundImage:"url(".concat(e.picture,")")},children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"heading-title",children:[Object(b.jsx)("h1",{children:e.title}),Object(b.jsx)("p",{children:e.description}),Object(b.jsx)("div",{className:"features p-grid p-justify-start",children:t.map((function(e,t){return Object(b.jsx)("div",{className:"p-col-12 p-md-3 p-lg-2",children:Object(b.jsxs)("p",{children:[Object(b.jsx)("i",{className:"pi pi-check-circle"}),e.title]})},t)}))}),Object(b.jsx)("div",{className:"hero-btn",children:Object(b.jsx)("a",{href:e.url,children:Object(b.jsx)(m.a,{label:e.button})})})]})})})};var _=function(e){var t=Object(l.useState)(e.data),s=Object(j.a)(t,2),c=s[0],i=s[1],a=Object(l.useState)(!0),n=Object(j.a)(a,2),r=n[0],d=n[1];return Object(l.useEffect)((function(){var t=setTimeout((function(){i(e.data),d(!1)}),600);return function(){return clearTimeout(t)}})),console.log(window.innerWidth),Object(b.jsx)("div",{className:"thematic-container",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"content-section",children:Object(b.jsxs)("div",{className:"p-grid",children:[Object(b.jsx)("div",{className:"p-col-12 p-lg-4",children:r?Object(b.jsxs)("div",{className:"heading-section",children:[Object(b.jsx)(h.a,{width:"50%",height:"30px",className:"p-mb-2 p-mt-2"}),Object(b.jsx)(h.a,{width:"100%"})]}):Object(b.jsxs)("div",{className:"heading-section",children:[Object(b.jsx)("h1",{children:e.heading}),Object(b.jsx)("p",{children:e.subheading}),Object(b.jsx)("ul",{className:"thematic-heading",children:c.map((function(e,t){return Object(b.jsxs)("li",{children:[Object(b.jsx)("i",{className:"pi pi-check-circle"})," ",e.title]},t)}))})]})}),Object(b.jsx)("div",{className:"thematics-banner p-col-12 p-lg-8",children:r?Object(b.jsxs)("div",{className:"p-grid p-justify-center",children:[Object(b.jsx)("div",{className:"thematics p-col-12 p-md-6",children:Object(b.jsx)("div",{className:"thematic p-shadow-4",children:Object(b.jsx)(h.a,{width:"100%",height:"100%"})})}),Object(b.jsx)("div",{className:"thematics p-col-12 p-md-6",children:Object(b.jsx)("div",{className:"thematic p-shadow-4",children:Object(b.jsx)(h.a,{width:"100%",height:"100%"})})})]}):Object(b.jsxs)("div",{className:"p-grid p-justify-center",children:[Object(b.jsx)("div",{className:"thematics p-col-12 p-md-6",children:Object(b.jsx)("div",{className:"thematic p-shadow-4",children:Object(b.jsx)("img",{src:e.thematics_banner1,alt:""})})}),Object(b.jsx)("div",{className:"thematics p-col-12 p-md-6",children:Object(b.jsx)("div",{className:"thematic p-shadow-4",children:Object(b.jsx)("img",{src:e.thematics_banner2,alt:""})})})]})})]})})})})};var w=function(e){return Object(b.jsxs)("div",{className:"home-hero-container",children:[Object(b.jsx)("video",{src:e.video,autoPlay:!0,loop:!0,muted:!0}),Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"heading-title",children:[Object(b.jsx)("h1",{children:e.title}),Object(b.jsx)("p",{children:e.description}),Object(b.jsx)("div",{className:"hero-btn",children:Object(b.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",children:Object(b.jsx)(m.a,{label:e.button})})})]})})]})},y=function(e){Object(a.a)(s,e);var t=Object(n.a)(s);function s(){var e;Object(c.a)(this,s);for(var i=arguments.length,a=new Array(i),n=0;n<i;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={homes:d.e,sliders:d.k,features:d.c,abouts:d.a,industries:d.f,services:d.j,thematics:d.l,samples:d.i,blogs:d.b,partners:d.h},e.scrollNavigation=function(){var e=document.documentElement,t=(window.pageYOffset||e.scrollTop)-(e.clientTop||0),s=document.getElementById("topnav");t>80?null===s||void 0===s||s.classList.add("nav-sticky"):null===s||void 0===s||s.classList.remove("nav-sticky")},e}return Object(i.a)(s,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.scrollNavigation,!0)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollNavigation,!0)}},{key:"render",value:function(){return Object(b.jsxs)(r.a.Fragment,{children:[0===this.state.homes.header_type?Object(b.jsx)(f,{picture:this.state.homes.header_image,title:this.state.homes.header_title,description:this.state.homes.header_description,button:this.state.homes.header_button,url:this.state.homes.header_url,dataFeatures:this.state.features}):1===this.state.homes.header_type?Object(b.jsx)(N,{data:this.state.sliders}):Object(b.jsx)(w,{video:this.state.homes.header_video,title:this.state.homes.header_title,description:this.state.homes.header_description,button:this.state.homes.header_button,url:this.state.homes.header_url}),this.state.homes.abouts&&Object(b.jsx)(o,{dataFeatures:this.state.features,dataAbouts:this.state.abouts}),this.state.homes.industries&&Object(b.jsx)(x,{data:this.state.industries,heading:this.state.homes.industries_heading,subheading:this.state.homes.industries_subheading}),this.state.homes.thematics&&Object(b.jsx)(_,{data:this.state.thematics,heading:this.state.homes.thematics_heading,subheading:this.state.homes.thematics_subheading,thematics_banner1:this.state.homes.thematics_banner1,thematics_banner2:this.state.homes.thematics_banner2}),Object(b.jsx)(v,{data:this.state.samples,heading:this.state.homes.samples_heading,subheading:this.state.homes.samples_subheading}),this.state.homes.blogs&&Object(b.jsx)(u,{data:this.state.blogs,heading:this.state.homes.blogs_heading,subheading:this.state.homes.blogs_subheading}),this.state.homes.partners&&Object(b.jsx)(g,{data:this.state.partners})]})}}]),s}(r.a.Component);t.default=y}}]);
//# sourceMappingURL=8.7f271e39.chunk.js.map