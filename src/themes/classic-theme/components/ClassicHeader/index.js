import { default as MpPanSpatialMapClassicHeader } from './ClassicHeader.vue'

MpPanSpatialMapClassicHeader.install = (Vue) => {
  Vue.component(
    (MpPanSpatialMapClassicHeader.options &&
      MpPanSpatialMapClassicHeader.options.name) ||
      MpPanSpatialMapClassicHeader.name,
    MpPanSpatialMapClassicHeader
  )
}

export { MpPanSpatialMapClassicHeader }
