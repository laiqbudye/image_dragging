(this.webpackJsonpimage_dragging=this.webpackJsonpimage_dragging||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),o=n.n(a),s=n(4),r=n.n(s),i=n(2),u=n.p+"static/media/team.f3ec58ba.jpg",b=function(e){var t=e.x,n=e.y,o=e.canedit,s=e.onMove,r=e.showControls,i=0,b=0,l=Object(a.useRef)(),d=Object(a.useRef)();Object(a.useEffect)((function(){l.current.style.transform="translate(".concat(t,"px, ").concat(n,"px)")}),[t,n]),Object(a.useEffect)((function(){var e=Number(localStorage.getItem("xpos")),t=Number(localStorage.getItem("ypos"));s(e,t)}),[]);var j=function(e){s(e.pageX-i,e.pageY-b),e.preventDefault()},m=function e(t){document.removeEventListener("mousemove",j),document.removeEventListener("mouseup",e),t.preventDefault()};return Object(c.jsxs)("div",{className:"imageContainer",ref:d,children:[Object(c.jsx)("img",{src:u,ref:l,onMouseDown:function(e){if(0===e.button&&o){var t=l.current.getBoundingClientRect(),n=t.left,c=t.top;i=e.pageX-n,b=e.pageY-c,document.addEventListener("mousemove",j),document.addEventListener("mouseup",m),e.preventDefault()}}}),r&&Object(c.jsx)("div",{className:"text-block",children:Object(c.jsx)("p",{children:"Click & Move cursor"})})]})},l=function(e){var t=e.btnid,n=e.classname,a=e.btntext,o=e.onClick;return Object(c.jsx)("div",{id:t,className:n,onClick:o,children:a})};n(10);var d=function(){var e=Object(a.useState)({x:0,y:0}),t=Object(i.a)(e,2),n=t[0],o=t[1],s=Object(a.useState)(!1),r=Object(i.a)(s,2),u=r[0],d=r[1],j=Object(a.useState)(!1),m=Object(i.a)(j,2),f=m[0],v=m[1],x=Object(a.useRef)(n.x),g=Object(a.useRef)(n.y);return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(l,{btnid:"btnedit",classname:"btn btn-edit",btntext:"Edit",onClick:function(){x.current=n.x,g.current=n.y,d(!0),v(!0)}}),Object(c.jsx)(b,{x:n.x,y:n.y,canedit:u,onMove:function(e,t){o({x:e,y:t})},showControls:f}),f&&Object(c.jsx)(l,{btnid:"btnsave",classname:"btn btn-save",btntext:"Save",onClick:function(){u&&(localStorage.setItem("xpos",n.x),localStorage.setItem("ypos",n.y),d(!1),v(!1))}}),f&&Object(c.jsx)(l,{btnid:"btncancel",classname:"btn btn-cancel",btntext:"Cancel",onClick:function(){u&&o({x:x.current,y:g.current}),d(!1),v(!1)}})]})},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,12)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),o(e),s(e)}))};r.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(d,{})}),document.getElementById("root")),j()}},[[11,1,2]]]);
//# sourceMappingURL=main.7c17b702.chunk.js.map