import {
  setExternalLayoutElementComponents,
  MpPanSpatialMapFooter,
  MpPanSpatialMapHeaderDcd,
  MpPanSpatialMapSideMenuDcd,
  MpPanSpatialMapToolListButtonDcd,
} from './components'

import {
  MpPanSpatialMapClassicThemeExample,
  MpPanSpatialMapClassicHeaderDcd,
  MpPanSpatialMapClassicLeftDcd,
  MpPanSpatialMapClassicRightDcd,
  MpPanSpatialMapClassicToolListDcd,
  MpToolbox,
} from './themes'

const components = [
  MpPanSpatialMapFooter,
  MpPanSpatialMapHeaderDcd,
  MpPanSpatialMapSideMenuDcd,
  MpPanSpatialMapToolListButtonDcd,
  MpPanSpatialMapClassicThemeExample,
  MpPanSpatialMapClassicHeaderDcd,
  MpPanSpatialMapClassicLeftDcd,
  MpPanSpatialMapClassicRightDcd,
  MpPanSpatialMapClassicToolListDcd,
  MpToolbox,
]

const install = (Vue, opts = {}) => {
  components.forEach((component) => {
    Vue.component(
      (component.options && component.options.name) || component.name,
      component
    )
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

export default {
  install,
}
