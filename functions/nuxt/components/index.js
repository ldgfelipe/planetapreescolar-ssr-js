export const HeadersMenu = () => import('../../components/headers/menu.vue' /* webpackChunkName: "components/headers-menu" */).then(c => wrapFunctional(c.default || c))
export const ContentBuscador = () => import('../../components/content/buscador.vue' /* webpackChunkName: "components/content-buscador" */).then(c => wrapFunctional(c.default || c))
export const ContentRecursos = () => import('../../components/content/recursos.vue' /* webpackChunkName: "components/content-recursos" */).then(c => wrapFunctional(c.default || c))
export const AdministracionUsuariosPerfilusuario = () => import('../../components/administracion/usuarios/perfilusuario.vue' /* webpackChunkName: "components/administracion-usuarios-perfilusuario" */).then(c => wrapFunctional(c.default || c))

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
