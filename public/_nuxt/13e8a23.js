(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{540:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return v}));var n=r(541),o=r(0),l=Object(o.h)("v-card__actions"),c=Object(o.h)("v-card__subtitle"),d=Object(o.h)("v-card__text"),v=Object(o.h)("v-card__title");n.a},541:function(e,t,r){"use strict";r(7),r(8),r(13),r(4),r(15),r(10),r(16);var n=r(2),o=(r(27),r(230),r(231),r(542),r(232)),l=r(544),c=r(92),d=r(9);function v(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function h(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=Object(d.a)(l.a,c.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return h(h({"v-card":!0},c.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o.a.options.computed.classes.call(this))},styles:function(){var style=h({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var e=l.a.options.methods.genProgress.call(this);return e?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[e]):null}},render:function(e){var t=this.generateRouteLink(),r=t.tag,data=t.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),e(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},542:function(e,t,r){var content=r(543);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(19).default)("e23b7040",content,!0,{sourceMap:!1})},543:function(e,t,r){var n=r(18)(!1);n.push([e.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__text,.theme--light.v-card>.v-card__subtitle{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__text,.theme--dark.v-card>.v-card__subtitle{color:rgba(255,255,255,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0px 3px 1px -2px rgba(0,0,0,.2),0px 2px 2px 0px rgba(0,0,0,.14),0px 1px 5px 0px rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;overflow-wrap:break-word;position:relative;white-space:normal}.v-card>*:first-child:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>.v-card__progress+*:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>*:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0px 0px 0px 0px rgba(0,0,0,.2),0px 0px 0px 0px rgba(0,0,0,.14),0px 0px 0px 0px rgba(0,0,0,.12) !important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(0.25, 0.8, 0.25, 1)}.v-sheet.v-card--hover:hover,.v-sheet.v-card--hover:focus{box-shadow:0px 5px 5px -3px rgba(0,0,0,.2),0px 8px 10px 1px rgba(0,0,0,.14),0px 3px 14px 2px rgba(0,0,0,.12)}.v-card--link{cursor:pointer}.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:.2s opacity}.v-card--disabled{pointer-events:none;user-select:none}.v-card--disabled>*:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0px 5px 5px -3px rgba(0,0,0,.2),0px 8px 10px 1px rgba(0,0,0,.14),0px 3px 14px 2px rgba(0,0,0,.12)}',""]),e.exports=n},544:function(e,t,r){"use strict";r(27);var n=r(1),o=(r(7),r(8),r(13),r(4),r(15),r(10),r(16),r(2)),l=(r(124),r(545),r(233)),c=r(146),d=r(42),v=r(100),h=r(234),f=r(33),m=r(0),_=r(9);function x(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var y=Object(_.a)(d.a,Object(v.b)(["absolute","fixed","top","bottom"]),h.a,f.a).extend({name:"v-progress-linear",directives:{intersect:c.a},props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0,isVisible:!0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(m.g)(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(m.g)(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var e;return e={opacity:null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity)},Object(o.a)(e,this.isReversed?"right":"left",Object(m.g)(this.normalizedValue,"%")),Object(o.a)(e,"width",Object(m.g)(Math.max(0,this.normalizedBuffer-this.normalizedValue),"%")),e},classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,"v-progress-linear--visible":this.isVisible},this.themeClasses)},computedTransition:function(){return this.indeterminate?l.c:l.d},isReversed:function(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var e={};return this.active||(e.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(e.width=Object(m.g)(this.normalizedBuffer,"%")),e}},methods:{genContent:function(){var slot=Object(m.n)(this,"default",{value:this.internalLazyValue});return slot?this.$createElement("div",{staticClass:"v-progress-linear__content"},slot):null},genListeners:function(){var e=this.$listeners;return this.reactive&&(e.click=this.onClick),e},genProgressBar:function(e){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(o.a)({},e,!0)}))},onClick:function(e){if(this.reactive){var t=this.$el.getBoundingClientRect().width;this.internalValue=e.offsetX/t*100}},onObserve:function(e,t,r){this.isVisible=r},normalize:function(e){return e<0?0:e>100?100:parseFloat(e)}},render:function(e){return e("div",{staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:{bottom:this.bottom?0:void 0,height:this.active?Object(m.g)(this.height):0,top:this.top?0:void 0},on:this.genListeners()},[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),O=y;t.a=n.a.extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(O,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},545:function(e,t,r){var content=r(546);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(19).default)("cf87dc84",content,!0,{sourceMap:!1})},546:function(e,t,r){var n=r(18)(!1);n.push([e.i,".theme--light.v-progress-linear{color:rgba(0,0,0,.87)}.theme--dark.v-progress-linear{color:#fff}.v-progress-linear{background:transparent;overflow:hidden;position:relative;transition:.2s cubic-bezier(0.4, 0, 0.6, 1);width:100%}.v-progress-linear__buffer{height:inherit;left:0;position:absolute;top:0;transition:inherit;width:100%}.v-progress-linear--reverse .v-progress-linear__buffer{left:auto;right:0}.v-progress-linear__background{bottom:0;left:0;position:absolute;top:0;transition:inherit}.v-progress-linear--reverse .v-progress-linear__background{left:auto;right:0}.v-progress-linear__content{align-items:center;display:flex;height:100%;left:0;justify-content:center;position:absolute;top:0;width:100%}.v-progress-linear--reverse .v-progress-linear__content{left:auto;right:0}.v-progress-linear__determinate{height:inherit;left:0;position:absolute;transition:inherit}.v-progress-linear--reverse .v-progress-linear__determinate{left:auto;right:0}.v-progress-linear .v-progress-linear__indeterminate .long,.v-progress-linear .v-progress-linear__indeterminate .short{animation-play-state:paused;background-color:inherit;bottom:0;height:inherit;left:0;position:absolute;right:auto;top:0;width:auto;will-change:left,right}.v-progress-linear .v-progress-linear__indeterminate--active .long{animation-name:indeterminate-ltr;animation-duration:2.2s;animation-iteration-count:infinite}.v-progress-linear .v-progress-linear__indeterminate--active .short{animation-name:indeterminate-short-ltr;animation-duration:2.2s;animation-iteration-count:infinite}.v-progress-linear--reverse .v-progress-linear__indeterminate .long,.v-progress-linear--reverse .v-progress-linear__indeterminate .short{left:auto;right:0}.v-progress-linear--reverse .v-progress-linear__indeterminate--active .long{animation-name:indeterminate-rtl}.v-progress-linear--reverse .v-progress-linear__indeterminate--active .short{animation-name:indeterminate-short-rtl}.v-progress-linear__stream{animation:stream-ltr .25s infinite linear;animation-play-state:paused;border-color:currentColor;border-top:4px dotted;bottom:0;left:auto;right:-8px;opacity:.3;pointer-events:none;position:absolute;top:calc(50% - 2px);transition:inherit}.v-progress-linear--reverse .v-progress-linear__stream{animation:stream-rtl .25s infinite linear;left:-8px;right:auto}.v-progress-linear__wrapper{overflow:hidden;position:relative;transition:inherit}.v-progress-linear--absolute,.v-progress-linear--fixed{left:0;z-index:1}.v-progress-linear--absolute{position:absolute}.v-progress-linear--fixed{position:fixed}.v-progress-linear--reactive .v-progress-linear__content{pointer-events:none}.v-progress-linear--rounded{border-radius:4px}.v-progress-linear--striped .v-progress-linear__determinate{background-image:linear-gradient(135deg, rgba(255, 255, 255, 0.25) 25%, transparent 0, transparent 50%, rgba(255, 255, 255, 0.25) 0, rgba(255, 255, 255, 0.25) 75%, transparent 0, transparent);background-size:40px 40px;background-repeat:repeat}.v-progress-linear--query .v-progress-linear__indeterminate--active .long{animation-name:query-ltr;animation-duration:2s;animation-iteration-count:infinite}.v-progress-linear--query .v-progress-linear__indeterminate--active .short{animation-name:query-short-ltr;animation-duration:2s;animation-iteration-count:infinite}.v-progress-linear--query.v-progress-linear--reverse .v-progress-linear__indeterminate--active .long{animation-name:query-rtl}.v-progress-linear--query.v-progress-linear--reverse .v-progress-linear__indeterminate--active .short{animation-name:query-short-rtl}.v-progress-linear--visible .v-progress-linear__indeterminate--active .long,.v-progress-linear--visible .v-progress-linear__indeterminate--active .short{animation-play-state:running}.v-progress-linear--visible .v-progress-linear__stream{animation-play-state:running}@keyframes indeterminate-ltr{0%{left:-90%;right:100%}60%{left:-90%;right:100%}100%{left:100%;right:-35%}}@keyframes indeterminate-rtl{0%{left:100%;right:-90%}60%{left:100%;right:-90%}100%{left:-35%;right:100%}}@keyframes indeterminate-short-ltr{0%{left:-200%;right:100%}60%{left:107%;right:-8%}100%{left:107%;right:-8%}}@keyframes indeterminate-short-rtl{0%{left:100%;right:-200%}60%{left:-8%;right:107%}100%{left:-8%;right:107%}}@keyframes query-ltr{0%{right:-90%;left:100%}60%{right:-90%;left:100%}100%{right:100%;left:-35%}}@keyframes query-rtl{0%{right:100%;left:-90%}60%{right:100%;left:-90%}100%{right:-35%;left:100%}}@keyframes query-short-ltr{0%{right:-200%;left:100%}60%{right:107%;left:-8%}100%{right:107%;left:-8%}}@keyframes query-short-rtl{0%{right:100%;left:-200%}60%{right:-8%;left:107%}100%{right:-8%;left:107%}}@keyframes stream-ltr{to{transform:translateX(-8px)}}@keyframes stream-rtl{to{transform:translateX(8px)}}",""]),e.exports=n},549:function(e,t,r){"use strict";r.r(t);var n=r(541),o=r(540),l=r(536),c=r(214),d=r(535),v=(r(28),r(64),r(7),r(8),r(13),r(15),r(10),r(16),r(79)),h=r(2),f=(r(4),r(185),r(77),r(56));function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function _(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(h.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var x={data:function(){return{}},computed:_({},Object(f.d)(["dialogfase1","recursoSelect","userdatacollect"])),methods:_(_({},Object(f.c)(["seleccionaRecurso","agregaRelacionados","vistafase1","camiaStatusAudio"])),{},{SelectRecurso:function(p){var e=this;this.seleccionaRecurso(p),"audio"===p.tipoRecurso&&this.camiaStatusAudio(!0),new Promise((function(t){var r=Object(v.a)(e.items),n=r.indexOf(p);!1===e.dialogfase1?r.splice(n,1):(r.push(e.recursoSelect),r.splice(n,1),e.scrollToTop()),t(r)})).then((function(t){e.agregaRelacionados(t),e.vistafase1(!0)}))},scrollToTop:function(){console.log("Scroll data"),window.scrollTo(0,0)},ncomentarios:function(p){var e=0;return p.length>0&&p.map((function(t){!0===t.status&&(e+=1)})),e},addfavoritos:function(p){var e=p,t=e.favoritos.indexOf(this.userdatacollect.uid);t<=0?(e.favoritos.push(this.userdatacollect.uid),this.$fire.firestore.collection("CATEGORIAS").doc(p.idRecurso).update(e).then((function(e){}))):(e.favoritos.splice(t,1),this.$fire.firestore.collection("CATEGORIAS").doc(p.idRecurso).update(e).then((function(e){})))}}),props:{items:[]}},y=(r(554),r(41)),component=Object(y.a)(x,(function(){var e=this,t=e._self._c;return t("div",[t(d.a,e._l(e.items,(function(r,d){return t(l.a,{key:"recurso"+d,attrs:{cols:"12",xl:"2",lg:"3",md:"3",sm:"4",xs:"6"}},[t(n.a,{attrs:{elevation:"0"}},[t(o.a,{staticClass:"pa-0 grey areaRecurso"},["link"!==r.tipoRecurso?t("div",{class:r.premium?"labeltp labelPremium":" labeltp labelFree",attrs:{elevation:"2"}},[e._v("\n            "+e._s(r.premium?"PREMIUM":"FREE")+"\n          ")]):e._e(),e._v(" "),"link"===r.tipoRecurso?t("div",{staticClass:"videoBtn",on:{click:function(t){return e.SelectRecurso(r)}}},[t(c.a,{staticClass:"white--text"},[e._v("mdi-arrow-expand")])],1):e._e(),e._v(" "),r.comentarios?t("div",{staticClass:"commentchip"},[e._v("\n           "+e._s(e.ncomentarios(r.comentarios))+" "),t(c.a,{staticClass:"melon--text icono"},[e._v("mdi-chat")])],1):e._e(),e._v(" "),t("div",{staticClass:"favoritosicon",on:{click:function(t){return e.addfavoritos(r)}}},[t(c.a,{staticClass:"melon--text iconofav"},[e._v(e._s(r.favoritos&&r.favoritos.length>0&&r.favoritos.indexOf(e.userdatacollect.uid)>0?"mdi-cards-heart":"mdi-cards-heart-outline"))])],1),e._v(" "),"link"===r.tipoRecurso?t("iframe",{attrs:{width:"auto",height:"auto",src:r.urlVista.replace("watch?v=","embed/"),frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}):e._e(),e._v(" "),"link"!==r.tipoRecurso?t("img",{attrs:{src:r.urlImagen,height:"100%"},on:{click:function(t){return e.SelectRecurso(r)}}}):e._e()]),e._v(" "),t(o.a,[e._v("\n          "+e._s(r.tipoRecurso)+"\n          "+e._s(r.tipo)+"\n          "),t("h3",[e._v(e._s(r.titulo))]),e._v(" "),t("p",[e._v(e._s(r.sinopsis?r.sinopsis.substr(0,109):""))])])],1)],1)})),1)],1)}),[],!1,null,null,null);t.default=component.exports},550:function(e,t,r){var content=r(555);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(19).default)("034df2fa",content,!0,{sourceMap:!1})},554:function(e,t,r){"use strict";r(550)},555:function(e,t,r){var n=r(18)(!1);n.push([e.i,"\n.areaRecurso {\n  height: 150px;\n  text-align: center;\n  overflow: hidden;\n  cursor: pointer;\n}\n.areaRecurso:hover {\n  opacity: 0.8;\n  position:relative;\n}\n.spminirecurso {\n  background-color: grey;\n  border: solid #f6f7f8 1px;\n}\n.labeltp {\n  position: absolute;\n  z-index: 1;\n  right: 3px;\n  top: 3px;\n  width: 80px;\n  border-radius: 5px;\n  font-size: 10px;\n  color: #fff;\n}\n.labelPremium {\n  background-color: #ff6c5c;\n}\n.labelFree {\n  background-color: #ad227d;\n}\n.videoBtn{\n  border-radius:50%;\n  width:30px;\n  height:30px;\n  position:absolute;\n  z-index:2;\n  top:3px;\n  left:3px;\n  background-color:#ad227d;\n  color:#fff;\n  padding:1px;\n}\n.commentchip{\n  border-radius:5px;\n  width:50px;\n  height:20px;\n  position:absolute;\n  z-index:2;\n  top:120px;\n  font-size:10px;\n  right:3px;\n  background-color:#fff;\n  color:#000;\n  padding:1px;\n}\n.commentchip .icono{\n  font-size:16px;\n}\n.favoritosicon{\n  border-radius:5px;\n  width:25px;\n  height:20px;\n  position:absolute;\n  z-index:2;\n  top:120px;\n  font-size:10px;\n  left:3px;\n  background-color:#fff;\n  color:#000;\n  padding:1px;\n}\n.favoritosicon .iconofav{\n  font-size:16px;\n}\n",""]),e.exports=n}}]);