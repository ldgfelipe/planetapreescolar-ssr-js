(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{549:function(t,e,r){"use strict";r.r(e);var n=r(541),o=r(540),c=r(536),l=r(214),f=r(535),d=(r(28),r(64),r(7),r(8),r(13),r(15),r(10),r(16),r(79)),v=r(2),m=(r(4),r(185),r(77),r(56));function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function _(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(v.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var O={data:function(){return{}},computed:_({},Object(m.d)(["dialogfase1","recursoSelect","userdatacollect"])),methods:_(_({},Object(m.c)(["seleccionaRecurso","agregaRelacionados","vistafase1","camiaStatusAudio"])),{},{SelectRecurso:function(p){var t=this;this.seleccionaRecurso(p),"audio"===p.tipoRecurso&&this.camiaStatusAudio(!0),new Promise((function(e){var r=Object(d.a)(t.items),n=r.indexOf(p);!1===t.dialogfase1?r.splice(n,1):(r.push(t.recursoSelect),r.splice(n,1),t.scrollToTop()),e(r)})).then((function(e){t.agregaRelacionados(e),t.vistafase1(!0)}))},scrollToTop:function(){console.log("Scroll data"),window.scrollTo(0,0)},ncomentarios:function(p){var t=0;return p.length>0&&p.map((function(e){!0===e.status&&(t+=1)})),t},addfavoritos:function(p){var t=p,e=t.favoritos.indexOf(this.userdatacollect.uid);e<=0?(t.favoritos.push(this.userdatacollect.uid),this.$fire.firestore.collection("CATEGORIAS").doc(p.idRecurso).update(t).then((function(t){}))):(t.favoritos.splice(e,1),this.$fire.firestore.collection("CATEGORIAS").doc(p.idRecurso).update(t).then((function(t){})))}}),props:{items:[]}},x=(r(554),r(41)),component=Object(x.a)(O,(function(){var t=this,e=t._self._c;return e("div",[e(f.a,t._l(t.items,(function(r,f){return e(c.a,{key:"recurso"+f,attrs:{cols:"12",xl:"2",lg:"3",md:"3",sm:"4",xs:"6"}},[e(n.a,{attrs:{elevation:"0"}},[e(o.a,{staticClass:"pa-0 grey areaRecurso"},["link"!==r.tipoRecurso?e("div",{class:r.premium?"labeltp labelPremium":" labeltp labelFree",attrs:{elevation:"2"}},[t._v("\n            "+t._s(r.premium?"PREMIUM":"FREE")+"\n          ")]):t._e(),t._v(" "),"link"===r.tipoRecurso?e("div",{staticClass:"videoBtn",on:{click:function(e){return t.SelectRecurso(r)}}},[e(l.a,{staticClass:"white--text"},[t._v("mdi-arrow-expand")])],1):t._e(),t._v(" "),r.comentarios?e("div",{staticClass:"commentchip"},[t._v("\n           "+t._s(t.ncomentarios(r.comentarios))+" "),e(l.a,{staticClass:"melon--text icono"},[t._v("mdi-chat")])],1):t._e(),t._v(" "),e("div",{staticClass:"favoritosicon",on:{click:function(e){return t.addfavoritos(r)}}},[e(l.a,{staticClass:"melon--text iconofav"},[t._v(t._s(r.favoritos&&r.favoritos.length>0&&r.favoritos.indexOf(t.userdatacollect.uid)>0?"mdi-cards-heart":"mdi-cards-heart-outline"))])],1),t._v(" "),"link"===r.tipoRecurso?e("iframe",{attrs:{width:"auto",height:"auto",src:r.urlVista.replace("watch?v=","embed/"),frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}):t._e(),t._v(" "),"link"!==r.tipoRecurso?e("img",{attrs:{src:r.urlImagen,height:"100%"},on:{click:function(e){return t.SelectRecurso(r)}}}):t._e()]),t._v(" "),e(o.a,[t._v("\n          "+t._s(r.tipoRecurso)+"\n          "+t._s(r.tipo)+"\n          "),e("h3",[t._v(t._s(r.titulo))]),t._v(" "),e("p",[t._v(t._s(r.sinopsis?r.sinopsis.substr(0,109):""))])])],1)],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports},550:function(t,e,r){var content=r(555);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("034df2fa",content,!0,{sourceMap:!1})},554:function(t,e,r){"use strict";r(550)},555:function(t,e,r){var n=r(18)(!1);n.push([t.i,"\n.areaRecurso {\n  height: 150px;\n  text-align: center;\n  overflow: hidden;\n  cursor: pointer;\n}\n.areaRecurso:hover {\n  opacity: 0.8;\n  position:relative;\n}\n.spminirecurso {\n  background-color: grey;\n  border: solid #f6f7f8 1px;\n}\n.labeltp {\n  position: absolute;\n  z-index: 1;\n  right: 3px;\n  top: 3px;\n  width: 80px;\n  border-radius: 5px;\n  font-size: 10px;\n  color: #fff;\n}\n.labelPremium {\n  background-color: #ff6c5c;\n}\n.labelFree {\n  background-color: #ad227d;\n}\n.videoBtn{\n  border-radius:50%;\n  width:30px;\n  height:30px;\n  position:absolute;\n  z-index:2;\n  top:3px;\n  left:3px;\n  background-color:#ad227d;\n  color:#fff;\n  padding:1px;\n}\n.commentchip{\n  border-radius:5px;\n  width:50px;\n  height:20px;\n  position:absolute;\n  z-index:2;\n  top:120px;\n  font-size:10px;\n  right:3px;\n  background-color:#fff;\n  color:#000;\n  padding:1px;\n}\n.commentchip .icono{\n  font-size:16px;\n}\n.favoritosicon{\n  border-radius:5px;\n  width:25px;\n  height:20px;\n  position:absolute;\n  z-index:2;\n  top:120px;\n  font-size:10px;\n  left:3px;\n  background-color:#fff;\n  color:#000;\n  padding:1px;\n}\n.favoritosicon .iconofav{\n  font-size:16px;\n}\n",""]),t.exports=n},564:function(t,e,r){"use strict";r.r(e);var n=r(518),o=r(541),c=r(540),l=r(536),f=r(568),d=r(214),v=r(215),m=r(535),h=r(531),_=(r(7),r(8),r(13),r(4),r(15),r(10),r(16),r(2)),O=r(56);function x(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(e){Object(_.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var w={data:function(){return{paginas:[1,2,3],numPages:0,pdfload:{},pageLoader:0,vista:"4"}},computed:y({},Object(O.d)(["dialogfase2","recursoSelect","claims","is_login","loadDescarga"])),mounted:function(){this.recursoSelect.urlVista&&this.cargaPDF()},methods:y(y(y({},Object(O.c)(["vistafase2","vistaAlertas","cargaTipoalerta"])),Object(O.b)(["ValidaDescargarArchivo"])),{},{DescargarArchivo:function(){this.ValidaDescargarArchivo()},cerrarVentana:function(){this.vistafase2(!1)},cambiaVista:function(p){this.vista=p},cargaPDF:function(){var t=this;this.$pdf.createLoadingTask(this.recursoSelect.urlVista).promise.then((function(e){t.numPages=e._pdfInfo.numPages}))}})},j=r(41),component=Object(j.a)(w,(function(){var t=this,e=t._self._c;return e(f.a,{attrs:{fullscreen:"",persistent:""},model:{value:t.dialogfase2,callback:function(e){t.dialogfase2=e},expression:"dialogfase2"}},[e(o.a,[e(c.b,{staticClass:"primary white--text"},[t._v("\n      Descarga Archivo "),e(h.a),t._v(" "),e(n.a,{staticClass:"melon white--text",on:{click:function(e){return t.cerrarVentana()}}},[e(d.a,[t._v("mdi-arrow-left-bold")])],1)],1),t._v(" "),e(c.a,[e(o.a,{staticClass:"ma-auto",attrs:{"max-width":"1300"}},[e(c.a,{staticStyle:{"background-image":"url(/images/back/backstart.jpg)","background-repeat":"repeat"}},[e("h2",{staticClass:"primary--text"},[t._v(t._s(t.recursoSelect.titulo))]),t._v(" "),e("p",[t._v("\n            Por "+t._s(t.recursoSelect.nombreCreador)),e("br"),t._v("Fecha\n            "+t._s(t.$moment(t.recursoSelect.fecha).format("DD MMMM YYYY"))+"\n          ")]),t._v(" "),t.loadDescarga?t._e():e(n.a,{staticClass:"melon white--text",on:{click:function(e){return t.DescargarArchivo()}}},[t._v("Descargar")]),t._v(" "),t.loadDescarga?e(v.a,{attrs:{size:70,width:7,color:"purple",indeterminate:""}}):t._e()],1),t._v(" "),e(c.b,[t._v("\n          Paginas: "+t._s(t.numPages)+" "),e(h.a),t._v(" "),e(n.a,{staticClass:"primary",on:{click:function(e){return t.cambiaVista("12")}}},[e(d.a,{staticClass:"white--text"},[t._v("mdi-border-all-variant")])],1),t._v(" "),e(n.a,{staticClass:"primary",on:{click:function(e){return t.cambiaVista("6")}}},[e(d.a,{staticClass:"white--text"},[t._v("mdi-border-all")])],1),t._v(" "),e(n.a,{staticClass:"primary",on:{click:function(e){return t.cambiaVista("4")}}},[e(d.a,{staticClass:"white--text"},[t._v("mdi-apps")])],1)],1),t._v(" "),e(c.a,[e(m.a,t._l(t.numPages,(function(r){return e(l.a,{key:r+"-pagina",staticClass:"pa-1",staticStyle:{position:"relative"},attrs:{cols:t.vista}},[e(o.a,[e(c.a,[e("client-only",[e("pdf",{staticStyle:{position:"relative","z-index":"1"},attrs:{src:t.recursoSelect.urlVista,page:r,placeholder:"Cargando..."}}),t._v(" "),t.recursoSelect.premium&&!t.claims.premium&&1!==r?e("div",{staticStyle:{position:"absolute",top:"0px",left:"0px","z-index":"10","background-color":"#fff","text-align":"center",height:"100%"}},[e("img",{staticStyle:{width:"100%"},attrs:{src:"planeacion"===t.recursoSelect.tipo?"pantallas/3Estas leyendo previsualizacion.png":"otro"===t.recursoSelect.tipo?"pantallas/7Que estas esperando.png":"pantallas/5Descubriste una funcion premium.png"}}),t._v(" "),e(n.a,{staticClass:"melon white--text",staticStyle:{"text-transform":"none"},attrs:{to:"/checkout"}},[t._v("¡Hazte Premium!")]),t._v(" "),e("br"),t._v(" "),e("br")],1):t._e()],1)],1)],1)],1)})),1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},565:function(t,e,r){"use strict";r.r(e);var n=r(518),o=r(541),c=r(540),l=r(568),f=r(214),d=(r(7),r(8),r(13),r(4),r(15),r(10),r(16),r(2)),v=r(56);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(d.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var _={data:function(){return{ventanas:[{labelbtn1:"Inicia Sesión",btn1:!0,link1:"/login",labelbtn2:"Regístrate",btn2:!0,link2:"/register",img:"/pantallas/1Continua navegando.png"},{labelbtn1:"Vuelvete Premium",btn1:!0,link1:"/checkout",labelbtn2:"",btn2:!1,link2:"",img:"/pantallas/6Te gusto este material.png"}]}},computed:h({},Object(v.d)(["dialogalerta","tipoalerta"])),methods:h(h({},Object(v.c)(["vistaAlertas","vistafase2"])),{},{cierraAlerta:function(){this.vistaAlertas(!1)},linka:function(p){this.vistafase2(!1),this.vistaAlertas(!1),this.$router.push(p)}})},O=r(41),component=Object(O.a)(_,(function(){var t=this,e=t._self._c;return e(l.a,{attrs:{"max-width":"500",persistent:""},model:{value:t.dialogalerta,callback:function(e){t.dialogalerta=e},expression:"dialogalerta"}},[e(o.a,[e(c.a,{staticClass:"text-center"},[e(n.a,{attrs:{elevation:"0"},on:{click:function(e){return t.cierraAlerta()}}},[e(f.a,{staticClass:"primary--text"},[t._v("mdi-close")])],1),e("br"),t._v(" "),e("img",{attrs:{src:t.ventanas[t.tipoalerta].img,width:"100%"}}),t._v(" "),t.ventanas[t.tipoalerta].btn1?e(n.a,{staticClass:"primary white--text",on:{click:function(e){return t.linka(t.ventanas[t.tipoalerta].link1)}}},[t._v(t._s(t.ventanas[t.tipoalerta].labelbtn1))]):t._e(),t._v(" "),t.ventanas[t.tipoalerta].btn2?e(n.a,{staticClass:"primary white--text",on:{click:function(e){return t.linka(t.ventanas[t.tipoalerta].link2)}}},[t._v(t._s(t.ventanas[t.tipoalerta].labelbtn2))]):t._e()],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},582:function(t,e,r){var content=r(621);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("b45d25b2",content,!0,{sourceMap:!1})},620:function(t,e,r){"use strict";r(582)},621:function(t,e,r){var n=r(18)(!1);n.push([t.i,"\n.contentRecurso {\n  color: #000;\n}\n",""]),t.exports=n},648:function(t,e,r){"use strict";r.r(e);var n=r(518),o=r(541),c=r(540),l=r(536),f=r(568),d=r(214),v=r(215),m=r(535),h=r(531),_=r(571),O=(r(7),r(8),r(13),r(4),r(15),r(10),r(16),r(2)),x=r(564),y=r(56),w=r(549),j=r(565);function k(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function P(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(e){Object(O.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var S={data:function(){return{}},computed:P({},Object(y.d)(["dialogfase1","recursoSelect","relacionados","is_login","loadDescarga"])),methods:P(P(P({},Object(y.c)(["vistafase1","vistafase2","vistaAlertas","cargaTipoalerta","cambiaLoadDescarga"])),Object(y.b)(["ValidaDescargarArchivo"])),{},{cierraDialog:function(){this.vistafase2(!1),this.vistafase1(!1)},DescargarArchivo:function(){this.cambiaLoadDescarga(!0),this.ValidaDescargarArchivo()}}),components:{recursos:w.default,fase2tipo1:x.default,AlertaPlaneta:j.default}},D=(r(620),r(41)),component=Object(D.a)(S,(function(){var t=this,e=t._self._c;return e(f.a,{staticStyle:{"z-index":"2"},attrs:{fullscreen:"",persistent:""},model:{value:t.dialogfase1,callback:function(e){t.dialogfase1=e},expression:"dialogfase1"}},[e(o.a,[e(c.b,{staticClass:"primary"},[e("img",{staticStyle:{width:"55px",height:"40px"},attrs:{src:"/images/logos/planeta_preescolar_bco.png"}}),t._v(" "),e(h.a),t._v(" "),e(n.a,{staticClass:"melon",on:{click:function(e){return t.cierraDialog()}}},[e(d.a,{staticClass:"white--text"},[t._v("mdi-close")])],1)],1),t._v(" "),e(c.a,[e(o.a,[e(c.a,[e(m.a,[e(l.a,{attrs:{cols:"12",md:"5"}},[e("img",{attrs:{src:t.recursoSelect.urlImagen,width:"100%"}})]),t._v(" "),e(l.a,{staticClass:"contentRecurso",attrs:{cols:"12",md:"7"}},[e("h3",[t._v(t._s(t.recursoSelect.titulo))]),t._v(" "),e("p",[t._v(t._s(t.recursoSelect.materia))]),t._v(" "),e("p",[t._v(t._s(t.recursoSelect.grado))]),t._v(" "),e("br"),t._v(" "),e("p",[t._v("\n                "+t._s(t.recursoSelect.sinopsis)+"\n              ")]),t._v(" "),t.loadDescarga?t._e():e(n.a,{staticClass:"melon white--text",on:{click:function(e){return t.DescargarArchivo()}}},[t._v("Descargar")]),t._v(" "),t.loadDescarga?e(v.a,{attrs:{size:70,width:7,color:"purple",indeterminate:""}}):t._e()],1)],1),t._v(" "),e("h3",{staticClass:"primary--text"},[t._v("Comentarios")]),t._v(" "),e(_.a,{attrs:{outlined:"",label:"Comenta aquí"}}),t._v(" "),e("h2",{staticClass:"primary--text"},[t._v("Relacionados")]),t._v(" "),e("recursos",{attrs:{items:t.relacionados}})],1)],1),t._v(" "),e("fase2tipo1")],1)],1),t._v(" "),e("AlertaPlaneta")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Recursos:r(549).default})}}]);