(function(t){function e(e){for(var s,l,r=e[0],o=e[1],u=e[2],f=0,v=[];f<r.length;f++)l=r[f],i[l]&&v.push(i[l][0]),i[l]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);c&&c(e);while(v.length)v.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],s=!0,r=1;r<n.length;r++){var o=n[r];0!==i[o]&&(s=!1)}s&&(a.splice(e--,1),t=l(l.s=n[0]))}return t}var s={},i={app:0},a=[];function l(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=t,l.c=s,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)l.d(n,s,function(e){return t[e]}.bind(null,s));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var c=o;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var s=n("64a9"),i=n.n(s);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var s=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],l=(n("034f"),n("2877")),r={},o=Object(l["a"])(r,i,a,!1,null,null,null),u=o.exports,c=n("8c4f"),f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"header"}),s("img",{staticClass:"head-img",attrs:{src:n("8554")}}),s("base-info"),s("content-info")],1)},v=[],p=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},d=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"base"},[n("div",{staticClass:"name"},[t._v("马勇坤")]),n("div",{staticClass:"school"},[n("img",{attrs:{src:""}}),t._v(" 河南理工大学")]),n("div",{staticClass:"sex"},[n("div",[t._v("男")]),n("span",[t._v("·")]),n("div",[t._v("本科")]),n("span",[t._v("·")]),n("div",[t._v("23岁")]),n("span",[t._v("·")]),n("div",[t._v("2018/7毕业")])]),n("div",{staticClass:"phone"},[t._v("151 9131 0018")]),n("div",{staticClass:"email"},[t._v("15191310018@163.com")])])}],h={},_=h,g=(n("f61b"),Object(l["a"])(_,p,d,!1,null,"f6c342ae",null)),b=g.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.content,function(e,s){return n("div",{key:s,staticClass:"content"},[e.bigTitle?n("div",{staticClass:"big-title"},[t._v(t._s(e.bigTitle))]):t._e(),n("div",{staticClass:"title"},[e.title?n("span",[t._v(t._s(e.title))]):t._e(),n("div",{staticClass:"right"},[e.span?n("span",[t._v(t._s(e.span))]):t._e()]),e.git?n("div",{staticClass:"git-link"},[n("span",{staticStyle:{color:"#666"}},[t._v(t._s(e.git))]),n("a",{attrs:{href:e.link,target:"_blank"}},[t._v(t._s(e.link))])]):t._e()]),e.smallTitle?n("div",{staticClass:"small-title",domProps:{innerHTML:t._s(e.smallTitle)}}):t._e(),t._l(e.detail,function(e,s){return n("ul",{key:s,staticClass:"detail"},[n("li",{domProps:{innerHTML:t._s(e)}})])}),e.get?n("div",{staticClass:"get"},[n("span",{staticClass:"get-title"},[t._v("项目收获：")]),n("span",[t._v(t._s(e.get))])]):t._e()],2)}),0)},y=[],w=n("b445"),x={data:function(){return{content:w.data}},created:function(){console.log(this.content)}},j=x,C=(n("9eef"),Object(l["a"])(j,m,y,!1,null,"de7a84d0",null)),O=C.exports,T={components:{BaseInfo:b,ContentInfo:O}},S=T,P=(n("8b79"),Object(l["a"])(S,f,v,!1,null,"5918d7e1",null)),k=P.exports;s["a"].use(c["a"]);var M=new c["a"]({routes:[{path:"/",name:"index",component:k}]}),I=n("2f62");s["a"].use(I["a"]);var V=new I["a"].Store({state:{},mutations:{},actions:{}});s["a"].config.productionTip=!1,new s["a"]({router:M,store:V,render:function(t){return t(u)}}).$mount("#app")},5864:function(t,e,n){},"64a9":function(t,e,n){},"6e64":function(t,e,n){},"6f9e":function(t,e,n){},8554:function(t,e,n){t.exports=n.p+"img/1.d955e225.jpg"},"8b79":function(t,e,n){"use strict";var s=n("6e64"),i=n.n(s);i.a},"9eef":function(t,e,n){"use strict";var s=n("6f9e"),i=n.n(s);i.a},b445:function(t){t.exports={data:[{bigTitle:"工作经历",title:"郑州哈希网络有限公司",span:"2018/7-2019/6",smallTitle:"web前端工程师",detail:["① 根据设计完成前端页面布局；","② 与后端工程师协作，完成数据交互、动态信息展现；","③ 优化Web前端性能；","④ 根据产品以及用户的需求，跟进产品的升级。"]},{bigTitle:"专业技能",detail:["<h3 style='font-weight:600;color:cornflowerblue'>精通：</h3>","① HTML、CSS页面布局","② 原生JS,如原型链/作用域链、继承、OOP、Promise等；","<h3 style='font-weight:600;color:cornflowerblue'>熟练使用：</h3>","① vue框架及其全家桶如vue-router、vuex、axios、vue-cli等进行项目开发工作；","② 掌握微信小程序的开发；","③ ajax异步通信技术调用后台数据，进行页面数据渲染，使用CORS、JSONP等方式进行跨域访问；","④ Bootstrap、jQuery等库快速搭建页面和书写业务逻辑。掌握jQuery与DOM操作及事件处理，了解动态绑定事件的原理；","⑤ mysql数据库进行项目数据操作，熟悉nodejs熟练配合express框架创建动态项目的服务器API","<h3 style='font-weight:600;color:cornflowerblue'>熟悉：</h3>","① 响应式布局和移动端布局；","② Vue框架响应式原理","③ 熟悉MVC和MVVM设计模式与模块化开发流程；","④ Sass 、Stylus、等预解析语言进行代码的高效开发和兼容；","<h3 style='font-weight:600;color:cornflowerblue'>了解：</h3>","①  了解并会使用element-ui、mint-ui、vant等UI组件库；","②  了解React.js、Angular及ionic组件库；"]},{bigTitle:"项目经验",title:"去旅行(Vue 移动端网站)",smallTitle:"<span style='font-weight:600;color:#666'>职责描述：</span>去旅行的主页面、详情页与城市选择页面的开发，数据交互，后台接口",detail:["<h3 style='font-weight:600'>应用技术：</h3>","1.使用 Vue 框架，进行单页面网站的组件化开发；","2.Nodejs 配合 express 框架搭建服务器，编写 sql 脚本；","3.通过将页面拆分为多个组件，使得组件间实现了低耦合，提高了某些组件的可复用性，同时提高了代码的可维护性;","4.使用 vue-cli 脚手架进行环境的搭建；","5.使用 vuex 进行非父子组件间数据的传递；","6.使用 vue-router 路由进行页面的跳转；","7.使用 Stylus 预编译书写结构分明，语义化良好的代码；","8.使用 Axios 和后台进行交互，完成了动态获取产品数据，页面的渲染和数据的提交；"],get:"vue移动端网站使我学会了vue项目的开发流程、vue全家桶的使用,对vue基础知识有很深的掌握,极大的提高了我对vue原理学习的兴趣"},{title:"理财宝(响应式)",smallTitle:"<span style='font-weight:600;color:#666'>职责描述：</span>理财宝的主页面、理财频道、新手专区等页面开发，数据交互，登录注册页、验证及后台接口",detail:["<h3 style='font-weight:600'>应用技术：</h3>","1.使用 html 与 css；","2.使用 Dom 与 jQuary 进行登录注册验证与 ajax 的请求与接收响应结果；","3.利用媒体查询技术实现在不同设备下网页显示不同的排版布局与页面元素的显示与隐藏。","4.使用 ajax 技术动态获取产品数据信息并实时更新。"],get:"响应式网站主要使我熟练的应用媒体查询技术、JQuery框架快速开发网站、页面的排版布局能力有较大提升"},{title:"文与字(个人的小程序项目)",smallTitle:"<span style='font-weight:600;color:#666'>项目描述：</span>该项目实现 点赞等组件的开发、主页、欢迎页、详情页、编写文章页、编写文章并发布到主页、上划隐藏按钮、下划动显示按钮、轮播图显示最新五篇文章的图片、点击跳转至对应详情页等功能",git:"项目演示 gif 图地址为：",link:"  https://github.com/makunkun/XCX/blob/master/1.gif",detail:["<h3 style='font-weight:600'>应用技术：</h3>","1.使用微信开发者工具进行项目的编写；","2.熟练编写wxml、wxss、js、json文件；","3.大量使用flex布局进行样式的实现；","4.使用小程序云开发进行图片、数据的存储与调用；","5.使用vant组件库进行输入框与文本域的实现；","6.使用微信小程序提供的API进行项目的开发；"],get:"微信小程序项目使我熟悉小程序的开发流程、小程序组件与API的调用、熟练运用小程序的云开发技术"}]}},f61b:function(t,e,n){"use strict";var s=n("5864"),i=n.n(s);i.a}});
//# sourceMappingURL=app.541ab881.js.map