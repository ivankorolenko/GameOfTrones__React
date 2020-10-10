(this.webpackJsonpgot=this.webpackJsonpgot||[]).push([[0],{27:function(e,t,n){e.exports=n.p+"static/media/error.c9fa41e6.jpg"},32:function(e,t,n){e.exports=n(49)},38:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(26),l=n.n(c),o=n(4),i=n(7),u=n(9),s=n(8),m=n(52),p=n(50),f=n(51),d=n(53),h=n(12),g=n.n(h),v=n(18),b=function e(){var t=this;Object(o.a)(this,e),this.getResource=function(){var e=Object(v.a)(g.a.mark((function e(n){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t._apiBase+n);case 2:if((a=e.sent).ok){e.next=5;break}throw new Error("Couldn't fetch ".concat(t._apiBase+n,", status: ").concat(a.status));case 5:return e.next=7,a.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllCharacters=function(){var e=Object(v.a)(g.a.mark((function e(n){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/characters?page=".concat(n));case 2:return a=e.sent,e.abrupt("return",a.map(t._transformCharacter));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getCharacter=function(){var e=Object(v.a)(g.a.mark((function e(n){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/characters/".concat(n));case 2:return a=e.sent,e.abrupt("return",t._transformCharacter(a));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllHouses=function(){var e=Object(v.a)(g.a.mark((function e(n){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/houses?page=".concat(n));case 2:return a=e.sent,e.abrupt("return",a.map(t._transformHouse));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getHouse=function(){var e=Object(v.a)(g.a.mark((function e(n){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/houses/".concat(n));case 2:return a=e.sent,e.abrupt("return",t._transformHouse(a));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllBooks=Object(v.a)(g.a.mark((function e(){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/books?pageSize=12");case 2:return n=e.sent,e.abrupt("return",n.map(t._transformBook));case 4:case"end":return e.stop()}}),e)}))),this.getBook=function(){var e=Object(v.a)(g.a.mark((function e(n){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/books/".concat(n));case 2:return a=e.sent,e.abrupt("return",t._transformBook(a));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this._transformCharacter=function(e){return{name:e.name||"no data :(",gender:e.gender||"no data :(",born:e.born||"no data :(",died:e.died||"no data :(",culture:e.culture||"no data :(",id:e.url.slice(49)}},this._transformHouse=function(e){return{name:e.name||"no data :(",region:e.region||"no data :(",words:e.words||"no data :(",titles:e.titles||"no data :(",ancestralWeapons:e.ancestralWeapons||"no data :(",id:e.url.slice(45)}},this._transformBook=function(e){return{name:e.name||"no data :(",numberOfPages:e.numberOfPages||"no data :(",publisher:e.publisher||"no data :(",released:new Date(e.released).toDateString()||"no data :(",id:e.url.slice(44)}},this._apiBase="https://www.anapioficeandfire.com/api"},E=(n(38),n(27)),k=n.n(E),y=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:k.a,alt:"error"}),r.a.createElement("span",null,"Something goes wrong"))},j=n(5),x=n(6),O=n(17);function w(){var e=Object(j.a)(["\n    display: flex;\n    margin: 0;\n    align-items: center;\n    color: #fff;\n    list-style-type: none;\n    li {\n        margin-right: 20px;\n        font-size: 18px;\n    }\n"]);return w=function(){return e},e}function S(){var e=Object(j.a)(["\n    font-size: 24px;\n    color: #fff;\n    margin: 0;\n"]);return S=function(){return e},e}function C(){var e=Object(j.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: 80px;\n"]);return C=function(){return e},e}var I=x.a.div(C()),P=x.a.h3(S()),A=x.a.ul(w()),N=function(){return r.a.createElement(I,null,r.a.createElement(P,null,r.a.createElement(O.b,{to:"/"},"Game of Thrones DB")),r.a.createElement(A,null,r.a.createElement("li",null,r.a.createElement(O.b,{to:"/characters/"},"Characters")),r.a.createElement("li",null,r.a.createElement(O.b,{to:"/houses/"},"Houses")),r.a.createElement("li",null,r.a.createElement(O.b,{to:"/books/"},"Books"))))},B=(n(45),function(){return r.a.createElement("div",{className:"loadingio-spinner-spinner-pj4uds2n46"},r.a.createElement("div",{className:"ldio-6k5pj8d2wzk"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))});function H(){var e=Object(j.a)(["\n    font-weight: bold;\n"]);return H=function(){return e},e}function L(){var e=Object(j.a)(["\n    margin-bottom: 20px;\n    text-align: center;\n"]);return L=function(){return e},e}function D(){var e=Object(j.a)(["\n    background-color: #fff;\n    padding: 25px 25px 15px 25px;\n    margin-bottom: 40px;\n"]);return D=function(){return e},e}var R=x.a.div(D()),_=x.a.h4(L()),z=x.a.span(H()),W=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).gotService=new b,e.state={char:{},loading:!0,error:!1},e.onCharLoaded=function(t){e.setState({char:t,loading:!1})},e.onError=function(t){e.setState({error:!0,loading:!1})},e.updateChar=function(){var t=Math.floor(140*Math.random()+25);e.gotService.getCharacter(t).then(e.onCharLoaded).catch(e.onError)},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.updateChar(),this.timerId=setInterval(this.updateChar,this.props.interval)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}},{key:"render",value:function(){var e=this.state,t=e.char,n=e.loading,a=e.error,c=a?r.a.createElement(y,null):null,l=n?r.a.createElement(B,null):null,o=n||a?null:r.a.createElement(T,{char:t});return r.a.createElement(R,{className:"random-block rounded"},c,l,o)}}]),n}(a.Component);W.defaultProps={interval:1500};var T=function(e){var t=e.char,n=t.name,a=t.gender,c=t.born,l=t.died,o=t.culture;return r.a.createElement(r.a.Fragment,null,r.a.createElement(_,null,"Random Character: ",n),r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{className:"list-group-item d-flex justify-content-between"},r.a.createElement(z,null,"Gender "),r.a.createElement("span",null,a)),r.a.createElement("li",{className:"list-group-item d-flex justify-content-between"},r.a.createElement(z,null,"Born "),r.a.createElement("span",null,c)),r.a.createElement("li",{className:"list-group-item d-flex justify-content-between"},r.a.createElement(z,null,"Died "),r.a.createElement("span",null,l)),r.a.createElement("li",{className:"list-group-item d-flex justify-content-between"},r.a.createElement(z,null,"Culture "),r.a.createElement("span",null,o))))},F=W;function M(){var e=Object(j.a)(["\n    cursor: pointer;\n"]);return M=function(){return e},e}var G=x.a.li(M());var J=function(e){var t=e.itemList,n=e.renderItem,a=e.onItemSelected;if(!t)return r.a.createElement(B,null);var c=t.map((function(e){var t=e.id,c=n(e);return r.a.createElement(G,{key:t,className:"list-group-item",onClick:function(){a(t)}},c)}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:"item-list list-group"},c),r.a.createElement("br",null))};function U(){var e=Object(j.a)(["\n    text-align: right;\n    float: right;\n"]);return U=function(){return e},e}function q(){var e=Object(j.a)(["\n    font-size: 24px;\n    color: #fff;\n    margin: 0;\n"]);return q=function(){return e},e}function K(){var e=Object(j.a)(["\n    margin-bottom: 20px;\n    text-align: center;\n"]);return K=function(){return e},e}function Q(){var e=Object(j.a)(["\n    background-color: #fff;\n    padding: 25px 25px 15px 25px;\n    margin-bottom: 40px;\n"]);return Q=function(){return e},e}var V=x.a.div(Q()),X=x.a.h4(K()),Y=x.a.span(q()),Z=x.a.span(U()),$=function(e){var t=e.item,n=e.field,c=e.label;if("object"===typeof t[n]){var l=t[n].map((function(e){return r.a.createElement(a.Fragment,{key:e},r.a.createElement(Z,null,e),r.a.createElement("br",null))}));return r.a.createElement("li",{className:"list-group-item d-flex justify-content-between"},r.a.createElement("span",{className:"term"},c),r.a.createElement("span",null,l))}return r.a.createElement("li",{className:"list-group-item d-flex justify-content-between"},r.a.createElement("span",{className:"term"},c),r.a.createElement("span",null,t[n]))},ee=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).gotService=new b,e.state={item:null},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.updateItem()}},{key:"componentDidUpdate",value:function(e){this.props.itemId!==e.itemId&&this.updateItem()}},{key:"updateItem",value:function(){var e=this,t=this.props,n=t.category,a=t.itemId;if(a){var r;switch(n){case"character":r=this.gotService.getCharacter(a);break;case"house":r=this.gotService.getHouse(a);break;case"book":r=this.gotService.getBook(a);break;default:r=null}r.then((function(t){e.setState({item:t})}))}}},{key:"render",value:function(){if(!this.state.item)return r.a.createElement(Y,null,"Please select a ",this.props.category);var e=this.state.item,t=e.name;return r.a.createElement(V,{className:"rounded"},r.a.createElement(X,null,t),r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.Children.map(this.props.children,(function(t){return r.a.cloneElement(t,{item:e})}))))}}]),n}(a.Component);function te(){var e=Object(j.a)(["\n    display: flex;\n    justify-content: space-between;\n"]);return te=function(){return e},e}var ne=x.a.div(te()),ae=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement(f.a,{md:"6"},this.props.left,r.a.createElement(ne,null,r.a.createElement(d.a,{color:"primary",onClick:this.props.prevPage},"Previouse page"),r.a.createElement(d.a,{color:"primary",onClick:this.props.nextPage},"Next page")),r.a.createElement("br",null)),r.a.createElement(f.a,{md:"6"},this.props.right))}}]),n}(a.Component),re=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).gotService=new b,a.state={selectedChar:null,error:!1,page:130,itemList:null},a.onItemSelected=function(e){a.setState({selectedChar:e})},a.nextPage=function(){a.state.page<214&&a.setState({page:a.state.page+1},a.updateAllCharacters)},a.prevPage=function(){a.state.page>1&&a.setState({page:a.state.page-1},a.updateAllCharacters)},a.updateAllCharacters(),a}return Object(i.a)(n,[{key:"componentDidCatch",value:function(){this.setState({error:!0})}},{key:"updateAllCharacters",value:function(){var e=this;this.gotService.getAllCharacters(this.state.page).then((function(t){e.setState({itemList:t})})).catch((function(e){console.error(e)}))}},{key:"render",value:function(){if(this.state.error)return r.a.createElement(y,null);var e=r.a.createElement(J,{itemList:this.state.itemList,renderItem:function(e){var t=e.name,n=e.gender;return"".concat(t," (").concat(n,")")},onItemSelected:this.onItemSelected}),t=r.a.createElement(ee,{category:"character",itemId:this.state.selectedChar},r.a.createElement($,{key:"1",field:"gender",label:"Gender"}),r.a.createElement($,{key:"2",field:"born",label:"Born"}),r.a.createElement($,{key:"3",field:"died",label:"Died"}),r.a.createElement($,{key:"4",field:"culture",label:"Culture"}));return r.a.createElement(ae,{nextPage:this.nextPage,prevPage:this.prevPage,left:e,right:t})}}]),n}(a.Component),ce=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).gotService=new b,a.state={selectedHouse:null,error:!1,page:10,itemList:null},a.onItemSelected=function(e){a.setState({selectedHouse:e})},a.nextPage=function(){a.state.page<45&&a.setState({page:a.state.page+1},a.updateAllHouses)},a.prevPage=function(){a.state.page>1&&a.setState({page:a.state.page-1},a.updateAllHouses)},a.updateAllHouses(),a}return Object(i.a)(n,[{key:"componentDidCatch",value:function(){this.setState({error:!0})}},{key:"updateAllHouses",value:function(){var e=this;this.gotService.getAllHouses(this.state.page).then((function(t){e.setState({itemList:t})})).catch((function(e){console.error(e)}))}},{key:"render",value:function(){if(this.state.error)return r.a.createElement(y,null);var e=r.a.createElement(J,{itemList:this.state.itemList,renderItem:function(e){return e.name},onItemSelected:this.onItemSelected}),t=r.a.createElement(ee,{category:"house",itemId:this.state.selectedHouse},r.a.createElement($,{key:"1",field:"region",label:"Region"}),r.a.createElement($,{key:"2",field:"words",label:"Words"}),r.a.createElement($,{key:"3",field:"titles",label:"Titles"}),r.a.createElement($,{key:"4",field:"ancestralWeapons",label:"Ancestral Weapons"}));return r.a.createElement(ae,{nextPage:this.nextPage,prevPage:this.prevPage,left:e,right:t})}}]),n}(a.Component),le=n(3),oe=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).gotService=new b,a.state={error:!1,itemList:null},a.updateAllBooks(),a}return Object(i.a)(n,[{key:"componentDidCatch",value:function(){this.setState({error:!0})}},{key:"updateAllBooks",value:function(){var e=this;this.gotService.getAllBooks().then((function(t){e.setState({itemList:t})})).catch((function(e){console.error(e)}))}},{key:"render",value:function(){var e=this;return this.state.error?r.a.createElement(y,null):r.a.createElement(J,{itemList:this.state.itemList,renderItem:function(e){return e.name},onItemSelected:function(t){e.props.history.push(t)}})}}]),n}(a.Component),ie=Object(le.e)(oe),ue=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).gotService=new b,e}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement(ee,{category:"book",itemId:this.props.bookId},r.a.createElement($,{key:"1",field:"publisher",label:"Publisher"}),r.a.createElement($,{key:"2",field:"numberOfPages",label:"Number of pages"}),r.a.createElement($,{key:"3",field:"released",label:"Released"}))}}]),n}(a.Component),se=(n(46),function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).ToggleRandomChar=function(){e.setState({randomShown:!e.state.randomShown})},e.gotService=new b,e.state={randomShown:!0,error:!1},e}return Object(i.a)(n,[{key:"componentDidCatch",value:function(){this.setState({error:!0})}},{key:"render",value:function(){var e=this.state,t=e.randomShown,n=e.error,a=t?r.a.createElement(F,{interval:1500}):null;return n?r.a.createElement(y,null):r.a.createElement(O.a,null,r.a.createElement("div",{className:"app"},r.a.createElement(m.a,null,r.a.createElement(N,null)),r.a.createElement(m.a,null,r.a.createElement(p.a,null,r.a.createElement(f.a,{lg:{size:5,offset:0}},a,r.a.createElement(d.a,{color:"primary",onClick:this.ToggleRandomChar},"Toggle random character"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null))),r.a.createElement(le.a,{path:"/characters",component:re}),r.a.createElement(le.a,{path:"/houses",component:ce}),r.a.createElement(le.a,{path:"/books",exact:!0,component:ie}),r.a.createElement(le.a,{path:"/books/:id",render:function(e){var t=e.match.params.id;return r.a.createElement(ue,{bookId:t})}}))))}}]),n}(a.Component));n(47),n(48);l.a.render(r.a.createElement(se,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.841ef36b.chunk.js.map