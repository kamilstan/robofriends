(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(2),o=n.n(c),l=(n(14),n(3)),i=n(4),s=n(6),u=n(5),h=n(7),m=(n(16),function(e){return r.a.createElement("div",{className:"card dib bg-light-blue pa3 ma3 grow shadow-4 br4 tc f5 "},r.a.createElement("img",{alt:"robot",src:"https://robohash.org/".concat(e.id,"?200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null,e.name),r.a.createElement("p",null,e.email)))}),d=function(e){var t=e.robots.map(function(e,t){return r.a.createElement(m,{key:e.id,id:e.id,name:e.name,email:e.email})});return r.a.createElement("div",null,t)},b=function(e){return r.a.createElement("div",{className:"pa2 ma2 bg-light-yellow shadow-4 br3"},r.a.createElement("input",{className:"bg-light-green br3 pa2 ma2 shadow-4",placeholder:"SEARCH FOR ROBOTS",onChange:e.change}))},f=function(e){return r.a.createElement("div",{style:{height:"800px",overflowY:"scroll",border:"2px solid black"}},e.children)},g=(n(19),function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={searchingValue:"",robots:[]},n.handleSearching=function(e){n.setState({searchingValue:e.target.value})},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e.setState({robots:t})})}},{key:"render",value:function(){var e=this.state,t=e.searchingValue,n=e.robots.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())});return r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{f2:!0},"Robofriends"),r.a.createElement(b,{change:this.handleSearching}),n.length?r.a.createElement(f,null,r.a.createElement(d,{robots:n})):r.a.createElement("h1",{className:"tc"},"Loading"))}}]),t}(a.Component));o.a.render(r.a.createElement(g,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(21)}},[[8,2,1]]]);
//# sourceMappingURL=main.6e826980.chunk.js.map