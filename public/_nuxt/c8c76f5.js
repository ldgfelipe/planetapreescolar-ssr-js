(window.webpackJsonp=window.webpackJsonp||[]).push([[18,8],{496:function(t,e,r){"use strict";r.d(e,"a",(function(){return d})),r.d(e,"b",(function(){return v}));var o=r(497),n=r(0),c=Object(n.h)("v-card__actions"),l=Object(n.h)("v-card__subtitle"),d=Object(n.h)("v-card__text"),v=Object(n.h)("v-card__title");o.a},497:function(t,e,r){"use strict";r(11),r(7),r(10),r(5),r(15),r(9),r(16);var o=r(2),n=(r(30),r(216),r(217),r(498),r(218)),c=r(500),l=r(89),d=r(13);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(c.a,l.a,n.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return h(h({"v-card":!0},l.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},n.a.options.computed.classes.call(this))},styles:function(){var style=h({},n.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=c.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},498:function(t,e,r){var content=r(499);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("e23b7040",content,!0,{sourceMap:!1})},499:function(t,e,r){var o=r(21)(!1);o.push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__text,.theme--light.v-card>.v-card__subtitle{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__text,.theme--dark.v-card>.v-card__subtitle{color:rgba(255,255,255,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0px 3px 1px -2px rgba(0,0,0,.2),0px 2px 2px 0px rgba(0,0,0,.14),0px 1px 5px 0px rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;overflow-wrap:break-word;position:relative;white-space:normal}.v-card>*:first-child:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>.v-card__progress+*:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>*:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0px 0px 0px 0px rgba(0,0,0,.2),0px 0px 0px 0px rgba(0,0,0,.14),0px 0px 0px 0px rgba(0,0,0,.12) !important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(0.25, 0.8, 0.25, 1)}.v-sheet.v-card--hover:hover,.v-sheet.v-card--hover:focus{box-shadow:0px 5px 5px -3px rgba(0,0,0,.2),0px 8px 10px 1px rgba(0,0,0,.14),0px 3px 14px 2px rgba(0,0,0,.12)}.v-card--link{cursor:pointer}.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:.2s opacity}.v-card--disabled{pointer-events:none;user-select:none}.v-card--disabled>*:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0px 5px 5px -3px rgba(0,0,0,.2),0px 8px 10px 1px rgba(0,0,0,.14),0px 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=o},501:function(t,e,r){var content=r(506);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("5ecdd99d",content,!0,{sourceMap:!1})},504:function(t,e,r){"use strict";r.r(e);var o=r(497),n=r(496),c=r(492),l=r(491),d=(r(11),r(7),r(10),r(15),r(9),r(16),r(139)),v=r(2),h=(r(5),r(175),r(64));function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function _(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(v.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var x={data:function(){return{}},methods:_(_({},Object(h.b)(["seleccionaRecurso","agregaRelacionados","vistafase1"])),{},{SelectRecurso:function(p){var t=this;this.seleccionaRecurso(p),new Promise((function(e){var r=Object(d.a)(t.items),o=r.indexOf(p);r.splice(o,1),e(r)})).then((function(e){t.agregaRelacionados(e),t.vistafase1(!0)}))}}),components:{},props:{items:[]}},m=(r(505),r(57)),component=Object(m.a)(x,(function(){var t=this,e=t._self._c;return e("div",[e(l.a,t._l(t.items,(function(r,l){return e(c.a,{key:"recurso"+l,attrs:{cols:"12",xl:"2",lg:"3",md:"3",sm:"4",xs:"6"}},[e(o.a,{attrs:{elevation:"0"}},[e(n.a,{staticClass:"pa-0 grey areaRecurso",on:{click:function(e){return t.SelectRecurso(r)}}},[e("div",{class:r.premium?"labeltp labelPremium":" labeltp labelFree",attrs:{elevation:"2"}},[t._v("\n            "+t._s(r.premium?"PREMIUM":"FREE")+"\n          ")]),t._v(" "),e("img",{attrs:{src:r.urlImagen,height:"100%"}})]),t._v(" "),e(n.a,[e("h3",[t._v(t._s(r.titulo))]),t._v("\n          "+t._s(r.materia)),e("br"),t._v(" "),e("p",[t._v(t._s(r.sinopsis.substr(0,109)))])])],1)],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports},505:function(t,e,r){"use strict";r(501)},506:function(t,e,r){var o=r(21)(!1);o.push([t.i,"\n.areaRecurso {\n  height: 150px;\n  text-align: center;\n  overflow: hidden;\n  cursor: pointer;\n}\n.areaRecurso:hover {\n  opacity: 0.8;\n}\n.spminirecurso {\n  background-color: grey;\n  border: solid #f6f7f8 1px;\n}\n.labeltp {\n  position: absolute;\n  z-index: 1;\n  right: 3px;\n  top: 3px;\n  width: 80px;\n  border-radius: 5px;\n  font-size: 10px;\n  color: #fff;\n}\n.labelPremium {\n  background-color: #ff6c5c;\n}\n.labelFree {\n  background-color: #ad227d;\n}\n",""]),t.exports=o},507:function(t,e,r){"use strict";r.r(e);var o=r(205),n=r(476),c=r(492),l=r(203),d=r(491),v=r(536),h={data:function(){return{test:""}}},f=r(57),component=Object(f.a)(h,(function(){var t=this,e=t._self._c;return e(d.a,{staticClass:"ma-0 pa-0"},[e(c.a,{attrs:{cols:"2"}},[e(o.a,{attrs:{color:"white",size:"70"}},[e("img",{attrs:{src:"/images/logo-planeta.png"}})])],1),t._v(" "),e(c.a,{attrs:{cols:"8"}}),t._v(" "),e(c.a,{attrs:{cols:"2"}},[e(n.a,{attrs:{outlined:"",color:"white"}},[e(l.a,{staticClass:"white--text"},[t._v("mdi-tune")])],1)],1),t._v(" "),e(c.a,{attrs:{cols:"2"}}),t._v(" "),e(c.a,{staticClass:"white--text text-center",attrs:{cols:"9",md:"8"}},[e("h1",[t._v("Recursos educativos para Preescolar")]),t._v(" "),e("p",[t._v("\n      Planeaciones, Hojas de trabajo, Material didáctico, Cantos y Juegos\n    ")])]),t._v(" "),e(c.a,{attrs:{cols:"2"}}),t._v(" "),e(c.a,{attrs:{cols:"2"}}),t._v(" "),e(c.a,{staticClass:"ma-0 pa-0",attrs:{cols:"9",md:"7"}},[e(v.a,{attrs:{label:"Busca todos los recursos",outlined:"",filled:"",color:"melon","background-color":"white"}})],1),t._v(" "),e(c.a,{staticClass:"ma-0 pa-0",attrs:{cols:"1",md:"2"}},[e(n.a,{staticClass:"morado",attrs:{"x-large":""}},[e(l.a,{staticClass:"white--text"},[t._v("\n        mdi-magnify\n      ")])],1)],1),t._v(" "),e(c.a,{attrs:{cols:"2"}})],1)}),[],!1,null,null,null);e.default=component.exports},588:function(t,e,r){"use strict";r.r(e);var o=r(476),n=r(497),c=r(496),l=r(492),d=r(491),v=r(18),h=(r(58),r(5),r(9),r(507)),f=r(504),_={asyncData:function(t){return Object(v.a)(regeneratorRuntime.mark((function e(){var r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.app,t.params,t.error,o=[],e.abrupt("return",r.$fire.firestore.collection("CATEGORIAS").where("tipo","==","blog").orderBy("fecha").limit(12).get().then((function(t){return t.forEach((function(t){o.push(t.data())})),{arrayrecursos:o}})));case 3:case"end":return e.stop()}}),e)})))()},head:function(){return{title:this.titulo,meta:[{hid:"description",name:"description",content:this.subtitulo},{hid:"keywords",name:"keywords",content:"Recursos, Planeaciones, Tareas, Planetapreescolar"},{hid:"robots",name:"robots",content:"all"},{hid:"googlebot-news",name:"googlebot-news",content:"all"},{hid:"googlebot",name:"googlebot",content:"all"}]}},data:function(){return{titulo:"Blog de la educadora",subtitulo:"Conoce lo que pasa en la educación preescolar.",subtipo:"blog",buscando:!1,arrayrecursosMas:[],last:null}},created:function(){this.buscalast()},methods:{cargarmasrecursos:function(){var t=this;this.$fire.firestore.collection("CATEGORIAS").where("tipo","==",this.subtipo).orderBy("fecha").limit(12).startAfter(this.last).get().then((function(e){t.last=e.docs[e.docs.length-1],e.forEach((function(e){t.arrayrecursos.push(e.data())}))}))},buscalast:function(){var t=this;this.$fire.firestore.collection("CATEGORIAS").where("tipo","==",this.subtipo).orderBy("fecha").limit(12).get().then((function(e){t.last=e.docs[e.docs.length-1]}))}},components:{buscador:h.default,listaRecursos:f.default}},x=r(57),component=Object(x.a)(_,(function(){var t=this,e=t._self._c;return e("div",[e("buscador"),t._v(" "),e(n.a,[e(c.a,[e("h2",{staticClass:"primary--text"},[t._v(t._s(t.titulo))]),t._v(" "),e("h3",{staticClass:"melon--text"},[t._v(t._s(t.subtitulo))]),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("listaRecursos",{attrs:{items:t.arrayrecursos}}),t._v(" "),e(d.a,[e(l.a,{staticClass:"text-center",attrs:{cols:"12"}},[e("listaRecursos",{attrs:{items:t.arrayrecursosMas}})],1),t._v(" "),e(l.a,{staticClass:"text-center",attrs:{cols:"12"}},[e(o.a,{staticClass:"melon white--text",on:{click:function(e){return t.cargarmasrecursos()}}},[t._v("Cargar Más...")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);