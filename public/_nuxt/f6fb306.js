(window.webpackJsonp=window.webpackJsonp||[]).push([[13,7,14,15],{518:function(e,t,r){"use strict";r.r(t);var o=r(610),n=r(205),l=r(476),c=r(497),d=r(496),m=r(579),v=r(585),f=r(536),h=(r(5),{data:function(){return{claims:{admin:!1,premium:!1,level:0},correo:"",respuesta:{},niveles:[{text:"registrado",value:0},{text:"premium",value:1},{text:"administrador",value:2},{text:"superadministrador",value:3}]}},methods:{verclaimsuser:function(){var e=this;this.respuesta={res:"El correo esta incorrecto o no esta registrado"};var t={email:this.correo};try{fetch("https://us-central1-educadorafirebase.cloudfunctions.net/api/v1/adminusers/claims",{method:"POST",mode:"cors",headers:{"Content-type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(t){e.respuesta=t,e.claims=t.customClaims,e.claims.uid=t.uid}))}catch(e){this.respuesta={res:"El correo esta incorrecto o no esta registrado"}}},cambiarClaims:function(){var e={claims:this.claims,uid:this.respuesta.uid,pass:"PlanetaSereyd2022#"};try{fetch("https://us-central1-educadorafirebase.cloudfunctions.net/api/v1/adminusers/editclaims",{method:"POST",mode:"cors",headers:{"Content-type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){console.log(e)}))}catch(e){}}}}),_=r(57),component=Object(_.a)(h,(function(){var e=this,t=e._self._c;return t(c.a,[t(d.b,{staticClass:"morado white--text"},[e._v(" Buscar Usuario ")]),e._v(" "),t(d.a,[t(f.a,{attrs:{label:"ingresa el correo"},model:{value:e.correo,callback:function(t){e.correo=t},expression:"correo"}}),e._v(" "),t(l.a,{staticClass:"morado white--text",on:{click:function(t){return e.verclaimsuser()}}},[e._v("Buscar")]),t("br"),e._v(" "),e.respuesta.res?t("div",[e._v(e._s(e.respuesta.res))]):e._e(),e._v(" "),e.respuesta?t("div",{staticClass:"text-center"},[t("hr"),t("br"),e._v(" "),e.respuesta.photoURL?t(n.a,{attrs:{size:"100"}},[t("img",{attrs:{src:e.respuesta.photoURL}}),t("br")]):e._e(),e._v(" "),t(f.a,{attrs:{outlined:"",label:"uid",readonly:""},model:{value:e.respuesta.uid,callback:function(t){e.$set(e.respuesta,"uid",t)},expression:"respuesta.uid"}}),e._v(" "),t(f.a,{attrs:{outlined:"",label:"Email Verificado",readonly:""},model:{value:e.respuesta.emailVerified,callback:function(t){e.$set(e.respuesta,"emailVerified",t)},expression:"respuesta.emailVerified"}}),e._v(" "),t(f.a,{attrs:{outlined:"",label:"Nombre",readonly:""},model:{value:e.respuesta.displayName,callback:function(t){e.$set(e.respuesta,"displayName",t)},expression:"respuesta.displayName"}}),e._v(" "),t(f.a,{attrs:{outlined:"",label:"Deshabilitado",readonly:""},model:{value:e.respuesta.disabled,callback:function(t){e.$set(e.respuesta,"disabled",t)},expression:"respuesta.disabled"}}),e._v(" "),t("hr"),e._v(" "),e.respuesta.metadata?t("div",[t("b",[e._v("Ùltimo acceso:")]),e._v(e._s(e.respuesta.metadata.lastSignInTime)),t("br"),e._v(" "),t("b",[e._v("Creado: ")]),e._v(e._s(e.respuesta.metadata.creationTime)+"\n  ")]):e._e(),e._v(" "),t("hr"),e._v(" "),t("hr"),e._v(" "),t(o.a,{attrs:{border:"right",color:"blue-grey",dark:""}},[t(m.a,{attrs:{label:"Adimin"},model:{value:e.claims.admin,callback:function(t){e.$set(e.claims,"admin",t)},expression:"claims.admin"}}),e._v(" "),t(m.a,{attrs:{label:"Premium"},model:{value:e.claims.premium,callback:function(t){e.$set(e.claims,"premium",t)},expression:"claims.premium"}}),e._v(" "),t(v.a,{attrs:{outlined:"",label:"Level",items:e.niveles},model:{value:e.claims.level,callback:function(t){e.$set(e.claims,"level",t)},expression:"claims.level"}}),e._v(" "),t(l.a,{on:{click:function(t){return e.cambiarClaims()}}},[e._v("Guardar Cambios")])],1)],1):e._e()],1)],1)}),[],!1,null,null,null);t.default=component.exports},519:function(e,t,r){"use strict";r.r(t);var o=r(497),n=r(496),l=r(536),c=(r(5),{data:function(){return{totalusers:0}},methods:{cargaNUsuarios:function(){var e=this;fetch("https://us-central1-educadorafirebase.cloudfunctions.net/api/v1/adminusers/totalusers").then((function(e){return e.json()})).then((function(t){e.totalusers=t}))}}}),d=r(57),component=Object(d.a)(c,(function(){var e=this,t=e._self._c;return t(o.a,[t(n.b,{staticClass:"morado white--text"},[e._v("\n        Contador de Usuarios\n    ")]),e._v(" "),t(n.a,[t(l.a,{attrs:{outlined:"",readonly:"",label:"total de usuarios","append-icon":"mdi-magnify"},on:{"click:append":function(t){return e.cargaNUsuarios()}},model:{value:e.totalusers,callback:function(t){e.totalusers=t},expression:"totalusers"}})],1)],1)}),[],!1,null,null,null);t.default=component.exports},534:function(e,t,r){"use strict";r.r(t);var o=r(492),n=r(491),l=r(518),c=r(519),d={data:function(){return{}},methods:{},components:{perfilusuario:l.default,contador:c.default}},m=r(57),component=Object(m.a)(d,(function(){var e=this,t=e._self._c;return t("div",[t("h4",[e._v("Administrador Usuarios")]),e._v(" "),t(n.a,[t(o.a,{attrs:{cols:"12",md:"4"}},[t("perfilusuario")],1),e._v(" "),t(o.a,{attrs:{cols:"12",md:"4"}},[t("contador")],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports},537:function(e,t,r){"use strict";r.r(t);var o=r(57),component=Object(o.a)({},(function(){return(0,this._self._c)("div",[this._v("\nAdministrador    recursos\n")])}),[],!1,null,null,null);t.default=component.exports},587:function(e,t,r){"use strict";r.r(t);var o=r(476),n=r(495),l=r(203),c=r(207),d=r(135),m=r(90),v=r(115),f=r(494),h=r(56),_=(r(11),r(7),r(10),r(5),r(15),r(9),r(16),r(2)),y=r(534),O=r(537),k=r(64);function w(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var x={data:function(){return{comselect:"",drawer:null,items:[{title:"Dashboard",icon:"mdi-view-dashboard"},{title:"Usuarios",icon:"mdi-account",comp:"usuarios"},{title:"Recursos",icon:"mdi-notebook",comp:"recursos"},{title:"Landing page",icon:"mdi-page-layout-header-footer"},{title:"Empresas",icon:"mdi-factory"},{title:"Foro",icon:"mdi-forum"},{title:"Soporte",icon:"mdi-face-agent"},{title:"Blog",icon:"mdi-post"},{title:"Sistemas de pago",icon:"mdi-credit-card-outline"},{title:"Pruebas de Servidor",icon:"mdi-server"}]}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(t){Object(_.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(k.c)(["claims","is_login"])),mounted:function(){this.validsesion()},methods:{cargacomponente:function(p){this.comselect=p,this.drawer=!1},validsesion:function(){(!this.is_login||this.claims.level<2)&&this.$router.push("/")}},components:{usuarios:y.default,recursos:O.default}},j=x,P=r(57),component=Object(P.a)(j,(function(){var e=this,t=e._self._c;return t(h.a,{staticStyle:{position:"relative","min-height":"500px",height:"100%",overflow:"auto"}},[t(n.a,[t(o.a,{attrs:{color:"pink",dark:""},on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}},[t(l.a,[e._v("mdi-menu")])],1),e._v(" "),t(e.comselect,{tag:"component"})],1),e._v(" "),t(f.a,{attrs:{absolute:"",temporary:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[t(c.a,{attrs:{dense:""}},e._l(e.items,(function(r){return t(d.a,{key:r.title,attrs:{link:""},on:{click:function(t){return e.cargacomponente(r.comp)}}},[t(v.a,[t(l.a,[e._v(e._s(r.icon))])],1),e._v(" "),t(m.a,[t(m.b,[e._v(e._s(r.title))])],1)],1)})),1)],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);