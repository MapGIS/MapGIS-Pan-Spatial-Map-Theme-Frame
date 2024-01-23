import { default as MpPanSpatialMapFooter } from './Footer.vue'

MpPanSpatialMapFooter.install = (Vue) => {
  Vue.component(
    (MpPanSpatialMapFooter.options && MpPanSpatialMapFooter.options.name) ||
      MpPanSpatialMapFooter.name,
    MpPanSpatialMapFooter
  )
}

export { MpPanSpatialMapFooter }
