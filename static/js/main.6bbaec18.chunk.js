(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{15:function(e,n,t){},16:function(e,n,t){},17:function(e,n,t){"use strict";t.r(n);var i=t(0),c=t(1),l=t.n(c),r=t(7),u=t.n(r),a=(t(15),t(9)),o=t(8),d=t(4),s=t(5);t(16);function f(e){return Object(i.jsx)("tr",{children:e.children})}function b(e){var n=e.boardData,t=e.onClickCell,l=function(e){var n=e.target,i=parseInt(n.id);"number"===typeof i&&t(i,"O")},r=function(){return null};Object(c.useEffect)((function(){var n=e.checkWin();if(n){!function(n){var t=n.index,i=n.player,c=e.WINNING_NUMBERS[t];e.endGame(null,i),c.forEach((function(e){document.getElementsByTagName("td")[e].style.backgroundColor="skyblue"}))}(n)}else e.computerRandomMove()}),[e]);var u=n.map((function(e,n){return Object(i.jsx)(f,{children:e.map((function(e){return Object(i.jsx)("td",{id:e.id,onClick:e.isClicked?r:l,children:e.value},e.id)}))},n)}));return Object(i.jsx)("table",{disabled:!0,children:Object(i.jsx)("tbody",{children:u})})}var j=function(e){var n=e.WINNING_NUMBERS,t=Object(c.useState)(e.boardData),l=Object(s.a)(t,2),r=l[0],u=l[1],f=Object(c.useState)({isAiTurn:!1,player:"O",selectedCell:null}),j=Object(s.a)(f,2),v=j[0],m=j[1],O=function(){return r.reduce((function(e,n){return e.concat(n.filter((function(e){return!1===e.isClicked})).map((function(e){return e.id})))}),[])},k=function(e,n){if(C()||0===O().length)h(null,null);else{var t=r.map((function(t){return t.map((function(t){return t.id!==e||t.isClicked?t:Object(d.a)(Object(d.a)({},t),{},{value:n,isClicked:!t.isClicked})}))}));m((function(t){return Object(d.a)(Object(d.a)({},t),{},{isAiTurn:!v.isAiTurn,player:n,selectedCell:e})})),u(t)}},C=function(){var e,t=null,i=v.player,c=r.reduce((function(e,n){return e.concat(n.filter((function(e){return e.value===i})).map((function(e){return e.id})))}),[]),l=Object(o.a)(n.entries());try{for(l.s();!(e=l.n()).done;){var u=Object(s.a)(e.value,2),a=u[0];if(u[1].every((function(e){return c.indexOf(e)>-1}))){t={index:a,player:i};break}}}catch(d){l.e(d)}finally{l.f()}return t},h=function(e,n){"O"===n?e="Hurray! You Won":n?e="Oops! You loose":(e="Game Tie!",Object(a.a)(document.getElementsByTagName("td")).forEach((function(e){return e.style.backgroundColor="steelblue"}))),document.querySelector(".endgame").style.display="block",document.querySelector(".endgame .text").innerText=e};return Object(i.jsxs)("section",{children:[Object(i.jsx)(b,{boardData:r,onClickCell:k,WINNING_NUMBERS:n,checkWin:C,computerRandomMove:function(){if(v.isAiTurn){var e=O(),n=Math.floor(Math.random()*e.length);k(e[n],"X")}return null},endGame:h}),Object(i.jsx)("div",{className:"endgame",children:Object(i.jsx)("div",{className:"text"})})]})},v=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,18)).then((function(n){var t=n.getCLS,i=n.getFID,c=n.getFCP,l=n.getLCP,r=n.getTTFB;t(e),i(e),c(e),l(e),r(e)}))};u.a.render(Object(i.jsx)(l.a.StrictMode,{children:Object(i.jsx)(j,{boardData:[[{id:0,value:null,isClicked:!1},{id:1,value:null,isClicked:!1},{id:2,value:null,isClicked:!1}],[{id:3,value:null,isClicked:!1},{id:4,value:null,isClicked:!1},{id:5,value:null,isClicked:!1}],[{id:6,value:null,isClicked:!1},{id:7,value:null,isClicked:!1},{id:8,value:null,isClicked:!1}]],WINNING_NUMBERS:[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,8]]})}),document.getElementById("root")),v()}},[[17,1,2]]]);
//# sourceMappingURL=main.6bbaec18.chunk.js.map