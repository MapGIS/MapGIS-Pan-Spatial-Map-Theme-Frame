import { default as MpPanSpatialMapClassicToolbar } from './ClassicToolbar.vue'

MpPanSpatialMapClassicToolbar.install = (Vue) => {
  Vue.component(
    (MpPanSpatialMapClassicToolbar.options &&
      MpPanSpatialMapClassicToolbar.options.name) ||
      MpPanSpatialMapClassicToolbar.name,
      MpPanSpatialMapClassicToolbar
  )
}

export { MpPanSpatialMapClassicToolbar }
