(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{21:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),a=n.n(r),o=n(4),s=n.n(o),i=(n(21),n(3)),u=n(9);n(14);function l(e){var t=e.onSubmit,n=Object(r.useState)(""),a=Object(i.a)(n,2),o=a[0],s=a[1];return Object(c.jsx)("header",{className:"Searchbar",children:Object(c.jsxs)("form",{className:"SearchForm",onSubmit:function(e){e.preventDefault(),""!==o.trim()?(t(o),s("")):Object(u.b)("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441.")},children:[Object(c.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(c.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(c.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:o,onChange:function(e){s(e.currentTarget.value.toLowerCase())}})]})})}var j=n(13),b=n(7),h=n(8),m=n(11),O=n(10),f=n(15),d=n.n(f),g=(n(43),function(e){Object(m.a)(n,e);var t=Object(O.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(c.jsx)(d.a,{className:"Loader",type:"Puff",color:"#00BFFF",height:100,width:100})}}]),n}(r.Component));var p={fetchImages:function(e,t){var n="https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=").concat("19123661-7bcff1088ecd25ea1b8bca82a","&image_type=photo&orientation=horizontal&per_page=12");return fetch(n).then((function(e){return e.ok?e.json():Promise.reject(new Error("Something went wrong.Try again."))})).then((function(e){return console.log(e),e.hits}))}},x=function(e){Object(m.a)(n,e);var t=Object(O.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(c.jsx)("div",{className:"Loader-button",children:Object(c.jsx)("button",{className:"Button",type:"button",onClick:this.props.onClick,children:"Load More"})})}}]),n}(r.Component),v=document.querySelector("#modal-root");function y(e){Object(r.useEffect)((function(){var t=function(t){"Escape"===t.code&&e.onClose()};return window.addEventListener("keydown",t),function(){return window.removeEventListener("keydown",t)}}));return Object(o.createPortal)(Object(c.jsx)("div",{className:"Overlay",onClick:function(t){t.target!==t.currentTarget&&e.onClose()},children:Object(c.jsx)("div",{className:"Modal",children:Object(c.jsx)("img",{src:e.src,alt:e.alt,width:900})})}),v)}function w(e){var t=e.src,n=e.alt,a=e.largeImageURL,o=Object(r.useState)(null),s=Object(i.a)(o,2),u=s[0],l=s[1],j=function(){l((function(e){return!e}))};return Object(c.jsxs)("li",{className:"ImageGalleryItem",onClick:j,children:[Object(c.jsx)("img",{src:t,alt:n,className:"ImageGalleryItem-image"}),u&&Object(c.jsx)(y,{onClose:j,src:a,alt:n})]})}var S=function(e){var t=e.images;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("ul",{className:"ImageGallery",children:t.map((function(e,t){return Object(c.jsx)(w,{src:e.webformatURL,alt:e.tags,largeImageURL:e.largeImageURL},t)}))})})};function k(e){var t=e.texterror;return Object(c.jsx)("div",{role:"alert",style:{textAlign:"center"},children:Object(c.jsxs)("p",{children:["We're sorry but something went wrong ",t]})})}var C="idle",N="pending",I="resolved",F="rejected";function L(e){var t=e.query,n=Object(r.useState)([]),a=Object(i.a)(n,2),o=a[0],s=a[1],u=Object(r.useState)(C),l=Object(i.a)(u,2),b=l[0],h=l[1],m=Object(r.useState)(null),O=Object(i.a)(m,2),f=O[0],d=O[1],v=Object(r.useState)(1),y=Object(i.a)(v,2),w=y[0],L=y[1];Object(r.useEffect)((function(){t&&(h(N),E(),h(I))}),[t,w]),Object(r.useEffect)((function(){var e;e!==t&&(L(1),s([]))}),[t]);var E=function(){p.fetchImages(t,w).then((function(e){if(s((function(t){return[].concat(Object(j.a)(t),Object(j.a)(e))})),T(),0===e.length)throw new Error("Hmm...Nothing here. Try another search.")})).catch((function(e){d(e),h(F)}))},T=function(){1!==w&&window.scrollTo({left:0,top:document.body.scrollHeight,behavior:"smooth"})};return b===C?Object(c.jsx)("div",{style:{textAlign:"center"},children:"Please enter a search term to begin your search..."}):b===N?Object(c.jsx)(g,{}):b===F?Object(c.jsx)(k,{message:f.message}):b===I?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(S,{images:o}),0!==o.length&&Object(c.jsx)(x,{onClick:function(){L((function(e){return e+1}))}})]}):void 0}function E(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)(l,{onSubmit:function(e){a(e)}}),Object(c.jsx)(u.a,{autoClose:3e3}),Object(c.jsx)(L,{query:n})]})}s.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(E,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.48d00873.chunk.js.map