import {
  setExternalLayoutElementComponents,
  MpPanSpatialMapExampleFooter,
  MpPanSpatialMapExampleHeader,
  MpPanSpatialMapExampleSideMenu,
  MpPanSpatialMapExampleToolListButton,
} from './components'

import {
  MpPanSpatialMapExampleTheme,
  MpPanSpatialMapExampleThemeHeader,
  MpPanSpatialMapExampleThemeLeft,
  MpPanSpatialMapExampleThemeRight,
  MpPanSpatialMapExampleThemeToolList,
  ExampleToolbox,
} from './themes'

const components = [
  MpPanSpatialMapExampleFooter,
  MpPanSpatialMapExampleHeader,
  MpPanSpatialMapExampleSideMenu,
  MpPanSpatialMapExampleToolListButton,
  MpPanSpatialMapExampleTheme,
  MpPanSpatialMapExampleThemeHeader,
  MpPanSpatialMapExampleThemeLeft,
  MpPanSpatialMapExampleThemeRight,
  MpPanSpatialMapExampleThemeToolList,
  ExampleToolbox,
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
