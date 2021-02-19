(this.webpackJsonpfront_end=this.webpackJsonpfront_end||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){},20:function(t,e,n){"use strict";n.r(e);var i=n(2),c=n.n(i),s=n(8),o=n.n(s),a=(n(17),n(7)),l=n(9),r=n(10),d=n(3),h=n(12),u=n(11),m=(n(18),n(6)),b=n(5),j=n(1),f=function(t){Object(h.a)(n,t);var e=Object(u.a)(n);function n(t){var i;return Object(l.a)(this,n),(i=e.call(this,t)).state={todoList:[],activeItem:{id:null,title:"",completed:!1},editing:!1},i.fetchItems=i.fetchItems.bind(Object(d.a)(i)),i.handleChange=i.handleChange.bind(Object(d.a)(i)),i.handleSubmit=i.handleSubmit.bind(Object(d.a)(i)),i.getCookie=i.getCookie.bind(Object(d.a)(i)),i.startEdit=i.startEdit.bind(Object(d.a)(i)),i.deleteItem=i.deleteItem.bind(Object(d.a)(i)),i.strtikeUnstrike=i.strtikeUnstrike.bind(Object(d.a)(i)),i}return Object(r.a)(n,[{key:"getCookie",value:function(t){var e=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),i=0;i<n.length;i++){var c=n[i].trim();if(c.substring(0,t.length+1)===t+"="){e=decodeURIComponent(c.substring(t.length+1));break}}return e}},{key:"componentWillMount",value:function(){this.fetchItems()}},{key:"fetchItems",value:function(){var t=this;console.log("Fetching..."),fetch("http://127.0.0.1:8000/api/item-list/").then((function(t){return t.json()})).then((function(e){t.setState({todoList:e})}))}},{key:"handleChange",value:function(t){var e=t.target.name,n=t.target.value;console.log("name:",e," value:",n),this.setState({activeItem:Object(a.a)(Object(a.a)({},this.state.activeItem),{},{title:n})})}},{key:"handleSubmit",value:function(t){var e=this;t.preventDefault(),console.log("item: ",this.state.activeItem);var n=this.getCookie("csrftoken"),i="http://127.0.0.1:8000/api/item-create/";!0===this.state.editing&&(i="http://127.0.0.1:8000/api/item-update/".concat(this.state.activeItem.id,"/"),this.setState({editing:!1})),fetch(i,{method:"POST",headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json","X-CSRFToken":n},body:JSON.stringify(this.state.activeItem)}).then((function(t){e.fetchItems(),e.setState({activeItem:{id:null,title:"",completed:!1}})})).catch((function(t){console.log("ERROR: ",t)}))}},{key:"startEdit",value:function(t){this.setState({activeItem:t,editing:!0})}},{key:"deleteItem",value:function(t){var e=this,n=this.getCookie("csrftoken");fetch("http://127.0.0.1:8000/api/item-delete/".concat(t.id,"/"),{method:"DELETE",headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json","X-CSRFToken":n}}).then((function(t){e.fetchItems()}))}},{key:"strtikeUnstrike",value:function(t){var e=this;t.completed=!t.completed;var n=this.getCookie("csrftoken"),i="http://127.0.0.1:8000/api/item-update/".concat(t.id,"/");fetch(i,{method:"POST",headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json","X-CSRFToken":n},body:JSON.stringify({completed:t.completed,title:t.title})}).then((function(t){e.fetchItems()})),console.log("Item:",t.completed)}},{key:"render",value:function(){var t=this,e=this.state.todoList,n=this;return Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{id:"item-container",children:[Object(j.jsx)("div",{id:"form-wrapper",children:Object(j.jsxs)("form",{id:"form",onSubmit:this.handleSubmit,children:[Object(j.jsxs)("h2",{children:["\xa0\xa0\xa0 Shopping List \xa0",Object(j.jsx)(b.a,{})]}),Object(j.jsxs)("div",{className:"flex-wrapper",children:[Object(j.jsx)("div",{style:{flex:6},children:Object(j.jsx)("input",{onChange:this.handleChange,type:"text",id:"title",className:"form-control",name:"title",value:this.state.activeItem.title,placeholder:"Add an item"})}),Object(j.jsx)("div",{style:{flex:1},children:Object(j.jsx)("input",{id:"submit",className:"btn btn-warning",type:"submit",name:"Add"})})]})]})}),Object(j.jsx)("div",{id:"list-wrapper",children:e.map((function(e,i){return Object(j.jsxs)("div",{className:"item-wrapper flex-wrapper",children:[Object(j.jsx)("div",{onClick:function(){return t.strtikeUnstrike(e)},style:{flex:7},children:0==e.completed?Object(j.jsx)("span",{children:e.title}):Object(j.jsxs)("div",{children:[Object(j.jsx)(b.a,{}),Object(j.jsx)("strike",{children:e.title})]})}),Object(j.jsx)("div",{style:{flex:1},children:Object(j.jsx)("button",{onClick:function(){return n.startEdit(e)},className:"btn btn-sm btn-outline-info",children:Object(j.jsx)(m.a,{})})}),Object(j.jsx)("div",{style:{flex:1},children:Object(j.jsx)("button",{onClick:function(){return n.deleteItem(e)},className:"btn btn-sm btn-outline-dark delete",children:Object(j.jsx)(m.b,{})})})]},i)}))})]})})}}]),n}(c.a.Component),p=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(e){var n=e.getCLS,i=e.getFID,c=e.getFCP,s=e.getLCP,o=e.getTTFB;n(t),i(t),c(t),s(t),o(t)}))};o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root")),p()}},[[20,1,2]]]);
//# sourceMappingURL=main.0b6c9ecf.chunk.js.map