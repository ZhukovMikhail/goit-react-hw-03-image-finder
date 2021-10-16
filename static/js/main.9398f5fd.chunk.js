(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{15:function(t,e,o){},16:function(t,e,o){},39:function(t,e,o){"use strict";o.r(e);var a=o(0),r=o.n(a),n=o(7),s=o.n(n),c=(o(15),o(3)),i=o(4),l=o(6),u=o(5),h=(o(16),o(8)),p=(o(17),o(1)),g=function(t){Object(l.a)(o,t);var e=Object(u.a)(o);function o(){var t;Object(c.a)(this,o);for(var a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return(t=e.call.apply(e,[this].concat(r))).state={searchQuerry:""},t.onSearchFormChange=function(e){t.setState({searchQuerry:e.currentTarget.value})},t.onSubmitForm=function(e){e.preventDefault(),""!==t.state.searchQuerry.trim()?(t.props.onSubmit(t.state.searchQuerry),t.setState({searchQuerry:""})):h.b.warn("No data entered")},t}return Object(i.a)(o,[{key:"render",value:function(){return Object(p.jsx)("header",{className:"Searchbar",children:Object(p.jsxs)("form",{className:"SearchForm",onSubmit:this.onSubmitForm,children:[Object(p.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(p.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(p.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.onSearchFormChange,value:this.state.searchQuerry})]})})}}]),o}(a.Component),d=g,m=function(t){Object(l.a)(o,t);var e=Object(u.a)(o);function o(){var t;Object(c.a)(this,o);for(var a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return(t=e.call.apply(e,[this].concat(r))).state={querry:[],perPage:12,pageNumber:1,totalHits:null,loading:!1,error:!1},t}return Object(i.a)(o,[{key:"componentDidUpdate",value:function(t,e){var o=this;if(this.props.page!==this.state.pageNumber){if(1===this.props.page)return void this.setState({perPage:12,pageNumber:1});this.setState((function(t){return{perPage:t.perPage+12,pageNumber:t.pageNumber+1}}))}if(t.querry!==this.props.querry||e.pageNumber!==this.props.page){this.setState({loading:!0,error:!1}),this.props.loading(this.state.loading),console.log("change querry"),console.log("Prev querry",t.querry),console.log("text of querry",this.props.querry);fetch("https://pixabay.com/api/?q=".concat(this.props.querry,"&page=").concat(this.state.pageNumber,"&key=").concat("22985243-b477986a48324befacd1d8a65","&image_type=photo&orientation=horizontal&per_page=").concat(this.state.perPage)).then((function(t){return t.json()})).then((function(t){o.setState({querry:t.hits,totalHits:t.totalHits}),console.log(t),console.log(o.state.totalHits),o.props.totalHits(o.state.totalHits)})).catch((function(t){console.log(t),o.setState({querry:[],totalHits:null,error:!0}),o.props.totalHits(o.state.totalHits)})).finally((function(){o.setState({loading:!1}),o.props.loading(o.state.loading)}))}window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var t=this;return this.state.error?Object(p.jsx)("h2",{className:"title",children:" Something goes wrong"}):0!==this.state.totalHits?this.state.querry.map((function(e){return Object(p.jsx)("li",{className:"ImageGalleryItem",children:Object(p.jsx)("img",{onClick:t.props.onClick,src:e.webformatURL,"data-src":e.largeImageURL,alt:e.tags,className:"ImageGalleryItem-image"})},e.id)})):Object(p.jsx)("h2",{className:"title",children:" No match found"})}}]),o}(a.Component),b=function(t){Object(l.a)(o,t);var e=Object(u.a)(o);function o(){return Object(c.a)(this,o),e.apply(this,arguments)}return Object(i.a)(o,[{key:"render",value:function(){return Object(p.jsx)("ul",{className:"ImageGallery",children:Object(p.jsx)(m,{querry:this.props.querry,page:this.props.page,totalHits:this.props.totalHits,onClick:this.props.onClick,loading:this.props.loading})})}}]),o}(a.Component),j=document.querySelector("#modal-root"),f=function(t){Object(l.a)(o,t);var e=Object(u.a)(o);function o(){var t;Object(c.a)(this,o);for(var a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return(t=e.call.apply(e,[this].concat(r))).idEscapeEvent=function(e){"Escape"===e.code&&t.props.onToggleModal()},t.onBackdropClick=function(e){e.currentTarget===e.target&&t.props.onToggleModal()},t}return Object(i.a)(o,[{key:"componentDidMount",value:function(){console.log("Modal componentDidMount"),window.addEventListener("keydown",this.idEscapeEvent)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.idEscapeEvent)}},{key:"render",value:function(){return Object(n.createPortal)(Object(p.jsx)("div",{className:"Overlay",onClick:this.onBackdropClick,children:Object(p.jsx)("div",{className:"Modal",children:this.props.children})}),j)}}]),o}(a.Component),y=function(t){Object(l.a)(o,t);var e=Object(u.a)(o);function o(){return Object(c.a)(this,o),e.apply(this,arguments)}return Object(i.a)(o,[{key:"render",value:function(){return Object(p.jsx)("button",{className:"Button",onClick:this.props.onLoadMore,children:"Load more"})}}]),o}(a.Component),O=o(10),v=o.n(O),S=function(t){Object(l.a)(o,t);var e=Object(u.a)(o);function o(){var t;Object(c.a)(this,o);for(var a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return(t=e.call.apply(e,[this].concat(r))).state={querry:"",showModal:!1,largeImg:null,totalHits:null,page:1,loading:!1,showLoadMoreButton:!1},t.toggleModal=function(){t.setState((function(t){return{showModal:!t.showModal}}))},t.onImageClick=function(e){(e.target="IMG")&&t.toggleModal(),console.dir(e.currentTarget.dataset.src),t.setState({largeImg:e.currentTarget.dataset.src})},t.onSearchSubmit=function(e){console.log(e),t.setState({querry:e,page:1})},t.totalHits=function(e){0===e?t.setState({totalHits:null}):t.setState({totalHits:e})},t.onLoadMore=function(){console.log("\u043a\u043b\u0438\u043a\u043d\u0443\u043b\u0438 \u043d\u0430 onLoadMore"),t.setState((function(t){return{page:t.page+1}}))},t.onLoading=function(){t.setState({loading:!t.state.loading})},t.onError=function(){t.setState({})},t}return Object(i.a)(o,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"section",children:[Object(p.jsx)(d,{onSubmit:this.onSearchSubmit}),this.state.loading&&Object(p.jsx)(v.a,{type:"Bars",className:"spinner",color:"#00BFFF",height:50,width:50}),Object(p.jsx)(b,{querry:this.state.querry,page:this.state.page,totalHits:this.totalHits,onClick:this.onImageClick,loading:this.onLoading}),this.state.totalHits&&Object(p.jsx)(y,{onLoadMore:this.onLoadMore}),this.state.showModal&&Object(p.jsxs)(f,{onToggleModal:this.toggleModal,children:[Object(p.jsx)("img",{src:this.state.largeImg,alt:this.state.querry}),Object(p.jsx)("button",{className:"closeBtn",type:"button",onClick:this.toggleModal,children:"X"})]}),Object(p.jsx)(h.a,{position:"top-center",autoClose:1e3})]})}}]),o}(a.Component),k=S;s.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(k,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.9398f5fd.chunk.js.map