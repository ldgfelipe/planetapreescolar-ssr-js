(window.webpackJsonp=window.webpackJsonp||[]).push([[29,10],{527:function(t,e,r){"use strict";r.r(e);var o=r(209),c=r(500),n=r(516),l=r(207),d=r(515),h=r(563),f={data:function(){return{test:""}}},m=r(42),component=Object(m.a)(f,(function(){var t=this,e=t._self._c;return e(d.a,{staticClass:"ma-0 pa-0"},[e(n.a,{attrs:{cols:"2"}},[e(o.a,{attrs:{color:"white",size:"70"}},[e("img",{attrs:{src:"/images/logo-planeta.png"}})])],1),t._v(" "),e(n.a,{attrs:{cols:"8"}}),t._v(" "),e(n.a,{attrs:{cols:"2"}},[e(c.a,{attrs:{outlined:"",color:"white"}},[e(l.a,{staticClass:"white--text"},[t._v("mdi-tune")])],1)],1),t._v(" "),e(n.a,{attrs:{cols:"2"}}),t._v(" "),e(n.a,{staticClass:"white--text text-center",attrs:{cols:"9",md:"8"}},[e("h1",[t._v("Recursos educativos para Preescolar")]),t._v(" "),e("p",[t._v("\n      Planeaciones, Hojas de trabajo, Material didáctico, Cantos y Juegos\n    ")])]),t._v(" "),e(n.a,{attrs:{cols:"2"}}),t._v(" "),e(n.a,{attrs:{cols:"2"}}),t._v(" "),e(n.a,{staticClass:"ma-0 pa-0",attrs:{cols:"9",md:"7"}},[e(h.a,{attrs:{label:"Busca todos los recursos",outlined:"",filled:"",color:"melon","background-color":"white"}})],1),t._v(" "),e(n.a,{staticClass:"ma-0 pa-0",attrs:{cols:"1",md:"2"}},[e(c.a,{staticClass:"morado",attrs:{"x-large":""}},[e(l.a,{staticClass:"white--text"},[t._v("\n        mdi-magnify\n      ")])],1)],1),t._v(" "),e(n.a,{attrs:{cols:"2"}})],1)}),[],!1,null,null,null);e.default=component.exports},621:function(t,e,r){"use strict";r.r(e);var o=r(500),c=r(521),n=r(520),l=r(516),d=r(515),h=r(13),f=(r(51),r(5),r(9),r(527)),m=r(530),v=r(534),_={asyncData:function(t){return Object(h.a)(regeneratorRuntime.mark((function e(){var r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.app,t.params,t.error,o=[],e.abrupt("return",r.$fire.firestore.collection("CATEGORIAS").where("tipo","==","materialdidactico").orderBy("fecha").limit(12).get().then((function(t){return t.forEach((function(t){o.push(t.data())})),{arrayrecursos:o}})));case 3:case"end":return e.stop()}}),e)})))()},head:function(){return{title:this.titulo,meta:[{hid:"description",name:"description",content:this.subtitulo},{hid:"keywords",name:"keywords",content:"Recursos, Planeaciones, Tareas, Planetapreescolar"},{hid:"robots",name:"robots",content:"all"},{hid:"googlebot-news",name:"googlebot-news",content:"all"},{hid:"googlebot",name:"googlebot",content:"all"}]}},data:function(){return{titulo:"Material didáctico para los niños",subtitulo:"Loterías, memoramas, juegos, dominós, frisos, gafetes, reglamentos a todo color.",subtipo:"materialdidactico",buscando:!1,arrayrecursosMas:[],last:null}},created:function(){this.buscalast()},methods:{cargarmasrecursos:function(){var t=this;this.$fire.firestore.collection("CATEGORIAS").where("tipo","==",this.subtipo).orderBy("fecha").limit(12).startAfter(this.last).get().then((function(e){t.last=e.docs[e.docs.length-1],e.forEach((function(e){t.arrayrecursos.push(e.data())}))}))},buscalast:function(){var t=this;this.$fire.firestore.collection("CATEGORIAS").where("tipo","==",this.subtipo).orderBy("fecha").limit(12).get().then((function(e){t.last=e.docs[e.docs.length-1]}))}},components:{buscador:f.default,listaRecursos:m.default,dialogfase1:v.default}},w=r(42),component=Object(w.a)(_,(function(){var t=this,e=t._self._c;return e("div",[e("buscador"),t._v(" "),e(c.a,[e(n.a,[e("h2",{staticClass:"primary--text"},[t._v(t._s(t.titulo))]),t._v(" "),e("h3",{staticClass:"melon--text"},[t._v(t._s(t.subtitulo))]),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("listaRecursos",{attrs:{items:t.arrayrecursos}}),t._v(" "),e(d.a,[e(l.a,{staticClass:"text-center",attrs:{cols:"12"}},[e("listaRecursos",{attrs:{items:t.arrayrecursosMas}})],1),t._v(" "),e(l.a,{staticClass:"text-center",attrs:{cols:"12"}},[e(o.a,{staticClass:"melon white--text",on:{click:function(e){return t.cargarmasrecursos()}}},[t._v("Cargar Más...")])],1)],1),t._v(" "),e("dialogfase1")],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);