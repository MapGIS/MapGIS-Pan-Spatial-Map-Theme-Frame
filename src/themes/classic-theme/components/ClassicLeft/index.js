import { default as MpPanSpatialMapClassicLeft } from './ClassicLeft.vue'

MpPanSpatialMapClassicLeft.install = (Vue) => {
  Vue.component(
    (MpPanSpatialMapClassicLeft.options &&
      MpPanSpatialMapClassicLeft.options.name) ||
      MpPanSpatialMapClassicLeft.name,
      MpPanSpatialMapClassicLeft
  )
}

export { MpPanSpatialMapClassicLeft }
