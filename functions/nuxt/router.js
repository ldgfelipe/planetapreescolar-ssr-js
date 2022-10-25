import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4aa40b33 = () => interopDefault(import('../pages/administracion.vue' /* webpackChunkName: "pages/administracion" */))
const _4199ef49 = () => interopDefault(import('../pages/administrador.vue' /* webpackChunkName: "pages/administrador" */))
const _25610d25 = () => interopDefault(import('../pages/alianzas.vue' /* webpackChunkName: "pages/alianzas" */))
const _fe7407ec = () => interopDefault(import('../pages/aviso-de-privacidad.vue' /* webpackChunkName: "pages/aviso-de-privacidad" */))
const _28e55246 = () => interopDefault(import('../pages/blog.vue' /* webpackChunkName: "pages/blog" */))
const _6cabfd6a = () => interopDefault(import('../pages/foro.vue' /* webpackChunkName: "pages/foro" */))
const _756b0c52 = () => interopDefault(import('../pages/hojas-de-trabajo.vue' /* webpackChunkName: "pages/hojas-de-trabajo" */))
const _51343758 = () => interopDefault(import('../pages/hojas-para-colorear.vue' /* webpackChunkName: "pages/hojas-para-colorear" */))
const _6dc22b2b = () => interopDefault(import('../pages/interactivos.vue' /* webpackChunkName: "pages/interactivos" */))
const _55b1d5f5 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _a4cc1da4 = () => interopDefault(import('../pages/logout.vue' /* webpackChunkName: "pages/logout" */))
const _97ac4d00 = () => interopDefault(import('../pages/material-didactico.vue' /* webpackChunkName: "pages/material-didactico" */))
const _783c3d9c = () => interopDefault(import('../pages/planeaciones.vue' /* webpackChunkName: "pages/planeaciones" */))
const _4a37f3e0 = () => interopDefault(import('../pages/politicas.vue' /* webpackChunkName: "pages/politicas" */))
const _3de7ca5a = () => interopDefault(import('../pages/populares.vue' /* webpackChunkName: "pages/populares" */))
const _aedf0ad4 = () => interopDefault(import('../pages/preguntas-frecuentes.vue' /* webpackChunkName: "pages/preguntas-frecuentes" */))
const _107005ac = () => interopDefault(import('../pages/recientes.vue' /* webpackChunkName: "pages/recientes" */))
const _423aae13 = () => interopDefault(import('../pages/recomendaciones.vue' /* webpackChunkName: "pages/recomendaciones" */))
const _204282c7 = () => interopDefault(import('../pages/register.vue' /* webpackChunkName: "pages/register" */))
const _9afeb598 = () => interopDefault(import('../pages/soporte.vue' /* webpackChunkName: "pages/soporte" */))
const _60230732 = () => interopDefault(import('../pages/terminos-y-condiciones.vue' /* webpackChunkName: "pages/terminos-y-condiciones" */))
const _18f91050 = () => interopDefault(import('../pages/adminpages/recursos.vue' /* webpackChunkName: "pages/adminpages/recursos" */))
const _493a82ea = () => interopDefault(import('../pages/adminpages/usuarios.vue' /* webpackChunkName: "pages/adminpages/usuarios" */))
const _e7eb9a44 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/administracion",
    component: _4aa40b33,
    name: "administracion"
  }, {
    path: "/administrador",
    component: _4199ef49,
    name: "administrador"
  }, {
    path: "/alianzas",
    component: _25610d25,
    name: "alianzas"
  }, {
    path: "/aviso-de-privacidad",
    component: _fe7407ec,
    name: "aviso-de-privacidad"
  }, {
    path: "/blog",
    component: _28e55246,
    name: "blog"
  }, {
    path: "/foro",
    component: _6cabfd6a,
    name: "foro"
  }, {
    path: "/hojas-de-trabajo",
    component: _756b0c52,
    name: "hojas-de-trabajo"
  }, {
    path: "/hojas-para-colorear",
    component: _51343758,
    name: "hojas-para-colorear"
  }, {
    path: "/interactivos",
    component: _6dc22b2b,
    name: "interactivos"
  }, {
    path: "/login",
    component: _55b1d5f5,
    name: "login"
  }, {
    path: "/logout",
    component: _a4cc1da4,
    name: "logout"
  }, {
    path: "/material-didactico",
    component: _97ac4d00,
    name: "material-didactico"
  }, {
    path: "/planeaciones",
    component: _783c3d9c,
    name: "planeaciones"
  }, {
    path: "/politicas",
    component: _4a37f3e0,
    name: "politicas"
  }, {
    path: "/populares",
    component: _3de7ca5a,
    name: "populares"
  }, {
    path: "/preguntas-frecuentes",
    component: _aedf0ad4,
    name: "preguntas-frecuentes"
  }, {
    path: "/recientes",
    component: _107005ac,
    name: "recientes"
  }, {
    path: "/recomendaciones",
    component: _423aae13,
    name: "recomendaciones"
  }, {
    path: "/register",
    component: _204282c7,
    name: "register"
  }, {
    path: "/soporte",
    component: _9afeb598,
    name: "soporte"
  }, {
    path: "/terminos-y-condiciones",
    component: _60230732,
    name: "terminos-y-condiciones"
  }, {
    path: "/adminpages/recursos",
    component: _18f91050,
    name: "adminpages-recursos"
  }, {
    path: "/adminpages/usuarios",
    component: _493a82ea,
    name: "adminpages-usuarios"
  }, {
    path: "/",
    component: _e7eb9a44,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
