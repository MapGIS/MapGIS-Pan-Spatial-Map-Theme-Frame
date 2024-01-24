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
    // 判断是否已经注册过，已经注册过则不再注册
    if (
      !(
        typeof Vue.component(
          (component.options && component.options.name) || component.name
        ) === 'function'
      )
    ) {
      Vue.use(component)
    }else{
      console.warn(`组件${(component.options && component.options.name) || component.name}已注册`)
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
