(this.webpackJsonpsimpsons=this.webpackJsonpsimpsons||[]).push([[16],{167:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAVCAYAAACdbmSKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG0SURBVHgBnVO7SgNBFL13kig2kkbcpIoSBLt8QrRVhFhZiC+wUjB2CoJrbZEUioVFUlhZ+QfBL1ArQSO7KcSgTex87vHOZhLzMA+8MLszc8+Zc888iP4R3A9oxious0IWQIUAuydpdvRuC4qyDVMV1Y0wF73fZ8UZDQpIM/9KR6V5SwhMNvwRjBOQR0gF/yIsRB/2Ac/24SCwhC4LUOnzcvyiTWlRFCAKPg5GgalCXyp59jx+ozFNSmvRYk5wKzASogFW9Ar2pvLP8Zsarq60LgSuEX7D/VReKv84cd046SttRB4y8GiZ2C/HeEeJWSVPH+OlVgtB89kSLFf3SXzrwbeXyr60E3T45xQivpRGTS0UyKXDV+GOpCB4VdTckF5ApILQc5QYGhou7Fi3sVZSfSN0coAHC9KNoeEwGcpR9DZtlyfdNpIOO+aE+YMKDCS0L+3PpFwpKbn3NF5qI9WIA+8oSCLRknJljand8pjb8e4dRop5RmCpWg/MYbDzKaV2fRpZy8lJLSv1G1Ut7brnezqKOBn5pf2B3iExq3qRNp/GtkXlwMhwvd9PHI84iRPLien+DzvjqLLpe9ICAAAAAElFTkSuQmCC"},178:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));a(179);var s=a(0),r=a.n(s),c=a(31),l=a(167),n=a.n(l);function i(e){var t=e.path;return r.a.createElement("div",{className:"previousTxtRow"},r.a.createElement("img",{alt:"",src:n.a,className:"purpleArrow"}),r.a.createElement(c.b,{to:t},r.a.createElement("p",{className:"purplePreviousTxt"},"Previous Step")))}},179:function(e,t,a){},193:function(e,t,a){e.exports=a.p+"static/media/stepTick.96fa48a1.png"},393:function(e,t,a){},394:function(e,t,a){e.exports=a.p+"static/media/fullBody.03ddd9de.png"},395:function(e,t,a){e.exports=a.p+"static/media/selfie.e1773145.png"},396:function(e,t,a){e.exports=a.p+"static/media/selfieActive.de0217cc.png"},397:function(e,t,a){e.exports=a.p+"static/media/fullBodyActive.3b8e5b63.png"},533:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return w}));var s=a(17),r=a(18),c=a(20),l=a(19),n=(a(393),a(0)),i=a.n(n),p=a(192),o=a(193),u=a.n(o),m=a(394),A=a.n(m),d=a(161),f=a(162),E=a(395),v=a.n(E),C=a(178),g=a(176),N=a.n(g),S=a(396),h=a.n(S),y=a(397),B=a.n(y),R=a(177),b=a.n(R),w=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={select:""},e.select=function(t){return e.setState({select:[t]})},e.next=function(){var t=e.state.select;localStorage.setItem("body",t),e.props.history.push("/orderstep4")},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this,t=this.props.history,a=this.state.select;return i.a.createElement("div",{className:"stepBox3"},i.a.createElement(d.a,{History:t}),i.a.createElement(p.a,null),i.a.createElement(C.a,{path:"/orderstep2"}),i.a.createElement("img",{alt:"",src:N.a,className:"stepsBigCircle"}),i.a.createElement("img",{alt:"",src:b.a,className:"rigthStepCircle"}),i.a.createElement("div",{className:"step3TopData"},i.a.createElement("br",null),i.a.createElement("h1",{className:"step3DataHead"},"Step 3"),i.a.createElement("h4",{className:"stepSubHead3"},"Body Type"),i.a.createElement("p",{className:"step3DataPara"},"Would you like a full body or just a good portrait picutre, from shoulder up? Your call!")),i.a.createElement("div",{className:"step3CirclesRow"},i.a.createElement("div",{className:"fullBody"==a?"step3PurpleCircles":""!==a?"step3CirclesH":"step3Circles",onClick:function(){return e.select("fullBody")}},i.a.createElement("img",{alt:"",src:"fullBody"==a?A.a:B.a,className:"fullBody"}),"fullBody"==a&&i.a.createElement("img",{alt:"",src:u.a,className:"tick3"})),i.a.createElement("div",{className:"portrait"==a?"step3PurpleCircles":""!==a?"step3CirclesH":"step3Circles",onClick:function(){return e.select("portrait")}},i.a.createElement("img",{alt:"",className:"selfie",src:"portrait"==a?v.a:h.a}),i.a.createElement("p",{className:"portrait"==a?"selfieTitleActive":"selfieTitle"},"Portrait"),i.a.createElement("span",{className:"portrait"==a?"selfieDiscActive":"selfieDisc"},"(hip upwards)"),"portrait"==a&&i.a.createElement("img",{alt:"",src:u.a,className:"tick3"}))),i.a.createElement("button",{onClick:""!==a?function(){return e.next()}:null,className:""!==a?"step1ActiveBut":"step1But"},"NEXT STEP"),i.a.createElement("br",null),i.a.createElement(f.default,{History:this.props.history}))}}]),a}(n.Component)}}]);
//# sourceMappingURL=16.413d6086.chunk.js.map