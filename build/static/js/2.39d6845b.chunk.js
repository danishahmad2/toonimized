(this.webpackJsonpsimpsons=this.webpackJsonpsimpsons||[]).push([[2,29],{161:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var n=a(17),r=a(18),o=a(20),c=a(19),i=(a(173),a(0)),l=a.n(i),s=a(164),f=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={items:[]},e.componentDidMount=function(){var t=localStorage.getItem("orders"),a=JSON.parse(t);e.setState({items:a})},e.openNav=function(){document.getElementById("mySidenav").style.width="250px",document.getElementById("mySidenav").style.display="block"},e.closeNav=function(){document.getElementById("mySidenav").style.width="0",document.getElementById("mySidenav").style.display="none"},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this.state.items;this.props.History;return l.a.createElement("div",{className:"haeder"},l.a.createElement(s.a,{icon:"bars",className:"menuIcon",onClick:this.openNav}),l.a.createElement("div",{className:"mobcartBox"},l.a.createElement(s.a,{className:"mobCart",icon:"shopping-cart",onClick:function(){return window.location.href="/shoppingCart"}}),l.a.createElement("p",{className:"mobItem"},e&&e.length?e.length:"0"),l.a.createElement("img",{alt:"",className:"logo",onClick:function(){return window.location.href="/"},src:"https://res.cloudinary.com/dapozvnbr/image/upload/v1600086643/Logo_hafewu.png"})),l.a.createElement("div",{className:"haederCenterBox"},l.a.createElement("span",{onClick:function(){return window.location.href="/"}},"Home"),l.a.createElement("span",{onClick:function(){return window.location.href="/gallery"}},"Gallery"),l.a.createElement("span",{onClick:function(){return window.location.href="/artists"}},"Artists"),l.a.createElement("span",{onClick:function(){return window.location.href="/faqs"}},"FAQ")),l.a.createElement("div",{className:"haederIconsBox"},l.a.createElement("img",{alt:"",className:"headIcon",onClick:function(){return window.location.href="/shoppingCart"},src:"https://res.cloudinary.com/dapozvnbr/image/upload/v1600086714/cart_nmnh7f.png"}),l.a.createElement("p",{className:"item"},e&&e.length?e.length:"0"),l.a.createElement("button",{className:"start",onClick:function(){return window.location.href="/orderstep1"}},"GET STARTED")),l.a.createElement("div",{id:"mySidenav",className:"sidenav"},l.a.createElement("a",{className:"closebtn",onClick:this.closeNav,href:"javascript:void(0)"},"\xd7"),l.a.createElement("a",{href:"/orderstep1"},"Get Started"),l.a.createElement("a",{href:"/"},"Home"),l.a.createElement("a",{href:"/gallery"},"Gallery"),l.a.createElement("a",{href:"/artists"},"Artists"),l.a.createElement("a",{href:"/faqs"},"FAQ's"),l.a.createElement("a",{href:"/contact"},"Contact Us")))}}]),a}(i.Component)},162:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return y}));var n=a(17),r=a(18),o=a(20),c=a(19),i=(a(174),a(0)),l=a.n(i),s=a(175),f=a.n(s),u=a(171),m=a(164),p=a(13),d=a(190),y=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={email:"",faq:!1,home:!1,contact:!1,customize:!1},e.componentDidMount=function(){var t=window.location.pathname;"/"==t&&e.setState({home:!0}),"/orderstep1"!=t&&"/orderstep2"!=t&&"/orderstep3"!=t&&"/orderstep4"!=t&&"/orderstep5"!=t&&"/orderstep6"!=t&&"orderDone"!=t||e.setState({customize:!0}),"/faqs"==t&&e.setState({faq:!0}),"/contact"==t&&e.setState({contact:!0})},e.saveEmail=function(){console.log("email =>",e.state.email)},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.faq,n=t.home,r=t.contact,o=t.customize;return l.a.createElement("div",{className:"footerContainer"},l.a.createElement("div",{className:"footerBox"},l.a.createElement("div",{className:"footBox1"},l.a.createElement("img",{alt:"",className:"footLogo",onClick:function(){return window.location.href="/"},src:"https://res.cloudinary.com/dapozvnbr/image/upload/v1600086643/Logo__nye4vn.png"}),l.a.createElement("div",{className:"socialRow"},l.a.createElement("a",{href:"https://www.facebook.com/Toonizedcom-106348711193090",className:"sociala"},l.a.createElement(m.a,{icon:u.a,className:"socialFootIcon"})),l.a.createElement("a",{href:"https://www.instagram.com/toonimized_art/",className:"sociala"},l.a.createElement(m.a,{icon:u.b,className:"socialFootIcon"})))),l.a.createElement("div",{className:"footBox2"},l.a.createElement("p",{onClick:function(){return window.location.href="/"},className:n?"footOption1":"footOption"},"Home"),l.a.createElement("p",{onClick:function(){return window.location.href="/orderstep1"},className:o?"footOption1":"footOption"},"Customize Now!"),l.a.createElement("p",{onClick:function(){return window.location.href="/faqs"},className:a?"footOption1":"footOption"},"FAQ"),l.a.createElement("p",{onClick:function(){return window.location.href="/contact"},className:r?"footOption1":"footOption"},"Contact")),l.a.createElement("div",{className:"footBox3"},l.a.createElement("p",{className:"footOption"},"Let\u2019s keep in touch!"),l.a.createElement("p",{className:"footDetail"},"Join our newsletter to stay up to date to latest discounts, promotions and orders."),l.a.createElement("div",{className:"inptBox"},l.a.createElement(d.a,{url:p.b,render:function(t){var a=t.subscribe,n=t.status;t.message;return l.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.state.email&&/\S+@\S+\.\S+/.test(e.state.email)?a({EMAIL:e.state.email,NAME:""}):e.setState({error:"Invalid Email"})}},l.a.createElement("input",{type:"email",className:"footInput",placeholder:"Enter your email address",onChange:function(t){return e.setState({email:t.target.value,error:null})}}),l.a.createElement(m.a,{icon:"paper-plane",className:"planeIcon",onClick:function(t){t.preventDefault(),e.state.email&&/\S+@\S+\.\S+/.test(e.state.email)?a({EMAIL:e.state.email,NAME:""}):e.setState({error:"Invalid Email"})}}),e.state.error&&l.a.createElement("span",{style:{float:"left",color:"red"}},e.state.error),"error"==n&&l.a.createElement("span",{style:{float:"left",color:"red"}},"Already subscribed"),"sending"==n&&l.a.createElement("span",{style:{float:"left"}},"Sending..."),"success"==n&&l.a.createElement("span",{style:{float:"left",color:"green"}},"Email sent"))}})))),l.a.createElement("div",{className:"footerBottom"},l.a.createElement("p",null,"\xa9 2020 Make me Yellow. All right reserved."),l.a.createElement("img",{alt:"",src:f.a,className:"footerCard"}),l.a.createElement("p",{className:"tos",onClick:function(){return window.location.href="/terms"}},"Terms of Service"),l.a.createElement("p",{className:"tos",onClick:function(){return window.location.href="/policy"}},"Privacy Policy")))}}]),a}(i.Component)},164:function(e,t,a){"use strict";a.d(t,"a",(function(){return A}));var n=a(60),r=a(6),o=a.n(r),c=a(0),i=a.n(c);function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function f(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?f(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):f(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function p(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function d(e){return t=e,(t-=0)===t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function y(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var a,n=t.indexOf(":"),r=d(t.slice(0,n)),o=t.slice(n+1).trim();return r.startsWith("webkit")?e[(a=r,a.charAt(0).toUpperCase()+a.slice(1))]=o:e[r]=o,e}),{})}var b=!1;try{b=!0}catch(v){}function h(e){return null===e?null:"object"===l(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"===typeof e?{prefix:"fas",iconName:e}:void 0}function g(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?s({},e,t):{}}function A(e){var t=e.forwardedRef,a=m(e,["forwardedRef"]),r=a.icon,o=a.mask,c=a.symbol,i=a.className,l=a.title,f=h(r),d=g("classes",[].concat(p(function(e){var t,a=e.spin,n=e.pulse,r=e.fixedWidth,o=e.inverse,c=e.border,i=e.listItem,l=e.flip,f=e.size,u=e.rotation,m=e.pull,p=(s(t={"fa-spin":a,"fa-pulse":n,"fa-fw":r,"fa-inverse":o,"fa-border":c,"fa-li":i,"fa-flip-horizontal":"horizontal"===l||"both"===l,"fa-flip-vertical":"vertical"===l||"both"===l},"fa-".concat(f),"undefined"!==typeof f&&null!==f),s(t,"fa-rotate-".concat(u),"undefined"!==typeof u&&null!==u&&0!==u),s(t,"fa-pull-".concat(m),"undefined"!==typeof m&&null!==m),s(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(p).map((function(e){return p[e]?e:null})).filter((function(e){return e}))}(a)),p(i.split(" ")))),y=g("transform","string"===typeof a.transform?n.c.transform(a.transform):a.transform),v=g("mask",h(o)),E=Object(n.a)(f,u({},d,{},y,{},v,{symbol:c,title:l}));if(!E)return function(){var e;!b&&console&&"function"===typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",f),null;var O=E.abstract,C={ref:t};return Object.keys(a).forEach((function(e){A.defaultProps.hasOwnProperty(e)||(C[e]=a[e])})),w(O[0],C)}A.displayName="FontAwesomeIcon",A.propTypes={border:o.a.bool,className:o.a.string,mask:o.a.oneOfType([o.a.object,o.a.array,o.a.string]),fixedWidth:o.a.bool,inverse:o.a.bool,flip:o.a.oneOf(["horizontal","vertical","both"]),icon:o.a.oneOfType([o.a.object,o.a.array,o.a.string]),listItem:o.a.bool,pull:o.a.oneOf(["right","left"]),pulse:o.a.bool,rotation:o.a.oneOf([0,90,180,270]),size:o.a.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:o.a.bool,symbol:o.a.oneOfType([o.a.bool,o.a.string]),title:o.a.string,transform:o.a.oneOfType([o.a.string,o.a.object]),swapOpacity:o.a.bool},A.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var w=function e(t,a){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"===typeof a)return a;var r=(a.children||[]).map((function(a){return e(t,a)})),o=Object.keys(a.attributes||{}).reduce((function(e,t){var n=a.attributes[t];switch(t){case"class":e.attrs.className=n,delete a.attributes.class;break;case"style":e.attrs.style=y(n);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[d(t)]=n}return e}),{attrs:{}}),c=n.style,i=void 0===c?{}:c,l=m(n,["style"]);return o.attrs.style=u({},o.attrs.style,{},i),t.apply(void 0,[a.tag,u({},o.attrs,{},l)].concat(p(r)))}.bind(null,i.a.createElement)},173:function(e,t,a){},174:function(e,t,a){},175:function(e,t){e.exports="data:image/png;base64,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"},213:function(e,t,a){e.exports=a.p+"static/media/center.ddfefc07.png"}}]);
//# sourceMappingURL=2.39d6845b.chunk.js.map