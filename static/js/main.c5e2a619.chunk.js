(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(2),s=n.n(r),o=(n(15),n(7)),c=n(4),u=n(5),l=n(1),m=n(8),d=n(9),h=(n(16),n(17),n(18),n(6));var p=function(e){var t=e.items.map((function(t){return i.a.createElement("div",{className:"list",key:t.key},i.a.createElement("p",null," ",i.a.createElement("input",{className:"inputTasks",id:t.key,value:t.text,onChange:function(n){return e.setUpdate(n.target.value,t.key)}})," "),i.a.createElement("button",{onClick:function(){return e.deleteItem(t.key)},className:"deleteButton"},"-"))}));return i.a.createElement("div",null,i.a.createElement(h.a,{duration:200,easing:"ease-in-out"},t))},f=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={items:[],currentItem:{text:"",key:""}},a.handleInput=a.handleInput.bind(Object(l.a)(a)),a.addItem=a.addItem.bind(Object(l.a)(a)),a.deleteItem=a.deleteItem.bind(Object(l.a)(a)),a.setUpdate=a.setUpdate.bind(Object(l.a)(a)),a}return Object(u.a)(n,[{key:"handleInput",value:function(e){this.setState({currentItem:{text:e.target.value,key:Date.now()}})}},{key:"addItem",value:function(e){e.preventDefault();var t=this.state.currentItem;if(console.log(t),""!==t.text){var n=[].concat(Object(o.a)(this.state.items),[t]);this.setState({items:n,currentItem:{text:"",key:""}})}}},{key:"deleteItem",value:function(e){var t=this.state.items.filter((function(t){return t.key!==e}));this.setState({items:t,currentItem:{text:"",key:""}})}},{key:"setUpdate",value:function(e,t){var n=this.state.items;n.map((function(n){n.key===t&&(n.text=e)})),this.setState({items:n})}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("form",{id:"to-do-form",onSubmit:this.addItem},i.a.createElement("input",{placeholder:"Enter a Task",type:"text",value:this.state.currentItem.text,onChange:this.handleInput}),i.a.createElement("button",{type:"submit"},"+")),i.a.createElement(p,{items:this.state.items,deleteItem:this.deleteItem,setUpdate:this.setUpdate}))}}]),n}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.c5e2a619.chunk.js.map