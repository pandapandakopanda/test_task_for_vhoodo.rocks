(this.webpackJsonptest_task=this.webpackJsonptest_task||[]).push([[0],{15:function(t,e,s){},16:function(t,e,s){},18:function(t,e,s){},20:function(t,e,s){"use strict";s.r(e);var n=s(0),r=s.n(n),a=s(5),c=s.n(a),i=(s(14),s(15),s(3)),o=s(4),u=s(7),l=s(6),h=s(9),d=(s(16),s(2)),p=function(t){Object(u.a)(s,t);var e=Object(l.a)(s);function s(){return Object(i.a)(this,s),e.apply(this,arguments)}return Object(o.a)(s,[{key:"capitalizeFirstLetter",value:function(t){return void 0===t?"":t.charAt(0).toUpperCase()+t.slice(1)}},{key:"render",value:function(){var t=this.props,e=t.title,s=t.text,n=t.author;return Object(d.jsx)("div",{className:"card",children:Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("h5",{className:"card-title",children:this.capitalizeFirstLetter(e)}),Object(d.jsx)("p",{className:"card-text",children:this.capitalizeFirstLetter(s)}),Object(d.jsx)("h6",{className:"card-subtitle mb-2 text-muted",children:n})]})})}}]),s}(n.Component);function j(t){return null===t}var f=s.p+"static/media/search.832e2a4a.png",b=(s(18),function(t){Object(u.a)(s,t);var e=Object(l.a)(s);function s(){var t;Object(i.a)(this,s);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).state={inputValue:""},t.getAuthorById=function(e){var s,n=t.props.store.users;if(0===n.length)return null;var r=null===(s=n.filter((function(t){return t.id===e}))[0])||void 0===s?void 0:s.name;return j(r)?null:r},t.showCard=function(e){var s=t.state.inputValue;return""===s||e.toLowerCase().includes(s.toLocaleLowerCase())},t.renderCards=function(){var e=t.props.store.posts;return 0===e.length?null:e.map((function(e){var s=t.getAuthorById(e.userId);return j(s)?null:t.showCard(s)?Object(d.jsx)(p,{text:e.body,title:e.title,author:s},e.id):null}))},t.onInputChange=function(e){t.setState({inputValue:e.target.value})},t}return Object(o.a)(s,[{key:"render",value:function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"inputWrapper",children:Object(d.jsxs)("div",{className:"input-group",children:[Object(d.jsx)("div",{className:"input-group-prepend",children:Object(d.jsx)("span",{className:"input-group-text",children:Object(d.jsx)("img",{src:f,alt:"Logo"})})}),Object(d.jsx)("input",{type:"search",className:"form-control",placeholder:"Filter by author...","aria-label":"Search","aria-describedby":"search-addon",onChange:this.onInputChange,value:this.state.inputValue})]})}),Object(d.jsx)("div",{className:"container d-flex flex-wrap",children:this.renderCards()})]})}}]),s}(n.Component)),v=Object(h.a)(b),O=s(1),m=new(function(){function t(){var e=this;Object(i.a)(this,t),this.posts=[],this.users=[],this.setUsers=function(t){e.users=t},this.setPosts=function(t){e.posts=t},Object(O.m)(this,{setUsers:O.f,setPosts:O.f,posts:O.n,users:O.n}),this.init()}return Object(o.a)(t,[{key:"fetchUsers",value:function(){var t=this;fetch("http://jsonplaceholder.typicode.com/users").then((function(t){if(!t.ok)throw new Error(t.status);return t.json()})).then((function(e){t.setUsers(e)}))}},{key:"fetchPosts",value:function(){var t=this;fetch("http://jsonplaceholder.typicode.com/posts").then((function(t){if(!t.ok)throw new Error(t.status);return t.json()})).then((function(e){t.setPosts(e)}))}},{key:"init",value:function(){this.fetchPosts(),this.fetchUsers()}}]),t}());c.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(v,{store:m})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.6a621000.chunk.js.map