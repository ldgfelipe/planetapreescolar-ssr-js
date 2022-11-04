export const ContentBuscador = () => import('../../components/content/buscador.vue' /* webpackChunkName: "components/content-buscador" */).then(c => wrapFunctional(c.default || c))
export const HeadersMenu = () => import('../../components/headers/menu.vue' /* webpackChunkName: "components/headers-menu" */).then(c => wrapFunctional(c.default || c))
export const HeadersMenuperfil = () => import('../../components/headers/menuperfil.vue' /* webpackChunkName: "components/headers-menuperfil" */).then(c => wrapFunctional(c.default || c))
export const Recursos = () => import('../../components/recursos/recursos.vue' /* webpackChunkName: "components/recursos" */).then(c => wrapFunctional(c.default || c))
export const AdministracionUsuariosContador = () => import('../../components/administracion/usuarios/contador.vue' /* webpackChunkName: "components/administracion-usuarios-contador" */).then(c => wrapFunctional(c.default || c))
export const AdministracionUsuariosPerfilusuario = () => import('../../components/administracion/usuarios/perfilusuario.vue' /* webpackChunkName: "components/administracion-usuarios-perfilusuario" */).then(c => wrapFunctional(c.default || c))
export const RecursosAlertas = () => import('../../components/recursos/alertas/alertas.vue' /* webpackChunkName: "components/recursos-alertas" */).then(c => wrapFunctional(c.default || c))
export const RecursosPfase1Tipo1 = () => import('../../components/recursos/pfase1/tipo1.vue' /* webpackChunkName: "components/recursos-pfase1-tipo1" */).then(c => wrapFunctional(c.default || c))
export const RecursosPfase1Tipo2 = () => import('../../components/recursos/pfase1/tipo2.vue' /* webpackChunkName: "components/recursos-pfase1-tipo2" */).then(c => wrapFunctional(c.default || c))
export const RecursosPfase1Tipo3 = () => import('../../components/recursos/pfase1/tipo3.vue' /* webpackChunkName: "components/recursos-pfase1-tipo3" */).then(c => wrapFunctional(c.default || c))
export const RecursosPfase2Tipo1 = () => import('../../components/recursos/pfase2/tipo1.vue' /* webpackChunkName: "components/recursos-pfase2-tipo1" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
