(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{524:function(e,t,r){"use strict";r(30);var n=r(1),o=(r(11),r(7),r(10),r(5),r(16),r(9),r(17),r(2)),l=(r(119),r(525),r(223)),c=r(140),h=r(40),d=r(141),f=r(224),m=r(43),v=r(0),_=r(14);function y(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var O=Object(_.a)(h.a,Object(d.b)(["absolute","fixed","top","bottom"]),f.a,m.a).extend({name:"v-progress-linear",directives:{intersect:c.a},props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0,isVisible:!0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(v.g)(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(v.g)(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var e;return e={opacity:null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity)},Object(o.a)(e,this.isReversed?"right":"left",Object(v.g)(this.normalizedValue,"%")),Object(o.a)(e,"width",Object(v.g)(Math.max(0,this.normalizedBuffer-this.normalizedValue),"%")),e},classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,"v-progress-linear--visible":this.isVisible},this.themeClasses)},computedTransition:function(){return this.indeterminate?l.c:l.d},isReversed:function(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var e={};return this.active||(e.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(e.width=Object(v.g)(this.normalizedBuffer,"%")),e}},methods:{genContent:function(){var slot=Object(v.n)(this,"default",{value:this.internalLazyValue});return slot?this.$createElement("div",{staticClass:"v-progress-linear__content"},slot):null},genListeners:function(){var e=this.$listeners;return this.reactive&&(e.click=this.onClick),e},genProgressBar:function(e){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(o.a)({},e,!0)}))},onClick:function(e){if(this.reactive){var t=this.$el.getBoundingClientRect().width;this.internalValue=e.offsetX/t*100}},onObserve:function(e,t,r){this.isVisible=r},normalize:function(e){return e<0?0:e>100?100:parseFloat(e)}},render:function(e){return e("div",{staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:{bottom:this.bottom?0:void 0,height:this.active?Object(v.g)(this.height):0,top:this.top?0:void 0},on:this.genListeners()},[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),k=O;t.a=n.a.extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(k,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},525:function(e,t,r){var content=r(526);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(20).default)("cf87dc84",content,!0,{sourceMap:!1})},526:function(e,t,r){var n=r(19)(!1);n.push([e.i,".theme--light.v-progress-linear{color:rgba(0,0,0,.87)}.theme--dark.v-progress-linear{color:#fff}.v-progress-linear{background:transparent;overflow:hidden;position:relative;transition:.2s cubic-bezier(0.4, 0, 0.6, 1);width:100%}.v-progress-linear__buffer{height:inherit;left:0;position:absolute;top:0;transition:inherit;width:100%}.v-progress-linear--reverse .v-progress-linear__buffer{left:auto;right:0}.v-progress-linear__background{bottom:0;left:0;position:absolute;top:0;transition:inherit}.v-progress-linear--reverse .v-progress-linear__background{left:auto;right:0}.v-progress-linear__content{align-items:center;display:flex;height:100%;left:0;justify-content:center;position:absolute;top:0;width:100%}.v-progress-linear--reverse .v-progress-linear__content{left:auto;right:0}.v-progress-linear__determinate{height:inherit;left:0;position:absolute;transition:inherit}.v-progress-linear--reverse .v-progress-linear__determinate{left:auto;right:0}.v-progress-linear .v-progress-linear__indeterminate .long,.v-progress-linear .v-progress-linear__indeterminate .short{animation-play-state:paused;background-color:inherit;bottom:0;height:inherit;left:0;position:absolute;right:auto;top:0;width:auto;will-change:left,right}.v-progress-linear .v-progress-linear__indeterminate--active .long{animation-name:indeterminate-ltr;animation-duration:2.2s;animation-iteration-count:infinite}.v-progress-linear .v-progress-linear__indeterminate--active .short{animation-name:indeterminate-short-ltr;animation-duration:2.2s;animation-iteration-count:infinite}.v-progress-linear--reverse .v-progress-linear__indeterminate .long,.v-progress-linear--reverse .v-progress-linear__indeterminate .short{left:auto;right:0}.v-progress-linear--reverse .v-progress-linear__indeterminate--active .long{animation-name:indeterminate-rtl}.v-progress-linear--reverse .v-progress-linear__indeterminate--active .short{animation-name:indeterminate-short-rtl}.v-progress-linear__stream{animation:stream-ltr .25s infinite linear;animation-play-state:paused;border-color:currentColor;border-top:4px dotted;bottom:0;left:auto;right:-8px;opacity:.3;pointer-events:none;position:absolute;top:calc(50% - 2px);transition:inherit}.v-progress-linear--reverse .v-progress-linear__stream{animation:stream-rtl .25s infinite linear;left:-8px;right:auto}.v-progress-linear__wrapper{overflow:hidden;position:relative;transition:inherit}.v-progress-linear--absolute,.v-progress-linear--fixed{left:0;z-index:1}.v-progress-linear--absolute{position:absolute}.v-progress-linear--fixed{position:fixed}.v-progress-linear--reactive .v-progress-linear__content{pointer-events:none}.v-progress-linear--rounded{border-radius:4px}.v-progress-linear--striped .v-progress-linear__determinate{background-image:linear-gradient(135deg, rgba(255, 255, 255, 0.25) 25%, transparent 0, transparent 50%, rgba(255, 255, 255, 0.25) 0, rgba(255, 255, 255, 0.25) 75%, transparent 0, transparent);background-size:40px 40px;background-repeat:repeat}.v-progress-linear--query .v-progress-linear__indeterminate--active .long{animation-name:query-ltr;animation-duration:2s;animation-iteration-count:infinite}.v-progress-linear--query .v-progress-linear__indeterminate--active .short{animation-name:query-short-ltr;animation-duration:2s;animation-iteration-count:infinite}.v-progress-linear--query.v-progress-linear--reverse .v-progress-linear__indeterminate--active .long{animation-name:query-rtl}.v-progress-linear--query.v-progress-linear--reverse .v-progress-linear__indeterminate--active .short{animation-name:query-short-rtl}.v-progress-linear--visible .v-progress-linear__indeterminate--active .long,.v-progress-linear--visible .v-progress-linear__indeterminate--active .short{animation-play-state:running}.v-progress-linear--visible .v-progress-linear__stream{animation-play-state:running}@keyframes indeterminate-ltr{0%{left:-90%;right:100%}60%{left:-90%;right:100%}100%{left:100%;right:-35%}}@keyframes indeterminate-rtl{0%{left:100%;right:-90%}60%{left:100%;right:-90%}100%{left:-35%;right:100%}}@keyframes indeterminate-short-ltr{0%{left:-200%;right:100%}60%{left:107%;right:-8%}100%{left:107%;right:-8%}}@keyframes indeterminate-short-rtl{0%{left:100%;right:-200%}60%{left:-8%;right:107%}100%{left:-8%;right:107%}}@keyframes query-ltr{0%{right:-90%;left:100%}60%{right:-90%;left:100%}100%{right:100%;left:-35%}}@keyframes query-rtl{0%{right:100%;left:-90%}60%{right:100%;left:-90%}100%{right:-35%;left:100%}}@keyframes query-short-ltr{0%{right:-200%;left:100%}60%{right:107%;left:-8%}100%{right:107%;left:-8%}}@keyframes query-short-rtl{0%{right:100%;left:-200%}60%{right:-8%;left:107%}100%{right:-8%;left:107%}}@keyframes stream-ltr{to{transform:translateX(-8px)}}@keyframes stream-rtl{to{transform:translateX(8px)}}",""]),e.exports=n},561:function(e,t,r){"use strict";r.r(t);var n=r(500),o=r(521),l=r(520),c=r(516),h=r(609),d=r(207),f=r(515),m=r(512),v=(r(11),r(7),r(10),r(16),r(9),r(17),r(2)),_=(r(5),r(27),r(28),r(558),r(330),r(64));function y(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function O(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(t){Object(v.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var k={data:function(){return{paginas:[1,2,3],numPages:0,pdfload:{},pageLoader:0,vista:"4"}},computed:O({},Object(_.c)(["dialogfase2","recursoSelect","claims","is_login"])),mounted:function(){this.recursoSelect.urlVista&&this.cargaPDF()},methods:O(O({},Object(_.b)(["vistafase2","vistaAlertas","cargaTipoalerta"])),{},{DescargarArchivo:function(){this.recursoSelect.premium&&!this.claims.premium?(this.vistaAlertas(!0),this.cargaTipoalerta(1)):this.DescargaFuncion()},cerrarVentana:function(){this.vistafase2(!1)},cambiaVista:function(p){this.vista=p},cargaPDF:function(){var e=this;this.$pdf.createLoadingTask(this.recursoSelect.urlVista).promise.then((function(t){e.numPages=t._pdfInfo.numPages}))},DescargaFuncion:function(){var e=this,t="",r="",n=new XMLHttpRequest;n.responseType="blob",n.onload=function(o){var l=n.response;switch(console.log(l.type),l.type){case"application/pdf":console.log("descarga pdf"),t=e.recursoSelect.titulo+".pdf";break;case"application/vnd.openxmlformats-officedocument.wordprocessingml.document":console.log("descarga docx"),t=e.recursoSelect.titulo+".docx";break;case"application/vnd.openxmlformats-officedocument.presentationml.presentation":case"application/vnd.ms-powerpoint":case"application/vnd.openxmlformats-officedocument.presentationml.slideshow":console.log("descarga ppt"),t=e.recursoSelect.titulo+".ppt"}URL.createObjectURL(l,{type:l.type});r=l.type,e.forceDownload(t,r)},n.open("GET",this.recursoSelect.urlDescargable),n.send()},forceDownload:function(label,e){this.$axios.get(this.recursoSelect.urlDescargable,{responseType:"blob"}).then((function(t){var r=new Blob([t.data],{type:e}),link=document.createElement("a");link.href=URL.createObjectURL(r),link.download=label,link.click(),URL.revokeObjectURL(link.href)})).catch(console.error)}})},w=r(42),component=Object(w.a)(k,(function(){var e=this,t=e._self._c;return t(h.a,{attrs:{fullscreen:"",persistent:""},model:{value:e.dialogfase2,callback:function(t){e.dialogfase2=t},expression:"dialogfase2"}},[t(o.a,[t(l.b,{staticClass:"primary white--text"},[e._v("\n      Descarga Archivo "),t(m.a),e._v(" "),t(n.a,{staticClass:"melon white--text",on:{click:function(t){return e.cerrarVentana()}}},[t(d.a,[e._v("mdi-arrow-left-bold")])],1)],1),e._v(" "),t(l.a,[t(o.a,{staticClass:"ma-auto",attrs:{"max-width":"1300"}},[t(l.a,{staticStyle:{"background-image":"url(/images/back/backstart.jpg)","background-repeat":"repeat"}},[t("h2",{staticClass:"primary--text"},[e._v(e._s(e.recursoSelect.titulo))]),e._v(" "),t("p",[e._v("\n            Por "+e._s(e.recursoSelect.nombreCreador)),t("br"),e._v("Fecha\n            "+e._s(e.$moment(e.recursoSelect.fecha).format("DD MMMM YYYY"))+"\n          ")]),e._v(" "),t(n.a,{staticClass:"melon white--text",on:{click:function(t){return e.DescargarArchivo()}}},[e._v("Descargar "),t(d.a,[e._v("mdi-download")])],1)],1),e._v(" "),t(l.b,[e._v("\n          Paginas: "+e._s(e.numPages)+" "),t(m.a),e._v(" "),t(n.a,{staticClass:"primary",on:{click:function(t){return e.cambiaVista("12")}}},[t(d.a,{staticClass:"white--text"},[e._v("mdi-border-all-variant")])],1),e._v(" "),t(n.a,{staticClass:"primary",on:{click:function(t){return e.cambiaVista("6")}}},[t(d.a,{staticClass:"white--text"},[e._v("mdi-border-all")])],1),e._v(" "),t(n.a,{staticClass:"primary",on:{click:function(t){return e.cambiaVista("4")}}},[t(d.a,{staticClass:"white--text"},[e._v("mdi-apps")])],1)],1),e._v(" "),t(l.a,[t(f.a,e._l(e.numPages,(function(r){return t(c.a,{key:r+"-pagina",staticClass:"pa-1",staticStyle:{position:"relative"},attrs:{cols:e.vista}},[t(o.a,[t(l.a,[t("client-only",[t("pdf",{staticStyle:{position:"relative","z-index":"1"},attrs:{src:e.recursoSelect.urlVista,page:r,placeholder:"Cargando..."}}),e._v(" "),e.recursoSelect.premium&&!e.claims.premium&&1!==r?t("div",{staticStyle:{position:"absolute",top:"0px",left:"0px","z-index":"10","background-color":"#fff","text-align":"center",height:"100%"}},[t("img",{staticStyle:{width:"100%"},attrs:{src:"planeacion"===e.recursoSelect.tipo?"pantallas/3Estas leyendo previsualizacion.png":"otro"===e.recursoSelect.tipo?"pantallas/7Que estas esperando.png":"pantallas/5Descubriste una funcion premium.png"}}),e._v(" "),t(n.a,{staticClass:"melon white--text",staticStyle:{"text-transform":"none"},attrs:{to:"/checkout"}},[e._v("¡Hazte Premium!")]),e._v(" "),t("br"),e._v(" "),t("br")],1):e._e()],1)],1)],1)],1)})),1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);