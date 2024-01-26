import {
  MpPanSpatialMapHeader,
  MpPanSpatialMapSideMenu,
  MpPanSpatialMapFooter,
  MpPanSpatialMapSidePanel,
  MpPanSpatialMapToolbarButton,
  MpPanSpatialMapToolbarCard,
} from '../components'

import { MpPanSpatialMapClassicHeader } from './classic-theme/components/ClassicHeader'
import { MpPanSpatialMapClassicLeft } from './classic-theme/components/ClassicLeft'
import { MpPanSpatialMapClassicToolbar } from './classic-theme/components/ClassicToolbar'
import { MpPanSpatialMapClassicTheme } from './classic-theme'

const components = [
  MpPanSpatialMapClassicHeader,
  MpPanSpatialMapClassicLeft,
  MpPanSpatialMapClassicToolbar,
  MpPanSpatialMapClassicTheme,
  MpPanSpatialMapHeader,
  MpPanSpatialMapSideMenu,
  MpPanSpatialMapFooter,
  MpPanSpatialMapSidePanel,
  MpPanSpatialMapToolbarButton,
  MpPanSpatialMapToolbarCard,
]

const install = (Vue, opts = {}) => {
  components.forEach((component) => {
    const registerName = component.options
      ? component.options.name
      : component.name
    if (registerName in Vue.options.components) {
      console.warn(`发现同名组件${registerName},已取消该组件注册`)
    } else {
      Vue.use(component)
    }
  })

  if (opts.components) {
    for (const key in opts.components) {
      if (Object.hasOwnProperty.call(opts.components, key)) {
        const component = opts.components[key]
        Vue.component(key, component)
      }
    }

    setExternalLayoutElementComponents(opts.components)
  }
}

if (typeof window !== 'undefined' && window['MapgisApplicationVueRuntime']) {
  install(window['MapgisApplicationVueRuntime'], {})
}

export default {
  install,
}
