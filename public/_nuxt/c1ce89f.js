(window.webpackJsonp=window.webpackJsonp||[]).push([[24,9],{547:function(t,e,r){"use strict";r.r(e);var o=r(216),n=r(518),c=r(536),l=r(214),d=r(535),f=r(562),v={data:function(){return{test:""}}},h=r(41),component=Object(h.a)(v,(function(){var t=this,e=t._self._c;return e(d.a,{staticClass:"ma-0 pa-0"},[e(c.a,{attrs:{cols:"2"}},[e(o.a,{attrs:{color:"white",size:"70"}},[e("img",{attrs:{src:"/images/logo-planeta.png"}})])],1),t._v(" "),e(c.a,{attrs:{cols:"8"}}),t._v(" "),e(c.a,{attrs:{cols:"2"}},[e(n.a,{attrs:{outlined:"",color:"white"}},[e(l.a,{staticClass:"white--text"},[t._v("mdi-tune")])],1)],1),t._v(" "),e(c.a,{attrs:{cols:"2"}}),t._v(" "),e(c.a,{staticClass:"white--text text-center",attrs:{cols:"9",md:"8"}},[e("h1",[t._v("Recursos educativos para Preescolar")]),t._v(" "),e("p",[t._v("\n      Planeaciones, Hojas de trabajo, Material didáctico, Cantos y Juegos\n    ")])]),t._v(" "),e(c.a,{attrs:{cols:"2"}}),t._v(" "),e(c.a,{attrs:{cols:"2"}}),t._v(" "),e(c.a,{staticClass:"ma-0 pa-0",attrs:{cols:"9",md:"7"}},[e(f.a,{attrs:{label:"Busca todos los recursos",outlined:"",filled:"",color:"melon","background-color":"white"}})],1),t._v(" "),e(c.a,{staticClass:"ma-0 pa-0",attrs:{cols:"1",md:"2"}},[e(n.a,{staticClass:"morado",attrs:{"x-large":""}},[e(l.a,{staticClass:"white--text"},[t._v("\n        mdi-magnify\n      ")])],1)],1),t._v(" "),e(c.a,{attrs:{cols:"2"}})],1)}),[],!1,null,null,null);e.default=component.exports},636:function(t,e,r){"use strict";r.r(e);var o=r(518),n=r(541),c=r(540),l=r(214),d=(r(7),r(8),r(13),r(15),r(16),r(14)),f=r(2),v=(r(52),r(61),r(4),r(10),r(547)),h=r(549),m=r(558),_=r(56);function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var O={head:function(){return{title:this.titulo,meta:[{hid:"description",name:"description",content:this.subtitulo},{hid:"keywords",name:"keywords",content:"Recursos, Planeaciones, Tareas, Planetapreescolar"},{hid:"robots",name:"robots",content:"all"},{hid:"googlebot-news",name:"googlebot-news",content:"all"},{hid:"googlebot",name:"googlebot",content:"all"}]}},data:function(){return{titulo:"Favoritos",subtipo:"planeacion",buscando:!1,arrayrecursos:[],last:null}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(f.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(_.d)(["userdatacollect"])),mounted:function(){var t=this;setTimeout((function(){t.cargafavoritos()}),2e3)},methods:{cargafavoritos:function(){var t=this;return Object(d.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.arrayrecursos=[],e.prev=1,e.next=4,new Promise((function(e){e(t.userdatacollect)})).then((function(e){t.$fire.firestore.collection("CATEGORIAS").where("favoritos","array-contains",t.userdatacollect.uid).get().then((function(p){p.forEach((function(i){t.arrayrecursos.push(i.data())}))}))}));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})))()}},components:{buscador:v.default,listaRecursos:h.default,dialogfase1:m.default}},y=O,j=r(41),component=Object(j.a)(y,(function(){var t=this,e=t._self._c;return e("div",[e("buscador"),t._v(" "),Object.keys(t.userdatacollect).length>0?e(n.a,[e(c.a,[e("h2",{staticClass:"primary--text"},[t._v(t._s(t.titulo))]),t._v(" "),e(o.a,{staticClass:"melon white--text",on:{click:function(e){return t.cargafavoritos()}}},[e(l.a,[t._v("mdi-reload")])],1),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("listaRecursos",{attrs:{items:t.arrayrecursos}}),t._v(" "),e("dialogfase1")],1)],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports}}]);