(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(19)},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(4),c=n.n(o),u=n(5),s=n(6),l=n(8),i=n(7),d=n(9),m=n(1),f=n.n(m),p=n(10),E=n(2),h=(n(18),"https://jsonplaceholder.typicode.com"),b=function(){var e=Object(E.a)(f.a.mark(function e(){var t,n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(h,"/todos"));case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(E.a)(f.a.mark(function e(){var t,n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(h,"/users"));case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),y=function(e){var t=e.todo;return a.a.createElement("td",null,t.user.name)},w=function(e){var t=e.todo;return a.a.createElement("tr",null,a.a.createElement("td",null,t.id),a.a.createElement("td",null,t.completed?"+":"-"),a.a.createElement("td",null,t.title),a.a.createElement(y,{todo:t,key:t.id}))},k=function(e){var t=e.todos;return a.a.createElement("table",{className:"center"},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"ID"),a.a.createElement("th",null,"Status"),a.a.createElement("th",null,"Title"),a.a.createElement("th",null,"User"))),a.a.createElement("tbody",null,t.map(function(e){return a.a.createElement(w,{todo:e,key:e.id})})))},j=function(){var e=Object(E.a)(f.a.mark(function e(){var t,n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b();case 2:return t=e.sent,e.next=5,v();case 5:return n=e.sent,e.abrupt("return",t.map(function(e){return Object(p.a)({},e,{user:n.find(function(t){return t.id===e.userId})})}));case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),x=function(e){var t=e.todos,n=e.sortField,r="string"===typeof t[0][n]?function(e,t){return e[n].localeCompare(t[n])}:function(e,t){return e[n]-t[n]};return"user"===n&&(r=function(e,t){return e.user.name.localeCompare(t.user.name)}),t.sort(r)},g=function(e){function t(){var e,n;Object(u.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(a)))).state={todos:[],isLoaded:!1,isLoading:!1,sortField:"id"},n.loadData=Object(E.a)(f.a.mark(function e(){var t;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:t=e.sent,n.setState({isLoading:!0}),setTimeout(function(){n.setState({isLoading:!1,isLoaded:!0,todos:t})},2e3);case 5:case"end":return e.stop()}},e)})),n.sortBy=function(e){var t=x({todos:n.state.todos,sortField:e});n.setState({todos:t,sortField:e})},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.todos,r=t.isLoaded,o=t.isLoading;return a.a.createElement("main",null,a.a.createElement("div",{className:"center"},a.a.createElement("h1",null,"List of Todos"),r?a.a.createElement("div",null,a.a.createElement("h2",null,"(",n.length,"items)"),a.a.createElement("button",{onClick:function(){return e.sortBy("id")}},"Sort by ID"),a.a.createElement("button",{onClick:function(){return e.sortBy("completed")}},"Sort by status"),a.a.createElement("button",{onClick:function(){return e.sortBy("title")}},"Sort by Title"),a.a.createElement("button",{onClick:function(){return e.sortBy("user")}},"Sort by User"),a.a.createElement(k,{todos:n})):a.a.createElement("div",null,a.a.createElement("h2",null,"(",n.length," items)"),a.a.createElement("button",{onClick:this.loadData},o?"Loading...":"Load"))))}}]),t}(a.a.Component);c.a.render(a.a.createElement(g,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.8fc97f6e.chunk.js.map