(window.webpackJsonp=window.webpackJsonp||[]).push([[15,9],{547:function(t,e,r){"use strict";r.r(e);var o=r(216),n=r(518),c=r(536),l=r(214),d=r(535),h=r(562),f={data:function(){return{test:""}}},m=r(41),component=Object(m.a)(f,(function(){var t=this,e=t._self._c;return e(d.a,{staticClass:"ma-0 pa-0"},[e(c.a,{attrs:{cols:"2"}},[e(o.a,{attrs:{color:"white",size:"70"}},[e("img",{attrs:{src:"/images/logo-planeta.png"}})])],1),t._v(" "),e(c.a,{attrs:{cols:"8"}}),t._v(" "),e(c.a,{attrs:{cols:"2"}},[e(n.a,{attrs:{outlined:"",color:"white"}},[e(l.a,{staticClass:"white--text"},[t._v("mdi-tune")])],1)],1),t._v(" "),e(c.a,{attrs:{cols:"2"}}),t._v(" "),e(c.a,{staticClass:"white--text text-center",attrs:{cols:"9",md:"8"}},[e("h1",[t._v("Recursos educativos para Preescolar")]),t._v(" "),e("p",[t._v("\n      Planeaciones, Hojas de trabajo, Material didáctico, Cantos y Juegos\n    ")])]),t._v(" "),e(c.a,{attrs:{cols:"2"}}),t._v(" "),e(c.a,{attrs:{cols:"2"}}),t._v(" "),e(c.a,{staticClass:"ma-0 pa-0",attrs:{cols:"9",md:"7"}},[e(h.a,{attrs:{label:"Busca todos los recursos",outlined:"",filled:"",color:"melon","background-color":"white"}})],1),t._v(" "),e(c.a,{staticClass:"ma-0 pa-0",attrs:{cols:"1",md:"2"}},[e(n.a,{staticClass:"morado",attrs:{"x-large":""}},[e(l.a,{staticClass:"white--text"},[t._v("\n        mdi-magnify\n      ")])],1)],1),t._v(" "),e(c.a,{attrs:{cols:"2"}})],1)}),[],!1,null,null,null);e.default=component.exports},633:function(t,e,r){"use strict";r.r(e);var o=r(518),n=r(541),c=r(540),l=r(536),d=r(535),h=r(14),f=(r(52),r(4),r(10),r(547)),m=r(549),v=r(558),_={asyncData:function(t){return Object(h.a)(regeneratorRuntime.mark((function e(){var r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.app,t.params,t.error,o=[],e.abrupt("return",r.$fire.firestore.collection("CATEGORIAS").where("tipo","==","otro").orderBy("fecha").limit(12).get().then((function(t){return t.forEach((function(t){var e=[];(e=t.data()).idRecurso=t.id,o.push(e)})),{arrayrecursos:o}})));case 3:case"end":return e.stop()}}),e)})))()},head:function(){return{title:this.titulo,meta:[{hid:"description",name:"description",content:this.subtitulo},{hid:"keywords",name:"keywords",content:"Recursos, Planeaciones, Tareas, Planetapreescolar"},{hid:"robots",name:"robots",content:"all"},{hid:"googlebot-news",name:"googlebot-news",content:"all"},{hid:"googlebot",name:"googlebot",content:"all"}]}},data:function(){return{titulo:"Administración",subtitulo:"Material de administración y consulta que complementa tu actividad diaria.",subtipo:"otro",buscando:!1,arrayrecursosMas:[],last:null}},created:function(){this.buscalast()},methods:{cargarmasrecursos:function(){var t=this;this.$fire.firestore.collection("CATEGORIAS").where("tipo","==",this.subtipo).orderBy("fecha").limit(12).startAfter(this.last).get().then((function(e){t.last=e.docs[e.docs.length-1],e.forEach((function(r){var o=[];(o=r.data()).idRecurso=e.id,t.arrayrecursos.push(o)}))}))},buscalast:function(){var t=this;this.$fire.firestore.collection("CATEGORIAS").where("tipo","==",this.subtipo).orderBy("fecha").limit(12).get().then((function(e){t.last=e.docs[e.docs.length-1]}))}},components:{buscador:f.default,listaRecursos:m.default,dialogfase1:v.default}},w=r(41),component=Object(w.a)(_,(function(){var t=this,e=t._self._c;return e("div",[e("buscador"),t._v(" "),e(n.a,[e(c.a,[e("h2",{staticClass:"primary--text"},[t._v(t._s(t.titulo))]),t._v(" "),e("h3",{staticClass:"melon--text"},[t._v(t._s(t.subtitulo))]),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("listaRecursos",{attrs:{items:t.arrayrecursos}}),t._v(" "),e(d.a,[e(l.a,{staticClass:"text-center",attrs:{cols:"12"}},[e("listaRecursos",{attrs:{items:t.arrayrecursosMas}})],1),t._v(" "),e(l.a,{staticClass:"text-center",attrs:{cols:"12"}},[e(o.a,{staticClass:"melon white--text",on:{click:function(e){return t.cargarmasrecursos()}}},[t._v("Cargar Más...")])],1)],1),t._v(" "),e("dialogfase1")],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);