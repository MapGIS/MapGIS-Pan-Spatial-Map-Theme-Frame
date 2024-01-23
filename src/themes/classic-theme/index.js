import { default as MpPanSpatialMapClassicTheme } from './classic-theme.vue'

MpPanSpatialMapClassicTheme.install = (Vue) => {
  Vue.component(
    (MpPanSpatialMapClassicTheme.options &&
      MpPanSpatialMapClassicTheme.options.name) ||
      MpPanSpatialMapClassicTheme.name,
    MpPanSpatialMapClassicTheme
  )
}

export { MpPanSpatialMapClassicTheme }
